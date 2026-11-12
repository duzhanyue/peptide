import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import WhatsAppLinks from './WhatsAppLinks'

type WhatsAppPickerProps = {
  placement: 'nav' | 'floating'
  icon?: ReactNode
  onSelect?: () => void
}

export default function WhatsAppPicker({ placement, icon, onSelect }: WhatsAppPickerProps) {
  const [open, setOpen] = useState(false)
  const picker = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const panelId = useId()
  const floating = placement === 'floating'

  useEffect(() => {
    if (!open) return

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !picker.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [open])

  function closeAndFocusTrigger() {
    setOpen(false)
    trigger.current?.focus()
  }

  return (
    <div
      ref={picker}
      className={`whatsapp-picker whatsapp-picker--${placement}`}
      onBlur={event => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={event => {
        if (open && event.key === 'Escape') {
          event.stopPropagation()
          closeAndFocusTrigger()
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        className={floating
          ? 'focus-ring flex cursor-pointer items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-[0_16px_35px_rgba(20,105,61,0.26)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(20,105,61,0.34)]'
          : 'nav-quote'}
        aria-label={floating ? 'WhatsApp Sales' : 'WhatsApp'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        {floating ? (
          <>{icon}<span className="hidden sm:inline">WhatsApp Sales</span></>
        ) : (
          <>WhatsApp <span aria-hidden="true">↗</span></>
        )}
      </button>
      <div id={panelId} className="whatsapp-picker-panel" hidden={!open}>
        <WhatsAppLinks onSelect={() => {
          closeAndFocusTrigger()
          onSelect?.()
        }} />
      </div>
    </div>
  )
}
