//事件队列
/*
const event =require('events').EventEmitter;//事件触发器
let ev = new event();

//监听(接受)
ev.on('msg',function (a,b,c){
  console.log('接收到msg',a,b,c)
})

//派发(发送)
ev.emit('msg',12,5,88)
*/

function msg(a,b,c){
  console.log('接收到msg',a,b,c)
}
msg(12,5,88);
