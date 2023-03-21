<script setup lang="ts">

</script>

<template>
    <div>
        <h1>Gabin Laigle</h1>
        <!-- <h2>Relax, you found the right person</h2>  -->
        <h2>Work in progress, checkout my <span class="link"><a href="https://www.linkedin.com/in/gabin-laigle/">LinkedIn</a></span> meanwhile</h2>
    </div>
</template>

<style scoped>

div {
    @apply flex flex-col h-screen justify-center items-center
}

h1 {
    @apply text-center text-5xl md:text-6xl xl:text-7xl px-12
}

h2 {
    @apply text-center text-3xl md:text-4xl xl:text-5xl font-light mt-8 px-12
}

.link {
    @apply underline underline-offset-8 decoration-2 text-accent-500 hover:text-accent-300
}

</style>
