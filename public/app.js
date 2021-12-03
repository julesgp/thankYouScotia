(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    "use strict";
    
    var thanksApp = {};
    
    thanksApp.animationProcess = function () {
    $(".mainAnimation").delay(1500).fadeOut();
    $(".discover").delay(2000).fadeIn();
    $(".discover").delay(2001).css({ "display": "flex" });
    };
    
    thanksApp.checkData = function (first, second, third) {
    if (first == "di" && second == "gi" && third == "tal") {
    return true;
    } else {
    return false;
    }
    };
    
    thanksApp.mainClick = function () {
    $(".solve").on("click", function () {
    var di = $(".aurora").val();
    var gi = $(".suat").val();
    var tal = $(".david").val();
    if (thanksApp.checkData(di, gi, tal)) {
    console.log("sucessful");
    $(".discover").fadeOut();
    $(".scotiaBank").fadeIn();
    $(".scotiaBank").css({ "display": "flex" });
    } else {
    console.log("display error");
    $(".discover").fadeOut();
    $(".error").fadeIn();
    $(".error").css({ "display": "flex" });
    }
    });
    };
    
    thanksApp.backClick = function () {
    $(".backButton").on("click", function () {
    $(".error").fadeOut();
    $(".error").css({ "display": "none" });
    $(".discover").fadeIn();
    $(".discover").css({ "display": "flex" });
    });
    };
    
    thanksApp.init = function () {
    thanksApp.animationProcess();
    thanksApp.mainClick();
    thanksApp.backClick();
    };
    
    $(function () {
    thanksApp.init();
    });
    
    },{}]},{},[1])
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFlBQVksRUFBaEI7O0FBRUEsVUFBVSxnQkFBVixHQUE2QixZQUFVO0FBQ3RDLEdBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0MsT0FBaEM7QUFDQSxHQUFFLFdBQUYsRUFBZSxLQUFmLENBQXFCLElBQXJCLEVBQTJCLE1BQTNCO0FBQ0EsR0FBRSxXQUFGLEVBQWUsS0FBZixDQUFxQixJQUFyQixFQUEyQixHQUEzQixDQUErQixFQUFDLFdBQVUsTUFBWCxFQUEvQjtBQUNBLENBSkQ7O0FBTUEsVUFBVSxTQUFWLEdBQXNCLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUE4QjtBQUNuRCxLQUFJLFNBQVMsSUFBVCxJQUFpQixVQUFTLElBQTFCLElBQWtDLFNBQVMsS0FBL0MsRUFBcUQ7QUFDcEQsU0FBTyxJQUFQO0FBQ0EsRUFGRCxNQUVPO0FBQ04sU0FBTyxLQUFQO0FBQ0E7QUFDRCxDQU5EOztBQVFBLFVBQVUsU0FBVixHQUFzQixZQUFVO0FBQy9CLEdBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVU7QUFDakMsTUFBSSxLQUFLLEVBQUUsU0FBRixFQUFhLEdBQWIsRUFBVDtBQUNBLE1BQUksS0FBSyxFQUFFLE9BQUYsRUFBVyxHQUFYLEVBQVQ7QUFDQSxNQUFJLE1BQU0sRUFBRSxRQUFGLEVBQVksR0FBWixFQUFWO0FBQ0EsTUFBRyxVQUFVLFNBQVYsQ0FBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsR0FBNUIsQ0FBSCxFQUFvQztBQUNuQyxXQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsS0FBRSxXQUFGLEVBQWUsT0FBZjtBQUNBLEtBQUUsYUFBRixFQUFpQixNQUFqQjtBQUNBLEtBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixFQUFDLFdBQVUsTUFBWCxFQUFyQjtBQUNBLEdBTEQsTUFLTTtBQUNMLFdBQVEsR0FBUixDQUFZLGVBQVo7QUFDQSxLQUFFLFdBQUYsRUFBZSxPQUFmO0FBQ0EsS0FBRSxRQUFGLEVBQVksTUFBWjtBQUNBLEtBQUUsUUFBRixFQUFZLEdBQVosQ0FBZ0IsRUFBQyxXQUFVLE1BQVgsRUFBaEI7QUFDQTtBQUVELEVBaEJEO0FBaUJBLENBbEJEOztBQW9CQSxVQUFVLFNBQVYsR0FBc0IsWUFBVTtBQUMvQixHQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVTtBQUN0QyxJQUFFLFFBQUYsRUFBWSxPQUFaO0FBQ0EsSUFBRSxRQUFGLEVBQVksR0FBWixDQUFnQixFQUFDLFdBQVUsTUFBWCxFQUFoQjtBQUNBLElBQUUsV0FBRixFQUFlLE1BQWY7QUFDQSxJQUFFLFdBQUYsRUFBZSxHQUFmLENBQW1CLEVBQUMsV0FBVSxNQUFYLEVBQW5CO0FBQ0EsRUFMRDtBQU1BLENBUEQ7O0FBU0EsVUFBVSxJQUFWLEdBQWlCLFlBQVU7QUFDMUIsV0FBVSxnQkFBVjtBQUNBLFdBQVUsU0FBVjtBQUNBLFdBQVUsU0FBVjtBQUNBLENBSkQ7O0FBTUEsRUFBRSxZQUFVO0FBQ1gsV0FBVSxJQUFWO0FBQ0EsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgdGhhbmtzQXBwID0ge307XG5cbnRoYW5rc0FwcC5hbmltYXRpb25Qcm9jZXNzID0gZnVuY3Rpb24oKXtcblx0JChcIi5tYWluQW5pbWF0aW9uXCIpLmRlbGF5KDE1MDApLmZhZGVPdXQoKTtcblx0JChcIi5kaXNjb3ZlclwiKS5kZWxheSgyMDAwKS5mYWRlSW4oKTtcblx0JChcIi5kaXNjb3ZlclwiKS5kZWxheSgyMDAxKS5jc3Moe1wiZGlzcGxheVwiOlwiZmxleFwifSk7XG59XG5cbnRoYW5rc0FwcC5jaGVja0RhdGEgPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kLCB0aGlyZCl7XG5cdGlmIChmaXJzdCA9PSBcImRpXCIgJiYgc2Vjb25kID09XCJnaVwiICYmIHRoaXJkID09IFwidGFsXCIpe1xuXHRcdHJldHVybiB0cnVlXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cbn1cblxudGhhbmtzQXBwLm1haW5DbGljayA9IGZ1bmN0aW9uKCl7XG5cdCQoXCIuc29sdmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdHZhciBkaSA9ICQoXCIuYXVyb3JhXCIpLnZhbCgpO1xuXHRcdHZhciBnaSA9ICQoXCIuc3VhdFwiKS52YWwoKTtcblx0XHR2YXIgdGFsID0gJChcIi5kYXZpZFwiKS52YWwoKTtcblx0XHRpZih0aGFua3NBcHAuY2hlY2tEYXRhKGRpLCBnaSwgdGFsKSl7XG5cdFx0XHRjb25zb2xlLmxvZyhcInN1Y2Vzc2Z1bFwiKTtcblx0XHRcdCQoXCIuZGlzY292ZXJcIikuZmFkZU91dCgpO1xuXHRcdFx0JChcIi5zY290aWFCYW5rXCIpLmZhZGVJbigpO1xuXHRcdFx0JChcIi5zY290aWFCYW5rXCIpLmNzcyh7XCJkaXNwbGF5XCI6XCJmbGV4XCJ9KTtcblx0XHR9IGVsc2V7XG5cdFx0XHRjb25zb2xlLmxvZyhcImRpc3BsYXkgZXJyb3JcIik7XG5cdFx0XHQkKFwiLmRpc2NvdmVyXCIpLmZhZGVPdXQoKTtcblx0XHRcdCQoXCIuZXJyb3JcIikuZmFkZUluKCk7XG5cdFx0XHQkKFwiLmVycm9yXCIpLmNzcyh7XCJkaXNwbGF5XCI6XCJmbGV4XCJ9KTtcblx0XHR9XG5cblx0fSk7XG59XG5cbnRoYW5rc0FwcC5iYWNrQ2xpY2sgPSBmdW5jdGlvbigpe1xuXHQkKFwiLmJhY2tCdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuXHRcdCQoXCIuZXJyb3JcIikuZmFkZU91dCgpO1xuXHRcdCQoXCIuZXJyb3JcIikuY3NzKHtcImRpc3BsYXlcIjpcIm5vbmVcIn0pO1xuXHRcdCQoXCIuZGlzY292ZXJcIikuZmFkZUluKCk7XG5cdFx0JChcIi5kaXNjb3ZlclwiKS5jc3Moe1wiZGlzcGxheVwiOlwiZmxleFwifSk7XG5cdH0pO1xufVxuXG50aGFua3NBcHAuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdHRoYW5rc0FwcC5hbmltYXRpb25Qcm9jZXNzKCk7XG5cdHRoYW5rc0FwcC5tYWluQ2xpY2soKTtcblx0dGhhbmtzQXBwLmJhY2tDbGljaygpO1xufVxuXG4kKGZ1bmN0aW9uKCl7XG5cdHRoYW5rc0FwcC5pbml0KCk7XG59KTsiXX0=