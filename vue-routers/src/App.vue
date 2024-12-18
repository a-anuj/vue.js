<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name : 'Jobs'}">Jobs</router-link>
  </nav>
  <router-view/>
</template>

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
</style>
