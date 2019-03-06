const http = require('http');
const fs =require('fs');
let server =http.createServer((req,res)=>{
  console.log(req.url);
  fs.readFile('cesh${req.url}',(err,data)=>{
    if(err){
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  });
  //res.end(); 错误写法  因为是异步 闲end再write
});
server.listen(8080);
