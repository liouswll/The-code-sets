<template>
    <div class="chartLeft">
        <div class="clTop">
          <div class="clTitle">在线人数</div>
        </div>
        <div class="clMain">
          <div class="clMainTitle" v-model="count">总在线人数：<b>{{count}}</b></div>
          <div style="width:220px;height:220px;background:#fff" id="chart" class="clMainChart"></div>
          <div></div>
        </div>
    </div>
</template>
<script>
    export default {
      name: "mainleft",
      data() {
        return {
          count: 12656,
        }
      },
      mounted() {
        this.roun();
      },
      methods: {
        roun() {
          let myChart = D3Charts.init("chart");
          let option = {
            "data": [
              {
                "originData": {
                  "title": "互联网服务与终端",
                  "values": [
                    {
                      "value": 500,
                      "name": "电信",
                      "color": "#2F97FF"
                    },
                    {
                      "value": 200,
                      "name": "移动",
                      "color": "#50E3C2"
                    },
                    {
                      "value": 120,
                      "name": "联通",
                      "color": "#FF5646"
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
                  "45%"
                ],
                "radius": [
                  45,
                  90
                ],
                "title": {
                  "offsetCenter": [
                    0,
                    -200
                  ],
                  "textStyle": {
                    "fontSize": 18,
                    "color": "#fff"
                  }
                },
                "label": {
                  "formatter": function (orginD, d) {
                    return (d*100).toFixed(0) +'%';
                    },
                  "textStyle": {
                    "position": "center",
                    "color": "#fff",
                    "fontSize": 14,
                    "fontFamily": "DIN-Medium"
                  }
                },
                "itemStyle": {
                  "shadowRadius": 5
                }
              }
            ],
            "legend": [
              {
                "show": true,
                "textStyle": {
                  "color": "#485465"
                },
                "data": [
                  "电信",
                  "移动",
                  "联通"
                ],
                "left": "16%",
                "top": "92.4%",
                "selected": {},
                "symbol": {
                  "type": "circle"
                },
                "orient": "horizontal"
              }
            ]
          }
          myChart.setOption(option);
        }
      }


    }
</script>

<style lang="less">
  @import "../../assets/styles/mainleft.less";
</style>
