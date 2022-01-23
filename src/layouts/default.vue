<template>
  <ve-app style="min-height: 100vh;">
    <!-- 左侧边栏 -->
    <ve-drawer v-model="leftSiderOpened" theme="dark" width="220">
      <ve-header-title class="mt-3 text-center">Veno Admin</ve-header-title>
      <ve-list nav density="compact" :items="menus" />
    </ve-drawer>

    <!-- 右侧边栏 -->
    <ve-drawer v-model="rightSiderOpened" width="200" anchor="right" temporary />

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
              icon="mdi-github"
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
import { useAppStore } from '@/stores/app'

export default defineComponent({
  setup () {
    const appStore = useAppStore()

    return {
      rightSiderOpened: ref(false),
      leftSiderOpened: ref(),
      menus: appStore.menus
    }
  }
})
</script>