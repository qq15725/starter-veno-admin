<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const app = useAppStore()
const route = useRoute()

// 根据菜单生成面包屑导航
const breadcrumb = computed(() => {
  function handle (prev, raw) {
    const item = { title: raw.title, to: raw.to }
    if (prev.actived) return prev
    if (raw.children) {
      const res = raw.children.reduce(handle, {
        ctx: [...prev.ctx, item], actived: false
      })
      if (res.actived) return res
    }
    if (route.path.indexOf(raw.to) > -1) return { ctx: [...prev.ctx, item], actived: true }
    return prev
  }

  return app.menus?.reduce(handle, { ctx: [], actived: false }).ctx
})
</script>

<template>
  <ve-breadcrumb>
    <ve-breadcrumb-item v-for="item in breadcrumb">{{ item.title }}</ve-breadcrumb-item>
  </ve-breadcrumb>
</template>