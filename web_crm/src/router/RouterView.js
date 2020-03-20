
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