<template>
  <div class="home-page">
     HomePage1
    <img style="width: 20px;" :src="imageUrl" alt="">
    {{imageUrl}}
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ref, computed} from 'vue'
definePageMeta({
  layout: 'default'
})

const imageUrl = new URL('@/assets/icon/logo.svg', import.meta.url)
</script>

<style scoped>

</style>