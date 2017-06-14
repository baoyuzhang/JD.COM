var seckill = document.getElementById('seckill');

// 倒计时
countDown();
setInterval('countDown()',1000);
function countDown(){
    var now = new Date();
    var endTime = new Date("2200/6/14,23:59:00");
    var leftTime = parseInt((endTime.getTime() - now.getTime())/1000);

    var h = parseInt((leftTime/3600)%24);  // 先转换为时再取余
    var m = parseInt((leftTime/60)%60);  // 先转换为分再取余
    var s = parseInt(leftTime%60);  // 先转换为秒再取余
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    seckill.getElementsByClassName('cd_hour')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = h;
    seckill.getElementsByClassName('cd_minute')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = m;
    seckill.getElementsByClassName('cd_second')[0].getElementsByClassName('cd_item_txt')[0].innerHTML = s;
}

function checkTime(arg){
    if (arg < 10) {
        arg = "0" + arg;
    }
    return arg;
}

// 轮播图
var sk_list_wrapper = seckill.getElementsByClassName('sk_list_wrapper')[0];
var sk_list = seckill.getElementsByClassName('sk_list')[0];
var sk_controls_prev = seckill.getElementsByClassName('sk_controls_prev')[0];
var sk_controls_next = seckill.getElementsByClassName('sk_controls_next')[0];
var wrapperwidth = parseInt(sk_list_wrapper.style.width);
var animated = false;
sk_controls_next.onclick = function(){
    if (animated) {
        return;
    }
    wrapperAnimate(-wrapperwidth);
};
sk_controls_prev.onclick = function(){
    if (animated) {
        return;
    }
    wrapperAnimate(wrapperwidth);
};

// 图片切换 + 动画
function wrapperAnimate(offset){

    animated = true;

    var curOffset = css3AttrToNum(sk_list.style.transform);
    var absOffset = parseInt(curOffset) + offset;
    sk_list.style.transition = "transform 0.6s";
    sk_list.style.transform = "translateX(" + absOffset + "px)";
    // 无限轮播效果
    if (absOffset == -5000) {
        setTimeout(function () {
            sk_list.style.transition = "transform 0s";
            sk_list.style.transform = "translateX(-1000px)";
            animated = false;
        }, 600);
    }else if(absOffset == 0){
        setTimeout(function () {
            sk_list.style.transition = "transform 0s";
            sk_list.style.transform = "translateX(-4000px)";
            animated = false;
        }, 600);
    }else{
        animated = false;
    }
}
function css3AttrToNum(css3Attr){
    var attrRegex = /\.*\((.*)px\)/i;
    return attrRegex.exec(css3Attr)[1];
}



