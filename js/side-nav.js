let openBtn = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");
let sidenav = document.querySelector("nav");
let filter = document.querySelector(".filter");

openBtn.addEventListener("click", function () {
  sidenav.classList.add("show");
  filter.classList.add("show");
  document.body.style.position = "fixed";
  sidenav.style.right = "0";
});

closeBtn.addEventListener("click", function () {
  sidenav.classList.remove("show");
  filter.classList.remove("show");
  document.body.style.position = "";
});