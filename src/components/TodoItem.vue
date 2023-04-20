<script setup lang="ts">
defineProps<{
  id: number;
  subject: string;
}>();
defineEmits<{
  (e: 'removeTodo', id: number): void;
}>();
</script>

<template>
  <li>
    <span>{{ subject }}</span>
    <button @click="$emit('removeTodo', id)">X</button>
  </li>
</template>

<style scoped>
li {
  list-style: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
}
</style>
