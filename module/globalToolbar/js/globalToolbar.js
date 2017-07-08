/*-------------------------global-toolbar----------------------*/

var globalToolbar = document.getElementById('global-toolbar');
var gtTabs = globalToolbar.getElementsByClassName('jdm-toolbar-tab');
var gtPanels = globalToolbar.getElementsByClassName('jdm-toolbar-panel');
var gtwrap = globalToolbar.getElementsByClassName('jdm-toolbar-wrap')[0];


/*---------tabs---------*/
/*  选中和切换tab、panel */
for (var i = 0; i < gtTabs.length; i++) {
	gtTabs[i].dataName = gtTabs[i].getAttribute("data-name");
	gtTabs[i].onmouseover = function(){
		if (hasClass(this,"z-jdm-tbar-tab-selected")) { return false; }
		addClass(this,"z-jdm-tbar-tab-hover");
	};
	gtTabs[i].onmouseout = function(){
		removeClass(this,"z-jdm-tbar-tab-hover");
	};
	gtTabs[i].onclick = panelSelected;
}
/*  关闭panel */
gtwrap.onclick = function (){
	if (hasClass(event.target,"close-panel")) {
		closePanel();
	}
};

function closePanel(){
	removeClass(gtwrap,"z-jdm-toolbar-open");
	for (var s = 0; s < gtTabs.length; s++) {
		removeClass(gtTabs[s],"z-jdm-tbar-tab-selected");
		console.log("remove");
	}	
}
function panelSelected(){
	var tabName = this.getAttribute("data-name");
	if ((tabName==="message") || (tabName===null)) { return false; }
	if (hasClass(this,"z-jdm-tbar-tab-selected")){ 
		if (hasClass(gtwrap,"z-jdm-toolbar-open")){
			removeClass(gtwrap,"z-jdm-toolbar-open");
			removeClass(this,"z-jdm-tbar-tab-selected");
		}
		return false;
	}

	addClass(gtwrap,"z-jdm-toolbar-open");

	// 清除上一次
	for (var j = 0; j < gtTabs.length; j++) {
		if (hasClass(gtTabs[j],"z-jdm-tbar-tab-selected")) {
			var prevTab = gtTabs[j].dataName; // 保留前一个panel展开记录
			removeClass(gtTabs[j],"z-jdm-tbar-tab-selected");
		}
	}
	// 添加这一次
	addClass(this,"z-jdm-tbar-tab-selected");
	for (var m = 0; m < gtPanels.length; m++) {
		gtPanels[m].dataName = gtPanels[m].getAttribute("data-name");
		if (gtPanels[m].dataName===this.dataName) {
			gtPanels[m].style.visibility = "visible";
			gtPanels[m].style.zIndex = "2";
			removeClass(gtPanels[m],'toolbar-animate-in');
			addClass(gtPanels[m],'toolbar-animate-out');
		}else if(gtPanels[m].dataName===prevTab) {
			setTimeout(hiddenPanel,1000,gtPanels[m]); // 注意！setTimeout只能传入函数名，不能加()，否则立即执行
			gtPanels[m].style.zIndex = "1";	
			removeClass(gtPanels[m],'toolbar-animate-out');
			addClass(gtPanels[m],'toolbar-animate-in');				
		}
	}
    
}

function hiddenPanel(element){
	element.style.visibility = "hidden";
}