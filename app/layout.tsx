import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactFloat from './components/ContactFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://kmaxxpeptide.com'),
  title: {
    default: 'Kmax Peptide | Professional Peptide Supply',
    template: '%s | Kmax Peptide',
  },
  description:
    'China peptide factory offering direct supply, competitive pricing, and fast support for global peptide buyers.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kmax Peptide | Professional Peptide Supply',
    description:
      'A peptide catalogue and inquiry support resource for research procurement.',
    url: 'https://kmaxxpeptide.com',
    siteName: 'Kmax Peptide',
    images: ['/img/hero-lab-v2.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kmax Peptide | Professional Peptide Supply',
    description:
      'A peptide catalogue and inquiry support resource for research procurement.',
    images: ['/img/hero-lab-v2.png'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kmaxxpeptide.com/#organization',
        name: 'Kmax Peptide',
        url: 'https://kmaxxpeptide.com',
        logo: 'https://kmaxxpeptide.com/img/kmax-logo.svg',
        description:
          'A China-based peptide factory website with catalogue pages, sourcing inquiry support, and procurement guides.',
        email: 'mailto:18931142995@163.com',
        knowsAbout: [
          'Research peptide catalogue',
          'Peptide specification review',
          'Batch-related documentation inquiries',
          'Research procurement inquiries',
          'China peptide factory sourcing',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+86-18931142995',
          contactType: 'sales',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://kmaxxpeptide.com/#website',
        url: 'https://kmaxxpeptide.com',
        name: 'Kmax Peptide',
        description:
          'Peptide factory catalogue pages, inquiry support, and procurement guides.',
        inLanguage: 'en',
        publisher: { '@id': 'https://kmaxxpeptide.com/#organization' },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WT4T2J8L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        {children}
        <Footer />
        <ContactFloat />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RDQZCFLL5N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RDQZCFLL5N');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WT4T2J8L');
          `}
        </Script>
      </body>
    </html>
  )
}
