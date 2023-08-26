<script setup lang="ts">

</script>

<template>
    <section id="contact" class="contact-wrapper">
        <div class="content">
            <h1>Contact Me</h1>
            <div class="profile-wrapper">
                <img class="profile-pic" alt="gabin's photo" src="https://media.licdn.com/dms/image/D4D03AQFINUIJa-f_OQ/profile-displayphoto-shrink_400_400/0/1665508301766?e=1698278400&v=beta&t=zoruVLnKYGjOq6_h6l7_7ZBbvwsfYVj-Gtvq0nCmSt8"/>
                <div class="text">
                    <p>A <span class="bold">project?</span> An <span class="bold">idea?</span></p>
                    <p>Want to <span class="bold">learn more?</span></p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><div class="primary-btn">Find me on LinkedIn</div></a>
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
    @apply flex flex-col h-screen justify-around items-center snap-start
}

.primary-btn {
    @apply
    text-primary font-medium
    bg-accent-500 hover:bg-accent-400
    transition-all duration-300
    px-4 py-2 xl:px-5 xl:py-3
    text-base md:text-lg xl:text-xl
    rounded-lg xl:rounded-xl
    animate-bounce hover:animate-none
}

.content {
    @apply h-5/6 flex flex-col items-center justify-center space-y-16 mt-24;
}

.profile-wrapper {
    @apply flex flex-col items-center space-y-4 md:space-y-6;
}

.profile-pic {
    @apply rounded-full h-32 md:h-40;
}

.text {
    @apply text-xl md:text-2xl xl:text-3xl text-center
}

.bold {
    @apply font-medium;
}

.footer {
    @apply h-1/6 flex flex-col items-center justify-center space-y-4 text-secondary-700;
}

.icons {
    @apply flex flex-row space-x-8;
}

.icon {
    @apply hover:text-secondary-500 h-7 transition-all duration-200;
}

.terms {
    @apply hover:text-secondary-500 text-sm md:text-base transition-all duration-200;
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl text-center font-playfair-display;
}
</style>
