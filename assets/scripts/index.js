// Get required elements from document
const navItems = document.getElementById("nav-items");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerOpenBtn = document.getElementById("hamburger-open-btn");
const hamburgerCloseBtn = document.getElementById("hamburger-close-btn");
const navLinks = Array.from(navItems.children);

// Hamburger open and close functionality
const openHamburgerMenu = () => {
  hamburgerMenu.classList.add("hamburger-menu-active");
  navItems.classList.add("nav-items-active");
};

const closeHamburgerMenu = () => {
  hamburgerMenu.classList.remove("hamburger-menu-active");
  navItems.classList.remove("nav-items-active");
};

hamburgerOpenBtn.addEventListener("click", openHamburgerMenu);

hamburgerCloseBtn.addEventListener("click", closeHamburgerMenu);

// Close active hamburger menu when clicked on nav links

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeHamburgerMenu);
});
