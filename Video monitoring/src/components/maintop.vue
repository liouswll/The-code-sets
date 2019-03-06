<template>
    <div class="selector">
      <span class="selectorOne">业务方选择</span>
      <el-select value="平台"  size="mini"  v-model="valuePlatform" v-on:change="changePlatform ">
        <el-option
          v-for="item in list"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span class="selectorTwo">服务器选择</span>
      <el-select value="服务器1"  size="mini" v-model="valueServer" v-on:change="changeServer">
        <el-option
          v-for="im in servers"
          :key="im.value"
          :label="im.label"
          :value="im.value"
        >
        </el-option>
      </el-select>
    </div>
</template>

<script>
  //import axios from 'axios'
    export default {
      name: "maintop",
      data(){
        return{
          "list":[{
            "value":"1",
            "label": "平台"
          },
            {
              "value":"2",
              "label":"sns"
            },
            {
              "value":"3",
              "label":"达摩院"
            }
            ,{
              "value": "4",
              "label": "iFind"
            },{
              "value": "5",
              "label":"猎金"
            }],
          "servers":[{
            "value":"1",
            "label":"服务器1"
          },
            {
              "value":"2",
              "label":"服务器2"
            }],
          valuePlatform: '平台',
          valueServer: '服务器1'
        }
      },
      mounted(){
          this.getInfo()
      },
      methods: {
        changePlatform(){
          console.log('平台改变');
        },
        changeServer(){
          console.log('服务器改变');
        },
        getInfo(){
      //       let url = "/static/mock/index.json";
      //       axios.get(url).then((res)=>{
      //         res = res.data;
      //         if (res.ret && res.data) {
      //           const data = res.data;
      //     this.list = data.options;
      //     this.servers=data.servers;
      //     //console.log(this.list)
      //     //console.log(res.data)
      //   }
      // })


        }

      }
    }
</script>

<style lang="less">
  @import "../assets/styles/maintop.less";
</style>
