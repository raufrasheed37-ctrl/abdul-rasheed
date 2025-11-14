window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".Navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});


const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".Navbar");
const menuLinks = document.querySelectorAll(".mobile-menu a");


menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});


