document.addEventListener('DOMContentLoaded', function() {
  // burger
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = document.querySelectorAll('.nav__link');
  let breaker = -1;

  burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
    burger.setAttribute('aria-expanded', String(!JSON.parse(burger.getAttribute('aria-expanded'))));
    if (breaker) {
      document.querySelector('.header__logo').addEventListener('focus', function() {
        menuLinks[0].focus();
      });
      document.querySelector('.search__btn').addEventListener('focus', function() {
        document.querySelector('.burger--active').focus();
      });
    };
  });

  menuLinks.forEach(element => {
    element.addEventListener('click', function() {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
  });

  // swiper
  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
      slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}'
    },
  });

  // search
  let searchInput = document.querySelector('.search__input');
  let searchBtn = document.querySelector('.header__search-open')
  let searchClose = document.querySelector('.search__close');
  let searchForm = document.querySelector('.search')
  let searchInputText = "";

  searchBtn.addEventListener('click', function() {
    searchForm.classList.add('search--active');
    setTimeout(() => searchInput.value = searchInputText, 600);
    searchInput.focus();
  });
  searchClose.addEventListener('click', function() {
    searchInputText = searchInput.value;
    searchInput.value = "";
    searchForm.classList.remove('search--active');
  });

  // tabs
  let tabsBtn = document.querySelectorAll('.work__steps-btn');
  let tabsContent = document.querySelectorAll('.work__content');

  tabsBtn.forEach(element => {

    element.addEventListener('click', function(e) {

      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(btn => {
        btn.classList.remove('work__steps-btn--active');
      });
      e.currentTarget.classList.add('work__steps-btn--active');

      tabsContent.forEach(item => {
        item.classList.remove('work__content--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('work__content--active');

    });

  });

  // accordion
  const accordion = new Accordion('.faq__list', {
    triggerClass: 'faq__btn',
    panelClass: 'faq__panel',
    activeClass: 'faq__item--active',
    showMultiple: true,
  });

  let faqBtn = document.querySelectorAll('.faq__btn');

  faqBtn.forEach(btn => {
    btn.addEventListener('focus', function() {
      this.closest('.faq__item').classList.add('faq__item--focus');
    });
    btn.addEventListener('blur', function() {
      this.closest('.faq__item').classList.remove('faq__item--focus');
    });
  });

  // footer
  document.querySelector('.form__check-wrapper').addEventListener('click', function() {
    this.classList.remove('form--invalid');
  })
  document.querySelector('.form__check-wrapper').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('form__check').click();
    }
  });

});
