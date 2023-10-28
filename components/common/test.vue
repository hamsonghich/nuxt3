<script setup lang="ts">

</script>

<template>
  <div class="flex items-center">
    <button @click="$router.go(-1)"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">戻る</button>
<!--    // roi khi deo theo thu tu-->
    <button v-if="$userRole === '1' && !getEnabled($userRole, status, '登録')"
            @click="showModal('登録確認', '見積もり登録します。よろしいですか？')"
            class="ml-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">登録</button>

    <button v-else-if="$userRole === '2' && !getEnabled($userRole, status, '登録') && state.estimatable"
            @click="showModal('登録確認', '見積もり登録します。よろしいですか？')"
            class="ml-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">登録</button>
<!--    // roi vao khi ko di theo thu tu-->
    <button v-else type="button"
            class="ml-2 text-white bg-green-200 dark:bg-green-500 cursor-not-allowed font-medium rounded-lg text-base px-6 py-3.5 text-center"
            disabled>登録</button>
    <button v-if="!getEnabled($userRole, status, '差戻')" @click="showModal('差戻確認', '見積もりを差し戻します。よろしいですか？')"
            class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">差戻</button>
    <button v-if="!getEnabled($userRole, status, '発注')" @click="showModal('発注確認', '見積もりを発注します。よろしいですか？')"
            class="ml-2 text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">発注</button>
    <button v-if="!getEnabled($userRole, status, '取下')" @click="showModal('取下確認', '見積もりを取り下げます。よろしいですか？')"
            class="ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">取下</button>
  </div>

</template>

<style scoped lang="scss">

</style>