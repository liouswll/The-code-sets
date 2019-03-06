<template>
    <div class="chartRight">
      <div class="clTop">
        <div class="clTitle">带宽占用</div>
      </div>
      <div class="clMain">
        <div class="clMainTitle">
          <span class="clMain-Title" v-model="count">总带宽占用：<b>{{count}}M</b></span>
          <div style="width:220px;height:200px;background:#fff" id="total" class="clMainChart"></div>
          <span class="clMain-TitleOne">平台统计</span>
        </div>
        <div class="clMainTitle">
          <span class="clMain-Title" v-model="count">电信带宽占用：<b>{{count}}M</b></span>
          <div style="width:220px;height:200px;background:#fff" id="totalOne" class="clMainChart"></div>
          <span class="clMain-TitleOne">电信运营商</span>
        </div>
        <div class="clMainTitle">
          <span class="clMain-Title" v-model="count">移动宽占用：<b>{{count}}M</b></span>
          <div style="width:220px;height:200px;background:#fff" id="totalTwo" class="clMainChart"></div>
          <span class="clMain-TitleOne">移动运营商</span>
        </div>
        <div class="clMainTitle">
          <span class="clMain-Title" v-model="count">联通宽占用：<b>{{count}}M</b></span>
          <div style="width:220px;height:200px;background:#fff" id="totalThree" class="clMainChart"></div>
          <span class="clMain-TitleOne">联通运营商</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "mainright",
      data(){
        return{
          count:12311
        }
      },
      mounted() {
        this.roun();
      },
      methods: {
        roun() {
          let myChart = D3Charts.init("total");
          let myChartOne = D3Charts.init("totalOne");
          let myChartTwo = D3Charts.init("totalTwo");
          let myChartThree = D3Charts.init("totalThree");
          let option = {
            "data": [
              {
                "originData": {
                  "min": 0,
                  "max": 100,
                  "title": "互联网服务与终端",
                  "values": [
                    {
                      "value": 500,
                      "name": "平台占用带宽",
                      "color": "#2F97FF"
                    },
                    {
                      "value": 200,
                      "name": "闲置带宽",
                      "color": "#2DCDCD"
                    }
                  ]
                }
              }
            ],
            "tooltip": [
              {
                "trigger": "item"
              }
            ],
            "series": [
              {
                "type": "pie",
                "name": "arc1",
                "data": {
                  "dataIndex": 0
                },
                "center": [
                  "50%",
                  "50%"
                ],
                "radius": [
                  76,
                  91
                ],
                "title": {
                  "offsetCenter": [
                    0,
                    -200
                  ],
                  "textStyle": {
                    "fontSize": 14,
                    "color": "#fff"
                  }
                },
                "circleStyle": {
                  "innerCircleRadius": 70
                },
                "label": {
                  "position": "center",
                  "color": "#fff",
                  "formatter": function (orginD, d) {                            return (d*100).toFixed(0)+'%';                        },
                  "textStyle": {
                    "position": "center",
                    "color": "#fff",
                    "fontSize": 40,
                    "fontFamily": "DIN-Medium"
                  }
                }
              }
            ],
            "legend": [
              {
                "show": false,
                "textStyle": {
                  "color": "#485465"
                },
                "data": [
                  "数据计算服务",
                  "item2",
                  "item3",
                  "item4"
                ],
                "left": "25%",
                "top": "11%",
                "selected": {},
                "symbol": {
                  "type": "circle"
                },
                "orient": "horizontal"
              }
            ]
          }
          myChart.setOption(option);
          myChartOne.setOption(option);
          myChartTwo.setOption(option);
          myChartThree.setOption(option);
        }
      }
    }
</script>

<style lang="less">
  @import "../../assets/styles/mainright.less";
</style>
