<template>
    <div class="interfacePage">
      <div class="interfaceLeft">
        <p>能耗信息</p>
      </div>
      <div class="interfaceRight">
        <el-autocomplete  class="interfaceSelect" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" suffix-icon="el-icon-search" size="medium">
        </el-autocomplete>
        <p>版本信息：v10.2.3</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "interfacePage",
      data() {
        return {
          restaurants: [],
          state: '',
          timeout:  null
        };
      },
      methods: {
        loadAll() {
          return [
            { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
            { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
            { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
            { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
            { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
            { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
            { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
            { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
            { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
            { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
            { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
            { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
            { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          ];
        },
        querySearchAsync(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 2000 * Math.random());
        },
        createStateFilter(queryString) {
          return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {
          console.log(item);
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }
</script>

<style lang="less">
@import "../../assets/styles/interfaceUser.less";
</style>
