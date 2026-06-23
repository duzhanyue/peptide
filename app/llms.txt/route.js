import { articles } from '../news/articles'
import { productFamilies } from '../products/catalog'

export function GET() {
  const families = productFamilies
    .map((family) => `- [${family.name}](https://kmaxxpeptide.com/products/${family.slug}): ${family.summary}`)
    .join('\n')
  const guides = articles
    .map((article) => `- [${article.title}](https://kmaxxpeptide.com/news/${article.slug}): ${article.description}`)
    .join('\n')

  return new Response(`# Kmax Peptide

> Kmax Peptide is a China-based peptide factory website for research-use catalogue and sourcing inquiries. It publishes product-family specification pages, quotation contact options, and practical procurement guides.

## Primary Pages
- [Home](https://kmaxxpeptide.com): Site overview and catalogue entry point.
- [Products](https://kmaxxpeptide.com/products): Full catalogue index.
- [FAQ](https://kmaxxpeptide.com/faq): Catalogue and inquiry questions.
- [About](https://kmaxxpeptide.com/about): Company approach and sourcing focus.
- [Certificates](https://kmaxxpeptide.com/certificates): Certificate image gallery and company document references.
- [Contact](https://kmaxxpeptide.com/contact): WhatsApp and email inquiry options.
- [News](https://kmaxxpeptide.com/news): Research peptide sourcing guides.

## Product Families
${families}

## Guides
${guides}

## Contact
- Email: zzz19182026@outlook.com
- WhatsApp: +852 5995 1323
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
