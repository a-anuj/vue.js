<template>
  <div class="home">
    <input type="text" v-model="name"><br>
    <h4 ref="p">Name : {{ name }}</h4>
    <h4>Age : {{ age }}</h4>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add age</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    let name = ref("Ram")
    let age = ref(25) 

    const p = ref(null)
    const handleClick = () => {
      name.value = 'Lakshman'
      age.value = 23
    }

    return {name,age,handleClick,p}
  }
}
</script>
