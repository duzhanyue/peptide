import { faqs } from '../faq/faqs'
import { articles } from '../news/articles'
import { productFamilies } from '../products/catalog'

export function GET() {
  const families = productFamilies
    .map((family) => `## ${family.name}\n${family.summary}\nAvailable specifications: ${family.specifications.map(([name]) => name).join(', ')}.\nURL: https://www.kmaxpeptide.com/products/${family.slug}`)
    .join('\n\n')
  const faqText = faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join('\n\n')
  const guides = articles
    .map((article) => `- ${article.title}: ${article.description} https://www.kmaxpeptide.com/news/${article.slug}`)
    .join('\n')

  return new Response(`# Kmax Peptide Catalogue Reference

Kmax Peptide is a China-based peptide factory website for research-use catalogue and sourcing inquiries. Buyers can review product-family specification options and contact the sales team with a shortlist.

Primary pages include the product catalogue, China peptide factory landing page, certificate image gallery, FAQ, news guides, privacy policy, and contact page. Certificate images are available at https://www.kmaxpeptide.com/certificates for buyer reference.

# Catalogue Families
${families}

# Inquiry FAQ
${faqText}

# Published Guides
${guides}

# Contact
Email: zzz19182026@outlook.com
WhatsApp: +852 5995 1323
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
