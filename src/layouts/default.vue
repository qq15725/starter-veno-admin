<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<template>
  <!-- 页面加载进度条 -->
  <app-progress />

  <!-- 应用导航 -->
  <app-nav />

  <!-- 右侧边栏 -->
  <ve-drawer v-model="appStore.rightDrawerActive" width="200" anchor="right" temporary />

  <!-- 应用头部 -->
  <app-header />

  <!-- 应用主体 -->
  <ve-main>
    <ve-container class="p-6">
      <router-view #default="{ Component }">
        <ve-fade-transition hide-on-leave>
          <component :is="Component" />
        </ve-fade-transition>
      </router-view>
    </ve-container>
  </ve-main>
</template>