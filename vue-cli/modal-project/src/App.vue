<template>
  <h1>Hello</h1>
  <p>Welcome to the Vue World!!</p>
  <teleport to="#modals" v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign-Up</a>
        <a href="#">Sign-In</a>
      </template>
        <h1>Welcome to the Friday Sale!</h1>
        <p>Get everything at 30%-50% offer!!</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModal2">
    <Modal :theme="theme" @close="toggleModal2">
      <h1>Subsribe to get exiting news!!!</h1>
      <p>Thanks for visiting...</p>
    </Modal>
  </teleport>

  
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModal2">Open Modal 2</button>
  
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
      theme: "dark",
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal()
    {
      this.showModal = !this.showModal
    },

    toggleModal2() 
    {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app,#modals {
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
