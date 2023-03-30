<script setup lang="ts">

</script>

<template>
    <div class="wrapper">
        <h1>Gabin <span class="bold">Laigle</span></h1>
        <h2>Relax, you found the right <span class="bold marker-underline">software engineer</span></h2>
        <div class="buttons">
            <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><div class="primary-btn">Check out my LinkedIn</div></a>
        </div>
    </div>
</template>

<style scoped>

.wrapper {
    @apply flex flex-col h-screen justify-center xl:items-start items-center px-12 md:px-32 xl:px-48
}
h1 {
    @apply text-5xl md:text-6xl xl:text-7xl xl:text-start text-center
}
h2 {
    @apply text-2xl md:text-3xl xl:text-4xl xl:text-start text-center mt-8
}

.bold {
    @apply font-medium
}

.primary-btn {
    @apply px-4 py-2 mt-16 rounded-lg 
    text-primary font-medium
    bg-gradient-to-br from-accent-400 to-accent-500
    hover:from-accent-300 hover:to-accent-400
}

.marker-underline {
  background-image: linear-gradient(120deg, #fdba74 0%, #fb923c 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 92%;
}

</style>
