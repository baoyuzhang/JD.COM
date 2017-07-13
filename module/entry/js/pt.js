addLoadEvent(pt);
function pt(){

    /*----------------------entry-------------------*/

    /*---------entry轮播图--------*/

	var pt_logo_list_wrappers = document.getElementsByClassName('pt_logo_list_wrapper');
	var pt_logo_lists = document.getElementsByClassName('pt_logo_list');
	var pt_logo_pres = document.getElementsByClassName('pt_logo_pre');
	var pt_logo_nexts = document.getElementsByClassName('pt_logo_next');
	var pt_animated = false;

	for (var i = 0; i < pt_logo_pres.length; i++) {
		pt_logo_pres[i].i = i;
		pt_logo_pres[i].onclick = function(){
			var wrapperwidth = parseInt(pt_logo_list_wrappers[this.i].clientWidth) + 1;
		    if (pt_animated) {
		        return;
		    }
		    wrapperAnimate(this.i,wrapperwidth);
		};
	}
	for (var i = 0; i < pt_logo_nexts.length; i++) {
		pt_logo_nexts[i].i = i;
		pt_logo_nexts[i].onclick = function(){
			var wrapperwidth = parseInt(pt_logo_list_wrappers[this.i].clientWidth) + 1;
		    if (pt_animated) {
		        return;
		    }
		    wrapperAnimate(this.i,-wrapperwidth);
		};
	}

	// 图片切换 + 动画
	function wrapperAnimate(index,offset){

	    pt_animated = true;
	    var wrapperwidth = Math.abs(offset);
	    var absOffset1 = 0;
	    var absOffset2 = -wrapperwidth*3;

	    var curOffset = css3AttrToNum(pt_logo_lists[index].style.transform);
	    var absOffset = parseInt(curOffset) + offset;
	    pt_logo_lists[index].style.transition = "transform 0.6s";
	    pt_logo_lists[index].style.transform = "translateX(" + absOffset + "px)";
	    // 无限轮播效果
	    if (absOffset == absOffset2) {
	        setTimeout(function () {
	            pt_logo_lists[index].style.transition = "transform 0s";
	            pt_logo_lists[index].style.transform = "translateX(-" + wrapperwidth + "px)";
	            pt_animated = false;
	        }, 600);
	    }else if(absOffset == absOffset1){
	        setTimeout(function () {
	            pt_logo_lists[index].style.transition = "transform 0s";
	            pt_logo_lists[index].style.transform = "translateX(-" + wrapperwidth*2 + "px)";
	            pt_animated = false;
	        }, 600);
	    }else{
	        pt_animated = false;
	    }
	}

}