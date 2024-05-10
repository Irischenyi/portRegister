<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <q-input filled  :label="name" />
</template>

<style scoped>

</style>
