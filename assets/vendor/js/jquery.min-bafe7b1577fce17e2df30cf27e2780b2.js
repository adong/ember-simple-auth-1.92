!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,s=n.indexOf,a={},u=a.toString,l=a.hasOwnProperty,c={},f=e.document,p="2.1.4",d=function(e,t){return new d.fn.init(e,t)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g=/^-ms-/,v=/-([\da-z])/gi,m=function(e,t){return t.toUpperCase()}
function y(e){var t="length"in e&&e.length,n=d.type(e)
return"function"!==n&&!d.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}d.fn=d.prototype={jquery:p,constructor:d,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=d.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return d.each(this,e,t)},map:function(e){return this.pushStack(d.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},d.extend=d.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1
for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||d.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(r=e[t])&&(l&&r&&(d.isPlainObject(r)||(i=d.isArray(r)))?(i?(i=!1,o=n&&d.isArray(n)?n:[]):o=n&&d.isPlainObject(n)?n:{},s[t]=d.extend(l,o,r)):void 0!==r&&(s[t]=r))
return s},d.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===d.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!d.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===d.type(e)&&!e.nodeType&&!d.isWindow(e)&&!(e.constructor&&!l.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[u.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=d.trim(e))&&(1===e.indexOf("use strict")?((t=f.createElement("script")).text=e,f.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(g,"ms-").replace(v,m)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=y(e)
if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},trim:function(e){return null==e?"":(e+"").replace(h,"")},makeArray:function(e,t){var n=t||[]
return null!=e&&(y(Object(e))?d.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;o>i;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,o=0,s=e.length,a=[]
if(y(e))for(;s>o;o++)null!=(r=t(e[o],o,n))&&a.push(r)
else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r)
return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,o
return"string"==typeof t&&(n=e[t],t=e,e=n),d.isFunction(e)?(i=r.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(r.call(arguments)))}).guid=e.guid=e.guid||d.guid++,o):void 0},now:Date.now,support:c}),d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()})
var x=function(e){var t,n,r,i,o,s,a,u,l,c,f,p,d,h,g,v,m,y,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,N=ae(),k=ae(),E=ae(),S=function(e,t){return e===t&&(f=!0),0},D=1<<31,j={}.hasOwnProperty,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=M.replace("w","w#"),$="\\["+R+"*("+M+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+W+"))|)"+R+"*\\]",I=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+$+")*)|.*)\\)|)",B=new RegExp(R+"+","g"),_=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),X=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),V=new RegExp(I),Y=new RegExp("^"+W+"$"),G={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+$),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=/'|\\/g,ne=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),ie=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},oe=function(){p()}
try{H.apply(A=O.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(re){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,i){var o,a,l,c,f,h,m,y,T,C
if((t?t.ownerDocument||t:w)!==d&&p(t),r=r||[],c=(t=t||d).nodeType,"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return r
if(!i&&g){if(11!==c&&(o=Z.exec(e)))if(l=o[1]){if(9===c){if(!(a=t.getElementById(l))||!a.parentNode)return r
if(a.id===l)return r.push(a),r}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(l))&&x(t,a)&&a.id===l)return r.push(a),r}else{if(o[2])return H.apply(r,t.getElementsByTagName(e)),r
if((l=o[3])&&n.getElementsByClassName)return H.apply(r,t.getElementsByClassName(l)),r}if(n.qsa&&(!v||!v.test(e))){if(y=m=b,T=t,C=1!==c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(h=s(e),(m=t.getAttribute("id"))?y=m.replace(te,"\\$&"):t.setAttribute("id",y),y="[id='"+y+"'] ",f=h.length;f--;)h[f]=y+me(h[f])
T=ee.test(e)&&ge(t.parentNode)||t,C=h.join(",")}if(C)try{return H.apply(r,T.querySelectorAll(C)),r}catch(N){}finally{m||t.removeAttribute("id")}}}return u(e.replace(_,"$1"),t,r,i)}function ae(){var e=[]
return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ue(e){return e[b]=!0,e}function le(e){var t=d.createElement("div")
try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=e.length;i--;)r.attrHandle[n[i]]=t}function fe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function he(e){return ue(function(t){return t=+t,ue(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},o=se.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},p=se.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w
return s!==d&&9===s.nodeType&&s.documentElement?(d=s,h=s.documentElement,(i=s.defaultView)&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),g=!o(s),n.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=le(function(e){return e.appendChild(s.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(s.getElementsByClassName),n.getById=le(function(e){return h.appendChild(e).id=b,!s.getElementsByName||!s.getElementsByName(b).length}),n.getById?(r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ne,ie)
return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ne,ie)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return g?t.getElementsByClassName(e):void 0},m=[],v=[],(n.qsa=K.test(s.querySelectorAll))&&(le(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||v.push(".#.+[+~]")}),le(function(e){var t=s.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=K.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le(function(e){n.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),v=v.length&&new RegExp(v.join("|")),m=m.length&&new RegExp(m.join("|")),t=K.test(h.compareDocumentPosition),x=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},S=t?function(e,t){if(e===t)return f=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===s||e.ownerDocument===w&&x(w,e)?-1:t===s||t.ownerDocument===w&&x(w,t)?1:c?F(c,e)-F(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t]
if(!i||!o)return e===s?-1:t===s?1:i?-1:o?1:c?F(c,e)-F(c,t):0
if(i===o)return fe(e,t)
for(n=e;n=n.parentNode;)a.unshift(n)
for(n=t;n=n.parentNode;)u.unshift(n)
for(;a[r]===u[r];)r++
return r?fe(a[r],u[r]):a[r]===w?-1:u[r]===w?1:0},s):d},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(U,"='$1']"),!(!n.matchesSelector||!g||m&&m.test(t)||v&&v.test(t)))try{var r=y.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return se(t,d,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e)
var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0
return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],i=0,o=0
if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(S),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o))
for(;i--;)e.splice(r[i],1)}return c=null,e},i=se.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t)
return n},(r=se.selectors={cacheLength:50,createPseudo:ue,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ne,ie),e[3]=(e[3]||e[4]||e[5]||"").replace(ne,ie),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ne,ie).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "]
return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=se.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(B," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a
if(v){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===m:1===f.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(d=(l=(c=v[b]||(v[b]={}))[e]||[])[0]===T&&l[1],p=l[0]===T&&l[2],f=d&&v.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[T,d,p]
break}}else if(y&&(l=(t[b]||(t[b]={}))[e])&&l[0]===T)p=l[1]
else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==m:1!==f.nodeType)||!++p||(y&&((f[b]||(f[b]={}))[e]=[T,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e)
return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ue(function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=F(e,o[s])]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ue(function(e){var t=[],n=[],r=a(e.replace(_,"$1"))
return r[b]?ue(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:ue(function(e){return function(t){return se(e,t).length>0}}),contains:ue(function(e){return e=e.replace(ne,ie),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ue(function(e){return Y.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(ne,ie).toLowerCase(),function(t){var n
do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[0>n?n+t:n]}),even:he(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:he(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:he(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r)
return e}),gt:he(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r)
return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t)
function ve(){}function me(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value
return r}function ye(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=C++
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[T,o]
if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((a=(u=t[b]||(t[b]={}))[r])&&a[0]===T&&a[1]===o)return l[2]=a[2]
if(u[r]=l,l[2]=e(t,n,s))return!0}}}function xe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function be(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a))
return s}function we(e,t,n,r,i,o){return r&&!r[b]&&(r=we(r)),i&&!i[b]&&(i=we(i,o)),ue(function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)se(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),v=!e||!o&&t?g:be(g,p,e,a,u),m=n?i||(o?e:h||r)?[]:s:v
if(n&&n(v,m,a,u),r)for(l=be(m,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(m[d[c]]=!(v[d[c]]=f))
if(o){if(i||e){if(i){for(l=[],c=m.length;c--;)(f=m[c])&&l.push(v[c]=f)
i(null,m=[],l,u)}for(c=m.length;c--;)(f=m[c])&&(l=i?F(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else m=be(m===s?m.splice(h,m.length):m),i?i(null,s,m,u):H.apply(s,m)})}function Te(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,c=ye(function(e){return e===t},a,!0),f=ye(function(e){return F(t,e)>-1},a,!0),p=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r))
return t=null,i}];o>u;u++)if(n=r.relative[e[u].type])p=[ye(xe(p),n)]
else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;o>i&&!r.relative[e[i].type];i++);return we(u>1&&xe(p),u>1&&me(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(_,"$1"),n,i>u&&Te(e.slice(u,i)),o>i&&Te(e=e.slice(i)),o>i&&me(e))}p.push(n)}return xe(p)}function Ce(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,u,c){var f,p,h,g=0,v="0",m=o&&[],y=[],x=l,b=o||i&&r.find.TAG("*",c),w=T+=null==x?1:Math.random()||.1,C=b.length
for(c&&(l=s!==d&&s);v!==C&&null!=(f=b[v]);v++){if(i&&f){for(p=0;h=e[p++];)if(h(f,s,a)){u.push(f)
break}c&&(T=w)}n&&((f=!h&&f)&&g--,o&&m.push(f))}if(g+=v,n&&v!==g){for(p=0;h=t[p++];)h(m,y,s,a)
if(o){if(g>0)for(;v--;)m[v]||y[v]||(y[v]=L.call(u))
y=be(y)}H.apply(u,y),c&&!o&&y.length>0&&g+t.length>1&&se.uniqueSort(u)}return c&&(T=w,l=x),m}
return n?ue(o):o}return ve.prototype=r.filters=r.pseudos,r.setFilters=new ve,s=se.tokenize=function(e,t){var n,i,o,s,a,u,l,c=k[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],l=r.preFilter;a;){for(s in(!n||(i=z.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=X.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(_," ")}),a=a.slice(n.length)),r.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length))
if(!n)break}return t?a.length:a?se.error(e):k(e,u).slice(0)},a=se.compile=function(e,t){var n,r=[],i=[],o=E[e+" "]
if(!o){for(t||(t=s(e)),n=t.length;n--;)(o=Te(t[n]))[b]?r.push(o):i.push(o);(o=E(e,Ce(i,r))).selector=e}return o},u=se.select=function(e,t,i,o){var u,l,c,f,p,d="function"==typeof e&&e,h=!o&&s(e=d.selector||e)
if(i=i||[],1===h.length){if((l=h[0]=h[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&n.getById&&9===t.nodeType&&g&&r.relative[l[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(ne,ie),t)||[])[0]))return i
d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(u=G.needsContext.test(e)?0:l.length;u--&&(c=l[u],!r.relative[f=c.type]);)if((p=r.find[f])&&(o=p(c.matches[0].replace(ne,ie),ee.test(l[0].type)&&ge(t.parentNode)||t))){if(l.splice(u,1),!(e=o.length&&me(l)))return H.apply(i,o),i
break}}return(d||a(e,h))(o,t,!g,i,ee.test(e)&&ge(t.parentNode)||t),i},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=le(function(e){return 1&e.compareDocumentPosition(d.createElement("div"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(P,function(e,t,n){var r
return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(e)
d.find=x,d.expr=x.selectors,d.expr[":"]=d.expr.pseudos,d.unique=x.uniqueSort,d.text=x.getText,d.isXMLDoc=x.isXML,d.contains=x.contains
var b=d.expr.match.needsContext,w=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/
function C(e,t,n){if(d.isFunction(t))return d.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
if(t.nodeType)return d.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(T.test(t))return d.filter(t,e,n)
t=d.filter(t,e)}return d.grep(e,function(e){return s.call(t,e)>=0!==n})}d.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?d.find.matchesSelector(r,e)?[r]:[]:d.find.matches(e,d.grep(t,function(e){return 1===e.nodeType}))},d.fn.extend({find:function(e){var t,n=this.length,r=[],i=this
if("string"!=typeof e)return this.pushStack(d(e).filter(function(){for(t=0;n>t;t++)if(d.contains(i[t],this))return!0}))
for(t=0;n>t;t++)d.find(e,i[t],r)
return(r=this.pushStack(n>1?d.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(C(this,e||[],!1))},not:function(e){return this.pushStack(C(this,e||[],!0))},is:function(e){return!!C(this,"string"==typeof e&&b.test(e)?d(e):e||[],!1).length}})
var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(d.fn.init=function(e,t){var n,r
if(!e)return this
if("string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:k.exec(e))||!n[1]&&t)return!t||t.jquery?(t||N).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof d?t[0]:t,d.merge(this,d.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:f,!0)),w.test(n[1])&&d.isPlainObject(t))for(n in t)d.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return(r=f.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=f,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):d.isFunction(e)?void 0!==N.ready?N.ready(e):e(d):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),d.makeArray(e,this))}).prototype=d.fn,N=d(f)
var E=/^(?:parents|prev(?:Until|All))/,S={children:!0,contents:!0,next:!0,prev:!0}
function D(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}d.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&d(e).is(n))break
r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),d.fn.extend({has:function(e){var t=d(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(d.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=b.test(e)||"string"!=typeof e?d(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&d.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?d.unique(o):o)},index:function(e){return e?"string"==typeof e?s.call(d(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(d.unique(d.merge(this.get(),d(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),d.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return d.dir(e,"parentNode")},parentsUntil:function(e,t,n){return d.dir(e,"parentNode",n)},next:function(e){return D(e,"nextSibling")},prev:function(e){return D(e,"previousSibling")},nextAll:function(e){return d.dir(e,"nextSibling")},prevAll:function(e){return d.dir(e,"previousSibling")},nextUntil:function(e,t,n){return d.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return d.dir(e,"previousSibling",n)},siblings:function(e){return d.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return d.sibling(e.firstChild)},contents:function(e){return e.contentDocument||d.merge([],e.childNodes)}},function(e,t){d.fn[e]=function(n,r){var i=d.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=d.filter(r,i)),this.length>1&&(S[e]||d.unique(i),E.test(e)&&i.reverse()),this.pushStack(i)}})
var j,A=/\S+/g,L={}
function q(){f.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1),d.ready()}d.Callbacks=function(e){e="string"==typeof e?L[e]||function(e){var t=L[e]={}
return d.each(e.match(A)||[],function(e,n){t[n]=!0}),t}(e):d.extend({},e)
var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(!1===a[s].apply(f[0],f[1])&&e.stopOnFalse){t=!1
break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length
!function t(n){d.each(n,function(n,r){var i=d.type(r)
"function"===i?e.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&d.each(arguments,function(e,t){for(var n;(n=d.inArray(t,a,n))>-1;)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?d.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=void 0,this},disabled:function(){return!a},lock:function(){return u=void 0,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=[e,(t=t||[]).slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}}
return c},d.extend({Deferred:function(e){var t=[["resolve","done",d.Callbacks("once memory"),"resolved"],["reject","fail",d.Callbacks("once memory"),"rejected"],["notify","progress",d.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments
return d.Deferred(function(n){d.each(t,function(t,o){var s=d.isFunction(e[t])&&e[t]
i[o[1]](function(){var e=s&&s.apply(this,arguments)
e&&d.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?d.extend(e,r):r}},i={}
return r.pipe=r.then,d.each(t,function(e,o){var s=o[2],a=o[3]
r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,s=r.call(arguments),a=s.length,u=1!==a||e&&d.isFunction(e.promise)?a:0,l=1===u?e:d.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?l.notifyWith(n,i):--u||l.resolveWith(n,i)}}
if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);a>o;o++)s[o]&&d.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,t)):--u
return u||l.resolveWith(i,s),l.promise()}}),d.fn.ready=function(e){return d.ready.promise().done(e),this},d.extend({isReady:!1,readyWait:1,holdReady:function(e){e?d.readyWait++:d.ready(!0)},ready:function(e){(!0===e?--d.readyWait:d.isReady)||(d.isReady=!0,!0!==e&&--d.readyWait>0||(j.resolveWith(f,[d]),d.fn.triggerHandler&&(d(f).triggerHandler("ready"),d(f).off("ready"))))}}),d.ready.promise=function(t){return j||(j=d.Deferred(),"complete"===f.readyState?setTimeout(d.ready):(f.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1))),j.promise(t)},d.ready.promise()
var H=d.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n
if("object"===d.type(n))for(a in i=!0,n)d.access(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,d.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(d(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:l?t.call(e):u?t(e[0],n):o}
function O(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=d.expando+O.uid++}d.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},O.uid=1,O.accepts=d.acceptData,O.prototype={key:function(e){if(!O.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=O.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,d.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i]
if("string"==typeof t)o[t]=n
else if(d.isEmptyObject(o))d.extend(this.cache[i],t)
else for(r in t)o[r]=t[r]
return o},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var r
return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,d.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o]
if(void 0===t)this.cache[o]={}
else{d.isArray(t)?r=t.concat(t.map(d.camelCase)):(i=d.camelCase(t),t in s?r=[t,i]:r=(r=i)in s?[r]:r.match(A)||[]),n=r.length
for(;n--;)delete s[r[n]]}},hasData:function(e){return!d.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}}
var F=new O,P=new O,R=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,M=/([A-Z])/g
function W(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(M,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:R.test(n)?d.parseJSON(n):n)}catch(i){}P.set(e,t,n)}else n=void 0
return n}d.extend({hasData:function(e){return P.hasData(e)||F.hasData(e)},data:function(e,t,n){return P.access(e,t,n)},removeData:function(e,t){P.remove(e,t)},_data:function(e,t,n){return F.access(e,t,n)},_removeData:function(e,t){F.remove(e,t)}}),d.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=P.get(o),1===o.nodeType&&!F.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(0===(r=s[n].name).indexOf("data-")&&(r=d.camelCase(r.slice(5)),W(o,r,i[r])))
F.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){P.set(this,e)}):H(this,function(t){var n,r=d.camelCase(e)
if(o&&void 0===t){if(void 0!==(n=P.get(o,e)))return n
if(void 0!==(n=P.get(o,r)))return n
if(void 0!==(n=W(o,r,void 0)))return n}else this.each(function(){var n=P.get(this,r)
P.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&P.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){P.remove(this,e)})}}),d.extend({queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=F.get(e,t),n&&(!r||d.isArray(n)?r=F.access(e,t,d.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=d.queue(e,t),r=n.length,i=n.shift(),o=d._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){d.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return F.get(e,n)||F.access(e,n,{empty:d.Callbacks("once memory").add(function(){F.remove(e,[t+"queue",n])})})}}),d.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?d.queue(this[0],e):void 0===t?this:this.each(function(){var n=d.queue(this,e,t)
d._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&d.dequeue(this,e)})},dequeue:function(e){return this.each(function(){d.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=d.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=F.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,I=["Top","Right","Bottom","Left"],B=function(e,t){return e=t||e,"none"===d.css(e,"display")||!d.contains(e.ownerDocument,e)},_=/^(?:checkbox|radio)$/i
!function(){var e=f.createDocumentFragment().appendChild(f.createElement("div")),t=f.createElement("input")
t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),c.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",c.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}()
var z="undefined"
c.focusinBubbles="onfocusin"in e
var X=/^key/,U=/^(?:mouse|pointer|contextmenu)|click/,V=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/
function G(){return!0}function Q(){return!1}function J(){try{return f.activeElement}catch(e){}}d.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,g,v,m=F.get(e)
if(m)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=d.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof d!==z&&d.event.triggered!==t.type?d.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(A)||[""]).length;l--;)h=v=(a=Y.exec(t[l])||[])[1],g=(a[2]||"").split(".").sort(),h&&(f=d.event.special[h]||{},h=(i?f.delegateType:f.bindType)||h,f=d.event.special[h]||{},c=d.extend({type:h,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&d.expr.match.needsContext.test(i),namespace:g.join(".")},o),(p=u[h])||((p=u[h]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,g,s)||e.addEventListener&&e.addEventListener(h,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),d.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,g,v,m=F.hasData(e)&&F.get(e)
if(m&&(u=m.events)){for(l=(t=(t||"").match(A)||[""]).length;l--;)if(h=v=(a=Y.exec(t[l])||[])[1],g=(a[2]||"").split(".").sort(),h){for(f=d.event.special[h]||{},p=u[h=(r?f.delegateType:f.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&v!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,m.handle)||d.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)d.event.remove(e,h+t[l],n,r,!0)
d.isEmptyObject(u)&&(delete m.handle,F.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,c,p,h,g=[r||f],v=l.call(t,"type")?t.type:t,m=l.call(t,"namespace")?t.namespace.split("."):[]
if(s=a=r=r||f,3!==r.nodeType&&8!==r.nodeType&&!V.test(v+d.event.triggered)&&(v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),c=v.indexOf(":")<0&&"on"+v,(t=t[d.expando]?t:new d.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=m.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:d.makeArray(n,[t]),h=d.event.special[v]||{},i||!h.trigger||!1!==h.trigger.apply(r,n))){if(!i&&!h.noBubble&&!d.isWindow(r)){for(u=h.delegateType||v,V.test(u+v)||(s=s.parentNode);s;s=s.parentNode)g.push(s),a=s
a===(r.ownerDocument||f)&&g.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=g[o++])&&!t.isPropagationStopped();)t.type=o>1?u:h.bindType||v,(p=(F.get(s,"events")||{})[t.type]&&F.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&d.acceptData(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault())
return t.type=v,i||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(g.pop(),n)||!d.acceptData(r)||c&&d.isFunction(r[v])&&!d.isWindow(r)&&((a=r[c])&&(r[c]=null),d.event.triggered=v,r[v](),d.event.triggered=void 0,a&&(r[c]=a)),t.result}},dispatch:function(e){e=d.event.fix(e)
var t,n,i,o,s,a=[],u=r.call(arguments),l=(F.get(this,"events")||{})[e.type]||[],c=d.event.special[e.type]||{}
if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=d.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(s.namespace))&&(e.handleObj=s,e.data=s.data,void 0!==(i=((d.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target
if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;a>n;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?d(i,this).index(u)>=0:d.find(i,this,null,[u]).length),r[i]&&r.push(o)
r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button
return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||f).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[d.expando])return e
var t,n,r,i=e.type,o=e,s=this.fixHooks[i]
for(s||(this.fixHooks[i]=s=U.test(i)?this.mouseHooks:X.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new d.Event(o),t=r.length;t--;)e[n=r[t]]=o[n]
return e.target||(e.target=f),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==J()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===J()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&d.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return d.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=d.extend(new d.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
r?d.event.trigger(i,null,t):d.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},d.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},d.Event=function(e,t){return this instanceof d.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?G:Q):this.type=e,t&&d.extend(this,t),this.timeStamp=e&&e.timeStamp||d.now(),void(this[d.expando]=!0)):new d.Event(e,t)},d.Event.prototype={isDefaultPrevented:Q,isPropagationStopped:Q,isImmediatePropagationStopped:Q,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=G,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=G,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=G,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){d.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return(!r||r!==this&&!d.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),c.focusinBubbles||d.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){d.event.simulate(t,e.target,d.event.fix(e),!0)}
d.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=F.access(r,t)
i||r.addEventListener(e,n,!0),F.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=F.access(r,t)-1
i?F.access(r,t,i):(r.removeEventListener(e,n,!0),F.remove(r,t))}}}),d.fn.extend({on:function(e,t,n,r,i){var o,s
if("object"==typeof e){for(s in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(s,t,n,e[s],i)
return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=Q
else if(!r)return this
return 1===i&&(o=r,(r=function(e){return d().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=d.guid++)),this.each(function(){d.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,d(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=Q),this.each(function(){d.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){d.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?d.event.trigger(e,t,n,!0):void 0}})
var K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/<([\w:]+)/,ee=/<|&#?\w+;/,te=/<(?:script|style|link)/i,ne=/checked\s*(?:[^=]|=\s*.checked.)/i,re=/^$|\/(?:java|ecma)script/i,ie=/^true\/(.*)/,oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,se={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function ae(e,t){return d.nodeName(e,"table")&&d.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ue(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function le(e){var t=ie.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function ce(e,t){for(var n=0,r=e.length;r>n;n++)F.set(e[n],"globalEval",!t||F.get(t[n],"globalEval"))}function fe(e,t){var n,r,i,o,s,a,u,l
if(1===t.nodeType){if(F.hasData(e)&&(o=F.access(e),s=F.set(t,o),l=o.events))for(i in delete s.handle,s.events={},l)for(n=0,r=l[i].length;r>n;n++)d.event.add(t,i,l[i][n])
P.hasData(e)&&(a=P.access(e),u=d.extend({},a),P.set(t,u))}}function pe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&d.nodeName(e,t)?d.merge([e],n):n}function de(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&_.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}se.optgroup=se.option,se.tbody=se.tfoot=se.colgroup=se.caption=se.thead,se.th=se.td,d.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=d.contains(e.ownerDocument,e)
if(!(c.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||d.isXMLDoc(e)))for(s=pe(a),r=0,i=(o=pe(e)).length;i>r;r++)de(o[r],s[r])
if(t)if(n)for(o=o||pe(e),s=s||pe(a),r=0,i=o.length;i>r;r++)fe(o[r],s[r])
else fe(e,a)
return(s=pe(a,"script")).length>0&&ce(s,!u&&pe(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,h=e.length;h>p;p++)if((i=e[p])||0===i)if("object"===d.type(i))d.merge(f,i.nodeType?[i]:i)
else if(ee.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Z.exec(i)||["",""])[1].toLowerCase(),a=se[s]||se._default,o.innerHTML=a[1]+i.replace(K,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild
d.merge(f,o.childNodes),(o=c.firstChild).textContent=""}else f.push(t.createTextNode(i))
for(c.textContent="",p=0;i=f[p++];)if((!r||-1===d.inArray(i,r))&&(u=d.contains(i.ownerDocument,i),o=pe(c.appendChild(i),"script"),u&&ce(o),n))for(l=0;i=o[l++];)re.test(i.type||"")&&n.push(i)
return c},cleanData:function(e){for(var t,n,r,i,o=d.event.special,s=0;void 0!==(n=e[s]);s++){if(d.acceptData(n)&&((i=n[F.expando])&&(t=F.cache[i]))){if(t.events)for(r in t.events)o[r]?d.event.remove(n,r):d.removeEvent(n,r,t.handle)
F.cache[i]&&delete F.cache[i]}delete P.cache[n[P.expando]]}}}),d.fn.extend({text:function(e){return H(this,function(e){return void 0===e?d.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||ae(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ae(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?d.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||d.cleanData(pe(n)),n.parentNode&&(t&&d.contains(n.ownerDocument,n)&&ce(pe(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(d.cleanData(pe(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return d.clone(this,e,t)})},html:function(e){return H(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!te.test(e)&&!se[(Z.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(K,"<$1></$2>")
try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(d.cleanData(pe(t,!1)),t.innerHTML=e)
t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,d.cleanData(pe(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e)
var n,r,o,s,a,u,l=0,f=this.length,p=this,h=f-1,g=e[0],v=d.isFunction(g)
if(v||f>1&&"string"==typeof g&&!c.checkClone&&ne.test(g))return this.each(function(n){var r=p.eq(n)
v&&(e[0]=g.call(this,n,r.html())),r.domManip(e,t)})
if(f&&(r=(n=d.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===n.childNodes.length&&(n=r),r)){for(s=(o=d.map(pe(n,"script"),ue)).length;f>l;l++)a=n,l!==h&&(a=d.clone(a,!0,!0),s&&d.merge(o,pe(a,"script"))),t.call(this[l],a,l)
if(s)for(u=o[o.length-1].ownerDocument,d.map(o,le),l=0;s>l;l++)a=o[l],re.test(a.type||"")&&!F.access(a,"globalEval")&&d.contains(u,a)&&(a.src?d._evalUrl&&d._evalUrl(a.src):d.globalEval(a.textContent.replace(oe,"")))}return this}}),d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){d.fn[e]=function(e){for(var n,r=[],i=d(e),s=i.length-1,a=0;s>=a;a++)n=a===s?this:this.clone(!0),d(i[a])[t](n),o.apply(r,n.get())
return this.pushStack(r)}})
var he,ge={}
function ve(t,n){var r,i=d(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:d.css(i[0],"display")
return i.detach(),o}function me(e){var t=f,n=ge[e]
return n||("none"!==(n=ve(e,t))&&n||((t=(he=(he||d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=ve(e,t),he.detach()),ge[e]=n),n}var ye=/^margin/,xe=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),be=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)}
function we(e,t,n){var r,i,o,s,a=e.style
return(n=n||be(e))&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||d.contains(e.ownerDocument,e)||(s=d.style(e,t)),xe.test(s)&&ye.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function Te(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}!function(){var t,n,r=f.documentElement,i=f.createElement("div"),o=f.createElement("div")
if(o.style){function s(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o.innerHTML="",r.appendChild(i)
var s=e.getComputedStyle(o,null)
t="1%"!==s.top,n="4px"===s.width,r.removeChild(i)}o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",c.clearCloneStyle="content-box"===o.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",i.appendChild(o),e.getComputedStyle&&d.extend(c,{pixelPosition:function(){return s(),t},boxSizingReliable:function(){return null==n&&s(),n},reliableMarginRight:function(){var t,n=o.appendChild(f.createElement("div"))
return n.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",o.style.width="1px",r.appendChild(i),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(i),o.removeChild(n),t}})}}(),d.swap=function(e,t,n,r){var i,o,s={}
for(o in t)s[o]=e.style[o],e.style[o]=t[o]
for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o]
return i}
var Ce=/^(none|table(?!-c[ea]).+)/,Ne=new RegExp("^("+$+")(.*)$","i"),ke=new RegExp("^([+-])=("+$+")","i"),Ee={position:"absolute",visibility:"hidden",display:"block"},Se={letterSpacing:"0",fontWeight:"400"},De=["Webkit","O","Moz","ms"]
function je(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=De.length;i--;)if((t=De[i]+n)in e)return t
return r}function Ae(e,t,n){var r=Ne.exec(t)
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Le(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=d.css(e,n+I[o],!0,i)),r?("content"===n&&(s-=d.css(e,"padding"+I[o],!0,i)),"margin"!==n&&(s-=d.css(e,"border"+I[o]+"Width",!0,i))):(s+=d.css(e,"padding"+I[o],!0,i),"padding"!==n&&(s+=d.css(e,"border"+I[o]+"Width",!0,i)))
return s}function qe(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=be(e),s="border-box"===d.css(e,"boxSizing",!1,o)
if(0>=i||null==i){if((0>(i=we(e,t,o))||null==i)&&(i=e.style[t]),xe.test(i))return i
r=s&&(c.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Le(e,t,n||(s?"border":"content"),r,o)+"px"}function He(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)(r=e[s]).style&&(o[s]=F.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&B(r)&&(o[s]=F.access(r,"olddisplay",me(r.nodeName)))):(i=B(r),"none"===n&&i||F.set(r,"olddisplay",i?n:d.css(r,"display"))))
for(s=0;a>s;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"))
return e}function Oe(e,t,n,r,i){return new Oe.prototype.init(e,t,n,r,i)}d.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=we(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=d.camelCase(t),u=e.style
return t=d.cssProps[a]||(d.cssProps[a]=je(u,a)),s=d.cssHooks[t]||d.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=ke.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(d.css(e,t)),o="number"),void(null!=n&&n==n&&("number"!==o||d.cssNumber[a]||(n+="px"),c.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=d.camelCase(t)
return t=d.cssProps[a]||(d.cssProps[a]=je(e.style,a)),(s=d.cssHooks[t]||d.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=we(e,t,r)),"normal"===i&&t in Se&&(i=Se[t]),""===n||n?(o=parseFloat(i),!0===n||d.isNumeric(o)?o||0:i):i}}),d.each(["height","width"],function(e,t){d.cssHooks[t]={get:function(e,n,r){return n?Ce.test(d.css(e,"display"))&&0===e.offsetWidth?d.swap(e,Ee,function(){return qe(e,t,r)}):qe(e,t,r):void 0},set:function(e,n,r){var i=r&&be(e)
return Ae(0,n,r?Le(e,t,r,"border-box"===d.css(e,"boxSizing",!1,i),i):0)}}}),d.cssHooks.marginRight=Te(c.reliableMarginRight,function(e,t){return t?d.swap(e,{display:"inline-block"},we,[e,"marginRight"]):void 0}),d.each({margin:"",padding:"",border:"Width"},function(e,t){d.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+I[r]+t]=o[r]||o[r-2]||o[0]
return i}},ye.test(e)||(d.cssHooks[e+t].set=Ae)}),d.fn.extend({css:function(e,t){return H(this,function(e,t,n){var r,i,o={},s=0
if(d.isArray(t)){for(r=be(e),i=t.length;i>s;s++)o[t[s]]=d.css(e,t[s],!1,r)
return o}return void 0!==n?d.style(e,t,n):d.css(e,t)},e,t,arguments.length>1)},show:function(){return He(this,!0)},hide:function(){return He(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){B(this)?d(this).show():d(this).hide()})}}),d.Tween=Oe,Oe.prototype={constructor:Oe,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(d.cssNumber[n]?"":"px")},cur:function(){var e=Oe.propHooks[this.prop]
return e&&e.get?e.get(this):Oe.propHooks._default.get(this)},run:function(e){var t,n=Oe.propHooks[this.prop]
return this.options.duration?this.pos=t=d.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Oe.propHooks._default.set(this),this}},Oe.prototype.init.prototype=Oe.prototype,Oe.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=d.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){d.fx.step[e.prop]?d.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[d.cssProps[e.prop]]||d.cssHooks[e.prop])?d.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Oe.propHooks.scrollTop=Oe.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},d.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},d.fx=Oe.prototype.init,d.fx.step={}
var Fe,Pe,Re=/^(?:toggle|show|hide)$/,Me=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),We=/queueHooks$/,$e=[function(e,t,n){var r,i,o,s,a,u,l,c=this,f={},p=e.style,h=e.nodeType&&B(e),g=F.get(e,"fxshow")
for(r in n.queue||(null==(a=d._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,d.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],l=d.css(e,"display"),"inline"===("none"===l?F.get(e,"olddisplay")||me(e.nodeName):l)&&"none"===d.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),t)if(i=t[r],Re.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue
h=!0}f[r]=g&&g[r]||d.style(e,r)}else l=void 0
if(d.isEmptyObject(f))"inline"===("none"===l?me(e.nodeName):l)&&(p.display=l)
else for(r in g?"hidden"in g&&(h=g.hidden):g=F.access(e,"fxshow",{}),o&&(g.hidden=!h),h?d(e).show():c.done(function(){d(e).hide()}),c.done(function(){var t
for(t in F.remove(e,"fxshow"),f)d.style(e,t,f[t])}),f)s=ze(h?g[r]:0,r,c),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}],Ie={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Me.exec(t),o=i&&i[3]||(d.cssNumber[e]?"":"px"),s=(d.cssNumber[e]||"px"!==o&&+r)&&Me.exec(d.css(n.elem,e)),a=1,u=20
if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1
do{s/=a=a||".5",d.style(n.elem,e,s+o)}while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]}
function Be(){return setTimeout(function(){Fe=void 0}),Fe=d.now()}function _e(e,t){var n,r=0,i={height:e}
for(t=t?1:0;4>r;r+=2-t)i["margin"+(n=I[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function ze(e,t,n){for(var r,i=(Ie[t]||[]).concat(Ie["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function Xe(e,t,n){var r,i,o=0,s=$e.length,a=d.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
for(var t=Fe||Be(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;s>o;o++)l.tweens[o].run(r)
return a.notifyWith(e,[l,r,n]),1>r&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:d.extend({},t),opts:d.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Fe||Be(),duration:n.duration,tweens:[],createTween:function(t,n){var r=d.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;r>n;n++)l.tweens[n].run(1)
return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=d.camelCase(n)],o=e[n],d.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=d.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);s>o;o++)if(r=$e[o].call(l,e,c,l.opts))return r
return d.map(c,ze,l),d.isFunction(l.opts.start)&&l.opts.start.call(e,l),d.fx.timer(d.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}d.Animation=d.extend(Xe,{tweener:function(e,t){d.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,r=0,i=e.length;i>r;r++)n=e[r],Ie[n]=Ie[n]||[],Ie[n].unshift(t)},prefilter:function(e,t){t?$e.unshift(e):$e.push(e)}}),d.speed=function(e,t,n){var r=e&&"object"==typeof e?d.extend({},e):{complete:n||!n&&t||d.isFunction(e)&&e,duration:e,easing:n&&t||t&&!d.isFunction(t)&&t}
return r.duration=d.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in d.fx.speeds?d.fx.speeds[r.duration]:d.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){d.isFunction(r.old)&&r.old.call(this),r.queue&&d.dequeue(this,r.queue)},r},d.fn.extend({fadeTo:function(e,t,n,r){return this.filter(B).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=d.isEmptyObject(e),o=d.speed(t,n,r),s=function(){var t=Xe(this,d.extend({},e),o);(i||F.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=d.timers,s=F.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&We.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&d.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=F.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=d.timers,s=r?r.length:0
for(n.finish=!0,d.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),d.each(["toggle","show","hide"],function(e,t){var n=d.fn[t]
d.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_e(t,!0),e,r,i)}}),d.each({slideDown:_e("show"),slideUp:_e("hide"),slideToggle:_e("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){d.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),d.timers=[],d.fx.tick=function(){var e,t=0,n=d.timers
for(Fe=d.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||d.fx.stop(),Fe=void 0},d.fx.timer=function(e){d.timers.push(e),e()?d.fx.start():d.timers.pop()},d.fx.interval=13,d.fx.start=function(){Pe||(Pe=setInterval(d.fx.tick,d.fx.interval))},d.fx.stop=function(){clearInterval(Pe),Pe=null},d.fx.speeds={slow:600,fast:200,_default:400},d.fn.delay=function(e,t){return e=d.fx&&d.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e)
n.stop=function(){clearTimeout(r)}})},function(){var e=f.createElement("input"),t=f.createElement("select"),n=t.appendChild(f.createElement("option"))
e.type="checkbox",c.checkOn=""!==e.value,c.optSelected=n.selected,t.disabled=!0,c.optDisabled=!n.disabled,(e=f.createElement("input")).value="t",e.type="radio",c.radioValue="t"===e.value}()
var Ue,Ve=d.expr.attrHandle
d.fn.extend({attr:function(e,t){return H(this,d.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){d.removeAttr(this,e)})}}),d.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===z?d.prop(e,t,n):(1===o&&d.isXMLDoc(e)||(t=t.toLowerCase(),r=d.attrHooks[t]||(d.expr.match.bool.test(t)?Ue:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=d.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void d.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(A)
if(o&&1===e.nodeType)for(;n=o[i++];)r=d.propFix[n]||n,d.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!c.radioValue&&"radio"===t&&d.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Ue={set:function(e,t,n){return!1===t?d.removeAttr(e,n):e.setAttribute(n,n),n}},d.each(d.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ve[t]||d.find.attr
Ve[t]=function(e,t,r){var i,o
return r||(o=Ve[t],Ve[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ve[t]=o),i}})
var Ye=/^(?:input|select|textarea|button)$/i
d.fn.extend({prop:function(e,t){return H(this,d.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[d.propFix[e]||e]})}}),d.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType
if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!d.isXMLDoc(e))&&(t=d.propFix[t]||t,i=d.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ye.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),c.optSelected||(d.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),d.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){d.propFix[this.toLowerCase()]=this})
var Ge=/[\t\r\n\f]/g
d.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length
if(d.isFunction(e))return this.each(function(t){d(this).addClass(e.call(this,t,this.className))})
if(a)for(t=(e||"").match(A)||[];l>u;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ge," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ")
s=d.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length
if(d.isFunction(e))return this.each(function(t){d(this).removeClass(e.call(this,t,this.className))})
if(a)for(t=(e||"").match(A)||[];l>u;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ge," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ")
s=e?d.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(d.isFunction(e)?function(n){d(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=d(this),o=e.match(A)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else(n===z||"boolean"===n)&&(this.className&&F.set(this,"__className__",this.className),this.className=this.className||!1===e?"":F.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ge," ").indexOf(t)>=0)return!0
return!1}})
var Qe=/\r/g
d.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=d.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,d(this).val()):e)?i="":"number"==typeof i?i+="":d.isArray(i)&&(i=d.map(i,function(e){return null==e?"":e+""})),(t=d.valHooks[this.type]||d.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=d.valHooks[i.type]||d.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Qe,""):null==n?"":n:void 0}}),d.extend({valHooks:{option:{get:function(e){var t=d.find.attr(e,"value")
return null!=t?t:d.trim(d.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(!(!(n=r[u]).selected&&u!==i||(c.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&d.nodeName(n.parentNode,"optgroup"))){if(t=d(n).val(),o)return t
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=d.makeArray(t),s=i.length;s--;)((r=i[s]).selected=d.inArray(r.value,o)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),d.each(["radio","checkbox"],function(){d.valHooks[this]={set:function(e,t){return d.isArray(t)?e.checked=d.inArray(d(e).val(),t)>=0:void 0}},c.checkOn||(d.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){d.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),d.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}})
var Je=d.now(),Ke=/\?/
d.parseJSON=function(e){return JSON.parse(e+"")},d.parseXML=function(e){var t
if(!e||"string"!=typeof e)return null
try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&d.error("Invalid XML: "+e),t}
var Ze=/#.*$/,et=/([?&])_=[^&]*/,tt=/^(.*?):[ \t]*([^\r\n]*)$/gm,nt=/^(?:GET|HEAD)$/,rt=/^\/\//,it=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ot={},st={},at="*/".concat("*"),ut=e.location.href,lt=it.exec(ut.toLowerCase())||[]
function ct(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(A)||[]
if(d.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ft(e,t,n,r){var i={},o=e===st
function s(a){var u
return i[a]=!0,d.each(e[a]||[],function(e,a){var l=a(t,n,r)
return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function pt(e,t){var n,r,i=d.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&d.extend(!0,e,r),e}d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ut,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":at,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?pt(pt(e,d.ajaxSettings),t):pt(d.ajaxSettings,e)},ajaxPrefilter:ct(ot),ajaxTransport:ct(st),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,r,i,o,s,a,u,l,c=d.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?d(f):d.event,h=d.Deferred(),g=d.Callbacks("once memory"),v=c.statusCode||{},m={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t
if(2===x){if(!o)for(o={};t=tt.exec(i);)o[t[1].toLowerCase()]=t[2]
t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return x||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return x||(c.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>x)for(t in e)v[t]=[v[t],e[t]]
else w.always(e[w.status])
return this},abort:function(e){var t=e||b
return n&&n.abort(t),C(0,t),this}}
if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,c.url=((e||c.url||ut)+"").replace(Ze,"").replace(rt,lt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=d.trim(c.dataType||"*").toLowerCase().match(A)||[""],null==c.crossDomain&&(a=it.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===lt[1]&&a[2]===lt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(lt[3]||("http:"===lt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=d.param(c.data,c.traditional)),ft(ot,c,t,w),2===x)return w
for(l in(u=d.event&&c.global)&&0==d.active++&&d.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!nt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Ke.test(r)?"&":"?")+c.data,delete c.data),!1===c.cache&&(c.url=et.test(r)?r.replace(et,"$1_="+Je++):r+(Ke.test(r)?"&":"?")+"_="+Je++)),c.ifModified&&(d.lastModified[r]&&w.setRequestHeader("If-Modified-Since",d.lastModified[r]),d.etag[r]&&w.setRequestHeader("If-None-Match",d.etag[r])),(c.data&&c.hasContent&&!1!==c.contentType||t.contentType)&&w.setRequestHeader("Content-Type",c.contentType),w.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+at+"; q=0.01":""):c.accepts["*"]),c.headers)w.setRequestHeader(l,c.headers[l])
if(c.beforeSend&&(!1===c.beforeSend.call(f,w,c)||2===x))return w.abort()
for(l in b="abort",{success:1,error:1,complete:1})w[l](c[l])
if(n=ft(st,c,t,w)){w.readyState=1,u&&p.trigger("ajaxSend",[w,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},c.timeout))
try{x=1,n.send(m,C)}catch(T){if(!(2>x))throw T
C(-1,T)}}else C(-1,"No Transport")
function C(e,t,o,a){var l,m,y,b,T,C=t
2!==x&&(x=2,s&&clearTimeout(s),n=void 0,i=a||"",w.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}(c,w,o)),b=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(c,b,w,l),l?(c.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(d.lastModified[r]=T),(T=w.getResponseHeader("etag"))&&(d.etag[r]=T)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,l=!(y=b.error))):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),w.status=e,w.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,w]):h.rejectWith(f,[w,C,y]),w.statusCode(v),v=void 0,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[w,c,l?m:y]),g.fireWith(f,[w,C]),u&&(p.trigger("ajaxComplete",[w,c]),--d.active||d.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return d.get(e,t,n,"json")},getScript:function(e,t){return d.get(e,void 0,t,"script")}}),d.each(["get","post"],function(e,t){d[t]=function(e,n,r,i){return d.isFunction(n)&&(i=i||r,r=n,n=void 0),d.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),d._evalUrl=function(e){return d.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},d.fn.extend({wrapAll:function(e){var t
return d.isFunction(e)?this.each(function(t){d(this).wrapAll(e.call(this,t))}):(this[0]&&(t=d(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return this.each(d.isFunction(e)?function(t){d(this).wrapInner(e.call(this,t))}:function(){var t=d(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=d.isFunction(e)
return this.each(function(n){d(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()}}),d.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},d.expr.filters.visible=function(e){return!d.expr.filters.hidden(e)}
var dt=/%20/g,ht=/\[\]$/,gt=/\r?\n/g,vt=/^(?:submit|button|image|reset|file)$/i,mt=/^(?:input|select|textarea|keygen)/i
function yt(e,t,n,r){var i
if(d.isArray(t))d.each(t,function(t,i){n||ht.test(e)?r(e,i):yt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)})
else if(n||"object"!==d.type(t))r(e,t)
else for(i in t)yt(e+"["+i+"]",t[i],n,r)}d.param=function(e,t){var n,r=[],i=function(e,t){t=d.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=d.ajaxSettings&&d.ajaxSettings.traditional),d.isArray(e)||e.jquery&&!d.isPlainObject(e))d.each(e,function(){i(this.name,this.value)})
else for(n in e)yt(n,e[n],t,i)
return r.join("&").replace(dt,"+")},d.fn.extend({serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=d.prop(this,"elements")
return e?d.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!d(this).is(":disabled")&&mt.test(this.nodeName)&&!vt.test(e)&&(this.checked||!_.test(e))}).map(function(e,t){var n=d(this).val()
return null==n?null:d.isArray(n)?d.map(n,function(e){return{name:t.name,value:e.replace(gt,"\r\n")}}):{name:t.name,value:n.replace(gt,"\r\n")}}).get()}}),d.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var xt=0,bt={},wt={0:200,1223:204},Tt=d.ajaxSettings.xhr()
e.attachEvent&&e.attachEvent("onunload",function(){for(var e in bt)bt[e]()}),c.cors=!!Tt&&"withCredentials"in Tt,c.ajax=Tt=!!Tt,d.ajaxTransport(function(e){var t
return c.cors||Tt&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++xt
if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i]
for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)o.setRequestHeader(i,n[i])
t=function(e){return function(){t&&(delete bt[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(wt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=bt[s]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return d.globalEval(e),e}}}),d.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),d.ajaxTransport("script",function(e){var t,n
if(e.crossDomain)return{send:function(r,i){t=d("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),f.head.appendChild(t[0])},abort:function(){n&&n()}}})
var Ct=[],Nt=/(=)\?(?=&|$)|\?\?/
d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ct.pop()||d.expando+"_"+Je++
return this[e]=!0,e}}),d.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Nt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nt.test(t.data)&&"data")
return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=d.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Nt,"$1"+i):!1!==t.jsonp&&(t.url+=(Ke.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||d.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ct.push(i)),s&&d.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),d.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||f
var r=w.exec(e),i=!n&&[]
return r?[t.createElement(r[1])]:(r=d.buildFragment([e],t,i),i&&i.length&&d(i).remove(),d.merge([],r.childNodes))}
var kt=d.fn.load
d.fn.load=function(e,t,n){if("string"!=typeof e&&kt)return kt.apply(this,arguments)
var r,i,o,s=this,a=e.indexOf(" ")
return a>=0&&(r=d.trim(e.slice(a)),e=e.slice(0,a)),d.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&d.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?d("<div>").append(d.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},d.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){d.fn[t]=function(e){return this.on(t,e)}}),d.expr.filters.animated=function(e){return d.grep(d.timers,function(t){return e===t.elem}).length}
var Et=e.document.documentElement
function St(e){return d.isWindow(e)?e:9===e.nodeType&&e.defaultView}d.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=d.css(e,"position"),c=d(e),f={}
"static"===l&&(e.style.position="relative"),a=c.offset(),o=d.css(e,"top"),u=d.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),d.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},d.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){d.offset.setOffset(this,e,t)})
var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument
return o?(t=o.documentElement,d.contains(t,r)?(typeof r.getBoundingClientRect!==z&&(i=r.getBoundingClientRect()),n=St(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===d.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),d.nodeName(e[0],"html")||(r=e.offset()),r.top+=d.css(e[0],"borderTopWidth",!0),r.left+=d.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-d.css(n,"marginTop",!0),left:t.left-r.left-d.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Et;e&&!d.nodeName(e,"html")&&"static"===d.css(e,"position");)e=e.offsetParent
return e||Et})}}),d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n
d.fn[t]=function(i){return H(this,function(t,i,o){var s=St(t)
return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),d.each(["top","left"],function(e,t){d.cssHooks[t]=Te(c.pixelPosition,function(e,n){return n?(n=we(e,t),xe.test(n)?d(e).position()[t]+"px":n):void 0})}),d.each({Height:"height",Width:"width"},function(e,t){d.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){d.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===i?"margin":"border")
return H(this,function(t,n,r){var i
return d.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?d.css(t,n,s):d.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),d.fn.size=function(){return this.length},d.fn.andSelf=d.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return d})
var Dt=e.jQuery,jt=e.$
return d.noConflict=function(t){return e.$===d&&(e.$=jt),t&&e.jQuery===d&&(e.jQuery=Dt),d},typeof t===z&&(e.jQuery=e.$=d),d})

//# sourceMappingURL=jquery.min-1896132ef32b5ca610ee8dc53a3c2fd4.map