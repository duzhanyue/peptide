import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { key: 'ghk-cu', label: 'GHK-CU', description: 'Copper peptide' },
  { key: 'rt', label: 'RT Peptide', description: 'Research peptide' },
  { key: 'tirz', label: 'Tirz Peptide', description: 'Research peptide' },
  { key: 'semaglu', label: 'Semaglu Peptide', description: 'Research peptide' },
]

const products = [
  ['GHK-CU 50mg', '/img/l1.png', 'ghk-cu'], ['GHK-CU 100mg', '/img/l1.100.png', 'ghk-cu'],
  ['RT Peptide 5mg', '/img/l2.5.png', 'rt'], ['RT Peptide 10mg', '/img/l2.10.png', 'rt'], ['RT Peptide 15mg', '/img/l2.15.png', 'rt'], ['RT Peptide 20mg', '/img/l2.20.png', 'rt'], ['RT Peptide 30mg', '/img/l2.30.png', 'rt'], ['RT Peptide 40mg', '/img/l2.40.png', 'rt'], ['RT Peptide 50mg', '/img/l2.50.png', 'rt'], ['RT Peptide 60mg', '/img/l2.png', 'rt'],
  ['Tirz Peptide 5mg', '/img/l3.5.png', 'tirz'], ['Tirz Peptide 10mg', '/img/l3.10.png', 'tirz'], ['Tirz Peptide 15mg', '/img/l3.15.png', 'tirz'], ['Tirz Peptide 20mg', '/img/l3.20.png', 'tirz'], ['Tirz Peptide 30mg', '/img/l3.png', 'tirz'], ['Tirz Peptide 40mg', '/img/l3.40.png', 'tirz'], ['Tirz Peptide 50mg', '/img/l3.50.png', 'tirz'], ['Tirz Peptide 60mg', '/img/l3.60.png', 'tirz'], ['Tirz Peptide 100mg', '/img/l3.100.png', 'tirz'], ['Tirz Peptide 120mg', '/img/l3.120.png', 'tirz'],
  ['Semaglu Peptide 2mg', '/img/l4.22.png', 'semaglu'], ['Semaglu Peptide 5mg', '/img/l4.1.png', 'semaglu'], ['Semaglu Peptide 10mg', '/img/l4.png', 'semaglu'], ['Semaglu Peptide 15mg', '/img/l4.15.png', 'semaglu'], ['Semaglu Peptide 20mg', '/img/l4.2.png', 'semaglu'], ['Semaglu Peptide 30mg', '/img/l4.30.png', 'semaglu'],
].map(([title, image, category], index) => ({ id: index + 1, title, image, category }))

export default function Products() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'MeiAn Peptide Research Peptide Catalogue',
    description:
      'Research-use peptide specifications available from MeiAn Peptide.',
    url: 'https://www.meianpeptide.com/products',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.title,
        url: `https://www.meianpeptide.com/products#${product.category}`,
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
          <h1 className="font-display mt-4 max-w-2xl text-5xl font-bold tracking-[-0.055em] sm:text-6xl">Research peptide specifications.</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#c8dee6]">Browse our available catalogue options, then contact our team to confirm specifications and batch-related documentation.</p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <a
              key={category.key}
              href={`#${category.key}`}
              className="focus-ring rounded-full border border-[#cfdee4] bg-white px-5 py-3 text-xs font-bold text-[#506474] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]"
            >
              {category.label}
            </a>
          ))}
        </div>

        {categories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category.key)

          return (
            <section key={category.key} id={category.key} className="scroll-mt-28 pt-14">
              <div className="flex flex-col gap-3 border-b border-[#dce5ea] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">{category.description}</p>
                  <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.04em] text-[#10253b]">{category.label}</h2>
                </div>
                <p className="text-sm text-[#607080]">{categoryProducts.length} available specifications</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <article key={product.id} className="group soft-card overflow-hidden rounded-[1.4rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,55,84,0.14)]">
                    <div className="flex h-64 items-center justify-center bg-[linear-gradient(145deg,#f7fbfc,#e7f1f4)] p-6">
                      <Image src={product.image} alt={`${product.title} research peptide specification`} width={210} height={270} className="product-shadow h-full w-auto object-contain transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="border-t border-[#e0eaee] p-5">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[#0c5f8d]">Documentation available on request</p>
                      <h3 className="font-display mt-2 text-xl font-bold tracking-[-0.03em] text-[#10253b]">{product.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#71808d]">Research use only. Not for human consumption.</p>
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
