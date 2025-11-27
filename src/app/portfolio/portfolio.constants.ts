import { Experience, Project, SocialLink } from './portfolio.model';

export const PORTFOLIO_DATA = {
  name: 'Martin Barroso',
  subtitle: 'Frontend-Focused Fullstack Developer',
  tagline: 'Angular | .NET | Azure | Salesforce',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/tinchomdb',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/martin-barroso/',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:martindanielbarroso@gmail.com',
      icon: 'email',
    },
    {
      name: 'CV',
      url: '/assets/cv.pdf',
      icon: 'document',
    },
  ] as SocialLink[],
  about: [
    "I'm a frontend-focused full-stack developer with 4 years of experience in Angular and .NET. My main strength is frontend development, with clean modular and maintainable code. I enjoy working on a team: discussing solutions, and making sure what we build actually works for users.",
    'I also have hands-on experience with Salesforce Commerce Cloud integrations. and cloud services in Azure, including Active Directory B2C, Cosmos DB, and web app deployments.',
    'I like to learn new technologies, and contribute to impactful projects. Feel free to connect with me to discuss opportunities in web development and software engineering.',
    'Before becoming a software developer, I ran my own restaurant for ten years. Managing a business taught me how to spot what really matters — understanding customers, keeping things running efficiently, and making decisions that add real value. I bring that same mindset to software: building things that solve real problems and make sense from a business point of view.',
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    year: '2022— PRESENT',
    title: 'Software Developer',
    company: 'Universal Robots - Odense, Denmark',
    description: [
      'Developed and maintained web applications with a strong focus on Angular and .NET, contributing to a server-side rendered (SSR) website and an internal component library documented with Storybook',
      'Managed and integrated Azure services, including Active Directory B2C, Functions, Cosmos DB, Blob storage and Table Storage',
      'Managed Salesforce Commerce Cloud integrations, data models, and platform configurations',
      'Utilized Azure DevOps for project management, CI/CD pipelines, and source control',
      'Ensured application quality and reliability by writing and maintaining end-to-end and component tests using Cypress, and unit and integrations tests with XUnit',
      'Worked closely with UX/UI designers and product managers using Figma',
      'Participated in an Agile Scrum environment, contributing to daily stand-ups, sprint planning, and retrospectives',
    ],
    skills: [
      'Angular',
      '.NET',
      'Azure',
      'Salesforce',
      'Storybook',
      'Cypress',
      'XUnit',
      'Figma',
      'Git',
      'Agile',
      'Scrum',
    ],
    link: 'https://kloviyo.com',
  },
  {
    year: '2021',
    title: 'Software Developer',
    company: 'Slingr - Mendoza, Argentina',
    description:
      'Developed and maintained full-stack web solutions for a large enterprise client, ADP, on their Lifion platform.',
    skills: ['Agile', 'Full-Stack Development'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Fullstack Marketplace',
    description: {
      overview:
        'I developed a complete marketplace platform from scratch — frontend, backend, and infrastructure — using Angular, .NET, and Azure. The project emphasizes clean, modular code, type safety, and clear separation of concerns across layers.',
      sections: [
        {
          title: 'Frontend',
          content: [
            'Built with Angular, featuring lazy loading and modular routing',
            'Authentication & authorization with Microsoft Entra ID and JWT',
            'Infinite scrolling and search/sorting filters',
            'Admin panel for managing products, categories, and banner slides',
            'Breadcrumb navigation, theme selector, and guest cart prompting login at checkout',
            'Demo payment flow with Stripe',
            'All UI components custom-built from scratch (no UI libraries)',
            'E2E testing with Cypress',
            'Deployed as a Static Web App in Azure',
          ],
        },
        {
          title: 'Backend',
          content: [
            'Implemented with .NET API, including Cosmos DB integration for data storage',
            'Results are cached and paginated to optimize performance',
            'Secure configuration using Azure Key Vault',
            'Stripe webhook to validate and confirm payments',
            'Guest cart identification via JWT',
            'Unit tests with xUnit',
            'Deployed as an Azure Web App Service',
          ],
        },
        {
          title: 'DevOps',
          content: 'Configured GitHub Actions for continuous deployment to Azure',
        },
      ],
    },
    technologies: [
      'Angular',
      '.NET',
      'Azure',
      'Cosmos DB',
      'MSAL',
      'Entra ID',
      'JWT',
      'Cypress',
      'Stripe',
      'GitHub Actions',
    ],
    images: [
      {
        url: 'assets/Marketplace project/Maketplace1.jpg',
        alt: 'Marketplace Homepage - Product Listing',
      },
      {
        url: 'assets/Marketplace project/Maketplace2.jpg',
        alt: 'Product Detail Page with Reviews',
      },
      {
        url: 'assets/Marketplace project/Maketplace3.jpg',
        alt: 'Shopping Cart Interface',
      },
      {
        url: 'assets/Marketplace project/Maketplace4.jpg',
        alt: 'Admin Dashboard - Product Management',
      },
    ],
    liveDemo: 'https://agreeable-pond-0d8f08903.1.azurestaticapps.net/',
    github: 'https://github.com/tinchomdb/Fullstack-Project',
  },
];
