import PageHero from '../components/PageHero'
import Link from 'next/link'
import { faqs } from './faqs'

export const metadata = {
  title: 'Peptide Catalogue FAQ',
  description:
    'Find answers about Kmax Peptide catalogue families, specification review, quotation inquiries, batch-related documentation questions, and contact options.',
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
    <main className="interior-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <PageHero label="Frequently asked questions" title="A little clarity. A better start." description="Find answers about products, specifications, documentation, and working with our team. Your next sourcing conversation starts informed." image="/img/c1.png" />

      <section className="section-shell max-w-4xl py-14 sm:py-20">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}<span>+</span></summary>
              <p className="mt-3 text-sm leading-7 text-[#6d8176]">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 rounded-[1.5rem] bg-[#087f76] p-7 text-white sm:p-8">
          <h2 className="font-display text-3xl font-bold tracking-[-0.035em]">Have a specific sourcing list?</h2>
          <p className="mt-3 text-sm leading-7 text-[#bdd7e1]">Send the product family, specification, quantity, and destination to our sales team.</p>
          <Link href="/contact" className="focus-ring mt-6 inline-block rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#087f76] transition hover:bg-[#dff1f7]">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
