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

// All blog categories - even those without posts yet will be shown
export const ALL_CATEGORIES = [
  'AI & ML',
  'Developer skills',
  'Engineering',
  'Enterprise software',
  'News & insights',
  'Open Source',
  'Security',
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
export const CATEGORIES_WITH_MEGA_MENU: CategoryWithMegaMenu[] = [
  {
    name: 'AI & ML',
    slug: 'ai-ml',
    href: '/category/ai-ml',
    description: 'Explore machine learning, AI agents, and autonomous systems',
    subcategories: [
      {
        name: 'Machine Learning',
        description: 'Deep learning, neural networks, and ML fundamentals',
        href: '/category/ai-ml?tag=machine-learning',
      },
      {
        name: 'AI Agents',
        description: 'Multi-agent systems and orchestration',
        href: '/category/ai-ml?tag=agents',
      },
      {
        name: 'Prompt Engineering',
        description: 'Crafting effective prompts for AI systems',
        href: '/category/ai-ml?tag=prompt-engineering',
      },
      {
        name: 'MoE Architecture',
        description: 'Mixture of Experts patterns and implementation',
        href: '/category/ai-ml?tag=moe',
      },
      {
        name: 'LLM Integration',
        description: 'Building with large language models',
        href: '/category/ai-ml?tag=llm',
      },
      {
        name: 'AI Development',
        description: 'AI-accelerated development workflows',
        href: '/category/ai-ml?tag=development',
      },
    ],
    featured: {
      title: 'Featured: Introducing Cortex',
      description: 'Built a production-ready 27K+ line autonomous AI orchestration system in just 4 weeks',
      href: '/posts/cortex-introducing-built-in-4-weeks',
      image: '/images/posts/cortex-introducing-built-in-4-weeks-hero.svg',
    },
  },
  {
    name: 'Developer skills',
    slug: 'developer-skills',
    href: '/category/developer-skills',
    description: 'Level up your development skills and productivity',
    subcategories: [
      {
        name: 'Best Practices',
        description: 'Industry-proven development patterns',
        href: '/category/developer-skills?tag=best-practices',
      },
      {
        name: 'Code Quality',
        description: 'Writing maintainable and testable code',
        href: '/category/developer-skills?tag=code-quality',
      },
      {
        name: 'Testing',
        description: 'Test-driven development and quality assurance',
        href: '/category/developer-skills?tag=testing',
      },
      {
        name: 'Debugging',
        description: 'Effective debugging strategies and tools',
        href: '/category/developer-skills?tag=debugging',
      },
      {
        name: 'Performance',
        description: 'Optimization techniques and profiling',
        href: '/category/developer-skills?tag=performance',
      },
      {
        name: 'Career Growth',
        description: 'Professional development and mentorship',
        href: '/category/developer-skills?tag=career',
      },
    ],
    featured: {
      title: 'Featured: AI-Accelerated Development',
      description: 'How to achieve 30+ commits per day with AI assistance',
      href: '/posts/cortex-ai-accelerated-development-30-commits-per-day',
      image: '/images/posts/cortex-ai-accelerated-development-30-commits-per-day-hero.svg',
    },
  },
  {
    name: 'Engineering',
    slug: 'engineering',
    href: '/category/engineering',
    description: 'Software architecture, system design, and infrastructure',
    subcategories: [
      {
        name: 'Architecture',
        description: 'System design and architectural patterns',
        href: '/category/engineering?tag=architecture',
      },
      {
        name: 'Infrastructure',
        description: 'DevOps, CI/CD, and cloud infrastructure',
        href: '/category/engineering?tag=infrastructure',
      },
      {
        name: 'APIs',
        description: 'REST, GraphQL, and API design',
        href: '/category/engineering?tag=apis',
      },
      {
        name: 'Databases',
        description: 'Database design and optimization',
        href: '/category/engineering?tag=databases',
      },
      {
        name: 'Microservices',
        description: 'Distributed systems and service architecture',
        href: '/category/engineering?tag=microservices',
      },
      {
        name: 'Scalability',
        description: 'Building systems that scale',
        href: '/category/engineering?tag=scalability',
      },
    ],
    featured: {
      title: 'Featured: Master-Worker Architecture',
      description: 'Foundation of Cortex autonomous AI system',
      href: '/posts/cortex-master-worker-architecture-foundation',
      image: '/images/posts/cortex-master-worker-architecture-foundation-hero.svg',
    },
  },
  {
    name: 'Enterprise software',
    slug: 'enterprise-software',
    href: '/category/enterprise-software',
    description: 'Building robust, scalable enterprise applications',
    subcategories: [
      {
        name: 'Authentication',
        description: 'OAuth, SSO, and identity management',
        href: '/category/enterprise-software?tag=auth',
      },
      {
        name: 'Compliance',
        description: 'GDPR, SOC2, and regulatory requirements',
        href: '/category/enterprise-software?tag=compliance',
      },
      {
        name: 'Data Management',
        description: 'Enterprise data strategies and governance',
        href: '/category/enterprise-software?tag=data',
      },
      {
        name: 'Integration',
        description: 'Enterprise system integration patterns',
        href: '/category/enterprise-software?tag=integration',
      },
      {
        name: 'Monitoring',
        description: 'Observability and incident management',
        href: '/category/enterprise-software?tag=monitoring',
      },
      {
        name: 'Migration',
        description: 'Legacy system modernization',
        href: '/category/enterprise-software?tag=migration',
      },
    ],
  },
  {
    name: 'News & insights',
    slug: 'news-insights',
    href: '/category/news-insights',
    description: 'Latest trends, updates, and industry insights',
    subcategories: [
      {
        name: 'Product Updates',
        description: 'New features and announcements',
        href: '/category/news-insights?tag=product-updates',
      },
      {
        name: 'Industry Trends',
        description: 'Emerging technologies and patterns',
        href: '/category/news-insights?tag=trends',
      },
      {
        name: 'Case Studies',
        description: 'Real-world implementation stories',
        href: '/category/news-insights?tag=case-studies',
      },
      {
        name: 'Community',
        description: 'Developer community highlights',
        href: '/category/news-insights?tag=community',
      },
      {
        name: 'Interviews',
        description: 'Expert insights and conversations',
        href: '/category/news-insights?tag=interviews',
      },
      {
        name: 'Research',
        description: 'Technical research and findings',
        href: '/category/news-insights?tag=research',
      },
    ],
    featured: {
      title: 'Featured: From Idea to Production',
      description: 'How Cortex went from concept to production in 28 days',
      href: '/posts/cortex-from-idea-to-production-28-days',
      image: '/images/posts/cortex-from-idea-to-production-28-days-hero.svg',
    },
  },
  {
    name: 'Open Source',
    slug: 'open-source',
    href: '/category/open-source',
    description: 'Contributing to and building open source software',
    subcategories: [
      {
        name: 'Getting Started',
        description: 'Your first open source contribution',
        href: '/category/open-source?tag=getting-started',
      },
      {
        name: 'Maintainership',
        description: 'Managing open source projects',
        href: '/category/open-source?tag=maintainership',
      },
      {
        name: 'Licensing',
        description: 'Understanding open source licenses',
        href: '/category/open-source?tag=licensing',
      },
      {
        name: 'Community Building',
        description: 'Growing and nurturing communities',
        href: '/category/open-source?tag=community',
      },
      {
        name: 'Documentation',
        description: 'Writing effective project docs',
        href: '/category/open-source?tag=documentation',
      },
      {
        name: 'Sponsorship',
        description: 'Funding and sustaining projects',
        href: '/category/open-source?tag=sponsorship',
      },
    ],
  },
  {
    name: 'Security',
    slug: 'security',
    href: '/category/security',
    description: 'Application security, best practices, and threat mitigation',
    subcategories: [
      {
        name: 'Authentication',
        description: 'Secure auth patterns and implementation',
        href: '/category/security?tag=authentication',
      },
      {
        name: 'Vulnerabilities',
        description: 'Common security issues and fixes',
        href: '/category/security?tag=vulnerabilities',
      },
      {
        name: 'Encryption',
        description: 'Data protection and cryptography',
        href: '/category/security?tag=encryption',
      },
      {
        name: 'DevSecOps',
        description: 'Security in the development lifecycle',
        href: '/category/security?tag=devsecops',
      },
      {
        name: 'Compliance',
        description: 'Security standards and regulations',
        href: '/category/security?tag=compliance',
      },
      {
        name: 'Incident Response',
        description: 'Handling security incidents',
        href: '/category/security?tag=incident-response',
      },
    ],
  },
];
