const http=require('http');
const url=require('url');
const querystring =require('querystring');
const fs=require('fs');

let users={
  //存储数据到内存中
  //  'blue': '123456',
  //'zhangsan': '654321'
}
let server =http.createServer((req,res)=>{
  //get
  let {pathname,query}=url.parse(req.url,true);
  //post
  let str='';
  req.on('data',data=>{
    str +=data;
  });
  req.on('end',()=>{
    let post=querystring.parse(str);
    let {user,pass} = query;
    switch(pathname){
      case '/reg':
        if(!user){
          res.write('{"err":1,"msg":"user is required"}');
        }else if(!pass){
          res.write('{"err":1,"msg":"pass is required"}');
        }else if(!/^\w{8,32}$/.test(user)){
           res.write('{"err": 1, "msg": "invaild username"}');
        }else if(/^['|"]$/.test(pass)){
          res.write('{"err": 1, "msg": "invaild password"}');
        }else if(users[user]){
          res.write('{"err": 1, "msg": "username already exsits"}');
        }else{
          users[user]=pass;
          res.write('{"err": 0, "msg": "success"}');
        };
        res.end();
        break;
        case '/login':    //登陆
          if(!user){
            res.write('{"err": 1, "msg": "user is required"}');
          }else if(!pass){
            res.write('{"err": 1, "msg": "pass is required"}');
          }else if(!/^\w{8,32}$/.test(user)){
            res.write('{"err": 1, "msg": "invaild username"}');
          }else if(/^['|"]$/.test(pass)){
            res.write('{"err": 1, "msg": "invaild password"}');
          }else if(!users[user]){
            res.write('{"err": 1, "msg": "no this user"}');
          }else if(users[user]!=pass){
            res.write('{"err": 1, "msg": "username or password is incorrect"}');
          }else{
            res.write('{"err": 0, "msg": "login success"}');
          }
          res.end();
        break;
      default:
        fs.readFile(`cxz${pathname}`,(err,data)=>{
          if(err){
            res.writeHeader(404);
            res.write('not found');
          }else{
            res.write(data);
          }
          res.end();
        });
    }
  });
});
server.listen(8080);
