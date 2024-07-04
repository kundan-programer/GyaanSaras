const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const demoBtn = document.getElementById('demoBtn');

const homePage = document.querySelector('.home-page');
const aboutPage = document.querySelector('.about-page');
const contactPage = document.querySelector('.contact-page');
const demoPage = document.querySelector('.demo-page');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

homeBtn.addEventListener('click', () => {
  showPage(homePage);
  navLinks.classList.remove('active');
});

aboutBtn.addEventListener('click', () => {
  showPage(aboutPage);
  navLinks.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
  showPage(contactPage);
  navLinks.classList.remove('active');
});

demoBtn.addEventListener('click', () => {
  showPage(demoPage);
  navLinks.classList.remove('active');
});

function showPage(page) {
  homePage.style.display = 'none';
  aboutPage.style.display = 'none';
  contactPage.style.display = 'none';
  demoPage.style.display = 'none';
  page.style.display = 'block';
}