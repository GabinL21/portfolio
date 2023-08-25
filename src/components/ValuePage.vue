<script setup lang="ts">
</script>

<template>
    <section id="values" class="values-wrapper">
        <h1>What I Believe In</h1>
        <div class="values-logo">
            <img src="src/assets/logo/logo_part1.svg" alt="logo part1" class="part part1">
            <img src="src/assets/logo/logo_part2.svg" alt="logo part2" class="part part2">
            <img src="src/assets/logo/logo_part3.svg" alt="logo part3" class="part part3">
        </div>
    </section>
</template>

<style scoped>
.values-wrapper {
    @apply flex flex-col h-screen justify-center items-center snap-start space-y-64
}

.values-logo {
    @apply flex flex-row items-center h-16 md:h-32;
}

.part {
    @apply h-full transition-all duration-500;
    filter: invert(84%) sepia(90%) saturate(615%) hue-rotate(294deg) brightness(93%) contrast(104%);
}

.part:hover {
    filter: invert(45%) sepia(28%) saturate(6471%) hue-rotate(347deg) brightness(97%) contrast(96%);
}

h1 {
    @apply text-6xl md:text-7xl xl:text-8xl xl:text-start text-center font-playfair-display mt-16
}
</style>
