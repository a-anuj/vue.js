<template>
    <div v-if="job">
        <h1>Job Details here...</h1>
        <h3>{{ job.title }}</h3>
        <h4>Job ID is {{ id }}</h4>
        <p>Job Details : {{ job.details }}</p>
    </div>

    <div v-else>
        <h3>Loading Details...</h3>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            id : this.$route.params.id,
            job:null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/'+this.id)
            .then(res=>res.json())
            .then(data=> this.job=data)
            .catch(err=>console.log(err.message))
    }
}
</script>

<style>

</style>