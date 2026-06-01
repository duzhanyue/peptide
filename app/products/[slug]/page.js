import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductFamily, productFamilies } from '../catalog'

export function generateStaticParams() {
  return productFamilies.map((family) => ({ slug: family.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const family = getProductFamily(slug)

  if (!family) return {}

  return {
    title: `${family.name} Specifications`,
    description: family.summary,
    alternates: { canonical: `/products/${family.slug}` },
    openGraph: {
      title: `${family.name} Specifications | MeiAn Peptide`,
      description: family.summary,
      images: [family.image],
    },
  }
}

export default async function ProductFamilyPage({ params }) {
  const { slug } = await params
  const family = getProductFamily(slug)

  if (!family) notFound()

  const pageUrl = `https://www.meianpeptide.com/products/${family.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#page`,
        url: pageUrl,
        name: `${family.name} Specifications`,
        description: family.summary,
        isPartOf: { '@id': 'https://www.meianpeptide.com/#website' },
        about: { '@id': `${pageUrl}#catalogue-family` },
      },
      {
        '@type': 'ProductGroup',
        '@id': `${pageUrl}#catalogue-family`,
        name: family.name,
        description: family.summary,
        url: pageUrl,
        image: `https://www.meianpeptide.com${family.image}`,
        brand: { '@id': 'https://www.meianpeptide.com/#organization' },
        hasVariant: family.specifications.map(([name, image]) => ({
          '@type': 'Product',
          name,
          image: `https://www.meianpeptide.com${image}`,
          url: pageUrl,
          additionalProperty: {
            '@type': 'PropertyValue',
            name: 'Catalogue specification',
            value: name.replace(`${family.name} `, ''),
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meianpeptide.com' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.meianpeptide.com/products' },
          { '@type': 'ListItem', position: 3, name: family.name, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <main className="bg-[#f6fafb] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <section className="blueprint-grid border-b border-[#dce5ea]">
        <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div>
            <p className="eyebrow">{family.label}</p>
            <h1 className="font-display mt-4 text-5xl font-bold tracking-[-0.055em] text-[#10253b] sm:text-6xl">{family.name} specifications.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#607080]">{family.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-full bg-[#073754] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">Request Quote</Link>
              <Link href="/products" className="focus-ring rounded-full border border-[#cfdee4] bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#426276] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]">All Products</Link>
            </div>
          </div>
          <div className="flex h-[360px] items-end justify-center rounded-[1.6rem] bg-[linear-gradient(145deg,#eef6f7,#dcebed)] p-6">
            <Image src={family.image} alt={`${family.name} catalogue family`} width={300} height={620} className="product-shadow h-full w-auto object-contain" priority />
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <p className="eyebrow">Available Catalogue Options</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.045em] text-[#10253b]">Specification list.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {family.specifications.map(([name, image]) => (
            <article key={name} className="soft-card overflow-hidden rounded-[1.4rem]">
              <div className="flex h-60 items-center justify-center bg-[linear-gradient(145deg,#f7fbfc,#e7f1f4)] p-6">
                <Image src={image} alt={`${name} catalogue specification`} width={210} height={270} className="product-shadow h-full w-auto object-contain" />
              </div>
              <div className="border-t border-[#e0eaee] p-5">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#0c5f8d]">Documentation inquiry available</p>
                <h3 className="font-display mt-2 text-xl font-bold tracking-[-0.03em] text-[#10253b]">{name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf2f4] py-14">
        <div className="section-shell">
          <p className="eyebrow">Inquiry Checklist</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Prepare a focused request.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#607080]">Include the selected specification, quantity, destination, and any questions about packaging or batch-related documentation.</p>
        </div>
      </section>
    </main>
  )
}
