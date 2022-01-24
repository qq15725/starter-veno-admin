<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

const router= useRouter()
const auth = useAuthStore()
const app = useAppStore()

function logout () {
  auth.logout()
  router.replace('/auth/login')
}
</script>

<template>
  <ve-header border>
    <ve-header-nav-icon @click="app.leftDrawerActive = !app.leftDrawerActive" />

    <!-- TODO 底层库直接支持 -->
    <core-breadcrumb class="ml-3" />

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
          @click="app.rightDrawerActive = !app.rightDrawerActive"
          class="ml-3"
          icon="$setting"
          variant="text"
      />
    </ve-header-items>

    <ve-menu open-on-hover>
      <template #activator="{ props }">
        <ve-avatar
            v-bind="props"
            shape="round"
            color="primary"
            class="ml-3"
            size="xs"
            :text="auth.user.username"
            style="cursor: pointer;"
        />
      </template>

      <ve-card>
        <ve-list density="compact">
          <ve-list-item link>修改密码</ve-list-item>
          <ve-list-item link @click="logout">退出登录</ve-list-item>
        </ve-list>
      </ve-card>
    </ve-menu>
  </ve-header>
</template>