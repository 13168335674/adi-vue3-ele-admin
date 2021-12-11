<template>
  <div class="dashboard-container scroll-y">dashboard</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const roles = computed(() => {
  return store.state.user.roles
})
</script>

<style scoped lang="scss"></style>
