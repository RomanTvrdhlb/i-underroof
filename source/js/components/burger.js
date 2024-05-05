import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import vars from '../_vars';

import {toggleClassInArray, toggleCustomClass, removeCustomClass, removeClassInArray, fadeIn, fadeOut, addCustomClass} from '../functions/customFunctions';
const {overlay, burger, mobileMenu, call, areasMenu, areasBtn, toggleButton, dropdownMenu} = vars;

const mobileContent = document.querySelector('.mobile-menu__content');
const contentBtn = document.querySelector('[data-mobile-btn]');
const innerContent = document.querySelector('.mobile-menu__inner');

const mobileMenuHandler = function(overlay, mobileMenu, burger) {
  burger.forEach((btn) => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      toggleCustomClass(mobileMenu);
      toggleClassInArray(burger);
      toggleCustomClass(overlay);

      mobileContent.classList.contains('active') ? removeCustomClass(mobileContent) : '';
      innerContent.classList.contains('active') ? removeCustomClass(innerContent) : '';
      btn.classList.contains('active') ? disableScroll() : enableScroll()
    })
  })
}

const hideMenuHandler = function(overlay, mobileMenu, burger) {
    removeCustomClass(mobileMenu);
    removeClassInArray(burger);
    removeCustomClass(overlay);
    removeCustomClass(mobileContent);
    removeCustomClass(innerContent);
    enableScroll()
}

function contentHandler(btn, menu, innerMenu){
  let flag = false;
  const closeBtn = menu.querySelector('[data-content-close]');
  const submenuBtn = menu.querySelector('[data-submenu-btn]');
  const innerBtnClose = innerMenu.querySelector('[data-inner-close]');
  btn.addEventListener('click', function(e){
    e.preventDefault();
    if(menu){
      addCustomClass(menu, 'active');
      flag = true;
      
      if(flag){
        submenuBtn.addEventListener('click', function(e){
          e.preventDefault();
          addCustomClass(innerMenu, 'active');

          if(innerMenu.classList.contains('active')){
            innerBtnClose.addEventListener('click', function(e){
              e.preventDefault();
              removeCustomClass(innerMenu);
            })
          }
        })
      }

      if(flag){
        closeBtn.addEventListener('click', function(e){
          e.preventDefault();
          removeCustomClass(menu);
          flag = false;
        })
      }
    }
  });


} 

if (overlay) {
  mobileMenuHandler(overlay,mobileMenu,burger);
  contentHandler(contentBtn, mobileContent, innerContent);
  overlay.addEventListener('click', function(e){
    e.target.classList.contains('overlay') ?
    hideMenuHandler(overlay,mobileMenu,burger) : null
  });
}

if(call){
  const btn = document.querySelector('.callback__btn');
  const box = document.querySelector('.callback__list');
 
  btn.addEventListener('click', function(e){
    e.preventDefault();
    toggleCustomClass(btn, 'active');
    toggleCustomClass(box, 'active');
  })
}

if (toggleButton && dropdownMenu) {
  let isHoverMenu = false;
  let closeTimer;

  const fadeInMenu = () => {
      fadeIn(dropdownMenu, 300);
      clearTimeout(closeTimer);
  };

  const fadeOutMenu = () => {
      if (!isHoverMenu) {
          fadeOut(dropdownMenu, 100);
      }
  };

  toggleButton.addEventListener('mouseenter', fadeInMenu);
  toggleButton.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(fadeOutMenu, 100);
  });

  dropdownMenu.addEventListener('mouseenter', () => {
      isHoverMenu = true;
  });

  dropdownMenu.addEventListener('mouseleave', () => {
      isHoverMenu = false;
      fadeOutMenu();
  });
}

  let menuHovered = false;
  let timeoutId;

if (areasMenu && areasBtn) {
  areasBtn.addEventListener('mouseenter', function() {
    if (!areasBtn.classList.contains('active') && !menuHovered) {
      menuHovered = true;
      toggleCustomClass(areasBtn);
      toggleCustomClass(areasMenu);
      fadeIn(areasMenu, 400, 'flex');
      areasMenu.classList.contains('active') ? disableScroll() : enableScroll();

      if (areasMenu.classList.contains('active')) {
        document.addEventListener("click", clickOutsideMenu);
      } else {
        document.removeEventListener("click", clickOutsideMenu);
      }
    }
  });
  
  areasMenu.addEventListener('mouseleave', function() {
    menuHovered = false;
    hoverCloseMenu(areasMenu, areasBtn);
  });

  areasBtn.addEventListener('mouseleave', function() {
    timeoutId = setTimeout(function() {
      fadeOut(areasMenu, 400, 'flex');
      removeCustomClass(areasBtn);
      removeCustomClass(areasMenu);
      areasMenu.classList.contains('active') ? disableScroll() : enableScroll();
      menuHovered = false;
    }, 1500);
  });

  areasMenu.addEventListener('mouseenter', function() {
    menuHovered = true;
    clearTimeout(timeoutId);
  });
}

function hoverCloseMenu(menu, btn) {
  setTimeout(function() {
    if (!menuHovered) {
      fadeOut(menu, 400, 'flex');
      removeCustomClass(btn);
      removeCustomClass(menu);
      menu.classList.contains('active') ? disableScroll() : enableScroll();
    }
  }, 1500);
}

function clickOutsideMenu(event) {
  if (!areasMenu.contains(event.target) && !areasBtn.contains(event.target) && areasMenu.classList.contains('active')) {
    fadeOut(areasMenu, 400, 'flex');
    removeCustomClass(areasBtn);
    removeCustomClass(areasMenu);
    areasMenu.classList.contains('active') ? disableScroll() : enableScroll();
    document.removeEventListener("click", clickOutsideMenu);
    menuHovered = false;
  }
}