export interface ExternalLink {
    website?: string;
    instagram?: string;
    soundcloud?: string;
  }
  
  export interface Project {
    name: string;
    displayName: string;
    link: string;
    externalLink: ExternalLink;
    snippet: string;
    description: string;
    images: string[];
  }
  