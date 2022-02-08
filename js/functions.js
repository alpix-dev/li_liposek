!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=i(e).not(this.$slider)),e},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(o in s=null,r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n=this,r=i(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),o=n.slideCount%n.options.slidesToScroll!=0?0:(n.slideCount-n.currentSlide)%n.options.slidesToScroll,e.data.message){case"previous":s=0===o?n.options.slidesToScroll:n.options.slidesToShow-o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide-s,!1,t);break;case"next":s=0===o?n.options.slidesToScroll:o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide+s,!1,t);break;case"index":var l=0===e.data.index?0:e.data.index||r.index()*n.options.slidesToScroll;n.slideHandler(n.checkNavigable(l),!1,t),r.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(t=0,i>(e=this.getNavigableIndexes())[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){for(e in s.respondTo=s.options.respondTo||"window",n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){i||this.autoPlay(),this.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.apx_slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

// const ls = [];

// ls.influencers = [
//     {
//         image : 'leticia_gabriela.png',
//         title: 'Letícia Gabriela',
//         subtitle : 'Influenciadora',
//         text : '@ig.leticiagabriela'
//     },
//     {
//         image : 'bruna_rocha.png',
//         title: 'Bruna Rocha',
//         subtitle : 'Influenciadora',
//         text : '@brunadcr'
//     },
//     {
//         image : 'leticia_calatroia.png',
//         title: 'Letícia Calatroia',
//         subtitle : 'Influenciadora',
//         text : '@lecatroia'
//     },
//     {
//         image : 'refaella_tassila.png',
//         title: 'Rafaella Tassila',
//         subtitle : 'Influenciadora',
//         text : '@rafaellatassila'
//     },
//     {
//         image : 'giovanna_fazann.png',
//         title: 'Giovanna Fazann',
//         subtitle : 'Influenciadora',
//         text : '@giovanna_fazann'
//     }
// ];

// ls.products = [
//     {
//         id : '142138762',
//         image:'product_1.png',
//         list : ['<b>1 mês</b> de tratamento','<b>19%</b> de desconto','<b>Frete grátis</b> para todo o Brasil'],
//         title: '1 pote de <s>R$ 197</s>',
//         subtitle : '<small>R$</small> 8,25<span>/mês</span>',
//         description : 'em 12x ou <b>à vista R$ 99</b>',
//     },
//     {
//         id : '142138924',
//         image:'product_kit_1.png',
//         list : ['<b>3 meses</b> de tratamento','<b>69%</b> de desconto','<b>Frete grátis</b> para todo o Brasil'],
//         title: '3 potes de <s>R$ 484</s>',
//         subtitle : '<small>R$</small> 14,91<span>/mês</span>',
//         description : 'em 12x ou <b>à vista R$ 199</b>',
//     },
//     {
//         id : '142139188',
//         image:'product_kit_2.png',
//         list : ['<b>5 mês</b> de tratamento','<b>19%</b> de desconto','<b>Frete grátis</b> para todo o Brasil'],
//         title: '5 potes de <s>R$ 795</s>',
//         subtitle : '<small>R$</small> 24,91<span>/mês</span>',
//         description : 'em 12x ou <b>à vista R$ 299</b>',
//     },
// ];

// ls.secure = [
//     {
//         image : 'ico_3.png',
//         title: 'Dados pessoais',        
//         description : 'São totalmente sigilosos e não são compartilhados',
        
//     },
//     {
//         image : 'ico_2.png',
//         title: 'Site confiável',        
//         description : 'Monitorado o tempo todo por empresas especializadas em segurança digital',
        
//     },
//     {
//         image : 'ico_1.png',
//         title: 'Dados financeiros',        
//         description : 'Protegidos por criptografia avançada o que garante a total segurança',
        
//     },
//     {
//         image : 'ico_4.png',
//         title: 'Entrega garantida',        
//         description : '100% das entregas que realizamos são feitas dentro do prazo',
        
//     }
// ];

// ls.testimonials = [
//     {
//         title: 'Elis Guimarães',
//         subtitle : 'Emagreci 20kg usando o LipoSek',
//         date : '02 de fevereiro de 2022',
//         description : 'Eu comprei meio desconfiado, mas depois de 3 meses usando, consegui mudar a         minha vida. Emagreci 20 kg e reconquistei a minha autoestima. Recomendo! ',
//         stars : 5
//     },
//     {
//         title: 'Gabriela Sanches de Oliveira',
//         subtitle : 'Eu amei! ',
//         date : '01 de fevereiro de 2022',
//         description : 'Cumpre o que promote! Adorei a sensação de mais energia durante o dia',
//         stars : 5
//     },
//     {
//         title: 'Maria Luiza Bittencourt',
//         subtitle : 'Melhor produto de emagrecimento!',
//         date : '01 de fevereiro de 2022',
//         description : 'Um dos melhores produtos do mercado. Minha amiga me indicou e agora eu indico pra todo mundo. Pode confiar de olho fechado',
//         stars : 4
//     }
// ];



function assets(file){
    return "https://cdn.jsdelivr.net/gh/alpix-dev/li_liposek/assets/" + file;
    //return "http://127.0.0.1:5500/assets/" + file;
}

function asset_picture(file){
    let picture = $('<picture></picture>');
    picture.append('<source srcset="'+ assets(file.split('.')[0] + '_mobile.' + file.split('.')[1]) +'" media="(max-width: 900px)"></source>');
    picture.append('<source srcset="'+ assets(file) +'" media="(min-width: 991px)"></source>');
    picture.append('<img src="'+ assets(file) +'"/>');
    return picture;
}
//GET TRIGGERS
ls.triggers = [];
ls.triggers.current_page = $('body').attr('class').split(' ')[0].trim();
ls.triggers.is_mobile = window.innerWidth < 990;
ls.triggers.selector = window.innerWidth < 990 ? 'mobile' : 'desktop';
ls.triggers.is_logged = $('.bem-vindo > span').text() != "identifique-se" ? true : false;

//HEADER
ls.elements = []
ls.elements.header_menu = $('<div></div>').append($('.menu.superior').clone()).html();
ls.elements.header_cart = $('<div></div>').append($('#cabecalho .carrinho').clone()).html();
ls.elements.logo_img = $('<div></div>').append($('#cabecalho .logo img').clone()).html();
ls.elements.header_logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
ls.elements.header_search = $('<div></div>').append($('#cabecalho .busca #form-buscar').first().clone()).html();
ls.elements.header_social = $('<div></div>').append($('.barra-inicial .lista-redes a').clone()).html();
ls.elements.header_phone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
ls.elements.header_skype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
ls.elements.header_whatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();


//FOOTER
ls.elements.footer_credits = $('<div></div>').append($('#rodape  > div:last-child').clone()).html();
ls.elements.footer_categories = $('<div></div>').append($('.links-rodape-categorias > ul').clone()).html();
ls.elements.footer_pages = $('<div></div>').append($('.links-rodape-paginas > ul').clone()).html();
ls.elements.footer_seals = $('<div></div>').append($('#rodape .selos ul').clone()).html();
ls.elements.footer_payments = $('<div></div>').append($('#rodape .bandeiras-pagamento').clone()).html();
ls.elements.footer_gateways = $('<div></div>').append($('#rodape .gateways-rodape').clone()).html();
ls.elements.footer_description = $('.sobre-loja-rodape > p').text();
ls.elements.footer_newsletter = $('<div></div>').append($('#barraNewsletter').clone()).html();

//build footer
$('#rodape').html('<div class="conteiner"><div class="row-flex"><div class="col-1"></div><div class="col-2"></div><div class="col-3"></div><div class="col-4"></div></div></div>');
$('#rodape .col-1').append('<img src="'+ assets('logo_footer.png') +'"/>');
$('#rodape .col-1').append('<div class="ls_social">'+ ls.elements.header_social + '</div>');
$('#rodape .col-1').append('<div class="ls_info"><p>Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veículados são de propriedade exclusiva da LIPOSEK LTDA.</p><p>Rua José de Oliveira, 68 - Vale Verde - CEP: 13279-014 - Valinhos/SP - CEP: 13/272-823<br>CNPJ: 44.178.792/0001-64</p></div>');
$('#rodape .col-2').append('<h4>Acesso Rápido</h4>');
$('#rodape .col-2').append('<div class="ls_pages">'+ ls.elements.footer_pages + '</div>');
$('#rodape .col-3').append('<h4>Formas de Pagamento</h4>');
$('#rodape .col-3').append('<img src="'+ assets('payments_2.png') +'"/>');
$('#rodape .col-3').append('<br><br><h4>Atendimento</h4>');
$('#rodape .col-3').append('<p>De segunda à sexta-feira das<br>8h as 18h</p>');
$('#rodape .col-3').append('<a class="ls_whatsapp" href="'+ ls.whatsapp +'" target="_blank">Falar no whatsapp</a>');
$('#rodape .col-4').append('<img src="'+ assets('seals.png') +'"/>');

$('.ls_pages > ul').prepend('<li><a href="/conta/pedido/listar">Meus pedidos</a></li>');
$('.ls_pages > ul').prepend('<li><a href="/conta/index">Minha conta</a></li>');
//build header
$('#cabecalho').html('<div id="theme_header_1"><div class="conteiner"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col"><ul id="theme_header-functions"></ul></div></div></div></div>');
$('#theme_header-logo').append(ls.elements.header_logo);
//$('#theme_header-menu').html(ls.elements.header_menu);

$('body:not(.pagina-carrinho) #theme_header-functions').append('<li>' + ls.elements.header_cart + '</li>');
$('#theme_header-functions').prepend('<li><a class="" href="/conta/index">Minha conta</a></li>');
$('#theme_header-functions').prepend('<li><a class="atendimento-l" href="#modalContato">Atendimento</a></li>');
$('.carrinho > a >.icon-shopping-cart').before('<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_274_728)"><path d="M23.0188 -0.000732422C18.8838 -0.000732422 15.4803 3.09909 15.1561 7.03189H12.6503C10.3727 7.03189 8.69983 8.76135 8.35325 11.1064L3.97617 40.7228C3.63187 43.0525 5.85091 45.0006 8.27884 45.0006H37.7251C40.1717 45.0006 42.3674 43.0521 42.0236 40.7228L37.6521 11.1064C37.3182 8.84373 35.698 7.03189 33.3537 7.03189H30.8802C30.5559 3.09911 27.1539 -0.000732422 23.0188 -0.000732422V-0.000732422ZM23.0188 1.40553C26.3839 1.40553 29.1308 3.86965 29.4483 7.03189H16.5936C16.9106 3.86965 19.6537 1.4055 23.0188 1.40553ZM12.6503 8.43951H33.3537C35.0732 8.43951 36.0201 9.88106 36.2301 11.3042L40.6015 40.9261C40.8188 42.3984 39.2657 43.593 37.7251 43.593H8.27884C6.74292 43.593 5.18543 42.4061 5.40384 40.9261L9.7753 11.3042C10.0057 9.74257 11.0282 8.43951 12.6503 8.43951V8.43951ZM29.4806 14.0604C29.4806 17.5114 26.5985 20.3048 23.0188 20.3048C19.4391 20.3048 16.5613 17.5115 16.5613 14.0604C16.5613 13.1251 15.1238 13.12 15.1238 14.0604C15.1238 18.2799 18.6708 21.711 23.0188 21.711C27.3669 21.711 30.9139 18.2798 30.9139 14.0604C30.9139 13.1251 29.4806 13.1251 29.4806 14.0604V14.0604Z" fill="#FF007A"/></g><defs><clipPath id="clip0_274_728"><rect width="46" height="45" fill="white"/></clipPath></defs></svg>');
$('.carrinho .icon-shopping-cart').remove();
$('.barra-inicial').remove();  
$('#barraTopo').remove();   



if($('.pagina-inicial').length > 0){
    $('#corpo').append('<div id="ls_body"></div>');
    let ls_body  = $('#ls_body');

    ls_body.append('<div id="section_1"><a href="#section_4"/></div>');
    ls_body.append('<div id="section_2"/>');
    ls_body.append('<div id="section_3"><a href="#section_4"/></div>');
    ls_body.append('<div id="section_4"/>');
    ls_body.append('<div id="section_5"><a href="#section_4"/></div>');
    ls_body.append('<div id="section_6"/>');
    ls_body.append('<div id="section_7"/>');
    ls_body.find('#section_1 > a').append(asset_picture('bn_1.png'));
    ls_body.find('#section_3 > a').append(asset_picture('bn_2.png'));
    ls_body.find('#section_5 > a').append(asset_picture('bn_3.png'));

    $('#section_2').append('<div class="conteiner"><h2>Quem usa, <b>simplesmente ama</b><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.9417 3.35647C24.6884 3.33908 21.5956 4.76789 19.5 7.25642C17.4175 4.75088 14.316 3.31801 11.0582 3.35647C4.95089 3.35647 0 8.30735 0 14.4146C0 24.8805 18.2658 35.0994 19.0063 35.4944C19.3051 35.694 19.6948 35.694 19.9937 35.4944C20.7342 35.0994 39 25.0286 39 14.4146C39 8.30735 34.049 3.35647 27.9417 3.35647ZM19.5 33.5197C16.6367 31.8412 1.97469 22.9058 1.97469 14.4146C1.97469 9.39798 6.04151 5.33106 11.0583 5.33106C14.1304 5.29071 17.0054 6.84028 18.6608 9.4285C18.9969 9.89198 19.6452 9.99526 20.1087 9.65906C20.1972 9.5948 20.2751 9.51704 20.3392 9.4285C23.0847 5.22976 28.7141 4.05164 32.9128 6.79709C35.4832 8.47782 37.0303 11.3435 37.0252 14.4145C37.0253 23.0045 22.3632 31.8906 19.5 33.5197Z" fill="#FF007A"/></svg></h2><p>O emagrecedor favorito do Brasil</p><div id="ls_influencers" style="display:none" class="flexslider"><ul class=""></ul></div></div>');
    $.each(ls.influencers,function(k,item){        
        let box = $('<div class="influencer_item"/>');
        box.append('<img src="'+ assets(item.image) +'"/>');
        box.append('<div class="text_1">'+ item.title +'</div>');
        box.append('<div class="text_2">'+ item.subtitle +'</div>');
        box.append('<div class="text_3">'+ item.text +'</div>');
        
        let col = $('<li class=""/>').append(box);
        $('#ls_influencers > ul').append(col);
    });
    $(document).ready(function(){
        // $('#ls_influencers.flexslider').flexslider({
        //     animation: "slide",
        //     slideshow: true,
        //     slideshowSpeed:3000,
        //     selector: "ul > li",
        //     animationLoop: true,
        //     controlNav: true,
        //     smoothHeight: false,
        //     useCSS: false,
        //     touch: true,
        //     itemWidth: 400,
        //     itemMargin: 30,
        //     prevText: "<i class='fa fa-chevron-left'/>",
        //     nextText: "<i class='fa fa-chevron-right'/>",
        //     minItems: 4,
        //     maxItems: 9,
        //     move: 1
        // });
        $('#ls_influencers ul').apx_slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots:true,
            prevArrow: "<button type='button'><i class='fa fa-chevron-left'/></button>",
            nextArrow: "<button type='button'><i class='fa fa-chevron-right'/></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,            
                        centerMode:true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode:true
                    }
                }
            ]  
        });
        $('#ls_influencers').show()
    })
    


    $('#section_4').append('<div class="conteiner text-center"><h2>Escolha o seu tratamento</h2><p>Aproveite nossas ofertas e comece a mudança do seu corpo imediatamente</p><div id="ls_products" class="row-flex"/></div>');
    $.each(ls.products,function(k,product){        
        let box = $('<div class="product_item"/>');
        box.append('<img src="'+ assets(product.image) +'"/>');
        box.append('<div class="text_1">'+ product.title +'</div>');
        box.append('<div class="text_2">'+ product.subtitle +'</div>');
        box.append('<div class="text_3">'+ product.description +'</div>');
        box.append('<button type="button" class="list-toggle" onclick="$(this).next(\'ul\').toggleClass(\'visible\');"><svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.01339 7.81628L14.8328 0.977942C15.0561 0.753892 15.0557 0.39115 14.8317 0.167475C14.6076 -0.0560263 14.2447 -0.0554487 14.0212 0.16863L7.60765 6.59993L1.19415 0.168399C0.970649 -0.0556508 0.607936 -0.0562283 0.383857 0.167244C0.271529 0.27937 0.215364 0.426264 0.215364 0.573157C0.215364 0.719674 0.271153 0.86599 0.382702 0.977914L7.20195 7.81628C7.30931 7.92419 7.45542 7.98475 7.60765 7.98475C7.75989 7.98475 7.90583 7.92402 8.01339 7.81628Z" fill="#A7A7A7"/></svg></button><ul class="list_1"><li>'+ product.list.join('</li><li>') +'</li></ul>');
        box.append('<a class="buy" href="/carrinho/produto/'+ product.id +'/adicionar">Compre agora</a>');

        let col = $('<div class="col"/>').append(box);
        $('#ls_products').append(col)
    });

    $('#section_6').append('<div class="conteiner text-center"><h2>Sua compra é <b>100% segura</b></h2><p>Comprar na LipoSek é seguro e totalmente confiável</p><div id="ls_secure" class="row-flex"/></div>');
    $.each(ls.secure,function(k,item){        
        let box = $('<div class="item"/>');
        box.append('<img src="'+ assets(item.image) +'"/>');
        box.append('<div class="text_1">'+ item.title +'<p>'+ item.description +'</p></div>');
        
        let col = $('<div class="col-12 col-md-6"/>').append(box);
        $('#ls_secure').append(col)
    });

    $('#section_7').append('<div class="conteiner"><h2>Classificação e opiniões</h2><p>Veja a opinião de quem já comprou</p><div id="ls_testimonials" class="row-flex"><div class="info col-auto"/><div class="list col"/></div></div>');
    $('#section_7').prepend('<div class="wave"><svg width="409" height="59" viewBox="0 0 409 59" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M408.84 0.349338C407.238 0.174669 405.317 0 403.395 0C378.253 0 378.253 15.7202 352.951 15.7202C327.809 15.7202 327.809 0 302.506 0C277.364 0 277.364 15.7202 252.062 15.7202C226.92 15.7202 226.92 0 201.617 0C176.475 0 176.475 15.7202 151.173 15.7202C126.031 15.7202 126.031 0 100.889 0C75.5865 0 75.5865 15.7202 50.4444 15.7202C25.1421 15.7202 25.1421 0 0 0V33.7111C25.1421 33.7111 25.1421 49.4314 50.4444 49.4314C75.5865 49.4314 75.5865 33.7111 100.889 33.7111C126.031 33.7111 126.031 49.4314 151.333 49.4314C176.475 49.4314 176.475 33.7111 201.778 33.7111C226.92 33.7111 226.92 49.4314 252.222 49.4314C277.364 49.4314 277.364 33.7111 302.666 33.7111C327.809 33.7111 327.809 49.4314 353.111 49.4314C378.253 49.4314 378.253 33.7111 403.555 33.7111C405.477 33.7111 407.238 33.8858 409 34.0605V0.349338H408.84Z" fill="#FFE46B"/><path d="M408.84 43.2277C407.078 43.0684 405.317 42.9091 403.395 42.9091C390.584 42.9091 384.018 46.5733 377.772 50.2376C371.367 53.9019 365.281 57.4068 352.951 57.4068C340.62 57.4068 334.534 53.9019 328.129 50.2376C321.883 46.5733 315.318 42.9091 302.506 42.9091C289.695 42.9091 283.129 46.5733 276.884 50.2376C270.478 53.9019 264.393 57.4068 252.062 57.4068C239.731 57.4068 233.646 53.9019 227.24 50.2376C220.995 46.5733 214.429 42.9091 201.617 42.9091C188.806 42.9091 182.24 46.5733 175.995 50.2376C169.589 53.9019 163.504 57.4068 151.173 57.4068C138.842 57.2475 132.757 53.9019 126.511 50.2376C120.106 46.5733 113.7 42.9091 100.889 42.9091C88.0775 42.9091 81.5117 46.5733 75.2663 50.2376C68.8606 53.9019 62.7753 57.2475 50.4444 57.2475C38.1135 57.2475 32.0282 53.9019 25.6226 50.2376C19.3771 46.5733 12.8113 42.9091 0 42.9091V44.5022C12.3309 44.5022 18.4162 48.0072 24.8218 51.6715C31.0673 55.3357 37.6331 59 50.4444 59C63.2557 59 69.8215 55.3357 76.067 51.6715C82.4726 48.0072 88.3978 44.5022 100.889 44.5022C113.22 44.5022 119.305 48.0072 125.711 51.6715C131.956 55.3357 138.522 59 151.333 59C164.144 59 170.71 55.3357 176.956 51.6715C183.361 48.0072 189.447 44.5022 201.778 44.5022C214.108 44.5022 220.194 48.0072 226.599 51.6715C232.845 55.3357 239.411 59 252.222 59C265.033 59 271.599 55.3357 277.845 51.6715C284.25 48.0072 290.336 44.5022 302.666 44.5022C314.997 44.5022 321.083 48.0072 327.488 51.6715C333.734 55.3357 340.3 59 353.111 59C365.922 59 372.488 55.3357 378.733 51.6715C385.139 48.0072 391.224 44.5022 403.555 44.5022C405.477 44.5022 407.238 44.6615 409 44.8209V43.2277H408.84Z" fill="#111111"/><path d="M408.84 16.3103C407.078 16.1552 405.317 16.0002 403.395 16.0002C390.584 16.0002 384.018 19.567 377.772 23.1339C371.367 26.7008 365.281 30.1126 352.951 30.1126C340.62 30.1126 334.534 26.7008 328.129 23.1339C321.883 19.567 315.318 16.0002 302.506 16.0002C289.695 16.0002 283.129 19.567 276.884 23.1339C270.478 26.7008 264.393 30.1126 252.062 30.1126C239.731 30.1126 233.646 26.7008 227.24 23.1339C220.994 19.567 214.429 16.0002 201.617 16.0002C188.806 16.0002 182.24 19.567 175.995 23.1339C169.589 26.7008 163.504 30.1126 151.173 30.1126C138.842 29.9575 132.757 26.7008 126.511 23.1339C120.106 19.567 113.7 16.0002 100.889 16.0002C88.0775 16.0002 81.5117 19.567 75.2662 23.1339C68.8606 26.7008 62.7752 29.9575 50.4444 29.9575C38.1135 29.9575 32.0282 26.7008 25.6225 23.1339C19.3771 19.567 12.8113 16.0002 0 16.0002V17.551C12.3309 17.551 18.4162 20.9628 24.8218 24.5296C31.0673 28.0965 37.6331 31.6634 50.4444 31.6634C63.2557 31.6634 69.8214 28.0965 76.0669 24.5296C82.4726 20.9628 88.3978 17.551 100.889 17.551C113.22 17.551 119.305 20.9628 125.711 24.5296C131.956 28.0965 138.522 31.6634 151.333 31.6634C164.144 31.6634 170.71 28.0965 176.956 24.5296C183.361 20.9628 189.447 17.551 201.778 17.551C214.108 17.551 220.194 20.9628 226.599 24.5296C232.845 28.0965 239.411 31.6634 252.222 31.6634C265.033 31.6634 271.599 28.0965 277.845 24.5296C284.25 20.9628 290.336 17.551 302.666 17.551C314.997 17.551 321.083 20.9628 327.488 24.5296C333.734 28.0965 340.299 31.6634 353.111 31.6634C365.922 31.6634 372.488 28.0965 378.733 24.5296C385.139 20.9628 391.224 17.551 403.555 17.551C405.477 17.551 407.238 17.7061 409 17.8611V16.3103H408.84Z" fill="#111111"/></svg></div>');
    $.each(ls.testimonials,function(k,item){        
        let box = $('<div class="item"/>');
        box.append('<div class="text_1">'+ item.title +'</div>');
        box.append('<div class="text_2">'+ item.subtitle +' <small>'+ item.date +'</small></div>');
        let stars = $('<div class="stars"/>');
        if(item.stars != ""){
            for(let i = 1; i<=5; i++ ){
                stars.append('<i class="fa fa-star'+ (i<= item.stars ? '' : '-o') +'"></i>');
            }            
        }
        box.append(stars);
        box.append('<div class="text_3">'+ item.description +'</div>');
        
        
        $('#ls_testimonials .list').append(box);
    });
    $('#ls_testimonials .info').append('<div><div class="stars"><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/><i class="fa fa-star"/></div><span>4.8</span></div>');
    
}
if($('.secao-principal > .coluna').length){
    $('.secao-principal > .conteudo').toggleClass('span9 span12');
    $('.secao-principal > .coluna').remove();
}

if($('.pagina-categoria, .pagina-produto, .pagina-busca').length > 0){
    window.location.href = '/'
}else{
    $('body').css('opacity',1)
}

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "" && !$(this).hasClass('atendimento-l')) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });