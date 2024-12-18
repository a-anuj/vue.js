<template>
    <h1>Jobs</h1>
    <h4 v-for="job in jobs" :key="job.id">{{ job.title }}</h4>
</template>

<script>
export default {
    data () {
        return {
            jobs : [
                { title : "Web Developer" ,id:1,details:"Frontend"},
                {title : "App Developer",id:2,details:"Frontent"},
                {title : "DataBase Organizer",id:3,details:"Backend"}
            ]
        }
    }
}
</script>

<style>

</style>