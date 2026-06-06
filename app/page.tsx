import Image from 'next/image'
import Link from 'next/link'
import { articles, formatArticleDate } from './news/articles'

export const metadata = {
  alternates: { canonical: '/' },
}

const productFamilies = [
  {
    name: 'GHK-CU',
    label: 'Copper peptide',
    image: '/img/l1-home-transparent.png',
    href: '/products/ghk-cu',
    theme: 'from-[#dceef2] via-[#f6fbfc] to-[#c8dfe6]',
    text: 'A focused catalogue for research procurement conversations.',
  },
  {
    name: 'RT Peptide',
    label: 'Multiple specifications',
    image: '/img/l2-home-transparent.png',
    href: '/products/rt-peptide',
    theme: 'from-[#d6e9ee] via-[#f7fbfc] to-[#bad4dd]',
    text: 'Review available specifications and prepare a clear inquiry.',
  },
  {
    name: 'Tirz Peptide',
    label: 'Research supply',
    image: '/img/l3-home-transparent.png',
    href: '/products/tirz-peptide',
    theme: 'from-[#dbe8ea] via-[#fbfcfc] to-[#c5d9dd]',
    text: 'Explore catalogue options with factory supply support.',
  },
  {
    name: 'Semaglu Peptide',
    label: 'Research supply',
    image: '/img/l4-home-transparent.png',
    href: '/products/semaglu-peptide',
    theme: 'from-[#d9eaed] via-[#f8fcfc] to-[#c1dadd]',
    text: 'Start with the exact specification your team is evaluating.',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f5f7f7]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#071d2b] pt-20 text-white">
        <Image src="/img/hero-lab-v2.png" alt="" fill priority className="object-cover object-center opacity-90" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,19,29,0.36)_0%,rgba(2,20,31,0.08)_40%,rgba(2,21,32,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#061722] to-transparent" />
        <div className="section-shell relative flex min-h-[640px] flex-col items-center justify-center pb-16 pt-10 text-center">
          <p className="home-reveal text-[0.66rem] font-bold uppercase tracking-[0.42em] text-[#c2e1ea]">MeiAn Peptide Catalogue</p>
          <h1 className="home-reveal home-reveal-delay-1 mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-[5.4rem]">
            Peptide Factory<span className="text-[#c7e4eb]">.</span>
          </h1>
          <p className="home-reveal home-reveal-delay-2 mt-6 max-w-2xl text-sm leading-7 text-[#d5e8ed]">
            China peptide factory offering direct supply, competitive pricing, and fast support for global peptide buyers.
          </p>
          <div className="home-reveal home-reveal-delay-3 mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/products" className="focus-ring rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#082b43] transition hover:bg-[#e2f1f4]">
              Explore Catalogue
            </Link>
            <Link href="/contact" className="focus-ring rounded-full border border-white/45 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/15">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#061722]/72 backdrop-blur-xl">
          <div className="section-shell grid grid-cols-3 divide-x divide-white/15 py-4 text-center">
            {[
              ['04', 'Product families'],
              ['Factory', 'Direct supply'],
              ['Direct', 'Sales support'],
            ].map(([value, label]) => (
              <div key={label} className="px-2 sm:px-5">
                <p className="text-lg font-semibold tracking-[-0.04em] text-white sm:text-2xl">{value}</p>
                <p className="mt-1 text-[0.52rem] font-bold uppercase tracking-[0.14em] text-[#a7c5ce] sm:text-[0.62rem]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f7] py-18 text-center sm:py-24">
        <div className="section-shell">
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#63808b]">Research Catalogue</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.07em] text-[#10253b] sm:text-5xl">
            Built around the specification your team needs.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607080]">
            Browse each family, review available options, and send a shortlist when you are ready to discuss supply, packaging, and logistics.
          </p>
        </div>
      </section>

      <section className="grid gap-px bg-[#d8e2e4] sm:grid-cols-2 xl:grid-cols-4">
        {productFamilies.map((item) => (
          <Link key={item.name} href={item.href} className={`group relative isolate min-h-[520px] overflow-hidden bg-gradient-to-br ${item.theme}`}>
            <div className="absolute inset-x-0 top-0 z-10 p-6 text-center">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#56727c]">{item.label}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.065em] text-[#10253b]">{item.name}</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#607080]">{item.text}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#0c5f8d]">
                Explore specifications <span className="ml-1 inline-block transition group-hover:translate-x-1">&rarr;</span>
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex h-[310px] items-end justify-center">
              <div className="absolute bottom-12 h-28 w-64 rounded-[100%] bg-[#6b8a94]/18 blur-2xl" />
              <Image
                src={item.image}
                alt={`${item.name} research peptide catalogue`}
                width={410}
                height={900}
                className="product-stage relative h-[285px] w-auto object-contain transition duration-700 group-hover:-translate-y-3 group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        ))}
      </section>

      <section className="relative min-h-[580px] overflow-hidden bg-[#082b43] text-white">
        <Image src="/img/c2.png" alt="Peptide production environment" fill className="object-cover object-center opacity-72" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,38,0.92)_0%,rgba(3,25,38,0.7)_38%,rgba(3,25,38,0.1)_100%)]" />
        <div className="section-shell relative flex min-h-[580px] items-center py-16">
          <div className="max-w-xl">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#a5cedb]">Clear Procurement Path</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.07em] sm:text-5xl">
              Details first.
              <span className="block text-[#b7dbe4]">Questions answered.</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#c5dce3]">
              Factory sourcing should begin with the essentials: catalogue family, specification, quantity, packaging requirements, and destination. Our inquiry team helps keep that conversation focused.
            </p>
            <Link href="/about" className="focus-ring mt-8 inline-block text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:text-[#b7dbe4]">
              Discover our approach <span className="ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative min-h-[540px] overflow-hidden bg-[#dce9eb]">
        <Image src="/img/c3.png" alt="Peptide packaging environment" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,249,249,0.96)_0%,rgba(244,249,249,0.84)_38%,rgba(244,249,249,0.08)_78%)]" />
        <div className="section-shell relative flex min-h-[540px] items-center py-16">
          <div className="max-w-xl">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#63808b]">Research-Use Clarity</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.07em] text-[#10253b] sm:text-5xl">
              A catalogue designed for focused inquiries.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#506474]">
              Product presentation stays centered on factory supply, specification review, and direct access to inquiry support.
            </p>
            <Link href="/contact" className="focus-ring mt-8 inline-block rounded-full bg-[#073754] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#0c5f8d]">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f7] py-18 sm:py-22">
        <div className="section-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#63808b]">MeiAn Insights</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-[#10253b] sm:text-5xl">Latest sourcing guides.</h2>
            </div>
            <Link href="/news" className="focus-ring text-xs font-bold uppercase tracking-[0.16em] text-[#0c5f8d] transition hover:text-[#073754]">
              Browse all guides <span className="ml-1">&rarr;</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.2rem] border border-[#dce5ea] bg-[#dce5ea] lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group bg-white p-6 transition hover:bg-[#f9fcfc] sm:p-7">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#0c5f8d]">{article.category}</p>
                <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-0.045em] text-[#10253b]">{article.title}</h3>
                <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#7c929b]">{formatArticleDate(article.date)}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#0c5f8d] opacity-0 transition group-hover:opacity-100">
                  Read guide &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061722] py-16 text-center text-white sm:py-20">
        <div className="section-shell">
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.32em] text-[#9fc8d4]">Begin Your Inquiry</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.07em] sm:text-5xl">
            Tell us what your team is sourcing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#b8d0d8]">
            Share the catalogue family, specification, requested quantity, and destination. We will help with the next step.
          </p>
          <Link href="/contact" className="focus-ring mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#082b43] transition hover:bg-[#e2f1f4]">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
