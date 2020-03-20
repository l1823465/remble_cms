'use strict';

const Controller = require('egg').Controller;

class StaffController extends Controller {
  async list() {
        let {ctx,app}=this
        let searchData=await ctx.service.crm.staff.list()
        let data=searchData.map(item=>{
            return {
                id:item.id,
                name:item.name,
                sex:item.sex,
                status:item.status,
                time:item.time
            }
        })
        ctx.body=app.sendMes(0,'',data)
  }
  async add(){
    let {ctx,app}=this;
    let {user,name,sex,time,roleid}=ctx.request.body;
    let obj={user,name,sex,time,roleid}
    obj.pwd='123456'
    obj.status     = '1';
    obj.createtime = new Date().getTime()
    obj.subtime    = new Date().getTime()
    let res=await ctx.service.crm.staff.add(obj)
    if(res.affectedRows===1){
      ctx.body=app.sendMes(0,'添加成功')
      return 
    }
    ctx.body=app.sendMes(1,'添加失败')
  }
  async leave(){
    const {ctx,app}=this;
    const {id} =ctx.request.body;
    let outime=app.presentTime();
    let res=await ctx.service.crm.staff.leave(id,outime)
    let searchData=await ctx.service.crm.staff.list()
    if(res.affectedRows===1){
      ctx.body=app.sendMes(0,'离职操作成功',searchData)
      return 
    }
    ctx.body=app.sendMes(1,'操作失败',searchData)
  }
  async detail(){
    const {ctx,app}=this;
    const {id}=ctx.request.body;
    let data=await ctx.service.crm.staff.findId(id);
    delete data[0].pwd;
    delete data[0].subtime;
    delete data[0].createtime;
    data[0].sex=data[0].sex==='1'?'男':'女';
    ctx.body=app.sendMes(0,'',data)
  }
}

module.exports = StaffController;
