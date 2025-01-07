var C={exports:{}},w;function b(){return w||(w=1,function(S,A){(function(y,E){S.exports=E()})(self,()=>(()=>{var y={223:(v,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BREAKPOINTS=e.COMBO_BOX_ACCESSIBILITY_KEY_SET=e.SELECT_ACCESSIBILITY_KEY_SET=e.TABS_ACCESSIBILITY_KEY_SET=e.OVERLAY_ACCESSIBILITY_KEY_SET=e.DROPDOWN_ACCESSIBILITY_KEY_SET=e.POSITIONS=void 0,e.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},e.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","Enter"],e.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],e.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],e.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Space","Tab"],e.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"],e.BREAKPOINTS={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},961:(v,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var p=function(){function d(h,n,s){this.el=h,this.options=n,this.events=s,this.el=h,this.options=n,this.events={}}return d.prototype.createCollection=function(h,n){var s;h.push({id:((s=n?.el)===null||s===void 0?void 0:s.id)||h.length+1,element:n})},d.prototype.fireEvent=function(h,n){if(n===void 0&&(n=null),this.events.hasOwnProperty(h))return this.events[h](n)},d.prototype.on=function(h,n){this.events[h]=n},d}();e.default=p},166:function(v,e,p){/*
 * HSTabs
 * @version: 2.6.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */var d,h=this&&this.__extends||(d=function(f,c){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])},d(f,c)},function(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function t(){this.constructor=f}d(f,c),f.prototype=c===null?Object.create(c):(t.prototype=c.prototype,new t)}),n=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(e,"__esModule",{value:!0});var s=p(292),a=n(p(961)),l=p(223),u=function(f){function c(t,r,i){var o=f.call(this,t,r,i)||this;return o.toggles=o.el.querySelectorAll("[data-hs-tab]"),o.extraToggleId=o.el.getAttribute("data-hs-tab-select"),o.extraToggle=document.querySelector(o.extraToggleId),o.current=Array.from(o.toggles).find(function(g){return g.classList.contains("active")}),o.currentContentId=o.current.getAttribute("data-hs-tab"),o.currentContent=document.querySelector(o.currentContentId),o.prev=null,o.prevContentId=null,o.prevContent=null,o.eventType="click",o.onToggleClickListener=[],o.init(),o}return h(c,f),c.prototype.toggleClick=function(t){this.open(t)},c.prototype.extraToggleChange=function(t){this.change(t)},c.prototype.init=function(){var t=this;this.createCollection(window.$hsTabsCollection,this),this.toggles.forEach(function(r){t.onToggleClickListener.push({el:r,fn:function(){return t.toggleClick(r)}}),r.addEventListener(t.eventType,t.onToggleClickListener.find(function(i){return i.el===r}).fn)}),this.extraToggle&&(this.onExtraToggleChangeListener=function(r){return t.extraToggleChange(r)},this.extraToggle.addEventListener("change",this.onExtraToggleChangeListener))},c.prototype.open=function(t){var r,i;this.prev=this.current,this.prevContentId=this.currentContentId,this.prevContent=this.currentContent,this.current=t,this.currentContentId=this.current.getAttribute("data-hs-tab"),this.currentContent=document.querySelector(this.currentContentId),!((r=this==null?void 0:this.prev)===null||r===void 0)&&r.ariaSelected&&(this.prev.ariaSelected="false"),this.prev.classList.remove("active"),this.prevContent.classList.add("hidden"),!((i=this==null?void 0:this.current)===null||i===void 0)&&i.ariaSelected&&(this.current.ariaSelected="true"),this.current.classList.add("active"),this.currentContent.classList.remove("hidden"),this.fireEvent("change",{el:t,prev:this.prevContentId,current:this.currentContentId}),(0,s.dispatch)("change.hs.tab",t,{el:t,prev:this.prevContentId,current:this.currentContentId})},c.prototype.change=function(t){var r=document.querySelector('[data-hs-tab="'.concat(t.target.value,'"]'));r&&r.click()},c.prototype.destroy=function(){var t=this;this.toggles.forEach(function(r){r.removeEventListener(t.eventType,t.onToggleClickListener.find(function(i){return i.el===r}).fn)}),this.onToggleClickListener=[],this.extraToggle&&this.extraToggle.removeEventListener("change",this.onExtraToggleChangeListener),window.$hsTabsCollection=window.$hsTabsCollection.filter(function(r){return r.element.el!==t.el})},c.getInstance=function(t,r){var i=window.$hsTabsCollection.find(function(o){return o.element.el===(typeof t=="string"?document.querySelector(t):t)});return i?r?i:i.element:null},c.autoInit=function(){window.$hsTabsCollection||(window.$hsTabsCollection=[],document.addEventListener("keydown",function(t){return c.accessibility(t)})),window.$hsTabsCollection&&(window.$hsTabsCollection=window.$hsTabsCollection.filter(function(t){var r=t.element;return document.contains(r.el)})),document.querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)').forEach(function(t){window.$hsTabsCollection.find(function(r){var i;return((i=r?.element)===null||i===void 0?void 0:i.el)===t})||new c(t)})},c.open=function(t){var r=window.$hsTabsCollection.find(function(o){return Array.from(o.element.toggles).includes(typeof t=="string"?document.querySelector(t):t)}),i=Array.from(r.element.toggles).find(function(o){return o===(typeof t=="string"?document.querySelector(t):t)});i&&!i.classList.contains("active")&&r.element.open(i)},c.accessibility=function(t){var r=document.querySelector("[data-hs-tab]:focus");if(r&&l.TABS_ACCESSIBILITY_KEY_SET.includes(t.code)&&!t.metaKey){var i=r.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");switch(t.preventDefault(),t.code){case(i==="true"?"ArrowUp":"ArrowLeft"):this.onArrow();break;case(i==="true"?"ArrowDown":"ArrowRight"):this.onArrow(!1);break;case"Home":this.onStartEnd();break;case"End":this.onStartEnd(!1)}}},c.onArrow=function(t){t===void 0&&(t=!0);var r=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(m){return m.element.el===r});if(i){var o=t?Array.from(i.element.toggles).reverse():Array.from(i.element.toggles),g=o.find(function(m){return document.activeElement===m}),T=o.findIndex(function(m){return m===g});o[T=T+1<o.length?T+1:0].focus(),o[T].click()}},c.onStartEnd=function(t){t===void 0&&(t=!0);var r=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),i=window.$hsTabsCollection.find(function(g){return g.element.el===r});if(i){var o=t?Array.from(i.element.toggles):Array.from(i.element.toggles).reverse();o.length&&(o[0].focus(),o[0].click())}},c.on=function(t,r,i){var o=window.$hsTabsCollection.find(function(g){return Array.from(g.element.toggles).includes(typeof r=="string"?document.querySelector(r):r)});o&&(o.element.events[t]=i)},c}(a.default);window.addEventListener("load",function(){u.autoInit()}),typeof window<"u"&&(window.HSTabs=u),e.default=u},292:function(v,e){/*
 * @version: 2.6.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */var p=this;Object.defineProperty(e,"__esModule",{value:!0}),e.menuSearchHistory=e.classToClassList=e.htmlToElement=e.afterTransition=e.dispatch=e.debounce=e.isJson=e.isDirectChild=e.isFormElement=e.isParentOrElementHidden=e.isEnoughSpace=e.isIpadOS=e.isIOS=e.getZIndex=e.getClassPropertyAlt=e.getClassProperty=e.stringToBoolean=void 0,e.getHighestZIndex=function(n){var s=Number.NEGATIVE_INFINITY;return n.forEach(function(a){var l=d(a);l!=="auto"&&(l=parseInt(l,10))>s&&(s=l)}),s},e.stringToBoolean=function(n){return n==="true"},e.getClassProperty=function(n,s,a){return a===void 0&&(a=""),(window.getComputedStyle(n).getPropertyValue(s)||a).replace(" ","")},e.getClassPropertyAlt=function(n,s,a){a===void 0&&(a="");var l="";return n.classList.forEach(function(u){u.includes(s)&&(l=u)}),l.match(/:(.*)]/)?l.match(/:(.*)]/)[1]:a};var d=function(n){return window.getComputedStyle(n).getPropertyValue("z-index")};e.getZIndex=d,e.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},e.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},e.isDirectChild=function(n,s){for(var a=n.children,l=0;l<a.length;l++)if(a[l]===s)return!0;return!1},e.isEnoughSpace=function(n,s,a,l,u){a===void 0&&(a="auto"),l===void 0&&(l=10),u===void 0&&(u=null);var f=s.getBoundingClientRect(),c=u?u.getBoundingClientRect():null,t=window.innerHeight,r=c?f.top-c.top:f.top,i=(u?c.bottom:t)-f.bottom,o=n.clientHeight+l;return a==="bottom"?i>=o:a==="top"?r>=o:r>=o||i>=o},e.isFormElement=function(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement};var h=function(n){return!!n&&(window.getComputedStyle(n).display==="none"||h(n.parentElement))};e.isParentOrElementHidden=h,e.isJson=function(n){if(typeof n!="string")return!1;var s=n.trim()[0],a=n.trim().slice(-1);if(s==="{"&&a==="}"||s==="["&&a==="]")try{return JSON.parse(n),!0}catch{return!1}return!1},e.debounce=function(n,s){var a;return s===void 0&&(s=200),function(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];clearTimeout(a),a=setTimeout(function(){n.apply(p,l)},s)}},e.dispatch=function(n,s,a){a===void 0&&(a=null);var l=new CustomEvent(n,{detail:{payload:a},bubbles:!0,cancelable:!0,composed:!1});s.dispatchEvent(l)},e.afterTransition=function(n,s){var a=function(){s(),n.removeEventListener("transitionend",a,!0)},l=window.getComputedStyle(n),u=l.getPropertyValue("transition-duration");l.getPropertyValue("transition-property")!=="none"&&parseFloat(u)>0?n.addEventListener("transitionend",a,!0):s()},e.htmlToElement=function(n){var s=document.createElement("template");return n=n.trim(),s.innerHTML=n,s.content.firstChild},e.classToClassList=function(n,s,a,l){a===void 0&&(a=" "),l===void 0&&(l="add"),n.split(a).forEach(function(u){return l==="add"?s.classList.add(u):s.classList.remove(u)})},e.menuSearchHistory={historyIndex:-1,addHistory:function(n){this.historyIndex=n},existsInHistory:function(n){return n>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},E={},I=function v(e){var p=E[e];if(p!==void 0)return p.exports;var d=E[e]={exports:{}};return y[e].call(d.exports,d,d.exports,v),d.exports}(166);return I})())}(C)),C.exports}b();