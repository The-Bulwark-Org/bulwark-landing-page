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
    title: "A Slip Isn't Day One: What to Do in the 24 Hours After a Relapse",
    slug: 'slip-isnt-day-one-24-hours-after-relapse',
    date: '2026-11-02',
    readTime: '6 min read',
    category: 'Habits',
    author: 'Bulwark Team',
    tag: 'Habits',
    image: '/assets/womanbrain.svg',
    imageAlt: 'Illustration of a woman with a colorful brain',
  },
];
