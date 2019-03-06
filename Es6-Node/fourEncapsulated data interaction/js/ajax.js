//function ajax(url,type='POST',data={},success,error){
function ajax(options){
  options = options ||{};
  options.type = options.type||'GET';
  options.data = options.data||{};
  options.dataType = options.dataType ||'text';

  if(window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
  }else{
    var xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  let arr=[];
  for(let name in data){
    arr.push(`${name} = ${data[name]}`)
  }
  let strData=arr.join('&');

  if(options.type=='POST'){
    xhr.open("POST",options.url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhr.send(strData);
  }else{
    xhr.open("GET", optionns.url+'?'+strData, true);
    xhr.send();
  }

  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      if(xhr.status>=200 && xhr.status<300 ||xhr.status==304){
        let data = xhr.responseText;

        switch(options.dataType){
          case 'json';
            if(window.JSON &&JSON.parse){
              data = JSON.parse(data);
            }else{
              data = eval('('+str+')')
            }
            break;
          case 'xml';
            data = xhr.responseXML;
            break;
        }
        options.success &&option.success(data);
      }else{
        options.error &&options.error();
      }
    };
  };
};
