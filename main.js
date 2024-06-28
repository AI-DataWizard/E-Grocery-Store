$(document).ready(function () {
  let slides = $(".home .slides-con .slide");
  let index = 0;

  $("#search-btn").click(function () {
    $(".search-form").toggleClass("active");
  });

  $("#cart-btn").click(function () {
    $(".shopping-cart").toggleClass("active");
  });

  $("#login-btn").click(function () {
    $(".login-form").toggleClass("active");
  });

  $("#menu-btn").click(function () {
    $(".header .navbar").toggleClass("active");
  });

  $(window).on("scroll load", function () {
    $(".header .navbar").removeClass("active");
    $(".search-form").removeClass("active");
    $(".shopping-cart").removeClass("active");
    $(".login-form").removeClass("active");
    i = 0;
  });

  $(".slide-next").click(function () {
    $(slides[index]).removeClass("active");
    index = (index + 1) % slides.length;
    $(slides[index]).addClass("active");
  });

  $(".slide-prev").click(function () {
    $(slides[index]).removeClass("active");
    index = (index - 1 + slides.length) % slides.length;
    $(slides[index]).addClass("active");
  });
});
