var cover = document.getElementById('cover');
var cover_col3 = cover.getElementsByClassName('cover_col3')[0];

function hasClass( elements,cName ){ 
	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) ÅÐ¶ÏÇ°ÃæÊÇ·ñÓÐ¿Õ¸ñ £¨\\s | $ £©ÅÐ¶ÏºóÃæÊÇ·ñÓÐ¿Õ¸ñ Á½¸ö¸ÐÌ¾ºÅÎª×ª»»Îª²¼¶ûÖµ ÒÔ·½±ã×öÅÐ¶Ï 
}
function addClass( elements,cName ){ 
	if( !hasClass( elements,cName ) ){ 
		elements.className += " " + cName; 
	}
}
function removeClass( elements,cName ){ 
	if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace·½·¨ÊÇÌæ»» 
	}
}

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
