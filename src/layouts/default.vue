<template>
  <ve-app style="min-height: 100vh;">
    <!-- 左侧边栏 -->
    <ve-sider v-model="leftSiderOpened" theme="dark" width="250">
      <ve-header-title class="text-white">Veno Admin</ve-header-title>
      <ve-list nav density="compact" :items="menus" />
    </ve-sider>

    <!-- 右侧边栏 -->
    <ve-sider v-model="rightSiderOpened" width="200" side="right" temporary />

    <!-- 头部 -->
    <ve-header border>
      <ve-header-nav-icon @click="leftSiderOpened = !leftSiderOpened" />

      <ve-breadcrumb class="ml-3">
        <ve-breadcrumb-item>Dashboard</ve-breadcrumb-item>
        <ve-breadcrumb-item>主控台</ve-breadcrumb-item>
      </ve-breadcrumb>

      <ve-spacer />

      <ve-header-items>
        <ve-tooltip text="在 Github 中查看" #activator="{ props }">
          <ve-button
              v-bind="props"
              href="https://github.com/qq15725/veno-admin"
              target="_blank"
              icon="svg:M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              variant="text"
              class="ml-3"
          />
        </ve-tooltip>

        <ve-avatar
            shape="round"
            color="primary"
            class="ml-3"
            size="xs"
            text="admin"
        />

        <ve-button
            @click="rightSiderOpened = !rightSiderOpened"
            class="ml-3"
            icon="$setting"
            variant="text"
        />
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
      rightSiderOpened: ref(false),
      leftSiderOpened: ref(),
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