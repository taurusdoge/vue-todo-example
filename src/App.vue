<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
</script>

<template>
  <h1>Todo App Example</h1>
  <AddTodo />
  <TodoList />
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  width: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
form {
  padding: 1rem;
}
</style>
