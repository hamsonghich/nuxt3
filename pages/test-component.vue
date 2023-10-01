<template>
  <div class="test-component w-full h-[100vh]">
    <div class="w-full">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Button Common" name="button_common">
          <div class="w-full">
            <div class="grid grid-cols-4 gap-[20px]">
              <div class="p-2 text-white">Default</div>
              <div class="p-2 text-white">Hover</div>
              <div class="p-2 text-white">Pressed</div>
              <div class="p-2 text-white">Disabled</div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnPrimary" :typeBtn="'primary'" @clickBtn="clickBtnEmit">
                  <div class="flex justify-center items-center">
                    <i class="fa-solid fa-poop pr-[10px]"></i>
                    <p class="!text-[20px]">Primary Button</p>
                  </div>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnPrimary" :typeBtn="'primary hover'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnPrimary" :typeBtn="'primary active'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnPrimary" :typeBtn="'primary'" disabled="true">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnSecondary" :typeBtn="'secondary'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnSecondary" :typeBtn="'secondary hover'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnSecondary" :typeBtn="'secondary active'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnSecondary" :typeBtn="'secondary'" disabled="true">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnWarning" :typeBtn="'warning'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnWarning" :typeBtn="'warning hover'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnWarning" :typeBtn="'warning active'">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
              <div class="p-2">
                <ButtonCommon :_cssBtn="cssPropsBtnWarning" :typeBtn="'warning'" disabled="true">
                  <p class="!text-[20px]">Primary Button</p>
                </ButtonCommon>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Input Common" name="input_common">
          <div class="w-full">
            <div class="grid grid-cols-2 gap-[20px]">
              <div class="p-2 text-white">Default</div>
              <div>
                <InputCommon type="text" :cssInputProps="cssPropsInput" @changeInput="changeInput"/>
                <InputCommon type="text" :cssInputProps="cssPropsInput"/>
              </div>
              <div class="p-2 text-white">Hover</div>
              <div>
                <InputCommon type="text" class="hover" :cssInputProps="cssPropsInput"/>
              </div>
              <div class="p-2 text-white">Pressed</div>
              <div>
                <InputCommon type="text" class="active" :cssInputProps="cssPropsInput"/>
              </div>
              <div class="p-2 text-white">Typing</div>
              <div>
                <InputCommon type="text" class="active" :inputValue="'Typing ...'" :cssInputProps="cssPropsInput"/>
              </div>
              <div class="p-2 text-white">Disabled</div>
              <div>
                <InputCommon type="text" class="active" :disabled="true" :cssInputProps="cssPropsInput"/>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import type {TabsPaneContext} from 'element-plus'
import ButtonCommon from '@/components/common/ButtonCommon.vue'
import InputCommon from '@/components/common/InputCommon.vue'

const activeName = ref('input_common')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
// props button common
const cssPropsBtnPrimary = {
  colors: ['#1BBEF5', '#1BECA6'],
  borders: ['1px', '10px'],
  opacity: '20%'
}
const cssPropsBtnSecondary = {
  // color-bg color-text color-bg-pressed color-text-pressed
  colors: ['#225D67', '#AEE5EA', '#122126', '#627784'],
  borders: ['1px', '10px']
}
const cssPropsBtnWarning = {
  colors: ['#F66061'],
  borders: ['1px', '10px'],
  opacity: '20%'
}
const clickBtnEmit = () => {
  alert('click btn')
}

// props input common
const cssPropsInput = {
  colors: ['#1BBEF5', '#1BECA6', '#1D272F', '#0D171B'],
  borders: ['1px', '5px'],
  opacity: '100%'
}
const changeInput = (valueInput: any) => {
  console.log('valueInput', valueInput)
}
</script>
<style scoped lang="scss">
.test-component {
  background-image: url("@/assets/img/base/bg-component-template.png");
  background-size: cover;

  :deep(.el-tabs__item) {
    color: white;
    font-size: 20px;
    padding: 35px 30px;
  }

  :deep(.el-tabs__item.is-active) {
    color: orange;
  }

  :deep(.el-tabs__active-bar) {
    background: orange;
    height: 3px;
  }
}

p {
  //color: red;
}
</style>