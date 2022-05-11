import type { App, InjectionKey } from 'vue'

// 从 app 实例中注入需要的
export function appInject(app: App, key: InjectionKey<any> | string) {
  const provides = app._context.provides
  if (provides && (key as any) in provides) {
    return provides[key as string]
  }
}
