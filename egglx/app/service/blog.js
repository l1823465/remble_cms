'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async list() {
        return await this.app.mysql.select('blog')
  }
}

module.exports = BlogService;
