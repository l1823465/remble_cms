'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(user){
    return await this.app.mysql.select('user',{where:{user}})
  }
  async registry(obj){
   return await this.app.mysql.insert('user',{...obj})
  }
  async list(){
    return await this.app.mysql.select('user',{where:{status:'1'}})
  }
  async black(id){
    return await this.app.mysql.update('user',{id,status:'2'})
  }
}

module.exports = UserService;
