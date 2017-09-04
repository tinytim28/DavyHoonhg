var Markdown;Markdown="object"==typeof exports&&"function"==typeof require?exports:{},function(){function a(a){return a}function b(a){return!1}function c(){}function d(){}c.prototype={chain:function(b,c){var d=this[b];if(!d)throw new Error("unknown hook "+b);this[b]=d===a?c:function(a){return c(d(a))}},set:function(a,b){if(!this[a])throw new Error("unknown hook "+a);this[a]=b},addNoop:function(b){this[b]=a},addFalse:function(a){this[a]=b}},Markdown.HookCollection=c,d.prototype={set:function(a,b){this["s_"+a]=b},get:function(a){return this["s_"+a]}},Markdown.Converter=function(){function a(a){return a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,b,c,d,e,f){return b=b.toLowerCase(),H.set(b,x(c)),e?d:(f&&I.set(b,f.replace(/"/g,"&quot;")),"")})}function b(a){return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,e),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,e),a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,e),a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,e),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,e)}function e(a,b){var c=b;return c=c.replace(/^\n+/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(J.push(c)-1)+"K\n\n"}function f(a,c){a=n(a);var d="<hr />\n";return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,d),a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,d),a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,d),a=o(a),a=q(a),a=v(a),a=b(a),a=w(a,c)}function g(a){return a=s(a),a=h(a),a=y(a),a=k(a),a=i(a),a=z(a),a=a.replace(/~P/g,"://"),a=x(a),a=u(a),a=a.replace(/  +\n/g," <br>\n")}function h(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=E(b,"!"==a.charAt(1)?"\\`*_/":"\\`*_")})}function i(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,j),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,j),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,j)}function j(a,b,c,d,e,f,g,h){void 0==h&&(h="");var i=b,j=c.replace(/:\/\//g,"~P"),k=d.toLowerCase(),m=e,n=h;if(""==m)if(""==k&&(k=j.toLowerCase().replace(/ ?\n/g," ")),m="#"+k,void 0!=H.get(k))m=H.get(k),void 0!=I.get(k)&&(n=I.get(k));else{if(!(i.search(/\(\s*\)$/m)>-1))return i;m=""}m=D(m),m=E(m,"*_");var o='<a href="'+m+'"';return""!=n&&(n=l(n),n=E(n,"*_"),o+=' title="'+n+'"'),o+=">"+j+"</a>"}function k(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,m),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,m)}function l(a){return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function m(a,b,c,d,e,f,g,h){var i=b,j=c,k=d.toLowerCase(),m=e,n=h;if(n||(n=""),""==m){if(""==k&&(k=j.toLowerCase().replace(/ ?\n/g," ")),m="#"+k,void 0==H.get(k))return i;m=H.get(k),void 0!=I.get(k)&&(n=I.get(k))}j=E(l(j),"*_[]()"),m=E(m,"*_");var o='<img src="'+m+'" alt="'+j+'"';return n=l(n),n=E(n,"*_"),o+=' title="'+n+'"',o+=" />"}function n(a){return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+g(b)+"</h1>\n\n"}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+g(b)+"</h2>\n\n"}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,c){var d=b.length;return"<h"+d+">"+g(c)+"</h"+d+">\n\n"})}function o(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return K?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol",f=p(d,e);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",h=p(f,g);return h=e+"<"+g+">\n"+h+"</"+g+">\n"})),a=a.replace(/~0/,"")}function p(a,b){K++,a=a.replace(/\n{2,}$/,"\n"),a+="~0";var c=L[b],d=new RegExp("(^[ \\t]*)("+c+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+c+")[ \\t]+))","gm"),e=!1;return a=a.replace(d,function(a,b,c,d){var h=d,i=/\n\n$/.test(h);return i||h.search(/\n{2,}/)>-1||e?h=f(B(h),!0):(h=o(B(h)),h=h.replace(/\n$/,""),h=g(h)),e=i,"<li>"+h+"</li>\n"}),a=a.replace(/~0/g,""),K--,a}function q(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=t(B(d)),d=C(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),"\n\n"+(d='<pre class="prettyprint linenums"><code>'+d+"\n</code></pre>")+"\n\n"+e}),a=a.replace(/~0/,"")}function r(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(J.push(a)-1)+"K\n\n"}function s(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d,e){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=t(f),f=f.replace(/:\/\//g,"~P"),b+"<code>"+f+"</code>"})}function t(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=E(a,"*_{}[]\\",!1)}function u(a){return a=a.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),a=a.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function v(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=f(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"~0"),c=c.replace(/~0/g,"")}),r("<blockquote>\n"+c+"\n</blockquote>")})}function w(a,b){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var c=a.split(/\n{2,}/g),d=[],e=/~K(\d+)K/,f=c.length,h=0;h<f;h++){var i=c[h];e.test(i)?d.push(i):/\S/.test(i)&&(i=g(i),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",d.push(i))}if(!b){f=d.length;for(var h=0;h<f;h++)for(var j=!0;j;)j=!1,d[h]=d[h].replace(/~K(\d+)K/g,function(a,b){return j=!0,J[b]})}return d.join("\n\n")}function x(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function y(a){return a=a.replace(/\\(\\)/g,F),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,F)}function z(a){a=a.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var b=function(a,b){return'<a href="'+b+'">'+G.plainLinkText(b)+"</a>"};a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,b);var c=function(a,b){var c,d,e="mailto:";return b.substring(0,e.length)!=e?(c=e+b,d=b):(c=b,d=b.substring(e.length,b.length)),'<a href="'+c+'">'+G.plainLinkText(d)+"</a>"};return a=a.replace(/<((?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+))>/gi,c)}function A(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})}function B(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,"")}function C(a){if(!/\t/.test(a))return a;var b,c=["    ","   ","  "," "],d=0;return a.replace(/[\n\t]/g,function(a,e){return"\n"===a?(d=e+1,a):(b=(e-d)%4,d=e+1,c[b])})}function D(a){if(!a)return"";var b=a.length;return a.replace(M,function(c,d){if("~D"==c)return"%24";if(":"==c){if(d==b-1||/[0-9\/]/.test(a.charAt(d+1)))return":";if("mailto:"===a.substring(0,"mailto:".length))return":";if("magnet:"===a.substring(0,"magnet:".length))return":"}return"%"+c.charCodeAt(0).toString(16)})}function E(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,F)}function F(a,b){return"~E"+b.charCodeAt(0)+"E"}var G=this.hooks=new c;G.addNoop("plainLinkText"),G.addNoop("preConversion"),G.addNoop("postConversion");var H,I,J,K;this.makeHtml=function(c){if(H)throw new Error("Recursive call to converter.makeHtml");return H=new d,I=new d,J=[],K=0,c=G.preConversion(c),c=c.replace(/~/g,"~T"),c=c.replace(/\$/g,"~D"),c=c.replace(/\r\n/g,"\n"),c=c.replace(/\r/g,"\n"),c="\n\n"+c+"\n\n",c=C(c),c=c.replace(/^[ \t]+$/gm,""),c=b(c),c=a(c),c=f(c),c=A(c),c=c.replace(/~D/g,"$$"),c=c.replace(/~T/g,"~"),c=G.postConversion(c),J=I=H=null,c};var L={ol:"\\d+[.]",ul:"[*+-]"},M=/(?:["'*()[\]:]|~D)/g}}(),function(){function a(){}function b(a){this.buttonBar=l.getElementById("wmd-button-bar"+a),this.preview=l.getElementById("wmd-preview"+a),this.input=l.getElementById("wmd-input"+a)}function c(a,b){var c,e,f,g=this,h=[],j=0,k="none",l=function(a,b){k!=a&&(k=a,b||n()),p.isIE&&"moving"==k?f=null:e=setTimeout(m,1)},m=function(a){f=new d(b,a),e=void 0};this.setCommandMode=function(){k="command",n(),e=setTimeout(m,0)},this.canUndo=function(){return j>1},this.canRedo=function(){return!!h[j+1]},this.undo=function(){g.canUndo()&&(c?(c.restore(),c=null):(h[j]=new d(b),h[--j].restore(),a&&a())),k="none",b.input.focus(),m()},this.redo=function(){g.canRedo()&&(h[++j].restore(),a&&a()),k="none",b.input.focus(),m()};var n=function(){var e=f||new d(b);return!!e&&("moving"==k?void(c||(c=e)):(c&&(h[j-1].text!=c.text&&(h[j++]=c),c=null),h[j++]=e,h[j+1]=null,void(a&&a())))},o=function(a){var b=!1;if(a.ctrlKey||a.metaKey){var c=a.charCode||a.keyCode;switch(String.fromCharCode(c)){case"y":g.redo(),b=!0;break;case"z":a.shiftKey?g.redo():g.undo(),b=!0}}if(b)return a.preventDefault&&a.preventDefault(),void(window.event&&(window.event.returnValue=!1))},q=function(a){if(!a.ctrlKey&&!a.metaKey){var b=a.keyCode;b>=33&&b<=40||b>=63232&&b<=63235?l("moving"):8==b||46==b||127==b?l("deleting"):13==b?l("newlines"):27==b?l("escape"):(b<16||b>20)&&91!=b&&l("typing")}},r=function(){i.addEvent(b.input,"keypress",function(a){!a.ctrlKey&&!a.metaKey||89!=a.keyCode&&90!=a.keyCode||a.preventDefault()});var a=function(){(p.isIE||f&&f.text!=b.input.value)&&void 0==e&&(k="paste",n(),m())};i.addEvent(b.input,"keydown",o),i.addEvent(b.input,"keydown",q),i.addEvent(b.input,"mousedown",function(){l("moving")}),b.input.onpaste=a,b.input.ondrop=a};!function(){r(),m(!0),n()}()}function d(b,c){var d=this,e=b.input;this.init=function(){i.isVisible(e)&&(!c&&l.activeElement&&l.activeElement!==e||(this.setInputAreaSelectionStartEnd(),this.scrollTop=e.scrollTop,(!this.text&&e.selectionStart||0===e.selectionStart)&&(this.text=e.value)))},this.setInputAreaSelection=function(){if(i.isVisible(e))if(void 0===e.selectionStart||p.isOpera){if(l.selection){if(l.activeElement&&l.activeElement!==e)return;e.focus();var a=e.createTextRange();a.moveStart("character",-e.value.length),a.moveEnd("character",-e.value.length),a.moveEnd("character",d.end),a.moveStart("character",d.start),a.select()}}else e.focus(),e.selectionStart=d.start,e.selectionEnd=d.end,e.scrollTop=d.scrollTop},this.setInputAreaSelectionStartEnd=function(){if(b.ieCachedRange||!e.selectionStart&&0!==e.selectionStart){if(l.selection){d.text=i.fixEolChars(e.value);var a=b.ieCachedRange||l.selection.createRange(),c=i.fixEolChars(a.text),f="",g=f+c+f;a.text=g;var h=i.fixEolChars(e.value);a.moveStart("character",-g.length),a.text=c,d.start=h.indexOf(f),d.end=h.lastIndexOf(f)-f.length;var j=d.text.length-i.fixEolChars(e.value).length;if(j){for(a.moveStart("character",-c.length);j--;)c+="\n",d.end+=1;a.text=c}b.ieCachedRange&&(d.scrollTop=b.ieCachedScrollTop),b.ieCachedRange=null,this.setInputAreaSelection()}}else d.start=e.selectionStart,d.end=e.selectionEnd},this.restore=function(){void 0!=d.text&&d.text!=e.value&&(e.value=d.text),this.setInputAreaSelection(),e.scrollTop=d.scrollTop},this.getChunks=function(){var b=new a;return b.before=i.fixEolChars(d.text.substring(0,d.start)),b.startTag="",b.selection=i.fixEolChars(d.text.substring(d.start,d.end)),b.endTag="",b.after=i.fixEolChars(d.text.substring(d.end)),b.scrollTop=d.scrollTop,b},this.setChunks=function(a){a.before=a.before+a.startTag,a.after=a.endTag+a.after,this.start=a.before.length,this.end=a.before.length+a.selection.length,this.text=a.before+a.selection+a.after,this.scrollTop=a.scrollTop},this.init()}function e(a,b,c){var d,e,f,g=3e3,h="delayed",k=function(a,b){i.addEvent(a,"input",b),a.onpaste=b,a.ondrop=b,i.addEvent(a,"keypress",b),i.addEvent(a,"keydown",b)},m=function(){var a=0;return window.innerHeight?a=window.pageYOffset:l.documentElement&&l.documentElement.scrollTop?a=l.documentElement.scrollTop:l.body&&(a=l.body.scrollTop),a},n=function(){if(b.preview){var c=b.input.value;if(!c||c!=f){f=c;var d=(new Date).getTime();c=a.makeHtml(c);e=(new Date).getTime()-d,x(c)}}},o=function(){if(d&&(clearTimeout(d),d=void 0),"manual"!==h){var a=0;"delayed"===h&&(a=e),a>g&&(a=g),d=setTimeout(n,a)}},q=function(a){return a.scrollHeight<=a.clientHeight?1:a.scrollTop/(a.scrollHeight-a.clientHeight)},r=function(){b.preview&&(b.preview.scrollTop=(b.preview.scrollHeight-b.preview.clientHeight)*q(b.preview))};this.refresh=function(a){a?(f="",n()):o()},this.processingTime=function(){return e};var s,t=!0,u=function(a){var c=b.preview,d=c.parentNode,e=c.nextSibling;d.removeChild(c),c.innerHTML=a,e?d.insertBefore(c,e):d.appendChild(c)},v=function(a){b.preview.innerHTML=a},w=function(a){if(s)return s(a);try{v(a),s=v}catch(b){s=u,s(a)}},x=function(a){var d=j.getTop(b.input)-m();if(b.preview&&(w(a),c()),r(),t)return void(t=!1);var e=j.getTop(b.input)-m();p.isIE?setTimeout(function(){window.scrollBy(0,e-d)},0):window.scrollBy(0,e-d)};!function(){k(b.input,o),n(),b.preview&&(b.preview.scrollTop=0)}()}function f(a,b,c,e,f,g){function h(a){if(o.focus(),a.textOp){c&&c.setCommandMode();var f=new d(b);if(!f)return;var g=f.getChunks(),h=function(){o.focus(),g&&f.setChunks(g),f.restore(),e.refresh()};a.textOp(g,h)||h()}a.execute&&a.execute(c)}function j(a,b){b?(a.disabled=!1,a.isHelp||(a.onclick=function(){return this.onmouseout&&this.onmouseout(),h(this),!1})):a.disabled=!0}function k(a){return"string"==typeof a&&(a=f[a]),function(){a.apply(f,arguments)}}function l(){var c=b.buttonBar,d=document.createElement("div");d.id="wmd-button-row"+a,d.className="btn-toolbar",d=c.appendChild(d);var e=function(b,c,e,f,g){var h=document.createElement("button");h.className="btn btn-default";var i=document.createElement("i");return i.className=e,h.id=b+a,h.appendChild(i),h.title=c,$(h).tooltip({placement:"bottom",container:"body"}),f&&(h.textOp=f),j(h,!0),g?g.appendChild(h):d.appendChild(h),h},f=function(b){var c=document.createElement("div");return c.className="btn-group wmd-button-group"+b,c.id="wmd-button-group"+b+a,d.appendChild(c),c};group1=f(1),q.bold=e("wmd-bold-button","Bold - Ctrl+B","glyph-icon icon-bold",k("doBold"),group1),q.italic=e("wmd-italic-button","Italic - Ctrl+I","glyph-icon icon-italic",k("doItalic"),group1),group2=f(2),q.link=e("wmd-link-button","Link - Ctrl+L","glyph-icon icon-link",k(function(a,b){return this.doLinkOrImage(a,b,!1)}),group2),q.quote=e("wmd-quote-button","Blockquote - Ctrl+Q","glyph-icon icon-quote-left",k("doBlockquote"),group2),q.code=e("wmd-code-button","Code Sample - Ctrl+K","glyph-icon icon-code",k("doCode"),group2),q.image=e("wmd-image-button","Image - Ctrl+G","glyph-icon icon-picture-o",k(function(a,b){return this.doLinkOrImage(a,b,!0)}),group2),group3=f(3),q.olist=e("wmd-olist-button","Numbered List - Ctrl+O","glyph-icon icon-list-ol",k(function(a,b){this.doList(a,b,!0)}),group3),q.ulist=e("wmd-ulist-button","Bulleted List - Ctrl+U","glyph-icon icon-list-ul",k(function(a,b){this.doList(a,b,!1)}),group3),q.heading=e("wmd-heading-button","Heading - Ctrl+H","glyph-icon icon-header",k("doHeading"),group3),q.hr=e("wmd-hr-button","Horizontal Rule - Ctrl+R","glyph-icon icon-ellipsis-h",k("doHorizontalRule"),group3),group4=f(4),q.undo=e("wmd-undo-button","Undo - Ctrl+Z","glyph-icon icon-undo",null,group4),q.undo.execute=function(a){a&&a.undo()};var h=/win/.test(n.platform.toLowerCase())?"Redo - Ctrl+Y":"Redo - Ctrl+Shift+Z";if(q.redo=e("wmd-redo-button",h,"glyph-icon icon-rotate-right",null,group4),q.redo.execute=function(a){a&&a.redo()},g){group5=f(5),group5.className=group5.className+" pull-right";var i=document.createElement("button"),l=document.createElement("i");l.className="glyph-icon icon-question",i.appendChild(l),i.className="btn",i.id="wmd-help-button"+a,i.isHelp=!0,i.title=g.title||u,$(i).tooltip({placement:"bottom",container:"body"}),i.onclick=g.handler,j(i,!0),group5.appendChild(i),q.help=i}m()}function m(){c&&(j(q.undo,c.canUndo()),j(q.redo,c.canRedo()))}var o=b.input,q={};l();var r="keydown";p.isOpera&&(r="keypress"),i.addEvent(o,r,function(a){if((a.ctrlKey||a.metaKey)&&!a.altKey&&!a.shiftKey){var b=a.charCode||a.keyCode;switch(String.fromCharCode(b).toLowerCase()){case"b":h(q.bold);break;case"i":h(q.italic);break;case"l":h(q.link);break;case"q":h(q.quote);break;case"k":h(q.code);break;case"g":h(q.image);break;case"o":h(q.olist);break;case"u":h(q.ulist);break;case"h":h(q.heading);break;case"r":h(q.hr);break;case"y":h(q.redo);break;case"z":h(a.shiftKey?q.redo:q.undo);break;default:return}a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1)}}),i.addEvent(o,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey){if(13===(a.charCode||a.keyCode)){var b={};b.textOp=k("doAutoindent"),h(b)}}}),p.isIE&&i.addEvent(o,"keydown",function(a){if(27===a.keyCode)return!1}),this.setUndoRedoButtonStates=m}function g(a){this.hooks=a}function h(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,b,c){return b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")}),b=decodeURIComponent(b),b=encodeURI(b).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29"),b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")}),c&&(c=c.trim?c.trim():c.replace(/^\s*/,"").replace(/\s*$/,""),c=$.trim(c).replace(/"/g,"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),c?b+' "'+c+'"':b})}var i={},j={},k={},l=window.document,m=window.RegExp,n=window.navigator,o={lineLength:72},p={isIE:/msie/.test(n.userAgent.toLowerCase()),isIE_5or6:/msie 6/.test(n.userAgent.toLowerCase())||/msie 5/.test(n.userAgent.toLowerCase()),isOpera:/opera/.test(n.userAgent.toLowerCase())},q='<code>http://example.com/ "optional title"</code>',r='<code>http://example.com/images/diagram.jpg "optional title"</code>',s="http://",t="http://",u="Markdown Editing Help";Markdown.Editor=function(a,d,h){d=d||"";var i=this.hooks=new Markdown.HookCollection;i.addNoop("onPreviewRefresh"),i.addNoop("postBlockquoteCreation"),i.addFalse("insertImageDialog"),this.getConverter=function(){return a};var j,k=this;this.run=function(){if(!j){j=new b(d);var m,n,o=new g(i),p=new e(a,j,function(){i.onPreviewRefresh()});/\?noundo/.test(l.location.href)||(m=new c(function(){p.refresh(),n&&n.setUndoRedoButtonStates()},j),this.textOperation=function(a){m.setCommandMode(),a(),k.refreshPreview()}),n=new f(d,j,m,p,o,h),n.setUndoRedoButtonStates();(k.refreshPreview=function(){p.refresh(!0)})()}}},a.prototype.findTags=function(a,b){var c,d=this;a&&(c=i.extendRegExp(a,"","$"),this.before=this.before.replace(c,function(a){return d.startTag=d.startTag+a,""}),c=i.extendRegExp(a,"^",""),this.selection=this.selection.replace(c,function(a){return d.startTag=d.startTag+a,""})),b&&(c=i.extendRegExp(b,"","$"),this.selection=this.selection.replace(c,function(a){return d.endTag=a+d.endTag,""}),c=i.extendRegExp(b,"^",""),this.after=this.after.replace(c,function(a){return d.endTag=a+d.endTag,""}))},a.prototype.trimWhitespace=function(a){var b,c,d=this;a?b=c="":(b=function(a){return d.before+=a,""},c=function(a){return d.after=a+d.after,""}),this.selection=this.selection.replace(/^(\s*)/,b).replace(/(\s*)$/,c)},a.prototype.skipLines=function(a,b,c){void 0===a&&(a=1),void 0===b&&(b=1),a++,b++;var d,e;if(navigator.userAgent.match(/Chrome/)&&"X".match(/()./),this.selection=this.selection.replace(/(^\n*)/,""),this.startTag=this.startTag+m.$1,this.selection=this.selection.replace(/(\n*$)/,""),this.endTag=this.endTag+m.$1,this.startTag=this.startTag.replace(/(^\n*)/,""),this.before=this.before+m.$1,this.endTag=this.endTag.replace(/(\n*$)/,""),this.after=this.after+m.$1,this.before){for(d=e="";a--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.before=this.before.replace(new m(d+"$",""),e)}if(this.after){for(d=e="";b--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.after=this.after.replace(new m(d,""),e)}},i.isVisible=function(a){return window.getComputedStyle?"none"!==window.getComputedStyle(a,null).getPropertyValue("display"):a.currentStyle?"none"!==a.currentStyle.display:void 0},i.addEvent=function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},i.removeEvent=function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},i.fixEolChars=function(a){return a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n")},i.extendRegExp=function(a,b,c){null!==b&&void 0!==b||(b=""),null!==c&&void 0!==c||(c="");var d,e=a.toString();return e=e.replace(/\/([gim]*)$/,function(a,b){return d=b,""}),e=e.replace(/(^\/|\/$)/g,""),e=b+e+c,new m(e,d)},j.getTop=function(a,b){var c=a.offsetTop;if(!b)for(;a=a.offsetParent;)c+=a.offsetTop;return c},j.getHeight=function(a){return a.offsetHeight||a.scrollHeight},j.getWidth=function(a){return a.offsetWidth||a.scrollWidth},j.getPageSize=function(){var a,b,c,d;return self.innerHeight&&self.scrollMaxY?(a=l.body.scrollWidth,b=self.innerHeight+self.scrollMaxY):l.body.scrollHeight>l.body.offsetHeight?(a=l.body.scrollWidth,b=l.body.scrollHeight):(a=l.body.offsetWidth,b=l.body.offsetHeight),self.innerHeight?(c=self.innerWidth,d=self.innerHeight):l.documentElement&&l.documentElement.clientHeight?(c=l.documentElement.clientWidth,d=l.documentElement.clientHeight):l.body&&(c=l.body.clientWidth,d=l.body.clientHeight),[Math.max(a,c),Math.max(b,d),c,d]},k.prompt=function(a,b,c,d){var e,f;void 0===c&&(c="");var g=function(a){27===(a.charCode||a.keyCode)&&h(!0)},h=function(a){i.removeEvent(l.body,"keydown",g);var b=f.value;return a?b=null:(b=b.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(b)||(b="http://"+b)),$(e).modal("hide"),d(b),!1},j=function(){e=l.createElement("div"),e.className="modal fade";var d=l.createElement("div");d.className="modal-dialog",e.appendChild(d);var j=l.createElement("div");j.className="modal-content",d.appendChild(j);var k=l.createElement("div");k.className="modal-header",k.innerHTML='<a class="close" data-dismiss="modal">Ã—</a> <h3 class="modal-title">'+a+"</h3>",j.appendChild(k);var m=l.createElement("div");m.className="modal-body",j.appendChild(m);var n=l.createElement("div");n.className="modal-footer",j.appendChild(n);var o=l.createElement("p");o.innerHTML=b,o.style.padding="5px",m.appendChild(o);var p=l.createElement("form"),q=p.style;p.onsubmit=function(){return h(!1)},q.padding="0",q.margin="0",m.appendChild(p),f=l.createElement("input"),f.type="text",f.value=c,f.className="form-control",q=f.style,q.display="block",q.width="80%",q.marginLeft=q.marginRight="auto",p.appendChild(f);var r=l.createElement("button");r.className="btn btn-primary",r.type="button",r.onclick=function(){return h(!1)},r.innerHTML="OK";var s=l.createElement("button");s.className="btn btn-danger",s.type="button",s.onclick=function(){return h(!0)},s.innerHTML="Cancel",n.appendChild(r),n.appendChild(s),i.addEvent(l.body,"keydown",g),l.body.appendChild(e)};setTimeout(function(){j();var a=c.length;if(void 0!==f.selectionStart)f.selectionStart=0,f.selectionEnd=a;else if(f.createTextRange){var b=f.createTextRange();b.collapse(!1),b.moveStart("character",-a),b.moveEnd("character",a),b.select()}$(e).on("shown",function(){f.focus()}),$(e).on("hidden",function(){e.parentNode.removeChild(e)}),$(e).modal()},0)};var v=g.prototype;v.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",v.unwrap=function(a){var b=new m("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(b,"$1 $2")},v.wrap=function(a,b){this.unwrap(a);var c=new m("(.{1,"+b+"})( +|$\\n?)","gm"),d=this;a.selection=a.selection.replace(c,function(a,b){return new m("^"+d.prefixes,"").test(a)?a:b+"\n"}),a.selection=a.selection.replace(/\s+$/,"")},v.doBold=function(a,b){return this.doBorI(a,b,2,"strong text")},v.doItalic=function(a,b){return this.doBorI(a,b,1,"emphasized text")},v.doBorI=function(a,b,c,d){a.trimWhitespace(),a.selection=a.selection.replace(/\n{2,}/g,"\n");var e=/(\**$)/.exec(a.before)[0],f=/(^\**)/.exec(a.after)[0],g=Math.min(e.length,f.length);if(g>=c&&(2!=g||1!=c))a.before=a.before.replace(m("[*]{"+c+"}$",""),""),a.after=a.after.replace(m("^[*]{"+c+"}",""),"");else if(!a.selection&&f){a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,"");var h=m.$1;a.before=a.before+f+h}else{a.selection||f||(a.selection=d);var i=c<=1?"*":"**";a.before=a.before+i,a.after=i+a.after}},v.stripLinkDefs=function(a,b){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(a,c,d,e,f){return b[c]=a.replace(/\s*$/,""),e?(b[c]=a.replace(/["(](.+?)[")]$/,""),e+f):""})},v.addLinkDef=function(a,b){var c=0,d={};a.before=this.stripLinkDefs(a.before,d),a.selection=this.stripLinkDefs(a.selection,d),a.after=this.stripLinkDefs(a.after,d);var e="",f=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,g=function(a){c++,a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+c+"]:"),e+="\n"+a},h=function(a,b,e,i,j,k){return e=e.replace(f,h),d[j]?(g(d[j]),b+e+i+c+k):a};a.before=a.before.replace(f,h),b?g(b):a.selection=a.selection.replace(f,h);var i=c;return a.after=a.after.replace(f,h),a.after&&(a.after=a.after.replace(/\n*$/,"")),a.after||(a.selection=a.selection.replace(/\n*$/,"")),a.after+="\n\n"+e,i},v.doLinkOrImage=function(a,b,c){a.trimWhitespace(),a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);if(!(a.endTag.length>1&&a.startTag.length>0)){if(a.selection=a.startTag+a.selection+a.endTag,a.startTag=a.endTag="",/\n\n/.test(a.selection))return void this.addLinkDef(a,null);var d=this,e=function(e){if(null!==e){a.selection=(" "+a.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1);var f=" [999]: "+h(e),g=d.addLinkDef(a,f);a.startTag=c?"![":"[",a.endTag="]["+g+"]",a.selection||(a.selection=c?"enter image description here":"enter link description here")}b()};return c?this.hooks.insertImageDialog(e)||k.prompt("Insert Image",r,s,e):k.prompt("Insert Link",q,t,e),!0}a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",this.addLinkDef(a,null)},v.doAutoindent=function(a,b){var c=this,d=!1;a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n"),a.selection||/^[ \t]*(?:\n|$)/.test(a.after)||(a.after=a.after.replace(/^[^\n]*/,function(b){return a.selection=b,""}),d=!0),/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&c.doList&&c.doList(a),/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&c.doBlockquote&&c.doBlockquote(a),/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&c.doCode&&c.doCode(a),d&&(a.after=a.selection+a.after,a.selection="")},v.doBlockquote=function(a,b){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){return a.before+=c,a.after=e+a.after,d}),a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){return a.selection=c+a.selection,""}),a.selection=a.selection.replace(/^(\s|>)+$/,""),a.selection=a.selection||"Blockquote";var c,d="",e="";if(a.before){for(var f=a.before.replace(/\n$/,"").split("\n"),g=!1,h=0;h<f.length;h++){var i=!1;c=f[h],g=g&&c.length>0,/^>/.test(c)?(i=!0,!g&&c.length>1&&(g=!0)):i=!!/^[ \t]*$/.test(c)||g,i?d+=c+"\n":(e+=d+c,d="\n")}/(^|\n)>/.test(d)||(e+=d,d="")}a.startTag=d,a.before=e,a.after&&(a.after=a.after.replace(/^\n?/,"\n")),a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){return a.endTag=b,""});var j=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"})),a.endTag&&(a.endTag=a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(this.wrap(a,o.lineLength-2),a.selection=a.selection.replace(/^/gm,"> "),j(!0),a.skipLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(a),j(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n"))),a.selection=this.hooks.postBlockquoteCreation(a.selection),/\n/.test(a.selection)||(a.selection=a.selection.replace(/^(> *)/,function(b,c){return a.startTag+=c,""}))},v.doCode=function(a,b){var c=/\S[ ]*$/.test(a.before);if(!/^[ ]*\S/.test(a.after)&&!c||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){return a.selection=b+a.selection,""});var d=1,e=1;/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&(d=0),/^\n(\t|[ ]{4,})/.test(a.after)&&(e=0),a.skipLines(d,e),a.selection?/^[ ]{0,3}\S/m.test(a.selection)?/\n/.test(a.selection)?a.selection=a.selection.replace(/^/gm,"    "):a.before+="    ":a.selection=a.selection.replace(/^[ ]{4}/gm,""):(a.startTag="    ",a.selection="enter code here")}else a.trimWhitespace(),a.findTags(/`/,/`/),a.startTag||a.endTag?a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag="":(a.startTag=a.endTag="`",a.selection||(a.selection="enter code here"))},v.doList=function(a,b,c){var d=/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,e=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,f="-",g=1,h=function(){var a;return c?(a=" "+g+". ",g++):a=" "+f+" ",a},i=function(a){return void 0===c&&(c=/^\s*\d/.test(a)),a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(a){return h()})};if(a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null),!a.before||/\n$/.test(a.before)||/^\n/.test(a.startTag)||(a.before+=a.startTag,a.startTag=""),a.startTag){var j=/\d+[.]/.test(a.startTag);if(a.startTag="",a.selection=a.selection.replace(/\n[ ]{4}/g,"\n"),this.unwrap(a),a.skipLines(),j&&(a.after=a.after.replace(e,i)),c==j)return}var k=1;a.before=a.before.replace(d,function(a){return/^\s*([*+-])/.test(a)&&(f=m.$1),k=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.selection||(a.selection="List item");var l=h(),n=1;a.after=a.after.replace(e,function(a){return n=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.trimWhitespace(!0),a.skipLines(k,n,!0),a.startTag=l;var p=l.replace(/./g," ");this.wrap(a,o.lineLength-p.length),a.selection=a.selection.replace(/\n/g,"\n"+p)},v.doHeading=function(a,b){if(a.selection=a.selection.replace(/\s+/g," "),a.selection=a.selection.replace(/(^\s+|\s+$)/g,""),!a.selection)return a.startTag="## ",a.selection="Heading",void(a.endTag=" ##");var c=0;a.findTags(/#+[ ]*/,/[ ]*#+/),/#+/.test(a.startTag)&&(c=m.lastMatch.length),a.startTag=a.endTag="",a.findTags(null,/\s?(-+|=+)/),/=+/.test(a.endTag)&&(c=1),/-+/.test(a.endTag)&&(c=2),a.startTag=a.endTag="",a.skipLines(1,1);var d=0==c?2:c-1;if(d>0){var e=d>=2?"-":"=",f=a.selection.length;for(f>o.lineLength&&(f=o.lineLength),a.endTag="\n";f--;)a.endTag+=e}},v.doHorizontalRule=function(a,b){a.startTag="----------\n",a.selection="",a.skipLines(2,1,!0)}}(),function(){function a(a){return a.replace(/<[^>]*>?/gi,b)}function b(a){return a.match(f)||a.match(g)||a.match(h)||a.match(i)?a:""}function c(a){if(""==a)return"";var b=/<\/?\w+[^>]*(\s|$|>)/g,c=a.toLowerCase().match(b),d=(c||[]).length;if(0==d)return a;for(var e,f,g,h="<p><img><br><li><hr>",i=[],j=[],k=!1,l=0;l<d;l++)if(e=c[l].replace(/<\/?(\w+).*/,"$1"),!(i[l]||h.search("<"+e+">")>-1)){if(f=c[l],g=-1,!/^<\//.test(f))for(var m=l+1;m<d;m++)if(!i[m]&&c[m]=="</"+e+">"){g=m;break}g==-1?k=j[l]=!0:i[g]=!0}if(!k)return a;var l=0;return a=a.replace(b,function(a){var b=j[l]?"":a;return l++,b})}var d,e;"object"==typeof exports&&"function"==typeof require?(d=exports,e=require("./Markdown.Converter").Converter):(d=window.Markdown,e=d.Converter),d.getSanitizingConverter=function(){var b=new e;return b.hooks.chain("postConversion",a),b.hooks.chain("postConversion",c),b};var f=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,g=/^(<a\shref="(https?:(\/\/|\/)|ftp:(\/\/|\/)|mailto:|magnet:)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,h=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i,i=/^(<pre(\sclass="prettyprint linenums")?>|<\/pre>)$/i}(),function(a){a.fn.pagedownBootstrap=function(b){var c=a.extend({sanitize:!0,help:null,hooks:Array()},b);return this.each(function(){var b=null;b=c.sanitize?Markdown.getSanitizingConverter():new Markdown.Converter;for(var d in c.hooks){var e=c.hooks[d];"object"==typeof e&&void 0!==e.event&&"function"==typeof e.callback&&b.hooks.chain(e.event,e.callback)}for(var f="wmd-input",g=0;a("#"+f+"-"+g.toString()).length>0;)g++;a(this).attr("id",f+"-"+g.toString()),a(this).wrap('<div class="wmd-panel" />'),a(this).before('<div id="wmd-button-bar-'+g+'" class="wmd-button-bar" />'),a(this).after('<div id="wmd-preview-'+g+'" class="wmd-preview" />'),a(this).addClass("wmd-input"),help=null,a.isFunction(c.help)&&(help={handler:c.help}),new Markdown.Editor(b,"-"+g.toString(),help).run()})}}(jQuery);