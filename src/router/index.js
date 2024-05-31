import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some((role) => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect'] // no redirect whitelist

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/home.vue'),
    redirect: '/home/profile',
    children: [
      {
        path: 'profile',
        name: 'profile',
        meta: {
          title: '用户数据',
          keepAlive: true
        },
        // component:() => import(/* webpackChunkName: "about" */ '@/views/home/profile.vue'),
        components: {
          default: () => import('@/views/home/profile'),
          navList: () => import('@/components/navList')
        }
      }
    ]
  },
  {
    path: '/about2',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about2.vue')
  },
  {
    path: '/about3',
    name: 'about3',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about3.vue')
  },
  // arcgis
  {
    path: '/arcgis',
    name: 'arcgis',
    component: () => import(/* webpackChunkName: "about" */ '@/views/arcgis.vue')
  },
  {
    path: '/about4',
    name: 'about4',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about4.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '@/views/list.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '@/views/detail.vue')
  },
  {
    path: '/pdf',
    name: 'paf',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HtmlToPdf.vue')
  },
  {
    path: '/interview',
    name: 'interview',
    meta: {
      title: '面试',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/interview/index.vue')
  },
  {
    path: '/interviewDetail',
    name: 'interviewDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/interview/detail.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "about" */ '../views/interview/tab.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
