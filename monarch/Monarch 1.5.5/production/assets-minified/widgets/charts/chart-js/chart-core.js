(function(){"use strict";var a=this,b=a.Chart,c=function(a){this.canvas=a.canvas,this.ctx=a;this.width=a.canvas.width,this.height=a.canvas.height;return this.aspectRatio=this.width/this.height,d.retinaScale(this),this};c.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",onAnimationProgress:function(){},onAnimationComplete:function(){}}},c.types={};var d=c.helpers={},e=d.each=function(a,b,c){var d=Array.prototype.slice.call(arguments,3);if(a)if(a.length===+a.length){var e;for(e=0;e<a.length;e++)b.apply(c,[a[e],e].concat(d))}else for(var f in a)b.apply(c,[a[f],f].concat(d))},f=d.clone=function(a){var b={};return e(a,function(c,d){a.hasOwnProperty(d)&&(b[d]=c)}),b},g=d.extend=function(a){return e(Array.prototype.slice.call(arguments,1),function(b){e(b,function(c,d){b.hasOwnProperty(d)&&(a[d]=c)})}),a},h=d.merge=function(a,b){var c=Array.prototype.slice.call(arguments,0);return c.unshift({}),g.apply(null,c)},i=d.indexOf=function(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},j=(d.where=function(a,b){var c=[];return d.each(a,function(a){b(a)&&c.push(a)}),c},d.findNextWhere=function(a,b,c){c||(c=-1);for(var d=c+1;d<a.length;d++){var e=a[d];if(b(e))return e}},d.findPreviousWhere=function(a,b,c){c||(c=a.length);for(var d=c-1;d>=0;d--){var e=a[d];if(b(e))return e}},d.inherits=function(a){var b=this,c=a&&a.hasOwnProperty("constructor")?a.constructor:function(){return b.apply(this,arguments)},d=function(){this.constructor=c};return d.prototype=b.prototype,c.prototype=new d,c.extend=j,a&&g(c.prototype,a),c.__super__=b.prototype,c}),k=d.noop=function(){},l=d.uid=function(){var a=0;return function(){return"chart-"+a++}}(),m=d.warn=function(a){window.console&&"function"==typeof window.console.warn&&console.warn(a)},n=d.amd="function"==typeof define&&define.amd,o=d.isNumber=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},p=d.max=function(a){return Math.max.apply(Math,a)},q=d.min=function(a){return Math.min.apply(Math,a)},r=(d.cap=function(a,b,c){if(o(b)){if(a>b)return b}else if(o(c)&&a<c)return c;return a},d.getDecimalPlaces=function(a){return a%1!=0&&o(a)?a.toString().split(".")[1].length:0}),s=d.radians=function(a){return a*(Math.PI/180)},t=(d.getAngleFromPoint=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=Math.sqrt(c*c+d*d),f=2*Math.PI+Math.atan2(d,c);return c<0&&d<0&&(f+=2*Math.PI),{angle:f,distance:e}},d.aliasPixel=function(a){return a%2==0?0:.5}),u=(d.splineCurve=function(a,b,c,d){var e=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)),f=Math.sqrt(Math.pow(c.x-b.x,2)+Math.pow(c.y-b.y,2)),g=d*e/(e+f),h=d*f/(e+f);return{inner:{x:b.x-g*(c.x-a.x),y:b.y-g*(c.y-a.y)},outer:{x:b.x+h*(c.x-a.x),y:b.y+h*(c.y-a.y)}}},d.calculateOrderOfMagnitude=function(a){return Math.floor(Math.log(a)/Math.LN10)}),v=(d.calculateScaleRange=function(a,b,c,d,e){var f=2,g=Math.floor(b/(1.5*c)),h=f>=g,i=p(a),j=q(a);i===j&&(i+=.5,j>=.5&&!d?j-=.5:i+=.5);for(var k=Math.abs(i-j),l=u(k),m=Math.ceil(i/(1*Math.pow(10,l)))*Math.pow(10,l),n=d?0:Math.floor(j/(1*Math.pow(10,l)))*Math.pow(10,l),o=m-n,r=Math.pow(10,l),s=Math.round(o/r);(s>g||2*s<g)&&!h;)if(s>g)r*=2,(s=Math.round(o/r))%1!=0&&(h=!0);else if(e&&l>=0){if(r/2%1!=0)break;r/=2,s=Math.round(o/r)}else r/=2,s=Math.round(o/r);return h&&(s=f,r=o/s),{steps:s,stepValue:r,min:n,max:n+s*r}},d.template=function(a,b){function c(a,b){var c=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):d[a]=d[a];return b?c(b):c}if(a instanceof Function)return a(b);var d={};return c(a,b)}),w=(d.generateLabels=function(a,b,c,d){var f=new Array(b);return labelTemplateString&&e(f,function(b,e){f[e]=v(a,{value:c+d*(e+1)})}),f},d.easingEffects={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*a*(a-2)},easeInOutQuad:function(a){return(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0===a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1===a?1:1*(1-Math.pow(2,-10*a/1))},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*--a))},easeInCirc:function(a){return a>=1?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),-d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c))},easeOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:1==(a/=1)?1:(c||(c=.3),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),d*Math.pow(2,-10*a)*Math.sin((1*a-b)*(2*Math.PI)/c)+1)},easeInOutElastic:function(a){var b=1.70158,c=0,d=1;return 0===a?0:2==(a/=.5)?1:(c||(c=.3*1.5*1),d<Math.abs(1)?(d=1,b=c/4):b=c/(2*Math.PI)*Math.asin(1/d),a<1?d*Math.pow(2,10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)*-.5:d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-b)*(2*Math.PI)/c)*.5+1)},easeInBack:function(a){var b=1.70158;return 1*(a/=1)*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return 1*((a=a/1-1)*a*((b+1)*a+b)+1)},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?a*a*((1+(b*=1.525))*a-b)*.5:.5*((a-=2)*a*((1+(b*=1.525))*a+b)+2)},easeInBounce:function(a){return 1-w.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?7.5625*a*a*1:a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+.9375):1*(7.5625*(a-=2.625/2.75)*a+.984375)},easeInOutBounce:function(a){return a<.5?.5*w.easeInBounce(2*a):.5*w.easeOutBounce(2*a-1)+.5}}),x=d.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(a,1e3/60)}}(),y=(d.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(a){return window.clearTimeout(a,1e3/60)}}(),d.animationLoop=function(a,b,c,d,e,f){var g=0,h=w[c]||w.linear,i=function(){g++;var c=g/b,j=h(c);a.call(f,j,c,g),d.call(f,j,c),g<b?f.animationFrame=x(i):e.apply(f)};x(i)},d.getRelativePosition=function(a){var b,c,d=a.originalEvent||a,e=a.currentTarget||a.srcElement,f=e.getBoundingClientRect();return d.touches?(b=d.touches[0].clientX-f.left,c=d.touches[0].clientY-f.top):(b=d.clientX-f.left,c=d.clientY-f.top),{x:b,y:c}},d.addEvent=function(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}),z=d.removeEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=k},A=(d.bindEvents=function(a,b,c){a.events||(a.events={}),e(b,function(b){a.events[b]=function(){c.apply(a,arguments)},y(a.chart.canvas,b,a.events[b])})},d.unbindEvents=function(a,b){e(b,function(b,c){z(a.chart.canvas,c,b)})}),B=d.getMaximumWidth=function(a){return a.parentNode.clientWidth},C=d.getMaximumHeight=function(a){return a.parentNode.clientHeight},D=(d.getMaximumSize=d.getMaximumWidth,d.retinaScale=function(a){var b=a.ctx,c=a.canvas.width,d=a.canvas.height;window.devicePixelRatio&&(b.canvas.style.width=c+"px",b.canvas.style.height=d+"px",b.canvas.height=d*window.devicePixelRatio,b.canvas.width=c*window.devicePixelRatio,b.scale(window.devicePixelRatio,window.devicePixelRatio))}),E=d.clear=function(a){a.ctx.clearRect(0,0,a.width,a.height)},F=d.fontString=function(a,b,c){return b+" "+a+"px "+c},G=d.longestText=function(a,b,c){a.font=b;var d=0;return e(c,function(b){var c=a.measureText(b).width;d=c>d?c:d}),d},H=d.drawRoundedRectangle=function(a,b,c,d,e,f){a.beginPath(),a.moveTo(b+f,c),a.lineTo(b+d-f,c),a.quadraticCurveTo(b+d,c,b+d,c+f),a.lineTo(b+d,c+e-f),a.quadraticCurveTo(b+d,c+e,b+d-f,c+e),a.lineTo(b+f,c+e),a.quadraticCurveTo(b,c+e,b,c+e-f),a.lineTo(b,c+f),a.quadraticCurveTo(b,c,b+f,c),a.closePath()};c.instances={},c.Type=function(a,b,d){this.options=b,this.chart=d,this.id=l(),c.instances[this.id]=this,b.responsive&&this.resize(),this.initialize.call(this,a)},g(c.Type.prototype,{initialize:function(){return this},clear:function(){return E(this.chart),this},stop:function(){return d.cancelAnimFrame.call(a,this.animationFrame),this},resize:function(a){this.stop();var b=this.chart.canvas,c=B(this.chart.canvas),d=this.options.maintainAspectRatio?c/this.chart.aspectRatio:C(this.chart.canvas);return b.width=this.chart.width=c,b.height=this.chart.height=d,D(this.chart),"function"==typeof a&&a.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:k,render:function(a){return a&&this.reflow(),this.options.animation&&!a?d.animationLoop(this.draw,this.options.animationSteps,this.options.animationEasing,this.options.onAnimationProgress,this.options.onAnimationComplete,this):(this.draw(),this.options.onAnimationComplete.call(this)),this},generateLegend:function(){return v(this.options.legendTemplate,this)},destroy:function(){this.clear(),A(this,this.events),delete c.instances[this.id]},showTooltip:function(a,b){if(void 0===this.activeElements&&(this.activeElements=[]),function(a){var b=!1;return a.length!==this.activeElements.length?b=!0:(e(a,function(a,c){a!==this.activeElements[c]&&(b=!0)},this),b)}.call(this,a)||b){if(this.activeElements=a,this.draw(),a.length>0)if(this.datasets&&this.datasets.length>1){for(var f,g,h=this.datasets.length-1;h>=0&&(f=this.datasets[h].points||this.datasets[h].bars||this.datasets[h].segments,-1===(g=i(f,a[0])));h--);var j=[],k=[],l=function(a){var b,c,e,f,h,i=[],l=[],m=[];return d.each(this.datasets,function(a){b=a.points||a.bars||a.segments,b[g]&&b[g].hasValue()&&i.push(b[g])}),d.each(i,function(a){l.push(a.x),m.push(a.y),j.push(d.template(this.options.multiTooltipTemplate,a)),k.push({fill:a._saved.fillColor||a.fillColor,stroke:a._saved.strokeColor||a.strokeColor})},this),h=q(m),e=p(m),f=q(l),c=p(l),{x:f>this.chart.width/2?f:c,y:(h+e)/2}}.call(this,g);new c.MultiTooltip({x:l.x,y:l.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:j,legendColors:k,legendColorBackground:this.options.multiTooltipKeyBackground,title:a[0].label,chart:this.chart,ctx:this.chart.ctx}).draw()}else e(a,function(a){var b=a.tooltipPosition();new c.Tooltip({x:Math.round(b.x),y:Math.round(b.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:v(this.options.tooltipTemplate,a),chart:this.chart}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),c.Type.extend=function(a){var b=this,d=function(){return b.apply(this,arguments)};if(d.prototype=f(b.prototype),g(d.prototype,a),d.extend=c.Type.extend,a.name||b.prototype.name){var e=a.name||b.prototype.name,i=c.defaults[b.prototype.name]?f(c.defaults[b.prototype.name]):{};c.defaults[e]=g(i,a.defaults),c.types[e]=d,c.prototype[e]=function(a,b){var f=h(c.defaults.global,c.defaults[e],b||{});return new d(a,f,this)}}else m("Name not provided for this chart, so it hasn't been registered");return b},c.Element=function(a){g(this,a),this.initialize.apply(this,arguments),this.save()},g(c.Element.prototype,{initialize:function(){},restore:function(a){return a?e(a,function(a){this[a]=this._saved[a]},this):g(this,this._saved),this},save:function(){return this._saved=f(this),delete this._saved._saved,this},update:function(a){return e(a,function(a,b){this._saved[b]=this[b],this[b]=a},this),this},transition:function(a,b){return e(a,function(a,c){this[c]=(a-this._saved[c])*b+this._saved[c]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return o(this.value)}}),c.Element.extend=j,c.Point=c.Element.extend({display:!0,inRange:function(a,b){var c=this.hitDetectionRadius+this.radius;return Math.pow(a-this.x,2)+Math.pow(b-this.y,2)<Math.pow(c,2)},draw:function(){if(this.display){var a=this.ctx;a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI),a.closePath(),a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.fillStyle=this.fillColor,a.fill(),a.stroke()}}}),c.Arc=c.Element.extend({inRange:function(a,b){var c=d.getAngleFromPoint(this,{x:a,y:b}),e=c.angle>=this.startAngle&&c.angle<=this.endAngle,f=c.distance>=this.innerRadius&&c.distance<=this.outerRadius;return e&&f},tooltipPosition:function(){var a=this.startAngle+(this.endAngle-this.startAngle)/2,b=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(a)*b,y:this.y+Math.sin(a)*b}},draw:function(a){var b=this.ctx;b.beginPath(),b.arc(this.x,this.y,this.outerRadius,this.startAngle,this.endAngle),b.arc(this.x,this.y,this.innerRadius,this.endAngle,this.startAngle,!0),b.closePath(),b.strokeStyle=this.strokeColor,b.lineWidth=this.strokeWidth,b.fillStyle=this.fillColor,b.fill(),b.lineJoin="bevel",this.showStroke&&b.stroke()}}),c.Rectangle=c.Element.extend({draw:function(){var a=this.ctx,b=this.width/2,c=this.x-b,d=this.x+b,e=this.base-(this.base-this.y),f=this.strokeWidth/2;this.showStroke&&(c+=f,d-=f,e+=f),a.beginPath(),a.fillStyle=this.fillColor,a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.moveTo(c,this.base),a.lineTo(c,e),a.lineTo(d,e),a.lineTo(d,this.base),a.fill(),this.showStroke&&a.stroke()},height:function(){return this.base-this.y},inRange:function(a,b){return a>=this.x-this.width/2&&a<=this.x+this.width/2&&b>=this.y&&b<=this.base}}),c.Tooltip=c.Element.extend({draw:function(){var a=this.chart.ctx;a.font=F(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var b=2,c=a.measureText(this.text).width+2*this.xPadding,d=this.fontSize+2*this.yPadding,e=d+this.caretHeight+b;this.x+c/2>this.chart.width?this.xAlign="left":this.x-c/2<0&&(this.xAlign="right"),this.y-e<0&&(this.yAlign="below");var f=this.x-c/2,g=this.y-e;switch(a.fillStyle=this.fillColor,this.yAlign){case"above":a.beginPath(),a.moveTo(this.x,this.y-b),a.lineTo(this.x+this.caretHeight,this.y-(b+this.caretHeight)),a.lineTo(this.x-this.caretHeight,this.y-(b+this.caretHeight)),a.closePath(),a.fill();break;case"below":g=this.y+b+this.caretHeight,a.beginPath(),a.moveTo(this.x,this.y+b),a.lineTo(this.x+this.caretHeight,this.y+b+this.caretHeight),a.lineTo(this.x-this.caretHeight,this.y+b+this.caretHeight),a.closePath(),a.fill()}switch(this.xAlign){case"left":f=this.x-c+(this.cornerRadius+this.caretHeight);break;case"right":f=this.x-(this.cornerRadius+this.caretHeight)}H(a,f,g,c,d,this.cornerRadius),a.fill(),a.fillStyle=this.textColor,a.textAlign="center",a.textBaseline="middle",a.fillText(this.text,f+c/2,g+d/2)}}),c.MultiTooltip=c.Element.extend({initialize:function(){this.font=F(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=F(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+1.5*this.titleFontSize,this.ctx.font=this.titleFont;var a=this.ctx.measureText(this.title).width,b=G(this.ctx,this.font,this.labels)+this.fontSize+3,c=p([b,a]);this.width=c+2*this.xPadding;var d=this.height/2;this.y-d<0?this.y=d:this.y+d>this.chart.height&&(this.y=this.chart.height-d),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(a){var b=this.y-this.height/2+this.yPadding,c=a-1;return 0===a?b+this.titleFontSize/2:b+(1.5*this.fontSize*c+this.fontSize/2)+1.5*this.titleFontSize},draw:function(){H(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var a=this.ctx;a.fillStyle=this.fillColor,a.fill(),a.closePath(),a.textAlign="left",a.textBaseline="middle",a.fillStyle=this.titleTextColor,a.font=this.titleFont,a.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),a.font=this.font,d.each(this.labels,function(b,c){a.fillStyle=this.textColor,a.fillText(b,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(c+1)),a.fillStyle=this.legendColorBackground,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize),a.fillStyle=this.legendColors[c].fill,a.fillRect(this.x+this.xPadding,this.getLineHeight(c+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}),c.Scale=c.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}));this.yLabelWidth=this.display&&this.showLabels?G(this.ctx,this.font,this.yLabels):0},addXLabel:function(a){this.xLabels.push(a),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var a,b=this.endPoint-this.startPoint;for(this.calculateYRange(b),this.buildYLabels(),this.calculateXLabelRotation();b>this.endPoint-this.startPoint;)b=this.endPoint-this.startPoint,a=this.yLabelWidth,this.calculateYRange(b),this.buildYLabels(),a<this.yLabelWidth&&this.calculateXLabelRotation()},calculateXLabelRotation:function(){this.ctx.font=this.font;var a,b=this.ctx.measureText(this.xLabels[0]).width,c=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=c/2+3,this.xScalePaddingLeft=b/2>this.yLabelWidth+10?b/2:this.yLabelWidth+10,this.xLabelRotation=0,this.display){var d,e=G(this.ctx,this.font,this.xLabels);this.xLabelWidth=e;for(var f=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>f&&0===this.xLabelRotation||this.xLabelWidth>f&&this.xLabelRotation<=90&&this.xLabelRotation>0;)d=Math.cos(s(this.xLabelRotation)),a=d*b,d*c,a+this.fontSize/2>this.yLabelWidth+8&&(this.xScalePaddingLeft=a+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=d*e;this.xLabelRotation>0&&(this.endPoint-=Math.sin(s(this.xLabelRotation))*e+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:k,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(a){var b=this.drawingArea()/(this.min-this.max);return this.endPoint-b*(a-this.min)},calculateX:function(a){var b=(this.xLabelRotation,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),c=b/(this.valuesCount-(this.offsetGridLines?0:1)),d=c*a+this.xScalePaddingLeft;return this.offsetGridLines&&(d+=c/2),Math.round(d)},update:function(a){d.extend(this,a),this.fit()},draw:function(){var a=this.ctx,b=(this.endPoint-this.startPoint)/this.steps,c=Math.round(this.xScalePaddingLeft);this.display&&(a.fillStyle=this.textColor,a.font=this.font,e(this.yLabels,function(e,f){var g=this.endPoint-b*f,h=Math.round(g);a.textAlign="right",a.textBaseline="middle",this.showLabels&&a.fillText(e,c-10,g),a.beginPath(),f>0?(a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),h+=d.aliasPixel(a.lineWidth),a.moveTo(c,h),a.lineTo(this.width,h),a.stroke(),a.closePath(),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(c-5,h),a.lineTo(c,h),a.stroke(),a.closePath()},this),e(this.xLabels,function(b,c){var d=this.calculateX(c)+t(this.lineWidth),e=this.calculateX(c-(this.offsetGridLines?.5:0))+t(this.lineWidth),f=this.xLabelRotation>0;a.beginPath(),c>0?(a.lineWidth=this.gridLineWidth,a.strokeStyle=this.gridLineColor):(a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor),a.moveTo(e,this.endPoint),a.lineTo(e,this.startPoint-3),a.stroke(),a.closePath(),a.lineWidth=this.lineWidth,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(e,this.endPoint),a.lineTo(e,this.endPoint+5),a.stroke(),a.closePath(),a.save(),a.translate(d,f?this.endPoint+12:this.endPoint+8),a.rotate(-1*s(this.xLabelRotation)),a.font=this.font,a.textAlign=f?"right":"center",a.textBaseline=f?"middle":"top",a.fillText(b,0,0),a.restore()},this))}}),c.RadialScale=c.Element.extend({initialize:function(){this.size=q([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(a){var b=this.drawingArea/(this.max-this.min);return(a-this.min)*b},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var a=r(this.stepValue),b=0;b<=this.steps;b++)this.yLabels.push(v(this.templateString,{value:(this.min+b*this.stepValue).toFixed(a)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var a,b,c,d,e,f,g,h,i,j,k,l,m=q([this.height/2-this.pointLabelFontSize-5,this.width/2]),n=this.width,p=0;for(this.ctx.font=F(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),b=0;b<this.valuesCount;b++)a=this.getPointPosition(b,m),c=this.ctx.measureText(v(this.templateString,{value:this.labels[b]})).width+5,0===b||b===this.valuesCount/2?(d=c/2,a.x+d>n&&(n=a.x+d,e=b),a.x-d<p&&(p=a.x-d,g=b)):b<this.valuesCount/2?a.x+c>n&&(n=a.x+c,e=b):b>this.valuesCount/2&&a.x-c<p&&(p=a.x-c,g=b);i=p,j=Math.ceil(n-this.width),f=this.getIndexAngle(e),h=this.getIndexAngle(g),k=j/Math.sin(f+Math.PI/2),l=i/Math.sin(h+Math.PI/2),k=o(k)?k:0,l=o(l)?l:0,this.drawingArea=m-(l+k)/2,this.setCenterPoint(l,k)},setCenterPoint:function(a,b){var c=this.width-b-this.drawingArea,d=a+this.drawingArea;this.xCenter=(d+c)/2,this.yCenter=this.height/2},getIndexAngle:function(a){return a*(2*Math.PI/this.valuesCount)-Math.PI/2},getPointPosition:function(a,b){var c=this.getIndexAngle(a);return{x:Math.cos(c)*b+this.xCenter,y:Math.sin(c)*b+this.yCenter}},draw:function(){if(this.display){var a=this.ctx;if(e(this.yLabels,function(b,c){if(c>0){var d,e=c*(this.drawingArea/this.steps),f=this.yCenter-e;if(this.lineWidth>0)if(a.strokeStyle=this.lineColor,a.lineWidth=this.lineWidth,this.lineArc)a.beginPath(),a.arc(this.xCenter,this.yCenter,e,0,2*Math.PI),a.closePath(),a.stroke();else{a.beginPath();for(var g=0;g<this.valuesCount;g++)d=this.getPointPosition(g,this.calculateCenterOffset(this.min+c*this.stepValue)),0===g?a.moveTo(d.x,d.y):a.lineTo(d.x,d.y);a.closePath(),a.stroke()}if(this.showLabels){if(a.font=F(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var h=a.measureText(b).width;a.fillStyle=this.backdropColor,a.fillRect(this.xCenter-h/2-this.backdropPaddingX,f-this.fontSize/2-this.backdropPaddingY,h+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}a.textAlign="center",a.textBaseline="middle",a.fillStyle=this.fontColor,a.fillText(b,this.xCenter,f)}}},this),!this.lineArc){a.lineWidth=this.angleLineWidth,a.strokeStyle=this.angleLineColor;for(var b=this.valuesCount-1;b>=0;b--){if(this.angleLineWidth>0){var c=this.getPointPosition(b,this.calculateCenterOffset(this.max));a.beginPath(),a.moveTo(this.xCenter,this.yCenter),a.lineTo(c.x,c.y),a.stroke(),a.closePath()}var d=this.getPointPosition(b,this.calculateCenterOffset(this.max)+5);a.font=F(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),a.fillStyle=this.pointLabelFontColor;var f=this.labels.length,g=this.labels.length/2,h=g/2,i=b<h||b>f-h,j=b===h||b===f-h;a.textAlign=0===b?"center":b===g?"center":b<g?"left":"right",a.textBaseline=j?"middle":i?"bottom":"top",a.fillText(this.labels[b],d.x,d.y)}}}}}),d.addEvent(window,"resize",function(){var a;return function(){clearTimeout(a),a=setTimeout(function(){e(c.instances,function(a){a.options.responsive&&a.resize(a.render,!0)})},50)}}()),n?define(function(){return c}):"object"==typeof module&&module.exports&&(module.exports=c),a.Chart=c,c.noConflict=function(){return a.Chart=b,c}}).call(this);