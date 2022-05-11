// Utils
import { computed, onMounted, ref } from 'vue'
import qs from 'qs'

// Composables
import { useHttp } from './http'

interface TableProps {
  // 请求基础地址
  requestBaseURL: string
  // 请求函数
  request: (url: string, query?: Record<string, any>) => Promise<Record<string, any>>
  // 表头
  headers?: Record<string, any>[]
  // 分页器默认属性
  pagination: {
    // 显示每页条数选择器
    showPerPageSelect?: boolean
    // 每页条数可选项列表 [10, 20, 50, 100]
    perPageOptions?: number[]
    // 显示快速跳页
    showQuickJumper?: boolean
  }
  // 通过响应的内容转化为分页数据
  responseToPagination: (response: Record<string, any>) => {
    page: string | number
    perPage: string | number
    total: string | number
  }
  // 通过响应的内容转化为表格数据
  responseToItems: (response: Record<string, any>) => Record<string, any>[]
  // 通过表选项的变化（分页切换，排序切换）转化为请求需要的 query string
  optionsToRequestQuery: (options: Record<string, any>) => Record<string, any>
}

function useTable(props: TableProps) {
  const pagination = ref({ ...props.pagination })
  const items = ref<ReturnType<TableProps['responseToItems']>>([])
  const loading = ref(false)

  const fetch = async (query?: Record<string, any>) => {
    loading.value = true
    const response = await props.request(props.requestBaseURL, query)
    items.value = props.responseToItems(response)
    pagination.value = {
      ...props.pagination,
      ...props.responseToPagination(response),
    }
    loading.value = false
  }

  onMounted(() => fetch())

  const tableProps = computed(() => ({
    'remote': true,
    'headers': props.headers,
    'items': items.value,
    'loading': loading.value,
    'pagination': pagination.value,
    'onUpdate:options': (options: Record<string, any>) => {
      return fetch(props.optionsToRequestQuery(options))
    },
  }))

  return {
    fetch,
    loading,
    tableProps,
  }
}

/**
 * 使用 Laravel 作为数据后端的表格
 *
 * @param props
 */
export function useLaravelTable(props: Pick<TableProps, 'requestBaseURL' | 'headers'>) {
  const http = useHttp()

  return useTable({
    ...props,
    request: async (url, query) => {
      const [baseURL, baseQuery] = url.split('?', 2)
      const requestQuery = qs.stringify({ ...qs.parse(baseQuery), ...query })
      const requestUrl = `${ baseURL }?${ requestQuery }`
      return await http.get(requestUrl) as Record<string, any>
    },
    pagination: {
      showPerPageSelect: true,
      perPageOptions: [10, 20, 50, 100],
      showQuickJumper: true,
    },
    responseToPagination: ({ meta }) => ({
      page: meta.current_page,
      perPage: meta.per_page,
      total: meta.total,
    }),
    responseToItems: ({ data }) => data,
    optionsToRequestQuery: options => ({
      page: options.pagination.page,
      per_page: options.pagination.perPage,
    }),
  })
}
