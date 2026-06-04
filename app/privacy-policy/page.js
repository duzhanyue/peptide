import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Read the MeiAn Peptide privacy policy, including information collection, use, cookies, disclosure, and contact details.',
  alternates: { canonical: '/privacy-policy' },
}

const collectedItems = [
  'Name, contact information, email address, and user ID.',
  'Correspondence sent to or from us.',
  'Any additional information you choose to provide.',
  'Other information from your interaction with this site, services, content, and advertising, including computer and connection information, statistics on page views, traffic to and from the site, ad data, IP address, and standard web log information.',
]

export default function PrivacyPolicy() {
  const updated = 'June 4, 2026'

  return (
    <main className="bg-[#f6fafb] pt-20">
      <section className="blueprint-grid border-b border-[#dce5ea]">
        <div className="section-shell py-16 text-center sm:py-20">
          <p className="eyebrow">MeiAn Peptide</p>
          <h1 className="font-display mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-[-0.055em] text-[#10253b] sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#607080]">
            This Privacy Policy describes how we handle personal information collected through this website.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#7c929b]">Last updated: {updated}</p>
        </div>
      </section>

      <section className="section-shell max-w-4xl py-12 sm:py-16">
        <div className="rounded-[1.5rem] border border-[#dce5ea] bg-white p-6 shadow-[0_18px_45px_rgba(8,55,84,0.08)] sm:p-9">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Overview</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                This Privacy Policy describes how we handle your personal information. By using our site, you consent to the storage, processing, transfer, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Collection</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                You may browse this site without providing any personal information. However, to receive notifications, updates, or request additional information about our site, we may collect the following information:
              </p>
              <ul className="mt-5 grid gap-3 rounded-2xl border border-[#dce5ea] bg-[#f5f9fa] p-5 text-sm leading-6 text-[#506474]">
                {collectedItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#0c5f8d]">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                If you choose to provide us with personal information, you consent to the transfer and storage of that information on servers located in the United States.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Use</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                We use your personal information to provide you with the services you request, communicate with you, troubleshoot problems, customize your experience, inform you about our services and site updates, and measure interest in our site and services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Cookies and Analytics</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                Like many websites, we use cookies to enhance your experience and gather information about visitors and visits to our website. We may use analytics and advertising tools, including Google Analytics and Google Tag Manager, to understand site traffic, measure performance, and improve our website.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                You can manage cookies through your browser settings. Some features of the site may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Disclosure</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We may disclose personal information to respond to legal requirements, enforce our policies, respond to claims that a posting or other content violates others&apos; rights, or protect anyone&apos;s rights, property, or safety. Such information will be disclosed in accordance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[#10253b]">Contact</h2>
              <p className="mt-4 text-sm leading-7 text-[#607080]">
                If you have questions about this Privacy Policy, please contact us through the contact page or email us at{' '}
                <a href="mailto:zzz19182026@outlook.com" className="font-bold text-[#0c5f8d] hover:text-[#073754]">zzz19182026@outlook.com</a>.
              </p>
              <Link href="/contact" className="focus-ring mt-6 inline-block rounded-full bg-[#073754] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#0c5f8d]">
                Contact MeiAn Peptide
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
