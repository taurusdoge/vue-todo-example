<script setup lang="ts">
import { ref, computed } from 'vue';
import { store } from '../store';

const newTodo = ref('');
const addButtonDisabled = computed(() => !newTodo.value);

function handleAddTodo() {
  if (!newTodo.value) return;

  store.todos.push({
    id: store.todos.length + 1,
    subject: newTodo.value
  });
  newTodo.value = '';
}
</script>

<template>
  <form @submit.prevent="handleAddTodo">
    <input v-model="newTodo" :autofocus="true" />
    <button @click="handleAddTodo" :disabled="addButtonDisabled" type="button">Add Todo</button>
  </form>
</template>
