export const whatsappContacts = [
  { number: '+86 18931142995', href: 'https://wa.me/8618931142995' },
  { number: '+86 17733897249', href: 'https://wa.me/8617733897249' },
]

export default function WhatsAppLinks({ onSelect }: { onSelect?: () => void }) {
  return (
    <ul className="whatsapp-links">
      {whatsappContacts.map(({ number, href }) => (
        <li key={number}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp at ${number}`} onClick={onSelect}>
            <span>{number}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
