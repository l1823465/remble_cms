'use strict';

const Controller = require('egg').Controller;

class PurposeController extends Controller {
  async list() {
        let {ctx,app}=this
        let data=await ctx.service.crm.purpose.list()
        ctx.body=app.sendMes(0,'',data)
  }
}

module.exports = PurposeController;
