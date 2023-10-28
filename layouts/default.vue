<template>
  <div class="layout_default">
    <HeaderComponent v-if="false"/>
    <p class="hidden">layout default</p>
    <slot />
  </div>
</template>
<script setup lang="ts">
import HeaderComponent from '@/components/base/Header.vue'
</script>
