<template>
    <div class="tab">
      <div class="title">实时监控功能</div>
      <el-tabs type="card" class="changeTitle" v-model="activeIndex">
        <el-tab-pane label="实时监控" name="first"><main-one></main-one></el-tab-pane>
        <el-tab-pane label="数据统计" name="second"><main-two></main-two></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    import mainOne from "./mainOne";
    import mainTwo from "./mainTwo";
    export default {
      name: "headview",
      data () {
        return {
          activeIndex:'first'
        }
      },
      components: {
        mainOne,
        mainTwo
      }
    }
</script>

<style lang="less">
  @import "../assets/styles/headview.less";
</style>
