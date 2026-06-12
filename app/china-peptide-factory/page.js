import Link from 'next/link'

export const metadata = {
  title: 'China Peptide Factory for Global Buyers',
  description:
    'Kmax Peptide is a China peptide factory supporting global buyer inquiries with direct communication, competitive pricing, and responsive supply support.',
  alternates: { canonical: '/china-peptide-factory' },
}

export default function ChinaPeptideFactoryLanding() {
  return (
    <main className="bg-[#f6fafb] pt-20">
      <section className="blueprint-grid border-b border-[#dce5ea] bg-[#eef5f6]">
        <div className="section-shell py-20 text-center sm:py-24">
          <p className="eyebrow">China Peptide Factory</p>
          <h1 className="font-display mx-auto mt-4 max-w-5xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#10253b] sm:text-6xl">
            Direct peptide supply support for global buyers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#607080]">
            Kmax Peptide helps international buyers discuss catalogue requirements, supply quantities, packaging needs, destination details, and factory-direct quotation support.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="focus-ring rounded-full bg-[#073754] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">
              Contact Factory Sales
            </Link>
            <Link href="/privacy-policy" className="focus-ring rounded-full border border-[#cfdee4] bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#426276] transition hover:border-[#0c5f8d] hover:text-[#0c5f8d]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#d7e3e7] bg-[#d7e3e7] lg:grid-cols-3">
          {[
            ['Factory-direct communication', 'Discuss buyer requirements directly with a responsive sales team.'],
            ['Supply inquiry support', 'Share product requirements, quantities, destination, and packaging needs.'],
            ['Global buyer focus', 'Built for distributors, sourcing teams, and professional procurement buyers.'],
          ].map(([title, text]) => (
            <article key={title} className="bg-white p-7 sm:p-8">
              <h2 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#10253b]">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#073754] py-14 text-white">
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
          <Link href="/contact" className="focus-ring mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#073754] transition hover:bg-[#dff1f7]">
            Start Inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
