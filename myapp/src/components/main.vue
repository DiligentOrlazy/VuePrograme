<template>
    <div>
      <button @click="gogo">进入基础页面</button>
      <el-row class="tac">
        <el-col :span="12">
          <h5>默认颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            v-for="(item,index) in menuList"
          >
            <el-submenu :index="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.title}}</span>
              </template>
              <el-submenu v-for="(it,index) in item.children" :index="index">
                <template slot="title">{{it.title}}</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { menuList } from "./menuList";
  export default {
    name: 'main',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        menuList: []
      }
    },
    methods: {
      gogo() {
        this.$router.push({
          path: '/basepage'
        })
      },
      getMenulist() {
        this.menuList = menuList;
        console.log(this.menuList)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      this.getMenulist();
    }
  };
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
