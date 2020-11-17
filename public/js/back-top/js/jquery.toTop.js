/**
 *  Plugin Name: jQuery toTop for smoothly Scroll back to Top
 *  Plugin URL: https://github.com/mmkjony/jQuery.toTop
 *  Version: 1.1
 *  Author: MMK Jony
 *  Author URL: https://github.com/mmkjony
 *  License: Licensed under MIT
 **/

// (function( $ ){
//     'use strict';

//     $.fn.toTop = function(opt){

//         //variables
//         var elem = this;
//         var win = $(window);
//         var doc = $('html, body');

//         //Extended Options
//         var options = $.extend({
//             autohide: true,
//             offset: 420,
//             speed: 500,
//             position: true,
//             right: 15,
//             bottom: 30
//         }, opt);

//         elem.css({
//             'cursor': 'pointer'
//         });

//         if(options.autohide){
//             elem.css('display', 'none');
//         }

//         if(options.position){
//             elem.css({
//                 'position': 'fixed',
//                 'right': options.right,
//                 'bottom': options.bottom,
//             });
//         }

//         elem.click(function(){
//             doc.animate({scrollTop: 0}, options.speed);
//         });

//         win.scroll(function(){
//             var scrolling = win.scrollTop();

//             if(options.autohide){
//                 if(scrolling > options.offset){
//                     elem.fadeIn(options.speed);
//                 }
//                 else elem.fadeOut(options.speed);
//             }

//         });

//     };

// }( jQuery ));






window.onload = function() { //1
    var btn = document.getElementById("toTop"); //2

    var clientHeight = document.documentElement.clientHeight; //11

    var timer = null; //6

    var istop = true; //10

    window.onscroll = function() { //10

        var dtop = document.documentElement.scrollTop; //11
        if (dtop >= clientHeight) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

        if (!istop) { //10
            clearInterval(timer);
        }
        istop = false;
    }

    btn.onclick = function() { //3

        timer = setInterval(function() { //6

            var dtop = document.documentElement.scrollTop; //4

            var speed = Math.floor(-dtop / 10); //8

            document.documentElement.scrollTop = dtop + speed; //5、document.documentElement.scrollTop -= dtop;
            //9
            istop = true; //10

            if (dtop == 0) { //7
                clearInterval(timer);
            }
        }, 30)
    }
}