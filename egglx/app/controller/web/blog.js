'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async list() {
        const {ctx,app}=this;
        let data =await ctx.service.blog.list()
        let fiveData=data.sort((a,b)=>b.subTime-a.subTime)
        let tags=data.map(item=>item.class)
        tags=Array.from(new Set(tags))

        ctx.body=app.sendMes(0,'',{list:data,tags,timeList:fiveData.slice(0,5)})
    }
    async search(){
      const {ctx,app}=this;
      let {keyword,exact} =ctx.request.body;
        let data=await ctx.service.blog.list()
        if(exact==='yes'){
          data=data.filter(item=>item.class===keyword)
        }else{
          data=data.filter(item=>item.text.indexOf(keyword)!==-1)
        }
        ctx.body=app.sendMes(0,'',data)
    }
}

module.exports = BlogController;
