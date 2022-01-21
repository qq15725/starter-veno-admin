<template>
  <ve-container>
    <ve-table
        :headers="headers"
    />
  </ve-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      headers: ref([
        { text: 'Name', value: 'name' },
        { text: 'Salary', value: 'salary' },
        { text: 'Address', value: 'address' },
        { text: 'Email', value: 'email' },
      ])
    }
  }
})
</script>