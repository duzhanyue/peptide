import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Our Research Peptide Supply',
  description:
    'Learn how MeiAn Peptide supports distributors, procurement teams, and research buyers with a focused peptide catalogue and direct quotation support.',
  alternates: { canonical: '/about' },
}

const values = [
  ['01', 'Focused product range', 'A clear catalogue makes it easier for buyers to identify the peptide family and specification they need.'],
  ['02', 'Professional communication', 'Direct sales channels help procurement teams discuss quotations, quantities, and shipping efficiently.'],
  ['03', 'Research-use clarity', 'Product presentation is structured around specifications and clear research-use positioning.'],
]

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#082b43] pt-20 text-white">
        <Image src="/img/c1.png" alt="MeiAn Peptide facility" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,34,53,0.96),rgba(4,34,53,0.48),rgba(4,34,53,0.25))]" />
        <div className="section-shell relative py-24 sm:py-32">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#a3d1e0]">About MeiAn Peptide</p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-7xl">A sourcing partner built around clarity.</h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#d4e4e9]">Supporting research peptide buyers with a focused catalogue, responsive communication, and a direct path to quotation.</p>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:py-24">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-[#dfecee]">
          <Image src="/img/c2.png" alt="Peptide production environment" width={1400} height={950} className="h-full min-h-[360px] w-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">Our Approach</p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-[-0.045em] text-[#10253b] sm:text-5xl">Make every procurement conversation more efficient.</h2>
          <p className="mt-6 text-sm leading-7 text-[#607080]">
            MeiAn Peptide presents a focused portfolio for research and professional sourcing. Our goal is simple: help buyers identify a product, communicate the specification they need, and reach a sales contact without unnecessary friction.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#607080]">
            From product discovery to quotation support, our website is designed for distributors, procurement teams, and research buyers who value a responsive and practical sourcing experience.
          </p>
          <Link href="/products" className="focus-ring mt-8 inline-block rounded-full bg-[#073754] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="bg-[#edf4f5] py-20">
        <div className="section-shell">
          <p className="eyebrow">What Matters to Us</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-[-0.045em] text-[#10253b] sm:text-5xl">A better experience for serious buyers.</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-[#d7e3e7] bg-[#d7e3e7] lg:grid-cols-3">
            {values.map(([number, title, text]) => (
              <div key={number} className="bg-white p-7 sm:p-8">
                <p className="font-display text-4xl font-bold text-[#b7d4df]">{number}</p>
                <h3 className="font-display mt-7 text-2xl font-bold tracking-[-0.035em] text-[#10253b]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#607080]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="eyebrow">Professional Presentation</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-[-0.045em] text-[#10253b] sm:text-5xl">Built for international sourcing.</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#607080]">
            Clear product categories, accessible contact options, and export-ready communication help buyers move forward with confidence. Send us the peptide family, specification, and quantity you are considering to begin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Laboratory research use only', 'Direct quotation support', 'Destination-dependent logistics support'].map((item) => (
              <span key={item} className="rounded-full border border-[#d3e0e5] bg-[#f5f9fa] px-4 py-2 text-xs font-bold text-[#426276]">{item}</span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.8rem] bg-[#dfecee]">
          <Image src="/img/c3.png" alt="Peptide packaging environment" width={1400} height={950} className="h-full min-h-[340px] w-full object-cover" />
        </div>
      </section>

      <section className="bg-[#073754] py-16 text-white">
        <div className="section-shell flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.045em]">Ready to discuss your sourcing list?</h2>
            <p className="mt-3 text-sm text-[#bdd7e1]">Our sales team is available by WhatsApp and email.</p>
          </div>
          <Link href="/contact" className="focus-ring shrink-0 rounded-full bg-white px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#073754] hover:bg-[#dff1f7]">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
