<template>
  <div id="custom-tree-container">
    <el-button type="primary">加载树</el-button>
    <div class="dd">
      <el-tree :data="data2" :props="defaultProps" default-expand-all node-key="id"  :render-content="renderContents" @node-click="handleNodeClick"
              ></el-tree>
    </div>
    <div class="custom-tree-container">
      <button @click="goIn">进入表格前套树</button>
      <button @click="goIns">进入树</button>
      <button @click="clears">清空</button>
      <div class="block">
        <p>使用 render-content</p>
        <el-tree :data="data" check-strictly show-checkbox node-key="node_id" ref="tree" default-expand-all  @check-change="handleCheckChange" :expand-on-click-node="false" :render-content="renderContent">
        </el-tree>
      </div>
      <div class="block">
        <p>使用 scoped slot</p>
        <el-tree :data="data" check-strictly show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
				<span class="custom-tree-node" slot-scope="{ node, data }">
        <span class="dddd">{{ node.label }}</span>
				<span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
				</span>
        </el-tree>
      </div>
      <child></child>
    </div>
  </div>

</template>

<script>
	import child from '../page/child.vue'
	let id = 1000;

	export default {
		name: 'tree',
		data() {
			const data = [{
				id: 1,
				label: '一级 1',
				children: [{
					id: 4,
					label: '二级 1-1',
					children: [{
						id: 9,
						label: '三级 1-1-1'
					}, {
						id: 10,
						label: '三级 1-1-2'
					}]
				}]
			}, {
				id: 2,
				label: '一级 2',
				children: [{
					id: 5,
					label: '二级 2-1'
				}, {
					id: 6,
					label: '二级 2-2'
				}]
			}, {
				id: 3,
				label: '一级 3',
				children: [{
					id: 7,
					label: '二级 3-1'
				}, {
					id: 8,
					label: '二级 3-2'
				}]
			}];
			return {
			  data2: [{
          node_id: "5cbda5668bf0162cc2459e35",
          children: [{
            node_id: "5cbda5668bf0162cc2459e36",
            attr: "new",
            label: "封面"
          },
            {
              node_id: "5cbda5668bf0162cc2459e37",
              attr: "new",
              label: "内封"
            },
            {
              node_id: "5cbda5668bf0162cc2459e38",
              attr: "new",
              label: "版权页"
            },
            {
              node_id: "5cbda5668bf0162cc2459e39",
              children: [{
                node_id: "5cbda5668bf0162cc2459e3a",
                attr: "existed",
                label: "评"
              },
                {
                  node_id: "5cbda5668bf0162cc2459e3b",
                  attr: "existed",
                  label: "者"
                }
              ],
              label: "作者页"
            },
            {
              node_id: "5cbda5668bf0162cc2459e3c",
              attr: "new",
              label: "言"
            },
            {
              node_id: "5cbda5668bf0162cc2459e3d",
              attr: "new",
              label: "编者的话"
            }
          ],
          label: "HEAD"
        }],
        department_id: '',
        department_name: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        },
				data: JSON.parse(JSON.stringify(data)),
				data: JSON.parse(JSON.stringify(data))
			}
		},
		component: {
			child
		},
		methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
        if(checked){
          this.department_id = data.id
          this.department_name = data.name
          //只勾选当前点击的checkbox，其它的就会清空
          this.$refs.tree.setCheckedKeys([data.id],true)
        }else {
          //禁止取消勾选当前的checkbox，相当于radio的效果
          if (this.department_id == data.id) {
            this.$refs.tree.setCheckedKeys([data.id], true)
          }
        }
      },
		  clears() {
		    console.log(this.$refs);
        this.$nextTick(function() {
          this.$refs.tree.setCheckedKeys([])
        })

      },
      handleNodeClick(data) {
        console.log(data);
      },
      renderContents: function (h, {node, data, store}) {
        console.log(h, node, data, store.data);
        return h('span',{},[
          h("span",{
            class: 'labelColor',
            domProps:{
              innerHTML:node.label
            }
          })
        ])
        // this.getArry(store.data,'new')
      },
      getArry(data,name) {
        for(let i in data) {
          for(let j in data[i].children) {
            if(data[i].children[j].attr = 'new') {
              console.log(data[i].children[j].label)
            }else {
              this.getArry(data[i].children,'new');
            }
          }
        }
      },
			append(data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					children: []
				};
				if(!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			remove(node, data) {
				const parent = node.parent;
				const children = parent.data.children || parent.data;
				const index = children.findIndex(d => d.id === data.id);
				children.splice(index, 1);
			},

			renderContent(h, {
				node,
				data,
				store
			}) {
				return(
					<span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button id='dddd' size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
			},
			goIn() {
        this.$router.push({
          path: '/tabletree'
        })
      },
      goIns() {
        this.$router.push({
          path: '/trees'
        })
      }
		}
	};
</script>

<style scoped>
  .dddd {
    color: red;
  }
  #custom-tree-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .custom-tree-container {
    width: 45%;
  }
  .dd {
    width: 45%;
    border: solid 1px;
  }
  .datastyle {
    color: red;
  }
  .labelColor {
    color: green;
  }
</style>
