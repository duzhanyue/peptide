import Link from 'next/link'

export const metadata = {
  title: 'Contact Sales for a Peptide Quotation',
  description:
    'Contact MeiAn Peptide by WhatsApp or email to discuss peptide factory catalogue options, quotation details, and destination-dependent logistics support.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <main className="bg-[#f6fafb] pt-20">
      <section className="blueprint-grid border-b border-[#dce5ea]">
        <div className="section-shell py-20 text-center sm:py-24">
          <p className="eyebrow">Sales Support</p>
          <h1 className="font-display mt-4 text-5xl font-bold tracking-[-0.055em] text-[#10253b] sm:text-6xl">Let&apos;s discuss your inquiry.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607080]">
            Share the catalogue item, specification, quantity, and destination. Our team will help you with quotation, packaging, and factory supply questions.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-5 py-14 lg:grid-cols-2 lg:py-20">
        <a
          href="https://wa.me/85259951323"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group soft-card rounded-[1.6rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,55,84,0.14)] sm:p-9"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f9e9] text-[#159947]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.44 6.6 2.01 12.05 2.01c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89"/></svg>
            </div>
            <span className="text-2xl text-[#159947] transition group-hover:translate-x-1">&rarr;</span>
          </div>
          <p className="eyebrow mt-8">Fastest Response</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.045em] text-[#10253b]">Chat on WhatsApp</h2>
          <p className="mt-3 text-sm leading-7 text-[#607080]">Start a direct conversation with our sales team for product and quotation questions.</p>
          <p className="mt-7 text-sm font-bold text-[#159947]">+852 5995 1323</p>
        </a>

        <a
          href="mailto:zzz19182026@outlook.com"
          className="focus-ring group soft-card rounded-[1.6rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,55,84,0.14)] sm:p-9"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2f0f5] text-[#0c5f8d]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-1.99 2L2 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
            </div>
            <span className="text-2xl text-[#0c5f8d] transition group-hover:translate-x-1">&rarr;</span>
          </div>
          <p className="eyebrow mt-8">Detailed Inquiry</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-[-0.045em] text-[#10253b]">Send us an email</h2>
          <p className="mt-3 text-sm leading-7 text-[#607080]">Email your requirement list when you need to share several products or more order details.</p>
          <p className="mt-7 break-all text-sm font-bold text-[#0c5f8d]">zzz19182026@outlook.com</p>
        </a>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-[1.6rem] border border-[#dce5ea] bg-white px-6 py-7 sm:px-8">
          <p className="eyebrow">Helpful Details</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {['Product name', 'Specification and quantity', 'Shipping destination'].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6f1f4] text-sm font-bold text-[#0c5f8d]">{index + 1}</span>
                <span className="text-sm font-bold text-[#426276]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#073754] py-10 text-white">
        <div className="section-shell flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#bdd7e1]">Still browsing? Explore the full catalogue first.</p>
          <Link href="/products" className="focus-ring font-bold uppercase tracking-[0.14em] text-white hover:text-[#b5def0]">View Products &rarr;</Link>
        </div>
      </section>
    </main>
  )
}
