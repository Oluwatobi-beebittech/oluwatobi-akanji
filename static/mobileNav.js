const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNavBtnIcon = document.getElementById("mobile-nav-btn-icon");
const mobileNav = document.getElementById("mobile-nav");
const topBar = document.getElementById("top-bar");

mobileNavBtn.onclick = function () {
  mobileNav.classList.toggle("hidden");
  mobileNavBtnIcon.classList.toggle("fa-bars");
  mobileNavBtnIcon.classList.toggle("fa-times");
  if (topBar !== null) {
    topBar.classList.toggle("w-screen");
    topBar.classList.toggle("w-85vw");
  }
};
