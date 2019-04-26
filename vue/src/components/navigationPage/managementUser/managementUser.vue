<template>
    <div class="managementUser">
      <el-table
        border
        :data="tableData"
        style="width: 100%;"
      >
        <el-table-column
          fixed
          prop="date"
          label="注册日期"
          width="300">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名"
          width="300">
        </el-table-column>
        <el-table-column
          prop="totalVoltage"
          label="电压总量"
          width="300">
        </el-table-column>
        <el-table-column
          prop="totalCurrent"
          label="电流总量"
          width="300">
        </el-table-column>
        <el-table-column
          prop="totalWater"
          label="水总量"
          width="300">
        </el-table-column>
>
        <el-table-column
          fixed="right"
          label="操作"
          width="300">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              封禁
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              注销
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
</template>

<script>
    export default {
        name: "managementUser",
        methods: {
          deleteRow(index, rows) {
            rows.splice(index, 1);
          }
        },
        data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-01',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: '1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          },{
            date: '2016-05-03',
            name: '王小虎',
            totalVoltage: '121651V',
            totalCurrent: '161561A',
            totalWater: ' 1518M^3',
          }]
        }
      }
      }
</script>

<style lang="less">
@import "../../../assets/styles/managementUser";
</style>
