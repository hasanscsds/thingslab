
// Mobile menu dropdown
$("#hamburger").on("click", function() {
   var width = $(window).width();
   if (width < 580) {
     $(".res__nav").toggleClass("active");
   }
 });
 $(".res__nav .nav__item").on("click", function() {
   var width = $(window).width();
   if (width < 580) {
     $(".res__nav").toggleClass("active");
   }
 });

//OWL CAROUSEL
$('.owl-carousel').owlCarousel({
   loop:true,
   nav:false,
   dots: true,
   responsiveClass:true,
   autoplay: true,
   autoplaySpeed: 2000,
   lazyContent: true,
   autoplayHoverPause: true,
   mouseDrag: true,
   touchDrag: true,
   responsive:{
      0:{
         items:1,
      },
      600:{
         items:1,
      },
      1000:{
         items:1,
      }
   }
})

$('features__and__pricing__container .owl-carousel').owlCarousel({

   responsive:{
      0:{
         items:2,
      },
      479:{
         items:2,
         loop:false,
         nav:false,
         dots: false,
         responsiveClass:true,
         autoplay: false,
         lazyContent: true,
         autoplayHoverPause: true,
         mouseDrag: true,
         touchDrag: true,
      },
      1000:{
         items:1,
      }
   }
})