const baseUrl = 'http://localhosr:8088';

(function() {
    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getProducts`,

        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
})