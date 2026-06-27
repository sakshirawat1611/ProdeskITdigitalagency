
const body      = document.body;
const toggle    = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const hamburger = document.getElementById('nav-hamburger');
const navMenu   = document.getElementById('nav-menu');
const header    = document.getElementById('header');

const overlay = document.createElement('div');
overlay.classList.add('nav__overlay');
body.appendChild(overlay);

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeIcon.className = 'fa-solid fa-sun';
}

toggle.addEventListener('click', function() {
  body.classList.toggle('dark');
  var isDark = body.classList.contains('dark');
  themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function openMenu() {
  navMenu.classList.add('open');
  hamburger.classList.add('open');
  overlay.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  body.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  body.style.overflow = '';
}

hamburger.addEventListener('click', function() {
  if (navMenu.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener('click', closeMenu);

var links = document.querySelectorAll('.nav__link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', closeMenu);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMenu();
});
