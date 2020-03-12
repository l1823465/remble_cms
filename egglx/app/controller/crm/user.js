'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
class UserController extends Controller {
  async login() {
        let {ctx,app}=this
        let {user,pwd} =ctx.request.body;
        let userRes=await ctx.service.crm.staff.find(user)
        if(userRes.length===0){
            ctx.body=app.sendMes(1,'用户不存在')
            return
        }
        if(userRes[0].pwd!==pwd){
            ctx.body=app.sendMes(1,'密码错误')
            return
        }
        let obj ={...userRes[0],signTime:app.presentTime()}
        let crmToken=jwt.sign(obj,'crm');
        ctx.cookies.set('crmToken',crmToken)
        ctx.body=app.sendMes(0,'登录成功')
  }
  async list(){
    let {ctx,app}=this
    let data =await ctx.service.user.list();
    ctx.body=app.sendMes(0,'',data)
  }
  async black(){
    let {ctx,app}=this
    let {id}=ctx.request.body;
   
    let res =await ctx.service.user.black(id);  
if(res.affectedRows===1){
  let data =await ctx.service.user.list();
  ctx.body=app.sendMes(0,'更新成功',data)
}
    
  }
}

module.exports = UserController;
