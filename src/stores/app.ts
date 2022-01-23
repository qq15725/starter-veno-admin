// 导入工具函数
import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'

export const useAppStore = defineStore('app', () => {
  const pageLoading = ref(false)
  const menus = ref<any[] | null>(null)

  async function fetchMenus () {
    menus.value = await api.getMenus()
  }

  return {
    pageLoading,
    menus,
    fetchMenus
  }
})
