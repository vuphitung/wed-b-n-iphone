// SLIDER FUNCTIONALITY
const slider = document.querySelector('.slider');
const list = slider.querySelector('.list');
const items = list.querySelectorAll('.item');
const dots = slider.querySelectorAll('.dots li');

let currentIndex = 0;
let slideCount = items.length;
let slideWidth = slider.clientWidth;
let interval = 4000; // 5s
let timer;

// Update slider width on resize
window.addEventListener('resize', () => {
  slideWidth = slider.clientWidth;
  moveSlider(currentIndex);
});

// Move slider function
function moveSlider(index) {
  list.style.transform = `translateX(-${slideWidth * index}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto play
function startAuto() {
  timer = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    moveSlider(currentIndex);
  }, interval);
}

// Stop auto on hover
slider.addEventListener('mouseenter', () => clearInterval(timer));
slider.addEventListener('mouseleave', () => startAuto());

// Dots click
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    moveSlider(currentIndex);
  });
});

// Initialize
moveSlider(currentIndex);
startAuto();



// Smooth scroll effect for hero sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.hero-section, .grid-item').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// FOOTER ACCORDION FOR MOBILE
function initFooterAccordion() {
  const faqItems = document.querySelectorAll('.faq');

  faqItems.forEach(item => {
    const question = item.querySelector('.question');

    question.addEventListener('click', () => {
      // Only work on mobile
      if (window.innerWidth <= 768) {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }
    });
  });
}

initFooterAccordion();

// Re-init on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const faqItems = document.querySelectorAll('.faq');
    if (window.innerWidth > 768) {
      faqItems.forEach(item => item.classList.remove('active'));
    }
  }, 250);
});
// ========== MOBILE MENU HAMBURGER ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;
const mobileLinks = document.querySelectorAll('.nav-links-mobile a');

// Toggle menu khi click hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Đóng menu khi click vào link
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Đóng menu khi click bên ngoài
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

// Đóng menu khi resize về desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }
});
