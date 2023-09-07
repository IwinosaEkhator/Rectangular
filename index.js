$(document).ready(function () {
  const home = document.querySelector("#home");

  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");

    const homeDiv = document.querySelector(".home");

    header.classList.toggle("header-fixed", window.scrollY > 0);
    homeDiv.classList.toggle("home-fixed", window.scrollY > 0);
  })


  const navImage = document.querySelector(".nav-img");

  window.onscroll = function() {
      if (document.documentElement.scrollTop > 0){
        navImage.src = './logo/black-logo.png';
        toggleBtnIcon.style.color = "#242424"
        

      }else{
        navImage.src = './logo/white-logo.png';
        toggleBtnIcon.style.color = "#fff"
      }
  };


  // Dropdown Menu

  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleBtnIcon = document.querySelector(".toggle-btn i");
  const bars = document.querySelector(".fa-bars");
  const dropdownMenu = document.querySelector(".dropdown-m");

  toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    bars.classList.toggle("fa-bars-staggered");
  }

  // Counters Section

  const countSpans = document.querySelectorAll('.count');
  const interval = 5000;

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounterAnimation(entry.target);
        observer.unobserve(entry.target); // Stop observing once the element is in view
      }
    });
  });

  // Observe each counter element
  countSpans.forEach((countSpan) => {
    observer.observe(countSpan);
  });

  function startCounterAnimation(countSpan) {
    let currentValue = 0;
    let targetValue = parseInt(countSpan.getAttribute("data-val"));
    let duration = Math.floor(interval / targetValue);
    let counter = setInterval(function () {
      currentValue += 1;
      countSpan.textContent = currentValue;
      if (currentValue == targetValue) {
        clearInterval(counter);
      }
    }, duration);
  }




  // Carousel Section

    $('.slideshow').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      prevArrow: '<i class="fa-solid fa-chevron-left fa-xs slick-prev"></i>',
      nextArrow: '<i class="fa-solid fa-chevron-right fa-xs slick-next"></i>'
    })


  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })



  // Slider Section

    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      infinite: true,
      pauseOnHover: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }]
    });


  // Back to top section



  
  const backToTopButton = document.querySelector(".up");

    window.addEventListener('scroll', function (){
      backToTopButton.classList.toggle("active" , window.scrollY > 150)
    })

  backToTopButton.addEventListener("click", function () {
      document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
      })
  })
  
});


// Loader Section

  window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    preloader.classList.add("preloader--hidden");

    preloader.addEventListener("transitionend", () => {
      document.body.removeChild(preloader);
    });
  });

// Phone View


function checkScreenSize() {
  const aboutImage = document.querySelector(".about-image");
  if (window.innerWidth <= 1100) {
    aboutImage.style.display = "none";
  } else {
    aboutImage.style.display = "block";
  }
}


checkScreenSize();

window.addEventListener('resize', checkScreenSize);