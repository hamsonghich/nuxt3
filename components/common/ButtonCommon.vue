<template>
  <div class="btn-common-component" :style="cssProps">
    <div class="btn-layer-1"></div>
    <div class="btn-layer-2"></div>
    <div class="btn-layer-3"></div>
    <div class="btn-layer-4"></div>
    <button class="btn-common" :class="typeBtn">
      <slot/>
    </button>
    <p class="text_check">text checkk</p>
  </div>
</template>
<script setup lang="ts">
import {defineComponent, onBeforeMount} from "@vue/runtime-core";
import {ref, onMounted, computed} from 'vue'

defineComponent({
  name: '.btn-commonCommon'
})
const props = defineProps({
  typeBtn: {
    type: String,
    default: 'type_1'
  },
  cssBtn: {
    type: Object,
    default: {
      colors: ['green', 'red'],
      borders: ['1px', '5px'],
      opacity: '0.2'
    }
  }
})
onMounted(() => {
})
const {cssBtn} = props
const cssProps = computed(() => {
  return {
    '--btn-border-width': cssBtn?.borders[0],
    '--btn-border-radius': cssBtn?.borders[1],
    '--btn-color-1': cssBtn?.colors[0],
    '--btn-color-2': cssBtn?.colors[1],
    '--btn-opacity': cssBtn?.opacity
  }
})
</script>
<style scoped lang="scss">
$color-custom: red;
.text_check {
  color: var(--btn-color-2);
}

.btn-common-component {
  //--btn-border-width: 1px;
  //--btn-border-radius: 10px;
  //--btn-color-1: #{$color-1};
  //--btn-color-2: #{$color-2};
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
  }

  //.btn-common.type_1 {
  //  background: none;
  //  transition: 0.5s ease-in-out;
  //}

  .btn-common.type_1 {
    //@include bg_ln_mix(var(--btn-color-1), var(--btn-color-2), $opacity);
    --color-opacity-1: rgba(var(--btn-color-1), var(--btn-opacity));
    --color-opacity-2: rgba(var(--btn-color-2), var(--btn-opacity));
    background: var(--color-opacity-1);

    transition: 0.5s ease-in-out;
  }
}

</style>
