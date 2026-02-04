export default [
  {
    name: 'TimaKaroche',
    description:
      'A personal portfolio website built from scratch without UI libraries or pre-designed layouts. Emphasizes creative freedom and clean component-based approach using vanilla JavaScript classes and modern CSS. The project is based on my MPA Starter Template.',
    links: {
      mainLink: '/',
      additionalLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/timakaroche',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/timakaroche.png',
      fullSizeImages: [
        {
          title: 'This website',
          src: '/src/assets/images/projects/timakaroche.png',
        },
      ],
    },
    stack: [
      {
        name: 'Minista',
        logo: 'minista',
      },
      {
        name: 'Vite',
        logo: 'vite',
      },
      {
        name: 'JSX',
        logo: 'jsx',
      },
      {
        name: 'JavaScript',
        logo: 'js',
      },
      {
        name: 'Sass',
        logo: 'sass',
      },
      {
        name: 'PostCSS',
        logo: 'postcss',
      },
      {
        name: 'Git',
        logo: 'git',
      },
      {
        name: 'ESLint',
        logo: 'eslint',
      },
      {
        name: 'StyleLint',
        logo: 'stylelint',
      },
      {
        name: 'Prettier',
        logo: 'prettier',
      },
      {
        name: 'NPM',
        logo: 'npm',
      },
      {
        name: 'BEM',
        logo: 'bem',
      },
    ],
  },
  {
    name: 'Porsche Fun Club - Bachelor thesis',
    description:
      'Bachelor thesis project providing comprehensive exploration of responsive web design methodologies and implementation techniques. Theoretical foundation covers six technical approaches, in-depth analysis of HTML5 responsive features, advanced CSS techniques, JavaScript contributions, and rigorous testing methodologies. Includes comparative evaluation of leading CSS frameworks using multi-criteria analysis. Practical implementation features a fully responsive home page of community platform built with Mobile-First approach. Extensively tested across multiple devices, browsers, and operating systems to verify functionality responsiveness and cross-platform compatibility.',
    links: {
      mainLink: 'https://bachelor-thesis-steel.vercel.app/',
      additionalLinks: [
        {
          label: 'Demo',
          url: 'https://bachelor-thesis-steel.vercel.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/bakalarska-prace',
        },
        {
          label: 'ČZU',
          url: 'https://is.czu.cz/zp/index.pl?zp=357843;zpet=;prehled=vyhledavani;vzorek_zp=Timur%20Iliyev;kde=nazev;kde=autor;kde=klic_slova;filtr_stav=bez;zobrazit=Zobrazit;typ=1;typ=2;typ=3;typ=101;typ=8;typ=10;typ=7;fakulta=20;fakulta=41;fakulta=40;fakulta=71;fakulta=50;fakulta=73;fakulta=72;fakulta=10;fakulta=30;obhajoba=2026;obhajoba=2025;obhajoba=2024;jazyk=1;jazyk=3;jazyk=2;jazyk=-1',
        },
      ],
    },
    images: {
      preview:
        '/src/assets/images/projects/porsche-club-desktop.jpeg',
      fullSizeImages: [
        {
          title: 'Content 1',
          src: '/src/assets/images/projects/bachelor-thesis-content-1.png',
        },
        {
          title: 'Content 2',
          src: '/src/assets/images/projects/bachelor-thesis-content-2.png',
        },
        {
          title: 'On desktop',
          src: '/src/assets/images/projects/porsche-club-desktop.jpeg',
        },
        {
          title: 'On mobile',
          src: '/src/assets/images/projects/porsche-club-mobile.jpeg',
        },
      ],
    },
    stack: [
      {
        name: 'HTML',
        logo: 'html',
      },
      {
        name: 'CSS',
        logo: 'css',
      },
      {
        name: 'Bootstrap',
        logo: 'bootstrap',
      },
    ],
  },
  {
    name: 'MPA Starter Template',
    description:
      'Quick-deploy MPA starter template with one-command setup (npm create mpa). Pre-configured ecosystem, ready to use: Minista SSG framework, Vite bundler, SCSS/PostCSS, ESLint, StyleLint, Prettier. Includes 14 built-in accessible components (Accordion, Tabs, Select, Slider, etc.), pre-made utility styles and modules, comprehensive documentation for utilities, folder structure, and workflows. The template is based on Desktop-First responsive approach and BEM methodology. Fully customizable and flexible. Allows to dive into development immediately with production-ready foundation and best practices built-in.',
    links: {
      mainLink: 'https://www.npmjs.com/package/create-mpa',
      additionalLinks: [
        {
          label: 'NPM',
          url: 'https://www.npmjs.com/package/create-mpa',
        },
        {
          label: 'GitHub - CLI',
          url: 'https://github.com/timur-iliyev/create-mpa',
        },
        {
          label: 'GitHub - Template',
          url: 'https://github.com/timur-iliyev/mpa-starter-template',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/mpa-starter-template.png',
      fullSizeImages: [
        {
          title: 'NPM',
          src: '/src/assets/images/projects/mpa-starter-template.png',
        },
      ],
    },
    stack: [
      {
        name: 'Minista',
        logo: 'minista',
      },
      {
        name: 'Vite',
        logo: 'vite',
      },
      {
        name: 'JSX',
        logo: 'jsx',
      },
      {
        name: 'JavaScript',
        logo: 'js',
      },
      {
        name: 'Sass',
        logo: 'sass',
      },
      {
        name: 'PostCSS',
        logo: 'postcss',
      },
      {
        name: 'Git',
        logo: 'git',
      },
      {
        name: 'ESLint',
        logo: 'eslint',
      },
      {
        name: 'StyleLint',
        logo: 'stylelint',
      },
      {
        name: 'Prettier',
        logo: 'prettier',
      },
      {
        name: 'NPM',
        logo: 'npm',
      },
      {
        name: 'BEM',
        logo: 'bem',
      },
    ],
  },
  {
    name: 'ToDo App',
    description:
      'Interactive ToDo application featuring a dual-sided card interface with 3D flip animation. Active tasks display on the front; archived tasks appear on the reverse for recovery or permanent deletion. Built with class-based JavaScript architecture: main.js orchestrates logic flow, Controller.js manages business and data operations, Side.js handles UI rendering and DOM interactions. All data persists in localStorage. Includes jsonPlaceholder API integration for sample task data. Includes date-based filtering (newest-to-oldest and reversed) and task search functionality.',
    links: {
      mainLink: 'https://todo-app-dun-seven-46.vercel.app/',
      additionalLinks: [
        {
          label: 'ToDo App',
          url: 'https://todo-app-dun-seven-46.vercel.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/todo-app',
        },
        {
          label: 'Figma',
          url: 'https://www.figma.com/design/5g3oOYX6GNlezUCuk1xmaS/To-Do-List?node-id=1-866&t=tmn5Tva7USynHafM-0',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/todo-desktop.jpeg',
      fullSizeImages: [
        {
          title: 'On desktop',
          src: '/src/assets/images/projects/todo-desktop.jpeg',
        },
        {
          title: 'On mobile',
          src: '/src/assets/images/projects/todo-mobile.jpeg',
        },
      ],
    },
    stack: [
      {
        name: 'JavaScript',
        logo: 'js',
      },
      {
        name: 'HTML5',
        logo: 'html',
      },
      {
        name: 'Sass',
        logo: 'sass',
      },
      {
        name: 'Git',
        logo: 'git',
      },
      {
        name: 'ESLint',
        logo: 'eslint',
      },
      {
        name: 'StyleLint',
        logo: 'stylelint',
      },
      {
        name: 'Prettier',
        logo: 'prettier',
      },
      {
        name: 'NPM',
        logo: 'npm',
      },
      {
        name: 'BEM',
        logo: 'bem',
      },
    ],
  },
  {
    name: 'FoodieLand',
    description:
      'Home page of a recipe sharing platform developed as a practice project to master Minista framework, Swiper API, JSX, and Sass. Features a custom slider component built with Swiper API for smooth recipe carousel navigation. Fully functional and ready for further development — includes well-structured codebase and component-based architecture.',
    links: {
      mainLink: 'https://github.com/timur-iliyev/foodieland',
      additionalLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/foodieland',
        },
        {
          label: 'Figma',
          url: 'https://www.figma.com/design/2z1GS5I1vYSuL2RiOnJK49/Foodieland?node-id=0-1&p=f&t=hIzaxPJjo0ZaTlSg-0',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/foodieland-desktop.jpeg',
      fullSizeImages: [
        {
          title: 'On desktop',
          src: '/src/assets/images/projects/foodieland-desktop.jpeg',
        },
        {
          title: 'On mobile',
          src: '/src/assets/images/projects/foodieland-mobile.jpeg',
        },
      ],
    },
    stack: [
      {
        name: 'Minista',
        logo: 'minista',
      },
      {
        name: 'Vite',
        logo: 'vite',
      },
      {
        name: 'JSX',
        logo: 'jsx',
      },
      {
        name: 'JavaScript',
        logo: 'js',
      },
      {
        name: 'Sass',
        logo: 'sass',
      },
      {
        name: 'Git',
        logo: 'git',
      },
      {
        name: 'ESLint',
        logo: 'eslint',
      },
      {
        name: 'StyleLint',
        logo: 'stylelint',
      },
      {
        name: 'Prettier',
        logo: 'prettier',
      },
      {
        name: 'NPM',
        logo: 'npm',
      },
      {
        name: 'BEM',
        logo: 'bem',
      },
    ],
  },
  {
    name: 'Weather App',
    description:
      'Final project for Codedex "The Origins III: JavaScript" course. Weather forecasting application providing real-time weather updates and forecasts for any location worldwide. Built to practice asynchronous JavaScript and API integration. Utilizes OpenWeather API for accurate weather data retrieval. Demonstrates async/await patterns, promise handling, and error management.',
    links: {
      mainLink: '/',
      additionalLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/weather-app',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/weather-app.jpeg',
      fullSizeImages: [
        {
          title: 'Main Screen',
          src: '/src/assets/images/projects/weather-app.jpeg',
        },
      ],
    },
    stack: [
      {
        name: 'HTML5',
        logo: 'html',
      },
      {
        name: 'CSS3',
        logo: 'css',
      },
      {
        name: 'JavaScript',
        logo: 'js',
      },
    ],
  },
  {
    name: 'Lego Database',
    description:
      'University term project for Database Systems course. LEGO platform database with 10 related tables modeling shops, factories, products, customers, and orders. Solved three circular relationships through careful schema design and cardinality constraints. Includes documentation with ER diagrams, SQL schema creation, 26 sophisticated queries across all SQL categories, and sample data management with transactional operations. Implemented in PostgreSQL',
    links: {
      mainLink: 'https://github.com/timur-iliyev/lego-database',
      additionalLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/lego-database',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/lego-db.png',
      fullSizeImages: [
        {
          title: 'Logical diagram',
          src: '/src/assets/images/projects/lego-db.png',
        },
      ],
    },
    stack: [
      {
        name: 'PostgreSQL',
        logo: 'postgresql',
      },
    ],
  },
  {
    name: 'GameNot',
    description:
      'Collaborative university project developing an online gaming news platform. Practiced design and development workflow: designing layouts in Figma, then implementing home page with Mobile-First approach and BEM methodology.',
    links: {
      mainLink: 'https://game-not.vercel.app/',
      additionalLinks: [
        {
          label: 'Demo',
          url: 'https://game-not.vercel.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/timur-iliyev/game-not',
        },
        {
          label: 'Figma',
          url: 'https://www.figma.com/design/MhQI5Nx7wweZ4nFTK3brM5/Web-Design-Projekt?node-id=6-59&p=f&t=DXsepVOAnXH3WeXL-0',
        },
      ],
    },
    images: {
      preview: '/src/assets/images/projects/gamenot-desktop.jpeg',
      fullSizeImages: [
        {
          title: 'On desktop',
          src: '/src/assets/images/projects/gamenot-desktop.jpeg',
        },
        {
          title: 'On mobile',
          src: '/src/assets/images/projects/gamenot-mobile.jpeg',
        },
      ],
    },
    stack: [
      {
        name: 'HTML',
        logo: 'html',
      },
      {
        name: 'CSS',
        logo: 'css',
      },
      {
        name: 'Figma',
        logo: 'figma',
      },
      {
        name: 'BEM',
        logo: 'bem',
      },
    ],
  },
]
