var spiraling = false;
var rotation = 0;
$(function() {

  var WIN = $(window);
  var BODY = $("body");
  var sections = $('.js-section');
  var spiral = $('.js-spiral')

  var _winW;
  var _winH;
  var smallScreen;
  var landscape;
  var aspect = .618033;
  var axis = .7237;
  var spiralOrigin;
  var colorsArray = [];
  var bgColorsArray = [];
  var sectionCount = sections.length;
  var currentSection = 0;
  var currentSectionName;
  var touchStartY = 0;
  var touchStartX = 0;
  var moved = 0;
  var animRAF;
  var animating = false;
  var isTouchDevice;
  var showLineTimeout;
  var accessible = false;

  var mobileSafari;

  var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = userAgent.indexOf('safari') != -1 && userAgent.indexOf('chrome') == -1,
      firefox = userAgent.indexOf('firefox') != -1 || userAgent.indexOf('mozilla') == -1,
      ios = /iphone|ipod|ipad/.test( userAgent ),
      linux = userAgent.indexOf('linux') != -1,
      windows = userAgent.indexOf('windows') != -1;


  if (firefox) {
    BODY.addClass('is-firefox');
  }
  if( ios ) {
      safari = true;
      if ( !standalone && safari ) {
          mobileSafari = true;

      } else if ( standalone && !safari ) {
          // STANDALONE

      } else if ( !standalone && !safari ) {
          // UIWEBVIEW

      };
  }

  setTimeout(function(){
    $('.js-overlay ').css({
      display: 'none'
    })
  },5000)

  WIN.on('touchstart',function(){
    isTouchDevice = true;
  })

  resizeHandler();

// EVENTS
/////////

  // UTIL EVENTS
  WIN.on('resize',resizeHandler);

  WIN.on('mousewheel', function(e) {
    if (!accessible) {
      var deltaY = e.deltaY;
      if (windows || linux) {
        deltaY = e.deltaY * 5;
      }
      moved = -deltaY || 0;
      rotation += moved/-10; // scroll amount
      cancelAnimationFrame(animRAF);
      animateScroll((currentSection + 1) * -90,rotation)
      console.log("scrolled");
      rotation = trimRotation();
      if (!BODY.hasClass('is-gallery')) {
        e.preventDefault();
        startScrollTimeout()
        cancelAnimationFrame(animRAF);
        scrollHandler();
      }
    }
  });

  WIN.on('touchstart', function(e) {
    if (!accessible) {
      var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
      moved = 0;
      touchStartX = touch.pageX;
      touchStartY = touch.pageY;
      cancelAnimationFrame(animRAF);
    }
  })
  WIN.on('touchmove', function(e) {
    if (!accessible) {
      if (!BODY.hasClass('is-gallery')) {
        e.preventDefault()
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        moved = ((touchStartY - touch.pageY)+(touchStartX - touch.pageX)) * 3;
        touchStartX = touch.pageX;
        touchStartY = touch.pageY;
        rotation += moved/-10;
        rotation = trimRotation();
        startScrollTimeout();
        cancelAnimationFrame(animRAF);
        scrollHandler()
        cancelAnimationFrame(animRAF);
        animateScroll((currentSection + 1) * -90,rotation)
      }
    }
  });
  WIN.on('touchend', function(e) {
    if (!accessible) {
      animateScroll()
    }
  })
  WIN.on('scroll',function(e) {

  })
  WIN.on('mousemove',mousemoveHandler)

  WIN.on('keydown',function(e) {
    if (e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32) {
      cancelAnimationFrame(animRAF);
      animateScroll((currentSection + 1) * -90,rotation)
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      cancelAnimationFrame(animRAF);
      animateScroll((currentSection - 1) * -90,rotation)
    } else if ($('.mc-field-group input[name="EMAIL"]').is(':focus')) {
      console.log('focus')
    } else {
      $('.js-arc').css({
        display: 'block'
      })
    }
    scrollHandler()
  })
  WIN.on('keyup',function(e){
    $('.js-arc').css({
      display: 'none'
    })
  })

  $('#canvas').on('click',function(){
    clearTimeout(showLineTimeout)
    animateScroll(0,rotation)
  })

  $('.js-skip').on('click',function(){
    if (!accessible) {
      accessible = "somewhat";
      BODY.addClass('is-more-accessible')
      $('.js-accessible').text('less')
    } else {
      accessible = false;
      $('.js-accessible').text('more')
      BODY.removeClass('is-more-accessible')
      resizeHandler()
    }
  })

  $('.js-scroll').on('click',function(e){
    animateScroll((currentSection + 1) * -90,rotation)
    e.stopPropagation()
  })
  sections.on('click',function() {
    cancelAnimationFrame(animRAF)
    animateScroll($(this).index() * -90,rotation);
  })

  $('.js-gallery-description-box').on('click',function(e) {
    e.stopPropagation()
  })

  $('.js-project-cta').on('click', function(e) {
    if ($(this).parent().parent().hasClass('active')) {
      e.stopPropagation()
      document.body.scrollTop = 0;
      BODY.addClass('is-gallery');
      $('.js-gallery-description').html($('.js-section.active .js-description').html())
      $('.js-gallery-title').html($('.js-section.active .js-section-title').html())
      moveCloseIcon(e);
      $('.js-gallery img').attr('src','')
      for (var i=1;i<=4;i++) {
        $('.js-gallery img').eq(i-1).attr('src','ui/assets/images/projects/' + currentSectionName + i + '.jpg')
      }
    }
  })
  var viewInterval;
  $('.js-project-cta').on('mouseenter',function(){
    var i = 0;
    var text = "Open";
    var viewText = $('.js-view-text', this)
    viewText.text('');
    clearInterval(viewInterval)
    viewInterval = setInterval(function(){
      if (i > text.length) {
        clearInterval(viewInterval)
      } else {
        viewText.text(viewText.text() + text.substr(i,1))
      }
      i++;
    },60)
  })
  $('.js-project-cta').on('mouseleave',function(){
    var i = 0;
    var text = "View";
    var viewText = $('.js-view-text', this)
    viewText.text('');
    clearInterval(viewInterval)
    viewInterval = setInterval(function(){
      if (i > text.length) {
        clearInterval(viewInterval)
      } else {
        viewText.text(viewText.text() + text.substr(i,1))
      }
      i++;
    },60)
  })
  $('.js-gallery').on('click', function() {
    BODY.removeClass('is-gallery');
  })
  $('.js-close-icon').on('click', function() {
    BODY.removeClass('is-gallery');
  })

// FUNCTIONS
////////////
  function animateScroll(targR,startR,speed) {
    if (!accessible) {
      var distance = startR - targR;
      var mySpeed = speed || .2;
      if (((targR || Math.abs(targR) === 0) && Math.abs(targR - rotation) > .1) || Math.abs(moved) > 1) {
        if (targR || Math.abs(targR) === 0) {
          rotation += mySpeed * (targR - rotation);
        } else {
          moved *= .98;
          rotation += moved/-10;
        }
        rotation = trimRotation();
        scrollHandler();
        animRAF = requestAnimationFrame(function(){
          animateScroll(targR,startR,speed)
        });
      } else if (targR || Math.abs(targR) === 0) {
        cancelAnimationFrame(animRAF)
        rotation = targR;
        rotation = trimRotation();
        scrollHandler();
      }
    }
  }
  function scrollHandler() {
    if (!accessible) {
      requestAnimationFrame(function(){
        var scale = Math.pow(aspect,rotation/90);
        currentSection = Math.min(21,Math.max(-16,Math.floor((rotation-30)/-90)));
        if (currentSection < 20 && currentSection > -15) {
          spiral.css({
            transform: 'rotate(' + rotation + 'deg) scale(' + scale + ')',
          })
          $('.js-dot').removeClass('op-100');
          $('.js-dot').eq(currentSection).addClass('op-100')
          var currentNum = currentSection + 1;
          if (currentNum < 1 || currentNum > 13) {
            currentNum = "LOST";
          }
          $('.js-current').text(currentNum);
          currentSectionName = sections.eq(currentSection).data('project')
          var bg = bgColorsArray[currentSection-1]
          var color = colorsArray[currentSection-1]
          BODY.css({
            backgroundColor: color,
            color: bg
          })
          $('.js-close-bg').css({
            fill: color,
          })
          $('.js-arc').css({
            backgroundColor: color,
          })
          $('.js-close-lines').css({
            fill: bg,
          })
          $('.js-eye-pupil').css({
            fill: bg
          })
          $('.js-eye-retina').css({
            fill: color
          })
          $('.js-eye-lid').css({
            fill: color
          })
          $('.js-section-title-word span').css({
            transitionDelay: 0,
            transition: 0
          })
          $('.js-gallery-image').css({
            background: color
          })
          $('.js-dots').css({
            color: color
          })
          $('.js-ask').css({
            color: bg,
            background: color
          })
          sections.css({
            color: color
          })
          $('.js-view-icon').css({
            background: color,
            color: bg
          })
          $('.js-view-icon svg rect').css({
            stroke: bg
          })
          $('.js-view-icon svg line').css({
            stroke: bg
          })
          $('.js-view-icon svg polyline').css({
            stroke: bg
          })
          $('.js-nav').css({
            color: color
          })
          $('.js-nav svg path').css({
            fill: color
          })
          for (var i=0;i<sectionCount;i++) {
            if (i - currentSection < -1) {
              sections.eq(i).css({
                display: 'none'
              })
            } else {
              sections.eq(i).css({
                display: 'block'
              })
            }
            sections.eq(i).css({
              background: bg,
              // transitionDelay: (i-currentSection)/20 + 's'
            })
          }
          sections.removeClass('active')
          sections.eq(currentSection).addClass('active')
        }
        $('.js-message').css({
          zIndex: 10
        })
        if (currentSection < 0) {
          spiraling = 'white';
        } else if (currentSection === sectionCount - 1 && smallScreen) {
          $('.js-message').css({
            zIndex: 500
          })
        } else if (currentSection > sectionCount - 1) {
          spiraling = 'black';
          spiral.css({
            pointerEvents: 'none'
          })
        } else {
          spiraling = false;
          spiral.css({
            pointerEvents: 'auto'
          })
        }
      })
    }
  }
  function trimRotation() {
    return Math.max(-1500, Math.min(1200, rotation))
  }
  function moveCloseIcon(e) {
    if (!smallScreen) {
      $('.js-close-icon').css({
        transform: 'translate3d(' + Math.floor(e.pageX - 24) + 'px,' + Math.min($('.js-gallery-description-box').offset().top - 30 - BODY.scrollTop(),Math.floor(e.pageY - BODY.scrollTop() - 24)) + 'px,0)',
        right: 'auto'
      })
    }
  }

  function mousemoveHandler(e) {
    if (!accessible) {
      if (BODY.hasClass('is-gallery') && !smallScreen) {
        moveCloseIcon(e);
      } else {
        var currentSectionEl = $('.js-section.active');
        var retina = $('.js-eye-retina', currentSectionEl)
        var pupil = $('.js-eye-pupil', currentSectionEl)
        var highlight = $('.js-eye-highlight', currentSectionEl)
        var lid = $('.js-eye-lid', currentSectionEl)
        if (retina.offset()) {
          retina.css({
            transform: 'translate3d(' + (1-e.pageX/retina.offset().left)*-6 + 'px,' + (1-e.pageY/retina.offset().top)*-6 + 'px,0)'
          })
          pupil.css({
            transform: 'translate3d(' + (1-e.pageX/retina.offset().left)*-7 + 'px,' + (1-e.pageY/retina.offset().top)*-7 + 'px,0)'
          })
          highlight.css({
            transform: 'translate3d(' + (1-e.pageX/retina.offset().left)*-2 + 'px,' + (1-e.pageY/retina.offset().top)*-2 + 'px,0)'
          })
          lid.css({
            transform: 'scaleY(' +  Math.abs(1+Math.max(0,(1-Math.abs(e.pageY/retina.offset().top))*.2)) + ')'
          })
        }
      }
    }
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.innerWidth;
    _winH = window.innerHeight;
    smallScreen = _winW < 960;
    landscape = _winH < _winW;
    if (!accessible) {
      buildSpiral()
    }
  }
  function buildSpiral() {
    spiralOrigin = Math.floor(_winW * axis) + 'px ' + Math.floor(_winW * aspect * axis) +'px';
    var sectionOrigin = Math.floor(_winW * axis) + 'px ' + Math.floor(_winW * aspect * axis) +'px';
    var w = _winW * aspect;
    var h = _winW * aspect;
    if (smallScreen && !landscape) {
      spiralOrigin = Math.floor((_winW/aspect) * aspect * (1 - axis)) +'px ' + Math.floor((_winW/aspect) * axis) + 'px ';
      sectionOrigin = Math.floor((_winW/aspect) * aspect * (1 - axis)) +'px ' + Math.floor((_winW/aspect) * axis) + 'px ';
      w = _winW;
      h = _winW;
    }
    var translate = '';
    if (safari || firefox) {
      translate = 'translate3d(0,0,0)'
      $('svg').css({
        transform: 'translate3d(0,0,0.0001px) scale(1)',
        backfaceVisiblity: 'hidden',
      })
      $('.js-view-icon').css({
        transform: 'translate3d(0,0,0)',
        backfaceVisiblity: 'hidden'
      })
    }
    spiral.css({
      transformOrigin: spiralOrigin,
      backfaceVisiblity: 'hidden'
    })
    $('.js-total').text(sectionCount)

    sections.each(function(i){
      if ($('.js-dot').length < sectionCount) {
        var dot = $('.js-dot').eq(0).clone()
        $('.js-dots').append(dot)
      }
      var myRot = Math.floor(90*i);
      var scale = Math.pow(aspect, i);
      $(this).css({
        width: w,
        height: h,
        transformOrigin: sectionOrigin,
        backfaceVisiblity: 'hidden',
        transform: 'rotate(' + myRot + 'deg) scale(' + Math.pow(aspect, i) + ') ' + translate
      })
      if (i > 0 && bgColorsArray.length < sectionCount) {
        var bg = $(this).css('backgroundColor')
        bg = bg.substr(0, bg.indexOf(')') + 1)
        var color = $(this).css('color')
        colorsArray.push(color);
        bgColorsArray.push(bg);
        $(this).css({
          backgroundColor: bgColorsArray[0],
          color: colorsArray[0]
        })
      }
    })
    scrollHandler();
    BODY.addClass('is-in')
  }

  function startScrollTimeout () {
    clearTimeout(showLineTimeout)
    if (currentSection > -1 && currentSection < sectionCount) {
      showLineTimeout = setTimeout(function(){
        cancelAnimationFrame(animRAF);
        animateScroll(currentSection * -90,rotation,.15);
      },200);
    }
  }

  var Membership = function(email, callback) {
    $.ajax({
      type: "POST",
      url: '//www.narrowdesign.com/scripts/mailchimp-one.php',
      data: {email: email},
      success: function(data) {
        if (data && data.title === "Member Exists") {
          $('.mc-field-group input[name="EMAIL"]').val('ALREADY SIGNED UP')
        } else if (data && data.status === 400) {
          $('.mc-field-group input[name="EMAIL"]').val('ERROR 🤔')
        } else if (data && data.status !== 400) {
          $('.mc-field-group input[name="EMAIL"]').val('OK, FINE')
        }
        $('.mc-field-group input[name="EMAIL"]').addClass('bam');
        setTimeout(function(){
          $('.mc-field-group input[name="EMAIL"]').val('')
          $('.mc-field-group input[name="EMAIL"]').removeClass('bam');
        },5000)
      },
      error: function(data) {
        console.log('error')
        //if (data && data.status !== 400)
        $('.mc-field-group input[name="EMAIL"]').val('ERROR 🤔')
        if (data && data.title === "Member Exists") {
          $('.mc-field-group input[name="EMAIL"]').val('ALREADY SIGNED UP')
        }
        $('.mc-field-group input[name="EMAIL"]').addClass('bam');
        setTimeout(function(){
          $('.mc-field-group input[name="EMAIL"]').val('')
          $('.mc-field-group input[name="EMAIL"]').removeClass('bam');
        },5000)
      },
      dataType: 'json'
    });
  }

  Membership.validateEmail = function(val) {
    var valid = val.indexOf('@') != -1 && val.lastIndexOf('.') > val.indexOf('@') + 1 && val.substr(val.lastIndexOf('.') + 1).length > 1;
    return valid;
  }

  // check if specific email is subscribed, or if any subscription is there at all
  Membership.check = function(email) {
    if (email)
      return localStorage['mailchimp-subscription'] == email;
    else
      return localStorage['mailchimp-subscription'];
  }

  // triggered when MC form is submitted,
  // overrides default action so browser does not navigate away
  Membership.onSubmit = function(event) {
    var email = $('input[name="EMAIL"]', this);
    if (Membership.validateEmail(email.val())) {
      email.removeClass('is-error');
      Membership(email.val(), function() {
        $(document.body).addClass('is-subscribed')
        Membership.onSuccess(email.val(), true);
      })
    } else {
      email.addClass('is-error')
    }
    return false;
  }

  Membership.initialize = function() {
    // add css class when this browser has subscribed before
    // var email = Membership.check();
    // if (email) {
    //   // $(document.body).addClass('is-subscribed')
    //   // Membership.onSuccess(email);
    // }

    // there are multiple forms on the page
    $('form[id="mc-embedded-subscribe-form"]').each(function() {

      // listen for form submission
      $(this).submit(Membership.onSubmit);
    })
  }
  Membership.initialize();
})
