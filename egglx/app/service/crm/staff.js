'use strict';

const Service = require('egg').Service;

class StaffService extends Service {
  async find(user) {
        return await this.app.mysql.select("staff",{where:{user}})
  }
}

module.exports = StaffService;
