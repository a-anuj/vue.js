<template>
  <h1>Hello</h1>
  <Modal /> 
  
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components:{
    Modal
  },
  data()  {
    return {
      title : "Hello ,Welcome to the Vue World!!"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
