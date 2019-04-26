<template>
  <div>
    <navigation-Voltage></navigation-Voltage>
    <navigation-current></navigation-current>
    <navigation-power></navigation-power>
    <power-Top></power-Top>
  </div>
</template>

<script>
  import navigationVoltage from './main/navigationVoltage'
  import navigationCurrent from './main/navigationCurrent'
  import navigationPower from './main/navigationPower'
  import powerTop from './main/powerTop'
  export default {
    name: "combinedPage",
    components:{
      navigationVoltage,
      navigationCurrent,
      navigationPower,
      powerTop
    }
  }
</script>

<style scoped>

</style>
