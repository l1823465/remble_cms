'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async menu() {
            let {ctx,app}=this;
            let {roleid}=ctx.info
            let role=await ctx.service.crm.home.menu(roleid)
            let menu=app.config.urlType
            let data=[]
            role.map(v=>v.menu).map(item=>{
                let obj={
                    title:menu[item].title,
                    to:menu[item].to,
                    key:item
                }
                    let findI=data.findIndex(v=>v.class===menu[item].class)
                    if(findI!==-1){
                        data[findI].sub.push(obj)
                        return 
                    }
                    data.push({
                        class:menu[item].class,
                        sub:[obj]
                    })
            })
            ctx.body=app.sendMes(0,'成功',data)
  }
}

module.exports = HomeController;
