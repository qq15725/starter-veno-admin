<template>
  <ve-app style="min-height: 100vh;">
    <!-- 侧边栏 -->
    <ve-sider width="200">
      <ve-header-title>Veno Admin</ve-header-title>
      <ve-list nav density="compact" :items="menus" />
    </ve-sider>

    <!-- 头部 -->
    <ve-header border>
      <ve-header-nav-icon />

      <ve-breadcrumb class="ml-3">
        <ve-breadcrumb-item>Dashboard</ve-breadcrumb-item>
        <ve-breadcrumb-item>主控台</ve-breadcrumb-item>
      </ve-breadcrumb>

      <ve-spacer />

      <ve-header-items>
        <ve-avatar shape="round" color="primary" text="admin" />

        <ve-button class="ml-3" icon="veno-ui:$close" variant="text" />
      </ve-header-items>
    </ve-header>

    <!-- 主体部分 -->
    <ve-main style="background: #f5f5f5;">
      <router-view #default="{ Component }">
        <ve-fade-transition hide-on-leave>
          <component :is="Component" />
        </ve-fade-transition>
      </router-view>
    </ve-main>
  </ve-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      menus: ref([
        {
          title: 'dashboard',
          children: [
            { title: '主控台', to: '/dashboard/console' },
            { title: '工作台', to: '/dashboard/workplace' },
          ]
        },
        { title: '数据表格', to: '/table' },
      ])
    }
  }
})
</script>