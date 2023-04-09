<script setup lang="ts">

</script>

<template>
    <header class="wrapper-header">
        <p class="logo">gabin-laigle</p>
        <nav class="wrapper-nav">
            <a class="selected-nav nav-item" href="#">Home</a>
            <a class="nav-item" href="#about">About</a>
            <a class="nav-item" href="#contact">Contact</a>
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
    @apply flex justify-between items-center text-secondary py-4 sticky box-border;
    width: 100vw; /* set width to full viewport width */
    max-width: 100%; 
}

.wrapper-nav {
    @apply flex space-x-8 items-center text-secondary font-medium;
}

</style>

