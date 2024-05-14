
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/Slide1.jpg' },
            { src: 'images/Slide2.jpg' },
            { src: 'images/Slide3.jpg' },
            { src: 'images/Slide4.jpg' },
            { src: 'images/Slide5.jpg' },
            { src: 'images/Slide6.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ],
        delay: 5000,
    });
  });


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

