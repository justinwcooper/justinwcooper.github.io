$(document).ready(function() {
  $(".intro")
    .hide()
    .fadeIn(2000);
  $(window).scroll(function() {
    $(".fade").each(function(i) {
      var bottom_of_object =
        $(this).position().top + ($(this).outerHeight() - 500);
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 3000);
      }
    });
  });
});
