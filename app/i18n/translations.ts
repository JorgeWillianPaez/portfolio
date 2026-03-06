export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Navbar
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
      hire: "Contratar",
      lightTheme: "Tema claro",
      darkTheme: "Tema escuro",
      activateLight: "Ativar tema claro",
      activateDark: "Ativar tema escuro",
      openMenu: "Abrir menu",
    },

    // Hero
    hero: {
      roles: [
        "Especialista Power Platform",
        "Desenvolvedor Dynamics 365 CRM",
        "Desenvolvedor Full Stack",
        "Desenvolvedor React & Next.js",
        "Engenheiro de Software",
      ],
      available: "Disponível para oportunidades",
      greeting: "Olá, sou",
      description:
        "Especializado em <strong>Power Platform</strong> e <strong>Dynamics 365 CRM</strong>, com sólida base em desenvolvimento web full stack com React, Next.js e Node.js. Transformo processos corporativos em soluções digitais eficientes.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em contato",
      scroll: "scroll",
    },

    // About
    about: {
      tag: "Sobre mim",
      titleStart: "Construindo o futuro,",
      titleHighlight: "uma linha de código por vez",
      bio1: "Sou <strong>Jorge Willian Paez Nagakura</strong>, desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções digitais que fazem a diferença. Com experiência em todo o ciclo de desenvolvimento — do backend ao frontend — me dedico a entregar aplicações robustas, performáticas e com excelente experiência do usuário.",
      bio2: "Trabalho principalmente com o ecossistema <strong>JavaScript/TypeScript</strong>, utilizando <strong>React</strong>, <strong>Next.js</strong> e <strong>Node.js</strong> como minhas ferramentas principais. Também tenho experiência com <strong>Python/Django</strong>, <strong>C#/.NET</strong> e desenvolvimento mobile com <strong>Kotlin</strong>.",
      bio3: "Quando não estou codando, gosto de explorar novas tecnologias, contribuir com projetos open source e me manter sempre atualizado com as últimas tendências do mercado de tecnologia.",
      highlights: [
        "Power Platform (Apps, Automate, BI, Pages)",
        "Dynamics 365 CRM & Dataverse",
        "Desenvolvimento Web Full Stack",
        "Microsoft 365, Azure & SharePoint",
      ],
      viewLinkedIn: "Ver LinkedIn",
      viewGitHub: "Ver GitHub",
      stats: [
        { value: "3+", label: "Anos de experiência" },
        { value: "27+", label: "Repositórios" },
        { value: "611", label: "Contribuições (último ano)" },
        { value: "10+", label: "Tecnologias" },
      ],
      statusTitle: "Disponível para trabalhar",
      statusSub: "Aberto a novas oportunidades",
    },

    // Skills
    skills: {
      tag: "Habilidades",
      titleStart: "Meu",
      titleHighlight: "Arsenal Técnico",
      subtitle:
        "Tecnologias e ferramentas que utilizo para construir soluções completas",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Mobile",
        power: "Power Platform",
        cloud: "Microsoft & Cloud",
      },
      levels: {
        advanced: "Avançado",
        intermediate: "Intermediário",
        basic: "Básico",
      },
      badgesTitle: "Tecnologias que já utilizei",
    },

    // Projects
    projects: {
      tag: "Projetos",
      titleStart: "O que eu",
      titleHighlight: "Construí",
      subtitle:
        "Uma seleção dos projetos que desenvolvei — explorando diversas tecnologias e domínios",
      categories: [
        "Todos",
        "Microsoft",
        "Full Stack",
        "Frontend",
        "Backend",
        "Mobile",
      ],
      featured: "Destaque",
      code: "Código",
      demo: "Demo",
      liveDemo: "Demo ao vivo",
      loadMore: "Carregar mais projetos",
      githubCta: "Confira todos os projetos no GitHub",
      viewGithub: "Ver GitHub completo",
      items: [
        {
          title: "Customizações Dynamics 365 CRM",
          description:
            "Implementação e customização de Dynamics 365 CRM para processos de vendas, atendimento e marketing. Configuração de entidades, forms, views, workflows e regras de negócio usando Dataverse.",
        },
        {
          title: "Automações Power Automate",
          description:
            "Fluxos de automação corporativa com Power Automate — aprovações, sincronização entre sistemas, notificações automáticas e integração com SharePoint, Teams e serviços externos via API.",
        },
        {
          title: "GameHub",
          description:
            "Plataforma web completa para organização de coleções de jogos físicos e digitais, com catálogo extenso, integração Steam, venda de jogos digitais e blog de notas.",
        },
        {
          title: "Music Town Store",
          description:
            "E-commerce de instrumentos musicais desenvolvido com Next.js e TypeScript. Interface moderna com carrossel de produtos e deploy na Vercel.",
        },
        {
          title: "Power Apps Canvas App",
          description:
            "Aplicação canvas no Power Apps para gestão interna de processos empresariais, integrada ao Dataverse e SharePoint. Interface responsiva e customizada para usuários não-técnicos.",
        },
        {
          title: "Dashboard Power BI",
          description:
            "Dashboards interativos com Power BI para análise de dados de vendas e atendimento. Integração com Dynamics 365 e fontes externas, com visuais customizados e KPIs estratégicos.",
        },
        {
          title: "F1 Bets",
          description:
            "Aplicação de apostas da Fórmula 1 com seleção de pilotos e corridas. Interface interativa desenvolvida com React e TypeScript.",
        },
        {
          title: "Task Manager Django",
          description:
            "Sistema completo de gerenciamento de tarefas com autenticação de usuários, criação, edição e exclusão de tasks. Desenvolvido com Django e Bootstrap.",
        },
        {
          title: "Dungeons & Dragons App",
          description:
            "Aplicativo Android para criação e gerenciamento de personagens de D&D. Distribuição automática dos 27 pontos de atributos, desenvolvido com Kotlin.",
        },
      ],
    },

    // Education
    education: {
      tag: "Formação",
      titleStart: "Minha",
      titleHighlight: "Trajetória Acadêmica",
      subtitle:
        "Formação sólida em tecnologia combinada com aprendizado contínuo",
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "UTFPR — Universidade Tecnológica Federal do Paraná",
      period: "2022 — 2025",
      status: "Concluído",
      description:
        "Formação focada no desenvolvimento de software, análise de sistemas, banco de dados, engenharia de requisitos e metodologias ágeis. Projetos práticos com desenvolvimento web, mobile e aplicações enterprise.",
      highlights: [
        "Desenvolvimento Web",
        "Banco de Dados",
        "Engenharia de Software",
        "Metodologias Ágeis",
      ],
      certsTitle: "Cursos & Certificações",
      certs: [
        {
          name: "Desenvolvimento Full Stack",
          issuer: "Bootcamp / Treinamento",
        },
        { name: "React & Next.js", issuer: "Formação Prática" },
        { name: "Python para Data Science", issuer: "Treinamento" },
        { name: "DevOps Fundamentals", issuer: "Treinamento" },
      ],
    },

    // Contact
    contact: {
      tag: "Contato",
      titleStart: "Vamos",
      titleHighlight: "Trabalhar Juntos?",
      subtitle:
        "Estou disponível para projetos, oportunidades e conversas sobre tecnologia. Entre em contato!",
      infoText:
        "Se você tem um projeto em mente, uma oportunidade de emprego ou simplesmente quer bater um papo sobre tecnologia, não hesite em me contatar. Respondo sempre o mais rápido possível!",
      availTitle: "Disponível para novas oportunidades",
      availSub: "Full-time · Freelance · Remoto",
      formTitle: "Envie uma mensagem",
      labelName: "Nome",
      labelEmail: "E-mail",
      labelMessage: "Mensagem",
      placeholderName: "Seu nome completo",
      placeholderEmail: "seu@email.com",
      placeholderMessage: "Descreva seu projeto ou oportunidade...",
      sending: "Enviando...",
      send: "Enviar mensagem",
      successMessage: "Mensagem enviada! Responderei em breve.",
    },

    // Footer
    footer: {
      tagline: "Construindo experiências digitais que importam.",
      copyright: "Todos os direitos reservados.",
    },
  },

  en: {
    // Navbar
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      hire: "Hire me",
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      activateLight: "Switch to light theme",
      activateDark: "Switch to dark theme",
      openMenu: "Open menu",
    },

    // Hero
    hero: {
      roles: [
        "Power Platform Specialist",
        "Dynamics 365 CRM Developer",
        "Full Stack Developer",
        "React & Next.js Developer",
        "Software Engineer",
      ],
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      description:
        "Specialized in <strong>Power Platform</strong> and <strong>Dynamics 365 CRM</strong>, with a solid foundation in full stack web development with React, Next.js and Node.js. I turn corporate processes into efficient digital solutions.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
      scroll: "scroll",
    },

    // About
    about: {
      tag: "About me",
      titleStart: "Building the future,",
      titleHighlight: "one line of code at a time",
      bio1: "I'm <strong>Jorge Willian Paez Nagakura</strong>, a Full Stack developer passionate about technology and creating digital solutions that make a difference. With experience across the entire development cycle — from backend to frontend — I'm dedicated to delivering robust, performant applications with excellent user experience.",
      bio2: "I mainly work with the <strong>JavaScript/TypeScript</strong> ecosystem, using <strong>React</strong>, <strong>Next.js</strong> and <strong>Node.js</strong> as my main tools. I also have experience with <strong>Python/Django</strong>, <strong>C#/.NET</strong> and mobile development with <strong>Kotlin</strong>.",
      bio3: "When I'm not coding, I enjoy exploring new technologies, contributing to open source projects and staying up to date with the latest trends in the tech industry.",
      highlights: [
        "Power Platform (Apps, Automate, BI, Pages)",
        "Dynamics 365 CRM & Dataverse",
        "Full Stack Web Development",
        "Microsoft 365, Azure & SharePoint",
      ],
      viewLinkedIn: "View LinkedIn",
      viewGitHub: "View GitHub",
      stats: [
        { value: "3+", label: "Years of experience" },
        { value: "27+", label: "Repositories" },
        { value: "611", label: "Contributions (last year)" },
        { value: "10+", label: "Technologies" },
      ],
      statusTitle: "Available for work",
      statusSub: "Open to new opportunities",
    },

    // Skills
    skills: {
      tag: "Skills",
      titleStart: "My",
      titleHighlight: "Tech Arsenal",
      subtitle: "Technologies and tools I use to build complete solutions",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Mobile",
        power: "Power Platform",
        cloud: "Microsoft & Cloud",
      },
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        basic: "Basic",
      },
      badgesTitle: "Technologies I've worked with",
    },

    // Projects
    projects: {
      tag: "Projects",
      titleStart: "What I've",
      titleHighlight: "Built",
      subtitle:
        "A selection of projects I've developed — exploring various technologies and domains",
      categories: [
        "All",
        "Microsoft",
        "Full Stack",
        "Frontend",
        "Backend",
        "Mobile",
      ],
      featured: "Featured",
      code: "Code",
      demo: "Demo",
      liveDemo: "Live demo",
      loadMore: "Load more projects",
      githubCta: "Check out all projects on GitHub",
      viewGithub: "View full GitHub",
      items: [
        {
          title: "Dynamics 365 CRM Customizations",
          description:
            "Implementation and customization of Dynamics 365 CRM for sales, service and marketing processes. Configuration of entities, forms, views, workflows and business rules using Dataverse.",
        },
        {
          title: "Power Automate Automations",
          description:
            "Corporate automation flows with Power Automate — approvals, cross-system sync, automated notifications and integration with SharePoint, Teams and external services via API.",
        },
        {
          title: "GameHub",
          description:
            "Complete web platform for organizing physical and digital game collections, with extensive catalog, Steam integration, digital game sales and note blog.",
        },
        {
          title: "Music Town Store",
          description:
            "Musical instruments e-commerce built with Next.js and TypeScript. Modern interface with product carousel and Vercel deployment.",
        },
        {
          title: "Power Apps Canvas App",
          description:
            "Canvas application in Power Apps for internal management of business processes, integrated with Dataverse and SharePoint. Responsive and customized interface for non-technical users.",
        },
        {
          title: "Power BI Dashboard",
          description:
            "Interactive dashboards with Power BI for sales and service data analysis. Integration with Dynamics 365 and external sources, with custom visuals and strategic KPIs.",
        },
        {
          title: "F1 Bets",
          description:
            "Formula 1 betting application with driver and race selection. Interactive interface developed with React and TypeScript.",
        },
        {
          title: "Task Manager Django",
          description:
            "Complete task management system with user authentication, task creation, editing and deletion. Built with Django and Bootstrap.",
        },
        {
          title: "Dungeons & Dragons App",
          description:
            "Android app for creating and managing D&D characters. Automatic distribution of 27 attribute points, developed with Kotlin.",
        },
      ],
    },

    // Education
    education: {
      tag: "Education",
      titleStart: "My",
      titleHighlight: "Academic Journey",
      subtitle: "Solid technology education combined with continuous learning",
      degree: "Systems Analysis and Development",
      institution: "UTFPR — Federal University of Technology - Paraná",
      period: "2022 — 2025",
      status: "Completed",
      description:
        "Education focused on software development, systems analysis, databases, requirements engineering and agile methodologies. Hands-on projects with web, mobile and enterprise application development.",
      highlights: [
        "Web Development",
        "Databases",
        "Software Engineering",
        "Agile Methodologies",
      ],
      certsTitle: "Courses & Certifications",
      certs: [
        { name: "Full Stack Development", issuer: "Bootcamp / Training" },
        { name: "React & Next.js", issuer: "Practical Training" },
        { name: "Python for Data Science", issuer: "Training" },
        { name: "DevOps Fundamentals", issuer: "Training" },
      ],
    },

    // Contact
    contact: {
      tag: "Contact",
      titleStart: "Let's",
      titleHighlight: "Work Together?",
      subtitle:
        "I'm available for projects, opportunities and conversations about technology. Get in touch!",
      infoText:
        "If you have a project in mind, a job opportunity or simply want to chat about technology, don't hesitate to reach out. I always respond as quickly as possible!",
      availTitle: "Available for new opportunities",
      availSub: "Full-time · Freelance · Remote",
      formTitle: "Send a message",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      placeholderName: "Your full name",
      placeholderEmail: "your@email.com",
      placeholderMessage: "Describe your project or opportunity...",
      sending: "Sending...",
      send: "Send message",
      successMessage: "Message sent! I'll reply soon.",
    },

    // Footer
    footer: {
      tagline: "Building digital experiences that matter.",
      copyright: "All rights reserved.",
    },
  },
};

export type Translations = typeof translations.pt;
