<template>
  <div class="text-area-component-common" :style="cssProps">
    <div class="layer-1"></div>
    <div class="layer-2"></div>
    <div class="layer-3"></div>
    <div class="layer-4"></div>
    <el-input
        v-model="textareaValue"
        :rows="rows"
        type="textarea"
        :placeholder="placeholder"
    />
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import { ref } from 'vue'
const props = defineProps({
  _textareaValue: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    required: false
  },
  rows: {
    type: Number,
    default: 5
  },
  cssTextAreaProps: {
    type: Object,
    default: {
      // color: border, border, border-default, bg-input
      colors: ['#1BBEF5', '#1BECA6', '#1D272F', '#0D171B'],
      borders: ['1px', '5px'],
      opacity: '100%'
    }
 }
})
const {cssTextAreaProps, disabled,placeholder, _textareaValue, rows} = props
const cssProps = computed(() => {
  return {
    '--border-width': cssTextAreaProps?.borders[0],
    '--border-radius': cssTextAreaProps?.borders[1],
    '--color-1': disabled ? cssTextAreaProps?.colors[2] : cssTextAreaProps?.colors[0],
    '--color-2': disabled ? cssTextAreaProps?.colors[2] : cssTextAreaProps?.colors[1],
    '--color-3': cssTextAreaProps?.colors[2],
    '--color-4': disabled ? cssTextAreaProps?.colors[2] : cssTextAreaProps?.colors[3],
  }
})
const textareaValue = ref(_textareaValue)
</script>
<style scoped lang="scss">
.text-area-component-common{
  position: relative;
  :deep(textarea) {
    overflow: hidden;
  }
}
.text-area-component-common:hover,
.text-area-component-common.hover,
.text-area-component-common.active,
.text-area-component-common:active,
{
  .layer-1 {
    position: absolute;
    top: 0;
    left: var(--border-radius);
    width: calc(100% - var(--border-radius) - var(--border-radius));
    height: var(--border-width);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    z-index: 2;
  }
  .layer-2 {
    position: absolute;
    bottom: 0;
    left: var(--border-radius);
    width: calc(100% - var(--border-radius) - var(--border-radius));
    height: var(--border-width);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    z-index: 2;
  }
  .layer-3 {
    position: absolute;
    left: 0;
    height: 100%;
    width: var(--border-radius);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    border-width: var(--border-width);
    border-right: 0;
    border-color: var(--color-1);
    z-index: 2;
  }
  .layer-4 {
    position: absolute;
    right: 0;
    height: 100%;
    width: var(--border-radius);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    border-width: var(--border-width);
    border-left: 0;
    border-color: var(--color-2);
    z-index: 2;
  }
}
:deep(.el-textarea__inner) {
  background: var(--color-4);
  outline: none;
  box-shadow: none;
}

</style>
