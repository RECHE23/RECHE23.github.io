/**
 * Centralized data object for the portfolio website.
 * Contains multilingual content (English and French) for various sections.
 * Structure: Organized by section (title, hero, cv, etc.) with nested language-specific data.
 */
const data = {
  title: {
    en: 'René Chenard – Computer Scientist & Mathematician',
    fr: 'René Chenard – Informaticien-mathématicien'
  },
  profileImg: 'https://avatars.githubusercontent.com/u/59896725?v=4',
  name: 'René Chenard',
  hero: {
    description: {
      en: 'Passionate about solving complex problems using algorithms, artificial intelligence, machine learning, and data analysis.',
      fr: 'Passionné par la résolution de problèmes complexes à l’aide de l’algorithmique, de l’intelligence artificielle, de l’apprentissage automatique et de l’analyse de données.'
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
  education: [
    {
      degree: {
        en: 'Master’s in Mathematics (Ongoing)',
        fr: 'Maîtrise en mathématiques (en cours)'
      },
      institution: 'Université Laval',
      location: 'Québec, Canada',
      period: '2023–Present',
      description: {
        en: 'Pursuing a Master’s degree in Mathematics as part of employment at GIREF, focusing on computational mathematics and high-performance computing.',
        fr: 'Poursuite d’une maîtrise en mathématiques dans le cadre de l’emploi au GIREF, axée sur les mathématiques computationnelles et le calcul haute performance.'
      }
    },
    {
      degree: {
        en: 'Bachelor’s in Mathematics and Computer Science',
        fr: 'Baccalauréat intégré en mathématiques et informatique'
      },
      institution: 'Université Laval',
      location: 'Québec, Canada',
      period: '2018–2021',
      description: {
        en: 'Completed a Bachelor’s degree with a focus on algorithms, data structures, and applied mathematics.',
        fr: 'Obtention d’un baccalauréat axé sur les algorithmes, les structures de données et les mathématiques appliquées.'
      }
    }
  ],
  cv: [
    {
      role: {
        en: 'Research Professional',
        fr: 'Professionnel de recherche'
      },
      organization: 'GIREF – Université Laval',
      location: 'Québec, Canada',
      period: '2023–Present',
      shortDescription: {
        en: 'Developed high-performance computing solutions and Python interfaces.',
        fr: 'Développement de solutions HPC et interfaces Python.'
      },
      detailedDescription: {
        en: [
          'Designed and implemented HPC workflows using MPI, PETSc, and SLEPc for large-scale simulations.',
          'Created Python interfaces with PyBind11 for solver integration.',
          'Performed memory analysis and quality assurance using Valgrind and Sanitizer.'
        ],
        fr: [
          'Conception et mise en œuvre de workflows HPC avec MPI, PETSc et SLEPc pour simulations à grande échelle.',
          'Création d’interfaces Python avec PyBind11 pour intégration de solveurs.',
          'Analyse mémoire et assurance qualité avec Valgrind et Sanitizer.'
        ]
      },
      languages: ['C/C++', 'Python', 'Bash', 'LaTeX', 'Markdown', 'HTML/CSS/JS', 'CMake/Makefile'],
      tools: ['PETSc', 'SLEPc', 'CPython/PyBind11', 'Valgrind', 'Sanitizer', 'Git', 'SSH'],
      topics: {
        en: ['High-Performance Computing', 'Solver Integration', 'Python Binding', 'Memory Analysis', 'CI/CD'],
        fr: ['Calcul haute performance', 'Intégration de solveurs', 'Inerface Python', 'Analyse mémoire', 'CI/CD']
      }
    },
    {
      role: {
        en: 'Finite-Element Research Intern',
        fr: 'Stagiaire en éléments finis'
      },
      organization: 'GIREF – Université Laval',
      location: 'Québec, Canada',
      period: '2021',
      shortDescription: {
        en: 'Developed and validated algorithms for finite-element simulations.',
        fr: 'Développement et validation d’algorithmes pour simulations par éléments finis.'
      },
      detailedDescription: {
        en: [
          'Developed and validated ancillary algorithms for finite-element methods.',
          'Implemented regular expressions for data inputs parsing.',
          'Refactored the algebraic expressions engine for improved performance.'
        ],
        fr: [
          'Développement et validation d’algorithmes ancillaires pour méthodes par éléments finis.',
          'Implémentation d’expressions régulières pour le traitement des mises en données.',
          'Refactorisation de l’engin de traitement des expressions algébriques pour meilleures performances.'
        ]
      },
      languages: ['C/C++', 'Python', 'Regex', 'LaTeX'],
      tools: ['Valgrind', 'Git', 'SSH'],
      topics: {
        en: ['Finite-Element Methods', 'Regular Expressions', 'Algorithm Optimization'],
        fr: ['Méthodes par éléments finis', 'Expressions régulières', 'Optimisation d’algorithmes']
      }
    },
    {
      role: {
        en: 'Machine Learning Intern',
        fr: 'Stagiaire en apprentissage automatique'
      },
      organization: 'GRAAL – Université Laval',
      location: 'Québec, Canada',
      period: '2020',
      shortDescription: {
        en: 'Prototyped neural network architectures for machine learning tasks.',
        fr: 'Prototypage d’architectures de réseaux neuronaux pour tâches d’apprentissage.'
      },
      detailedDescription: {
        en: [
          'Prototyped and evaluated neural network architectures for classification tasks.',
          'Optimized model performance using hyperparameter tuning.',
          'Analyzed datasets to improve model accuracy.'
        ],
        fr: [
          'Prototypage et évaluation d’architectures de réseaux neuronaux pour tâches de classification.',
          'Optimisation des performances des modèles par réglage des hyperparamètres.',
          'Analyse de datasets pour améliorer la précision des modèles.'
        ]
      },
      languages: ['Python'],
      tools: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebooks'],
      topics: {
        en: ['Machine Learning', 'Neural Networks', 'Data Analysis', 'Dimensionality Reduction'],
        fr: ['Apprentissage automatique', 'Réseaux neuronaux', 'Analyse de données', 'Réduction de dimensionnalité']
      }
    }
  ],
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