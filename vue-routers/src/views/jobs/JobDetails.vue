<template>
  <h1>Job Details here...</h1>
  <p>Job ID is {{ $route.params.id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id : this.$route.params.id
        }
    }
}
</script>

<style>

</style>