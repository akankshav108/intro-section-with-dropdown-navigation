const arrow = {
  down: "./images/icon-arrow-down.svg",
  up: "./images/icon-arrow-up.svg",
};

const hero = {
  desktop: "/images/image-hero-desktop.png",
  mobile: "/images/image-hero-mobile.png",
};

const menu = {
  open: "/images/icon-menu.svg",
  close: "/images/icon-close-menu.svg",
};

const maxMobWidth = 900;

const menuLink = document.querySelectorAll(".drop-link");
const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector("nav");
const filter = document.querySelector(".filter");
const heroImg = document.querySelector(".hero");
let isMenuOpen = false;

menuBtn.style.zIndex = "1000";

const toggleMenu = (target) => {
  let dropOpts = target.nextElementSibling;
  let arrow_img = target.firstElementChild;

  dropOpts.classList.toggle("show");

  if (dropOpts.classList.contains("show")) {
    arrow_img.src = arrow.up;
  } else {
    arrow_img.src = arrow.down;
  }
};

const closeAllDropdowns = () =>{
  menuLink.forEach((target) => {
    let dropOpts = target.nextElementSibling;
    let arrow_img = target.firstElementChild;

    dropOpts.classList.remove("show");
    arrow_img.src = arrow.down;
  });
}

const onOutsideClick = (event) => {
  let isMenu = event.target.classList.contains("drop-link");

  if (!isMenu) {
    closeAllDropdowns();
  } else {
    toggleMenu(event.target);
  }
};

const slideInMenu =() =>{
  nav.classList.add("slideIn");
  nav.classList.remove("slideOut");
  menuBtn.firstElementChild.src = menu.close;
  filter.classList.add("show");
  document.body.style.overflow = "hidden";
  isMenuOpen = true;
}

const slideOutMenu = () =>{
  nav.classList.remove("slideIn");
  nav.classList.add("slideOut");
  menuBtn.firstElementChild.src = menu.open;
  filter.classList.remove("show");
  document.body.style.overflow = "auto";
  isMenuOpen = false;
}

const toggleMenuSideNav = () => {
  if (!isMenuOpen) {
    slideInMenu();
  } else {
    slideOutMenu();
  }
};

const changeHero = () =>{
  if(window.innerWidth < 900){
    heroImg.firstElementChild.src = hero.mobile;
  }
  else{
    heroImg.firstElementChild.src = hero.desktop;
  }
}

const setToDefault = () => {

  changeHero();
  closeAllDropdowns();
  slideOutMenu();
  nav.classList.remove("slideOut");
};

document.addEventListener("click", onOutsideClick);

menuBtn.addEventListener("click", toggleMenuSideNav);

window.addEventListener("resize", setToDefault);




