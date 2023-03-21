<script setup lang="ts">

</script>

<template>
    <div>
        <h1>Gabin <span class="bold">Laigle</span></h1>
        <h2>Relax, you found the right <span class="link bold"><a href="https://www.linkedin.com/in/gabin-laigle/">software engineer</a></span></h2>
    </div>
</template>

<style scoped>

div {
    @apply flex flex-col h-screen justify-center md:items-start items-center px-24 md:px-32 xl:px-48
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl md:text-start text-center
}

h2 {
    @apply text-2xl md:text-3xl xl:text-4xl md:text-start text-center mt-8
}

.link {
    @apply underline underline-offset-8 decoration-2 text-accent-500 hover:text-accent-300
}

.bold {
    @apply font-normal
}

</style>
