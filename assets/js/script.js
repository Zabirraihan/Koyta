$(function(){
        
        // nav bar jquery start


    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop()
        if(scroll > 90){
            $('#navbar-main-menu').addClass('main-nav')
        }else{
            $('#navbar-main-menu').removeClass('main-nav')
        }
        
        if(scroll > 600){
            $('#button').show()
        }else{
            $('#button').hide() 
        }
    })

        // nav bar jquery end
        
        //counter js start

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        //counter js end
        // slick jquery start
        $('.client_details').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:'<i class="fas fa-chevron-left  arrow_right1"></i>',
            nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',   
        })
        $('.recent_wrapper_item').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:'<i class="fas fa-chevron-left  arrows1"></i>',
            nextArrow:'<i class="fas fa-chevron-right arrows"></i>', 
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                      }
                },
                {
                    breakpoint: 768,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }

            ]
        })
        $('.logo_wrraper').slick({
            slidesToShow: 4,
            arrows:false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                },
                {
                    breakpoint: 768,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 2
                    }
                  },
                  {
                    breakpoint: 576,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1  
                  }
                }
            ]    
        })
        // slick jquery end

        // back to top

        $('#button').on('click',function(){
            $('html,body').animate({
                scrollTop:0,
            })
        })
        $(window).on('load',function(){
            $('#preloader').fadeOut(1000)
        })
})