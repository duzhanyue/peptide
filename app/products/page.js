'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ghk-cu');

  const products = [
    // GHK-CU (3个)
    { id: 1, title: 'GHK-CU 10mg', purity: '99% Purity',  image: 'https://picsum.photos/id/26/800/600', category: 'ghk-cu' },
    { id: 2, title: 'GHK-CU 50mg', purity: '99% Purity',  image: 'https://picsum.photos/id/27/800/600', category: 'ghk-cu' },
    { id: 3, title: 'GHK-CU 100mg', purity: '99% Purity',  image: 'https://picsum.photos/id/28/800/600', category: 'ghk-cu' },

    // RT Peptide (3个)
    { id: 4, title: 'RT Peptide 10mg', purity: '99% Purity',  image: 'https://picsum.photos/id/42/800/600', category: 'rt' },
    { id: 5, title: 'RT Peptide 50mg', purity: '99% Purity',  image: 'https://picsum.photos/id/43/800/600', category: 'rt' },
    { id: 6, title: 'RT Peptide 100mg', purity: '99% Purity',  image: 'https://picsum.photos/id/44/800/600', category: 'rt' },

    // Tirz Peptide (3个)
    { id: 7, title: 'Tirz Peptide 10mg', purity: '99% Purity',  image: 'https://picsum.photos/id/60/800/600', category: 'tirz' },
    { id: 8, title: 'Tirz Peptide 50mg', purity: '99% Purity', image: 'https://picsum.photos/id/61/800/600', category: 'tirz' },
    { id: 9, title: 'Tirz Peptide 100mg', purity: '99% Purity',  image: 'https://picsum.photos/id/62/800/600', category: 'tirz' },

    // Semaglu Peptide (3个)
    { id: 10, title: 'Semaglu Peptide 10mg', purity: '99% Purity',  image: 'https://picsum.photos/id/96/800/600', category: 'semaglu' },
    { id: 11, title: 'Semaglu Peptide 50mg', purity: '99% Purity',  image: 'https://picsum.photos/id/97/800/600', category: 'semaglu' },
    { id: 12, title: 'Semaglu Peptide 100mg', purity: '99% Purity',  image: 'https://picsum.photos/id/98/800/600', category: 'semaglu' },
  ];

  const filtered = products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* 顶部 Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/p1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />

        <div className="relative z-10 text-center px-4 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Peptide Products
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            High-Purity, Safe, Effective Ingredients for Professional Use
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'ghk-cu', name: 'GHK-CU' },
            { id: 'rt', name: 'RT Peptide' },
            { id: 'tirz', name: 'Tirz Peptide' },
            { id: 'semaglu', name: 'Semaglu Peptide' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow hover:shadow-md'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 产品卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(item => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="text-xs text-blue-600 font-semibold mb-1">
                  {item.purity}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    href="/contact"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact"
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

      {/* 底部 CTA */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-white text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Need Custom Peptide Solutions?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          We provide high-quality peptides and custom synthesis services for global customers.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us Now
        </Link>
      </section>

    </main>
  );
}