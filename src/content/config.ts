import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'AI & ML',
      'Developer skills',
      'Engineering',
      'Enterprise software',
      'News & insights',
      'Open Source',
      'Security',
      'Docs',
    ]),
    date: z.date(),
    author: z.object({
      name: z.string(),
      avatar: z.string().optional(),
    }),
    /**
     * @deprecated Use `hero.image` instead
     * Legacy image field - kept for backward compatibility with older posts
     */
    image: z.string().optional(),
    /**
     * Hero image configuration
     *
     * NEW POSTS: Use animated SVG images (generated: true)
     * ```yaml
     * hero:
     *   image: /images/posts/{slug}-hero.svg
     *   generated: true
     * ```
     *
     * See .claude/specs/svg-hero.md for SVG generation guidelines.
     *
     * LEGACY POSTS: May include attribution for stock photos
     */
    hero: z.object({
      /** Path to hero image (e.g., /images/posts/post-slug-hero.svg) */
      image: z.string(),
      /** @deprecated Only for legacy Unsplash images */
      unsplashId: z.string().optional(),
      /** Alt text for accessibility (optional - defaults to post title) */
      alt: z.string().optional(),
      /** @deprecated Only for legacy stock photo attribution */
      attribution: z.object({
        name: z.string(),
        username: z.string(),
        url: z.string()
      }).optional(),
      /** True for programmatically generated SVG images (new standard) */
      generated: z.boolean().optional(),
      /** ISO timestamp when the image was generated */
      generatedAt: z.string().optional(),
      /** @deprecated Legacy fields for Pexels/Unsplash migration */
      photographer: z.string().optional(),
      photographerUrl: z.string().optional(),
      source: z.string().optional(),
      sourceUrl: z.string().optional(),
    }).optional(),
    /**
     * @deprecated Use `hero` object instead
     * Legacy image credit field - kept for backward compatibility
     */
    imageCredit: z.object({
      photographer: z.string(),
      username: z.string(),
    }).optional(),
    /**
     * @deprecated No longer used - all posts should have generated SVG images
     */
    image_needs_repair: z.boolean().optional().default(false),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    repo: z.object({
      url: z.string(),
      name: z.string(),
      stars: z.number().optional(),
    }).optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
