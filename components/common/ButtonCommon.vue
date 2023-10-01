<template>
  <div class="btn-common-component" :style="cssProps">
    <div class="btn-layer-1"></div>
    <div class="btn-layer-2"></div>
    <div class="btn-layer-3"></div>
    <div class="btn-layer-4"></div>
    <button class="btn-common" :class="typeBtn" :disabled="disabled" @click="$emit('clickBtn')">
      <slot/>
    </button>
  </div>
</template>
<script setup lang="ts">
import {defineComponent, onBeforeMount} from "@vue/runtime-core";
import {defineEmits} from "@vue/runtime-core";
import {ref, onMounted, computed} from 'vue'

defineComponent({
  name: '.btn-commonCommon'
})
const props = defineProps({
  typeBtn: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  _cssBtn: {
    type: Object,
    default: {
      colors: ['green', 'red'],
      borders: ['1px', '5px'],
      opacity: '100%'
    }
  }
})
onMounted(() => {
})
const {_cssBtn, disabled, typeBtn} = props
const cssProps = computed(() => {
  const cssDefault = {
    '--btn-border-width': _cssBtn?.borders[0],
    '--btn-border-radius': _cssBtn?.borders[1],
    '--btn-opacity': _cssBtn?.opacity
  }
  if (typeBtn?.includes('primary')) {
    return {
      ...cssDefault,
      '--btn-color-1': disabled ? 'gray' : _cssBtn?.colors[0],
      '--btn-color-2': disabled ? 'gray' : _cssBtn?.colors[1],
    }
  } else if (typeBtn?.includes('secondary')) {
    return {
      ...cssDefault,
      '--btn-color-1': disabled ? 'transparent' : 'transparent',
      '--btn-color-2': disabled ? 'transparent' : 'transparent',
      '--btn-color-bg': disabled ? 'gray' : _cssBtn?.colors[0],
      '--btn-color-text': disabled ? 'gray' : _cssBtn?.colors[1],
      '--btn-color-bg-pressed': _cssBtn?.colors[2],
      '--btn-color-text-pressed': _cssBtn?.colors[3],
    }
  } else if (typeBtn?.includes('warning')) {
    return {
      ...cssDefault,
      '--btn-color-1': disabled ? 'gray' : _cssBtn?.colors[0],
      '--btn-color-2': disabled ? 'gray' : _cssBtn?.colors[0],
    }
  } else {
    return {
      ...cssDefault,
      '--btn-color-1': disabled ? 'gray' : _cssBtn?.colors[0],
      '--btn-color-2': disabled ? 'gray' : _cssBtn?.colors[1],
    }
  }
})
const emit = defineEmits(['clickBtn', 'changeBtn'])
function clickBtn () {
  emit('clickBtn')
}
</script>
<style scoped lang="scss">
.btn-common-component {
  //--btn-border-width: 1px;
  //--btn-border-radius: 10px;
  //--btn-color-1: #{$color-1};
  //--btn-color-2: #{$color-2};
}

.btn-common-component {
  position: relative;
  padding: 0px;
  height: 50px;
  width: min-content;
  @apply flex justify-center items-center;

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

  :deep( .btn-common) {
    @apply px-[24px] h-full;
    min-width: 200px;
    width: auto;
    border-radius: var(--btn-border-radius);
  }

  :deep(.btn-common.primary) {
    background: none;
    transition: 0.35s ease-in-out;

    p, span, div {
      color: #FFF;
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      white-space: nowrap;
    }
  }

  .btn-common.primary:hover {
    --color-1: color-mix(in srgb, var(--btn-color-1) var(--btn-opacity), transparent);
    --color-2: color-mix(in srgb, var(--btn-color-2) var(--btn-opacity), transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;
  }

  .btn-common.primary.hover {
    --color-1: color-mix(in srgb, var(--btn-color-1) var(--btn-opacity), transparent);
    --color-2: color-mix(in srgb, var(--btn-color-2) var(--btn-opacity), transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;
  }

  .btn-common.primary:active {
    --color-1: color-mix(in srgb, var(--btn-color-1) 100%, transparent);
    --color-2: color-mix(in srgb, var(--btn-color-2) 100%, transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;

    :deep( p, span ) {
      color: $color-3;
    }
  }

  .btn-common.primary.active {
    --color-1: color-mix(in srgb, var(--btn-color-1) 100%, transparent);
    --color-2: color-mix(in srgb, var(--btn-color-2) 100%, transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;

    :deep(  p, span ) {
      color: $color-3;
    }
  }

  .btn-common.primary:disabled {
    --color-1: color-mix(in srgb, gray 30%, transparent);
    --color-2: color-mix(in srgb, gray 30%, transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;
    cursor: not-allowed;

    :deep( p, span) {
      color: $color-3;
    }
  }


  :deep( .btn-common.secondary) {
    background: none;
    transition: 0.35s ease-in-out;

    p, span, div {
      color: var(--btn-color-text);
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      white-space: nowrap;
    }
  }

  .btn-common.secondary:hover {
    background: linear-gradient(to right, var(--btn-color-bg), var(--btn-color-bg));
    transition: 0.35s ease-in-out;
  }

  .btn-common.secondary.hover {
    background: linear-gradient(to right, var(--btn-color-bg), var(--btn-color-bg));
    transition: 0.35s ease-in-out;
  }

  .btn-common.secondary:active {
    background: linear-gradient(to right, var(--btn-color-bg-pressed), var(--btn-color-bg-pressed));
    transition: 0.35s ease-in-out;

    :deep( p, span) {
      color: var(--btn-color-text-pressed);
    }
  }

  .btn-common.secondary.active {
    background: linear-gradient(to right, var(--btn-color-bg-pressed), var(--btn-color-bg-pressed));
    transition: 0.35s ease-in-out;

    :deep( p, span) {
      color: var(--btn-color-text-pressed);
    }
  }

  .btn-common.secondary:disabled {
    --color-1: color-mix(in srgb, gray 30%, transparent);
    --color-2: color-mix(in srgb, gray 30%, transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;
    cursor: not-allowed;

    :deep( p, span) {
      color: $color-3;
    }
  }


  :deep( .btn-common.warning) {
    background: color-mix(in srgb, var(--btn-color-1) var(--btn-opacity), transparent);
    transition: 0.35s ease-in-out;

    p, span, div {
      color: var(--btn-color-1);
      font-size: 24px;
      font-weight: 700;
      line-height: normal;
      white-space: nowrap;
    }
  }

  .btn-common.warning:hover {
    background: none;
    transition: 0.35s ease-in-out;
  }

  .btn-common.warning.hover {
    background: none;
    transition: 0.35s ease-in-out;
  }

  .btn-common.warning:active {
    background: var(--btn-color-1);
    transition: 0.35s ease-in-out;

    :deep( p, span) {
      color: var(--btn-color-text-pressed);
    }
  }

  .btn-common.warning.active {
    background: var(--btn-color-1);
    transition: 0.35s ease-in-out;

    :deep( p, span) {
      color: var(--btn-color-text-pressed);
    }
  }

  .btn-common.warning:disabled {
    --color-1: color-mix(in srgb, gray 30%, transparent);
    --color-2: color-mix(in srgb, gray 30%, transparent);
    background: linear-gradient(to right, var(--color-1), var(--color-2));
    transition: 0.35s ease-in-out;
    cursor: not-allowed;

    :deep( p, span) {
      color: $color-3;
    }
  }

}

</style>
