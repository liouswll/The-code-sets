const path =require('path');
let str = '/wamp64/www/one.txt';
//dirname 路径名
//basename 文件名
//extname 后缀
console.log(path.dirname(str));
console.log(path.basename(str));
console.log(path.extname(str));
