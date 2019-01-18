$(document).ready(function() {

    $('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });

  // typing animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
    
  })(jQuery);

  $("#holder").writeText(".. impossible is nothing.");
  $(".hover").mouseleave(function() {
    	$(this).removeClass("hover");
  		});

});

$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});




   