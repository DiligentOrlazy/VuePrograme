import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import BasePage from '@/components/basePage';
import Table from '@/page/Table';
import Tree from '@/page/Tree';
import Form from '@/page/Form';
import TableTree from '@/page/tableTree';
import Charts from '@/page/charts';
import Tab from '@/page/Tab';
import LineChart from '@/page/lineChart';
import ChartsPie from '@/page/chartsPie';
import Trees from '@/page/trees';
import tablejs from '@/page/tableJs原生';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/basepage',
      name: 'basePage',
      component: BasePage
    },
    {
      path: '/tablejs',
      name: 'tableJs',
      component: tablejs
    },
    {
    	path: '/table',
    	name: 'tables',
    	component: Table
    },
    {
    	path: '/tree',
    	name: 'tree',
    	component: Tree
    },
    {
    	path: '/form',
    	name: 'forms',
    	component: Form
    },
    {
    	path: '/tabletree',
    	name: 'tableTree',
    	component: TableTree
    },
    {
    	path: '/chart',
    	name: 'charts',
    	component: Charts
    },
    {
      path: '/control',
      name: 'tab',
      component: Tab
    },
    {
      path: '/line',
      name: 'lineChart',
      component: LineChart
    },
    {
      path: '/pie',
      name: 'chartsPie',
      component: ChartsPie
    },
    {
      path: '/trees',
      name: 'Trees',
      component: Trees
    }
  ]
})
