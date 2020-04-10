import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Main from '../views/main.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Blog from '../views/blog.vue'
import Asd from '../views/asd.vue'
Vue.use(VueRouter)

const routes = [
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        { path: 'main', name: 'main', component: Main},
        { path: 'ours', name: 'ours', component: Main},
        { path: 'serve', name: 'serve', component: Main},
        { path: 'product', name: 'product', component: Product},
        { path: 'detail', name: 'detail', component: Detail},
        { path: 'pic', name: 'pic', component: Main},
        { path: 'book', name: 'book', component: Blog},
        { path: 'contcat', name: 'contcat', component: Main},
        {path:'/home',redirect:'/home/main'}
      ]
    },
    {
      path: '/asd', name: 'asd', component: Asd
    },{
      path:'/',
      redirect:'/home'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
