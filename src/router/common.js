export default [
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    meta: {
      title: 'index页面'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index'),
    meta: {
      title: '测试页面'
    }
  }
]
