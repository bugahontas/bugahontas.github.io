$(document).ready(function() {
  $(".card").fadeIn(800);
  $(".content-1").fadeIn(1500);
  
  $(".btn-about").click(function() {
    $(".content-1").fadeOut(300);
    $(".content-2").fadeIn(800);
  })
  
  $(".btn-what").click(function() {
    $(".content-2").fadeOut(300);
    $(".content-3").fadeIn(800);
  })
  
  $(".btn-fix").click(function() {
    $(".content-3").fadeOut(300);
    $(".content-4").fadeIn(800);
  })

  $(".btn-finally").click(function() {
    $(".content-4").fadeOut(300);
    $(".content-5").fadeIn(800);
  })

  $(".btn-back").click(function() {
    $(".content-5").fadeOut(300);
    $(".content-1").fadeIn(800);
  })
  
})