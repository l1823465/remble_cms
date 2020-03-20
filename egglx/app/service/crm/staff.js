'use strict';

const Service = require('egg').Service;

class StaffService extends Service {
  async find(user) {
        return await this.app.mysql.select("staff",{where:{user}})
  }
  async findId(id) {
    return await this.app.mysql.select("staff",{where:{id}})
}
  async list(){
    const { app } = this
    return await app.mysql.select('staff');
  }
  async leave(id,outime) {
    return await this.app.mysql.update("staff",{id,status:'2',outime})
}
async add(obj){
  const { app } = this
  return await app.mysql.insert('staff',obj);
}

}

module.exports = StaffService;
