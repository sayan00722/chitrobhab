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


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  
          if(top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          }
      });
  let header=document.querySelector('header');
  header.classList.toggle('sticky',Window.scrollY >= 100);

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

  // Intersection Observer to trigger autoplay when the section is in view
  const membersSection = document.getElementById('members');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              swiper.autoplay.start();
          } else {
              swiper.autoplay.stop();
          }
      });
  }, {
      threshold: 0.5  // Adjust threshold as needed
  });

  observer.observe(membersSection);
});




document.getElementById('sending').addEventListener('submit', async function(event) {
   // Prevent the default form submission

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

    // Redirect back to the original page
    window.location.href = window.location.href;

  } catch (error) {
    console.error('Error:', error);
  }
});

