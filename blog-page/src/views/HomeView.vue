<template>
  <div class="home">
    <h4 ref="p">Name : {{ name }}</h4>
    <h4>Age : {{ age }}</h4>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    let name = "Ram"
    let age = 25 

    const p = ref(null)
    const handleClick = () => {
      console.log(p,p.value)
    }

    return {name,age,handleClick,p}
  }
}
</script>
