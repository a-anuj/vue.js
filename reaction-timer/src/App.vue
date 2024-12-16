<template>
  <h1>Reaction timer</h1>
  <button @click="showScreen"  :disabled="isShowing">Play</button>
  <Block v-if="isShowing" :delay="delay"/>
</template>

<script>

import Block from './components/Block.vue';

export default {
  name: 'App',
  data () {
    return {
      isShowing : false,
      delay: null
    }
  },
  components:{Block},
  methods: {
    showScreen()
    {
      this.isShowing = !this.isShowing,
      console.log(this.isShowing)
      this.delay = 2000 + Math.random()*5000
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
  color: #444;
  margin-top: 60px;
}
h1{
  font-size: 60px;
}
button{
  margin-top: 40px;
}
</style>
