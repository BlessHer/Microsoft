// import '../js/jquery.js';
// console.log($);

window.onload = function() {
    var odiv = document.getElementById("amount");
    var obt = document.getElementById("jian");
    var btn = document.getElementById("jia");
    var danjia = document.getElementById("table-text-3")
    var price = document.getElementById("table-text2");
    var count = 1;
    obt.onclick = function() {
        // count = count + 1;
        odiv.innerHTML = count--;
    };

    btn.onclick = function() {
        odiv.innerHTML = count++;
    };
    // if (count++) {
    //     price.innerHTML = count * 1000
    // };



}