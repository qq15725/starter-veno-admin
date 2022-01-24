<route lang="yaml">
meta:
  layout: auth
  requiresAuth: false
</route>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = ref({
  username: 'admin',
  password: 'admin'
})

async function login () {
  await auth.login(form.value.username, form.value.password)
  router.push('/')
}
</script>

<template>
  <ve-card width="400" class="mx-auto p-6" style="margin-top: 120px;">
    <ve-h3>Veno Admin</ve-h3>
    <div class="mb-5 text-medium-emphasis">中后台解决方案</div>
    <ve-form @submit="login">
      <ve-input v-model="form.username" prefix-icon="mdi-account-outline" name="username" placeholder="请输入用户名" />
      <ve-input v-model="form.password" prefix-icon="mdi-lock-outline" name="password" type="password" placeholder="请输入密码" />
      <ve-spacer gutter="xs">
        <ve-checkbox label="自动登录" />
        <ve-link text="忘记密码" color="primary" />
      </ve-spacer>
      <ve-button class="my-6" color="primary" block type="submit" text="登录" />
      <div class="d-flex">
        <ve-spacer />
        <ve-link text="注册账号" color="primary" />
      </div>
    </ve-form>
  </ve-card>
</template>