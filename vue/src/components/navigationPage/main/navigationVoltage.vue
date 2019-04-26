<template>
    <div class="voltage">
      <span class="voltageOne">电压统计</span>
      <el-select  class="voltageSe" v-model="value" filterable placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-tickets"></i>
      <div class="voltageTab">
        <div id="One" style="width: 780px;height:243px; " ></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "navigationVoltage",
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
        this.tab()
      },
      methods:{
        tab(){
          let myChart = echarts.init(document.getElementById('One'));
          let option = {
            title: {
              text: 'Step Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['Step Start', 'Step Middle', 'Step End']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name:'Step Start',
                type:'line',
                step: 'start',
                data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                name:'Step Middle',
                type:'line',
                step: 'middle',
                data:[220, 282, 201, 234, 290, 430, 410]
              },
              {
                name:'Step End',
                type:'line',
                step: 'end',
                data:[450, 432, 401, 454, 590, 530, 510]
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    }
</script>

<style lang="less">
@import '../../../assets/styles/navigationVoltage';
</style>
