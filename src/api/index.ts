import { http } from '@/plugins/http'

export type Api = typeof api

const api = {
  // 获取菜单列表
  getMenus: () => http.get('/menus') as Promise<any[]>
}

export default api