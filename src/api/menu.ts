// 导入工具函数
import { http } from '@/plugins/http'

// 获取菜单列表
export function getMenus () {
  return http.get('/menus') as Promise<any[]>
}