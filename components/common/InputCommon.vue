<template>
  <div class="input-component-common" :style="cssProps">
    <div class="input-layer-1"></div>
    <div class="input-layer-2"></div>
    <div class="input-layer-3"></div>
    <div class="input-layer-4"></div>
    <div class="delete-icon-layer" v-if="checkFocusInput" @click="deleteInputValue">
      <i class="fa-solid fa-circle-xmark"></i>
    </div>
    <input class="input_tag" type="text" v-model="inputValue" :disabled="disabled">
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, watch} from "vue";
import {ref} from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  cssInputProps: {
    type: Object,
    default: {
      // color: border, border, border-default, bg-input
      colors: ['#1BBEF5', '#1BECA6', '#1D272F', '#0D171B'],
      borders: ['1px', '5px'],
      opacity: '100%'
    }
  },
  inputValue: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const {cssInputProps, disabled} = props;
let inputValue = ref('')
inputValue.value = props.inputValue
const checkFocusInput = ref(false)
onMounted(() => {
  const input_component_common = document.querySelector('.input-component-common');
  const inputCommon = document.querySelector('.input_tag');
  inputCommon?.addEventListener('focus', () => {
    input_component_common?.classList.add('active')
  })
  inputCommon?.addEventListener('blur', () => {
    input_component_common?.classList.remove('active')
  })
})
const cssProps = computed(() => {
  const cssDefault = {
    '--border-width': cssInputProps?.borders[0],
    '--border-radius': cssInputProps?.borders[1],
    '--color-1': disabled ? cssInputProps?.colors[2] : cssInputProps?.colors[0],
    '--color-2': disabled ? cssInputProps?.colors[2] : cssInputProps?.colors[1],
    '--color-3': cssInputProps?.colors[2],
    '--color-4': disabled ? cssInputProps?.colors[2] : cssInputProps?.colors[3],
  }
  return {
  ...cssDefault
  }
})
const emit = defineEmits(['changeInput'])
watch(inputValue, (newValue, oldValue) => {
  if (newValue !== '') {
    checkFocusInput.value = true
  } else {
    checkFocusInput.value = false
  }
  emit('changeInput', newValue)
})
const deleteInputValue = () => {
  inputValue.value = ''
}
</script>
<style scoped lang="scss">
.input-component-common.active,
.input-component-common.hover,
.input-component-common:hover{
  transition: 0.35s ease-in-out;
  .input-layer-1 {
    position: absolute;
    top: 0;
    left: var(--border-radius);
    width: calc(100% - var(--border-radius) - var(--border-radius));
    height: var(--border-width);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
  }
  .input-layer-2 {
    position: absolute;
    bottom: 0;
    left: var(--border-radius);
    width: calc(100% - var(--border-radius) - var(--border-radius));
    height: var(--border-width);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
  }
  .input-layer-3 {
    position: absolute;
    left: 0;
    height: 100%;
    width: var(--border-radius);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    border-width: var(--border-width);
    border-right: 0;
    border-color: var(--color-1);
  }
  .input-layer-4 {
    position: absolute;
    right: 0;
    height: 100%;
    width: var(--border-radius);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    border-width: var(--border-width);
    border-left: 0;
    border-color: var(--color-2);
  }
}
.delete-icon-layer {
  position: absolute;
  right: 8px;
  height: 100%;
  z-index: 2;
  cursor: pointer;
  @apply flex flex-col justify-center items-center;
  i{
    color: $color-4;
    font-size: 16px;
  }
  i:hover {
    color: white;
  }
}
.input-component-common {
  position: relative;
  width: min-content;
  .input_tag {
    background: var(--color-4);
    border: var(--border-width) solid var(--color-3);
    border-radius: var(--border-radius);
    outline: none;
    padding: 12px 30px 12px 16px;
    line-height: 16px;
    color: $color-3;
    font-size: 14px;
  }
  .input_tag.close_icon_show {
    //padding-right: 30px;
  }
}
</style>
