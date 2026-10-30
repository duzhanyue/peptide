import ProductCatalog from '../components/ProductCatalog'
import PageHero from '../components/PageHero'
import Image from 'next/image'
import { productFamilies, products } from './catalog'

export default function Products() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kmax Peptide Research Peptide Catalogue',
    description:
      'Peptide factory catalogue specifications available from Kmax Peptide.',
    url: 'https://kmaxxpeptide.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.title,
        url: `https://kmaxxpeptide.com/products/${product.category}`,
      })),
    },
  }

  return (
    <main className="interior-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHero label="Product portfolio" title="The right peptide. Your next possibility." description="Explore our research peptide families and specifications. Connect directly with our team for product availability and a tailored quotation." image="/img/p1.png" />

      <ProductCatalog />

      <section className="bg-[#eef5f0] py-14">
        <div className="section-shell flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#123039]">Looking for more products?</h2>
            <p className="mt-2 text-sm leading-6 text-[#6d8176]">Our catalogue is only the beginning. Contact us to explore more products, additional specifications, and current availability.</p>
          </div>
          <a href="https://wa.me/8618931142995" className="focus-ring shrink-0 rounded-full bg-[#087f76] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#087f76]" target="_blank" rel="noopener noreferrer">
            More products? Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
