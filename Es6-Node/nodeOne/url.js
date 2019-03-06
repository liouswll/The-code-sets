const url =require('url');
let obj =url.parse('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=taoba&oq=node&rsv_pq=b1de69800000132b&rsv_t=9e24fNdB1%2FlEky%2FfXQTmTDR2QRLF0%2B8mRpXy%2F%2FNImhYs%2B%2BNaIS0F3NjgwA8&rqlang=cn&rsv_enter=1&rsv_sug3=6&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=3189&rsv_sug4=3189');
//后加true 解析里面query
console.log(obj);
