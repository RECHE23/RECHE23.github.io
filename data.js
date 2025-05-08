const data = {
  title: {
    en: 'René Chenard – AI & Data Science',
    fr: 'René Chenard – IA et Science des Données'
  },
  profileImg: 'https://avatars.githubusercontent.com/u/59896725?v=4',
  name: 'René Chenard',
  hero: {
    description: {
      en: 'Informatician–Mathematician passionate about advancing artificial intelligence, machine learning, and data analysis to solve complex problems.',
      fr: 'Informaticien–Mathématicien passionné par l’avancement de l’intelligence artificielle, de l’apprentissage automatique et de l’analyse de données pour résoudre des problèmes complexes.'
    },
    jobTitles: {
      en: [
        'Research Professional',
        'Software Developer',
        'Informatician',
        'Mathematician'
      ],
      fr: [
        'Professionnel de recherche',
        'Développeur de logiciels',
        'Informaticien',
        'Mathématicien'
      ]
    },
    prompt: 'user@rene.chenard:~$'
  },
  cv: {
    en: [
      '<strong>Research Professional</strong>, GIREF – Université Laval, Québec, Canada (2023–Present)<br>– HPC development with MPI, PETSc & SLEPc<br>– Python interface creation (PyBind11) & solver integration<br>– Memory analysis & QA (Valgrind, Sanitizer)',
      '<strong>Finite-Element Research Intern</strong>, GIREF – Université Laval, Québec, Canada (2021)<br>– Development and validation of ancillary algorithms<br>– Implementation of regular expressions<br>– Refactoring of the algebraic expressions engine',
      '<strong>Machine Learning Intern</strong>, GRAAL – Université Laval, Québec, Canada (2020)<br>– Prototyped and evaluated neural network architectures'
    ],
    fr: [
      '<strong>Professionnel de recherche</strong>, GIREF – Université Laval, Québec, Canada (2023–Présent)<br>– Développement HPC avec MPI, PETSc & SLEPc<br>– Création d’interfaces Python (PyBind11) & intégration de solveurs<br>– Analyse mémoire & QA (Valgrind, Sanitizer)',
      '<strong>Stagiaire en éléments finis</strong>, GIREF – Université Laval, Québec, Canada (2021)<br>– Développement et validation d’algorithmes ancillaires<br>– Implémentation d\'expressions régulières<br>– Refactorisation de l\'engin de traitement des expressions algébriques',
      '<strong>Stagiaire en apprentissage automatique</strong>, GRAAL – Université Laval, Québec, Canada (2020)<br>– Prototypage et évaluation d’architectures de réseaux neuronaux'
    ]
  },
  research: {
    en: [
      {
        title: 'High-Performance Computing & Parallelism',
        description: 'Design and optimization of MPI-based workflows with PETSc and SLEPc for large-scale scientific simulations.'
      },
      {
        title: 'Python Interfaces & Automation',
        description: 'Development of PyBind11 bindings, Python scripting, and CI/CD workflows for numerical code.'
      },
      {
        title: 'Solver Development & Optimization',
        description: 'Integration and tuning of non-linear (SNES) and eigenvalue (SLEPc) solvers for performance and accuracy.'
      },
      {
        title: 'Memory Analysis & Software Quality',
        description: 'Automated memory leak detection and validation testing using Valgrind and sanitizers.'
      }
    ],
    fr: [
      {
        title: 'Calcul haute performance & parallélisme',
        description: 'Conception et optimisation de workflows MPI avec PETSc et SLEPc pour des simulations scientifiques à grande échelle.'
      },
      {
        title: 'Interfaces Python & automatisation',
        description: 'Développement de bindings PyBind11, scripts Python et workflows CI/CD pour code numérique.'
      },
      {
        title: 'Développement & optimisation de solveurs',
        description: 'Intégration et optimisation de solveurs non linéaires (SNES) et valeurs propres (SLEPc) pour performance et précision.'
      },
      {
        title: 'Analyse mémoire & qualité logicielle',
        description: 'Détection automatisée de fuites mémoire et tests de validation avec Valgrind et sanitizers.'
      }
    ]
  },
  publications: {
    en: 'Currently no publications are listed. Ongoing work in mesh algorithms and solver optimization is in progress.',
    fr: 'Aucune publication n’est répertoriée actuellement. Des travaux sur les algorithmes de maillage et l’optimisation de solveurs sont en cours.'
  },
  projects: {
    en: [
      {
        name: 'NumPy-Neural-Network',
        description: 'A modular neural network framework in Python and NumPy.',
        link: 'https://github.com/RECHE23/NumPy-Neural-Network'
      },
      {
        name: 'Automatic-differentiation',
        description: 'Python automatic differentiation library for gradient-based optimization.',
        link: 'https://github.com/RECHE23/Automatic-differentiation'
      },
      {
        name: 'Models_comparison',
        description: 'Animated visualizations comparing neural network performance.',
        link: 'https://github.com/RECHE23/Models_comparison'
      },
      {
        name: 'Constellation',
        description: 'Interactive visualization of neural network training.',
        link: 'https://github.com/RECHE23/Constellation'
      },
      {
        name: 'SWI-Prolog-Gomoku',
        description: 'Gomoku game with alpha-beta pruning in SWI-Prolog.',
        link: 'https://github.com/RECHE23/SWI-Prolog-Gomoku'
      }
    ],
    fr: [
      {
        name: 'NumPy-Neural-Network',
        description: 'Cadre de réseaux neuronaux modulaire en Python et NumPy.',
        link: 'https://github.com/RECHE23/NumPy-Neural-Network'
      },
      {
        name: 'Automatic-differentiation',
        description: 'Bibliothèque de différenciation automatique Python pour optimisation.',
        link: 'https://github.com/RECHE23/Automatic-differentiation'
      },
      {
        name: 'Models_comparison',
        description: 'Visualisations animées comparant performances de réseaux neuronaux.',
        link: 'https://github.com/RECHE23/Models_comparison'
      },
      {
        name: 'Constellation',
        description: 'Visualisation interactive de l’entraînement de réseaux neuronaux.',
        link: 'https://github.com/RECHE23/Constellation'
      },
      {
        name: 'SWI-Prolog-Gomoku',
        description: 'Jeu de Gomoku avec élagage alpha-bêta en SWI-Prolog.',
        link: 'https://github.com/RECHE23/SWI-Prolog-Gomoku'
      }
    ]
  },
  contact: {
    en: 'Get in Touch',
    fr: 'Contactez-moi',
    links: [
      { icon: 'fas fa-envelope', url: 'mailto:rene.chenard.1@ulaval.ca', label: 'Email' },
      { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ren%C3%A9-chenard/', label: 'LinkedIn' },
      { icon: 'fab fa-github', url: 'https://github.com/RECHE23', label: 'GitHub' },
      { icon: 'fab fa-gitlab', url: 'https://gitlab.com/RECHE23', label: 'GitLab' },
      { icon: 'fab fa-facebook', url: 'https://www.facebook.com/m.rene.chenard', label: 'Facebook' }
    ]
  },
  footer: {
    en: '© 2025 René Chenard. All rights reserved.',
    fr: '© 2025 René Chenard. Tous droits réservés.'
  }
};