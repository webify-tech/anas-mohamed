'use strict';


// Init all plugin when document is ready 
$(document).on('ready', function () {
    // 0. Init console to avoid error
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }


    // 1. Background image as data attribut 
    var list = $('.bg-img');
    for (var i = 0; i < list.length; i++) {
        var src = list[i].getAttribute('data-image-src');
        list[i].style.backgroundImage = "url('" + src + "')";
        list[i].style.backgroundRepeat = "no-repeat";
        list[i].style.backgroundPosition = "center";
        list[i].style.backgroundSize = "cover";
    }
    // Background color as data attribut
    var list = $('.bg-color');
    for (var i = 0; i < list.length; i++) {
        var src = list[i].getAttribute('data-bgcolor');
        list[i].style.backgroundColor = src;
    }


    // 2. Init Coutdown clock
    try {
        // check if clock is initialised
        $('.clock-countdown').downCount({
            date: $('.site-config').attr('data-date'),
            offset: +10
        });
    }
    catch (error) {
        // Clock error : clock is unavailable
        //	console.log("clock disabled/unavailable");
    }

    // 3. Show/hide menu when icon is clicked
    var menuItems = $('.page-menu');
    var menuIcon = $('.menu-icon,#menu-link');
    // Menu icon clicked
    menuIcon.on('click', function () {
        if (menuIcon.hasClass('menu-visible')) {
            menuIcon.removeClass('menu-visible');
        } else {
            menuIcon.addClass('menu-visible');
        }
        if (menuItems.hasClass('menu-visible')) {
            menuItems.removeClass('menu-visible');
        } else {
            menuItems.addClass('menu-visible');
        }
        return false;
    });
    // Hide menu after a menu item clicked
    $(".page-menu a").on('click', function () {
        if (menuItems.hasClass('menu-visible')) {
            menuIcon.removeClass('menu-visible');
            menuItems.removeClass('menu-visible');
        }
        return true;
    });

    // 4. Init Slideshow background 
    var imageList = $('.slide-show .img');
    var imageSlides = [];
    for (var i = 0; i < imageList.length; i++) {
        var src = imageList[i].getAttribute('data-src');
        imageSlides.push({ src: src });
    }
    $('.slide-show').vegas({
        delay: 3000,
        shuffle: false,
        slides: imageSlides,
        //animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
        animation: ['fadeIn']
    });



    var lw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (lw >= 768) { var ldf = 'vertical'; } else { var ldf = 'horizontal'; }

    // 6. Products/Projects/items slider
    var swiper = new Swiper('.items-slide', {
        pagination: '.items-pagination',
        paginationClickable: '.items-pagination',
        nextButton: '.items-button-next',
        prevButton: '.items-button-prev',
        grabCursor: true,
        slidesPerView: '2',
        centeredSlides: false,
        spaceBetween: 64,
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 32
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 32
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 32
            }
        }
    });

    var swiper = new Swiper('.items-slide2', {
        pagination: '.items-pagination2',
        paginationClickable: '.items-pagination2',
        nextButton: '.items-button-next2',
        prevButton: '.items-button-prev2',
        grabCursor: true,
        slidesPerView: '1',
        centeredSlides: false,
        spaceBetween: 64,
        breakpoints: {
            1024: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 32
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 32
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 32
            }
        }
    });

    var swiper = new Swiper('.items-slide3', {
        pagination: '.items-pagination3',
        paginationClickable: '.items-pagination3',
        nextButton: '.items-button-next3',
        prevButton: '.items-button-prev3',
        slidesPerView: '1',
        spaceBetween: 0,
        direction: 'horizontal',

    });
    var swiper = new Swiper('.items-slide4', {
        pagination: '.items-pagination4',
        paginationClickable: '.items-pagination4',
        nextButton: '.items-button-next4',
        prevButton: '.items-button-prev4',
        slidesPerView: '2',
        spaceBetween: 0,
        direction: 'vertical'
    });
    var swiper = new Swiper('.items-slide5', {
        pagination: '.items-pagination5',
        paginationClickable: '.items-pagination5',
        nextButton: '.items-button-next5',
        prevButton: '.items-button-prev5',
        slidesPerView: '1',
        spaceBetween: 0,
        direction: 'horizontal'
    });

    var a = [0, 0, 0, 0, 0, 0, 0, 0];
    var list = $('.bg-img');

    function change_image() {
        // var wdth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // if(wdth<=768){var fld="xs/";}else{var fld="";}
        var fld = "";

        var h = list.length;

        for (i = 0; i <= h; i++) {
            if ($(list[i]).attr('data-image-src')) {
                var src = $(list[i]).attr('data-image-src');
                var newsrc = src.split("_");
            }
            a[i] = a[i] + 1;

            // list[i].style.backgroundImage = "url('" + newsrc[0] +"_0" + a[i] + ".jpg')";
            $(list[i]).css('background-image', "url('" + fld + newsrc[0] + "_0" + a[i] + ".jpeg')")
            if (a[i] >= 3) { a[i] = 0; }
        }
    }
    $(window).ready(function () {
        var wdth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        //   if(wdth<=768){setInterval(function(){  change_image();}, 4000);}
        //   else{setInterval(function(){  change_image();}, 6000);} 
        setInterval(function () { change_image(); }, 4000);

    });
    // 7. Init fullPage.js plugin
    var pageSectionDivs = $('.fullpg .section');
    var headerLogo = $('.header-top .logo');
    var bodySelector = $('body');
    var sectionSelector = $('.section');
    var slideElem = $('.slide');
    var arrowElem = $('.p-footer .arrow-d');
    var pageElem = $('.section');
    var pageSections = [];
    var pageAnchors = [];
    var nextSectionDOM;
    var nextSection;
    var fpnavItem;
    var mainPage = $('#mainpage');
    // Get sections name
    for (var i = 0; i < pageSectionDivs.length; i++) {
        pageSections.push(pageSectionDivs[i]);
    }
    window.asyncEach(pageSections, function (pageSection, cb) {
        var anchor = pageSection.getAttribute('data-section');
        console.log(anchor);
        
        pageAnchors.push(anchor + "");
        cb();
    }, function (err) {
        // Init plugin
        if (mainPage.height()) {
            // config fullpage.js
            mainPage.fullpage({
                menu: '#qmenu',
                anchors: pageAnchors,
                responsiveWidth: 601,
                scrollOverflow: true,
                verticalCentered: true,
                css3: true,
                navigation: true,
                onLeave: function (index, nextIndex, direction) {
                    // Behavior when a full page is leaved
                    arrowElem.addClass('gone');
                    pageElem.addClass('transition');
                    slideElem.removeClass('transition');
                    pageElem.removeClass('transition');

                    nextSectionDOM = sectionSelector[(nextIndex - 1)];
                    nextSection = $(nextSectionDOM);
                    if (nextSection.hasClass('dark-bg')) {
                        bodySelector.addClass('dark-section');
                        headerLogo.addClass('dark-bg');
                    }
                    else {
                        bodySelector.removeClass('dark-section');
                        headerLogo.removeClass('dark-bg');
                    }
                    /* 
                 if(list[index]){ 
                         var src = list[index].getAttribute('data-image-src');
                         var newsrc = src.split("_");
                         a[index] = a[index] + 1;
                         
                         list[index].style.backgroundImage = "url('" + newsrc[0] +"_0" + a[index] + ".jpg')";
                                }
                     if(a[index]>=3){a[index]=0;}  */

                },
                afterLoad: function (anchorLink, index) {
                    // Behavior after a full page is loaded
                    // manage dark bg for active section
                    if ($('.section.active').hasClass('js-left-light')) {
                        bodySelector.addClass('left-light');
                        headerLogo.addClass('dark-bg');
                    } else {
                        bodySelector.removeClass('left-light');
                        headerLogo.removeClass('dark-bg');
                    }

                    //set text value of fpnav
                    /*	fpnavItem = $("#fp-nav ul li a.active");
                if (!fpnavItem.children("span").hasClass("title")) {
                        // Init text content
                        fpnavItem.append('<span class="title">' + $(".section.active .page-title").text() +
                            '</span>')                            				
                    }*/


                    /*  var wdth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      if($("body").hasClass("fp-viewing-home")){ 
                            var img="img/anas-logo.png";
                            $(".light-logo").attr("src",img);
                        }else if(wdth>=800){ 
                            $(".light-logo").attr("src","img/alexpatrinos-blogo.png");
                        }*/

                }
            });

        }
    });
    // Scroll to fullPage.js next/previous section
    $('.s-footer a.down').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('.s-footer a.up').on('click', function () {
        $.fn.fullpage.moveSectionUp();
    });

    /*   
     $("#fp-nav li a").hover(function(){
      if(!$(this).hasClass("active")){
         $(this).addClass("active");
               if (!this.children("span").hasClass("title")) {
               // Init text content
               this.append('<span class="title">' + $(".section.active .page-title").text() +
                   '</span>')
           }}
           
         }, function(){
         
         $(this).removeClass("active");
         
           });*/

});



/*
var modal = document.getElementById("cnt");
var body = document.getElementsByTagName("body");
var btn = document.getElementById("opencnt");
var span = document.getElementsByClassName("wclose")[0];
btn.onclick = function() {
  //modal.style.display = "block";
  //body[0].style.overflow = "hidden";
  $("#cnt").slideDown(500);
}
span.onclick = function() {
    $("#cnt").slideUp(500);
  //body[0].style.overflow = "unset";
}
window.onclick = function(event) {
  if (event.target == modal) {
    $("#cnt").slideUp(500);
  //body[0].style.overflow = "hidden";
  }
}
*/
/*
var modal = document.getElementById("cntvideo");
var body = document.getElementsByTagName("body");
var btn = document.getElementById("openvideo");
var span = document.getElementsByClassName("vclose")[0];
btn.onclick = function() {
  $("#cntvideo").slideDown(500);
}
span.onclick = function() {
    $("#cntvideo").slideUp(500);
}
window.onclick = function(event) {
  if (event.target == modal) {
    $("#cntvideo").slideUp(500);
  }
}*/


function displayLoading () {
    document.querySelector('.loading').classList.add('d-block');
    document.querySelector('.loading').classList.remove('d-none');
  }
  function hideLoading () {
    document.querySelector('.loading').classList.remove('d-block');
    document.querySelector('.loading').classList.add('d-none');
  }
  function displayMessage () {
    document.querySelector('.sent-message').classList.add('d-block');
    document.querySelector('.sent-message').classList.remove('d-none');
  }
  function hideMessage () {
    document.querySelector('.sent-message').classList.remove('d-block');
    document.querySelector('.sent-message').classList.add('d-none');
  }
  function displayError() {
    document.querySelector('.error-message').classList.remove('d-none');
    document.querySelector('.error-message').classList.add('d-block');
  }
  function hideError(error) {
    document.querySelector('.error-message').innerHTML = '';
    document.querySelector('.error-message').classList.remove('d-block');
    document.querySelector('.error-message').classList.add('d-none');
  }
function onSubmit() {
    event.preventDefault();

    var input_name = document.getElementById("name");
    var input_email = document.getElementById("email");
    var input_message = document.getElementById("message");

    if (!input_name.checkValidity()) {
        $("#response-msg").html("*Name Is Required ");
    }
    else if (!input_email.checkValidity()) {
        $("#response-msg").html("*Email Is Required ");
    }
    else if (!input_message.checkValidity()) {
        $("#response-msg").html("*Message Is Required ");
    }
    else {
        $("#response-msg").html("");

        displayLoading();
      var formData = {
          service_id:"service_huhwaft",
          template_id:"template_3joprxm",
          user_id:"f-9SjXE9tHqkyvmJU",
          template_params:{
              name: document.getElementById('name')?.value || '',
              email: document.getElementById('email')?.value || '',
              subject: document.getElementById('subject')?.value || 'Message From My Site Cheif',
              body: document.getElementById('body')?.value || ''
          },
      };
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          body: JSON.stringify(formData) ,
          headers: {'Content-Type': 'application/json'},
        })
          .then((response) => {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error(
                `${response.status} ${response.statusText} ${response.url}`
              );
            }
          })
          .then((data) => {
            if (data.trim() == 'OK') {
              displayMessage();
              const thisForm = document.getElementById("message_form");
              thisForm.reset();
              setTimeout(() =>{
                hideMessage();
              },2000)
            } else {
              throw new Error(
                data
                  ? data
                  : 'Form submission failed and no error message returned from: ' +
                    action
              );
            }
          }).finally(() =>{
            hideLoading();
          })
          .catch((error) => {
            hideLoading();
            displayError();
            setTimeout(() =>{
              hideError();
            },2000)
          });
    }
}

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
        $('.light-logo').addClass("is-sticky");
    }
    else {
        $('.light-logo').removeClass("is-sticky");
    }
});

// Page Loader : hide loader when all are loaded
$(window).ready(function () {
    $('#page-loader').addClass('p-hidden');
    $('.section').addClass('anim');
    $("#videofield").click();
});


// Function that loads recaptcha on form input focus
function reCaptchaOnFocus() {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://www.google.com/recaptcha/api.js?onload=CaptchaCallback&render=explicit'
    head.appendChild(script)

    // remove focus to avoid js error:
    document
        .getElementById('email')
        .removeEventListener('focus', reCaptchaOnFocus);
}
// add initial event listener to the form inputs
document
    .getElementById('email')
    .addEventListener('focus', reCaptchaOnFocus, false);

var CaptchaCallback = function () {
    grecaptcha.render('recapfield', { 'sitekey': '6Lcp3pgdAAAAAJlPctKbBcsd5n1MjpDBoUWqFG4e' });
}

$("#videofield").click(function () {
    var video = $("#videofieldid").get(0);
    video.play();
    //return false;
});