<template>
  <div class="home">
    <h1>Home page</h1>
    <input type="text" v-model="search">
    <p>Searching for {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';


export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['Toyota','Honda','Tata','Benz','BMW','Mahindra','Volvo','Skoda'])
    const matchingNames = computed(()=>{
      return names.value.filter((name) => name.includes(search.value))
    })

    return {search,matchingNames}
  }
}
</script>
