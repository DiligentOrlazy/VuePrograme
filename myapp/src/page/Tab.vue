<template>
    <div id="quality">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="提醒类型维度" name="first">
          <ul id="remind">
            <li>
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <el-select v-model="value3" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <el-select v-model="value4" placeholder="请选择">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
          </ul>
          <ul id="search">
            <li>
              <el-button type="primary" plain @click="datas()">全部</el-button>
              <el-button type="primary" plain @click="durations(7 * 24 * 3600 * 1000)">7天</el-button>
              <el-button type="primary" plain @click="durations(14 * 24 * 3600 * 1000)">14天</el-button>
              <el-button type="primary" plain @click="durations(30 * 24 *3600 * 1000)">30天</el-button>
            </li>
            <li>
                <el-date-picker
                  v-model="valueDate"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  format="yyyy年MM月dd日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
            </li>
          </ul>
          <el-table
            :data="tableData.slice((currentPage4 - 1) * pagesize, currentPage4 * pagesize)"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              :formatter="formatter">
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[2, 4, 6, 8]"
            :page-size=pagesize
            layout="total, sizes, prev, pager, next, jumper"
            :total=tableData.length>
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "tab",
        data() {
            return {
              activeName: 'first',
              currentPage4: 1,
              pagesize: 2, //每页显示10条
              options: [{
                value: '选项一',
                label: '黄金级'
              },{
                value: '选项二',
                label: '白银级'
              }],
              options2: [{
                value: '选项一',
                label: '黄金'
              },{
                value: '选项二',
                label: '白银'
              }],
              options3: [{
                value: '选项一',
                label: '黄'
              },{
                value: '选项二',
                label: '白银级'
              }],
              options4: [{
                value: '选项一',
                label: '黄'
              },{
                value: '选项二',
                label: '白'
              }],
              value1: '黄金级',
              value2: '',
              value3: '',
              value4: '',
              valueDate: '',
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }],
              duration: []
            }
        },
      methods: {
          handleClick(tab,event) {
            console.log(tab,event)
          },
          formatter(row, column) {
            return row.address;
          },
          durations(time) {
              let date = new Date();
              let now = new Date();
              const start = date.getFullYear()+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0');
              let date1 = new Date(now.getTime() + time);
              const end = date1.getFullYear()+ '-'+ (date1.getMonth()+1).toString().padStart(2,'0')+'-'+date1.getDate().toString().padStart(2,'0');
              this.duration.push(start,end);
              if(this.duration.length > 2) {
                this.duration.splice(0,2)
              }
              console.log(this.duration)
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagesize = val;
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage4 = val;
          }
      }
    }
</script>

<style scoped>
    #remind {
      width: 100%;
      display: flex;
      justify-content: space-around;
      list-style: none;
    }
    #search {
      width: 40%;
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    .el-button+.el-button {
      margin-left: -6px;
    }
</style>
