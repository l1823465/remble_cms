/*
 * @Author: your name
 * @Date: 2019-12-10 10:43:03
 * @LastEditTime: 2019-12-10 11:40:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editp
 * @FilePath: \myreact\src\router\routerList.js
 * 路由数组
 */
import React from 'react'
import Login from '../views/login'
import Home from '../views/home'
import Staff from '../views/home/staff'
import Amzing from '../views/home/amzing'
import User from '../views/home/user'

let list = [
    {
        path: '/login',
        component: Login
    },{
        path: '/home',
        component: Home,
        children:[
            {
                path: '/home/staff',
                component: Staff
            },{
                path:'/home/staffadd',
                component:()=><div>添加列表</div>
            },{
                path:'/home/user',
                component:User
            },{
                path:'/home/amzinglist',
                component:Amzing
            },{
                path:'/home/contact',
                component:()=><div>联系我们</div>
            },{
                path:'/home/rolelist',
                component:()=><div>角色列表</div>
            },{
                path:'/home/roleadd',
                component:()=><div>添加角色</div>
            },{
                path:'/home/productlist',
                component:()=><div>产品列表</div>
            },{
                path:'/home/productadd',
                component:()=><div>添加产品</div>
            },{
                path:'/home/booklist',
                component:()=><div>游记列表</div>
            },{
                path:'/home/bookadd',
                component:()=><div>游记管理</div>
            }
        ]
    },{
        redirect:'/login'
    }
]
export default list