/*
 * @Author: your name
 * @Date: 2019-12-10 10:45:30
 * @LastEditTime: 2019-12-10 11:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myreact\src\router\RouterView.js
 */
import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
class RouterView extends Component{
    render(){
        let {routes}=this.props
        return(
            <Switch>
                {
                    routes.map((item,index)=>item.redirect?<Redirect to={item.redirect} key={index}/>:
                    <Route path={item.path} key={index} render={(props)=> <item.component {...props} routes={item.children} />}/>)
                }
            </Switch>
        )
    }
}
export default RouterView