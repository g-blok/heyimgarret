import { Project } from '../models/project.model';

export const PROJECTS_LIST: Project[] = [
  {
    show: true,
    id: 'camped',
    displayName: 'Camped Collective',
    link: 'camped',
    projectUrl: 'https://campedcollective.com',
    images: ['assets/projects/camped.png'],
    heroImage: 'assets/projects/camped/camped-hero.png',
    heroTitle: 'assets/projects/camped/camped-hero-title.svg',
    caption:
      'What I started in 2021 as a micro music festival has blossomed into a vibrant community, bringing together artists, nature enthusiasts, and music lovers for intimate, immersive experiences.',
    overview:
      'Camped Collective is the culmination of years of passion for music, starting from burning CDs to hosting my own festival. What began as a crazy idea a decade ago has now grown into a yearly micro festival, bringing together a vibrant community where music, nature, and connection thrive.',
    vision: {
      text: "Camped Collective is where nature meets neon, celebrating individuality, community, and music. What began as a bachelor party festival in 2020 has now grown into a vibrant yearly event, connecting people who share the same passion for creativity and connection. Our festival fosters a space for expression, for pushing boundaries, and for celebrating the unique energy each person brings. This is more than just an event—it's a year-round collective driven by a love for music and community.",
      images: [
        {
          image: 'assets/projects/camped/vision/camped-dome.png',
          credit: '',
        },
        {
          image: 'assets/projects/camped/vision/camped-tent.png',
          credit: '',
        },
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/camped/branding/camped-colors.png',
        text: `Why the bold, highlighter colors? Because I've always believed that standing out is the new fitting in. These vibrant hues aren't just for show; they capture the energy, excitement, and diversity that come alive when we gather. Camped is all about celebrating those who aren't afraid to shine bright, express themselves, and be a part of something bigger. Together, we create something that stands out and leaves a lasting, positive impact on both our community and the world around us.`,
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
        text: `I chose "Permanent Marker" for the main title to capture the bold, DIY energy of Camped. "Montserrat Alternates" adds a modern, unique flair to headers, while "Montserrat" for body text ensures clarity and professionalism, complementing the festival's creative vibe.`,
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
    show: true,
    id: 'bloch-handiworks',
    displayName: 'Bloch Handiworks',
    link: 'bloch-handiworks',
    projectUrl: 'https://blochhandi.works',
    images: ['assets/projects/bloch_handiworks.png'],
    heroImage: 'assets/projects/bloch_handiworks/bloch-handiworks-hero.png',
    heroTitle:
      'assets/projects/bloch_handiworks/bloch-handiworks-hero-title.svg',
    caption:
      'Under Bloch Handiworks I craft solutions for a climate-minded, solarpunk future—building a circular economy through the mission of "Repair, Restore, Reinvent".',
    overview:
      'Bloch Handiworks is my personal outlet for woodworking, electronics, and fabrication dedicated to finding the best solutions for people looking to give new life to what they already have. I focus on circular economy principles, reducing waste through repair, repurposing, and thoughtful design that honors both material and craft. This is my way of bringing about the solarpunk future I envision.',
    vision: {
      text: 'Bloch Handiworks envisions a solarpunk future where every project is focused on reducing waste as part of a circular economy—where I repair instead of replace, repurpose instead of discard, and build with intention for a sustainable world. I craft solutions that bring joy to people while creating beautiful, functional pieces that stand the test of time.',
      images: [
        {
          image:
            'assets/projects/bloch_handiworks/vision/bloch-handiworks-vision-1.jpg',
          credit:
            'Photo by <a href="https://unsplash.com/@motosha?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Salah Ait Mokhtar</a> on <a href="https://unsplash.com/photos/a-pile-of-scissors-BsIjam4Bjm4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          image:
            'assets/projects/bloch_handiworks/vision/bloch-handiworks-vision-2.png',
          credit:
            'Photo by <a href="https://unsplash.com/@grundsteins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristaps Grundsteins</a> on <a href="https://unsplash.com/photos/workshop-with-woodworking-machinery-and-large-window-Dzd-Xt3QWKw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
      ],
    },
    branding: {
      colors: {
        image:
          'assets/projects/bloch_handiworks/branding/bloch-handiworks-colors.png',
        text: `My color palette reflects the solarpunk aesthetic with retro flair—earth tones that ground me in sustainability while evoking the warmth of a workshop where every material has value. These colors aren't just chosen for their beauty; they represent my commitment to a better world, where repair and repurpose take precedence over replacement, and waste reduction is woven into every design decision.`,
        palette: [
          {
            name: 'Rusty Wrench',
            description:
              'embodies the well-worn tools and time-tested craftsmanship that define my workshop, where every piece tells a story of dedication and skill.',
            hex: '#C16D47',
          },
          {
            name: 'Workshop Sage',
            description:
              'symbolizes my commitment to sustainability—repairing, repurposing, and reducing waste instead of replacing, honoring both the material and the craft.',
            hex: '#4D6C58',
          },
          {
            name: 'Brass Hardware',
            description:
              'captures the attention to detail and the finishing touches that transform a piece from good to exceptional.',
            hex: '#DCC65D',
          },
          {
            name: 'Just Black',
            description:
              'represents the precision, clarity, and bold definition that brings every design to life.',
            hex: '#000000',
          },
        ],
      },
      fonts: {
        image:
          'assets/projects/bloch_handiworks/branding/bloch-handiworks-fonts.png',
        text: `My typography embraces a timeless aesthetic—something that endures. I chose retro fonts to harken back to when things were just built different and made to last. Chango for titles captures that enduring energy, while Comfortaa for body text ensures clarity and approachability. Together, they're like the well-worn tools in my workshop: reliable, beautiful, and built to stand the test of time.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-1.png',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-2.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-3.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-4.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-5.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-6.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-7.JPG',
        'assets/projects/bloch_handiworks/content/bloch-handiworks-content-8.JPG',
      ],
    },
  },
  {
    show: true,
    id: 'ecodraw',
    displayName: 'EcoDraw',
    link: 'ecodraw',
    projectUrl: null,
    images: ['assets/projects/ecodraw.png'],
    heroImage: 'assets/projects/ecodraw/ecodraw-hero.png',
    heroTitle: 'assets/projects/ecodraw/ecodraw-hero-title.svg',
    caption:
      'EcoDraw is a platform that helps energy storage and renewable developers sell, build, and manage their projects across the entire lifecycle—from the spark of an idea to operational success.',
    overview:
      'EcoDraw is a platform that helps energy storage and renewable developers sell, build, and manage their projects across the entire lifecycle—from the spark of an idea to operational success.',
    vision: {
      text: `EcoDraw envisions a world where managing energy projects is as inspiring as the clean future we're working towards. Our platform is designed to make energy projects easy and fun, whether you're an engineer in the weeds or a C-suite exec looking at the big picture.`,
      images: [
        {
          image: 'assets/projects/ecodraw/vision/ecodraw-vision-1.png',
          credit:
            'Photo by <a href="https://unsplash.com/@jxk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Kopřiva</a> on <a href="https://unsplash.com/photos/white-windmill-weBdEIOZjF4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
        {
          image: 'assets/projects/ecodraw/vision/ecodraw-vision-2.jpg',
          credit:
            'Photo by <a href="https://unsplash.com/@jeisblack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Mavrommatis</a> on <a href="https://unsplash.com/photos/silhouette-photography-of-assorted-solar-panel-behind-trees-KRWfiWPqbq8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        },
      ],
    },
    branding: {
      colors: {
        image: 'assets/projects/ecodraw/branding/ecodraw-colors.png',
        text: `Our color palette of muted greens and blues—Moss Veil, Evergreen Haze, Fern Mist, Riverstone, and Sunlit Dune—strikes a balance between sustainability and professionalism. These tones convey our commitment to renewable energy while maintaining a modern, work-ready aesthetic that speaks to both engineers in the field and executives in the boardroom.`,
        palette: [
          {
            name: 'Moss Veil',
            description:
              'evokes the lush and vibrant energy of a thriving ecosystem.',
          },
          {
            name: 'Evergreen Haze',
            description:
              'symbolizes the enduring and sustainable nature of renewable energy.',
          },
          {
            name: 'Fern Mist',
            description:
              "captures the freshness and innovation of EcoDraw's approach.",
          },
          {
            name: 'Riverstone',
            description:
              'reflects the stability and reliability of our platform.',
          },
          {
            name: 'Sunlit Dune',
            description:
              'embodies the warmth and optimism of a sustainable future.',
          },
        ],
      },
      fonts: {
        image: 'assets/projects/ecodraw/branding/ecodraw-fonts.png',
        text: `Our fonts are designed to be both approachable and professional, reflecting the innovative energy behind EcoDraw.`,
      },
    },
    content: {
      header: 'CONTENT',
      images: [
        'assets/projects/ecodraw/content/ecodraw-content-1.png',
        'assets/projects/ecodraw/content/ecodraw-content-2.png',
        'assets/projects/ecodraw/content/ecodraw-content-3.png',
        'assets/projects/ecodraw/content/ecodraw-content-4.png',
        'assets/projects/ecodraw/content/ecodraw-content-5.png',
      ],
    },
  },
  {
    show: true,
    id: 'plant-daddy',
    displayName: 'Plant Daddy',
    link: 'plant-daddy',
    projectUrl: null,
    images: ['assets/projects/plant_daddy.png'],
    heroImage: 'assets/projects/plant_daddy/plant-daddy-hero.png',
    heroTitle: 'assets/projects/plant_daddy/plant-daddy-hero-title.svg',
    caption:
      'Plant Daddy is an innovative app that helps users monitor and care for their plants, providing personalized care instructions and connecting them with local nurseries.',
    overview:
      'Plant Daddy is an innovative app that helps users monitor and care for their plants, providing personalized care instructions and connecting them with local nurseries.',
    vision: {
      text: 'Plant Daddy envisions a world where every plant grooves to the rhythm of life, and every plant parent feels like a disco star in the garden. Our mission is to cultivate a community of funky green thumbs who share a passion for nurturing nature with a groovy twist.',
      images: [
        {
          image: 'assets/projects/plant_daddy/vision/plant-daddy-vision-1.png',
          credit: '',
        },
        {
          image: 'assets/projects/plant_daddy/vision/plant-daddy-vision-2.png',
          credit: '',
        },
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
    show: false,
    id: 'sea-quill',
    displayName: 'Sea Quill',
    link: 'sea-quill',
    projectUrl: null,
    images: ['assets/projects/sea_quill.png'],
    heroImage: 'assets/sea-quill-hero.jpg',
    heroTitle: 'assets/projects/sea_quill/sea-quill-hero-title.svg',
    caption:
      'Sea Quill is an application that offers a fun pirate-themed take on database exploratory data analysis. Simply connect the app to your database and let AI help you create dashboards, reports, and exports to get a deeper understanding and automation over your data.',
    overview:
      'Sea Quill is an application that offers a fun pirate-themed take on database exploratory data analysis. Simply connect the app to your database and let AI help you create dashboards, reports, and exports to get a deeper understanding and automation over your data.',
    vision: {
      text: `Sea Quill envisions a world where data exploration is as adventurous and exciting as a pirate's quest. Our app transforms the mundane task of data analysis into a thrilling journey, empowering users to uncover hidden treasures within their data.`,
      images: [
        {
          image: 'assets/projects/sea_quill/vision/sea-quill-ship.png',
          credit: '',
        },
        {
          image: 'assets/projects/sea_quill/vision/sea-quill-map.png',
          credit: '',
        },
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
