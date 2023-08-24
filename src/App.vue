<script setup lang="ts">
import HeroPage from "./components/HeroPage.vue";
import Header from "./components/Header.vue";
import ValuePage from "./components/ValuePage.vue";
</script>

<template>
  <div class="app-wrapper">
    <Header />
    <HeroPage />
    <ValuePage />
  </div>
</template>

<style scoped>
.app-wrapper {
  @apply px-12 md:px-32 xl:px-48
  h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth
}
</style>
