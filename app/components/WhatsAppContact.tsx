export default function WhatsAppContact() {
  const whatsappUrl = 'https://wa.me/8618131109493'

  return (
    <aside className="wholesale-whatsapp" aria-labelledby="wholesale-contact-title">
      <div className="whatsapp-card-top">
        <span className="whatsapp-card-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M27 15.5a11 11 0 0 1-16.5 9.6L5 27l1.8-5.5A11 11 0 1 1 27 15.5Z" />
            <path d="m11.4 10.5 2 3-1.1 1.4a12 12 0 0 0 4.8 4.2l1.3-1.4 3 1.6c-.4 2-1.7 2.9-3.4 2.3-4.7-1.5-8.3-5.3-9.2-9-.3-1.3.6-2.1 2.6-2.1Z" />
          </svg>
        </span>
        <span className="whatsapp-card-channel">DIRECT SALES SUPPORT</span>
      </div>

      <p className="eyebrow">LET’S TALK ON WHATSAPP</p>
      <h3 id="wholesale-contact-title">Your next quote starts<br />with a conversation.</h3>
      <p className="whatsapp-card-description">Connect directly with our team for product availability, wholesale pricing, and sourcing support.</p>

      <div className="whatsapp-conversation-guide">
        <p>A good place to start</p>
        <ul>
          <li><span>01</span>Product name &amp; specification</li>
          <li><span>02</span>Quantity &amp; packaging needs</li>
          <li><span>03</span>Shipping destination</li>
        </ul>
      </div>

      <a href={whatsappUrl} className="button wholesale-whatsapp-button" target="_blank" rel="noopener noreferrer">
        Chat with us on WhatsApp <span aria-hidden="true">↗</span>
      </a>
      <p className="whatsapp-card-note">Start a direct conversation with our sales team.</p>

      <div className="whatsapp-card-footer">
        <span>KMAX PEPTIDE · SALES TEAM</span>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+86 18131109493</a>
      </div>
    </aside>
  )
}
