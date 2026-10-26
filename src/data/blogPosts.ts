export type BlogCategory = 'Habits' | 'Stories';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  author: string;
  tag: string;
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: '5 Evidence Based Habits to Lower Daily Anxiety',
    slug: 'evidence-based-habits-lower-daily-anxiety',
    date: '2026-09-26',
    readTime: '8 min read',
    category: 'Habits',
    author: 'Bulwark Team',
    tag: 'Bulwark Team',
    image: '/assets/manbrain.svg',
    imageAlt: 'Profile illustration showing a glowing brain',
  },
  {
    title: 'How Mindfulness Transforms Workplace Productivity',
    slug: 'mindfulness-workplace-productivity',
    date: '2026-10-10',
    readTime: '12 min read',
    category: 'Habits',
    author: 'Bulwark Team',
    tag: 'Habits',
    image: '/assets/womanbrain.svg',
    imageAlt: 'Illustration of a woman with a colorful brain',
  },
  {
    title: 'The Science Behind Better Sleep: Tips You Can Trust',
    slug: 'science-behind-better-sleep',
    date: '2026-10-24',
    readTime: '7 min read',
    category: 'Habits',
    author: 'Bulwark Team',
    tag: 'Bulwark Team',
    image: '/assets/3-pple.svg',
    imageAlt: 'Illustration of three people supporting each other',
  },
  {
    title: 'How Mindfulness Transforms Everyday Life',
    slug: 'mindfulness-everyday-life',
    date: '2026-11-05',
    readTime: '5 min read',
    category: 'Stories',
    author: 'Bulwark Team',
    tag: 'Stories',
    image: '/assets/2-pple.svg',
    imageAlt: 'Illustration of two people talking',
  },
  {
    title: 'Exploring the Future of Renewable Energy',
    slug: 'future-of-renewable-energy',
    date: '2026-12-01',
    readTime: '8 min read',
    category: 'Stories',
    author: 'Bulwark Team',
    tag: 'Bulwark Team',
    image: '/assets/handonkeyboad.svg',
    imageAlt: 'Illustration of hands typing on a keyboard',
  },
  {
    title: 'Mastering Remote Work: Tools and Techniques',
    slug: 'mastering-remote-work',
    date: '2026-12-15',
    readTime: '6 min read',
    category: 'Habits',
    author: 'Bulwark Team',
    tag: 'Habits',
    image: '/assets/lotofhands.png',
    imageAlt: 'Illustration of many hands holding objects',
  },
];
