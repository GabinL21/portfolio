<script setup lang="ts">

</script>

<template>
    <section id="contact" class="contact-wrapper">
        <div class="content">
            <h1>Contact Me</h1>
        </div>
        <div class="footer">
            <a href="https://www.termsfeed.com/live/9cfe31d3-97a8-4c26-a0f8-2bc583f12420">Terms & Conditions</a>
        </div>
    </section>
</template>

<style scoped>
.contact-wrapper {
    @apply flex flex-col h-screen justify-center space-y-24 md:space-y-32 items-center snap-start
}

.content {
    height: 90vh;
    @apply flex flex-col items-center justify-center;
}

.footer {
    height: 10vh;
    @apply flex flex-col items-center justify-center;
}

a {
    @apply hover:text-accent-500 text-sm md:text-base;
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl text-center font-playfair-display mt-16;
}
</style>
