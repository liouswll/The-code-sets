<template>
    <div class="main">
        <maintop></maintop>
        <mainleft></mainleft>
        <mainright></mainright>
        <foot></foot>
    </div>
</template>

<script>
  import maintop from './maintop'
  import mainleft from './maincenterone/mainleft'
  import mainright from './maincenterone/mainright'
  import foot from './maincenterone/foot'
    export default {
      name: "mainOne",
      components: {
        maintop,
        mainleft,
        mainright,
        foot
      }
    }
</script>

<style scoped>
.main{
  height:793px;
  width: 1530px;
}
</style>
