(() => {
  const header = document.querySelector('header');
  const button = document.querySelector('.header__menu-button');

  button.addEventListener('click', () => {
    header.classList.toggle('header--closed');
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header--light');
    } else {
      header.classList.remove('header--light');
    }
  });
})();
