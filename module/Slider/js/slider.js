var cover = document.getElementById('cover');
var slider_main = cover.getElementsByClassName('slider_main')[0];
var slider_list = cover.getElementsByClassName('slider_list')[0];
var slider_indicator_btns = cover.getElementsByClassName('slider_indicator_btn');
var slider_control_prev = cover.getElementsByClassName('slider_control_prev')[0];
var slider_control_next = cover.getElementsByClassName('slider_control_next')[0];
var imgwidth = parseInt(slider_main.style.width);
var len = slider_indicator_btns.length;
var index = 0;
var animated = false;
var interval = 3000;
var timer;
play(); // 默认自动播放

// 为按钮绑定事件
slider_main.onmouseover = stop;
slider_main.onmouseout = play;
slider_control_next.onclick = function(){
    if (animated) {
        return;
    }
    imgAnimate(-imgwidth);
    iAnimate("slider_control_next");
};
slider_control_prev.onclick = function(){
    if (animated) {
        return;
    }
    imgAnimate(imgwidth);
    iAnimate("slider_control_prev");
};
for (var i = 0; i < slider_indicator_btns.length; i++) {
    slider_indicator_btns[i].i = i;
    slider_indicator_btns[i].onclick = function(){
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
        slider_control_next.onclick();
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
    var left = parseInt(slider_list.style.left) + offset;
    var time = 300;
    var inteval = 10;
    var speed = offset/(time/inteval);

    var go = function(){
        if ((speed > 0 && parseInt(slider_list.style.left) < left) || (speed < 0 && parseInt(slider_list.style.left) > left)) {
            slider_list.style.left = parseInt(slider_list.style.left) + speed + "px";
            setTimeout(go, inteval);
        }else{
            if (left > -imgwidth) {
                left = -imgwidth * len;
            }else if (left < (-imgwidth * len)) {
                left = -imgwidth;
            }
            slider_list.style.left = left + "px";
            animated = false;
        }
    };
    go();
}

// 表示位置的小圆点切换
function iAnimate(direction){
    if (direction==="slider_control_next") {
        index = Math.abs((index + 1) % len);
    }else if (direction==="slider_control_prev") {
        index = index - 1;
        if (index < 0) index = len-1;
    }

    iChange(index);
}
// 更换小圆点状态
function iChange(index){
    for (var i = 0; i < slider_indicator_btns.length; i++) {
        if (hasClass(slider_indicator_btns[i],'slider_indicator_btn_active')) {
            removeClass(slider_indicator_btns[i],'slider_indicator_btn_active');
            break;
        }
    }
    
    addClass(slider_indicator_btns[index],'slider_indicator_btn_active');
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

