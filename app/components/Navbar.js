'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + 品牌名 */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <img
              src="/img/logo.png"
              alt="MeiAn Peptide Logo"
              className="h-10 w-auto"
            />
            MeiAn Peptide
          </Link>

          {/* 桌面端导航：字体放大 + 间距拉大 */}
          <div className="hidden md:flex items-center space-x-18 text-base font-medium">
            <Link 
              href="/" 
              className="py-2 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="py-2 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/products" 
              className="py-2 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-900"></span>
              <span className="block w-6 h-0.5 bg-gray-900"></span>
              <span className="block w-6 h-0.5 bg-gray-900"></span>
            </div>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t py-6">
          <div className="flex flex-col items-center space-y-5 text-sm">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About Us</Link>
            <Link href="/#products" className="hover:text-blue-600">Products</Link>
            <Link href="/contact" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}