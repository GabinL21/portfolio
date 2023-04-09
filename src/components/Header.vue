<script setup lang="ts">

</script>

<template>
    <header class="wrapper-header">
        <div class="logo">
            <p class="icon">~</p>
            <p>gabin-laigle</p>
        </div>
        <nav class="wrapper-nav">
            <a class="selected-nav nav-item" href="#">Home</a>
            <a class="nav-item" href="mailto:gabin.laigle21@gmail.com">Contact</a>
        </nav>
    </header>
</template>

<style scoped>

.icon {
    @apply text-accent-500 text-4xl font-normal;
}

.logo {
    @apply font-semibold text-lg flex space-x-2 items-center
}

.selected-nav {
    background-image: linear-gradient(120deg, #F6805B 0%, #F25524 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 100%;
}

.nav-item {
    @apply hover:font-semibold
}

.wrapper-header {
    @apply flex justify-between items-center text-secondary py-4 w-full fixed box-border right-0 px-12 md:px-32 xl:px-48;
}

.wrapper-nav {
    @apply flex space-x-4 md:space-x-8 items-center text-secondary font-medium;
}

</style>

