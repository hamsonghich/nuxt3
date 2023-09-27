<template>
  <div class="btn-common-component">
    <div class="btn-layer-1"></div>
    <div class="btn-layer-2"></div>
    <div class="btn-layer-3"></div>
    <div class="btn-layer-4"></div>
    <button class="btn-common" :class="typeBtn">
      <slot />
    </button>
  </div>
</template>
<script setup lang="ts">
import {defineComponent} from "@vue/runtime-core";

defineComponent({
  name: '.btn-commonCommon'
})
defineProps({
  typeBtn: {
    type: String,
    default: 'default'
  }
})
</script>
<style scoped lang="scss">
.btn-common-component {
  --btn-border-width: 1px;
  --btn-border-radius: 10px;
  --btn-color-1: #1BBEF5;
  --btn-color-2: #1BECA6;
}
.btn-common-component {
  position: relative;
  .btn-layer-1 {
    position: absolute;
    top: 0;
    left: var(--btn-border-radius);
    width: calc(100% - var(--btn-border-radius) - var(--btn-border-radius));
    height: var(--btn-border-width);
    background: linear-gradient(to right, var(--btn-color-1), var(--btn-color-2));
  }
  .btn-layer-2 {
    position: absolute;
    bottom: 0;
    left: var(--btn-border-radius);
    width: calc(100% - var(--btn-border-radius) - var(--btn-border-radius));
    height: var(--btn-border-width);
    background: linear-gradient(to right, var(--btn-color-1), var(--btn-color-2));
  }
  .btn-layer-3 {
    position: absolute;
    left: 0;
    height: 100%;
    width: var(--btn-border-radius);
    border-radius: var(--btn-border-radius) 0 0 var(--btn-border-radius);
    border-width: var(--btn-border-width);
    border-right: 0;
    border-color: var(--btn-color-1);
  }
  .btn-layer-4 {
    position: absolute;
    right: 0;
    height: 100%;
    width: var(--btn-border-radius);
    border-radius: 0 var(--btn-border-radius) var(--btn-border-radius) 0;
    border-width: var(--btn-border-width);
    border-left: 0;
    border-color: var(--btn-color-2);
  }

  .btn-common {
    padding: 10px 20px;
    border-radius: var(--btn-border-radius);
    @include color_mix();
  }
}

</style>
