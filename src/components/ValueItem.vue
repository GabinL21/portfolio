<script setup lang="ts">
defineProps(["title", "content"]);
</script>


<template>
    <div class="wrapper">
        <h2 class="title">{{ title }}</h2>
        <div class="separator"></div>
        <p class="content" v-html="content"></p>
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex flex-col items-center space-y-2 md:space-y-4;
}

.title {
    @apply font-semibold text-center text-3xl md:text-4xl;
}

.content {
    @apply font-normal text-center w-full text-lg md:text-xl;
}

.separator {
    @apply h-1 rounded-full w-2/3;
    background-image: linear-gradient(120deg, #f6805b 0%, #f25524 100%);
    background-repeat: no-repeat;
    background-position: 0 100%;
}
</style>
