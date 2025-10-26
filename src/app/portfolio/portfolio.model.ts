export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string | string[];
  skills: string[];
  link?: string;
}

export interface ProjectDescription {
  overview: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export interface Project {
  title: string;
  description: string | ProjectDescription;
  technologies: string[];
  images?: {
    url: string;
    alt: string;
  }[];
  liveDemo?: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'document' | 'external' | 'arrow';
}
