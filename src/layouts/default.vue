<template>
  <ve-app style="min-height: 100vh;">
    <!-- 左侧边栏 -->
    <ve-sider width="250">
      <ve-header-title>Veno Admin</ve-header-title>
      <ve-list nav density="compact" :items="menus" />
    </ve-sider>

    <!-- 右侧边栏 -->
    <ve-sider v-model="opened" width="200" side="right" temporary />

    <!-- 头部 -->
    <ve-header border>
      <ve-header-nav-icon />

      <ve-breadcrumb class="ml-3">
        <ve-breadcrumb-item>Dashboard</ve-breadcrumb-item>
        <ve-breadcrumb-item>主控台</ve-breadcrumb-item>
      </ve-breadcrumb>

      <ve-spacer />

      <ve-header-items>
        <ve-avatar shape="round" color="primary" size="xs" text="admin" />

        <ve-button @click="opened = !opened" class="ml-3" icon="$setting" variant="text" />
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
      opened: ref(false),
      menus: ref([
        {
          prependIcon: '$dashboard',
          title: 'dashboard',
          children: [
            { title: '主控台', to: '/dashboard/console' },
            { title: '工作台', to: '/dashboard/workplace' },
          ]
        },
        {
          prependIcon: '$data', title: '数据表格', to: '/table' },
      ])
    }
  }
})
</script>