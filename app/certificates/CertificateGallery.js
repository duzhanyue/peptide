'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CertificateGallery({ certificates }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeCertificate = activeIndex === null ? null : certificates[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index === 0 ? certificates.length - 1 : index - 1))
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index === certificates.length - 1 ? 0 : index + 1))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, certificates.length])

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="focus-ring group overflow-hidden rounded-[1.4rem] border border-[#dce5ea] bg-white text-left shadow-[0_18px_45px_rgba(8,55,84,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd5dd] hover:shadow-[0_24px_60px_rgba(8,55,84,0.14)]"
          >
            <span className="relative block aspect-[1600/2360] bg-[#edf4f5]">
              <Image
                src={certificate.src}
                alt={certificate.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-x-4 bottom-4 rounded-full bg-white/92 px-4 py-2 text-center text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#0c5f8d] shadow-[0_12px_30px_rgba(8,55,84,0.16)]">
                View certificate
              </span>
            </span>
            <span className="block border-t border-[#e1ebef] p-4">
              <span className="font-display block text-lg font-bold tracking-[-0.03em] text-[#10253b]">{certificate.title}</span>
              <span className="mt-1 block text-xs leading-5 text-[#607080]">Click to view the full-size document image.</span>
            </span>
          </button>
        ))}
      </div>

      {activeCertificate && (
        <div className="fixed inset-0 z-[80] bg-[#061b2a]/88 p-4 backdrop-blur-sm sm:p-6" role="dialog" aria-modal="true" aria-label={activeCertificate.title}>
          <button type="button" className="absolute inset-0 cursor-default" aria-label="Close certificate viewer" onClick={() => setActiveIndex(null)} />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#a9d5e4]">Certificate Viewer</p>
                <h2 className="font-display text-xl font-bold tracking-[-0.03em]">{activeCertificate.title}</h2>
              </div>
              <button type="button" className="focus-ring rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#073754]" onClick={() => setActiveIndex(null)}>
                Close
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.4rem] border border-white/15 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
              <Image
                src={activeCertificate.src}
                alt={activeCertificate.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <button
                type="button"
                className="focus-ring rounded-full border border-white/20 bg-white/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:bg-white/20"
                onClick={() => setActiveIndex((index) => (index === 0 ? certificates.length - 1 : index - 1))}
              >
                Previous
              </button>
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#b9dce8]">
                {activeIndex + 1} / {certificates.length}
              </p>
              <button
                type="button"
                className="focus-ring rounded-full border border-white/20 bg-white/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:bg-white/20"
                onClick={() => setActiveIndex((index) => (index === certificates.length - 1 ? 0 : index + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
