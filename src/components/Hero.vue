<script setup lang="ts">

</script>

<template>
    <div class="wrapper-hero">
        <h1>Gabin <span class="bold">Laigle</span></h1>
        <h2>Relax, you found the right <span class="bold marker-underline">software engineer</span></h2>
        <div class="buttons">
            <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><div class="primary-btn">Check out my LinkedIn</div></a>
        </div>
    </div>
</template>

<style scoped>

.wrapper-hero {
    @apply flex flex-col h-screen justify-center xl:items-start items-center
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl xl:text-start text-center font-playfair-display
}
h2 {
    @apply text-2xl md:text-3xl xl:text-4xl xl:text-start text-center mt-8
    animate-fade animation-delay-500 opacity-0
}

.bold {
    @apply font-medium
}

.buttons {
    @apply mt-16 flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 items-center
}

.primary-btn {
    @apply px-4 py-2 rounded-lg 
    text-primary font-medium
    bg-accent-500 hover:bg-accent-400
    animate-fade animation-delay-1500 opacity-0
}

.marker-underline {
  background-image: linear-gradient(120deg, #F6805B 0%, #F25524 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 92%;
}

</style>
