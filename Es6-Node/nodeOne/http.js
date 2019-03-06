const http = require('http');
let server = http.createServer((request,response)=>{
  response.write('aaa');
  response.end();
});
server.listen(8080);
