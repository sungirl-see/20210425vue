import Vue from 'vue'
import Router from 'vue-router' 
const home=()=>import('../components/home.vue')
const about=()=>import('../components/about.vue')
Vue.use(Router)
const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/about',
        component:about
    },
]
// 将路径注入到Router中
const router=new Router({
  mode: 'history',
  routes
})
 // 导出路由
 export default router;