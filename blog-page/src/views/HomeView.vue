<template>
  <div class="home">
    <h4>Name : {{ name }}</h4>
    <h4>Age : {{ age }}</h4>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    let name = "Ram"
    let age = 25

    const handleClick = () => {
      console.log("Clicked")
    }

    return {name,age,handleClick}
  }
}
</script>
