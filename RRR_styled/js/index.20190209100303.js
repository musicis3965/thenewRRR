(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', 'images/trans_window_wide-594.png');
var a='data-src'; if($('.js3').hasAttr('src')) { a='src'; } $('.js3').attr(a, 'images/playbutton-177.png');
$('.js4').attr('src', (dpi>1) ? 'images/tbt-hours-banner-1160.jpg' : 'images/tbt-hours-banner-580.jpg');}else if($(window).width()>=768){$('.js').attr('src', 'images/trans_window_wide-474.png');
var a='data-src'; if($('.js3').hasAttr('src')) { a='src'; } $('.js3').attr(a, (dpi>1) ? 'images/playbutton-284.png' : 'images/playbutton-142.png');
$('.js4').attr('src', (dpi>1) ? 'images/tbt-hours-banner-928.jpg' : 'images/tbt-hours-banner-464.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/trans_window_wide-480.png' : 'images/trans_window_wide-240.png');
var a='data-src'; if($('.js3').hasAttr('src')) { a='src'; } $('.js3').attr(a, (dpi>1) ? 'images/playbutton-168.png' : 'images/playbutton-84.png');
$('.js4').attr('src', (dpi>1) ? 'images/tbt-hours-banner-634.jpg' : 'images/tbt-hours-banner-317.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js3').unveil(50);
$('.js13 source').unveil(50);
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js2')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "2.20s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});