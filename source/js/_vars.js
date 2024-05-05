export default {
  activeMode: 'active-mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  header: document.querySelector("header"),
  burger: document.querySelectorAll('.burger'),
  mobileMenu: document.querySelector('.mobile-menu'),
  toggleButton: document.querySelector('[data-menu-btn]'),
  dropdownMenu: document.querySelector('.header-menu'),
  overlay: document.querySelector('[data-overlay]'),
  timers: document.querySelectorAll('.timer'),
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll('[data-btn-modal]')],
  innerButtonModal: [...document.querySelectorAll('[data-btn-inner]')],
  ratingSliders:document.querySelectorAll('.rating-slider'),
  aboutSliders:document.querySelectorAll('.about-slider'),
  areasSliders:document.querySelectorAll('.areas-slider'),
  mainSliders:document.querySelectorAll('.main-slider'),
  colorsSliders:document.querySelectorAll('.colors-slider'),
  cardsSliders:document.querySelectorAll('.cards-slider'),
  chooseSliders:document.querySelectorAll('.choose-slider'),
  gallerySliders:document.querySelectorAll('.gallery-slider'),
  servicesSliders:document.querySelectorAll('.services-slider'),
  call:document.querySelectorAll('.callback'),
  areasMenu:document.querySelector('.areas-menu'),
  areasBtn:document.querySelector('[data-area]'),
}





