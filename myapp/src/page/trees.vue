<template>
  <el-tree
    :data="treeData"
    :props="defaultProps"
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :render-content="renderContent">
  </el-tree>
</template>

<script>
  export default {
    name: 'trees',
    data:function(){
      return {
        treeData: [{
          id: 1,
          label: '一级',
          code:'1',
          children: [{
            id: 4,
            attr: 'new',
            label: '二级',
            code:'1-1',
            children: [{
              id: 9,
              attr: 'new',
              label: '三级',
              code:'1-1-1',
            }, {
              id: 10,
              label: '三级',
              code: '1-1-2',
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods:{
      renderContent:function(h,{
        node,
        data,
        store
      }){
        console.log(data,11,node)
        return(
          <span>
             <span id={data.attr==='new'? 'leftSpan': ''}>{node.label}</span>
          </span>);
      }
    }
  }
</script>

<style>
  #leftSpan{
    color: blue;
    margin-left: 15px;
  }
  .floatSpan{
    float: right;
    margin-top: 8px;
    margin-right: 10px;
    padding: 5px;
  }
  .el-tree {
    width: 33%;
    margin: 92px auto;
  }
</style>
