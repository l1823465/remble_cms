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
}

module.exports = UserController;
