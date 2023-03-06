

const burger = document.querySelector('.menu');
const burgerContainer = document.querySelector('.burger-container');
const body = document.querySelector("body")

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerContainer.classList.toggle('burger-container-is-hidden');
  body.classList.toggle('no-scroll');
});
