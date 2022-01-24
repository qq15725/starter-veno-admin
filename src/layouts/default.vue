<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<template>
  <ve-app style="min-height: 100vh;">
    <!-- 左侧边栏 -->
    <core-left-side />

    <!-- 右侧边栏 -->
    <ve-drawer v-model="appStore.rightDrawerActive" width="200" anchor="right" temporary />

    <!-- 头部 -->
    <core-header />

    <!-- 主体部分 -->
    <ve-main style="background: #f5f5f5;">
      <ve-container>
        <router-view #default="{ Component }">
          <ve-fade-transition hide-on-leave>
            <component :is="Component" />
          </ve-fade-transition>
        </router-view>
      </ve-container>
    </ve-main>
  </ve-app>
</template>