$(function (){
    $('.skills__slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"style="display: block; transform: scale(-1,1)"   width="50px" height="50px" viewBox="0 0 634.975 634.975"  xml:space="preserve"><path d="M283.123,159.091V25.423c0.771-6.686-1.065-13.598-6.232-18.743c-8.975-8.907-23.524-8.907-32.5,0L18.03,254.889c-4.782,4.759-6.822,11.06-6.504,17.292c-0.317,6.232,1.722,12.533,6.504,17.292l225.137,246.849c4.17,5.053,10.221,8.477,17.27,8.477c6.414,0,12.147-2.697,16.272-6.98c0.068-0.047,0.136-0.068,0.204-0.137c5.167-5.121,7.003-12.057,6.232-18.742c0,0,0.385-125.668,0.385-133.396c149.578,0,284.855,107.695,311.711,249.432c18.085-41.564,28.238-87.344,28.238-135.572C623.48,311.457,471.093,159.091,283.123,159.091z M306.194,340.217c-14.845,0-68.443,0.385-68.443,0.385v121.883L64.195,272.181L237.751,81.877v122.586c0,0,56.636-0.589,68.443-0.227c160.048,4.963,271.188,187.221,271.914,272.48C529.201,413.939,400.7,340.217,306.194,340.217z"/></svg></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"style="display: block"                           width="50px" height="50px" viewBox="0 0 634.975 634.975"  xml:space="preserve"><path d="M283.123,159.091V25.423c0.771-6.686-1.065-13.598-6.232-18.743c-8.975-8.907-23.524-8.907-32.5,0L18.03,254.889c-4.782,4.759-6.822,11.06-6.504,17.292c-0.317,6.232,1.722,12.533,6.504,17.292l225.137,246.849c4.17,5.053,10.221,8.477,17.27,8.477c6.414,0,12.147-2.697,16.272-6.98c0.068-0.047,0.136-0.068,0.204-0.137c5.167-5.121,7.003-12.057,6.232-18.742c0,0,0.385-125.668,0.385-133.396c149.578,0,284.855,107.695,311.711,249.432c18.085-41.564,28.238-87.344,28.238-135.572C623.48,311.457,471.093,159.091,283.123,159.091z M306.194,340.217c-14.845,0-68.443,0.385-68.443,0.385v121.883L64.195,272.181L237.751,81.877v122.586c0,0,56.636-0.589,68.443-0.227c160.048,4.963,271.188,187.221,271.914,272.48C529.201,413.939,400.7,340.217,306.194,340.217z"/></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }

            },

        ]
    });
    
    $( ".top__arrow" ).on('click', function(){ 
	    $('.top').fadeOut(); 
	  });
    
    $('a.menu__list-item--link , a.top').on('click', function (event){
       
        var $anchor = $(this)
        $('html, body')
            .stop()
            .animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }),
            {
                duration: 2000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeInOutCubic',
                },
            }

        event.preventDefault()
    })
    $(window).scroll(function() {
        // ???????? ???????????????????????? ?????????????????? ???????????????? ?????????? ?????? ???? 200px
            if ($(this).scrollTop()>200) {
                // ???? ?????????????? ???????????? scrollup ??????????????
                $('.top').fadeIn();
            }
            // ?????????? ???????????? ???????????? scrollup
            else {
                $('.top').fadeOut();
            }
    });    
    
    const mediaQuery = window.matchMedia('(max-width: 800px)')
    if (mediaQuery.matches) {

        $('a.menu__list-item--link , a.top').on('click', function (event){
       
            var $anchor = $(this)
            $('html, body')
                .stop()
                .animate({
                    scrollTop: $($anchor.attr('href')).offset().top-100
                }),
                {
                    duration: 2000,
                    specialEasing: {
                        width: 'linear',
                        height: 'easeInOutCubic',
                    },
                }
    
            event.preventDefault()
        })



        $('.header__burger').on('click', function(event){
            $('.header__burger, .menu').toggleClass('active', 1000);
            $('body').toggleClass('lock');
            $('.header__content-switcher').toggleClass('lock-events', 1000);
            
            $(".header__content-text").toggle("slow");
            $(".header__image").toggleClass('add-padding', 1000);
        });
        
        $('.menu__list-item--link').on('click', function(event){
            $('body').removeClass('lock');
            $('.header__burger, .menu').removeClass('active', 1000);
            $(".header__content-text").toggle("slow");
            $(".header__image").removeClass('add-padding', 1000);
            
            $('.header__content-switcher').removeClass('lock-events', 1000);
        });
      }
})