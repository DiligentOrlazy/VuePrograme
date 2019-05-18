export const menuList = [
  {
    title: '首页',
    key: 'admin/home'
  },
  {
    title: 'UI',
    key:'/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/button'
      },
      {
        title: '弹框',
        key: '/admin/ui/modal'
      }
    ]
  },
  {
    title: 'Tree',
    key:'/admin/tree',
    children: [
      {
        title: '基础树',
        key: '/admin/tree/easyTree'
      },
      {
        title: '复杂树',
        key: '/admin/tree/bigTree'
      }
    ]
  },
  {
    title: ''
  }
]
