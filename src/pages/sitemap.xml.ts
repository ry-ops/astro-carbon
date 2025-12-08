import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts');
  const siteUrl = site?.toString() || 'https://blog.ry-ops.com';

  // Get unique categories
  const categories = [...new Set(posts.map(post => post.data.category))];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <!-- Homepage -->
  <url>
    <loc>${siteUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>

  <!-- Showcase -->
  <url>
    <loc>${siteUrl}showcase</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Category Pages -->
  ${categories
    .map(
      (category) => `
  <url>
    <loc>${siteUrl}category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}

  <!-- Legal Pages -->
  <url>
    <loc>${siteUrl}terms</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${siteUrl}privacy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${siteUrl}cookies</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${siteUrl}do-not-share</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Blog Posts -->
  ${posts
    .filter((post) => post.data.category !== 'Docs')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}posts/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${post.data.hero?.image || post.data.image}</image:loc>
      <image:title>${post.data.title}</image:title>
    </image:image>
    <xhtml:link rel="amphtml" href="${siteUrl}amp/${post.slug}" />
  </url>`
    )
    .join('')}

  <!-- AMP Blog Posts -->
  ${posts
    .filter((post) => post.data.category !== 'Docs')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}amp/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}

  <!-- Documentation Posts -->
  ${posts
    .filter((post) => post.data.category === 'Docs')
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}posts/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('')}

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
