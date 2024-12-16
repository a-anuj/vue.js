<template>
  <div class="block" v-if="showBlock">
    Click Here Fast !!
  </div>
</template>

<script>
export default {
    props:['delay'],
    data () {
        return {
            showBlock:false
        }
    },
    mounted() {
        setTimeout(()=>{
            this.showBlock = !this.showBlock
        },this.delay)
    }
}
</script>

<style>
*{
    margin: 0px;
}
.block{
    width: 100%;
    background: gray;
    color: aliceblue;
    text-align: center;
    padding: 100px 0;
    margin: 50px 0px;
}
</style>    