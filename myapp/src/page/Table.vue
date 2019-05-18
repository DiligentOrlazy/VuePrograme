<template>
	<div class="tablemain">
    <div class="table_left" v-loading="loading" element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-button type="primary" @click='back'>返回</el-button>
      <el-table :data="tableData" style="width: 100%"
      >
        <el-table-column label="key">
          <template slot-scope="scope">
            <el-input v-model="scope.row[0]" :value="scope.row[0]" @change="change(scope)"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="value">
          <template slot-scope="scope">
            <el-input v-model="scope.row[1]" value="scope.row[1]" @change="change(scope)"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" v-on:click="addOne">增加一行</el-button>
      <el-button type="primary" @click="submit">保存</el-button>
    </div>
    <div class="table_right">
      <el-table :data="ttdata" style="width: 100%"
      >
        <el-table-column label="key">
          <template slot-scope="scope">
            <span>{{scope.row[0]}}</span>
            <el-input v-model="scope.row[0]"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="value">
          <template slot-scope="scope">
            <el-input v-model="scope.row[1]"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="submit">保存</el-button>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'tables',
		data() {
			return {
				tableData: [[],[]],
				key: '',
				value: '',
				info: [],
				index: '',
				scope: {},
        loading: false,
        ttdata: []
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			back() {
				this.$router.push({
					path: '/'
				})
			},
			change(data) {
			  console.log(data)
				this.scope = data;
				this.key = data.row[0]+this.index;
				this.value = data.row[1]+this.index;
				this.index = Number(data.$index) + 1;
				console.log(this.key,this.value,this.index)

				this.info.push(this.key,this.value)
        // if(this.info.length > 3) {
        //   this.info.splice(0,2)
        // }
			},
			addOne() {
				this.tableData.push([]);
				bus.$emit("sendData",'这是从table中传过来的数据');
			},
			submit() {
			  this.loading = true;
			  setTimeout(() => {
			    this.loading = false
        },3000);
				console.log(this.ttdata)
        console.log(this.tableData,'32424')
			},
      gettabledata() {
			  let data = [
          ['哈哈','1231'],
          [121,'阿萨达'],
          ['fbskf','第三方']
        ];
			  this.ttdata = data;
      }
		},
		watch: {
			key(newdata,old) {
//				console.log(newdata,old)
				if(old) {
//					console.log(this.info)
					for(let i in this.info) {
						if(i.indexOf(this.scope.$index) !== -1) {
							this.info[Object.keys(this.info)[Object.keys(this.info).length -1]]
						}
					}
				}
			},
//			value(newdata,old) {
//				if(newdata) {
//					this.value = newdata;
//				}
//			}
		},
		mounted() {
       this.gettabledata()
		}
	}
</script>

<style scoped>
  .tablemain {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .table_left {
    width: 45%;
  }
  .table_right {
    width: 45%;
  }
	.el-input {
		border: solid 1px;;
	}
</style>
