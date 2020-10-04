$(document).ready(function () {
    // Back top function
    var backTopBtn = $("#BackTop");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        backTopBtn.addClass("show");
      } else {
        backTopBtn.removeClass("show");
      }
    });
  
    backTopBtn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  });