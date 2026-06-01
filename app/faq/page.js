import Link from 'next/link'
import { faqs } from './faqs'

export const metadata = {
  title: 'Peptide Catalogue FAQ',
  description:
    'Find answers about MeiAn Peptide catalogue families, specification review, quotation inquiries, batch-related documentation questions, and contact options.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        <div className="section-shell py-20 text-center sm:py-24">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h1 className="font-display mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-[-0.055em] text-[#10253b] sm:text-6xl">
            Peptide catalogue and inquiry FAQ.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607080]">
            Clear answers about catalogue families, specification review, documentation questions, and quotation inquiries.
          </p>
        </div>
      </section>

      <section className="section-shell max-w-4xl py-14 sm:py-20">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[1.3rem] border border-[#dce5ea] bg-white p-6 sm:p-7">
              <h2 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#10253b]">{faq.question}</h2>
              <p className="mt-3 text-sm leading-7 text-[#607080]">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[1.5rem] bg-[#073754] p-7 text-white sm:p-8">
          <h2 className="font-display text-3xl font-bold tracking-[-0.035em]">Have a specific sourcing list?</h2>
          <p className="mt-3 text-sm leading-7 text-[#bdd7e1]">Send the product family, specification, quantity, and destination to our sales team.</p>
          <Link href="/contact" className="focus-ring mt-6 inline-block rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#073754] transition hover:bg-[#dff1f7]">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
