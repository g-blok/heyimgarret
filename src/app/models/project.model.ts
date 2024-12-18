export interface ExternalLink {
  website?: string;
  instagram?: string;
  soundcloud?: string;
}

export interface Project {
  show: boolean;
  id: string;
  displayName: string;
  link: string;
  projectUrl: string | null;
  images: string[];
  heroImage: string;
  heroTitle: string;
  caption: string;
  overview: string;
  vision?: Vision;
  branding?: Branding;
  content?: Content;
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
