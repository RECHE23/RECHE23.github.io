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
      period: '2020–Present',
      shortDescription: {
        en: 'Pursuing a Master’s degree in Mathematics with a focus on computational mathematics.',
        fr: 'Poursuite d’une maîtrise en mathématiques axée sur les mathématiques computationnelles.'
      },
      detailedDescription: {
        en: [
          'Research focus: Computational mathematics and high-performance computing.',
          'Certain courses, including those in artificial intelligence, were completed as part of an integrated transition to the Master’s program during the Software Engineering undergraduate studies.'
        ],
        fr: [
          'Focus de recherche : Mathématiques computationnelles et calcul haute performance.',
          'Certains cours, incluant ceux en intelligence artificielle, ont été complétés dans le cadre d’un passage integré à la maîtrise lors des études de premier cycle en génie logiciel.'
        ]
      },
      courses: [
        {
          code: 'IFT-7022',
          title: { en: 'Natural Language Processing', fr: 'Traitement automatique de la langue naturelle' },
          credits: 3,
          grade: 'A+',
          session: 'A20'
        },
        {
          code: 'GIF-7005',
          title: { en: 'Introduction to Machine Learning', fr: 'Introduction à l’apprentissage automatique' },
          credits: 3,
          grade: 'A+',
          session: 'A20'
        },
        {
          code: 'MAT-7215',
          title: { en: 'Matrix Numerical Analysis', fr: 'Analyse numérique matricielle' },
          credits: 3,
          grade: 'A+',
          session: 'H25'
        }
      ]
    },
    {
      degree: {
        en: 'Bachelor’s in Mathematics and Computer Science',
        fr: 'Baccalauréat intégré en mathématiques et informatique'
      },
      institution: 'Université Laval',
      location: 'Québec, Canada',
      period: '2018–2023',
      shortDescription: {
        en: 'Completed a Bachelor’s degree with a focus on algorithms, data structures, and applied mathematics.',
        fr: 'Obtention d’un baccalauréat axé sur les algorithmes, les structures de données et les mathématiques appliquées.'
      },
      detailedDescription: {
        en: [
          'Initially started in Software Engineering before switching to Mathematics and Computer Science to pursue a dual focus on theoretical and applied disciplines.',
          'Completed more than 90 credits with a program GPA of 3.97/4.33.',
          'Included practical training internships (GLO-2580, GLO-2581).'
        ],
        fr: [
          'Commencé initialement en génie logiciel avant de passer à mathématiques et informatique pour approfondir les disciplines théoriques et appliquées.',
          'Complété plus de 90 crédits avec une moyenne de programme de 3,97/4,33.',
          'Inclus des stages de formation pratique (GLO-2580, GLO-2581).'
        ]
      },
      courses: [
        { code: 'GLO-1901', title: { en: 'Introduction to Programming with Python', fr: 'Introduction à la programmation avec Python' }, credits: 3, grade: 'A+', session: 'A18' },
        { code: 'MAT-1900', title: { en: 'Engineering Mathematics I', fr: 'Mathématiques de l’ingénieur I' }, credits: 3, grade: 'A+', session: 'A18' },
        { code: 'MAT-1919', title: { en: 'Mathematics for Computer Scientists', fr: 'Mathématiques pour informaticien' }, credits: 3, grade: 'A', session: 'A18' },
        { code: 'GLO-3101', title: { en: 'Computer Project Management: Methods and Tools', fr: 'Gestion de projets informatiques : méthodes et outils' }, credits: 3, grade: 'B+', session: 'A18' },
        { code: 'GIF-1001', title: { en: 'Computers: Structure and Applications', fr: 'Ordinateurs : structure et applications' }, credits: 3, grade: 'B+', session: 'H19' },
        { code: 'GIF-1003', title: { en: 'Advanced Programming in C++', fr: 'Programmation avancée en C++' }, credits: 3, grade: 'B+', session: 'H19' },
        { code: 'IFT-2002', title: { en: 'Theoretical Computer Science', fr: 'Informatique théorique' }, credits: 3, grade: 'A+', session: 'H19' },
        { code: 'MAT-1910', title: { en: 'Engineering Mathematics II', fr: 'Mathématiques de l’ingénieur II' }, credits: 3, grade: 'A', session: 'H19' },
        { code: 'IFT-3000', title: { en: 'Programming Languages', fr: 'Langages de programmation' }, credits: 3, grade: 'A+', session: 'E19' },
        { code: 'IFT-3002', title: { en: 'Investigative Informatics', fr: 'Informatique d’enquête' }, credits: 3, grade: 'A', session: 'E19' },
        { code: 'GIF-1002', title: { en: 'Logic Circuits', fr: 'Circuits logiques' }, credits: 3, grade: 'A', session: 'A19' },
        { code: 'GLO-2100', title: { en: 'Algorithms and Data Structures for Engineers', fr: 'Algorithmes et structures de données pour ingénieurs' }, credits: 3, grade: 'A+', session: 'A19' },
        { code: 'MAT-1200', title: { en: 'Introduction to Linear Algebra', fr: 'Introduction à l’algèbre linéaire' }, credits: 3, grade: 'A+', session: 'A19' },
        { code: 'MAT-2910', title: { en: 'Numerical Analysis for Engineers', fr: 'Analyse numérique pour l’ingénieur' }, credits: 3, grade: 'A+', session: 'A19' },
        { code: 'STT-2920', title: { en: 'Probabilities for Engineers', fr: 'Probabilités pour ingénieurs' }, credits: 3, grade: 'B+', session: 'A19' },
        { code: 'GLO-2001', title: { en: 'Operating Systems for Engineers', fr: 'Systèmes d’exploitation pour ingénieurs' }, credits: 3, grade: 'A', session: 'H20' },
        { code: 'IFT-3001', title: { en: 'Design and Analysis of Algorithms', fr: 'Conception et analyse d’algorithmes' }, credits: 3, grade: 'A+', session: 'H20' },
        { code: 'IFT-3101', title: { en: 'Compilation and Interpretation', fr: 'Compilation et interprétation' }, credits: 3, grade: 'A', session: 'H20' },
        { code: 'IFT-4102', title: { en: 'Advanced Techniques in Artificial Intelligence', fr: 'Techniques avancées en intelligence artificielle' }, credits: 3, grade: 'A', session: 'H20' },
        { code: 'GLO-2580', title: { en: 'Software Engineering Internship I', fr: 'Stage en génie logiciel I' }, credits: 9, grade: 'P', session: 'E20' },
        { code: 'STT-1900', title: { en: 'Statistical Methods for Engineers', fr: 'Méthodes statistiques pour ingénieurs' }, credits: 3, grade: 'A+', session: 'A20' },
        { code: 'STT-2200', title: { en: 'Data Analysis', fr: 'Analyse des données' }, credits: 3, grade: 'A', session: 'A20' },
        { code: 'CHM-1905', title: { en: 'Thermodynamics and Kinetics', fr: 'Thermodynamique et cinétique' }, credits: 3, grade: 'A', session: 'H21' },
        { code: 'ECN-2901', title: { en: 'Economic Analysis in Engineering', fr: 'Analyse économique en ingénierie' }, credits: 3, grade: 'B+', session: 'H21' },
        { code: 'GLO-4000', title: { en: 'Human-Computer Interface', fr: 'Interface personne-machine' }, credits: 3, grade: 'A+', session: 'H21' },
        { code: 'GLO-2581', title: { en: 'Software Engineering Internship II', fr: 'Stage en génie logiciel II' }, credits: 9, grade: 'P', session: 'E21' },
        { code: 'CHM-1000', title: { en: 'Structure of Atoms and Molecules', fr: 'Structure des atomes et des molécules' }, credits: 3, grade: 'B+', session: 'A21' },
        { code: 'GLO-2000', title: { en: 'Networks for Engineers', fr: 'Réseaux pour ingénieurs' }, credits: 3, grade: 'A', session: 'A21' },
        { code: 'MAT-1110', title: { en: 'Calculus of Functions of Several Variables', fr: 'Calcul des fonctions de plusieurs variables' }, credits: 3, grade: 'A+', session: 'A21' },
        { code: 'MAT-1300', title: { en: 'Elements of Mathematics', fr: 'Éléments de mathématiques' }, credits: 3, grade: 'A-', session: 'A21' },
        { code: 'IFT-4001', title: { en: 'Combinatorial Optimization', fr: 'Optimisation combinatoire' }, credits: 3, grade: 'A+', session: 'H22' },
        { code: 'IFT-4003', title: { en: 'Data Compression', fr: 'Compression de données' }, credits: 3, grade: 'A+', session: 'H22' },
        { code: 'MAT-1100', title: { en: 'Analysis I', fr: 'Analyse I' }, credits: 3, grade: 'A-', session: 'H22' },
        { code: 'MAT-1310', title: { en: 'Discrete Mathematics', fr: 'Mathématiques discrètes' }, credits: 3, grade: 'A+', session: 'H22' },
        { code: 'DDU-1000', title: { en: 'Foundations of Sustainable Development', fr: 'Fondements du développement durable' }, credits: 3, grade: 'A-', session: 'E22' },
        { code: 'MAT-2100', title: { en: 'Analysis II', fr: 'Analyse II' }, credits: 3, grade: 'A', session: 'A22' },
        { code: 'MAT-2300', title: { en: 'Algebra I', fr: 'Algèbre I' }, credits: 3, grade: 'A+', session: 'A22' },
        { code: 'MAT-2310', title: { en: 'Number Theory', fr: 'Théorie des nombres' }, credits: 3, grade: 'B+', session: 'A22' },
        { code: 'MAT-2410', title: { en: 'Optimization', fr: 'Optimisation' }, credits: 3, grade: 'B', session: 'A22' },
        { code: 'ALL-1010', title: { en: 'Elementary German I', fr: 'Allemand élémentaire I' }, credits: 3, grade: 'B-', session: 'H23' },
        { code: 'IFT-2003', title: { en: 'Artificial Intelligence I', fr: 'Intelligence artificielle I' }, credits: 3, grade: 'A', session: 'H23' },
        { code: 'MAT-3110', title: { en: 'Differential Equations', fr: 'Équations différentielles' }, credits: 3, grade: 'A+', session: 'H23' }
      ]
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