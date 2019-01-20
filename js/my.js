// menu
$(document).ready(function() {
  $(".bar").click(function() {
    $(".topnav").slideToggle("150");
  });
});
// exchanges
$(window).resize(function() {
  if ($(window).width() >= 970) {
    $(".topnav").fadeIn();
  } else {
    $(".topnav").hide();
  }
});
