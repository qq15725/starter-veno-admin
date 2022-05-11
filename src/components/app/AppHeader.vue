<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/stores/app'
  import { useAuthStore } from '@/stores/auth'

  const router = useRouter()
  const auth = useAuthStore()
  const app = useAppStore()

  function logout() {
    auth.logout()
    router.replace('/auth/login')
  }
</script>

<template>
  <ve-header border>
    <ve-header-nav-icon class="d-sm-none" @click="app.leftDrawerActive = !app.leftDrawerActive" />

    <!-- TODO 底层库直接支持 -->
    <app-breadcrumb class="ml-3" />

    <ve-spacer />

    <ve-toolbar-items variant="text">
      <ve-tooltip text="在 Github 中查看">
        <template #activator="{ props }">
          <ve-button
            v-bind="props"
            href="https://github.com/qq15725/veno-admin"
            target="_blank"
            icon="tabler-brand-github"
            class="ml-3"
          />
        </template>
      </ve-tooltip>

      <ve-button
        class="ml-3"
        icon="tabler-settings"
        @click="app.rightDrawerActive = !app.rightDrawerActive"
      />
    </ve-toolbar-items>

    <ve-menu open-on-hover>
      <template #activator="{ props }">
        <ve-avatar
          v-bind="props"
          color="primary"
          class="ml-3"
          :text="auth.user.username"
          link
        />
      </template>

      <ve-list>
        <ve-list-item link>修改密码</ve-list-item>
        <ve-list-item link @click="logout">退出登录</ve-list-item>
      </ve-list>
    </ve-menu>
  </ve-header>
</template>
