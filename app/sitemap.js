import { articles } from './news/articles'

export default function sitemap() {
  const baseUrl = 'https://www.meianpeptide.com'
  const pages = ['', '/products', '/about', '/contact', '/news']

  return [
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date('2026-05-31T00:00:00'),
      changeFrequency: path === '/news' ? 'daily' : 'weekly',
      priority: path === '' ? 1 : path === '/news' ? 0.9 : 0.8,
      ...(path === '' ? { images: [`${baseUrl}/img/hero-lab-v2.png`] } : {}),
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(`${article.date}T00:00:00`),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}${article.image}`],
    })),
  ]
}
