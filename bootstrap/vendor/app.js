// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 1000, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 1000);
    });
});

 //*****************************
    // Match Height Functions
    //*****************************
    $('.matchheight').matchHeight();

     //*****************************
    // top to bottom
    //*****************************