'use strict';

const Controller = require('egg').Controller;
const jwt=require('jsonwebtoken')
class UserController extends Controller {
  async registry() {
        let {ctx,app,service}=this
        let {user,pwd,emil,age}=ctx.request.body;
           let  userRes=await service.user.find(user)
           if(userRes.length!==0){
            ctx.body=app.sendMes(1,'用户以存在')
            return 
           }
           let obj={user,pwd,emil,age}
           let inst=await service.user.registry(obj)
           let isSuccess=inst.affectedRows===1;
           ctx.body=app.sendMes(isSuccess?0:1,isSuccess?'注册成功':'注册失败')
    }
    async login(){
        let {ctx,app,service}=this
        let {user,pwd}=ctx.request.body;
      
            // let newpwd=String.fromCharCode.apply(null, new Uint16Array(ctx.helper.hmc(pwd)))
           let userRes=await service.user.find(user)
           if(userRes.length===0){
               ctx.body=app.sendMes(1,'用户不存在')
               return 
           }
           if(userRes[0].pwd!==pwd){
               ctx.body=app.sendMes(1,'密码错误');
               return 
           }

           let obj={...userRes[0],signTime:app.presentTime()}
        //    let token=jwt.sign(obj,'meili');
        let webToken=jwt.sign(obj,'web');

           ctx.cookies.set('webToken',webToken)
           ctx.body=app.sendMes(0,'登录成功')
        }
}

module.exports = UserController;
