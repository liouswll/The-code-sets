const dns = require('dns');
dns.resolve('baidu.com',(err,res)=>{
  if(err){
    console.log('err');
  }else{
    console.log(res);
  }
});
