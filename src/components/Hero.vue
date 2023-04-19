<script setup lang="ts">
import gsap from 'gsap';
import { Sine, Power2 } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin);

    // Define the array of text to display
    const textArray = [
        'software engineer', 
        'Spring developer',
        'design lover',
        'Flutter enthusiast',
        'ukulele player',
        'Figma guru',
        'clean coder',
        'Notion addict',
        'speedcuber'
    ];
    const delay = 4;

    // Create a timeline instance
    const tl = gsap.timeline({ repeat: -1 });

    // Loop through the text array
    for (let i = 0; i < textArray.length; i++) {
        // Create a to animation for each text element
        const textAnimation = gsap.to('#carousel', { duration: 2, delay: 4 * i + delay * i, text: textArray[i], ease: Power2.easeInOut });
        const spaceAnimation = gsap.to('#carousel', { duration: 2, delay: 4 * i + delay * (i + 1) + 2, text: '', ease: Sine.easeInOut });

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
        <div class="subheader">
            <div><span class="subheader-1">Relax, </span><span class="subheader-2">you found the right</span></div>
            <div class="subheader-3"><span class="bold marker-underline" id="carousel"></span></div>
        </div>
        <div class="buttons">
            <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><div class="primary-btn">Check out my LinkedIn</div></a>
        </div>
    </div>
</template>

<style scoped>

.wrapper-hero {
    @apply flex flex-col h-screen justify-center items-center
}

h1 {
    @apply text-6xl md:text-7xl xl:text-8xl xl:text-start text-center font-playfair-display mt-16
}

.subheader {
    @apply text-2xl md:text-3xl xl:text-4xl xl:text-start text-center mt-12
    flex flex-col md:flex-row items-center gap-0 md:gap-3
}

.subheader-1 {
    @apply animate-fade animation-delay-1500 opacity-0
}

.subheader-2 {
    @apply animate-fade animation-delay-2000 opacity-0
}

.subheader-3 {
    @apply animate-fade animation-delay-3000 opacity-0
}

.bold {
    @apply font-medium
}

.buttons {
    @apply mt-24 md:mt-32 flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0 items-center
}

.primary-btn {
    @apply
    text-primary font-medium
    bg-accent-500 hover:bg-accent-400
    animate-fade animation-delay-5000 opacity-0
    transition-colors ease-in-out duration-200
    px-4 py-2 xl:px-5 xl:py-3
    text-base md:text-lg xl:text-xl
    rounded-lg xl:rounded-xl
}

.marker-underline {
  background-image: linear-gradient(120deg, #F6805B 0%, #F25524 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 92%;
}

</style>
