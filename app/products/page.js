import Image from 'next/image'
import Link from 'next/link'
import { productFamilies, products } from './catalog'

export default function Products() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'MeiAn Peptide Research Peptide Catalogue',
    description:
      'Peptide factory catalogue specifications available from MeiAn Peptide.',
    url: 'https://www.meianpeptide.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.title,
        url: `https://www.meianpeptide.com/products/${product.category}`,
      })),
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <section className="relative overflow-hidden bg-[#082b43] pt-20 text-white">
        <Image src="/img/p1.png" alt="" fill priority className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,38,59,0.98),rgba(5,38,59,0.62))]" />
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="section-shell relative py-20 sm:py-24">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#98cee0]">Product Catalogue</p>
          <h1 className="font-display mt-4 max-w-2xl text-5xl font-bold tracking-[-0.055em] sm:text-6xl">Peptide factory catalogue.</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#c8dee6]">Browse available catalogue options, then contact our team to discuss specifications, quantity, destination, and factory supply details.</p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-wrap gap-3">
          {productFamilies.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="focus-ring rounded-full border border-[#cfdee4] bg-white px-5 py-3 text-xs font-bold text-[#506474] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]"
            >
              {category.name}
            </a>
          ))}
        </div>

        {productFamilies.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.slug)

          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-28 pt-14">
              <div className="flex flex-col gap-3 border-b border-[#dce5ea] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">{category.label}</p>
                  <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.04em] text-[#10253b]">{category.name}</h2>
                </div>
                <p className="text-sm text-[#607080]">{categoryProducts.length} available specifications</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <article key={product.title} className="group soft-card overflow-hidden rounded-[1.4rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,55,84,0.14)]">
                    <div className="flex h-64 items-center justify-center bg-[linear-gradient(145deg,#f7fbfc,#e7f1f4)] p-6">
                      <Image src={product.image} alt={`${product.title} research peptide specification`} width={210} height={270} className="product-shadow h-full w-auto object-contain transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="border-t border-[#e0eaee] p-5">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#0c5f8d]">Factory supply inquiry available</p>
                      <h3 className="font-display mt-2 text-xl font-bold tracking-[-0.03em] text-[#10253b]">{product.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#71808d]">Contact our team for current supply details and buyer support.</p>
                      <Link href={`/products/${category.slug}`} className="focus-ring mt-4 block text-center text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#0c5f8d] transition hover:text-[#073754]">
                        View Family Details
                      </Link>
                      <Link href="/contact" className="focus-ring mt-5 block rounded-full bg-[#073754] px-4 py-3 text-center text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">
                        Request Quote
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </section>

      <section className="bg-[#eaf2f4] py-14">
        <div className="section-shell flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Need help selecting a specification?</h2>
            <p className="mt-2 text-sm leading-6 text-[#607080]">Send us your target product and quantity for a focused response.</p>
          </div>
          <Link href="/contact" className="focus-ring shrink-0 rounded-full bg-[#073754] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">
            Contact Inquiry Team
          </Link>
        </div>
      </section>
    </main>
  )
}
