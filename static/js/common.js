
/* 关于无法获取行内样式的问题 */
//obj.style.left = "10px"      
//IE   obj.currentStyle.left
//非IE  getComputedStyle(obj, null).left						

//先写测试代码,测试驱动法   极限编程  XP
//var left = getStyle(obj).left;

function getStyle(target){
	if(target.currentStyle) {
		return target.currentStyle;
	} else {
		return getComputedStyle(target, null);	
	}
}

//获取一个指定范围的随机整数

//var num = randomInt(500,1000);

function randomInt(min, max){
	return Math.floor( Math.random()*(max-min+1) ) + min;
}

//字符串前后去空格
//var inputname = trim( document.getElementById("name").value);

function trim(str){
	return str.replace(/^\s+/,"").replace(/\s+$/,"");
}



//添加事件监听的兼容函数


//console.log
function log(obj) {
	console.log(obj);
}

//根据样式名称获取元素
function getByClassName(classname) {
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	} else {
		var all = document.getElementsByTagName("*");
		var arr = [];
		for (var i = 0; i < all.length; i++) {
			if (all[i].className == classname) {
				arr.push(all[i]);
			}
		}
		return arr;
	}
}

//得到子元素
function getChildElements(obj) {
	var nodeList = obj.childNodes;
	var arr = new Array();
	for (var i = 0; i < nodeList.length; i++) {
		if (nodeList[i].nodeType == 1) {
			arr.push(nodeList[i]);
		}
	}
	return arr;
}

//获取cookie
function getCookie(key){
	var list = document.cookie.split(";");  //username=yintao; password=123; xxx=vvvv;
	for(var i in list){	
		var keyVal = list[i].split("="); //[" password", "123"] 
		if(key == trim(keyVal[0])){
			return keyVal[1];
		}
	}
	return "";
}

/**
 * 创建XMLHttpRequest对象
 * @param _method 请求方式: post||get
 * @param _url 远程服务器地址
 * @param _async 是否异步
 * @param _parameter 向服务器发送数据
 * @param _callBack 回调函数
 */
 function parameterDeal(_parameter){
 	var _sender="";
 	if(_parameter instanceof Object){
 		for(var k in _parameter){
 			_sender+=k+"="+_parameter[k]+"&";
 		}
 		return _sender.replace(/\&$/g,"");
 	}else{
 		return _parameter;
 	}
 }
 function createXMLHttpRequest(){
 	try{
 		return new window.XMLHttpRequest();
 	}catch(e){
 		try{
 			return new ActiveXObject("MSXML2.XMLHTTP.6.0");
 		}catch(e){
 			try{
 				return new ActiveXObject("MSXML2.XMLHTTP.3.0");
 			}catch(e){
 				try{
 					return new ActiveXObject("MSXML2.XMLHTTP");
 				}catch(e){
 					try{
 						return new ActiveXObject("Microsoft.XMLHTTP");
 					}catch(e){
 						throw new Error("该浏览器版本太低,已经被大部分市场淘汰,请升级!!!");
 						return;
 					}
 				}
 			}
 		}
 	}
 }
 function ajaxRequest(_method,_url,_async,_parameter,_callBack){
 	var _ajax=createXMLHttpRequest();
 	if(_ajax){
 		_ajax.onreadystatechange=function(){
 			if(_ajax.readyState==4 && _ajax.status==200){
 				_callBack(_ajax.responseText);
 			}
 		}
 		_ajax.open(_method,_url,_async);
 		_ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
 		_ajax.send(parameterDeal(_parameter));
 	}
 }