<template>
    <div class="current">
      <span class="currentOne">电流统计</span>
      <el-select  class="currentSe" v-model="value" filterable placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-tickets"></i>
      <div class="currentTab">
        <div id="Two" style="width: 780px;height:243px;" ></div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "navigationCurrent",
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
        this.current()
      },
      methods:{
        current(){
          let myChart = echarts.init(document.getElementById('Two'));
          let option = {
            title: {
              text: '折线图堆叠'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:['邮件营销','联盟广告','视频广告']
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
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
              }
            ]
          };
          myChart.setOption(option);
        }
      }
    }
</script>

<style lang="less">
  @import '../../../assets/styles/navigationCurrent';
</style>
