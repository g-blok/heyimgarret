import { Project } from '../models/project.model';

export const PROJECTS_LIST: Project[] = [
  {
    id: 'camped',
    displayName: 'Camped Collective',
    link: 'camped',
    images: ['assets/projects/camped.png'],
    subtitle: 'A micro music festival celebrating nature, community, and music',
    heroImage: 'assets/projects/camped/camped-hero.png',
    overview:
      'Camped Collective is a unique micro music festival that brings together artists, nature enthusiasts, and community-minded individuals for an intimate and immersive experience.',
    challenge:
      'Design a brand identity and digital presence for a new music festival concept that emphasizes connection with nature and community.',
    solution:
      "We created a rustic yet modern brand identity and designed a responsive website to showcase the festival's unique offerings and facilitate ticket sales.",
    results:
      'The Camped Collective brand and website have successfully attracted a dedicated following, with the inaugural festival selling out within weeks of ticket release.',
    technologies: [
      'Adobe Creative Suite',
      'Figma',
      'React',
      'Node.js',
      'Shopify',
    ],
    vision: {
      text: 'Camped Collective is where nature meets neon, celebrating individuality, community, and music. Our festival is the heart of our mission, fostering a vibrant, year-round community that thrives on creativity and connection.',
      images: [
        'assets/projects/camped/vision/camped-dome.png',
        'assets/projects/camped/vision/camped-tent.png',
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/camped/branding/camped-colors.png',
        text: `Why the bold, highlighter colors? Because we believe that standing out is the new fitting in. These vibrant hues are more than just eye-catching; they symbolize the radiant energy and diverse spirits that come alive when our community gathers. These colors are not just a palette; they're a manifesto. A declaration that together, we can create something that stands out, shines bright, and leaves a lasting, positive impact on both our community and our planet. Join us, and let's paint the world in vibrant unity! 🌈🌍`,
        palette: [
          {
            name: 'Hot Pink',
            description:
              'represents the fearless creativity that drives every beat and every connection made on our dance floors.',
          },
          {
            name: 'Spanish Orange',
            description:
              'radiates the warmth and passion of our shared experiences.',
          },
          {
            name: 'School Bus Yellow',
            description:
              'captures the bright optimism and joy we feel when we come together in nature.',
          },
          {
            name: 'Jade',
            description:
              'symbolizes our commitment to the environment and sustainable practices, grounding us in the natural world that hosts our celebration.',
          },
          {
            name: 'French Violet',
            description:
              'embodies the uniqueness of each individual who contributes to the colorful mosaic that is our festival community.',
          },
        ],
      },
      fonts: {
        image: 'assets/projects/camped/branding/camped-fonts.png',
        text: `Why the bold, highlighter colors? Because we believe that standing out is the new fitting in. These vibrant hues are more than just eye-catching; they symbolize the radiant energy and diverse spirits that come alive when our community gathers.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/camped/content/camped-content-1.png',
        'assets/projects/camped/content/camped-content-2.png',
        'assets/projects/camped/content/camped-content-3.png',
        'assets/projects/camped/content/camped-content-4.png',
        'assets/projects/camped/content/camped-content-5.png',
        'assets/projects/camped/content/camped-content-6.png',
      ],
    },
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
];
