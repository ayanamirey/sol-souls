$(function () {
  $('.slider__wrapper').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: document.querySelector('#slick-next'),
    prevArrow: document.querySelector('#slick-prev'),
  });

  window.onscroll = function () {
    myFunction()
  };
  const header = document.getElementById("navigation");
  const sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  $(function () {
    $('.faq__item-question').on('click', toggleItem);
  });

  function toggleItem() {
    $('.faq__item-answer').not($(this).next());
    $(this).toggleClass("active");
  }

  const menuButton = document.querySelector('.menu-container')
  if (menuButton) {
    menuButton.addEventListener('click', event => {
      event.currentTarget.classList.toggle('is-menu-open')
    })
  }

  $('.menu-container').click(function () {
    $('.header__wrapper').toggleClass('active');
  });

})
new WOW().init();