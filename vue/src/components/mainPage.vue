<template>
  <div class="page">
    <interface-page></interface-page>
    <navigation-page></navigation-page>
  </div>
</template>

<script>
  import interfacePage from './interface/interfacePage'
  import navigationPage  from './navigationPage/navigationPage'
    export default {
      name: "mainPage",
      components:{
        interfacePage,
        navigationPage
      }
    }
</script>

<style lang="less">
  @import "../assets/styles/mainPage.less";
</style>
