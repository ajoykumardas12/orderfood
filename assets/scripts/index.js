// Get required elements from document
const navItems = document.getElementById("nav-items");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerOpenBtn = document.getElementById("hamburger-open-btn");
const hamburgerCloseBtn = document.getElementById("hamburger-close-btn");
const navLinks = Array.from(navItems.children);

// Hamburger open and close functionality
hamburgerOpenBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu-active");
  navItems.classList.add("nav-items-active");
});

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hamburger-menu-active");
  navItems.classList.remove("nav-items-active");
});

// Close active hamburger menu when clicked on nav links
const closeHamburgerMenu = () => {
  hamburgerMenu.classList.remove("hamburger-menu-active");
  navItems.classList.remove("nav-items-active");
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeHamburgerMenu);
});
