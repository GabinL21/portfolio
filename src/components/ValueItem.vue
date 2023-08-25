<script setup lang="ts">
defineProps(["title", "content"]);
</script>


<template>
    <div class="wrapper">
        <h2 class="title">{{ title }}</h2>
        <div class="separator"></div>
        <p class="content">{{ content }}</p>
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex flex-col items-center space-y-2 md:space-y-8;
}

.title {
    @apply font-semibold text-3xl md:text-5xl text-center;
}

.content {
    @apply font-normal text-lg md:text-3xl text-center;
}

.separator {
    @apply h-1 rounded-full bg-accent-500 w-5/6;
}
</style>
