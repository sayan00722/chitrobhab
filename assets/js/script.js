var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });



  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');

  }
  
  /* ================= scroll section active link ================= */
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () => {

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
}


// ========================== scroll reveal ==========================
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: true
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.about-img, .about-content', { origin: 'bottom' });
ScrollReveal().reveal('.services-content, .services-box', { origin: 'top' });
ScrollReveal().reveal('.portfolio-content, .portfolio-box', { origin: 'left' });
ScrollReveal().reveal('.slide-content', { origin: 'right' });



var typed = new Typed('#typed', {
  strings: ['Content', 'Short Film','Web Series', 'Documentary', 'Music Video', 'Promotional Video'],
  typeSpeed: 50,
  backSpeed: 70,
  backDelay:1000,
  loop: true
});




document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".slide-container", {
      loop: true,
      slidesPerView: 3,  // Adjust based on your layout
      spaceBetween: 30,  // Adjust the space between slides
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
  });

  
document.getElementById('sending').addEventListener('submit', async function(event) {

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData
    });

    // Wait for the response to ensure submission is complete
    await response.json();

    // Reset the form fields
    form.reset();
  } catch (error) {
    console.error('Error:', error);
  }
});


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
  });
});
});
