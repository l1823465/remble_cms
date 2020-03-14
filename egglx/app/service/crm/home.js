'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
   async menu(roleid) {
        return await this.app.mysql.select('role_menu',{where:{roleid}})
  }
}

module.exports = HomeService;
