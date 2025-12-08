import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts');
  const siteUrl = site?.toString() || 'https://blog.ry-ops.com';

  // Filter out docs and sort by date
  const blogPosts = posts
    .filter((post) => post.data.category !== 'Docs')
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'ry-ops Blog',
    description: 'Explore AI & ML, open source projects, developer tools, and engineering insights. Featuring MCP servers, automation tools, and comprehensive tutorials.',
    site: siteUrl,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
      author: post.data.author.name,
      categories: [post.data.category, ...(post.data.tags || [])],
      customData: `
        <image>
          <url>${post.data.hero?.image || post.data.image}</url>
          <title>${post.data.title}</title>
          <link>${siteUrl}posts/${post.slug}/</link>
        </image>
      `,
    })),
    customData: `<language>en-us</language>
<copyright>Copyright ${new Date().getFullYear()} ry-ops. All rights reserved.</copyright>
<managingEditor>noreply@ry-ops.com (Ryan Dahlberg)</managingEditor>
<webMaster>noreply@ry-ops.com (Ryan Dahlberg)</webMaster>
<ttl>60</ttl>
<image>
  <url>${siteUrl}logo.svg</url>
  <title>ry-ops Blog</title>
  <link>${siteUrl}</link>
</image>`,
  });
};
