<template>
  <div class="result">
    <h3>Reaction time : {{ score }} ms</h3>
    <p class="rank">{{ this.rank }}</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            rank : null
        }
    },
    props:['score'],
    mounted() {
        if (this.score<300){
            this.rank = "Awesome!! Try to get within 100 😏"
        }
        else if(this.score<700){
            this.rank = "Not Bad..."
        }
        else{
            this.rank = "Very slow! Just do more practice :)"
        }
    }
}
</script>

<style>
.rank{
    font-size: large;
}
</style>