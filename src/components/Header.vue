<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuItemsWrapper = document.querySelector(".menu-items-wrapper");
  const menuItems = document.querySelectorAll(".menu-item");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    menuItemsWrapper?.classList.toggle("closed");
    hamburger?.classList.toggle("is-active");
  }

  menuBtn?.addEventListener("click", toggleMenu);
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", toggleMenu)
  );
});
</script>

<template>
  <header class="header-wrapper">
    <div class="top-header-wrapper">
      <a class="logo" href="https://gabin-laigle.com">
        <p class="icon">~</p>
        <p>gabin-laigle</p>
      </a>
      <nav class="nav-wrapper">
        <a class="nav-item" href="#home">Home</a>
        <a class="nav-item" href="#values">Values</a>
        <a class="secondary-nav-item" href="mailto:gabin.laigle21@gmail.com">Contact Me</a>
      </nav>
      <div class="menu-btn">
        <button class="hamburger hamburger--spin" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="menu-items-wrapper closed">
      <a class="menu-item" href="#home">Home</a>
      <a class="menu-item" href="#values">Values</a>
      <a class="menu-item" href="mailto:gabin.laigle21@gmail.com">Contact Me</a>
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

.header-wrapper {
  @apply flex flex-col justify-between items-start py-4 w-full fixed box-border right-0 px-8 md:px-32 xl:px-48;
}

.top-header-wrapper {
  @apply flex flex-row items-center justify-between w-full;
}

.nav-wrapper {
  @apply hidden md:flex space-x-4 md:space-x-8 items-center font-medium;
}

.nav-item {
  @apply hover:font-semibold;
}

.secondary-nav-item {
  @apply border-2 rounded-full border-accent-500 py-1 px-4 
  hover:bg-accent-500 hover:bg-opacity-5 
  transition duration-200 ease-out;
}

.menu-btn {
  @apply flex md:hidden;
}

.menu-items-wrapper {
  @apply flex flex-col md:hidden items-end w-full space-y-2;
}

.menu-items-wrapper:not(.closed) {
  @apply visible opacity-100 transition-all duration-300 ease-out;
}

.menu-items-wrapper.closed {
  @apply invisible opacity-0 transition-all duration-300 ease-in;
}

.menu-item {
  @apply hover:font-semibold;
}

/*
* Hamburger
*/

.hamburger {
  padding: 4px 4px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger:hover {
  opacity: 0.5;
}

.hamburger.is-active:hover {
  opacity: 0.5;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #191818;
}

.hamburger-box {
  width: 20px;
  height: 10px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 20px;
  height: 2px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -6px;
}

.hamburger-inner::after {
  bottom: -6px;
}

/*
* Spin
*/
.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}

.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}

.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

/*
* Spin Reverse
*/
.hamburger--spin-r .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin-r .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}

.hamburger--spin-r .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin-r.is-active .hamburger-inner {
  transform: rotate(-225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--spin-r.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}

.hamburger--spin-r.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
