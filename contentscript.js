'use strict';

var isCtrl = false;
var tabId = 0;

document.onkeyup=function(e){
	if(e.which === 17) {
		isCtrl=false;
	}
};

document.onkeydown=function(e){
	if(e.which === 17) {
		isCtrl=true;
	}
	if(e.which === 16 && isCtrl === true) {
		/* the code below will execute when CTRL + SHIFT are pressed */
		// signal to the background page that it's time to refresh
		chrome.runtime.sendMessage({type:"refresh"});
		/* end of code */
		return false;
	}

};

document.getElementById('capture').onclick = function(){
	chrome.tabs.getSelected(null, function(tab) {
		tabId = tab.id;
		document.getElementById('page').innerText = tab.id;
	});
};




