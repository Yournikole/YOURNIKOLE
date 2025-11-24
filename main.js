document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-to-top');

  // Функция: показывать/скрывать кнопку при прокрутке
  function toggleButton() {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  // Функция: плавная прокрутка наверх
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная анимация
    });
  }

  // Слушаем события
  window.addEventListener('scroll', toggleButton);
  btn.addEventListener('click', scrollToTop);

  // Изначально скрываем кнопку
  toggleButton();
});

