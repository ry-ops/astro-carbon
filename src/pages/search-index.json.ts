import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const now = new Date();
  const posts = await getCollection('posts', ({ data }) => {
    return data.category !== 'Docs' && data.date <= now;
  });

  const searchIndex = posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags || [],
    date: post.data.date.toISOString(),
    image: post.data.hero?.image || post.data.image || null,
    href: `/posts/${post.slug}`,
  }));

  // Sort by date (newest first)
  searchIndex.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
