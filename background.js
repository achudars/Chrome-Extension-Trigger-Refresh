// maintaining state in the background
var tabId = null;

// listening for new tabIds and refresh requests
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // if this is a store request, save the tabid
        if(request.type == "new tabid") {
            tabId = request.tabid; 
            document.getElementById("page").appendChild(tabId);
        }
        // if this is a refresh request, refresh the tab if it has been set
        else if(request.type == "refresh" && tabId !== null) {
            chrome.tabs.reload(tabId);
        }
});