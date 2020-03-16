const url=require('url')

module.exports=option=>{
    return async (ctx,next)=>{
         let source=ctx.get('source')
        if(url.parse(ctx.url).pathname==='/crm/login'||source==='web'){
            await next()
            return 
        }
        let roleid=ctx.info.roleid;
        let arr =await ctx.service.crm.home.menu(roleid)
        let urlcookie=arr.map(v=>v.menu).map(vv=>option[vv].to)
        ctx.cookies.set(urlcookie,urlcookie)
        await next()
    }
}