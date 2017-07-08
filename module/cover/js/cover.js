/*-------------------------cover----------------------*/

var cover = document.getElementById('cover');

/*---------cover_col1---------*/
NavCateMenuPop();
function NavCateMenuPop() {
	if (!document.getElementsByClassName) return false;
	var Lis = document.getElementsByClassName('cate_menu_item');
	for (var i = 0; i < Lis.length; i++) {
		Lis[i].onmouseover = function(){
			this.className += " li_hover";
		};
		Lis[i].onmouseout = function(){
			this.className = "cate_menu_item";
		};
	}
}

/*---------cover_col2---------*/
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


/*---------cover_col3---------*/
var cover_col3 = cover.getElementsByClassName('cover_col3')[0];

// news
var cover_col3_news = cover_col3.getElementsByClassName('news')[0];
var news_first = cover_col3_news.getElementsByClassName('news_first')[0];
var news_last = cover_col3_news.getElementsByClassName('news_last')[0];
var news_tab_active = cover_col3_news.getElementsByClassName('news_tab_active')[0];
var mod_tab_content_items = cover_col3_news.getElementsByClassName('mod_tab_content_item');

news_first.onmouseenter = function(){
    news_tab_active.style.transform = "translateX(0px)";
    addClass( mod_tab_content_items[0],'mod_tab_content_item_on' );
    removeClass( mod_tab_content_items[1],'mod_tab_content_item_on' );
};
news_last.onmouseenter = function(){
    news_tab_active.style.transform = "translateX(52px)";
    addClass( mod_tab_content_items[1],'mod_tab_content_item_on' );
    removeClass( mod_tab_content_items[0],'mod_tab_content_item_on' );
};

// service
var cover_col3_service = cover_col3.getElementsByClassName('service')[0];
var service_items = cover_col3_service.getElementsByClassName('service_item');
var service_pop_items = cover_col3_service.getElementsByClassName('service_pop_item');
for (var i = 0; i < 4; i++) {
    service_items[i].i = i;
    service_items[i].onmouseenter = function(){
        for (var j = 0; j < 4; j++) {
            removeClass(service_items[j],'service_frame_on');
            service_pop_items[j].style.display = "none";
        }
        addClass(cover_col3_service,'service_expand');
        addClass(this,'service_frame_on');
        service_pop_items[this.i].style.display = "block";
    };
}

var service_pop_close = cover_col3.getElementsByClassName('service_pop_close')[0];
service_pop_close.onclick = function(){
    removeClass(cover_col3_service,'service_expand');
};

