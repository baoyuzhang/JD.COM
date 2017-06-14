var shortcut = document.getElementById('shortcut');
var dropdowns = document.getElementsByClassName('dropdown');
var mobile_jd = document.getElementsByClassName('mobile-jd')[0];

for (var i = 0; i < dropdowns.length; i++) {
	dropdowns[i].onmouseover = function(event) {
		addClass(this,'dropdown_hover');
	};
	dropdowns[i].onmouseout = function(event) {
		removeClass(this,'dropdown_hover');
	};
}
mobile_jd.onmouseover = function(event) {
	addClass(this,'mobile-jd_hover');
};
mobile_jd.onmouseout = function(event) {
	removeClass(this,'mobile-jd_hover');
};
