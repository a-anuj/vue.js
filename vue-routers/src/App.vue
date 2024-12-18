<template>
  <nav>
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name : 'Jobs'}">Jobs</router-link>
  </nav>
  

  <button @click="redirect">Redirect</button>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <router-view class="style"/>
</template>

<script>
export default {
  methods:{
    redirect() {
      this.$router.push({name:'home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: 500ms;
  text-decoration: none;
  background: white;
  color: black;
  border: 1px solid black;
  padding: 7px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
  transition: 500ms;
  background: #2c3e50;
  color: white;
  padding: 7px;
  border-radius: 5px;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
.style{
  margin-top: 40px;
}
</style>
