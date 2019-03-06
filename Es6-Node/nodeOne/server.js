const http = require('http');
let server =http.createServer((req,res)=>{
  switch(req.url){
    case '/aaa':
      res.write('abc');
      break;
    case '/bbb':
      res.write('lnnfona');
      break;
    case '/1.html':
      res.write('<html><head></head><body>dfbeb</body></html>');
      break;
  }
  //res.write();
  //res.end();
  res.end();
});
server.listen(8080);
