<template>
  <div class="home">
    <h1>Home page</h1>
    <PostList :posts="posts"/>
    
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '@/components/PostList.vue';

export default {
  name: 'HomeView',
  components:{PostList},
  setup() {
    const posts = ref([
      {title : "Welcome to the blog", body : 'LoremIpsium', id:1},
      {title : "Top 5 vue tips", body: "Lorem", id:2} 
    ])

    return {posts}
  }
}
</script>
