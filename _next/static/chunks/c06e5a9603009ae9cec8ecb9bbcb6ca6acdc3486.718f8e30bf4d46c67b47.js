(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,i,u,s,c,f,l=!1;t||(t={}),n=t.debug||!1;try{if(u=r(),s=document.createRange(),c=document.getSelection(),(f=document.createElement("span")).textContent=e,f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(f),s.selectNodeContents(f),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:a),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),f&&document.body.removeChild(f),u()}return l}},"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var a=o(n("q1tI")),i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(i.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=a(n("q1tI")),u=a(n("Xuae")),s=n("lwAK"),c=n("FYa8"),f=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,c=d.length;s<c;s++){var f=d[s];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=a.props[f],p=o[f]||new r;p.has(l)?i=!1:(p.add(l),o[f]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var m=u.default();function v(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(m,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:f.isInAmpMode(e)},t)}))}))}v.rewind=m.rewind,t.default=v},"8iia":function(e,t,n){var r=n("QMMT"),o=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),i=n("UnBK"),u=n("SntB");function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=s},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},ENNL:function(e,t,n){e.exports={container:"InputField_container__107my",input:"InputField_input__1cAR2",valid:"InputField_valid__1JqKa"}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(a)})),e.exports=u}).call(this,n("8oxB"))},LX0d:function(e,t,n){e.exports=n("UDep")},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},OcGf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("vDqi"),i=n.n(a),u=(n("8Kt/"),n("nOHt")),s=n("P5Jw"),c=n("nYW0"),f=n.n(c),l=n("QdYH"),p=n.n(l),d=o.a.createElement,h=function(e){var t=e.text;return d("div",{className:p.a.text},t)},m=n("ENNL"),v=n.n(m),y=o.a.createElement,g=function(e){var t=e.name,n=e.value,r=e.placeholder,o=e.type,a=e.onChange,i=e.onKeyDown,u=e.className,s=e.autoComplete,c=e.validationMessage;return y("div",{className:u},y("input",{className:"".concat(v.a.input," ").concat(!c&&n?v.a.valid:""),placeholder:(r||o).toUpperCase(),type:o,name:t||o,value:n,onChange:a,autoComplete:s,onKeyDown:i}),y(h,{text:c}))},b=n("WjCP"),w=n.n(b),x=o.a.createElement,_=function(e){var t=e.name,n=e.label,r=e.value,o=e.min,a=e.max,i=e.step,u=e.className,s=e.inputClass,c=e.onChange;return x("div",{className:"".concat(w.a.container," ").concat(u)},x("div",{className:w.a.label},n),x("input",{name:t,value:r,type:"range",min:o,max:a,step:i,className:"".concat(w.a.slider," ").concat(s),onChange:c}),x("div",{className:w.a.value},r))},C=n("YFqc"),E=n.n(C),S=o.a.createElement,T=function(){return S(o.a.Fragment,null,S("p",null,"This is a bot for"," ",S("a",{href:"https://github.com/Qirky/Troop",target:"_blank"},"Troop")," ","that takes user drum patterns and turns them into a masterpiece using a machine learning model from the"," ",S("a",{href:"https://magenta.tensorflow.org/",target:"_blank"},"Magenta")," ","project."),S("p",null,"In this setup the bot connects to a Troop server and waits for a particular line such as ",S("b",null,"sprucey -l 8 -r 1.7 @xx..x"),"where ",S("b",null,"-l")," is length of returned pattern, ",S("b",null,"-r")," is randomness and string after @ is a drum pattern. It grab this pattern and pipe it to a pre-trained model that try to extend this pattern and send it back."),S("iframe",{id:"video",className:f.a.video,width:"100%",height:"415",src:"https://www.youtube.com/embed/B_tNvMf6vGM?autoplay=1&rel=0&start=60&showinfo=0&mute=1",frameBorder:"0",allow:"autoplay",allowFullScreen:!0}))},O=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],o=Object(r.useState)(8),a=o[0],u=o[1],c=Object(r.useState)(1.5),l=c[0],p=c[1],d=Object(r.useState)(""),m=d[0],v=d[1],y=Object(r.useState)(""),b=y[0],w=y[1],x=Object(r.useState)(!1),C=x[0],E=x[1],T=C?"Copied!":"Copy",O=function(){w(""),v(""),E(!1),function(e,t,n,r,o){var a={pattern:e,length:t,randomness:n};i.a.post("https://codercat.tk/livecoding/foxdot/ai-drums",a).then((function(e){r(e.data)})).catch((function(e){return o(e.response.data)}))}(t,a,l,(function(e){return v(e)}),(function(e){return w(e)}))};return S("div",null,S("div",{className:f.a.description},"This project is an API for using the magenta machine learning tool to generate FoxDot drum patterns. After providing a seed pattern, the neural network will dream up a continuation to your pattern. The API output format is ready to go in FoxDot format, and can be executed automatically or copied, pasted, and edited. For more info see"," ",S("a",{href:"https://github.com/sneha-belkhale/livecoding-ai-drums",target:"_blank"},"Github")," ","page."),S("div",{className:f.a.form},S(g,{value:t,type:"text",placeholder:"Starting Pattern",onChange:function(e){return n(e.target.value)},onKeyDown:function(e){return"Enter"===e.key?O():null}}),S(_,{value:a,name:"length",label:"Length",min:3,max:40,onChange:function(e){return u(e.target.value)}}),S(_,{name:"randomness",value:l,label:"Randomness",min:0,max:10,step:.1,onChange:function(e){return p(e.target.value)}}),S("div",{className:f.a.button,type:"button",tabIndex:"0",role:"button",onClick:O,onKeyDown:function(e){return"Enter"===e.key?O():null}},"GENERATE"),S("div",{className:f.a.result},m),S(h,{text:b}),""!==m?S(s.CopyToClipboard,{text:m,onCopy:function(){return E(!0)}},S("span",{className:f.a.simpleButton,tabIndex:"0",role:"button"},T)):null))};t.default=function(){var e=Object(u.useRouter)().query.tab||"bot",t=["BOT","API"].map((function(t){var n=t.toLowerCase(),r=e===n?f.a.active:"";return S(E.a,{href:"/tab/[tab]",as:"/tab/".concat(n),key:n},S("a",{className:r,tabIndex:"0",role:"button"},t))}));return S("div",{className:f.a.container},S("div",{className:f.a.background},S("img",{className:f.a.backgroundImage,src:"/electric.gif",id:"background-image",alt:"Electric Web"})),S("div",{className:f.a.content},S("h1",{className:f.a.title},"NEUROJAM"),S("ul",{className:f.a.tabHeader},t),S("div",{className:f.a.tab},S("api"===e?O:T,null))))}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},QdYH:function(e,t,n){e.exports={text:"ErrorMessage_text__2IdT7"}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(a,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(i,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var u=o.concat(a).concat(i),s=Object.keys(t).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),a=n("2PDY");e.exports=function(e){return r(e)||o(e)||a()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),a=n("JB68"),i=n("sNwI"),u=n("NwJ3"),s=n("tEej"),c=n("IP1Z"),f=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,l,p=a(e),d="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,v=void 0!==m,y=0,g=f(p);if(v&&(m=r(m,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(n=new d(t=s(p.length));t>y;y++)c(n,y,v?m(p[y],y):p[y]);else for(l=g.call(p),n=new d;!(o=l.next()).done;y++)c(n,y,v?i(l,m,[o.value,y],!0):o.value);return n.length=y,n}})},WjCP:function(e,t,n){e.exports={container:"Slider_container__2In2C",value:"Slider_value__Nx1rx",label:"Slider_label__1PX9o",slider:"Slider_slider__3uP47"}},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,o=n("oVml"),a=n("XJU/"),i=n("2GTP"),u=n("EXMj"),s=n("oioR"),c=n("MPFp"),f=n("UO39"),l=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,h=n("n3ko"),m=p?"_s":"size",v=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var f=e((function(e,r){u(e,f,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=r&&s(r,n,e[c],e)}));return a(f.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var n=h(this,t),r=v(n,e);if(r){var o=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=o),o&&(o.p=a),n._f==r&&(n._f=o),n._l==r&&(n._l=a),n[m]--}return!!r},forEach:function(e){h(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(h(this,t),e)}}),p&&r(f.prototype,"size",{get:function(){return h(this,t)[m]}}),f},def:function(e,t,n){var r,o,a=v(e,t);return a?a.v=n:(e._l=a={i:o=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[m]++,"F"!==o&&(e._i[o]=a)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=h(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?f(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),a=n("/+P4"),i=n("K47E"),u=n("WaGi"),s=n("N9n2"),c=n("TbGu"),f=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var l=n("q1tI"),p=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function f(e){var u;return r(this,f),u=o(this,a(f).call(this,e)),p&&(t.add(i(u)),n(i(u))),u}return s(f,c),u(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),a=n("WaGi"),i=n("ZDA2"),u=n("/+P4"),s=n("N9n2"),c=n("LX0d"),f=n("KI45"),l=n("5Uuq");t.__esModule=!0,t.default=void 0;var p,d=l(n("q1tI")),h=n("CxY0"),m=n("g/15"),v=f(n("nOHt"));function y(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new c,b=window.IntersectionObserver,w={};function x(){return p||(b?p=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){function t(e){var n;return o(this,t),(n=i(this,u(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:y(e),as:t?y(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,u=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),u=u?(0,h.resolve)(s,u):i,e.preventDefault();var c=n.props.scroll;null==c&&(c=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,u,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this,n=w[this.getPaths()[0]];this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths(),n=r(t,2),o=n[0],a=n[1];v.default.prefetch(o,a,e),w[o]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),u={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=a||o);var s=n("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=s(u.href)),d.default.cloneElement(i,u)}}]),t}(d.Component);t.default=_},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(a)&&u.push("domain="+a),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var a=o(n("q1tI"));t.AmpStateContext=a.createContext({})},nYW0:function(e,t,n){e.exports={container:"tab_container__1AtuE",title:"tab_title__dSzcZ",button:"tab_button__3O43K",simpleButton:"tab_simpleButton__3ORze",content:"tab_content__100ku",background:"tab_background__1VZ7D",backgroundImage:"tab_backgroundImage__2gAtx",tabHeader:"tab_tabHeader__D1Qe5",active:"tab_active__2yOnW",tab:"tab_tab__3alFx",video:"tab_video__V3cqe",form:"tab_form__3UAxb",result:"tab_result__1t335",description:"tab_description__3eq2q"}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n("q1tI")),o=a(n("+QRC"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n,a,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,c=new Array(s),p=0;p<s;p++)c[p]=arguments[p];return a=this,u=(e=f(t)).call.apply(e,[this].concat(c)),n=!u||"object"!==i(u)&&"function"!==typeof u?l(a):u,d(l(n),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,u=t.children,s=t.options,c=r.default.Children.only(u),f=(0,o.default)(a,s);i&&i(a,f),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e)})),n}var n,a,h;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&c(n.prototype,a),h&&c(n,h),t}(r.default.PureComponent);t.CopyToClipboard=h,d(h,"defaultProps",{onCopy:void 0,options:void 0})},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),i=n("g7np"),u=n("w0Vi"),s=n("OTTw"),c=n("LYNF");e.exports=function(e){return new Promise((function(t,f){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(h+":"+m)}var v=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onabort=function(){d&&(f(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n("eqyj"),g=(e.withCredentials||s(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},ttDY:function(e,t,n){e.exports=n("+iuc")},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function u(e){return null!==e&&"object"===typeof e}function s(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:u,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:c,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},xvv9:function(e,t,n){n("cHUd")("Set")},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("SntB");function u(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=u(n("JEQr"));s.Axios=a,s.create=function(e){return u(i(s.defaults,e))},s.Cancel=n("endd"),s.CancelToken=n("jfS+"),s.isCancel=n("Lmem"),s.all=function(e){return Promise.all(e)},s.spread=n("DfZB"),e.exports=s,e.exports.default=s}}]);