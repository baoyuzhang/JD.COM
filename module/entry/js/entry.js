window.onload = function(){
    var entry_1 = document.getElementById('entry_1');

    /*----------------------live-------------------*/

    /*---------live--------*/

    // 轮播图
    var live_inner = entry_1.getElementsByClassName('live_inner')[0];
    var live_items = entry_1.getElementsByClassName('live_item');
    var live_inds = entry_1.getElementsByClassName('live_ind_item');
    var live_btn_pre = entry_1.getElementsByClassName('live_btn_pre')[0];
    var live_btn_next = entry_1.getElementsByClassName('live_btn_next')[0];
    var animated = false;
    var len = live_inds.length;
    var index = 0;
    var interval = 3000;
    var timer;
    play(); // 默认自动播放

    // 为按钮绑定事件
    live_inner.onmouseover = stop;
    live_inner.onmouseout = play;

    live_btn_next.onclick = function(){
        if (animated) {
            return;
        }
        animate("live_btn_next");
    };
    live_btn_pre.onclick = function(){
        if (animated) {
            return;
        }
        animate("live_btn_pre");
    };
    for (var i = 0; i < live_inds.length; i++) {
        live_inds[i].i = i;
        live_inds[i].onmouseenter = function(){
            if (animated) {
                return;
            }
            pageChange(this.i,1);
            iChange(this.i);
        }
    }

    // 自动播放
    function play(){
        timer = setInterval(function(){
            live_btn_next.onclick();
        },interval);
    }
    function stop(){
        clearInterval(timer);
    }

    // page、小圆点切换
    function animate(direction){
        if (direction==="live_btn_next") {
            index = Math.abs((index + 1) % len);
        }else if (direction==="live_btn_pre") {
            index = index - 1;
            if (index < 0) index = len-1;
        }
        pageChange(index,1);
        // 使用CSS3实现pageChange动画效果
        // live_items[index].style.opacity = 1;
        // live_items[index].style.zIndex = 1;
        iChange(index);
    }
    // 更换page、小圆点状态
    function iChange(index){
        // 清除上一次
        for (var i = 0; i < live_inds.length; i++) {
            if (hasClass(live_inds[i],'active')) {
                removeClass(live_inds[i],'active');
                break;
            }
        }
        // 添加这一次
        addClass(live_inds[index],'active');
    }

    // page切换 + 动画【重点】
    function pageChange(page,alpha_last){
        animated = true;

        // 清除上一次
        for (var j = 0; j < live_items.length; j++) {
            if (hasClass(live_items[j],'active')) {
                removeClass(live_items[j],'active');
                live_items[j].style.opacity = 0;
                live_items[j].style.zIndex = 0;
                break;
            }

        }

        // 添加这一次
        addClass(live_items[page],'active');

        var alpha = parseFloat(live_items[page].style.opacity)*100; // parseFloat！不是parseInt！
        var alpha_last = alpha_last*100;
        var offset = alpha_last - alpha;
        var time = 300;
        var changeInterval = 10;
        var speed = offset/(time/changeInterval);

        var go = function(){
            if ((offset > 0 && alpha < alpha_last) || (offset < 0 && alpha > alpha_last)){
                alpha = Math.floor(alpha + speed); // *100 再用Math.floor：解决计算精度问题
                live_items[page].style.opacity = alpha/100;
                setTimeout(go,changeInterval);
            }else{
                live_items[page].style.opacity = alpha_last/100;
                live_items[page].style.zIndex = alpha_last/100;
                animated = false;
            }
        };
        go();
    }

};