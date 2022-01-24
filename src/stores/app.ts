// 导入工具函数
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 导入接口
import { getMenus } from '@/api/menu'

export const useAppStore = defineStore('app', () => {
  const menus = ref<any[] | null>(null)

  return {
    // 页面加载
    pageLoading: ref(false),
    // 左侧抽屉是否激活
    leftDrawerActive: ref(true),
    // 右侧抽屉是否激活
    rightDrawerActive: ref(false),
    // 菜单
    menus,
    // 刷新菜单
    refreshMenus: async () => menus.value = await getMenus(),
  }
})
