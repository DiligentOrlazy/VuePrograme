<template>
	<div>
		<el-button type="primary" @click='table'>表格</el-button>
		<el-button type="primary" @click='tree'>树</el-button>
		<el-button type="primary" @click='form'>form表单</el-button>
		<el-button type="success" @click='busData'>接收bus传来的值</el-button>
		<el-button type="primary" @click='echart'>进入echarts页面</el-button>
    <el-button type="success" round @click="control">进入质控管理页面</el-button>
    <el-button type="success" round @click="ttt">进入原生表格</el-button>
		<child :data="parent"></child>
	</div>
</template>

<script>
	import child from '../page/child.vue'
	export default {
		name: 'basePage',
		data() {
			return {
				parent: "父组件的值"	
			}
		},
		components: {child},
		methods: {
			table() {
				this.$router.push({
					path: '/table'
				})
			},
			tree() {
				this.$router.push({
					path: '/tree'
				})
			},
			form() {
				this.$router.push({
					path: '/form'
				})
			},
			busData() {
				bus.$on("sendData",function(val) {
					console.log(val)
				})
			},
			echart() {
				this.$router.push({
					path: '/chart'
				})
			},
      ttt() {
        this.$router.push({
          path: '/tablejs'
        })
      },
      control() {
			  this.$router.push({
          path: '/control'
        })
      }
		},
		monted() {
			
		}
	}
</script>

<style>
</style>
