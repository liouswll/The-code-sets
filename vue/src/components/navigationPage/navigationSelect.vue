<template>
  <div class="selector">
    <span class="selectorOne">楼选择</span>
    <el-select value="平台"  size="mini"  v-model="valuePlatform" v-on:change="changePlatform ">
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <span class="selectorTwo">层选择</span>
    <el-select value="服务器1"  size="mini" v-model="valueServer" v-on:change="changeServer">
      <el-option
        v-for="im in servers"
        :key="im.value"
        :label="im.label"
        :value="im.value"
      >
      </el-option>
    </el-select>
    <span class="selectorTwo">户选择</span>
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
    export default {
      name: "navigationSelect",
      data(){
        return{
          "list":[{
            "value":"1",
            "label": "一"
          },
            {
              "value":"2",
              "label":"二"
            },
            {
              "value":"3",
              "label":"三"
            }
            ,{
              "value": "4",
              "label": "四"
            },{
              "value": "5",
              "label":"五"
            }],
          "servers":[{
            "value":"1",
            "label":"1F"
          },
            {
              "value":"2",
              "label":"2F"
            }],
          valuePlatform: '楼',
          valueServer: '层',
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
          //let url = "/api/index";
          //axios.get(url).then((res)=>{
            //console.log("res")
            //res = res.data;
            //if (res.ret && res.data) {
              //const data = res.data;
              //this.list = data.options;
              //this.servers=data.servers;
              //console.log(this.list)
              //console.log(res.data)
          }
        }
      }

</script>

<style lang="less">
@import '../../assets/styles/navidationSelect';
</style>
