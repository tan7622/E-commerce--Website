const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

$(function () {

  var wrapper = $('.wrapper');
  var windowObj = $(window);

  function decreaseWrapper () {
    wrapper.addClass('small');
  }

  function increaseWrapper () {
    wrapper.removeClass('small');
  }

  windowObj.scroll(function () {
    if ( $(this).scrollTop() + $(this).height() > wrapper.outerHeight() ){
      decreaseWrapper();
    } else {
      increaseWrapper();
    }
  });


  $('html').on('click', '.small', function () {
    $('html, body').animate({
      scrollTop: wrapper.outerHeight() - windowObj.height()
    }, 500);
  });

});

