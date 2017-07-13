addLoadEvent(fbt);
function fbt(){
    var fbt = document.getElementById('fbt');

    /*----------------------fbt_col2-------------------*/

    /*---------box_bd--------*/

    // 轮播图
    var sup_tab = fbt.getElementsByClassName('sup_tab')[0];
    var sup_pages = fbt.getElementsByClassName('sup_page');
    var sup_inds = fbt.getElementsByClassName('sup_ind_item');
    var sup_btn_pre = fbt.getElementsByClassName('sup_btn_pre')[0];
    var sup_btn_next = fbt.getElementsByClassName('sup_btn_next')[0];
    var sup_animated = false;
    var sup_len = sup_inds.length;
    var sup_index = 0;
    var sup_interval = 3000;
    var sup_timer;
    playFbt(); // 默认自动播放

    // 为按钮绑定事件
    sup_tab.onmouseover = stopFbt;
    sup_tab.onmouseout = playFbt;

    sup_btn_next.onclick = function(){
        if (sup_animated) {
            return;
        }
        animateSup("sup_btn_next");
    };
    sup_btn_pre.onclick = function(){
        if (sup_animated) {
            return;
        }
        animateSup("sup_btn_pre");
    };
    for (var i = 0; i < sup_inds.length; i++) {
        sup_inds[i].i = i;
        sup_inds[i].onmouseenter = function(){
            if (sup_animated) {
                return;
            }
            pageChangeSup(this.i,1);
            iChangeSup(this.i);
        }
    }



    // 自动播放
    function playFbt(){
        sup_timer = setInterval(function(){
            sup_btn_next.onclick();
        },sup_interval);
    }
    function stopFbt(){
        clearInterval(sup_timer);
    }

    // page、小圆点切换
    function animateSup(direction){
        if (direction==="sup_btn_next") {
            sup_index = Math.abs((sup_index + 1) % sup_len);
        }else if (direction==="sup_btn_pre") {
            sup_index = sup_index - 1;
            if (sup_index < 0) sup_index = sup_len-1;
        }
        pageChangeSup(sup_index,1);
        // 使用CSS3实现pageChange动画效果
        // sup_pages[sup_index].style.opacity = 1;
        // sup_pages[sup_index].style.zsup_Index = 1;
        iChangeSup(sup_index);
    }
    // 更换page、小圆点状态
    function iChangeSup(index){
        // 清除上一次
        for (var i = 0; i < sup_inds.length; i++) {
            if (hasClass(sup_inds[i],'active')) {
                removeClass(sup_inds[i],'active');
                break;
            }
        }
        // 添加这一次
        addClass(sup_inds[index],'active');
    }

    // page切换 + 动画【重点】
    function pageChangeSup(page,alpha_last){
        sup_animated = true;

        // 清除上一次
        for (var j = 0; j < sup_pages.length; j++) {
            if (hasClass(sup_pages[j],'active')) {
                removeClass(sup_pages[j],'active');
                sup_pages[j].style.opacity = 0;
                sup_pages[j].style.zIndex = 0;
                break;
            }

        }

        // 添加这一次
        addClass(sup_pages[page],'active');

        var alpha = parseFloat(sup_pages[page].style.opacity)*100; // parseFloat！不是parseInt！
        var alpha_last = alpha_last*100;
        var offset = alpha_last - alpha;
        var time = 300;
        var changesup_Interval = 10;
        var speed = offset/(time/changesup_Interval);

        var go = function(){
            if ((offset > 0 && alpha < alpha_last) || (offset < 0 && alpha > alpha_last)){
                alpha = Math.floor(alpha + speed); // *100 再用Math.floor：解决计算精度问题
                sup_pages[page].style.opacity = alpha/100;
                setTimeout(go,changesup_Interval);
            }else{
                sup_pages[page].style.opacity = alpha_last/100;
                sup_pages[page].style.zIndex = alpha_last/100;
                sup_animated = false;
            }
        };
        go();
    }

    /*----------------------fbt_col3-------------------*/

    /*---------box_bd--------*/

    // tab切换

    var top_tab_head_items = fbt.getElementsByClassName('top_tab_head_item');
    var top_tab_content_items = fbt.getElementsByClassName('top_tab_content_item');
    var top_tab_active = fbt.getElementsByClassName('top_tab_active')[0];

    for (var i = 0; i < top_tab_head_items.length; i++) {
        top_tab_head_items[i].i = i;
        top_tab_head_items[i].onmouseenter = function(){
            for (var j = 0; j < top_tab_head_items.length; j++) {
                if (hasClass(top_tab_head_items[j],'top_tab_head_item_on')) {
                    removeClass(top_tab_head_items[j],'top_tab_head_item_on');
                    removeClass(top_tab_content_items[j],'top_tab_content_item_on');
                    top_tab_content_items[j].style.display = "none";
                    break;
                }
            }
            addClass(this,'top_tab_head_item_on');
            addClass(top_tab_content_items[this.i],'top_tab_content_item_on');
            top_tab_content_items[this.i].style.display = "block";

            var absOffset = 78*this.i;
            top_tab_active.style.transform = "translateX(" + absOffset + "px)";

        };
    }
};
