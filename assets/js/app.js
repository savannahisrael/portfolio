$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel'),
      $nav = $('nav');

  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $nav.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      $nav.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();


$(window).on('scroll', function () {
  var scroll = $(this).scrollTop();
  if ( scroll > $(window).height() ) {
      $('.scroll-to-top').addClass('active-btn');
  } else {
      $('.scroll-to-top').removeClass('active-btn');
  }
});