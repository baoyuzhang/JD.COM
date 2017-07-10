var fbt = document.getElementById('fbt');

/*----------------------fbt_col2-------------------*/

/*---------box_bd--------*/

// 轮播图
var sup_tab = fbt.getElementsByClassName('sup_tab')[0];
var sup_pages = fbt.getElementsByClassName('sup_page');
var sup_inds = fbt.getElementsByClassName('sup_ind_item');
var sup_btn_pre = fbt.getElementsByClassName('sup_btn_pre')[0];
var sup_btn_next = fbt.getElementsByClassName('sup_btn_next')[0];
var len = sup_inds.length;
var index = 0;
var animated = false;
var interval = 300;
var timer;

sup_btn_next.onclick = function(){
    if (animated) {
        return;
    }
    animate("sup_btn_next");
};
sup_btn_pre.onclick = function(){
    if (animated) {
        return;
    }
    animate("sup_btn_pre");
};


// page、小圆点切换
function animate(direction){
    if (direction==="sup_btn_next") {
        // index = index + 1;
        index = Math.abs((index + 1) % len);
        console.log("+1："+index);
    }else if (direction==="sup_btn_pre") {
        index = index - 1;
        if (index < 0) index = len-1;
    }
    iChange(index);
}
// 更换page、小圆点状态
function iChange(index){
    for (var i = 0; i < sup_inds.length; i++) {
        if (hasClass(sup_inds[i],'active')) {
            removeClass(sup_inds[i],'active');
            break;
        }
    }
    for (var j = 0; j < sup_pages.length; j++) {
        if (hasClass(sup_pages[j],'active')) {
            removeClass(sup_pages[j],'active');
            // pageChange(j,0);
            sup_pages[j].style.opacity = 0;
            sup_pages[j].style.zIndex = 0;
            break;
        }

    }    
    addClass(sup_inds[index],'active');
    addClass(sup_pages[index],'active');
    pageChange(index,1);
    // sup_pages[index].style.opacity = 1;
    // sup_pages[index].style.zIndex = 1;

}

// 图片切换 + 动画
function pageChange(page,num_last){
    animated = true;
    var offset = num_last - parseInt(sup_pages[page].style.opacity);
    var time = 500;
    var changeInterval = 100;
    var speed = offset/(time/changeInterval);

    var go = function(){
        console.log(parseInt(sup_pages[page].style.opacity) < num_last);
        if (parseInt(sup_pages[page].style.opacity) < num_last) {
            sup_pages[page].style.opacity = parseInt(sup_pages[page].style.opacity) + speed;
            // sup_pages[page].style.zIndex = parseInt(sup_Indexs[page].style.zpage) + speed;
            setTimeout(go, changeInterval);
        }else{
            sup_pages[page].style.opacity = num_last;
            animated = false;
        }
    };
    go();
}
