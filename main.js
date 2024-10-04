const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // Prevent default behavior
      const targetId = this.getAttribute('href');  // Get the target section
      document.querySelector(targetId).scrollIntoView({  // Scroll smoothly
        behavior: 'smooth',
        block: 'start'
      });
      navLinks.classList.remove("open");  // Close the menu after click
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  });
  window.addEventListener("click", function(event) {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
//   const themeToggleBtn = document.getElementById("theme-toggle");

//   themeToggleBtn.addEventListener("click", () => {
//     document.documentElement.classList.toggle("dark-mode");  // Toggle the class
//     const isDarkMode = document.documentElement.classList.contains("dark-mode");
//     themeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";  // Change button text
//   });
//   const menuBtn = document.getElementById("menu-btn");
//   const navLinks = document.getElementById("nav-links");
//   const menuBtnIcon = menuBtn.querySelector("i");
//   const themeToggleBtn = document.getElementById("theme-toggle");
//   const body = document.body;
  
  // Toggle menu on click
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  
  // Close nav menu when clicking on links
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
  
  // Dark Mode Toggle
  themeToggleBtn.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
  
  
  