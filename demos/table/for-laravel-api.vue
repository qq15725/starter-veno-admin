<route lang="yaml">
meta:
  title: 基于 Laravel Api 作为数据来源的表格
</route>

<script lang="ts" setup>
  import { useLaravelTable } from '@/composables/table'

  const { tableProps } = useLaravelTable({
    requestBaseURL: 'https://cps.fdota.com/products?per_page=10',
    headers: [
      { text: '标题', value: 'title' },
      { text: '价格', value: 'coupons.0.coupon_product.price' },
    ],
  })
</script>

<template>
  <ve-table v-bind="tableProps" />
</template>
