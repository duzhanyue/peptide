import { articles } from './news/articles'
import { productFamilies } from './products/catalog'

export default function sitemap() {
  const baseUrl = 'https://www.meianpeptide.com'
  const pages = ['', '/china-peptide-factory', '/products', '/about', '/contact', '/faq', '/privacy-policy', '/news']

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
    ...productFamilies.map((family) => ({
      url: `${baseUrl}/products/${family.slug}`,
      lastModified: new Date('2026-06-01T00:00:00'),
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}${family.image}`],
    })),
  ]
}
