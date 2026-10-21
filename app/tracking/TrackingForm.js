'use client'

import { useState } from 'react'

export default function TrackingForm() {
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  function submit(event) {
    event.preventDefault()
    const cleaned = number.trim().replace(/\s+/g, '')
    if (!/^[A-Za-z0-9-]{6,50}$/.test(cleaned)) {
      setError('Enter a valid tracking number using 6–50 letters, numbers, or hyphens.')
      return
    }
    setError('')
    window.open(`https://t.17track.net/en#nums=${encodeURIComponent(cleaned)}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <form className="shipment-form" onSubmit={submit}>
      <label htmlFor="tracking-number">Tracking number</label>
      <div className="shipment-input-row"><input id="tracking-number" name="trackingNumber" value={number} onChange={event => {setNumber(event.target.value);setError('')}} placeholder="Enter your tracking number" required maxLength={70} autoComplete="off" spellCheck={false} aria-invalid={Boolean(error)} aria-describedby={error ? 'tracking-error tracking-note' : 'tracking-note'} /><button type="submit" className="button button-primary">Track Order <span aria-hidden="true">↗</span></button></div>
      {error && <p id="tracking-error" className="tracking-error" role="alert">{error}</p>}
      <p id="tracking-note" className="shipment-note">Opens 17TRACK in a new tab. Your tracking number is shared with 17TRACK when you search. Delivery updates and estimates are provided by the carrier.</p>
    </form>
  )
}
