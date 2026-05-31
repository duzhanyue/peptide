import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#082b43] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/img/logo.png" alt="" width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
            <div>
              <p className="font-display text-2xl font-bold leading-none">MeiAn Peptide</p>
              <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#9cc9dc]">Professional peptide supply</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-[#b5ced9]">
            Responsive sourcing support for research peptide buyers, distributors, and professional procurement teams.
          </p>
        </div>
        <div>
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#80b5cc]">Navigate</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d6e5eb]">
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/news" className="hover:text-white">News</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#80b5cc]">Sales Support</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d6e5eb]">
            <a href="mailto:zzz19182026@outlook.com" className="hover:text-white">zzz19182026@outlook.com</a>
            <a href="https://wa.me/85259951323" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp +852 5995 1323</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-[#8fb2c1] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MeiAn Peptide. All rights reserved.</p>
          <p>Laboratory research use only. Not for human consumption.</p>
        </div>
      </div>
    </footer>
  )
}
