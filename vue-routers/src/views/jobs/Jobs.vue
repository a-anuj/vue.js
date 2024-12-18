<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{name : 'JobDetails', params:{ id: job.id } }">
            <h3>{{ job.title }}</h3>
        </router-link>
    </div>
</template>

<script>
import JobDetails from './JobDetails.vue';

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
    .job h3{
        background:#f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h3:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>