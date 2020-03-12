'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async list() {
        return await this.app.mysql.select('product_list')
  }
}

module.exports = ProductService;
