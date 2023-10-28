<template>
  <div class="flex flex-col justify-start items-center h-[100vh] w-full">
    <form class="flex gap-[10px]">
      <el-input v-model="todo" placeholder="Please input" />
      <el-button @click="addItemTodo(todo)" plain>Submit</el-button>
    </form>
    <div>
      <ul>
        <li v-for="(todo_, index) in toDoList" :key="index" class="flex items-center justify-start">
          <p :class="todo_.completed ? 'text-active' : ''"> {{todo_.item}}</p>
          <i class="fa-solid fa-check" @click="toggleCompleted(todo_.id)"></i>
          <i class="fa-light fa-circle-xmark"  @click="deleteItemTodo(todo_.id)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useToDoListStore} from "~/stores/toDoListStore";
import {storeToRefs} from "pinia";

const todo = ref('')
const todoListStore = useToDoListStore()
const { toDoList, id } = storeToRefs(todoListStore)
const { addToDo, deleteToDo} = todoListStore
const addItemTodo = (todoProps: any) => {
  addToDo(todoProps)
  todo.value = ''
}

const toggleCompleted = (id: any) => {
  const findItem = toDoList.value.find((item: any) => item.id === id)
  if (findItem) {
    findItem.completed = !findItem.completed
  }
}
const deleteItemTodo = (id: any) => {
  deleteToDo(id)
}
</script>

<style scoped lang="scss">
 input {
   border: 2px solid black;
   border-radius: 4px;
   padding: 2px;
   margin-right: 10px;
 }
 .btn {
   border: 2px solid black;
   padding: 2px 10px;
   border-radius: 4px;
   background: #f8f8f8;
 }
 .text-active {
   text-decoration: line-through;
 }
</style>