jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // custom code
  var timerId = countdown(
    new Date(2018, 3, 7, 9),
    function(ts) {
      var firstDigitOfDays, secondDigitOfDays,
      firstDigitOfHours, secondDigitOfHours,
      firstDigitOfMinutes, secondDigitOfDMinutes,
      firstDigitOfSeconds, secondDigitOfDSeconds;

      if(ts.days < 10)
      {
        firstDigitOfDays = 0;
        secondDigitOfDays = ts.days;
      }
      else {
        firstDigitOfDays = Math.round(ts.days / 10);
        secondDigitOfDays = ts.days % 10;
      }
      if(ts.hours < 10)
      {
        firstDigitOfHours = 0;
        secondDigitOfHours = ts.hours;
      }
      else {
        firstDigitOfHours = Math.floor(ts.hours / 10);
        secondDigitOfHours = ts.hours % 10;
      }
      if(ts.minutes < 10)
      {
        firstDigitOfMinutes = 0;
        secondDigitOfMinutes = ts.minutes;
      }
      else {
        firstDigitOfMinutes = Math.floor(ts.minutes / 10);
        secondDigitOfMinutes = ts.minutes % 10;
      }
      if(ts.seconds < 10)
      {
        firstDigitOfSeconds = 0;
        secondDigitOfSeconds = ts.seconds;
      }
      else {
        firstDigitOfSeconds = Math.floor(ts.seconds / 10);
        secondDigitOfSeconds = ts.seconds % 10;
      }

      $('#count-down').html(`<div class="container">
      <div class="row no-gutters">
        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <span class="time-unit">${firstDigitOfDays}</span>
              <span class="time-unit">${secondDigitOfDays}</span>
              <span>:</span>
            </div>
            <div class="col-lg-12">
              <p>days</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <span class="time-unit">${firstDigitOfHours}</span>
              <span class="time-unit">${secondDigitOfHours}</span>
              <span>:</span>
            </div>
            <div class="col-lg-12">
              <p>hours</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <span class="time-unit">${firstDigitOfMinutes}</span>
              <span class="time-unit">${secondDigitOfMinutes}</span>
            </div>
          <div class="col-lg-12">
            <p>minutes</p>
          </div>
        </div>
      </div>
      </div>
      <div class="row no-gutters"><div class="col-lg-12"><p style="font-size: 24px">to Academic Festival</p></div></div></div>`);
    },
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    var bulb = anime({
      targets: '#bulb',
      translateY: -20,
      loop: true,
      direction: 'alternate',
      easing: 'easeInSine'
    });

    var whiteCross = anime({
      targets: '#left-white-cross',
      fill: [
        {value: '#c0d0d2'},
        {value: '#ffd43d'},
        {value: '#fff'},
      ],
      direction: 'alternate',
      duration: 3000,
      loop: true
    });

    var yellowCross = anime({
      targets: ['#left-yellow-cross', '#right-yellow-cross'],
      fill: [
        {value: '#fff'},
        {value: '#c0d0d2'},
        {value: '#ffd43d'}
      ],
      direction: 'alternate',
      duration: 3000,
      loop: true
    });

    var greyCross = anime({
      targets: ['#left-grey-cross', '#right-grey-cross'],
      fill: [
        {value: '#ffd43d'},
        {value: '#fff'},
        {value: '#c0d0d2'}
      ],
      direction: 'alternate',
      duration: 3000,
      loop: true
    });

    var cab = anime({
      targets: '.cab',
      translateX: 1000,
      loop: true,
      duration: 10000,
      direction: 'alternate',
      easing: 'easeInOutCirc',
      delay: 1000,
    });
});
