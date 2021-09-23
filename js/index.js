const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelectorAll(".navbar > a");
const menuBar = document.querySelector("#menu-bars");
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector(".search-form");
const closeSearch = document.querySelector(".close");

// responsive navbar
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  navbarMenu.forEach((e) => {
    e.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuBar.classList.remove("fa-times");
    });
  });
});

// search bar
searchIcon.addEventListener("click", () => {
  searchForm.classList.add("active");
});
closeSearch.addEventListener("click", () => {
  searchForm.classList.remove("active");
});

// slide----------------
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnineraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnineraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
