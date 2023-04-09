<script setup lang="ts">
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header />
    <Hero />
  </div>
</template>

<style scoped>
.app-wrapper {
  @apply px-12 md:px-32 xl:px-48
}
</style>
