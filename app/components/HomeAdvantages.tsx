import type { ReactNode } from 'react'

const advantages: { title: ReactNode; description: string; icon: ReactNode }[] = [
  {
    title: <>&gt;99.5% Purity<br />Guaranteed</>,
    description: 'Verified By Strict 3rd-Party HPLC & MS Lab Testing. COAs Readily Available For Every Batch.',
    icon: <><ellipse cx="32" cy="16" rx="18" ry="5" /><path d="M14 16l15 25v12l6-3V41l15-25" /></>,
  },
  {
    title: <>Factory Direct<br />Pricing</>,
    description: 'Cut Out The Middlemen. Enjoy Unbeatable Margins And Wholesale Volume Discounts Globally.',
    icon: <><path d="M9 17l15-8 16 8 15-8v38l-15 8-16-8-15 8z" /><path d="M24 9v38m16-30v38" /></>,
  },
  {
    title: <>Fast &amp; Discreet<br />Shipping</>,
    description: 'Secure Global Delivery In Unbranded Packaging With Guaranteed Customs Clearance Support.',
    icon: <><circle cx="32" cy="32" r="22" /><path d="M32 32l-10-8m10 8 12-8M15 10l-5 5m39-5 5 5M17 49l-6 6m36-6 6 6" /></>,
  },
  {
    title: <>B2B &amp; B2C<br />Fulfillment</>,
    description: 'Scaling Effortlessly From Single Retail Vials To Custom Kg-Level API Peptide Synthesis.',
    icon: <><path d="M29 23l8 8 19-20" /><circle cx="15" cy="45" r="5" /><path d="M20 40v10m8-21v21m0-5a5 5 0 1 0 0-1m26-3a6 6 0 1 0 0 8" /></>,
  },
]

export default function HomeAdvantages() {
  return (
    <section className="home-advantages" aria-label="Our supply advantages">
      <div className="section-shell advantage-grid">
        {advantages.map((advantage, index) => (
          <article className="advantage-card" key={advantage.description}>
            <div className={`advantage-icon${index === 0 ? ' advantage-icon-green' : ''}`}>
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{advantage.icon}</svg>
            </div>
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
