var container = document.getElementById('container');
var list = document.getElementById('list');
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgwidth = parseInt(container.style.width);
console.log(imgwidth);
var len = buttons.length;
var index = 0;
var animated = false;
var interval = 3000;
var timer;
play(); // 默认自动播放

// 为按钮绑定事件
container.onmouseover = stop;
container.onmouseout = play;
next.onclick = function(){
    if (animated) {
        return;
    }
    imgAnimate(-imgwidth);
    iAnimate("next");
};
prev.onclick = function(){
    if (animated) {
        return;
    }
    imgAnimate(imgwidth);
    iAnimate("prev");
};
for (var i = 0; i < buttons.length; i++) {
    buttons[i].i = i;
    buttons[i].onclick = function(){
        var offset = -imgwidth * (this.i - index);
        if (offset === 0) {
            return;
        }
        imgAnimate(offset);
        index = this.i;
        iChange(index);
    };
}

// 自动播放
function play(){
    timer = setInterval(function(){
        next.onclick();
    },interval);
}
function stop(){
    clearTimeout(timer);
}

// 图片切换 + 动画
function imgAnimate(offset){
    if (offset === 0) {
        return;
    }

    animated = true;
    var left = parseInt(list.style.left) + offset;
    var time = 300;
    var inteval = 10;
    var speed = offset/(time/inteval);

    var go = function(){
        if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
            list.style.left = parseInt(list.style.left) + speed + "px";
            setTimeout(go, inteval);
        }else{
            if (left > -imgwidth) {
                left = -imgwidth * len;
            }else if (left < (-imgwidth * len)) {
                left = -imgwidth;
            }
            list.style.left = left + "px";
            animated = false;
        }
    };
    go();
}

// 表示位置的小圆点切换
function iAnimate(direction){
    if (direction==="next") {
        index = Math.abs((index + 1) % len);
    }else if (direction==="prev") {
        index = index - 1;
        if (index < 0) index = len-1;
    }

    iChange(index);
}
// 更换小圆点状态
function iChange(index){
    for (var i = 0; i < buttons.length; i++) {
        if (hasClass(buttons[i],'on')) {
            removeClass(buttons[i],'on');
            break;
        }
    }
    
    addClass(buttons[index],'on');
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

