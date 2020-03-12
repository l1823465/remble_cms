const url=require('url')
let verfyType=require('../until/verifyType')
module.exports=(options)=>{
    return async (ctx,next)=>{
        let source=ctx.get('source')

       if(options.includes(url.parse(ctx.url).pathname)){
           await next()
           return 
       }
       const token=ctx.cookies.get(source+'Token')
       if(!token){
           ctx.body=ctx.app.sendMes(1,'没有权限，请登录')
           return 
       }

       let info;
       try{
            info =await verfyType(token,source) 
       }catch(error){
            ctx.body=ctx.app.sendMes(1,'权限无效，请登录')
            return 
       }

       let {signTime}=info;
       let nowTime=ctx.app.presentTime()
       let time=(nowTime-signTime)/1000/60/60;
       if(time>=4){
           ctx.body=ctx.app.sendMes(1,'登录超时，请重新登录')
           return 
       }
       ctx.info=info;
       await next()

    }
}