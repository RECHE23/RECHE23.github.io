/**
 * Main JavaScript for the portfolio website.
 * Modular architecture with clear separation of concerns.
 */

// ==================== CONSTANTS ====================
const CONFIG = {
  navItems: [
    { id: 'home', en: 'Home', fr: 'Accueil' },
    { id: 'cv', en: 'CV', fr: 'CV' },
    { id: 'education', en: 'Education', fr: 'Éducation' },
    { id: 'research', en: 'Research', fr: 'Recherche' },
    { id: 'publications', en: 'Publications', fr: 'Publications' },
    { id: 'projects', en: 'Projects', fr: 'Projets' },
    { id: 'contact', en: 'Contact', fr: 'Contact' }
  ],
  sectionLabels: {
    languages: { en: 'Languages', fr: 'Langages' },
    tools: { en: 'Tools', fr: 'Outils' },
    topics: { en: 'Topics', fr: 'Sujets' }
  },
  courseHeaders: {
    en: ['Code', 'Title', 'Credits', 'Grade', 'Session'],
    fr: ['Code', 'Titre', 'Crédits', 'Note', 'Session']
  },
  typedOptions: {
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|'
  },
  particlesConfig: {
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
  },
  aosConfig: {
    duration: 800,
    once: true
  }
};

// ==================== STATE MANAGEMENT ====================
const AppState = {
  currentLanguage: 'en',
  isDarkMode: false,
  typedInstances: {
    en: null,
    fr: null
  },

  init() {
    this.currentLanguage = this.detectUserLanguage();
    this.isDarkMode = this.detectUserTheme();
  },

  detectUserLanguage() {
    const userLang = navigator.language || navigator.languages?.[0] || 'en';
    return userLang.startsWith('fr') ? 'fr' : 'en';
  },

  detectUserTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    return this.currentLanguage;
  },

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    return this.isDarkMode;
  }
};

// ==================== DOM UTILITIES ====================
class DOMUtils {
  static getElement(id) {
    const element = document.getElementById(id);
    if (!element) console.warn(`Element with ID "${id}" not found`);
    return element;
  }

  static queryAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  static toggleVisibility(element, isVisible) {
    if (isVisible) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }

  static setTextContent(element, text) {
    if (element) element.textContent = text;
  }

  static setInnerHTML(element, html) {
    if (element) element.innerHTML = html;
  }

  static addClass(element, className) {
    element?.classList.add(className);
  }

  static removeClass(element, className) {
    element?.classList.remove(className);
  }

  static toggleClass(element, className) {
    element?.classList.toggle(className);
  }

  static replaceIcon(element, oldIcon, newIcon) {
    if (element) {
      const icon = element.querySelector('i');
      if (icon) icon.classList.replace(oldIcon, newIcon);
    }
  }
}

// ==================== MODULES ====================
class LanguageModule {
  static init() {
    this.setupLanguageToggle();
    this.updateLanguage(AppState.currentLanguage);
  }

  static updateLanguage(lang) {
    // Update UI elements
    const langToggle = DOMUtils.getElement('lang-toggle');
    DOMUtils.setTextContent(
      langToggle.querySelector('.lang-text'),
      lang === 'en' ? 'Français' : 'English'
    );

    // Toggle language-specific elements
    DOMUtils.queryAll('.lang-en').forEach(el =>
      DOMUtils.toggleVisibility(el, lang === 'en'));
    DOMUtils.queryAll('.lang-fr').forEach(el =>
      DOMUtils.toggleVisibility(el, lang === 'fr'));

    // Update content
    ContentRenderer.renderAll(lang);

    // Update animations
    AnimationModule.initTyped(lang);
  }

  static setupLanguageToggle() {
    const langToggle = DOMUtils.getElement('lang-toggle');
    langToggle?.addEventListener('click', () => {
      const newLang = AppState.toggleLanguage();
      this.updateLanguage(newLang);
    });
  }
}

class ThemeModule {
  static init() {
    this.setupThemeToggle();
    this.updateTheme(AppState.isDarkMode);
  }

  static updateTheme(isDarkMode) {
    const htmlEl = document.documentElement;
    const modeToggle = DOMUtils.getElement('mode-toggle');

    if (isDarkMode) {
      DOMUtils.addClass(htmlEl, 'dark');
      DOMUtils.replaceIcon(modeToggle, 'fa-moon', 'fa-sun');
      DOMUtils.setTextContent(modeToggle.querySelector('.mode-text'), 'Clair');
    } else {
      DOMUtils.removeClass(htmlEl, 'dark');
      DOMUtils.replaceIcon(modeToggle, 'fa-sun', 'fa-moon');
      DOMUtils.setTextContent(modeToggle.querySelector('.mode-text'), 'Sombre');
    }
  }

  static setupThemeToggle() {
    const modeToggle = DOMUtils.getElement('mode-toggle');
    modeToggle?.addEventListener('click', () => {
      const newMode = AppState.toggleTheme();
      this.updateTheme(newMode);
    });
  }
}

class NavigationModule {
  static init() {
    this.renderNavigation(AppState.currentLanguage);
    this.setupEventListeners();
  }

  static renderNavigation(lang) {
    const navList = DOMUtils.getElement('nav-list');
    if (!navList) return;

    const navHTML = CONFIG.navItems.map(item => `
      <li>
        <a href="#${item.id}" class="nav-link lang-${lang}">${item[lang]}</a>
      </li>
    `).join('');

    DOMUtils.setInnerHTML(navList, navHTML);
  }

  static setupEventListeners() {
    // Smooth scrolling
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        if (window.innerWidth <= 767) {
          DOMUtils.removeClass(DOMUtils.getElement('nav-list'), 'active');
        }
      }
    });

    // Mobile toggle
    document.querySelector('.nav-toggle')?.addEventListener('click', () => {
      DOMUtils.toggleClass(DOMUtils.getElement('nav-list'), 'active');
    });

    // Active link on scroll
    window.addEventListener('scroll', this.handleScroll);
  }

  static handleScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    DOMUtils.queryAll('.nav-link').forEach(link => {
      const linkTarget = link.getAttribute('href').substring(1);
      const isActive = linkTarget === currentSection;

      // Remove the class from all links first
      DOMUtils.removeClass(link, 'text-teal-500');

      // Add it only to the active one
      if (isActive) {
        DOMUtils.addClass(link, 'text-teal-500');
      }
    });
  }
}

class AnimationModule {
  static init() {
    this.initParticles();
    this.initAOS();
    this.initTyped(AppState.currentLanguage);
  }

  static destroyTypedInstances() {
    Object.keys(AppState.typedInstances).forEach(lang => {
      if (AppState.typedInstances[lang]) {
        AppState.typedInstances[lang].destroy();
        AppState.typedInstances[lang] = null;
        DOMUtils.setTextContent(DOMUtils.getElement(`typed-text-${lang}`), '');
      }
    });
  }

  static initTyped(lang) {
    this.destroyTypedInstances();

    if (!data.hero?.jobTitles?.[lang]?.length) return;

    AppState.typedInstances[lang] = new Typed(
      `#typed-text-${lang}`,
      {
        ...CONFIG.typedOptions,
        strings: data.hero.jobTitles[lang]
      }
    );
  }

  static initParticles() {
    tsParticles.load('tsparticles', CONFIG.particlesConfig);
  }

  static initAOS() {
    AOS.init(CONFIG.aosConfig);
  }
}

class ContentRenderer {
  static renderAll(lang) {
    this.renderBasicElements(lang);
    this.renderCVSection(lang);
    this.renderEducationSection(lang);
    this.renderResearchSection(lang);
    this.renderPublicationsSection(lang);
    this.renderProjectsSection(lang);
    this.renderContactSection(lang);
    this.renderFooter(lang);

    NavigationModule.renderNavigation(lang);
  }

  static renderBasicElements(lang) {
    DOMUtils.setTextContent(DOMUtils.getElement('page-title'), data.title[lang]);
    DOMUtils.setTextContent(DOMUtils.getElement('hero-name'), data.name);
    DOMUtils.setTextContent(DOMUtils.getElement('prompt-en'), data.hero.prompt);
    DOMUtils.setTextContent(DOMUtils.getElement('prompt-fr'), data.hero.prompt);
    DOMUtils.setTextContent(DOMUtils.getElement('hero-description'), data.hero.description[lang]);
    DOMUtils.setTextContent(DOMUtils.getElement('contact-button'), data.contact[lang]);

    const profileImg = DOMUtils.getElement('profile-img');
    if (profileImg) {
      profileImg.src = data.profileImg;
      profileImg.alt = data.name;
    }
  }

  static renderCVSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'cv')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('cv-title'), sectionTitle);

    if (!data.cv?.length) return;

    const cvHTML = data.cv.map((item, index) => this.renderCVItem(item, lang, index)).join('');
    DOMUtils.setInnerHTML(DOMUtils.getElement('cv-list'), cvHTML);
    this.setupToggleHandlers('.cv-card', '.cv-short', '.cv-details', '.cv-toggle-btn');
  }

  static renderCVItem(item, lang, index) {
    return `
      <li class="card cv-card relative p-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        ${this.renderShortView(item, lang, 'cv')}
        ${this.renderDetailedView(item, lang, 'cv')}
        <button class="cv-toggle-btn absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary-light">
          <i class="fas fa-plus"></i>
        </button>
      </li>
    `;
  }

  static renderEducationSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'education')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('education-title'), sectionTitle);

    if (!data.education?.length) return;

    const educationHTML = data.education.map((item, index) => this.renderEducationItem(item, lang, index)).join('');
    DOMUtils.setInnerHTML(DOMUtils.getElement('education-list'), educationHTML);
    this.setupToggleHandlers('.education-card', '.education-short', '.education-details', '.education-toggle-btn');
  }

  static renderEducationItem(item, lang, index) {
    return `
      <li class="card education-card relative p-6" data-aos="fade-up" data-aos-delay="${index * 100}">
        ${this.renderShortView(item, lang, 'education')}
        <div class="education-details hidden">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            ${item.degree[lang]} | ${item.institution}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-2">${item.location} (${item.period})</p>
          ${item.detailedDescription[lang]?.length ? `
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
              ${item.detailedDescription[lang].map(point => `<li>${point}</li>`).join('')}
            </ul>
          ` : ''}
      ${item.courses?.length ? this.renderCoursesTable(item.courses, lang) : ''}
      </div>
      <button class="education-toggle-btn absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-darkPrimary-light" aria-expanded="false">
      <i class="fas fa-plus"></i>
      </button>
      </li>
    `;
  }

  static renderShortView(item, lang, type) {
    return `
      <div class="${type}-short">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          ${item[type === 'cv' ? 'role' : 'degree'][lang]} | ${item[type === 'cv' ? 'organization' : 'institution']}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-2">${item.location} (${item.period})</p>
        <p class="text-gray-600 dark:text-gray-400">${item.shortDescription[lang]}</p>
      </div>
    `;
  }

  static renderDetailedView(item, lang, type) {
    return `
      <div class="${type}-details hidden">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          ${item[type === 'cv' ? 'role' : 'degree'][lang]} | ${item[type === 'cv' ? 'organization' : 'institution']}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-2">${item.location} (${item.period})</p>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
          ${item.detailedDescription[lang].map(point => `<li>${point}</li>`).join('')}
        </ul>
        ${item.languages?.length ? `
          <p class="text-gray-600 dark:text-gray-400">
            <strong>${CONFIG.sectionLabels.languages[lang]}:</strong> ${item.languages.join(', ')}
          </p>
        ` : ''}
        ${item.tools?.length ? `
          <p class="text-gray-600 dark:text-gray-400">
            <strong>${CONFIG.sectionLabels.tools[lang]}:</strong> ${item.tools.join(', ')}
          </p>
        ` : ''}
        ${item.topics?.[lang]?.length ? `
          <p class="text-gray-600 dark:text-gray-400">
            <strong>${CONFIG.sectionLabels.topics[lang]}:</strong> ${item.topics[lang].join(', ')}
          </p>
        ` : ''}
      </div>
    `;
  }

  static renderCoursesTable(courses, lang) {
    const headers = CONFIG.courseHeaders[lang];
    return `
      <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        ${lang === 'en' ? 'Courses Completed' : 'Cours suivis'}
      </h4>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-gray-600 dark:text-gray-400">
          <thead>
            <tr class="border-b dark:border-gray-700">
              ${headers.map(header => `<th class="py-2 px-4">${header}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${courses.map(course => `
              <tr class="border-b dark:border-gray-700">
                <td class="py-2 px-4">${course.code}</td>
                <td class="py-2 px-4">${course.title[lang]}</td>
                <td class="py-2 px-4">${course.credits}</td>
                <td class="py-2 px-4">${course.grade}</td>
                <td class="py-2 px-4">${course.session}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  static renderResearchSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'research')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('research-title'), sectionTitle);

    if (!data.research?.[lang]?.length) return;

    const researchHTML = data.research[lang].map(item => `
      <div class="card p-6" data-aos="fade-up">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">${item.title}</h3>
        <p class="text-gray-600 dark:text-gray-400">${item.description}</p>
      </div>
    `).join('');

    DOMUtils.setInnerHTML(DOMUtils.getElement('research-grid'), researchHTML);
  }

  static renderPublicationsSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'publications')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('publications-title'), sectionTitle);
    DOMUtils.setTextContent(DOMUtils.getElement('publications-text'), data.publications[lang]);
  }

  static renderProjectsSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'projects')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('projects-title'), sectionTitle);

    if (!data.projects?.[lang]?.length) return;

    const projectsHTML = data.projects[lang].map(project => `
      <div class="card p-6" data-aos="fade-up">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">${project.name}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
        <a href="${project.link}" target="_blank" class="text-teal-500 font-semibold hover:underline">
          ${lang === 'en' ? 'View on GitHub' : 'Voir sur GitHub'}
        </a>
      </div>
    `).join('');

    DOMUtils.setInnerHTML(DOMUtils.getElement('projects-grid'), projectsHTML);
  }

  static renderContactSection(lang) {
    const sectionTitle = CONFIG.navItems.find(item => item.id === 'contact')[lang];
    DOMUtils.setTextContent(DOMUtils.getElement('contact-title'), sectionTitle);

    if (!data.contact?.links?.length) return;

    const contactHTML = data.contact.links.map(link => `
      <li class="card">
        <a href="${link.url}" aria-label="${link.label}" class="contact-icon">
          <i class="${link.icon}"></i>
        </a>
      </li>
    `).join('');

    DOMUtils.setInnerHTML(DOMUtils.getElement('contact-links'), contactHTML);
  }

  static renderFooter(lang) {
    DOMUtils.setTextContent(DOMUtils.getElement('footer-text'), data.footer[lang]);
  }

  static setupToggleHandlers(cardSelector, shortSelector, detailsSelector, toggleBtnSelector) {
    DOMUtils.queryAll(toggleBtnSelector).forEach(button => {
      button.addEventListener('click', () => {
        const card = button.closest(cardSelector);
        const short = card.querySelector(shortSelector);
        const details = card.querySelector(detailsSelector);

        const isExpanded = !details.classList.contains('hidden');

        // Toggle visibility
        DOMUtils.toggleClass(short, 'hidden', isExpanded);
        DOMUtils.toggleClass(details, 'hidden', !isExpanded);

        // Update icon
        DOMUtils.replaceIcon(button, isExpanded ? 'fa-minus' : 'fa-plus', isExpanded ? 'fa-plus' : 'fa-minus');

        // Update card state
        DOMUtils.toggleClass(card, 'expanded', !isExpanded);
        button.setAttribute('aria-expanded', !isExpanded);
      });
    });
  }
}

// ==================== INITIALIZATION ====================
function initializeApp() {
  // Initialize state
  AppState.init();

  // Initialize modules
  ThemeModule.init();
  LanguageModule.init();
  NavigationModule.init();
  AnimationModule.init();

  // Initial content render
  ContentRenderer.renderAll(AppState.currentLanguage);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);