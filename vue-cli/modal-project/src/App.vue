<template>
  <h1>Hello</h1>
  <Modal :text="first_text" :subtext="second_text" :theme="theme"/> 
  
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
      title : "Hello ,Welcome to the Vue World!!",
      first_text:"Purchase your tickets soon",
      second_text:"Sale is gonna end!!",
      theme: "dark"
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
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

</style>
