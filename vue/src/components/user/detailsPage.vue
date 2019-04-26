<template>
    <div>
      <interface-page-user></interface-page-user>
      <el-tabs :tab-position="tabPosition"  type="card" style="height: 840px;margin-top: 2px;">
        <el-tab-pane class="tabPositionOne" label="状态统计">
          <combined-page-user></combined-page-user>
        </el-tab-pane>
        <el-tab-pane label="账户信息">

        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import interfacePageUser from '../interface/interfacePageuser'
  import combinedPageUser from '../navigationPage/combinedPageUser'
    export default {
      name: "detailsPage",
      components:{
        interfacePageUser,
        combinedPageUser
      },
      data(){
          return{
            tabPosition:'top'
          }
      }
    }
</script>

<style scoped>

</style>
