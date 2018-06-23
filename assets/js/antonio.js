/*
Copyright (c) 2017 luutaa
------------------------------------------------------------------
[Master Javascript]
Project: Antonio
-------------------------------------------------------------------*/
(function($) {
  "use strict";
  var antonio = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function() {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }
      /*-------------- antonio Functions Calling ---------------*/
      this.WowAnimation();
      this.ScrollHeight();
      this.NavigationLinks();
      this.VideoBanner();
      this.HeaderCarousel();
      this.TeamCarousel();
      this.BlogCarousel();
      this.TestimonialsCarousel();
      this.Portfolio();
      this.FormFocus();
      this.MapToggle();
      this.FancyBox();
      this.PrograssAnimation();
      this.StatisticsAnimation();
      this.BottomTop(); 
      this.GoogleMap();
      this.ContactMailFunction();
      this.Preloader();
    },
    //wow animation
    WowAnimation:function(){
      new WOW().init();
    },
    //scroll event for fixed menu
    ScrollHeight: function() {
      if($('#lt_banner_scroll').hasClass('lt_banner_sectionv2')){
        var scroll_height= $('#lt_banner_scroll div div:nth-child(1)').height();
      }else if($('#lt_banner_scroll').hasClass('lt_banner_section')){
        var scroll_height= $(".lt_header_overlay").height();
      }else{
        var scroll_height= 200;
      }
      
      $(window).on('bind scroll', function(e) {
        if (($(window).scrollTop() > scroll_height && $(window).width() > 660)) {
          $('.lt_top_header').slideUp(300).fadeOut();
          $('.lt_header_scroll').addClass('fixed_menu');
        } else {
          $('.lt_header_scroll').removeClass('fixed_menu');
          $('.lt_top_header').slideDown(300).fadeIn();
        } 
      });
    }, 
    //navigation events
    NavigationLinks: function() {
      $(document).on("scroll", onScroll);
      function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#lt_menu a').each(function () {
          var currLink = $(this);
          if(currLink.context.hash != ''){
             if($(currLink.attr("href")).position() === undefined && $(currLink.attr("href")) === undefined){
             }else if ($(currLink.attr("href")).position().top <= (scrollPos+60) && $(currLink.attr("href")).position().top + $(currLink.attr("href")).height() > scrollPos) {
              $('#lt_menu ul li a').removeClass("active");
              currLink.addClass("active");
               }
             }
          
        });
      }
      $('[data-trigger="scroll"]').on("click", function(b) {
           b.preventDefault();
           b.$target = $(this).attr("href");
           if(!($(b.$target).position() === undefined && $(b.$target) === undefined)){
             $(b.$target).animatescroll({
                padding: 40,
                easing: "easeInOutExpo",
                scrollSpeed: 2E3
             })
          }
       });
    },
    //video banner
    VideoBanner:function(){
      if ( $(window).width() > 767) {  
         $('#videobanner').YTPlayer({
            fitToBackground: true,
            videoId: 'Zv6jbzzBwJY',
            pauseOnScroll: false,
            playerVars: {
              modestbranding: 0,
              autoplay: 1,
              controls: 0,
              height:500,
              showinfo: 0,
              branding: 0,
              rel: 0,
              autohide: 0,
              ratio: 4/3,
              stretch:16/9,
            }
          });
       }
    },
    
    //header carousel
    HeaderCarousel:function(){
      $('.lt_header_banner').owlCarousel({
        margin:0,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        touchDrag : true,
        mouseDrag  : true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:1,
                loop:true
            },
            1000:{
                items:1,
                loop:true
            }
         }
      })
    },
    //team caroysel
    TeamCarousel:function(){
      var owlDiv =  $('.lt_team_slider');
      owlDiv.owlCarousel({
        margin:0,
    loop: $('.lt_team_slider').find('img').length > 1 ? true:false,
        nav:true,
    items:1,
        touchDrag : true,
        mouseDrag  : true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                touchDrag  : false,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
                 
            }
         }
    });
    owlDiv.on('changed.owl.carousel',function(event){
      $('.lt_team_member_detail_block.active').removeClass('active');
      $('.lt_team_member_detail_block:eq('+event.page.index+')').addClass('active');
      });  
    },
    
    //blog carousel
    BlogCarousel:function(){
      $('.lt_blog_carousel').owlCarousel({
        margin:30,
        nav:true,
        touchDrag : true,
        mouseDrag  : true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:2,
                loop:true
            },
            1000:{
                items:3,
                 mouseDrag:true,
                 loop:true
            }
         }
      })
    },
    //testimonials carousel
    TestimonialsCarousel:function(){
      $('.lt_testimonials_carousel').owlCarousel({
        margin:200,
        nav:true,
        touchDrag : true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop:true,
                mouseDrag:true
            },
            600:{
                items:1,
                loop:true,
                mouseDrag:true
            },
            1000:{
                items:1,
                 mouseDrag:false,
                 loop:true,
                 touchDrag : false
            }
         }
      })
    },
    //portfolio
    Portfolio:function(){
      if(jQuery(window).width() < 700){
        $('.lt_mobview_portfolio_nav span').on('click', function(){
          $('.lt_portfolio_list ul').slideToggle();
        });
        $('.lt_portfolio_list ul li a').on('click', function(){
          $('.lt_mobview_portfolio_nav span').html($(this).html());
          $('.lt_portfolio_list ul').slideToggle();
        });
      } 
    },
    //form focus effect
    FormFocus:function(){
      $('.form-control').focus(function () {
        $(this).parent().addClass('focusbox');
      }).blur(function () {
          $(this).parent().removeClass('focusbox');
      });
      $('.lt_subscribe_form_block input').focus(function () {
        $(this).parent().parent().addClass('focusbox');
      }).blur(function () {
          $(this).parent().parent().removeClass('focusbox');
      });
    },
    //map toggle
    MapToggle:function(){
      //map block
      $("#map_open").click(function(){
        //$(".lt_map_content_block").slideToggle();
      });
    },
    //fancybox
    FancyBox:function(){
      $("[data-fancybox]").fancybox({
          // Options will go here
      });
    },
    //progress bar animation
    PrograssAnimation:function(){
      if ($(".lt_wp_loader_inner").length > 0 ){
        $('.lt_wp_loader_inner').appear(function() {
          $('.lt_wp_loader_inner').each(function(){
            var percentage = $(this).attr('data-percentage');
            $(this).animate({'width':percentage+'%'}, 3000);
          });
          $('.lt_workpregress_row span').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
          
              $({ countNum: $this.text()}).animate({
                countNum: countTo
              },
              {
                duration: 3000,
                easing:'linear',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
              }
            });  
          });
        });
      }
    },
    //statistics animation
    StatisticsAnimation:function(){
      $('.lt_static_number_block').appear(function() {
        $('.lt_static_number_block h2').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
        
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
          });  
        });
      });
    },
    //bottom to top
    BottomTop:function(){
      $(function () {
        $('.scrollToTop').bind("click", function () {
            $('html, body').animate({ scrollTop: 0 }, 1200);
            return false;
        });
      });
    },
    //google map
    GoogleMap:function(){
        $(document).on("click","#map_open",function(){  
          $(".lt_map_content_block").slideToggle(function initialize() {    
              // Basic options for a simple Google Map
              var mapOptions = {
                  // How zoomed in you want the map to start at (always required)
                  zoom: 11,
                  // The latitude and longitude to center the map (always required)
                  center: new google.maps.LatLng(40.6700, -73.9400), // New York
                  // How you would like to style the map. 
                  // This is where you would paste any style found on Snazzy Maps.
                  styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#999999"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
              };
              // Get the HTML DOM element that will contain your map 
              // We are using a div with id="map" seen below in the <body>
              var mapElement = document.getElementById('map');
              // Create the Google Map using our element and options defined above
              var map = new google.maps.Map(mapElement, mapOptions);
              // Let's also add a marker while we're at it
              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(40.6700, -73.9400),
                  map: map,
                  title: 'Antonio'
              });
              google.maps.event.addDomListener(window, 'load', initialize);
            });
        }); 
    },
  
  //this script for contact form 
  ContactMailFunction:function(){
    //contact mail function 
    $('.cont_send').on('click', function(e){
      var un=$('#user_name').val();
      var uln=$('#user_lname').val();
      var em=$('#user_email').val();
      var we=$('#website').val();
      var wsub=$('#user_sub').val();
      var meesg=$('#user_msg').val();
      
      $.ajax({
        type: "POST",
        url: "ajaxmail.php",
        data: {
          'username':un,
          'userlname':uln,
          'useremail':em,
          'userwebsite':we,
          'subject':wsub,
          'mesg':meesg,
          },
        success: function(msg) {
          var full_msg=msg.split("#");
          if(full_msg[0]=='1'){
            $('#user_name').val("");
            $('#user_lname').val("");
            $('#user_email').val("");
            $('#website').val("");
            $('#user_sub').val("");
            $('#user_msg').val("");
            $(".form-horizontal").addClass('lt_form_out');
            $(".lt_tks_message").addClass('lt_msg_display');
			$("#err").fadeOut();
          }
          else{
            $('#user_name').val(un);
            $('#user_lname').val(uln);
            $('#user_email').val(em);
            $('#website').val(we);
            $('#user_sub').val(wsub);
            $('#user_msg').val(meesg);
            $('#err').html( full_msg[1] );
          }
        }
      });
      e.preventDefault();
    });
  
  }, 
    // site preloader 
    Preloader:function(){
      $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
      });
    },
  };
antonio.init();
})(jQuery);