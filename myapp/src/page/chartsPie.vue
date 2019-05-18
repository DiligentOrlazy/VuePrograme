<template>
    <div id="dangerRecType"></div>
</template>

<script>
    export default {
        name: "chartsPie",
        data() {
          return {
            dangerRecTypeOption: {
              legend: {
                x : '66%',
                y : '18%',
                orient : 'vertical',
                data: ["用藥","檢查","檢驗","手術"]
              },
              series: [{
                type: 'pie',
                data: [{
                  value: 1548,
                  name: '用藥'
                },{
                  value: 535,
                  name: '檢查'
                },{
                  value: 510,
                  name: '檢驗'
                },{
                  value: 634,
                  name: '手術'
                }]
              }]
            }
          }
        },
      methods: {
        add() {
          const  dangerRecType = this.$echarts.init(document.getElementById('dangerRecType'));
          dangerRecType.setOption(this.dangerRecTypeOption);
        }
      },
      mounted() {
          this.add()
      }
    }
</script>

<style scoped>
    #dangerRecType {
      width: 100%;
      height: 400px;
    }
</style>
