<template>
    <div class="powerTop">
      <span class="powerTopOne">水表统计</span>
      <el-select  class="powerTopSe" v-model="value" filterable placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-tickets"></i>
      <div class="powerTopTab">
        <div id="Four" style="width: 780px;height:243px;" ></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "powerTop",
      data() {
        return {
          options: [{
            value: '选项1',
            label: '前天'
          }, {
            value: '选项2',
            label: '昨天'
          }, {
            value: '选项3',
            label: '今天'
          }],
          value: '今天'
        }
      },
      mounted() {
        this.power()
      },
      methods:{
        power(){
          let myChart = echarts.init(document.getElementById('Four'));
          let option = {
            color: ['#3398DB'],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    }
</script>

<style lang="less">
  @import '../../../assets/styles/powerTop';
</style>
