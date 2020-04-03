//dar clic en la burger se abre el sub menu
$(document).ready(function() {

    $(".nav-icon").click(function() {
        $(".full-nav").addClass("open");
    });

    //dar clic en la burger se cierra sub menu
    $(".nav-close").click(function() {
        $(".full-nav").removeClass("open");
    });

    // la barra de navegacion se mantiene al hacer scroll
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }

    });

    //Poner los iconos de redes sociales en vertical
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        speed: 1200,

    });



    //hacer trabajar a las flechas de las cards que se vea un buen efecto de cards
    if ($(".swiper-container").hasClass("team-member-slider")) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            allowTouchMove: true,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slodeShadows: false
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide",
                }
            }


        });

    }

    //cuando se da clic sobre la imagen el plug permite manejar esa imagen
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    //hacer funcionar al blog con los plugins 
    $("#news-slider").owlCarousel({

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        navigationText: false,
        autoPlay: true

    });

});