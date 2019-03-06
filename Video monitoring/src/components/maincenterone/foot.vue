<template>
    <div class="footTab">
      <div class="fTabTitle">
        <span>带宽占用TOP10视频</span>
        <el-select value="平台"  size="mini" class="titleChange" v-model="value" v-on:change="levelChange">
          <el-option
            v-for="item in list"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="mainChange">
        <el-table
          :data="tableData"
          border
          stripe
          fit
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="业务方"
            width="251">
          </el-table-column>
          <el-table-column
            prop="name"
            label="视频名称"
            width="451">
          </el-table-column>
          <el-table-column
            prop="province"
            label="占用带宽（M）"
            width="251">
          </el-table-column>
          <el-table-column
            prop="peo"
            label="当前在线人数（人）"
            width="251">
          </el-table-column>

          <el-table-column
            label="操作"
            width="325">
            <template slot-scope="scope">
              <el-button type="text" size="small">下线</el-button>
              <el-button type="text" size="small">限流</el-button>
              <el-button type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "foot",
      data() {
        return {
          /*options: [{
            value: '1',
            label: 'sns'
          },
            {
              value: '2',
              label: '猎金'
            },
            {
              value: '3',
              label: '达摩院'
            }
            , {
              value: '4',
              label: 'iFind'
            }],*/
          value: '平台',
          list:[],
          tableData:[]

          /*tableData: [{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '552',
            peo: '725727',
          }, {
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '542',
            peo: '72572',
          },{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '452',
            peo: '7257',
          }, {
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '244',
            peo: '52727',
          }, {
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '424',
            peo: '275752',
          }, {
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '878',
            peo: '275272',
          },{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '244',
            peo: '752752',
          },{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '788',
            peo: '752752',
          },{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '787',
            peo: '725727',
          },{
            date: 'sns',
            name: 'http://localhost:8080/#/',
            province: '788',
            peo: '27527',
          }]*/

        }
      },
      mounted(){
        this.levelChange()
      },
      computed:{

      },
      methods: {
        levelChange() {
          let url = "/static/mock/foot.json";
          axios.get(url).then((res)=>{
            res = res.data;
            if (res.ret && res.data) {
              const data = res.data;
              this.list = data.options;
              this.tableData = data.tableData;
            }
          })
        }
      }
    }
</script>

<style lang="less">
  @import "../../assets/styles/foot.less";
</style>
