<script setup lang="ts">
</script>

<template>
    <section id="values" class="values-wrapper">
        <h1>What I Believe In</h1>
        <div class="values-logo">
            <img src="../assets/part1.svg" alt="logo part1" class="part part1">
            <img src="../assets/part2.svg" alt="logo part1" class="part part2">
            <img src="../assets/part3.svg" alt="logo part1" class="part part3">
        </div>
    </section>
</template>

<style scoped>
.values-wrapper {
    @apply flex flex-col h-screen justify-center items-center snap-start space-y-64
}

.values-logo {
    @apply flex flex-row items-center;
}

.part {
    @apply h-16 md:h-32;
}

.part:hover {
    filter: brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(6471%) hue-rotate(347deg) brightness(97%) contrast(96%);
}

h1 {
    @apply text-6xl md:text-7xl xl:text-8xl xl:text-start text-center font-playfair-display mt-16
}
</style>
