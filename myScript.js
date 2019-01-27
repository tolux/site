//
$(document).ready(function () {
      $('.first-button').on('click', function () {
            $('.animated-icon1').toggleClass('open');
            $('.logo').slideToggle(800);
      });
});

$(document).ready(function () {
      $(".first-button").on("click", function () {
            $("nav ul").toggleClass("showing");

      });
});

// Scrolling Effect

$(window).on("scroll", function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
            $('.contact-logo').fadeOut();
      }
      else {
            $('nav').removeClass('black');
            $('.contact-logo').fadeIn();
      }
})

$('#animinated-service2 img').css({
      width: '100%',
      height: '100%',
});

$('.contact-logo div img').css({
      width: '100%',
      height: '100%',
});



$('#animinated-service3 img').css({
      width: '100%',
      height: '100%',
});


var myindex = 0;
carousel();

function carousel() {
      var i;
      var x = document.getElementsByClassName('myslide');
      for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
      }
      myindex++;
      if (myindex > x.length) {
            myindex = 1;
      }
      x[myindex - 1].style.display = 'block';
      setTimeout(carousel, 4000)
};