// Category type definitions
export interface Subcategory {
  name: string;
  description: string;
  href: string;
}

export interface FeaturedContent {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface CategoryWithMegaMenu {
  name: string;
  slug: string;
  href: string;
  description: string;
  subcategories: Subcategory[];
  featured?: FeaturedContent;
}

// Dynamic featured post type (used when fetching from content collection)
export interface DynamicFeaturedPost {
  title: string;
  description: string;
  href: string;
  image?: string;
  category: string;
  date: Date;
}

// All blog categories - customize these for your blog
export const ALL_CATEGORIES = [
  'Tutorials',
  'Guides',
  'Engineering',
  'News',
  'Open Source',
] as const;

// Helper function to generate category slug
export function getCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Generate category link object (simple version)
export function getCategoryLink(category: string) {
  return {
    name: category,
    href: `/category/${getCategorySlug(category)}`,
  };
}

// Get all category links (simple version)
export function getAllCategoryLinks() {
  return ALL_CATEGORIES.map(getCategoryLink);
}

// Enhanced category configurations with mega menu data
// Customize these categories for your blog
export const CATEGORIES_WITH_MEGA_MENU: CategoryWithMegaMenu[] = [
  {
    name: 'Tutorials',
    slug: 'tutorials',
    href: '/category/tutorials',
    description: 'Step-by-step guides and hands-on tutorials',
    subcategories: [
      {
        name: 'Getting Started',
        description: 'Beginner-friendly introductions',
        href: '/category/tutorials?tag=getting-started',
      },
      {
        name: 'Advanced',
        description: 'Deep dives for experienced developers',
        href: '/category/tutorials?tag=advanced',
      },
      {
        name: 'Quick Tips',
        description: 'Short, actionable techniques',
        href: '/category/tutorials?tag=tips',
      },
      {
        name: 'Video Tutorials',
        description: 'Learn by watching',
        href: '/category/tutorials?tag=video',
      },
      {
        name: 'Code Examples',
        description: 'Ready-to-use code snippets',
        href: '/category/tutorials?tag=examples',
      },
      {
        name: 'Projects',
        description: 'Build real-world applications',
        href: '/category/tutorials?tag=projects',
      },
    ],
    featured: {
      title: 'Welcome to Astro Carbon',
      description: 'Get started with your new GitHub-inspired dark theme for Astro',
      href: '/posts/welcome-to-astro-carbon',
      image: '/images/demo-hero.svg',
    },
  },
  {
    name: 'Guides',
    slug: 'guides',
    href: '/category/guides',
    description: 'Comprehensive guides and best practices',
    subcategories: [
      {
        name: 'Best Practices',
        description: 'Industry-proven patterns',
        href: '/category/guides?tag=best-practices',
      },
      {
        name: 'Architecture',
        description: 'System design guidance',
        href: '/category/guides?tag=architecture',
      },
      {
        name: 'Testing',
        description: 'Quality assurance strategies',
        href: '/category/guides?tag=testing',
      },
      {
        name: 'Performance',
        description: 'Optimization techniques',
        href: '/category/guides?tag=performance',
      },
      {
        name: 'Security',
        description: 'Secure coding practices',
        href: '/category/guides?tag=security',
      },
      {
        name: 'Deployment',
        description: 'CI/CD and hosting',
        href: '/category/guides?tag=deployment',
      },
    ],
  },
  {
    name: 'Engineering',
    slug: 'engineering',
    href: '/category/engineering',
    description: 'Software architecture and system design',
    subcategories: [
      {
        name: 'Architecture',
        description: 'System design patterns',
        href: '/category/engineering?tag=architecture',
      },
      {
        name: 'Infrastructure',
        description: 'DevOps and cloud',
        href: '/category/engineering?tag=infrastructure',
      },
      {
        name: 'APIs',
        description: 'API design and development',
        href: '/category/engineering?tag=apis',
      },
      {
        name: 'Databases',
        description: 'Data storage and optimization',
        href: '/category/engineering?tag=databases',
      },
      {
        name: 'Microservices',
        description: 'Distributed systems',
        href: '/category/engineering?tag=microservices',
      },
      {
        name: 'Scalability',
        description: 'Building for growth',
        href: '/category/engineering?tag=scalability',
      },
    ],
  },
  {
    name: 'News',
    slug: 'news',
    href: '/category/news',
    description: 'Latest updates and announcements',
    subcategories: [
      {
        name: 'Announcements',
        description: 'Product and feature updates',
        href: '/category/news?tag=announcements',
      },
      {
        name: 'Industry',
        description: 'Tech industry news',
        href: '/category/news?tag=industry',
      },
      {
        name: 'Community',
        description: 'Community highlights',
        href: '/category/news?tag=community',
      },
      {
        name: 'Events',
        description: 'Conferences and meetups',
        href: '/category/news?tag=events',
      },
      {
        name: 'Releases',
        description: 'Version releases and changelogs',
        href: '/category/news?tag=releases',
      },
      {
        name: 'Interviews',
        description: 'Developer interviews',
        href: '/category/news?tag=interviews',
      },
    ],
  },
  {
    name: 'Open Source',
    slug: 'open-source',
    href: '/category/open-source',
    description: 'Contributing to and building open source',
    subcategories: [
      {
        name: 'Getting Started',
        description: 'First contributions',
        href: '/category/open-source?tag=getting-started',
      },
      {
        name: 'Maintainership',
        description: 'Managing projects',
        href: '/category/open-source?tag=maintainership',
      },
      {
        name: 'Licensing',
        description: 'Understanding licenses',
        href: '/category/open-source?tag=licensing',
      },
      {
        name: 'Community',
        description: 'Building communities',
        href: '/category/open-source?tag=community',
      },
      {
        name: 'Documentation',
        description: 'Writing great docs',
        href: '/category/open-source?tag=documentation',
      },
      {
        name: 'Funding',
        description: 'Sustaining projects',
        href: '/category/open-source?tag=funding',
      },
    ],
  },
];
