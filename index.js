$(document).ready(function() {
  $(".card").fadeIn(800);
  $(".content-1").fadeIn(1500);
  $(".btn-about").click(function() {
    $(".content-1").fadeOut(300);
    $(".content-2").fadeIn(800);
  })
  $(".btn-info").click(function() {
    $(".content-2").fadeOut(300);
    $(".content-1").fadeIn(800);
  })
  
})