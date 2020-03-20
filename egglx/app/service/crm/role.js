'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
   async list() {
        return await this.app.mysql.select('role',{where:{status:'1'}})
  }
}

module.exports = RoleService;
