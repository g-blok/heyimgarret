export interface ExternalLink {
  website?: string;
  instagram?: string;
  soundcloud?: string;
}

export interface Project {
  id: string;
  displayName: string;
  link: string;
  images: string[];
  subtitle: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  designProcess: DesignStep[];
  results: string;
  technologies: string[];
  vision?: string;
}

interface DesignStep {
  title: string;
  description: string;
  image?: string;
}
