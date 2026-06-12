import Image from 'next/image'
import Link from 'next/link'
import { articles, formatArticleDate } from './articles'

const ARTICLES_PER_PAGE = 3

function getPageNumber(value, totalPages) {
  const rawValue = Array.isArray(value) ? value[0] : value
  const parsedValue = Number.parseInt(rawValue || '1', 10)

  if (!Number.isFinite(parsedValue) || parsedValue < 1) return 1

  return Math.min(parsedValue, totalPages)
}

function getPageHref(page) {
  return page === 1 ? '/news' : `/news?page=${page}`
}

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams
  const totalPages = Math.max(1, Math.ceil((articles.length - 1) / ARTICLES_PER_PAGE))
  const currentPage = getPageNumber(page, totalPages)
  const pageSuffix = currentPage > 1 ? ` - Page ${currentPage}` : ''

  return {
    title: `Peptide News & Sourcing Guides${pageSuffix}`,
    description:
      'Read practical peptide sourcing guides, buyer resources, and product knowledge articles from Kmax Peptide.',
    alternates: { canonical: getPageHref(currentPage) },
  }
}

export default async function NewsPage({ searchParams }) {
  const { page } = await searchParams
  const [featured, ...archiveArticles] = articles
  const totalPages = Math.max(1, Math.ceil(archiveArticles.length / ARTICLES_PER_PAGE))
  const currentPage = getPageNumber(page, totalPages)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const visibleArticles = archiveArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
  const categories = [...new Set(articles.map((article) => article.category))]
  const resultStart = archiveArticles.length === 0 ? 0 : startIndex + 1
  const resultEnd = Math.min(startIndex + ARTICLES_PER_PAGE, archiveArticles.length)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kmax Peptide Sourcing Guides',
    url: 'https://www.kmaxpeptide.com/news',
    description:
      'Practical peptide sourcing guides, buyer resources, and product knowledge articles from Kmax Peptide.',
    isPartOf: { '@id': 'https://www.kmaxpeptide.com/#website' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: article.title,
        url: `https://www.kmaxpeptide.com/news/${article.slug}`,
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
      <section className="blueprint-grid border-b border-[#dce5ea] bg-[#eef5f6] pt-20">
        <div className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="eyebrow">Kmax Insights</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#10253b] sm:text-6xl">
              Research peptide sourcing insights.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#607080]">
              Practical guidance for laboratory research procurement teams evaluating catalogue options, documentation, and logistics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.3rem] border border-[#d6e2e6] bg-[#d6e2e6]">
            <div className="bg-white/85 p-5">
              <p className="font-display text-3xl font-bold text-[#10253b]">{articles.length}</p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6c8491]">Published guides</p>
            </div>
            <div className="bg-white/85 p-5">
              <p className="font-display text-3xl font-bold text-[#10253b]">{categories.length}</p>
              <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6c8491]">Resource topics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        {currentPage === 1 && (
          <section aria-labelledby="featured-article">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Editor&apos;s Pick</p>
                <h2 id="featured-article" className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Featured guide</h2>
              </div>
              <p className="hidden text-xs font-bold uppercase tracking-[0.12em] text-[#6c8491] sm:block">Start here</p>
            </div>
            <Link href={`/news/${featured.slug}`} className="group grid overflow-hidden rounded-[1.6rem] border border-[#dce5ea] bg-[#073754] shadow-[0_18px_45px_rgba(8,55,84,0.14)] lg:grid-cols-[0.88fr_1.12fr]">
              <div className="relative min-h-64 overflow-hidden bg-[#dce9ed] lg:min-h-[330px]">
                <Image src={featured.image} alt="" fill priority className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 44vw, 100vw" />
              </div>
              <div className="flex flex-col justify-center p-7 text-white sm:p-10">
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#9cc9dc]">{featured.category}</p>
                <h3 className="font-display mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl">{featured.title}</h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c6dce4]">{featured.description}</p>
                <div className="mt-7 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#b7dbe8]">
                  <span>{formatArticleDate(featured.date)} &middot; {featured.readTime}</span>
                  <span className="text-xl transition group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        <section className={currentPage === 1 ? 'mt-14' : ''} aria-labelledby="article-archive">
          <div className="flex flex-col gap-4 border-b border-[#dce5ea] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Resource Library</p>
              <h2 id="article-archive" className="font-display mt-2 text-4xl font-bold tracking-[-0.045em] text-[#10253b]">Browse all guides</h2>
            </div>
            <p className="text-sm text-[#607080]">
              Showing {resultStart}-{resultEnd} of {archiveArticles.length} archive articles
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-[#d7e3e7] bg-[#f5f9fa] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#426276]">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {visibleArticles.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group grid overflow-hidden rounded-[1.3rem] border border-[#dce5ea] bg-white transition duration-300 hover:-translate-y-0.5 hover:border-[#bfd5dd] hover:shadow-[0_16px_35px_rgba(8,55,84,0.1)] sm:grid-cols-[13rem_1fr]">
                <div className="relative min-h-48 overflow-hidden bg-[#dce9ed] sm:min-h-full">
                  <Image src={article.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 640px) 208px, 100vw" />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <p className="eyebrow">{article.category}</p>
                  <h3 className="font-display mt-3 text-2xl font-bold leading-tight tracking-[-0.035em] text-[#10253b]">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#607080]">{article.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#0c5f8d]">
                    <span>{formatArticleDate(article.date)} &middot; {article.readTime}</span>
                    <span className="text-lg transition group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#dce5ea] pt-6" aria-label="News pagination">
              {currentPage > 1 ? (
                <Link href={getPageHref(currentPage - 1)} className="focus-ring rounded-full border border-[#cfdee4] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#426276] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]">
                  &larr; Previous
                </Link>
              ) : (
                <span className="rounded-full border border-[#e1e9ec] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#a1b0b7]">
                  &larr; Previous
                </span>
              )}

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <Link
                    key={pageNumber}
                    href={getPageHref(pageNumber)}
                    aria-current={pageNumber === currentPage ? 'page' : undefined}
                    className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                      pageNumber === currentPage
                        ? 'bg-[#073754] text-white'
                        : 'border border-[#cfdee4] bg-white text-[#426276] hover:border-[#0c5f8d] hover:text-[#0c5f8d]'
                    }`}
                  >
                    {pageNumber}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages ? (
                <Link href={getPageHref(currentPage + 1)} className="focus-ring rounded-full border border-[#cfdee4] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#426276] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]">
                  Next &rarr;
                </Link>
              ) : (
                <span className="rounded-full border border-[#e1e9ec] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#a1b0b7]">
                  Next &rarr;
                </span>
              )}
            </nav>
          )}
        </section>
      </section>
    </main>
  )
}
