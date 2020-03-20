import React from 'react'
import Hight from '../until/viewLogin'
import Login from '../views/login'
import Home from '../views/home'
import Staff from '../views/staff'
import StaffAdd from '../views/staff/add'
import StaffLook from '../views/staff/look'
import RoleList from '../views/role'
import RoleAdd from '../views/role/add'
import BlogList from '../views/blog'
import BlogAdd from '../views/blog/add'
import BlogDetail from '../views/blog/detail'
import Amzing from '../views/home/amzing'
import User from '../views/home/user'

let list = [
    {
        path: '/login',
        component: Login
    },{
        path: '/home',
        component: Hight(Home),
        children:[
            {
                path: '/home/staff',
                component: Staff
            },{
                path:'/home/staffadd',
                component:StaffAdd
            },{
                path:'/home/stafflook',
                component:StaffLook
            },{
                path:'/home/user',
                component:Hight(User)
            },{
                path:'/home/amzinglist',
                component:Hight(Amzing)
            },{
                path:'/home/contact',
                component:()=><div>联系我们</div>
            },{
                path:'/home/rolelist',
                component:RoleList
            },{
                path:'/home/roleadd',
                component:RoleAdd
            },{
                path:'/home/productlist',
                component:()=><div>产品列表</div>
            },{
                path:'/home/productadd',
                component:()=><div>添加产品</div>
            },{
                path:'/home/booklist',
                component:BlogList
            },{
                path:'/home/bookadd',
                component:BlogAdd
            },{
                path:'/home/blogdetail',
                component:BlogDetail
            },{
                redirect:'/home/staff'
            }
        ]
    },{
        redirect:'/login'
    }
]
export default list