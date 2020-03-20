'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async list() {
    const { ctx ,app} = this;
    let data=await ctx.service.crm.role.list();
    ctx.body=app.sendMes(0,'',data)
  }
  async menu() {
    const { ctx ,app} = this;
    let data=[];
    const menuData=app.config.urlType;
    Object.keys(menuData).map(i=>{
      let index=data.findIndex(item=>item.title===menuData[i].class);
      if(index!==-1){
        data[index].children.push({
          title:menuData[i].title,
          key:i
        })
        return 
      }
      data.push({
        title:menuData[i].class,
        key:'sub'+(data.length+1),
        children:[
          {
            title:menuData[i].title,
            key:i
          }
        ]
      })
    })
    let opr=[];
    const oprData=app.config.opr;
    Object.keys(oprData).map(item=>opr.push({
      title:oprData[item],
      key:item
    }))
    ctx.body=app.sendMes(0,'',{data,opr})
  }
  async submit(){
    const { ctx ,app} = this;
    // const {role,treeArr,oprArr}=ctx.request.body;
    // let insertRes=await ctx.service.role.insert(role);
    // if(insertRes.affectedRows===1){
    //   let roleid=insertRes.insertId;

    // }
    ctx.body=app.sendMes(0,'111',{a:'s'})
  }
}

module.exports = RoleController;
