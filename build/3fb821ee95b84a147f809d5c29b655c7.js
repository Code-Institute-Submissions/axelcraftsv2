require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({17:[function(require,module,exports) {

},{}],18:[function(require,module,exports) {
var e=0;l();function l(){var t,s=document.getElementsByClassName("mySlides");for(t=0;t<s.length;t++)s[t].style.display="none";++e>s.length&&(e=1),s[e-1].style.display="block",setTimeout(l,1e4)}
},{}],19:[function(require,module,exports) {
document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
},{}],20:[function(require,module,exports) {
$(document).ready(function(){$("#sbmt").click(function(){alert("Thank you for getting in touch. We will come back to you as soon as possible.")}),$("#sbmt-q").click(function(){alert("Thank you for sending your quote. We will come back to you as soon as possible.")}),d});
},{}],21:[function(require,module,exports) {
$(function(){$("[data-popup-open]").on("click",function(p){var a=jQuery(this).attr("data-popup-open");$('[data-popup="'+a+'"]').fadeIn(350),p.preventDefault()}),$("[data-popup-close]").on("click",function(p){var a=jQuery(this).attr("data-popup-close");$('[data-popup="'+a+'"]').fadeOut(350),p.preventDefault()})});
},{}],22:[function(require,module,exports) {
$(document).ready(function(){var n=setInterval(t,5e3),e=$(".client"),i=$("#clients ul"),f=i.find(":first-child").prop("tagName"),a=i.width();e.width(a),i.parent().width(a),i.width(e.length*a),i.find(f+":first").before(i.find(f+":last")),r(),$("#buttons a").click(function(t){return!i.is(":animated")&&("prev"==t.target.id&&i.stop().animate({left:0},1500,function(){i.find(f+":first").before(i.find(f+":last")),r()}),"next"==t.target.id&&i.stop().animate({left:-2*a},1500,function(){i.find(f+":last").after(i.find(f+":first")),r()}),!1)}),i.parent().mouseenter(function(){clearInterval(n)}).mouseleave(function(){n=setInterval(t,5e3)});function r(){i.css({left:-1*a})}});function t(){$("#next").click()}
},{}],10:[function(require,module,exports) {
"use strict";require("../scss/main.scss");var e=require("./slider.js"),r=require("./menu.js"),s=require("./submit.js"),i=require("./quote.js"),u=require("./sliderClient.js");
},{"../scss/main.scss":17,"./slider.js":18,"./menu.js":19,"./submit.js":20,"./quote.js":21,"./sliderClient.js":22}]},{},[10])