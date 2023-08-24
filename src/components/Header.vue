<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const hamburger = document.querySelector(".hamburger-btn");
  const hamburgerItems = document.querySelector(".hamburger-items");

  hamburger?.addEventListener("click", () => {
    hamburgerItems?.classList.toggle("hide");
  });
});
</script>

<template>
  <header class="wrapper-header">
    <div class="wrapper-center">
      <a class="logo" href="https://gabin-laigle.com">
        <p class="icon">~</p>
        <p>gabin-laigle</p>
      </a>
      <nav class="wrapper-nav">
        <a class="nav-item" href="#home">Home</a>
        <a class="nav-item" href="#values">Values</a>
        <a class="secondary-nav-item" href="mailto:gabin.laigle21@gmail.com"
          >Contact Me</a
        >
      </nav>
      <div class="hamburger-btn">
        <svg
          width="24px"
          height="24px"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M3 5h18M3 12h18M3 19h18"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
    <div class="hamburger-items hide">
      <a class="hamburger-item" href="#home">Home</a>
      <a class="hamburger-item" href="#values">Values</a>
      <a class="hamburger-item" href="mailto:gabin.laigle21@gmail.com"
        >Contact Me</a
      >
    </div>
  </header>
</template>

<style scoped>
.icon {
  @apply text-accent-500 text-4xl font-normal;
}

.logo {
  @apply font-semibold text-lg flex space-x-2 items-center;
}

.active-nav {
  @apply font-semibold pointer-events-none;
  background-image: linear-gradient(120deg, #f6805b 0%, #f25524 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.15em;
  background-position: 0 100%;
}

.nav-item {
  @apply hover:font-semibold;
}

.secondary-nav-item {
  @apply border-2 rounded-full border-accent-500 py-1 px-4 hover:bg-accent-500 hover:bg-opacity-5;
}

.wrapper-header {
  @apply flex flex-col justify-between items-start text-secondary py-4 w-full fixed box-border right-0 px-8 md:px-32 xl:px-48;
}

.wrapper-center {
    @apply flex flex-row items-center justify-between w-full
}

.wrapper-nav {
  @apply hidden md:flex space-x-4 md:space-x-8 items-center text-secondary font-medium;
}

.hamburger-item {
  @apply text-secondary;
}

.hamburger-items {
  @apply flex flex-col md:hidden items-end w-full;
}

.hide {
  @apply hidden;
}

.hamburger-btn {
  @apply flex md:hidden flex-col
  hover:bg-secondary hover:bg-opacity-5;
}
</style>
