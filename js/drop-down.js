let btn = document.getElementsByClassName("drop-link");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let element = this.nextElementSibling;
    let dropImg = this.querySelector("i");
    if (
      element.style.display === "none" ||
      element.style.display === ""
    ) {
      element.style.display = "block";
      dropImg.classList.toggle("fa-angle-down");
      dropImg.classList.add("fa-angle-up");
    } else {
      element.style.display = "none";
      dropImg.classList.remove("fa-angle-up");
      dropImg.classList.add("fa-angle-down");
    }
  });
}