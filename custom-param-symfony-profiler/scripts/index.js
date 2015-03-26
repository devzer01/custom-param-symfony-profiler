'use strict';
var isSymfonyProfiler = document.getElementById("menu-profiler"); //just guessing
if (isSymfonyProfiler != undefined) {
    chrome.extension.sendMessage({action:'getCurrentTabUrl'}, function(response){
        //nothing to do here
    });
}

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'resetUrls') {
        var segments = msg.param.split('?');
        var queryString = segments[1];
        if (queryString != undefined) {
            //remove the first param
            var paramArray = queryString.split("&");
            paramArray.shift();
            var customQueryString = paramArray.join('&');
            var listItems = isSymfonyProfiler.getElementsByTagName('li');
            for (var i = 0; i < listItems.length; i++) {
                var anchors = listItems[i].getElementsByTagName('A');
                if (anchors.length > 0) {
                    var anchor = anchors[0];
                    var href = anchor.getAttribute('href');
                    href = href + '&' + customQueryString;
                    anchor.setAttribute('href', href);
                }
            }
        }
    }
});

