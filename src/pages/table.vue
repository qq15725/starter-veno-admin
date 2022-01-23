<template>
  <div>
    <ve-table
        :headers="headers"
    />
  </div>
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