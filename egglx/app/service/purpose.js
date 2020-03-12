'use strict';

const Service = require('egg').Service;

class PurposeService extends Service {
   async insert(obj) {
        return await this.app.mysql.insert('purpost_list',{id:null,...obj})        
}
}

module.exports = PurposeService;
