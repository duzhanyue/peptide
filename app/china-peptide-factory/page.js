import PageHero from '../components/PageHero'

export const metadata = {
  title: 'China Peptide Factory for Global Buyers',
  description:
    'Kmax Peptide is a China peptide factory supporting global buyer inquiries with direct communication, competitive pricing, and responsive supply support.',
  alternates: { canonical: '/china-peptide-factory' },
}

export default function ChinaPeptideFactoryLanding() {
  return (
    <main className="interior-page">
      <PageHero label="Factory-direct partnerships" title="Closer to the source. Further together." description="Connect directly with our team to discuss peptide specifications, wholesale supply, packaging, and global sourcing requirements." image="/img/c2.png" />

      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#dce7df] bg-[#dce7df] lg:grid-cols-3">
          {[
            ['Factory-direct communication', 'Discuss buyer requirements directly with a responsive sales team.'],
            ['Supply inquiry support', 'Share product requirements, quantities, destination, and packaging needs.'],
            ['Global buyer focus', 'Built for distributors, sourcing teams, and professional procurement buyers.'],
          ].map(([title, text]) => (
            <article key={title} className="bg-white p-7 sm:p-8">
              <h2 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#123039]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#6d8176]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#087f76] py-14 text-white">
        <div className="section-shell">
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#9cc9dc]">Inquiry Checklist</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.045em]">Send a focused request.</h2>
          <div className="mt-7 grid gap-3 text-sm leading-7 text-[#bdd7e1] md:grid-cols-2">
            {[
              'Product requirement or catalogue family',
              'Requested specification and quantity',
              'Destination country or region',
              'Packaging expectations',
              'Quotation timeline',
              'Preferred contact method',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">{item}</div>
            ))}
          </div>
          <a href="https://wa.me/8618131109493" className="focus-ring mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#087f76] transition hover:bg-[#dff1f7]" target="_blank" rel="noopener noreferrer">
            Start Inquiry
          </a>
        </div>
      </section>
    </main>
  )
}
