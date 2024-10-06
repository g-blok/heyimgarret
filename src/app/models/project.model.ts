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
  vision?: Vision;
  branding?: Branding;
  content?: Content;
}

interface DesignStep {
  title: string;
  description: string;
  image?: string;
}

interface Vision {
  text: string;
  images?: string[];
}

interface Branding {
  colors: {
    image: string;
    text: string;
    palette: {
      name: string;
      description: string;
    }[];
  };
  fonts: {
    image: string;
    text: string;
  };
}

interface Content {
  header: string;
  images: string[];
}
