const fs= require('fs');
fs.readFile('1.txt',(err,data)=>{
  fs.writeFile('4.txt',data,()=>{
    //文字类型保持二进制状态
  })
});
