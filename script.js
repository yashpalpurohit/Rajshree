// === Portfolio Carousel ===
var portfolioSplide = new Splide('.Protfolio__Splide', {
    type: 'loop',
    perPage: 4,
    autoplay: true,
    pagination: false,
    breakpoints: {
        1000: { perPage: 3 },
        768:  { perPage: 2 },
        500:  { perPage: 1 },
    },
});
portfolioSplide.mount();

// === Team Carousel ===
var teamSplide = new Splide('.Team_Splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    pagination: false,
    gap: '2rem',
    breakpoints: {
        1000: { perPage: 3 },
        768:  { perPage: 2 },
        500:  { perPage: 1 },
    },
});
teamSplide.mount();

// === Client Tabs ===
const client_link1 = document.querySelector('.client_link1');
const client_link2 = document.querySelector('.client_link2');
const client_link3 = document.querySelector('.client_link3');

const client_det1 = document.querySelector('.client_det1');
const client_det2 = document.querySelector('.client_det2');
const client_det3 = document.querySelector('.client_det3');

client_link1.addEventListener('click', () => {
    client_det1.style.left = '0%';
    client_det1.classList.toggle('add_anim_left');
    client_det1.style.display = 'block';
    client_det2.style.display = 'none';
    client_det3.style.display = 'none';
});

client_link2.addEventListener('click', () => {
    client_det2.style.left = '0%';
    client_det2.classList.toggle('add_anim_left');
    client_det2.style.display = 'block';
    client_det1.style.display = 'none';
    client_det3.style.display = 'none';
});

client_link3.addEventListener('click', () => {
    client_det3.style.left = '0%';
    client_det3.classList.toggle('add_anim_left');
    client_det3.style.display = 'block';
    client_det1.style.display = 'none';
    client_det2.style.display = 'none';
});

// === Animated Number Counter ===
const numbers = document.querySelectorAll('.count');
const interval = 5000;

numbers.forEach((valueDisplay) => {
    let startValue = 0;
    const endValue = parseInt(valueDisplay.getAttribute('data-count'));
    const duration = Math.floor(interval / endValue);
    const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// === Responsive Menu Toggle ===
const nav_open = document.querySelector('#open_menu');
const nav_close = document.querySelector('#close_menu');
const menu = document.querySelector('.ul');

nav_open.addEventListener('click', () => {
    menu.classList.add('show_menu');
});

nav_close.addEventListener('click', () => {
    menu.classList.remove('show_menu');
});


// 

// Smooth scroll to section on nav button click
document.querySelectorAll('.button[data-target]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Optional: close mobile menu after clicking
        const menu = document.querySelector('.ul');
        menu.classList.remove('show_menu');
      }
    });
  });
  