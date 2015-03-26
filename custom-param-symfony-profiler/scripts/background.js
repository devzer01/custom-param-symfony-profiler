/**
 * Created by nayan on 3/26/15.
 */
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'getCurrentTabUrl') {
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
            function(tabs){
                pageurl = tabs[0].url;;
                chrome.tabs.sendMessage(tabs[0].id,
                    {action: "resetUrls", "param" : pageurl},
                    function(response) {}
                );
            }
        );
        sendResponse({status: true});
    }
});