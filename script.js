document.getElementById("capture").onclick = function() {
	chrome.tabs.getSelected(null, function(tab) {
		tabId = tab.id;
		tabURL = tab.url;
		// send a request to the background page to store a new tabId
		try {
			chrome.runtime.sendMessage({type:"new tabid", tabid:tabId});
			var x=document.getElementById("page").innerHTML;
			document.getElementById("page").innerHTML = tabURL;
		} catch (err) {
			console.error(err);
		}
	});
};