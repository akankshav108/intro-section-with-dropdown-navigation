let openBtn = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");
let sidenav = document.querySelector("nav");
let filter = document.querySelector(".filter");

openBtn.addEventListener("click", function () {
  sidenav.classList.remove("slideOut");
  sidenav.classList.add("slideIn");
  filter.classList.add("show");
  document.body.style.position = "fixed";
  sidenav.style.right = "0";
});

closeBtn.addEventListener("click", function () {
  sidenav.classList.remove("slideIn");
  sidenav.classList.add("slideOut");
  filter.classList.remove("show");
  document.body.style.position = "";
  sidenav.style.right = "-17em";
});