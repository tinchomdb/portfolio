import { Experience, Project } from './portfolio.model';

export const PORTFOLIO_DATA = {
  name: 'Martin Barroso',
  subtitle: 'Fullstack Software Developer',
  tagline: 'Angular | .NET | Azure | Salesforce',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/tinchomdb',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/martin-barroso/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554v-11h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 8.855c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 11.597H3.555v-11h3.564v11zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
    },
  ],
  about: [
    'Full-stack developer with 4 years of experience in Angular and .NET. My main strength is frontend development — turning ideas into clean, functional interfaces. I enjoy working on a team: discussing solutions, keeping things simple, and making sure what we build actually works for users.',
    'I also have hands-on experience with Salesforce Commerce Cloud integrations. and cloud services in Azure, including Active Directory B2C, Cosmos DB, and web app deployments.',
    'Before becoming a software developer, I ran my own restaurant for ten years. Managing a business taught me how to spot what really matters — understanding customers, keeping things running efficiently, and making decisions that add real value. I bring that same mindset to software: building things that solve real problems and make sense from a business point of view.',
    'I am eager to leverage my skill set, quickly learn new technologies, and contribute to impactful projects. Feel free to connect with me to discuss opportunities in web development and software engineering.',
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    year: '2022— PRESENT',
    title: 'Software Developer',
    company: 'Universal Robots',
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
    company: 'Slingr',
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
            "Caching with .NET's built-in IMemoryCache",
            'Secure configuration using Azure Key Vault',
            'Stripe webhook to validate and confirm payments',
            'Pagination, guest cart identification via JWT, and unit tests with xUnit',
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
