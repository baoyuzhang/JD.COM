// 页面加载完毕时，执行函数func
// 为页面加载完毕时要执行的一系列函数创建一个队列
// 使用：无论在页面加载完毕时执行多少个函数，只需在js文件中添加addLoadEvent(func)；

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof oldonload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		};
	}
}

function css3AttrToNum(css3Attr){
    var attrRegex = /\.*\((.*)px\)/i;
    return attrRegex.exec(css3Attr)[1];
}
	
function hasClass( elements,cName ){ 
    return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") );
}
function addClass( elements,cName ){ 
    if( !hasClass( elements,cName ) ){ 
        elements.className += " " + cName; 
    }
}
function removeClass( elements,cName ){ 
    if( hasClass( elements,cName ) ){ 
        elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
    }
}
