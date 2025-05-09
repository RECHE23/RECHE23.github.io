/**
 * Main JavaScript for the portfolio website.
 * Handles navigation rendering, multilingual content updates, theme toggling,
 * smooth scrolling, and animations using Typed.js, tsParticles, and AOS.
 */

/**
 * Navigation items with multilingual labels.
 * @type {Array<{id: string, en: string, fr: string}>}
 */
const navItems = [
  { id: 'home', en: 'Home', fr: 'Accueil' },
  { id: 'cv', en: 'CV', fr: 'CV' },
  { id: 'research', en: 'Research', fr: 'Recherche' },
  { id: 'publications', en: 'Publications', fr: 'Publications' },
  { id: 'projects', en: 'Projects', fr: 'Projets' },
  { id: 'contact', en: 'Contact', fr: 'Contact' }
];

/**
 * Persistent Typed.js instances for English and French animations.
 * @type {{ en: Typed | null, fr: Typed | null }}
 */
const typedInstances = {
  en: null,
  fr: null
};

/**
 * Renders the navigation menu based on the selected language.
 * @param {string} lang - Language code ('en' or 'fr').
 */
function renderNav(lang) {
  const navList = document.getElementById('nav-list');
  navList.innerHTML = navItems.map(item => `
    <li><a href="#${item.id}" class="nav-link lang-${lang}">${item[lang]}</a></li>
  `).join('');
}

/**
 * Renders all page content based on the selected language.
 * Updates DOM elements with data from the global `data` object.
 * @param {string} lang - Language code ('en' or 'fr').
 */
function renderContent(lang) {
  // Update basic elements
  document.getElementById('page-title').textContent = data.title[lang] || '';
  document.getElementById('profile-img').src = data.profileImg || '';
  document.getElementById('profile-img').alt = data.name || '';
  document.getElementById('hero-name').textContent = data.name || '';
  document.getElementById('prompt-en').textContent = data.hero.prompt || '';
  document.getElementById('prompt-fr').textContent = data.hero.prompt || '';
  document.getElementById('hero-description').textContent = data.hero.description[lang] || '';
  document.getElementById('contact-button').textContent = data.contact[lang] || '';

  // CV Section
  document.getElementById('cv-title').textContent = navItems.find(item => item.id === 'cv')[lang];
  const cvList = document.getElementById('cv-list');
  cvList.innerHTML = data.cv[lang]?.map(item => `<li>${item}</li>`).join('') || '';

  // Research Section
  document.getElementById('research-title').textContent = navItems.find(item => item.id === 'research')[lang];
  const researchGrid = document.getElementById('research-grid');
  researchGrid.innerHTML = data.research[lang]?.map(item => `
    <div class="card p-6">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">${item.title}</h3>
      <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
    </div>
  `).join('') || '';

  // Publications Section
  document.getElementById('publications-title').textContent = navItems.find(item => item.id === 'publications')[lang];
  document.getElementById('publications-text').textContent = data.publications[lang] || '';

  // Projects Section
  document.getElementById('projects-title').textContent = navItems.find(item => item.id === 'projects')[lang];
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = data.projects[lang]?.map(project => `
    <div class="card p-6">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">${project.name}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
      <a href="${project.link}" target="_blank" class="text-teal-500 font-semibold hover:underline">View on GitHub</a>
    </div>
  `).join('') || '';

  // Contact Section
  document.getElementById('contact-title').textContent = navItems.find(item => item.id === 'contact')[lang];
  const contactLinks = document.getElementById('contact-links');
  contactLinks.innerHTML = data.contact.links?.map(link => `
    <a href="${link.url}" aria-label="${link.label}" class="contact-icon">
      <i class="${link.icon}"></i>
    </a>
  `).join('') || '';

  // Footer
  document.getElementById('footer-text').textContent = data.footer[lang] || '';

  renderNav(lang);
}

/**
 * Initializes Typed.js for animated job title text.
 * @param {string} lang - Language code ('en' or 'fr').
 */
function initTyped(lang) {
  // Destroy existing instances and clear text content
  if (typedInstances.en) {
    typedInstances.en.destroy();
    typedInstances.en = null;
    document.getElementById('typed-text-en').textContent = '';
  }
  if (typedInstances.fr) {
    typedInstances.fr.destroy();
    typedInstances.fr = null;
    document.getElementById('typed-text-fr').textContent = '';
  }

  const options = {
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|'
  };

  // Initialize Typed instance for the selected language
  if (lang === 'en' && data.hero.jobTitles.en) {
    typedInstances.en = new Typed('#typed-text-en', { ...options, strings: data.hero.jobTitles.en });
  } else if (lang === 'fr' && data.hero.jobTitles.fr) {
    typedInstances.fr = new Typed('#typed-text-fr', { ...options, strings: data.hero.jobTitles.fr });
  }
}

/**
 * Sets the page language and updates visibility of language-specific elements.
 * @param {string} lang - Language code ('en' or 'fr').
 */
function setLanguage(lang) {
  const langToggle = document.getElementById('lang-toggle');
  const enElements = document.querySelectorAll('.lang-en');
  const frElements = document.querySelectorAll('.lang-fr');

  renderContent(lang);
  initTyped(lang);

  if (lang === 'en') {
    langToggle.textContent = 'Français';
    enElements.forEach(el => el.classList.remove('hidden'));
    frElements.forEach(el => el.classList.add('hidden'));
  } else {
    langToggle.textContent = 'English';
    enElements.forEach(el => el.classList.add('hidden'));
    frElements.forEach(el => el.classList.remove('hidden'));
  }
}

/**
 * Initializes event listeners and third-party libraries.
 */
function initialize() {
  // Language Toggle
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    setLanguage(langToggle.textContent === 'Français' ? 'fr' : 'en');
  });

  // Theme Toggle
  const modeToggle = document.getElementById('mode-toggle');
  const htmlEl = document.documentElement;
  modeToggle.innerHTML = htmlEl.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  modeToggle.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    modeToggle.innerHTML = htmlEl.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // Smooth Scrolling for Navigation
  document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 767) {
        document.getElementById('nav-list').classList.remove('active');
      }
    });
  });

  // Mobile Navigation Toggle
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-list').classList.toggle('active');
  });

  // Active Navigation Link on Scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('text-teal-500');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('text-teal-500');
      }
    });
  });

  // Initialize tsParticles
  tsParticles.load('tsparticles', {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    particles: {
      number: { value: 60 },
      color: { value: '#cccccc' },
      shape: { type: 'circle' },
      opacity: { value: 0.4 },
      size: { value: 2 },
      move: { enable: true, speed: 0.8 },
      links: {
        enable: true,
        distance: 100,
        color: '#cccccc',
        opacity: 0.3,
        triangles: { enable: true, opacity: 0.2 }
      }
    }
  });

  // Initialize AOS
  AOS.init({ duration: 800, once: true });
}

// Initialize page
renderContent('en');
initTyped('en');
initialize();