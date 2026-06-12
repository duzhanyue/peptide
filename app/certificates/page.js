import Link from 'next/link'
import CertificateGallery from './CertificateGallery'

export const metadata = {
  title: 'Certificates and Company Documents',
  description:
    'View Kmax Peptide certificate images and company document references for international peptide sourcing inquiries.',
  alternates: { canonical: '/certificates' },
}

const certificates = Array.from({ length: 8 }, (_, index) => {
  const number = index + 1

  return {
    title: `Certificate ${String(number).padStart(2, '0')}`,
    src: `/img/certificates/certificate-${String(number).padStart(2, '0')}.png`,
    alt: `Kmax Peptide certificate document ${number}`,
  }
})

export default function CertificatesPage() {
  const pageUrl = 'https://www.kmaxpeptide.com/certificates'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: 'Kmax Peptide Certificates and Company Documents',
    description: metadata.description,
    isPartOf: { '@id': 'https://www.kmaxpeptide.com/#website' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Certificate image gallery',
      itemListElement: certificates.map((certificate, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: certificate.title,
        url: `${pageUrl}#certificate-${index + 1}`,
      })),
    },
  }

  return (
    <main className="bg-[#f6fafb] pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section className="relative overflow-hidden bg-[#082b43] text-white">
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#74bfd6]/18 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="section-shell relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#a3d1e0]">Company Documents</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-7xl">Certificates for buyer review.</h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#d4e4e9]">
              View selected Kmax Peptide certificate images and company document references in one clean gallery. Use this page as a quick reference during supplier evaluation and sourcing communication.
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <p className="font-display text-5xl font-bold tracking-[-0.05em]">{certificates.length}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a3d1e0]">Document Images</p>
            <p className="mt-5 text-sm leading-7 text-[#d4e4e9]">Click any certificate card below to open a large preview with previous and next controls.</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Certificate Gallery</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.045em] text-[#10253b] sm:text-5xl">Company documents at a glance.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#607080]">
            These images are provided for buyer reference. Contact our sales team if you need the relevant document details for a specific sourcing discussion.
          </p>
        </div>

        <CertificateGallery certificates={certificates} />
      </section>

      <section className="bg-[#eaf2f4] py-14">
        <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Need More Information?</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Send your sourcing list to our team.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#607080]">
              Include the peptide family, requested specification, quantity, destination, and any company document questions you want us to address.
            </p>
          </div>
          <Link href="/contact" className="focus-ring shrink-0 rounded-full bg-[#073754] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  )
}
