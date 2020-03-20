'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async list() {
    const { ctx ,app} = this;
    let data=await ctx.service.crm.role.list();
    ctx.body=app.sendMes(0,'',data)
  }
}

module.exports = RoleController;
