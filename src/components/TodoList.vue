<script setup lang="ts">
import { store } from '../store';
import TodoItem from './TodoItem.vue';

defineEmits<{
  (e: 'removeTodo', id: number): void;
}>();

function removeTodo(id: number) {
  store.todos = store.todos.filter((t) => t.id !== id);
}
</script>

<template>
  <ul>
    <TodoItem
      v-for="todo of store.todos"
      :key="todo.id"
      :subject="todo.subject"
      :id="todo.id"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<style scoped></style>
