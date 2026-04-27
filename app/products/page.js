'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ghk-cu');

  useEffect(() => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const category = urlParams.get('category') || 'ghk-cu';
    setActiveCategory(category);
  }, []);

  const products = [
    { id: 2, title: 'GHK-CU 50mg', purity: '99% Purity', image: '/img/l1.png', category: 'ghk-cu' },
    { id: 3, title: 'GHK-CU 100mg', purity: '99% Purity', image: '/img/l1.100.png', category: 'ghk-cu' },
    { id: 4, title: 'RT Peptide 5mg', purity: '99% Purity', image: '/img/l2.5.png', category: 'rt' },
    { id: 5, title: 'RT Peptide 10mg', purity: '99% Purity', image: '/img/l2.10.png', category: 'rt' },
    { id: 6, title: 'RT Peptide 15mg', purity: '99% Purity', image: '/img/l2.15.png', category: 'rt' },
    { id: 61, title: 'RT Peptide 20mg', purity: '99% Purity', image: '/img/l2.20.png', category: 'rt' },
    { id: 62, title: 'RT Peptide 30mg', purity: '99% Purity', image: '/img/l2.30.png', category: 'rt' },
    { id: 63, title: 'RT Peptide 40mg', purity: '99% Purity', image: '/img/l2.40.png', category: 'rt' },
    { id: 64, title: 'RT Peptide 50mg', purity: '99% Purity', image: '/img/l2.50.png', category: 'rt' },
    { id: 65, title: 'RT Peptide 60mg', purity: '99% Purity', image: '/img/l2.png', category: 'rt' },
    { id: 7, title: 'Tirz Peptide 5mg', purity: '99% Purity', image: '/img/l3.5.png', category: 'tirz' },
    { id: 8, title: 'Tirz Peptide 10mg', purity: '99% Purity', image: '/img/l3.10.png', category: 'tirz' },
    { id: 9, title: 'Tirz Peptide 15mg', purity: '99% Purity', image: '/img/l3.15.png', category: 'tirz' },
    { id: 91, title: 'Tirz Peptide 20mg', purity: '99% Purity', image: '/img/l3.20.png', category: 'tirz' },
    { id: 92, title: 'Tirz Peptide 30mg', purity: '99% Purity', image: '/img/l3.png', category: 'tirz' },
    { id: 93, title: 'Tirz Peptide 40mg', purity: '99% Purity', image: '/img/l3.40.png', category: 'tirz' },
    { id: 94, title: 'Tirz Peptide 50mg', purity: '99% Purity', image: '/img/l3.50.png', category: 'tirz' },
    { id: 95, title: 'Tirz Peptide 60mg', purity: '99% Purity', image: '/img/l3.60.png', category: 'tirz' },
    { id: 96, title: 'Tirz Peptide 100mg', purity: '99% Purity', image: '/img/l3.100.png', category: 'tirz' },
    { id: 97, title: 'Tirz Peptide 120mg', purity: '99% Purity', image: '/img/l3.120.png', category: 'tirz' },
    { id: 10, title: 'Semaglu Peptide 2mg', purity: '99% Purity', image: '/img/l4.22.png', category: 'semaglu' },
    { id: 11, title: 'Semaglu Peptide 5mg', purity: '99% Purity', image: '/img/l4.1.png', category: 'semaglu' },
    { id: 12, title: 'Semaglu Peptide 10mg', purity: '99% Purity', image: '/img/l4.png', category: 'semaglu' },
    { id: 13, title: 'Semaglu Peptide 15mg', purity: '99% Purity', image: '/img/l4.15.png', category: 'semaglu' },
    { id: 14, title: 'Semaglu Peptide 20mg', purity: '99% Purity', image: '/img/l4.2.png', category: 'semaglu' },
    { id: 15, title: 'Semaglu Peptide 30mg', purity: '99% Purity', image: '/img/l4.30.png', category: 'semaglu' },
  ];

  const filtered = products.filter((p) => p.category === activeCategory);

  // 统一处理切换（同时支持 click + touch）
  const switchCategory = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/p1.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />
        <div className="relative z-10 text-center px-4 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Peptide Products</h1>
          <p className="text-lg md:text-xl text-gray-200">High-Purity, Safe, Effective Ingredients for Professional Use</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* 手机端能点的按钮区（关键修改在这里） */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div
            role="button"
            tabIndex={0}
            onClick={() => switchCategory('ghk-cu')}
            onTouchStart={(e) => {
              e.preventDefault();
              switchCategory('ghk-cu');
            }}
            className={`px-6 py-4 rounded-full text-sm font-medium cursor-pointer select-none ${
              activeCategory === 'ghk-cu' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:shadow-md'
            }`}
          >
            GHK-CU
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => switchCategory('rt')}
            onTouchStart={(e) => {
              e.preventDefault();
              switchCategory('rt');
            }}
            className={`px-6 py-4 rounded-full text-sm font-medium cursor-pointer select-none ${
              activeCategory === 'rt' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:shadow-md'
            }`}
          >
            RT Peptide
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => switchCategory('tirz')}
            onTouchStart={(e) => {
              e.preventDefault();
              switchCategory('tirz');
            }}
            className={`px-6 py-4 rounded-full text-sm font-medium cursor-pointer select-none ${
              activeCategory === 'tirz' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:shadow-md'
            }`}
          >
            Tirz Peptide
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => switchCategory('semaglu')}
            onTouchStart={(e) => {
              e.preventDefault();
              switchCategory('semaglu');
            }}
            className={`px-6 py-4 rounded-full text-sm font-medium cursor-pointer select-none ${
              activeCategory === 'semaglu' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 shadow hover:shadow-md'
            }`}
          >
            Semaglu Peptide
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filtered.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="w-full h-[240px] flex items-center justify-center p-4 overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  width="200"
                  height="200"
                  className="w-auto h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-blue-600 font-semibold mb-1">{item.purity}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <Link href="/contact" className="text-blue-600 font-medium hover:underline">View Details</Link>
                  <Link
                    href="https://wa.me/85259951323"
                    target="_blank"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    Inquiry
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-center text-white mt-16">
        <h2 className="text-3xl font-bold mb-4">Need Custom Peptide Solutions?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">We provide high-quality peptides and custom synthesis services for global customers.</p>
        <Link href="/contact" className="bg-white text-blue-700 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition">Contact Us Now</Link>
      </section>
    </main>
  );
}