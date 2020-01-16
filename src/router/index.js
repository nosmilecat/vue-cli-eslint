// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index',
  name: 'home',
  component: () => import('@/pages/home'),
  children: [{
    path: '/index',
    name: 'index',
    component: () => import('@/pages/index'),
    meta: {
      nav: '/index'
    }
  }
  ]
},
{
  path: '/redirect',
  name: 'redirect',
  component: () => import('@/pages/redirect')
},
{
  path: '*',
  component: () => import('@/pages/404')
}
];

export default new VueRouter({
  mode: 'history',
  routes
});
