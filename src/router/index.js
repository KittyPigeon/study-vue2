import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView,
    
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
    redirect:'/home/profile',
    children:[
      {
        path:'profile',
        name:'profile',
        meta:{
          title:'用户数据',
          isAlive:true,
        },
        // component:() => import(/* webpackChunkName: "about" */ '@/views/home/profile.vue'),
        components:{
          default:()=>import ('@/views/home/profile'),
          navList:()=>import('@/components/navList'),
        },
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
