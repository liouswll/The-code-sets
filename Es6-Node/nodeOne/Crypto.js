//签名
const crypto = require('crypto');
let obj = crypto.createHash('md5');
//let obj = crypto.createHash('sha1');
obj.update('123456');
//obj.update('123456');
//obj.update('45');
//obj.update('6');
console.log(obj.digest('hex'));
