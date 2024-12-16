<template>
  <h1>Reaction timer</h1>
  <button @click="showScreen"  :disabled="isShowing">Play</button>
  <Block v-if="isShowing" :delay="delay" @end="endGame"/>
  <Results v-if="showResults" :score="score"/>
</template>

<script>

import Block from './components/Block.vue';
import Results from './components/Results.vue'

export default {
  name: 'App',
  data () {
    return {
      isShowing : false,
      delay: null,
      score:null,
      showResults : false,
    }
  },
  components:{Block, Results},
  methods: {
    showScreen()
    {
      this.isShowing = true,
      this.delay = 2000 + Math.random()*5000
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isShowing = false
      this.showResults = true
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
  margin-bottom: 40px;
}
p{
  margin-top:30px
}
</style>
