<script setup lang="ts">
import { onMounted } from 'vue';
import ValueItem from './ValueItem.vue';

onMounted(() => {
    const logoPart1 = document.querySelector(".part1");
    const logoPart2 = document.querySelector(".part2");
    const logoPart3 = document.querySelector(".part3");
    const logoParts = [logoPart1, logoPart2, logoPart3];

    const value1 = document.querySelector(".value1");
    const value2 = document.querySelector(".value2");
    const value3 = document.querySelector(".value3");
    const valueItems = [value1, value2, value3];

    function selectPart(activeLogoPart: Element) {
        logoParts.forEach(logoPart => logoPart?.classList.remove("active-part"));
        activeLogoPart.classList.add("active-part");
        activeLogoPart.classList.add("clicked-part");
        activeLogoPart.classList.remove("pulse-part");
        let index = logoParts.indexOf(activeLogoPart);
        valueItems.forEach(valueItem => valueItem?.classList.remove("active-value"));
        valueItems[index]?.classList.add("active-value");
        if (activeLogoPart === logoPart2 && !logoPart3?.classList.contains("clicked-part")) logoPart3?.classList.add("pulse-part");
    }

    logoParts.forEach(logoPart => logoPart?.addEventListener("mouseenter", () => selectPart(logoPart)));
    logoParts.forEach(logoPart => logoPart?.addEventListener("touchstart", () => selectPart(logoPart)));
});
</script>

<template>
    <section id="values" class="values-wrapper">
        <h1>What I Believe In</h1>
        <div class="values-logo">
            <img src="../assets/logo/logo_part1.svg" alt="logo part1" class="part part1 active-part">
            <img src="../assets/logo/logo_part2.svg" alt="logo part2" class="part part2 pulse-part">
            <img src="../assets/logo/logo_part3.svg" alt="logo part3" class="part part3">
        </div>
        <div class="values-items">
            <ValueItem class="value value1 active-value" title="User-driven" content="I love software, but <b>the need is the base of everything</b>. The 'problem' is as crucial as the 'solving'." />
            <ValueItem class="value value2" title="Generalist" content="Humans are <b>best at making connections</b>. Improving in a domain is improving in every other one." />
            <ValueItem class="value value3" title="Kaizen-focused" content="Continuous improvement is one of my favorite subjects. <b>Small gains compound</b> to great results." />
        </div>
    </section>
</template>

<style scoped>
.values-wrapper {
    @apply flex flex-col h-screen justify-center space-y-24 md:space-y-32 items-center snap-start
}

.values-logo {
    @apply flex flex-row items-center h-16 md:h-24;
}

.part {
    @apply h-full transition-all duration-300;
    filter: invert(71%) sepia(42%) saturate(490%) hue-rotate(320deg) brightness(101%) contrast(90%);
}

.part.pulse-part {
    @apply animate-pulse;
}

.part3.pulse-part {
    @apply opacity-100;
}

.part.part3:not(.pulse-part):not(.clicked-part) {
    @apply opacity-30;
}

.part.active-part {
    filter: invert(45%) sepia(28%) saturate(6471%) hue-rotate(347deg) brightness(97%) contrast(96%);
}

.values-items {
    @apply flex items-center w-64 2xl:w-96;
}

h1 {
    @apply text-5xl md:text-6xl xl:text-7xl text-center font-playfair-display md:mt-16;
}

.value:not(.active-value) {
    @apply hidden;
}

.value.active-value {
    @apply animate-fade-in-short opacity-0;
}
</style>
