var prehead = document.getElementById('prehead');
var close = prehead.getElementsByClassName('iconfont')[0];

close.onclick = function () {
	prehead.style.opacity = "0";
	setTimeout(function(){
		prehead.style.display = "none";
	},400);
};