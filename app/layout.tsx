import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactFloat from './components/ContactFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meianpeptide.com'),
  title: {
    default: 'MeiAn Peptide | Professional Peptide Supply',
    template: '%s | MeiAn Peptide',
  },
  description:
    'Explore research-use peptide catalogue options with clear specifications, responsive inquiry support, and destination-dependent logistics assistance.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MeiAn Peptide | Professional Peptide Supply',
    description:
      'A peptide catalogue and inquiry support resource for research procurement.',
    url: 'https://www.meianpeptide.com',
    siteName: 'MeiAn Peptide',
    images: ['/img/hero-lab-v2.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeiAn Peptide | Professional Peptide Supply',
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
        '@id': 'https://www.meianpeptide.com/#organization',
        name: 'MeiAn Peptide',
        url: 'https://www.meianpeptide.com',
        logo: 'https://www.meianpeptide.com/img/logo.png',
        email: 'mailto:zzz19182026@outlook.com',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+852-5995-1323',
          contactType: 'sales',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.meianpeptide.com/#website',
        url: 'https://www.meianpeptide.com',
        name: 'MeiAn Peptide',
        publisher: { '@id': 'https://www.meianpeptide.com/#organization' },
      },
    ],
  }

  return (
    <html lang="en">
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
