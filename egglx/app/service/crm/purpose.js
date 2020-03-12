'use strict';

const Service = require('egg').Service;

class PurposeService extends Service {
   async list() {
        return await this.app.mysql.select('purpost_list')
  }
}

module.exports = PurposeService;
