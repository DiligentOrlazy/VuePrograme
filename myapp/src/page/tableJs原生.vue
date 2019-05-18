<template>
  <div>
    <table id="table">
      <thead>
         <td>key</td>
         <td>value</td>
      </thead>
      <tr v-for="(item,index) in tabledata" :key="index">
        <td id="index">{{item[0]}}<input class="input" v-model="item[0]"  @change="change(item[0])"/></td>
        <td>{{item[1]}}<input class="input"  :value="item[1]"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "tableJs",
        data() {
          return {
            tabledata: []
          }
        },
        methods: {
          getdata() {
            let data = [
              ['HHA','321'],
              ['健身房','213'],
              ['asf','asdad']
            ];
            this.tabledata = data;
          },
          change(d) {
            console.log(d)
          },
          getclickdata() {
            var mytable = document.getElementsByTagName('input');
            console.log(mytable)
            // var data = [];
            // console.log(mytable.rows.length)
            // for(var i=0,rows=mytable.rows.length; i<rows; i++){
            //   for(var j=0,cells=mytable.rows[i].cells.length; j<cells; j++){
            //     if(!data[i]){
            //       data[i] = new Array();
            //     }
            //     data[i][j] = mytable.rows[i].cells[j].innerHTML;
            //   }
            // }
            // console.log(data)
            // return data;
          }

        },
      mounted() {
          this.getdata();
          this.getclickdata();
      }
    }
</script>

<style scoped>

</style>
