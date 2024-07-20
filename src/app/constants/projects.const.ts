import { Project } from '../models/project.model';

export const PROJECTS_LIST: Project[] = [
  {
    name: 'camped',
    displayName: 'Camped',
    link: '/projects/camped',
    externalLink: {
      website: 'https://www.campedcollective.com',
      instagram: 'https://www.instagram.com/campedcollective',
      soundcloud: 'https://www.soundcloud.com/campedcollective',
    },
    snippet: 'A music festival based on nature, community, and music.',
    description: 'Camped is a collective of artists that bring their own flavor to the group. We are not bound by genres, titles, or rank, but by the sense of welcoming and community we offer. We also host events in the cities we live in to rekindle old and spark new friendships.',
    images: [
      'assets/camped/camped_tickets.png',
      'assets/camped/camped_poster_2024.png',
      'assets/camped/ubs_album.png'
    ]
  },
  {
    name: 'sea-quill',
    displayName: 'Sea Quill',
    link: '/projects/sea-quill',
    externalLink: {
      website: 'https://www.seaquillapp.com'
    },
    snippet: 'A fun dashboarding app side project to learn React.',
    description: 'Sea Quill is a pirate-themed dashboarding app that makes drafting new dashboards from scratch a breeze. It is built using technologies like shadcn, recharts, and supabase, making it a SQL-heavy application perfect for all sea-loving pirates.',
    images: [
      'assets/images/seaquill1.jpg',
      'assets/images/seaquill2.jpg',
      'assets/images/seaquill3.jpg'
    ]
  },
  {
    name: 'plant-daddy',
    displayName: 'Plant Daddy',
    link: '/projects/plant-daddy',
    externalLink: {
      website: 'https://www.plantdaddyapp.com'
    },
    snippet: 'A design for a plant monitoring app.',
    description: 'Plant Daddy is a conceptual design for an app that helps you manage all your plants\' needs. It notifies you whenever an issue occurs with a plant and connects you to local nurseries to buy new plants, pots, and more.',
    images: [
      'assets/images/plantdaddy1.jpg',
      'assets/images/plantdaddy2.jpg',
      'assets/images/plantdaddy3.jpg'
    ]
  },
  {
    name: 'beat-buckets',
    displayName: 'Beat Buckets',
    link: '/projects/beat-buckets',
    externalLink: {
      website: 'https://www.beatbucketsapp.com'
    },
    snippet: 'Connect to your Spotify and SoundCloud accounts to manage your music collection.',
    description: 'Beat Buckets is an app that helps DJs connect to their Spotify and SoundCloud accounts to see which songs they still need to download. This ensures that DJs never buy duplicate songs or forget to snag bangers ever again.',
    images: [
      'assets/images/beatbuckets1.jpg',
      'assets/images/beatbuckets2.jpg',
      'assets/images/beatbuckets3.jpg'
    ]
  }
];
