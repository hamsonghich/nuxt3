<template>
  <div>
<!--    <p class="text-[16px] font-bold">Test state</p>-->
<!--    <p>counter: {{counter}}</p>-->
<!--    <button @click="plusCounter">click ++</button> <br>-->
<!--    <button @click="subCounter">click &#45;&#45;</button>-->

<!--    <div>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</div>-->
<!--    <input type="text" v-model="namePerson" placeholder="name">-->
<!--    <input type="text" v-model="agePerson" placeholder="age">-->
<!--    <input type="text" v-model="sexPerson" placeholder="sex">-->
<!--    <button @click="submitForm">Submit</button>-->

<!--    <p>Name: {{_person.personData.value?.namePerson}}</p>-->
<!--    <p>Name: {{_person.personData.value?.agePerson}}</p>-->
<!--    <p>Name: {{_person.personData.value?.sexPerson}}</p>-->


<!--    <div>-->
<!--      <button @click="piniaCounterStore.increment()">increment</button>-->
<!--      <p>{{piniaCounterStore.doubleCounter}}</p>-->
<!--      {{piniaCounterStore.counter}}-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import {useCounter, usePersonData, useUserData} from "@/composables/states.ts"
import {usePiniaCounterStore} from '~/stores/piniaCounter.js'
import {ref} from 'vue'
let counter = useCounter()
const plusCounter = () => {
  counter.value++
}
const subCounter = () => {
  counter.value--
}

const userData = useUserData()
userData.setUserData('set user data')


const namePerson = ref('')
const agePerson = ref('')
const sexPerson = ref('')
const _person = usePersonData()

const submitForm = () => {
  const person_ = { namePerson, agePerson, sexPerson }
  _person.setPersonData(person_)
}

const piniaCounterStore = usePiniaCounterStore()

</script>

<style scoped lang="scss">
input {
  border: 1px solid black;
}
button{
  border: 1px solid black;
  padding: 0 10px;
}
</style>