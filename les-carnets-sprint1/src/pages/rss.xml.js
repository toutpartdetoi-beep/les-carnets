import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: 'Tout part de toi · Les Carnets',
    description: 'Comprendre. Ressentir. Relier.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/carnets/${article.id}/`
    }))
  });
}
