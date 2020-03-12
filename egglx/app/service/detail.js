'use strict';

const Service = require('egg').Service;

class DetailService extends Service {
  async list(id) {
    return this.app.mysql.select('product_detail',{where:{product_id:id}})
  }
}

module.exports = DetailService;
