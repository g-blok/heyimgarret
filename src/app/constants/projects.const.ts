import { Project } from '../models/project.model';

export const PROJECTS_LIST: Project[] = [
  {
    id: 'sea-quill',
    displayName: 'Sea Quill',
    link: 'sea-quill',
    images: ['assets/projects/sea_quill.png'],
    subtitle: 'A tranquil writing app inspired by the ocean',
    heroImage: 'assets/sea-quill-hero.jpg',
    overview:
      'Sea Quill is a minimalist writing application that aims to provide a serene and distraction-free environment for writers, inspired by the calming essence of the ocean.',
    challenge:
      'Create a writing app that not only offers a clean interface but also incorporates elements of the sea to enhance focus and creativity.',
    solution:
      'We designed an intuitive, ocean-themed interface with subtle animations and soothing color schemes to create a unique writing experience.',
    designProcess: [
      {
        title: 'Research & Inspiration',
        description:
          'We studied various writing apps and ocean-related designs to find the perfect balance between functionality and aesthetics.',
        image: 'assets/sea-quill-research.jpg',
      },
      {
        title: 'Wireframing',
        description:
          'Created low-fidelity wireframes to establish the basic layout and user flow of the application.',
        image: 'assets/sea-quill-wireframe.jpg',
      },
      {
        title: 'Visual Design',
        description:
          'Developed a cohesive visual language using a calming blue color palette and wave-inspired elements.',
        image: 'assets/sea-quill-visual-design.jpg',
      },
      {
        title: 'Prototyping & Testing',
        description:
          'Built interactive prototypes and conducted user testing to refine the design and functionality.',
        image: 'assets/sea-quill-prototype.jpg',
      },
    ],
    results:
      'Sea Quill has been well-received by writers and has garnered positive feedback for its unique design and focus-enhancing features.',
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'Figma',
      'Adobe Creative Suite',
    ],
  },
  {
    id: 'camped',
    displayName: 'Camped Collective',
    link: 'camped',
    images: ['assets/projects/camped.png'],
    subtitle: 'A micro music festival celebrating nature, community, and music',
    heroImage: 'assets/camped-hero.jpg',
    overview:
      'Camped Collective is a unique micro music festival that brings together artists, nature enthusiasts, and community-minded individuals for an intimate and immersive experience.',
    challenge:
      'Design a brand identity and digital presence for a new music festival concept that emphasizes connection with nature and community.',
    solution:
      "We created a rustic yet modern brand identity and designed a responsive website to showcase the festival's unique offerings and facilitate ticket sales.",
    designProcess: [
      {
        title: 'Brand Exploration',
        description:
          'Developed mood boards and explored various visual directions to capture the essence of the festival.',
        image: 'assets/camped-brand-exploration.jpg',
      },
      {
        title: 'Logo Design',
        description:
          'Created a versatile logo that incorporates natural elements and a sense of community.',
        image: 'assets/camped-logo-design.jpg',
      },
      {
        title: 'Website Design',
        description:
          'Designed a responsive website with a focus on showcasing the festival experience and easy ticket purchasing.',
        image: 'assets/camped-website-design.jpg',
      },
      {
        title: 'Marketing Materials',
        description:
          'Developed a suite of marketing materials including posters, social media assets, and merchandise designs.',
        image: 'assets/camped-marketing-materials.jpg',
      },
    ],
    results:
      'The Camped Collective brand and website have successfully attracted a dedicated following, with the inaugural festival selling out within weeks of ticket release.',
    technologies: [
      'Adobe Creative Suite',
      'Figma',
      'React',
      'Node.js',
      'Shopify',
    ],
  },
  {
    id: 'plant-daddy',
    displayName: 'Plant Daddy',
    link: 'plant-daddy',
    images: ['assets/projects/plant_daddy.png'],
    subtitle: 'A smart plant monitoring and care app for green thumbs',
    heroImage: 'assets/plant-daddy-hero.jpg',
    overview:
      'Plant Daddy is an innovative app that helps users monitor and care for their plants, providing personalized care instructions and connecting them with local nurseries.',
    challenge:
      'Design a user-friendly app that simplifies plant care for both novice and experienced plant owners while integrating IoT capabilities.',
    solution:
      'We created an intuitive app with a clean, nature-inspired interface that utilizes smart sensors and machine learning to provide tailored plant care advice.',
    designProcess: [
      {
        title: 'User Research',
        description:
          'Conducted interviews and surveys with plant owners to understand their pain points and desires.',
        image: 'assets/plant-daddy-user-research.jpg',
      },
      {
        title: 'Information Architecture',
        description:
          "Developed a clear and logical structure for the app's features and content.",
        image: 'assets/plant-daddy-ia.jpg',
      },
      {
        title: 'UI Design',
        description:
          'Created a visually appealing interface with custom illustrations and an earthy color palette.',
        image: 'assets/plant-daddy-ui-design.jpg',
      },
      {
        title: 'Prototyping',
        description:
          'Built interactive prototypes to test user flows and gather feedback from potential users.',
        image: 'assets/plant-daddy-prototype.jpg',
      },
    ],
    results:
      'Plant Daddy has gained a dedicated user base and has been featured in several gardening and tech publications for its innovative approach to plant care.',
    technologies: [
      'Sketch',
      'InVision',
      'Swift',
      'Kotlin',
      'Firebase',
      'TensorFlow Lite',
    ],
  },
  {
    id: 'beat-buckets',
    displayName: 'Beat Buckets',
    link: 'beat-buckets',
    images: ['assets/projects/beat_buckets.png'],
    subtitle: "A DJ's ultimate music collection management tool",
    heroImage: 'assets/beat-buckets-hero.jpg',
    overview:
      'Beat Buckets is a comprehensive app that helps DJs manage their music collections across multiple platforms, ensuring they never miss a beat or buy duplicate tracks.',
    challenge:
      'Design a user-friendly interface that integrates seamlessly with popular music streaming services while providing powerful organization tools for DJs.',
    solution:
      'We created a sleek, intuitive app that connects with Spotify and SoundCloud, offering smart playlist management, track recommendations, and purchase tracking.',
    designProcess: [
      {
        title: 'Competitive Analysis',
        description:
          'Researched existing DJ tools and music management apps to identify opportunities for innovation.',
        image: 'assets/beat-buckets-competitive-analysis.jpg',
      },
      {
        title: 'User Flow Mapping',
        description:
          'Mapped out key user journeys to ensure a smooth and efficient experience for DJs.',
        image: 'assets/beat-buckets-user-flow.jpg',
      },
      {
        title: 'Visual Design',
        description:
          'Developed a modern, music-inspired visual language with a dark mode option for low-light environments.',
        image: 'assets/beat-buckets-visual-design.jpg',
      },
      {
        title: 'Usability Testing',
        description:
          'Conducted usability tests with professional DJs to refine the interface and features.',
        image: 'assets/beat-buckets-usability-testing.jpg',
      },
    ],
    results:
      'Beat Buckets has become a go-to tool for DJs worldwide, with a growing user base and positive reviews in DJ and music production communities.',
    technologies: [
      'Figma',
      'Adobe XD',
      'React Native',
      'Node.js',
      'MongoDB',
      'Spotify API',
      'SoundCloud API',
    ],
  },
];
