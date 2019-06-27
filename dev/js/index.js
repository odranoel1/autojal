$( document ).ready(function() {

    $( '#home-sidebar' ).sliderPro({
        width: '100%',
        height: 700,
        arrows: false,
        buttons: true,
        waitForLayers: true,
        autoplay: true,
        autoplayDelay: 6000,
        autoScaleLayers: false,
        touchSwipe: false,
        fade: true,
        breakpoints: {
            360: {
                height: 500
            },
            640: {
                height: 300
            }
        }
    });

    $('#cars-featured').owlCarousel({
      nav: true,
      dots: false,
      loop: true,
      responsive: {
        0: {
          nav: false,
          dots: true,
          items: 1
        },
        480: {
          nav: false,
          dots: true,
          items: 2
        },
        992: {
          nav: true,
          dots: false,
          items: 3
        }
      }
    });
    $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

    $('#cars-demo').owlCarousel({
      nav: true,
      dots: false,
      loop: true,
      responsive: {
        0: {
          nav: false,
          dots: true,
          items: 1
        },
        480: {
          nav: false,
          dots: true,
          items: 2
        },
        992: {
          nav: true,
          dots: false,
          items: 3
        }
      }
    });
    $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

    //Open Mobil Menu
    $('.open-menu').click(function(e){
      e.preventDefault();

      $('.mobil').slideToggle('fast');
    });

    // Menu Fixed
    //Menu Fixed
    $(window).scroll(function(){
      var heightMenu = $('.Header').outerHeight(true);

      if ($(this).scrollTop() > 0) {
        $('.Header').addClass('fixed');
        $('body').css('margin-top', (heightMenu) + 'px');
      } else {
        $('.Header').removeClass('fixed');
        $('body').css('margin-top', '0');
      }
  });
});
