import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, formatArticleDate, getArticle } from '../articles'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3)
  const pageUrl = `https://www.meianpeptide.com/news/${article.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: article.title,
        description: article.description,
        image: `https://www.meianpeptide.com${article.image}`,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          '@id': 'https://www.meianpeptide.com/#organization',
        },
        publisher: {
          '@id': 'https://www.meianpeptide.com/#organization',
        },
        mainEntityOfPage: pageUrl,
        isPartOf: { '@id': 'https://www.meianpeptide.com/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.meianpeptide.com' },
          { '@type': 'ListItem', position: 2, name: 'News', item: 'https://www.meianpeptide.com/news' },
          { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article>
        <header className="blueprint-grid border-b border-[#dce5ea] bg-[#f0f6f7]">
          <div className="section-shell max-w-5xl py-16 text-center sm:py-20">
            <p className="eyebrow">{article.category}</p>
            <h1 className="font-display mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] text-[#10253b] sm:text-6xl">{article.title}</h1>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#6c8491]">Published by MeiAn Peptide &middot; {formatArticleDate(article.date)} &middot; {article.readTime}</p>
          </div>
        </header>

        <div className="section-shell max-w-5xl py-12 sm:py-16">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#dce9ed]">
            <Image src={article.image} alt="" width={1500} height={850} className="h-72 w-full object-cover sm:h-[430px]" priority />
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="font-display text-2xl font-bold leading-9 tracking-[-0.025em] text-[#28465a]">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-display text-3xl font-bold tracking-[-0.035em] text-[#10253b]">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[0.96rem] leading-8 text-[#607080]">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3 rounded-2xl border border-[#dce5ea] bg-[#f5f9fa] p-5 text-sm leading-6 text-[#506474]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="text-[#0c5f8d]">&#10003;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {article.sources && (
              <section className="mt-10 border-t border-[#dce5ea] pt-7">
                <p className="eyebrow">Sources</p>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#506474]">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0c5f8d] underline decoration-[#b8d3dd] underline-offset-4 hover:text-[#073754]">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-12 rounded-[1.5rem] bg-[#073754] p-7 text-white sm:p-8">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#9cc9dc]">Start a Conversation</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.035em]">Need a peptide quotation?</h2>
              <p className="mt-3 text-sm leading-7 text-[#bdd7e1]">Send your product name, specification, quantity, and destination to our sales team.</p>
              <Link href="/contact" className="focus-ring mt-6 inline-block rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#073754] transition hover:bg-[#dff1f7]">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-[#dce5ea] bg-[#f4f8f9] py-14">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Continue Reading</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Related articles</h2>
            </div>
            <Link href="/news" className="text-xs font-bold uppercase tracking-[0.14em] text-[#0c5f8d]">All News &rarr;</Link>
          </div>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="rounded-2xl border border-[#dce5ea] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="eyebrow">{item.category}</p>
                <h3 className="font-display mt-3 text-xl font-bold leading-tight tracking-[-0.03em] text-[#10253b]">{item.title}</h3>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#6c8491]">{formatArticleDate(item.date)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
