'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/news', label: 'News' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/80 bg-white/88 shadow-[0_8px_35px_rgba(7,55,84,0.06)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm" onClick={() => setMenuOpen(false)}>
          <Image src="/img/logo.png" alt="MeiAn Peptide" width={48} height={48} className="h-11 w-11 rounded-xl object-cover" priority />
          <span>
            <span className="font-display block text-[1.38rem] font-bold leading-none tracking-[-0.04em] text-[#10253b]">MeiAn</span>
            <span className="mt-1 block text-[0.56rem] font-bold uppercase tracking-[0.32em] text-[#0c5f8d]">Peptide</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) ? 'text-[#0c5f8d]' : 'text-[#506474] hover:text-[#0c5f8d]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-[#073754] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0c5f8d]"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring rounded-lg border border-[#dce5ea] p-2.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-5 bg-[#10253b]" />
          <span className="my-1.5 block h-0.5 w-5 bg-[#10253b]" />
          <span className="block h-0.5 w-5 bg-[#10253b]" />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[#dce5ea] bg-white px-4 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-md flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-4 py-3 text-sm font-bold text-[#10253b]" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 rounded-lg bg-[#073754] px-4 py-3 text-center text-sm font-bold text-white" onClick={() => setMenuOpen(false)}>
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
