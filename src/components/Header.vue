<script setup lang="ts">

</script>

<template>
    <header class="wrapper-header">
        <p class="logo">gabin-laigle</p>
        <nav class="wrapper-nav">
            <a class="selected-nav nav-item" href="#">Home</a>
            <a class="nav-item" href="mailto:gabin.laigle21@gmail.com">Contact</a>
        </nav>
    </header>
</template>

<style scoped>

.logo {
    @apply font-semibold text-lg
}

.selected-nav {
    background-image: linear-gradient(120deg, #fdba74 0%, #fb923c 100%);
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
    @apply flex space-x-8 items-center text-secondary font-medium;
}

</style>

