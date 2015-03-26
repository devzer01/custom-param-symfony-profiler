# custom-param-symfony-profiler
A Generic extension to adjust symfony profiler URLs to append query-string params

## why do i need it?
you may not need it at all, but some Symfony based applications uses multiple application configurations. The valid application configuration is determined at run-time based on some values which are part of the query-string. So when you open the profiler without these values, profiler will not work, since the token is only valid for a specific app configuration.

## what does this extension do
very simple. it just appends all query-strings params to the profiler menu links. 
```javascript
var href = anchor.getAttribute('href');
href = href + '&' + customQueryString;
anchor.setAttribute('href', href);
```
## build 
- you can build the extension your self from chrome.

## install
- download latest crx file from build directory (after cloning repo) or from the releases folder https://github.com/devzer01/custom-param-symfony-profiler/releases
- drag it to chrome://extensions

## misc
- Tested with Chrome Version 41.0.2272.104 (64-bit) OSX

## known issues
if you visited a website which has an element with an id 'menu-profiler' and there are anchors inside `li` with in this element, the anchor values could get modified rendering the website un-navigatable.
you can over-come this issue by making changes to manifest.json and limit the execution for specific websites only.

## bugs
- please create an issue on github if you find any bugs and or submit a pull-request

# disclaimer 
