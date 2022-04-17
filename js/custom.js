$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:false,
      margin:30,
      nav:true,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          800:{
              items:3
          }
      }
  })
});

