'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(user){
    return await this.app.mysql.select('user',{where:{user}})
  }
  async registry(obj){
   return await this.app.mysql.insert('user',{...obj})
  }
}

module.exports = UserService;
