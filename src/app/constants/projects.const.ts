import { Project } from '../models/project.model';

export const PROJECTS_LIST: Project[] = [
  {
    id: 'camped',
    displayName: 'Camped Collective',
    link: 'camped',
    images: ['assets/projects/camped.png'],
    heroImage: 'assets/projects/camped/camped-hero.png',
    heroTitle: 'assets/projects/camped/camped-hero-title.svg',
    overview:
      'Camped Collective is a unique micro music festival that brings together artists, nature enthusiasts, and community-minded individuals for an intimate and immersive experience.',
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
      ],
    },
  },
  {
    id: 'plant-daddy',
    displayName: 'Plant Daddy',
    link: 'plant-daddy',
    images: ['assets/projects/plant_daddy.png'],
    heroImage: 'assets/projects/plant_daddy/plant-daddy-hero.png',
    heroTitle: 'assets/projects/plant_daddy/plant-daddy-hero-title.svg',
    overview:
      'Plant Daddy is an innovative app that helps users monitor and care for their plants, providing personalized care instructions and connecting them with local nurseries.',
    vision: {
      text: 'Plant Daddy envisions a world where every plant grooves to the rhythm of life, and every plant parent feels like a disco star in the garden. Our mission is to cultivate a community of funky green thumbs who share a passion for nurturing nature with a groovy twist.',
      images: [
        'assets/projects/plant_daddy/vision/plant-daddy-vision-1.png',
        'assets/projects/plant_daddy/vision/plant-daddy-vision-2.png',
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/plant_daddy/branding/plant-daddy-colors.png',
        text: `Our color palette is inspired by the vibrant hues of a disco dance floor, reflecting the diversity and beauty of the plant kingdom. These colors symbolize the groovy energy, vitality, and the joy of nurturing life in a funky way.`,
        palette: [
          {
            name: 'Groovy Green',
            description:
              'captures the vibrant and lively energy of a disco jungle.',
          },
          {
            name: 'Cool Cucumber',
            description: 'symbolizes the fresh and mellow vibes of new growth.',
          },
          {
            name: 'Disco Sunshine',
            description:
              'radiates the warm and inviting glow of a dance floor under the sun.',
          },
          {
            name: 'Funky Copper',
            description:
              'reflects the rich and dynamic tones of a groovy garden.',
          },
          {
            name: 'Boogie Brown',
            description:
              'embodies the earthy and soulful essence of a well-loved plant haven.',
          },
        ],
      },
      fonts: {
        image: 'assets/projects/plant_daddy/branding/plant-daddy-fonts.png',
        text: `Our fonts are bold and funky, designed to be both eye-catching and fun. They reflect the groovy and playful nature of our app, making it easy for users to navigate and enjoy their plant care journey with a disco twist.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/plant_daddy/content/plant-daddy-content-1.png',
        'assets/projects/plant_daddy/content/plant-daddy-content-2.png',
        'assets/projects/plant_daddy/content/plant-daddy-content-3.png',
        'assets/projects/plant_daddy/content/plant-daddy-content-4.png',
        'assets/projects/plant_daddy/content/plant-daddy-content-5.png',
      ],
    },
  },
  {
    id: 'beat-buckets',
    displayName: 'Beat Buckets',
    link: 'beat-buckets',
    images: ['assets/projects/beat_buckets.png'],
    heroImage: 'assets/beat-buckets-hero.jpg',
    heroTitle: 'assets/projects/beat_buckets/beat-buckets-hero-title.svg',
    overview:
      'Beat Buckets is a comprehensive app that helps DJs manage their music collections across multiple platforms, ensuring they never miss a beat or buy duplicate tracks.',
    vision: {
      text: 'Beat Buckets is where music meets innovation, providing DJs with the tools they need to manage their collections effortlessly. Our vision is to create a seamless experience that keeps the music flowing and the creativity alive.',
      images: [
        'assets/projects/beat_buckets/vision/beat-buckets-vision-1.png',
        'assets/projects/beat_buckets/vision/beat-buckets-vision-2.png',
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/beat_buckets/branding/beat-buckets-colors.png',
        text: `Our color palette is designed to reflect the dynamic and energetic nature of the DJ community. These colors are not just visually striking; they represent the vibrant beats and rhythms that define our app. Each hue is a testament to the passion and creativity that DJs bring to their craft.`,
        palette: [
          {
            name: 'Electric Blue',
            description:
              'captures the electrifying energy of a live DJ set, keeping the crowd moving and engaged.',
          },
          {
            name: 'Neon Green',
            description:
              'symbolizes the fresh and innovative approach we bring to music management.',
          },
          {
            name: 'Vibrant Purple',
            description:
              'represents the creativity and uniqueness of each DJ’s personal style.',
          },
          {
            name: 'Bright Red',
            description:
              'embodies the passion and intensity that drives every performance.',
          },
          {
            name: 'Bold Yellow',
            description:
              'reflects the optimism and joy that music brings to our lives.',
          },
        ],
      },
      fonts: {
        image: 'assets/projects/beat_buckets/branding/beat-buckets-fonts.png',
        text: `Our fonts are bold and modern, designed to be both functional and visually appealing. They reflect the clarity and precision of our app, making it easy for DJs to navigate and manage their music collections.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/beat_buckets/content/beat-buckets-content-1.png',
        'assets/projects/beat_buckets/content/beat-buckets-content-2.png',
        'assets/projects/beat_buckets/content/beat-buckets-content-3.png',
        'assets/projects/beat_buckets/content/beat-buckets-content-4.png',
        'assets/projects/beat_buckets/content/beat-buckets-content-5.png',
      ],
    },
  },
  {
    id: 'sea-quill',
    displayName: 'Sea Quill',
    link: 'sea-quill',
    images: ['assets/projects/sea_quill.png'],
    heroImage: 'assets/sea-quill-hero.jpg',
    heroTitle: 'assets/projects/sea_quill/sea-quill-hero-title.svg',
    overview:
      'Sea Quill is an application that offers a fun pirate-themed take on database exploratory data analysis. Simply connect the app to your database and let AI help you create dashboards, reports, and exports to get a deeper understanding and automation over your data.',
    vision: {
      text: `Sea Quill envisions a world where data exploration is as adventurous and exciting as a pirate's quest. Our app transforms the mundane task of data analysis into a thrilling journey, empowering users to uncover hidden treasures within their data.`,
      images: [
        'assets/projects/sea_quill/vision/sea-quill-ship.png',
        'assets/projects/sea_quill/vision/sea-quill-map.png',
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/sea_quill/branding/sea-quill-colors.png',
        text: `Our color palette is inspired by the vibrant and adventurous spirit of the high seas. These colors not only make the app visually appealing but also evoke a sense of excitement and discovery.`,
        palette: [
          {
            name: 'Ocean Blue',
            description:
              'represents the vast and deep possibilities of data exploration.',
          },
          {
            name: 'Treasure Gold',
            description:
              'symbolizes the valuable insights and discoveries that can be unearthed.',
          },
          {
            name: 'Pirate Black',
            description:
              'captures the mystery and intrigue of delving into unknown data territories.',
          },
          {
            name: 'Map Beige',
            description:
              'reflects the guidance and clarity our app provides in navigating complex data.',
          },
          {
            name: 'Parrot Green',
            description:
              'embodies the lively and engaging user experience that makes data analysis enjoyable.',
          },
        ],
      },
      fonts: {
        image: 'assets/projects/sea_quill/branding/sea-quill-fonts.png',
        text: `Our fonts are designed to be both playful and professional, striking a balance between fun and functionality. They enhance readability while adding a touch of pirate-themed charm to the app.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/sea_quill/content/sea-quill-content-1.png',
        'assets/projects/sea_quill/content/sea-quill-content-2.png',
        'assets/projects/sea_quill/content/sea-quill-content-3.png',
        'assets/projects/sea_quill/content/sea-quill-content-4.png',
        'assets/projects/sea_quill/content/sea-quill-content-5.png',
      ],
    },
  },
];
