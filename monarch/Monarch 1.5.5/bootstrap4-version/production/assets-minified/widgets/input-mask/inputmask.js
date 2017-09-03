!function(a){function b(a){var b=document.createElement("input"),a="on"+a,c=a in b;return c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),b=null,c}function c(b,d,e){var f=e.aliases[b];return!!f&&(f.alias&&c(f.alias,void 0,e),a.extend(!0,e,f),a.extend(!0,e,d),!0)}function d(b,c){function d(a){function c(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function d(a,c,d){var e=b.definitions[c],f=0==a.matches.length;if(d=void 0!=d?d:a.matches.length,e&&!i){for(var g=e.prevalidator,h=g?g.length:0,j=1;j<e.cardinality;j++){var k=h>=j?g[j-1]:[],l=k.validator,m=k.cardinality;a.matches.splice(d++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:a.isOptional,newBlockMarker:f,casing:e.casing,def:e.definitionSymbol||c,placeholder:e.placeholder,mask:c})}a.matches.splice(d++,0,{fn:e.validator?"string"==typeof e.validator?new RegExp(e.validator):new function(){this.test=e.validator}:new RegExp("."),cardinality:e.cardinality,optionality:a.isOptional,newBlockMarker:f,casing:e.casing,def:e.definitionSymbol||c,placeholder:e.placeholder,mask:c})}else a.matches.splice(d++,0,{fn:null,cardinality:0,optionality:a.isOptional,newBlockMarker:f,casing:null,def:c,placeholder:void 0,mask:c}),i=!1}for(var e,f,g,h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,i=!1,j=new c,k=[],l=[];e=h.exec(a);)switch(f=e[0],f.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:g=k.pop(),k.length>0?k[k.length-1].matches.push(g):j.matches.push(g);break;case b.optionalmarker.start:k.push(new c(!1,!0));break;case b.groupmarker.start:k.push(new c(!0));break;case b.quantifiermarker.start:var m=new c(!1,!1,!0);f=f.replace(/[{}]/g,"");var n=f.split(","),o=isNaN(n[0])?n[0]:parseInt(n[0]),p=1==n.length?o:isNaN(n[1])?n[1]:parseInt(n[1]);if("*"!=p&&"+"!=p||(o="*"==p?0:1),m.quantifier={min:o,max:p},k.length>0){var q=k[k.length-1].matches;if(e=q.pop(),!e.isGroup){var r=new c(!0);r.matches.push(e),e=r}q.push(e),q.push(m)}else{if(e=j.matches.pop(),!e.isGroup){var r=new c(!0);r.matches.push(e),e=r}j.matches.push(e),j.matches.push(m)}break;case b.escapeChar:i=!0;break;case b.alternatormarker:var s=new c(!1,!1,!1,!0);if(k.length>0){var q=k[k.length-1].matches;e=q.pop(),s.matches.push(e),k.push(s)}else e=j.matches.pop(),s.matches.push(e),k.push(s);break;default:if(k.length>0){d(k[k.length-1],f);var t=k[k.length-1];if(t.isAlternator){g=k.pop();for(var u=0;u<g.matches.length;u++)g.matches[u].isGroup=!1;k.length>0?k[k.length-1].matches.push(g):j.matches.push(g)}}else{if(j.matches.length>0){var v=j.matches[j.matches.length-1];v.isGroup&&(v.isGroup=!1,d(v,b.groupmarker.start,0),d(v,b.groupmarker.end))}d(j,f)}}if(k.length>0){var t=k[k.length-1];if(t.isAlternator)for(var u=0;u<t.matches.length;u++)t.matches[u].isGroup=!1;j.matches=j.matches.concat(k)}if(j.matches.length>0){var v=j.matches[j.matches.length-1];v.isGroup&&(v.isGroup=!1,d(v,b.groupmarker.start,0),d(v,b.groupmarker.end)),l.push(j)}return l}function e(c,e){if(b.numericInput&&b.multi!==!0){c=c.split("").reverse();for(var f=0;f<c.length;f++)c[f]==b.optionalmarker.start?c[f]=b.optionalmarker.end:c[f]==b.optionalmarker.end?c[f]=b.optionalmarker.start:c[f]==b.groupmarker.start?c[f]=b.groupmarker.end:c[f]==b.groupmarker.end&&(c[f]=b.groupmarker.start);c=c.join("")}if(void 0!=c&&""!=c){if(b.repeat>0||"*"==b.repeat||"+"==b.repeat){var g="*"==b.repeat?0:"+"==b.repeat?1:b.repeat;c=b.groupmarker.start+c+b.groupmarker.end+b.quantifiermarker.start+g+","+b.repeat+b.quantifiermarker.end}return void 0==a.inputmask.masksCache[c]&&(a.inputmask.masksCache[c]={mask:c,maskToken:d(c),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:e}),a.extend(!0,{},a.inputmask.masksCache[c])}}var f=[];if(a.isFunction(b.mask)&&(b.mask=b.mask.call(this,b)),a.isArray(b.mask))if(c)a.each(b.mask,function(a,b){void 0!=b.mask?f.push(e(b.mask.toString(),b)):f.push(e(b.toString()))});else{var g="("+b.mask.join(")|(")+")";f=e(g)}else 1==b.mask.length&&0==b.greedy&&0!=b.repeat&&(b.placeholder=""),f=void 0!=b.mask.mask?e(b.mask.mask.toString(),b.mask):e(b.mask.toString());return f}function e(b,c,d){function e(a,b,c){b=b||0;var e,f,h,i=[],j=0;do{if(a===!0&&g().validPositions[j]){var k=g().validPositions[j];f=k.match,e=k.locator.slice(),i.push(null==f.fn?f.def:c===!0?k.input:f.placeholder||d.placeholder.charAt(j%d.placeholder.length))}else{if(b>j){h=u(j,e,j-1)[0]}else h=r(j,e,j-1);f=h.match,e=h.locator.slice(),i.push(null==f.fn?f.def:f.placeholder||d.placeholder.charAt(j%d.placeholder.length))}j++}while((void 0==ba||j-1<ba)&&null!=f.fn||null==f.fn&&""!=f.def||b>=j);return i.pop(),i}function g(){return c}function n(a){var b=g();b.buffer=void 0,b.tests={},a!==!0&&(b._buffer=void 0,b.validPositions={},b.p=-1)}function o(a){var b=g(),c=-1,d=b.validPositions;void 0==a&&(a=-1);var e=c,f=c;for(var h in d){var i=parseInt(h);a!=-1&&null==d[i].match.fn||(i<a&&(e=i),i>=a&&(f=i))}return c=a-e>1||f<a?e:f}function p(b,c,e){if(d.insertMode&&void 0!=g().validPositions[b]&&void 0==e){var f,h=a.extend(!0,{},g().validPositions),i=o();for(f=b;f<=i;f++)delete g().validPositions[f];g().validPositions[b]=c;var j=!0;for(f=b;f<=i;f++){var k=h[f];if(void 0!=k){var l=null==k.match.fn?f+1:C(f);j=!!t(l,k.match.def)&&(j&&z(l,k.input,!0,!0)!==!1)}if(!j)break}if(!j)return g().validPositions=a.extend(!0,{},h),!1}else g().validPositions[b]=c;return!0}function q(a,b){var c,d,e=a;for(c=a;c<b;c++)delete g().validPositions[c];for(c=b;c<=o();){var f=g().validPositions[c],h=g().validPositions[e];void 0!=f&&void 0==h?(t(e,f.match.def)&&z(e,f.input,!0)!==!1&&(delete g().validPositions[c],c++),e++):c++}for(d=o();d>0&&(void 0==g().validPositions[d]||null==g().validPositions[d].match.fn);)delete g().validPositions[d],d--;n(!0)}function r(a,b,c){for(var e,f=u(a,b,c),g=0;g<f.length&&(e=f[g],!d.greedy&&(!e.match||e.match.optionality!==!1&&e.match.newBlockMarker!==!1||e.match.optionalQuantifier===!0));g++);return e}function s(a){return g().validPositions[a]?g().validPositions[a].match:u(a)[0].match}function t(a,b){for(var c=!1,d=u(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def==b){c=!0;break}return c}function u(b,c,e){function f(c,e,g,h){function j(g,h,n){if(i==b&&void 0==g.matches)return k.push({match:g,locator:h.reverse()}),!0;if(void 0!=g.matches){if(g.isGroup&&n!==!0){if(g=j(c.matches[m+1],h))return!0}else if(g.isOptional){var o=g;if(g=f(g,e,h,n)){var p=k[k.length-1].match,q=0==a.inArray(p,o.matches);q&&(l=!0),i=b}}else if(g.isAlternator){var r,s,t=g,u=k.slice(),v=h.length,w=e.length>0?e.shift():-1;if(w==-1){var x=i;k=[],g=f(t.matches[0],e.slice(),[0].concat(h),n),r=k.slice(),i=x,k=[],g=f(t.matches[1],e,[1].concat(h),n),s=k.slice(),k=[];for(var y=0;y<r.length;y++){var z=r[y];u.push(z);for(var A=0;A<s.length;A++){var B=s[A];if(z.match.mask==B.match.mask){s.splice(A,1),z.locator[v]=-1;break}}}k=u.concat(s)}else g=j(t.matches[w],[w].concat(h),n);if(g)return!0}else if(g.isQuantifier&&n!==!0){var C=g;d.greedy=d.greedy&&isFinite(C.quantifier.max);for(var D=e.length>0&&n!==!0?e.shift():0;D<(isNaN(C.quantifier.max)?D+1:C.quantifier.max)&&i<=b;D++){var E=c.matches[a.inArray(C,c.matches)-1];if(g=j(E,[D].concat(h),!0)){var p=k[k.length-1].match;p.optionalQuantifier=D>C.quantifier.min-1;var q=0==a.inArray(p,E.matches);if(q){if(D>C.quantifier.min-1){l=!0,i=b;break}return!0}return!0}}}else if(g=f(g,e,h,n))return!0}else i++}for(var m=e.length>0?e.shift():0;m<c.matches.length;m++)if(c.matches[m].isQuantifier!==!0){var n=j(c.matches[m],[m].concat(g),h);if(n&&i==b)return n;if(i>b)break}}var h=g().maskToken,i=c?e:0,j=c||[0],k=[],l=!1;if(void 0==c){for(var m,n=b-1;void 0==(m=g().validPositions[n])&&n>-1;)n--;if(void 0!=m&&n>-1)i=n,j=m.locator.slice();else{for(n=b-1;void 0==(m=g().tests[n])&&n>-1;)n--;void 0!=m&&n>-1&&(i=n,j=m[0].locator.slice())}}for(var o=j.shift();o<h.length;o++){if(f(h[o],j,[o])&&i==b||i>b)break}return(0==k.length||l)&&k.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),g().tests[b]=k,k}function v(){return void 0==g()._buffer&&(g()._buffer=e(!1,1)),g()._buffer}function w(){return void 0==g().buffer&&(g().buffer=e(!0,o(),!0)),g().buffer}function x(a,b){var c=w().slice();if(a===!0)n(),a=0,b=c.length;else for(var e=a;e<b;e++)delete g().validPositions[e],delete g().tests[e];for(var e=a;e<b;e++)c[e]!=d.skipOptionalPartCharacter&&z(e,c[e],!0,!0)}function y(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function z(b,c,e,f){function h(b,c,e,f){var h=!1;return a.each(u(b),function(i,j){for(var k=j.match,l=c?1:0,m="",r=(w(),k.cardinality);r>l;r--)m+=E(b-(r-1));if(c&&(m+=c),(h=null!=k.fn?k.fn.test(m,g(),b,e,d):(c==k.def||c==d.skipOptionalPartCharacter)&&""!=k.def&&{c:k.def,pos:b})!==!1){var s=void 0!=h.c?h.c:c;s=s==d.skipOptionalPartCharacter&&null===k.fn?k.def:s;var t=b;if(void 0!=h.remove&&q(h.remove,h.remove+1),h.refreshFromBuffer){var u=h.refreshFromBuffer;if(e=!0,x(u===!0?u:u.start,u.end),void 0==h.pos&&void 0==h.c)return h.pos=o(),!1;if((t=void 0!=h.pos?h.pos:b)!=b)return h=a.extend(h,z(t,s,!0)),!1}else if(h!==!0&&void 0!=h.pos&&h.pos!=b&&(t=h.pos,x(b,t),t!=b))return h=a.extend(h,z(t,s,!0)),!1;return(1==h||void 0!=h.pos||void 0!=h.c)&&(i>0&&n(!0),p(t,a.extend({},j,{input:y(s,k)}),f)||(h=!1),!1)}}),h}e=e===!0;for(var i=w(),j=b-1;j>-1&&(!g().validPositions[j]||null!=g().validPositions[j].fn);j--)if((!A(j)||i[j]!=G(j))&&u(j).length>1){h(j,i[j],!0);break}var k=b;if(k>=B())return!1;var l=h(k,c,e,f);if(!e&&l===!1){var m=g().validPositions[k];if(!m||null!=m.match.fn||m.match.def!=c&&c!=d.skipOptionalPartCharacter){if((d.insertMode||void 0==g().validPositions[C(k)])&&!A(k))for(var r=k+1,s=C(k);r<=s;r++)if((l=h(r,c,e,f))!==!1){k=r;break}}else l={caret:C(k)}}return l===!0&&(l={pos:k}),l}function A(a){var b=s(a);return null!=b.fn&&b.fn}function B(){var a;if(ba=aa.prop("maxLength"),ba==-1&&(ba=void 0),0==d.greedy){var b,c=o(),e=g().validPositions[c],f=void 0!=e?e.locator.slice():void 0;for(b=c+1;void 0==e||null!=e.match.fn||null==e.match.fn&&""!=e.match.def;b++)e=r(b,f,b-1),f=e.locator.slice();a=b}else a=w().length;return void 0==ba||a<ba?a:ba}function C(a){var b=B();if(a>=b)return b;for(var c=a;++c<b&&!A(c)&&(d.nojumps!==!0||d.nojumpsThreshold>c););return c}function D(a){var b=a;if(b<=0)return 0;for(;--b>0&&!A(b););return b}function E(a){return void 0==g().validPositions[a]?G(a):g().validPositions[a].input}function F(a,b,c){a._valueSet(b.join("")),void 0!=c&&M(a,c)}function G(a,b){return b=b||s(a),b.placeholder||(null==b.fn?b.def:d.placeholder.charAt(a%d.placeholder.length))}function H(b,c,e,f,h){var i=void 0!=f?f.slice():J(b._valueGet()).split("");if(n(),c&&b._valueSet(""),a.each(i,function(c,d){if(h===!0){var f=g().p,i=f==-1?f:D(f),j=i==-1?c:C(i);a.inArray(d,v().slice(i+1,j))==-1&&W.call(b,void 0,!0,d.charCodeAt(0),!1,e,c)}else W.call(b,void 0,!0,d.charCodeAt(0),!1,e,c),e=e||c>0&&c>g().p}),c){U(b,d.onKeyPress.call(this,void 0,w(),0,d)),F(b,w(),a(b).is(":focus")?C(o(0)):void 0)}}function I(b){return a.inputmask.escapeRegex.call(this,b)}function J(a){return a.replace(new RegExp("("+I(v().join(""))+")*$"),"")}function K(b){if(b.data("_inputmask")&&!b.hasClass("hasDatepicker")){var c=[],e=g().validPositions;for(var f in e)e[f].match&&null!=e[f].match.fn&&c.push(e[f].input);var h=(ca?c.reverse():c).join(""),i=(ca?w().reverse():w()).join("");return a.isFunction(d.onUnMask)&&(h=d.onUnMask.call(b,i,h,d)),h}return b[0]._valueGet()}function L(a){if(ca&&"number"==typeof a&&(!d.greedy||""!=d.placeholder)){a=w().length-a}return a}function M(b,c,e){var f,g=b.jquery&&b.length>0?b[0]:b;if("number"!=typeof c){var h=a(g).data("_inputmask");return!a(g).is(":visible")&&h&&void 0!=h.caret?(c=h.caret.begin,e=h.caret.end):g.setSelectionRange?(c=g.selectionStart,e=g.selectionEnd):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),c=0-f.duplicate().moveStart("character",-1e5),e=c+f.text.length),c=L(c),e=L(e),{begin:c,end:e}}c=L(c),e=L(e),e="number"==typeof e?e:c;var h=a(g).data("_inputmask")||{};h.caret={begin:c,end:e},a(g).data("_inputmask",h),a(g).is(":visible")&&(g.scrollLeft=g.scrollWidth,0==d.insertMode&&c==e&&e++,g.setSelectionRange?(g.selectionStart=c,g.selectionEnd=e):g.createTextRange&&(f=g.createTextRange(),f.collapse(!0),f.moveEnd("character",e),f.moveStart("character",c),f.select()))}function N(b){var c,d,e=w(),f=e.length,h=o(),i={},j=void 0!=g().validPositions[h]?g().validPositions[h].locator.slice():void 0;for(c=h+1;c<e.length;c++)d=r(c,j,c-1),j=d.locator.slice(),i[c]=a.extend(!0,{},d);for(c=f-1;c>h&&(d=i[c].match,(d.optionality||d.optionalQuantifier)&&e[c]==G(c,d));c--)f--;return b?{l:f,def:i[f]?i[f].match:void 0}:f}function O(a){var b=w(),c=b.slice(),d=N();c.length=d,F(a,c)}function P(b){if(a.isFunction(d.isComplete))return d.isComplete.call(aa,b,d);if("*"!=d.repeat){var c=!1,e=N(!0),f=D(e.l);if(o()==f&&(void 0==e.def||e.def.newBlockMarker||e.def.optionalQuantifier)){c=!0;for(var g=0;g<=f;g++){var h=A(g);if(h&&(void 0==b[g]||b[g]==G(g))||!h&&b[g]!=G(g)){c=!1;break}}}return c}}function Q(a,b){return ca?a-b>1||a-b==1&&d.insertMode:b-a>1||b-a==1&&d.insertMode}function R(b){var c=a._data(b).events;a.each(c,function(b,c){a.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var c=b.handler;b.handler=function(a){if(!this.readOnly&&!this.disabled)return c.apply(this,arguments);a.preventDefault}}})})}function S(b){function c(b){if(void 0==a.valHooks[b]||1!=a.valHooks[b].inputmaskpatch){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(b){var d=a(b);if(d.data("_inputmask")){if(d.data("_inputmask").opts.autoUnmask)return d.inputmask("unmaskedvalue");var e=c(b),f=d.data("_inputmask"),g=f.maskset,h=g._buffer;return h=h?h.join(""):"",e!=h?e:""}return c(b)},set:function(b,c){var e,f=a(b),g=f.data("_inputmask");return g?(e=d(b,a.isFunction(g.opts.onBeforeMask)?g.opts.onBeforeMask.call(ja,c,g.opts):c),f.triggerHandler("setvalue.inputmask")):e=d(b,c),e},inputmaskpatch:!0}}}var d;if(Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(b,"value")),d&&d.get){if(!b._valueGet){var e=d.get,f=d.set;b._valueGet=function(){return ca?e.call(this).split("").reverse().join(""):e.call(this)},b._valueSet=function(a){f.call(this,ca?a.split("").reverse().join(""):a)},Object.defineProperty(b,"value",{get:function(){var b=a(this),c=a(this).data("_inputmask");return c?c.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=v().join("")?e.call(this):"":e.call(this)},set:function(b){var c=a(this).data("_inputmask");c?(f.call(this,a.isFunction(c.opts.onBeforeMask)?c.opts.onBeforeMask.call(ja,b,c.opts):b),a(this).triggerHandler("setvalue.inputmask")):f.call(this,b)}})}}else if(document.__lookupGetter__&&b.__lookupGetter__("value")){if(!b._valueGet){var e=b.__lookupGetter__("value"),f=b.__lookupSetter__("value");b._valueGet=function(){return ca?e.call(this).split("").reverse().join(""):e.call(this)},b._valueSet=function(a){f.call(this,ca?a.split("").reverse().join(""):a)},b.__defineGetter__("value",function(){var b=a(this),c=a(this).data("_inputmask");return c?c.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=v().join("")?e.call(this):"":e.call(this)}),b.__defineSetter__("value",function(b){var c=a(this).data("_inputmask");c?(f.call(this,a.isFunction(c.opts.onBeforeMask)?c.opts.onBeforeMask.call(ja,b,c.opts):b),a(this).triggerHandler("setvalue.inputmask")):f.call(this,b)})}}else b._valueGet||(b._valueGet=function(){return ca?this.value.split("").reverse().join(""):this.value},b._valueSet=function(a){this.value=ca?a.split("").reverse().join(""):a}),c(b.type)}function T(a,b,c){if((d.numericInput||ca)&&(b==d.keyCode.BACKSPACE?b=d.keyCode.DELETE:b==d.keyCode.DELETE&&(b=d.keyCode.BACKSPACE),ca)){var e=c.end;c.end=c.begin,c.begin=e}b==d.keyCode.BACKSPACE&&c.end-c.begin<=1?c.begin=D(c.begin):b==d.keyCode.DELETE&&c.begin==c.end&&c.end++,q(c.begin,c.end);var f=o(c.begin);f<c.begin?g().p=C(f):g().p=c.begin}function U(a,b,c){if(b&&b.refreshFromBuffer){var d=b.refreshFromBuffer;x(d===!0?d:d.start,d.end),n(!0),void 0!=c&&(F(a,w()),M(a,b.caret||c.begin,b.caret||c.end))}}function V(b){da=!1;var c=this,e=a(c),f=b.keyCode,i=M(c);f==d.keyCode.BACKSPACE||f==d.keyCode.DELETE||h&&127==f||b.ctrlKey&&88==f?(b.preventDefault(),88==f&&(_=w().join("")),T(c,f,i),F(c,w(),g().p),c._valueGet()==v().join("")&&e.trigger("cleared"),d.showTooltip&&e.prop("title",g().mask)):f==d.keyCode.END||f==d.keyCode.PAGE_DOWN?setTimeout(function(){var a=C(o());d.insertMode||a!=B()||b.shiftKey||a--,M(c,b.shiftKey?i.begin:a,a)},0):f==d.keyCode.HOME&&!b.shiftKey||f==d.keyCode.PAGE_UP?M(c,0,b.shiftKey?i.begin:0):f==d.keyCode.ESCAPE||90==f&&b.ctrlKey?(H(c,!0,!1,_.split("")),e.click()):f!=d.keyCode.INSERT||b.shiftKey||b.ctrlKey?0!=d.insertMode||b.shiftKey||(f==d.keyCode.RIGHT?setTimeout(function(){M(c,M(c).begin)},0):f==d.keyCode.LEFT&&setTimeout(function(){var a=M(c);M(c,ca?a.begin+1:a.begin-1)},0)):(d.insertMode=!d.insertMode,M(c,d.insertMode||i.begin!=B()?i.begin:i.begin-1));var j=M(c);U(c,d.onKeyDown.call(this,b,w(),j.begin,d),j),fa=a.inArray(f,d.ignorables)!=-1}function W(b,c,e,f,h,i){if(void 0==e&&da)return!1;da=!0;var j=this,k=a(j);b=b||window.event;var e=c?e:b.which||b.charCode||b.keyCode;if(!(c===!0||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||fa))return!0;if(e){c!==!0&&46==e&&0==b.shiftKey&&","==d.radixPoint&&(e=44);var l,m,q=String.fromCharCode(e);if(c){var r=h?i:o()+1;l={begin:r,end:r}}else l=M(j);var s=Q(l.begin,l.end);s&&(g().undoPositions=a.extend(!0,{},g().validPositions),T(j,d.keyCode.DELETE,l),d.insertMode||(d.insertMode=!d.insertMode,p(l.begin,h),d.insertMode=!d.insertMode),s=!d.multi),g().writeOutBuffer=!0;var t=ca&&!s?l.end:l.begin,v=z(t,q,h);if(v!==!1){if(v!==!0&&(t=void 0!=v.pos?v.pos:t,q=void 0!=v.c?v.c:q),n(!0),void 0!=v.caret)m=v.caret;else{var x=g().validPositions;m=void 0!=x[t+1]&&u(t+1,x[t].locator.slice(),t).length>1?t+1:C(t)}g().p=m}if(f!==!1){var y=this;if(setTimeout(function(){d.onKeyValidation.call(y,v,d)},0),g().writeOutBuffer&&v!==!1){var A=w();F(j,A,c?void 0:d.numericInput?D(m):m),c!==!0&&setTimeout(function(){P(A)===!0&&k.trigger("complete"),ea=!0,k.trigger("input")},0)}else s&&(g().buffer=void 0,g().validPositions=g().undoPositions)}else s&&(g().buffer=void 0,g().validPositions=g().undoPositions);if(d.showTooltip&&k.prop("title",g().mask),b&&1!=c){b.preventDefault?b.preventDefault():b.returnValue=!1;var B=M(j);U(j,d.onKeyPress.call(this,b,w(),B.begin,d),B)}var E;for(var G in g().validPositions)E+=" "+G}}function X(b){var c=a(this),e=this,f=b.keyCode,g=w(),h=M(e);U(e,d.onKeyUp.call(this,b,g,h.begin,d),h),f==d.keyCode.TAB&&d.showMaskOnFocus&&(c.hasClass("focus-inputmask")&&0==e._valueGet().length?(n(),g=w(),F(e,g),M(e,0),_=w().join("")):(F(e,g),M(e,L(0),L(B()))))}function Y(b){if(ea===!0&&"input"==b.type)return ea=!1,!0;var c=this,e=a(c),f=c._valueGet();return"propertychange"==b.type&&c._valueGet().length<=B()||("paste"==b.type&&(window.clipboardData&&window.clipboardData.getData?f=window.clipboardData.getData("Text"):b.originalEvent&&b.originalEvent.clipboardData&&b.originalEvent.clipboardData.getData&&(f=b.originalEvent.clipboardData.getData("text/plain"))),H(c,!0,!1,(a.isFunction(d.onBeforePaste)?d.onBeforePaste.call(c,f,d):f).split(""),!0),e.click(),P(w())===!0&&e.trigger("complete"),!1)}function Z(a){if(ea===!0&&"input"==a.type)return ea=!1,!0;var b=this,c=M(b),e=b._valueGet();e=e.replace(new RegExp("("+I(v().join(""))+")*"),""),c.begin>e.length&&(M(b,e.length),c=M(b)),w().length-e.length!=1||e.charAt(c.begin)==w()[c.begin]||e.charAt(c.begin+1)==w()[c.begin]||A(c.begin)||(a.keyCode=d.keyCode.BACKSPACE,V.call(b,a)),a.preventDefault()}function $(b){if(aa=a(b),aa.is(":input")&&"number"!=aa.attr("type")){if(aa.data("_inputmask",{maskset:c,opts:d,isRTL:!1}),d.showTooltip&&aa.prop("title",g().mask),S(b),("rtl"==b.dir||d.rightAlign)&&aa.css("text-align","right"),"rtl"==b.dir||d.numericInput){b.dir="ltr",aa.removeAttr("dir");var e=aa.data("_inputmask");e.isRTL=!0,aa.data("_inputmask",e),ca=!0}aa.unbind(".inputmask"),aa.removeClass("focus-inputmask"),aa.closest("form").bind("submit",function(){_!=w().join("")&&aa.change(),d.autoUnmask&&d.removeMaskOnSubmit&&aa.inputmask("remove")}).bind("reset",function(){setTimeout(function(){aa.trigger("setvalue")},0)}),aa.bind("mouseenter.inputmask",function(){var b=a(this),c=this;!b.hasClass("focus-inputmask")&&d.showMaskOnHover&&c._valueGet()!=w().join("")&&F(c,w())}).bind("blur.inputmask",function(){var b=a(this),c=this;if(b.data("_inputmask")){var e=c._valueGet(),f=w();b.removeClass("focus-inputmask"),_!=w().join("")&&b.change(),d.clearMaskOnLostFocus&&""!=e&&(e==v().join("")?c._valueSet(""):O(c)),P(f)===!1&&(b.trigger("incomplete"),d.clearIncomplete&&(n(),d.clearMaskOnLostFocus?c._valueSet(""):(f=v().slice(),F(c,f))))}}).bind("focus.inputmask",function(){var b=a(this),c=this,e=c._valueGet();d.showMaskOnFocus&&!b.hasClass("focus-inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==e)&&c._valueGet()!=w().join("")&&F(c,w(),C(o())),b.addClass("focus-inputmask"),_=w().join("")}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;d.clearMaskOnLostFocus&&(b.hasClass("focus-inputmask")||c._valueGet()==b.attr("placeholder")||(c._valueGet()==v().join("")||""==c._valueGet()?c._valueSet(""):O(c)))}).bind("click.inputmask",function(){var b=this;a(b).is(":focus")&&setTimeout(function(){var a=M(b);if(a.begin==a.end){var c=ca?L(a.begin):a.begin,d=o(c),e=C(d);c<e?A(c)?M(b,c):M(b,C(c)):M(b,e)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){M(a,0,C(o()))},0)}).bind(m+".inputmask dragdrop.inputmask drop.inputmask",Y).bind("setvalue.inputmask",function(){H(this,!0),_=w().join("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared),aa.bind("keydown.inputmask",V).bind("keypress.inputmask",W).bind("keyup.inputmask",X),(i||k||j||l)&&("input"==m&&aa.unbind(m+".inputmask"),aa.bind("input.inputmask",Z)),f&&aa.bind("input.inputmask",Y);H(b,!0,!1,(a.isFunction(d.onBeforeMask)?d.onBeforeMask.call(b,b._valueGet(),d):b._valueGet()).split(""),!0),_=w().join("");var h;try{h=document.activeElement}catch(a){}P(w())===!1&&d.clearIncomplete&&n(),d.clearMaskOnLostFocus?w().join("")==v().join("")?b._valueSet(""):O(b):F(b,w()),h===b&&(aa.addClass("focus-inputmask"),M(b,C(o()))),R(b)}}var _,aa,ba,ca=!1,da=!1,ea=!1,fa=!1;if(void 0!=b)switch(b.action){case"isComplete":return aa=a(b.el),c=aa.data("_inputmask").maskset,d=aa.data("_inputmask").opts,P(b.buffer);case"unmaskedvalue":return aa=b.$input,c=aa.data("_inputmask").maskset,d=aa.data("_inputmask").opts,ca=b.$input.data("_inputmask").isRTL,K(b.$input);case"mask":_=w().join(""),$(b.el);break;case"format":aa=a({}),aa.data("_inputmask",{maskset:c,opts:d,isRTL:d.numericInput}),d.numericInput&&(ca=!0);var ga=b.value.split("");return H(aa,!1,!1,ca?ga.reverse():ga,!0),ca?w().reverse().join(""):w().join("");case"isValid":aa=a({}),aa.data("_inputmask",{maskset:c,opts:d,isRTL:d.numericInput}),d.numericInput&&(ca=!0);var ga=b.value.split("");H(aa,!1,!0,ca?ga.reverse():ga);var ha=w(),ia=N();return ha.length=ia,P(ha)&&b.value==ha.join("");case"getemptymask":return aa=a(b.el),c=aa.data("_inputmask").maskset,d=aa.data("_inputmask").opts,v();case"remove":var ja=b.el;aa=a(ja),c=aa.data("_inputmask").maskset,d=aa.data("_inputmask").opts,ja._valueSet(K(aa)),aa.unbind(".inputmask"),aa.removeClass("focus-inputmask"),aa.removeData("_inputmask");var ka;Object.getOwnPropertyDescriptor&&(ka=Object.getOwnPropertyDescriptor(ja,"value")),ka&&ka.get?ja._valueGet&&Object.defineProperty(ja,"value",{get:ja._valueGet,set:ja._valueSet}):document.__lookupGetter__&&ja.__lookupGetter__("value")&&ja._valueGet&&(ja.__defineGetter__("value",ja._valueGet),ja.__defineSetter__("value",ja._valueSet));try{delete ja._valueGet,delete ja._valueSet}catch(a){ja._valueGet=void 0,ja._valueSet=void 0}}}if(void 0===a.fn.inputmask){var f="function"==typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():new Function("/*@cc_on return @_jscript_version; @*/")()>=10,g=navigator.userAgent,h=null!==g.match(new RegExp("iphone","i")),i=null!==g.match(new RegExp("android.*safari.*","i")),j=null!==g.match(new RegExp("android.*chrome.*","i")),k=null!==g.match(new RegExp("android.*firefox.*","i")),l=/Kindle/i.test(g)||/Silk/i.test(g)||/KFTT/i.test(g)||/KFOT/i.test(g)||/KFJWA/i.test(g)||/KFJWI/i.test(g)||/KFSOWI/i.test(g)||/KFTHWA/i.test(g)||/KFTHWI/i.test(g)||/KFAPWA/i.test(g)||/KFAPWI/i.test(g),m=b("paste")?"paste":b("input")?"input":"propertychange";a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!0,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyUp:a.noop,onKeyPress:a.noop,onKeyDown:a.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,radixPoint:"",nojumps:!1,nojumpsThreshold:0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁё]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-zА-яЁё0-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0},masksCache:{},escapeRegex:function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},format:function(b,f){var g=a.extend(!0,{},a.inputmask.defaults,f);return c(g.alias,f,g),e({action:"format",value:b},d(g),g)},isValid:function(b,f){var g=a.extend(!0,{},a.inputmask.defaults,f);return c(g.alias,f,g),e({action:"isValid",value:b},d(g),g)}},a.fn.inputmask=function(b,f,g,h,i){function j(b,c){var d=a(b);for(var e in c){var f=d.data("inputmask-"+e.toLowerCase());void 0!=f&&(c[e]=f)}return c}g=g||e,h=h||"_inputmask";var k,l=a.extend(!0,{},a.inputmask.defaults,f);if("string"==typeof b)switch(b){case"mask":return c(l.alias,f,l),k=d(l,g!==e),0==k.length?this:this.each(function(){g({action:"mask",el:this},a.extend(!0,{},k),j(this,l))});case"unmaskedvalue":var m=a(this);return m.data(h)?g({action:"unmaskedvalue",$input:m}):m.val();case"remove":return this.each(function(){a(this).data(h)&&g({action:"remove",el:this})});case"getemptymask":return this.data(h)?g({action:"getemptymask",el:this}):"";case"hasMaskedValue":return!!this.data(h)&&!this.data(h).opts.autoUnmask;case"isComplete":return!this.data(h)||g({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this});case"getmetadata":return this.data(h)?(k=this.data(h).maskset,k.metadata):void 0;case"_detectScope":return c(l.alias,f,l),void 0==i||c(i,f,l)||a.inArray(i,["mask","unmaskedvalue","remove","getemptymask","hasMaskedValue","isComplete","getmetadata","_detectScope"])!=-1||(l.mask=i),a.isFunction(l.mask)&&(l.mask=l.mask.call(this,l)),a.isArray(l.mask);default:return c(l.alias,f,l),c(b,f,l)||(l.mask=b),k=d(l,g!==e),void 0==k?this:this.each(function(){g({action:"mask",el:this},a.extend(!0,{},k),j(this,l))})}else{if("object"==typeof b)return l=a.extend(!0,{},a.inputmask.defaults,b),c(l.alias,b,l),k=d(l,g!==e),void 0==k?this:this.each(function(){g({action:"mask",el:this},a.extend(!0,{},k),j(this,l))});if(void 0==b)return this.each(function(){var b=a(this).attr("data-inputmask");if(b&&""!=b)try{b=b.replace(new RegExp("'","g"),'"');var d=a.parseJSON("{"+b+"}");a.extend(!0,d,f),l=a.extend(!0,{},a.inputmask.defaults,d),c(l.alias,d,l),l.alias=void 0,a(this).inputmask("mask",l,g)}catch(a){}})}}}}(jQuery);