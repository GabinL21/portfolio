<script setup lang="ts">

</script>

<template>
    <section id="contact" class="contact-wrapper">
        <div class="content">
            <h1>Contact Me</h1>
        </div>
        <div class="footer">
            <div class="icons">
                <a href="mailto:gabin.laigle21@gmail.com" target="_blank"><font-awesome-icon :icon="['far', 'envelope']" class="icon"/></a>
                <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" /></a>
                <a href="https://github.com/GabinL21/doctobot" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="icon" /></a>
            </div>
            <a href="https://www.termsfeed.com/live/9cfe31d3-97a8-4c26-a0f8-2bc583f12420" class="terms">Terms & Conditions</a>
        </div>
    </section>
</template>

<style scoped>
.contact-wrapper {
    @apply flex flex-col h-screen justify-center space-y-24 md:space-y-32 items-center snap-start
}

.content {
    @apply h-4/5 flex flex-col items-center justify-center;
}

.footer {
    @apply h-1/5 flex flex-col items-center justify-center space-y-4;
}

.icons {
    @apply flex flex-row space-x-8;
}

.icon {
    @apply text-secondary hover:text-accent-700 h-7 transition-all duration-200;
}

.terms {
    @apply hover:text-accent-500 text-sm md:text-base transition-all duration-200;
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl text-center font-playfair-display mt-16;
}
</style>
