<template>
  <div>
    <navigation-select></navigation-select>
    <navigation-Voltage></navigation-Voltage>
    <navigation-current></navigation-current>
    <navigation-power></navigation-power>
    <power-Top></power-Top>
  </div>
</template>

<script>
  import navigationSelect from './navigationSelect'
  import navigationVoltage from './main/navigationVoltage'
  import navigationCurrent from './main/navigationCurrent'
  import navigationPower from './main/navigationPower'
  import powerTop from './main/powerTop'
  export default {
    name: "combinedPage",
    components:{
      navigationSelect,
      navigationVoltage,
      navigationCurrent,
      navigationPower,
      powerTop
    }
  }
</script>

<style scoped>

</style>
