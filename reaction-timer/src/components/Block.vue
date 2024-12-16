<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click Here Fast !!
  </div>
</template>

<script>
export default {
    props:['delay'],
    data () {
        return {
            showBlock:false,
            timer:null,
            reactionTime:0
        }
    },
    mounted() {
        setTimeout(()=>{
            this.showBlock = !this.showBlock
            this.startTimer()
        },this.delay)
    },
    methods: {
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime += 10
            },10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end',this.reactionTime)
        }
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