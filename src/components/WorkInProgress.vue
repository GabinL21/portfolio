<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>

<template>
  <!-- <img src="../assets/wip.svg" class="icon" alt="WIP icon" /> -->
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.icon {
  height: 12em;
  padding: 1.5em;
  color: white;
  will-change: filter;
  transition: filter 300ms;
}
.icon:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
