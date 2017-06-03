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
window.onload = NavCateMenuPop();
