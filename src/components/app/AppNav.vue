<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  const app = useAppStore()
</script>

<template>
  <ve-drawer
    v-model="app.leftDrawerActive"
    theme="dark"
    width="220"
    show-toggler
  >
    <ve-scrollbar>
      <ve-header-title class="mt-3 text-center">VenoAdmin</ve-header-title>

      <ve-list
        nav
        :items="app.menus"
      />
    </ve-scrollbar>
  </ve-drawer>
</template>
