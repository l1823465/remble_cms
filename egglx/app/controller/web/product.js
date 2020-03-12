'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
        const {ctx,app,service}=this;
        let data=await service.product.list()
        ctx.body=app.sendMes(0,'请求成功',data)
  }
  async search(){
      const {ctx,app,service}=this;
      const {place,keyword,star,day,dataSort}=ctx.request.body
        let data = await ctx.service.product.list();

        if(day!=='')data=data.filter(item=>item.day===day)
        if(star!=='')data=data.filter(item=>item.star===star)

        if(place !== '') data = data.filter(item => item.place.indexOf(place)!==-1)
    if(keyword !== '')data = data.filter(item => item.keyword.indexOf(keyword)!==-1)

    if(dataSort ==='star') data = data.sort((a,b)=>b.star - a.star)
    if(dataSort ==='day') data = data.sort((a,b)=>b.day - a.day)
    if(dataSort ==='place') data = data.sort((a,b)=>b.place.localeCompare(a.place))
    ctx.body = app.sendMes(0,'请求成功',data)
    }

    async detail(){
        const { ctx,app } = this;
        const { id } = ctx.request.body;
        let data = await ctx.service.detail.list(id)
        ctx.body = app.sendMes(0,'请求成功',data)
      }
}

module.exports = ProductController;
