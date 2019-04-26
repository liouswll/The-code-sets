<template>
  <div class="navigation">
    <el-tabs :tab-position="tabPosition"  type="card" style="height: 840px;">
      <el-tab-pane class="tabPositionOne" label="状态统计">
          <combined-Page></combined-Page>
      </el-tab-pane>
      <el-tab-pane label="用户管理">
          <management-user></management-user>
      </el-tab-pane>
      <el-tab-pane label="待开发...">

      </el-tab-pane>
      <el-tab-pane label="待开发...">

      </el-tab-pane>
      <el-tab-pane label="待开发...">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import combinedPage from './combinedPage';
  import managementUser from './managementUser/managementUser'
  export default {
      name: "navigationPage",
      components:{
        combinedPage,
        managementUser
      },
      data(){
          return{
            tabPosition:"top"
          }
      }
    }
</script>

<style lang="less">
@import "../../assets/styles/navigation";
</style>
