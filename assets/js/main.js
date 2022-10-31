$(document).ready(function() {
    $("a").on('click', function(event) {
        $("li").removeClass('activ');
        $(this).parent('div').parent('li').addClass('activ');
    })
    $('.about-car').owlCarousel({
        rtl: true,
        margin: 10,
        dots: true,
        loop: true,
        items: 1,
        autoplay: true,
    })
    $('.owl-carousel').owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.foot').click(function(e) {
        e.preventDefault();
        $(".foot").parent().removeClass('red');
        $(this).parent().addClass('red');
    })
});