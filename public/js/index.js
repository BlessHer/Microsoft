// import './jquery.js'


//轮播图
var aBtn = document.querySelectorAll('.banner ol li'); //6
//获取6个li元素
var aPic = document.querySelectorAll('.banner ul li'); //6

//获取左右箭头
var left = document.querySelector('#left');
var right = document.querySelector('#right');

var banner = document.querySelector('.banner');
var num = 0; //索引
var timer = null;

for (var i = 0; i < aBtn.length; i++) {
    aBtn[i].index = i;
    aBtn[i].onclick = function() {
        num = this.index; //当前点击的圆圈的索引位置
        //num表示当前的索引，他的变化直接影响这个小圆圈和图片的变化
        tab();
    };
}

function tab() {
    //全部取消
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].className = '';
        aPic[i].style.opacity = 0;
    }
    //当前添加
    aBtn[num].className = 'active';
    aPic[num].style.opacity = 1;
}
//箭头事件
// right.onclick = function() {
//     num++;
//     if (num > 5) {
//         num = 0;
//     }
//     tab();
// };

// left.onclick = function() {
//     num--;
//     if (num < 0) {
//         num = 5;
//     }
//     tab();
// };

// //自动播放
// //每个2s自动点击右键。
// timer = setInterval(function() {
//     right.onclick();
// }, 1200);

// //鼠标移入banner,停止轮播
// banner.onmouseover = function() {
//     clearInterval(timer);
// }

// //鼠标移出继续开启。
// banner.onmouseout = function() {
//     timer = setInterval(function() {
//         right.onclick();
//     }, 1200);
// }

// const baseUrl = 'http://localhosr:8088';

// (function() {
//     $.ajax({
//         type: "get",
//         url: `${baseUrl}/product/getProducts`,

//         dataType: "json",
//         success: function(response) {
//             console.log(response);
//         }
//     });
// })


window.onload = function(ev) {

    let viewheight = document.documentElement.clientWidth;

    function lazyload() {
        //实现懒加载
        let allNode = document.querySelectorAll("img[lazyload][data-origin]");

        //进行遍历
        Array.from(allNode).forEach((item, index) => {
            let react;
            console.log(item.dataset)
            if (item.dataset.origin === "") {
                return;
            }
            react = item.getBoundingClientRect();
            if (react.bottom >= 0 && react.top < viewheight) {
                //到达可视区域
                //给图片提供地址
                let img = new Image();
                img.src = item.dataset.origin;
                img.onload = () => {
                    item.src = img.src;
                }
                item.removeAttribute("data-origin");
                item.removeAttribute("lazyload");
            }

        })


    }
    lazyload(); //上来先调用一下
    //绑定事件
    document.addEventListener("scroll", lazyload);
}

// import '../js/jquery.js';
const baseUrl = 'http://localhost:666';

(function() {
    console.log(1);
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,
        // data: "data",
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
})();