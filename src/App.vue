<script setup lang="ts">
import HeroPage from "./components/HeroPage.vue";
import Header from "./components/Header.vue";
import ValuePage from "./components/ValuePage.vue";

import { onMounted } from "vue";

function updateActiveNavItem() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      navItems.forEach((navItem) => {
        navItem.classList.remove("active-nav");
      });
      navItems[index].classList.add("active-nav");
    }
  });
}

onMounted(() => {
  updateActiveNavItem();
  document
    .querySelector(".app-wrapper")
    ?.addEventListener("scroll", updateActiveNavItem);
});
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
  h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth;
}
</style>
