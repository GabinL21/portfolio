<script setup lang="ts">
import gsap, { Sine } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(TextPlugin);

    // Define the array of text to display
    const textArray = [
        'software engineer', 
        'Spring developer',
        'design lover',
        'Flutter enthusiast',
        'clean coder',
        'Figma guru',
        'ukulele player',
        'Notion addict',
        'productivity nerd',
        'Adobe aficionado',
        'speedcuber',
        'Firebase preacher',
        'beatmaker',
        'Minecraft expert',
        'book user',
        'JetBrains fan',
    ];

    const initialDelay = 1.5;
    const durationCharWriting = 0.05;
    const durationTextStaying = 3;
    const durationTextErasing = 1;
    const overrideTiming = 0.5; // To reduce the amount of time spent when no words are written
    const textWritingEase = 'none';
    const textErasingEase = Sine.easeIn;

    // Create a timeline instance
    const tl = gsap.timeline({ repeat: -1, delay: initialDelay + overrideTiming });

    // Loop through the text array
    let totalDelay = 0;
    for (let i = 0; i < textArray.length; i++) {
        let text = textArray[i];
        let durationTextWriting = text.length * durationCharWriting;
        // Create an animation for each text element
        const textAnimation = gsap.to('#carousel', { duration: durationTextWriting, delay: totalDelay - overrideTiming, text: text, ease: textWritingEase });
        totalDelay += (durationTextWriting + durationTextStaying);
        const spaceAnimation = gsap.to('#carousel', { duration: durationTextErasing, delay: totalDelay, text: '', ease: textErasingEase });
        totalDelay += durationTextErasing;

        // Add the text animation to the timeline
        tl.add(textAnimation, i*2);
        tl.add(spaceAnimation, i*2+1);
    }

    // Start the timeline
    tl.play();
});
</script>

<template>
    <section id="home" class="hero-wrapper">
            <h1>Gabin Laigle</h1>
            <div class="subheader">
                <div><span class="subheader-1">Relax, </span><span class="subheader-2">you found the right</span></div>
                <div><span class="bold marker-underline" id="carousel"></span></div>
            </div>
            <div class="buttons">
                <a href="https://www.linkedin.com/in/gabin-laigle/" target="_blank"><div class="primary-btn">Check out my LinkedIn</div></a>
            </div>
            <div class="footer">
                <a href="#values"><img src="../assets/scroll-down-icon.svg" alt="scroll down icon" class="scroll-down"/></a>
            </div>
    </section>
            
</template>

<style scoped>
.hero-wrapper {
    @apply flex flex-col h-screen items-center justify-center snap-start;
}

.content {
    @apply flex flex-col justify-around items-center;
}

.footer {
    @apply flex flex-col justify-center items-center h-4 mt-32;
}

h1 {
    @apply text-6xl md:text-7xl xl:text-8xl text-center font-playfair-display mt-48
}

.subheader {
    @apply text-2xl md:text-3xl xl:text-4xl xl:text-start text-center mt-12
    flex flex-col md:flex-row items-center gap-0 md:gap-3 min-h-[3em] md:min-h-0
}

.subheader-1 {
    @apply animate-fade-in animation-delay-200 opacity-0
}

.subheader-2 {
    @apply animate-fade-in animation-delay-1000 opacity-0
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
    animate-fade-in animation-delay-3500 opacity-0
    transition-colors ease-out duration-200
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

.scroll-down {
    @apply h-8 hover:translate-y-2 transition-opacity duration-1000
    animate-bounce animation-delay-7000 opacity-0;
}
</style>
