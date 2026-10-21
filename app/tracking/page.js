import Link from 'next/link'
import TrackingForm from './TrackingForm'

export const metadata = {
  title: 'Track Your Shipment',
  description: 'Track your Kmax Peptide shipment, learn how to check delivery updates, and contact our team for shipping support.',
  alternates: { canonical: '/tracking' },
}

const steps = [
  ['01', 'Obtain Tracking Number', 'You Should Have A Tracking Number Provided By The Postal Service Or Logistics Company. This Number Is Unique To Your Package.'],
  ['02', 'Enter The Number', 'Enter The Tracking Number You Received For Your Parcel Into The Appropriate Field In Our Tracking Search Box Above.'],
  ['03', 'Track Your Package', 'Once You’ve Entered The Tracking Number, Click The “Track Order” Button To Retrieve The Latest Delivery Status.'],
  ['04', 'Check The Updates', 'The System Will Provide Updates On The Package’s Journey, Including Current Location And Expected Delivery Date.'],
]

const questions = [
  ['Where can I find my tracking number?', 'Our team will share your tracking number when your shipment is dispatched. If you cannot find it, contact us with your order reference.'],
  ['Why is my tracking number not showing any updates?', 'A tracking number may be created before the carrier records its first scan. Please check again after the parcel has entered the carrier network. Contact our team if you need help.'],
  ['Can I track an order with my order number?', 'This search uses a carrier tracking number. For order status before dispatch, contact our team with your order reference.'],
  ['What should I do if my shipment is delayed?', 'Review the latest carrier event for any delivery instructions or customs requests. Contact our team with your tracking number if you need assistance.'],
]

export default function TrackingPage() {
  return <main className="interior-page tracking-page">
    <section className="tracking-simple-hero"><div className="section-shell"><p className="eyebrow">SHIPMENT TRACKING</p><h1>Track Your Shipment</h1><p>Follow Your Kmax Peptide Shipment From Dispatch To Delivery.</p></div></section>
    <section className="shipment-search-section"><div className="section-shell shipment-search-centered"><TrackingForm /></div></section>
    <section className="shipment-steps-section"><div className="section-shell"><div className="shipment-section-heading"><h2>How To Track Your Parcel</h2><p>Follow These Simple Steps To Monitor Your Shipment In Real-Time.</p></div><div className="shipment-steps">{steps.map(([number,title,description]) => <article key={number}><span className="shipment-step-number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section-shell shipment-faq"><div><p className="eyebrow">A LITTLE CLARITY</p><h2>Shipping questions,<br /><span>answered.</span></h2><p>Our team is here when you need a little extra support.</p><a href="https://wa.me/8618931142995" target="_blank" rel="noopener noreferrer" className="text-link">Chat with us on WhatsApp ↗</a></div><div>{questions.map(([question,answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="shipment-support"><div className="section-shell"><div><p className="eyebrow">PERSONAL SUPPORT, EVERY STEP</p><h2>Let’s keep your delivery moving.</h2><p>Have your order reference and tracking number ready when you get in touch.</p></div><Link href="/contact" className="button button-primary">Contact shipping support ↗</Link></div></section>
  </main>
}
