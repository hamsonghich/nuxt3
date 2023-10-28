<template>
  <div class="header_">
    <div class="logo">
      <img src="@/assets/icon/logo.svg" alt="">
      <span>TurboDEX</span>
    </div>
    <div class="list-option-page">
      <ul>
        <li v-for="(option, index) in listOptions" :key="index">
          <NuxtLink :to="option.link" v-if="index !== (listOptions.length - 1)">
            <span class="link-option-item">{{ option.name }}</span>
          </NuxtLink>
          <ButtonCommon :type-btn="'primary'" :_css-btn="cssBtnPrimary" v-if="index === (listOptions.length - 1)">
            <span>{{ option.name }}</span>
          </ButtonCommon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

import ButtonCommon from "@/components/common/ButtonCommon.vue";

defineComponent({
  name: 'HeaderComponent'
})
const cssBtnSecondary = {
  colors: ['#225D67', '#AEE5EA', '#122126', '#627784'],
  borders: ['1px', '10px']
}
const cssBtnPrimary = {
  colors: ['#1BBEF5', '#1BECA6'],
  borders: ['1px', '4px'],
  opacity: '20%'
}
const listOptions = ref([
  {
    name: 'TurboTools',
    link: 'turbo-tools'
  },
  {
    name: 'NFTs',
    link: 'nfts'
  },
  {
    name: 'Farms',
    link: 'farms'
  },
  {
    name: 'Swap',
    link: 'swap'
  },
  {
    name: 'Referrals',
    link: 'referrals'
  },
  {
    name: 'Connect',
    link: 'Connect'
  }
])
</script>
<style scoped lang="scss">
.header_ {
  @apply flex justify-between items-center py-[16px] px-[120px];
  border-bottom: 1px solid $color-5;
  background: $color-6;
  backdrop-filter: blur(10px);

  .logo {
    @apply flex justify-between items-center;
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    span {
      font-size: 20px;
      font-weight: 650;
      color: white;
    }
  }

  .list-option-page {
    ul {
      @apply flex justify-end items-center gap-[16px];
      .link-option-item {
        color: $color-7;
        font-size: 14px;
        font-weight: 700;
        padding: 8px 16px;
        &:hover{
          background: -webkit-linear-gradient(180deg, $color-1, $color-2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      :deep(.btn-common-component) {
        height: 32px;
      }
      :deep(.btn-common.primary) {
        min-width: 100px;
        span {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

