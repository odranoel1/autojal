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

    function menuHome() {
      var headerTag = $('header');
      for (var i = 0; i < headerTag.length; i++) {
        var eq = headerTag.eq(i);

        var getClass = headerTag.eq(i)[0].className;
        var getLength = getClass.length;

        var mediaquery = window.matchMedia("(min-width: 769px)");

        if (mediaquery.matches) {
          if (getClass.length < 7 && $('header').hasClass('Header-home')) {
            // console.log('success');
            eq.addClass('d-none');
          } else {
            // console.log('wrong');
          }
        } else {
          eq.removeClass('d-none');
        }
      }
    }

    menuHome();

    $(window).resize(function() {
      menuHome();
    });

    $( window ).scroll(function() {
      var headerTag = $('header');
      for (var i = 0; i < headerTag.length; i++) {
        var eq = headerTag.eq(i);

        var getClass = headerTag.eq(i)[0].className;

        var heightHeader = eq.outerHeight(true);
        var nextElement = eq.next();

        if($(this).scrollTop() > 10){
          //inHome
          if (headerTag.hasClass('Header-home')) {
            if (getClass.length > 13) {
              eq.addClass('d-none');
            } else {
              eq.addClass('fixed');

              var mediaquery = window.matchMedia("(min-width: 769px)");

              if (mediaquery.matches) {
                eq.removeClass('d-none');
              }
            }
          }
          //outHome
          else {
            nextElement.css('margin-top', (heightHeader) + 'px');
            if (getClass.length <= 13) {
              eq.addClass('fixed');
            }
          }
        } else {
          //inHome
          if (headerTag.hasClass('Header-home')) {
            if (getClass.length > 13) {
              eq.removeClass('d-none');
            } else {
              eq.removeClass('fixed');

              var mediaquery = window.matchMedia("(min-width: 769px)");

              if (mediaquery.matches) {
                eq.addClass('d-none');
              }
            }
          }
          //outHome
          else {
            nextElement.css('margin-top', 'auto');
            if(getClass.length <= 13) {
              eq.removeClass('fixed');
            }
          }
        }
      }
    });

    // $('.radio label').on("click", function(){
    //
    // });

    // var agencies = $('.radio .select-radio');
    // agencies.eq(0).addClass('isActive');
    //
    // $('.radio .select-radio input[type="radio"]').click(function(){
    //
    //   if (agencies.eq(0).hasClass('isActive')) {
    //     agencies.eq(0).removeClass('isActive');
    //   }
    //
    //   if (true) {
    //
    //   }
    //
    //   // console.log(agencies);
    //   // for (var i = 0; i < 3; i++) {
    //   //   if (agencies.eq(i).hasClass('isActive')) {
    //   //     agencies.eq(i).removeClass('isActive');
    //   //   } else {
    //   //     agencies.eq(i).addClass('isActive');
    //   //   }
    //   // }
    //
    //   // if($(this).prop("checked") == true){
    //   //   alert("Checkbox is checked.");
    //   //   // agencies.eq(0).removeClass('isActive');
    //   // }
    // });

    // radio = $('.select-radio input[type="radio"]')
    //
    // $('.select-radio').click(function() {
    //   if(radio.prop('checked')){
    //     alert("Checkbox is checked.");
    //   }
    // })
    //
    // var test = $('.select-radio input[type="radio"]').click(function(){
    //   if($(this).attr('checked')){
    //     alert("Checkbox is checked.");
    //   }
    // });
    // console.log(test);
    // $('.select-radio').on('change', function() {
    //
    //   if ($('input[name=optradio]:checked')) {
    //     $(this).addClass('isActive');
    //   }
    //
    //   if ($('input[name=optradio]')) {
    //     $(this).addClass('test');
    //   }
    //
    //   // var radio = $('input[name=optradio]:checked', '.form-request-prod');
    //   //
    //   // var label = $('.select-radio input[name=optradio]:checked');
    //   //
    //   // label.addClass('isActive');
    // });

    // Product ZOOM & Change beetwen thumbnail
    $(".img-detail-link").click( function(e) {
       e.preventDefault();
       var src = $(this).attr('data-src');

       $("#img-detail").attr('src',src);
       $(".img-zoom").attr('href',src);

       $("#img-detail").magnify();
    });

    $("#img-detail").magnify();

});
