module.exports = {
    hmc: (pwd) => {
        var crypto = require('crypto');
        var content = '123456';
        var result = crypto.createHash('md5').update(content).digest(pwd)
       return result
    }
}