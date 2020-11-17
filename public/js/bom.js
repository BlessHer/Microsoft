$(function() {
    /*======右按钮======*/
    $(".you").click(function() {
        nextscroll();
    });

    function nextscroll() {
        var vcon = $(".bg-container");
        var offset = ($(".bg-container li").width()) * -1;
        vcon.stop().animate({ marginLeft: offset }, "slow", function() {
            var firstItem = $(".bg-container ul li").first();
            vcon.find(".game-top").append(firstItem);
            $(this).css("margin-left", "20px");
        });
    };
    /*========左按钮=========*/
    $(".zuo").click(function() {
        var vcon = $(".bg-container");
        var offset = ($(".bg-container li").width() * -1);
        var lastItem = $(".bg-container ul li").last();
        vcon.find(".game-top").prepend(lastItem);
        vcon.css("margin-left", offset);
        vcon.animate({ marginLeft: "0px" }, "slow")
    });
});