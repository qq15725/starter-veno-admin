<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<template>
  <ve-header border>
    <ve-header-nav-icon @click="appStore.leftDrawerActive = !appStore.leftDrawerActive" />

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

      <ve-button
          @click="appStore.rightDrawerActive = !appStore.rightDrawerActive"
          class="ml-3"
          icon="$setting"
          variant="text"
      />
    </ve-header-items>

    <ve-menu>
      <template #activator="{ props }">
        <ve-avatar
            v-bind="props"
            shape="round"
            color="primary"
            class="ml-3"
            size="xs"
            text="admin"
        />
      </template>

      <ve-card>
        <ve-list>
          <ve-list-item link>修改密码</ve-list-item>
          <ve-list-item link>退出登录</ve-list-item>
        </ve-list>
      </ve-card>
    </ve-menu>
  </ve-header>
</template>