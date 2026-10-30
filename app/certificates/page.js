import certificates from './certificates.json'
import PageHero from '../components/PageHero'
import CertificateGallery from './CertificateGallery'

export const metadata = {
  title: 'COA Certificates and Test Reports',
  description:
    'View Kmax Peptide COA certificates and test report images for research peptide sourcing inquiries.',
  alternates: { canonical: '/certificates' },
}


export default function CertificatesPage() {
  const pageUrl = 'https://kmaxxpeptide.com/certificates'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: 'Kmax Peptide COA Certificates and Test Reports',
    description: metadata.description,
    isPartOf: { '@id': 'https://kmaxxpeptide.com/#website' },
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
    <main className="interior-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <PageHero label="Quality & certificates" title="Confidence begins with clarity." description="Browse our COA certificates and test reports. Contact our team for documentation related to your product and batch." image="/img/c2.png" />

      <section className="section-shell py-14 sm:py-20">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Certificate Gallery</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.045em] text-[#123039] sm:text-5xl">COA certificates at a glance.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#6d8176]">
            Professional quality. Reliable products. Our COA reports provide clear, documented test results and can be verified on the testing laboratory’s official website using the verification details shown on each report.
          </p>
        </div>

        <CertificateGallery certificates={certificates} />
      </section>

      <section className="bg-[#eef5f0] py-14">
        <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">Need More Information?</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[#123039]">Send your sourcing list to our team.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6d8176]">
              Include the peptide family, requested specification, quantity, destination, and any COA or batch documentation questions you want us to address.
            </p>
          </div>
          <a href="https://wa.me/8618131109493" className="focus-ring shrink-0 rounded-full bg-[#087f76] px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#087f76]" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
