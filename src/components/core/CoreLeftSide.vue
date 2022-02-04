<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>

<template>
  <ve-drawer v-model="app.leftDrawerActive" theme="dark" width="220">
    <ve-header-title class="mt-3 text-center">Veno Admin</ve-header-title>

    <ve-list nav density="high" :items="app.menus" />
  </ve-drawer>
</template>