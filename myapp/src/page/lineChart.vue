<template>
    <div>
      {{111111}}
      <div id="echarts"></div>
    </div>
</template>

<script>
    export default {
        name: "lineChart",
        data() {
            return {
              charts: null,
              line_chart: {
                legend: {
                  x : '46%',
                  y : 'bottom',
                  selectedMode: 'single',
                  data: ["全部", "用药", "检查", "检验", "手术"]
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    animation: true,
                    label: {
                      backgroundColor: '#505765'
                    }
                  }
                },
                xAxis: {
                  // type: 'category',
                  data: ["2019-04-01", "2019-04-02", "2019-04-03", "2019-04-04", "2019-04-05"]
                },
                yAxis: {
                  type: "value"
                },
                series: [{
                  name: "全部",
                  type: "line",
                  stack: "总量",
                  data: [120, 132, 101, 134, 90]
                }, {
                  name: "用药",
                  type: "line",
                  stack: "总量",
                  data: [220, 182, 191, 234, 290]
                }, {
                  name: "检查",
                  type: "line",
                  stack: "总量",
                  data: [150, 232, 201, 154, 190]
                }, {
                  name: "检验",
                  type: "line",
                  stack: "总量",
                  data: [320, 332, 301, 334, 390]
                }, {
                  name: "手术",
                  type: "line",
                  stack: "总量",
                  data: [820, 932, 901, 934, 390]
                }]
              }
            }
        },
        methods: {
          get_echarts: function() {
            this.charts = this.$echarts.init(document.getElementById("echarts"));
            // 把配置和数据放这里
            this.charts.setOption(this.line_chart)
          }
        },
      mounted() {
          this.get_echarts()
      }
    }
</script>

<style scoped>
    #echarts {
      width: 100%;
      height: 500px;
    }
</style>
