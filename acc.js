$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function() {
            
        scrollOffset = $(this).scrollTop();

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
    });


    $("[data-slider]").slick({
        infinite: true, 
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});