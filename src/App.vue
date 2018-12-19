<template>
  <div id="main" class="app-main">
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data () {
            return {

            };
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    };
</script>

<style lang="scss">
html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.app-main{
    width: 100%;
    height: 100%;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
    font-family: Microsoft Yahei,Helvetica Neue,Helvetica,Arial,sans-serif;
    overflow-x: hidden;
    background: RGBA(255, 255, 255, 1);
    color:RGBA(13, 14, 16, 1)
}
</style>
