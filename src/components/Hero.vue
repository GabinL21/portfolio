<script setup lang="ts">
import gsap from 'gsap';
import { Sine } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin);

    // Define the array of text to display
    const textArray = ['software engineer', 'creative developer', 'product manager', 'software engineer'];

    // Create a timeline instance
    const tl = gsap.timeline({ repeat: -1 });

    // Loop through the text array
    for (let i = 0; i < textArray.length; i++) {
        // Create a to animation for each text element
        const textAnimation = gsap.to('#carousel', { duration: 2, delay: (2 * i) * 2, text: textArray[i], ease: Sine.easeIn });
        const spaceAnimation = gsap.to('#carousel', { duration: 2, delay: (2 * i + 1) * 2, text: '', ease: Sine.easeIn });

        // Add the text animation to the timeline
        tl.add(textAnimation, i*2);
        tl.add(spaceAnimation, i*2+1);
    }

    // Start the timeline
    tl.play();
});
</script>

<template>
    <div class="wrapper-hero">
        <h1>Gabin <span class="bold">Laigle</span></h1>
        <h2>Relax, you found the right <span class="bold marker-underline" id="carousel">software engineer</span></h2>
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
    transition-colors ease-in-out duration-200
}

.marker-underline {
  background-image: linear-gradient(120deg, #F6805B 0%, #F25524 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 92%;
}

</style>
