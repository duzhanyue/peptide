'use client'  // 👈 就是加了这一行，错误彻底消失
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // 轮播图图片（你只需要替换这里的图片名称）
  const slides = [
    '/img/m2.png',
    '/img/m3.png',
    '/img/m4.png',
    '/img/m1.png',
  ];

  const [current, setCurrent] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3秒切换一次
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-16">
      {/* 全屏 Banner 轮播图 */}
      <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">
        
        {/* 轮播图片 */}
        {slides.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* 黑色遮罩 */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 中间文字 */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Next-Generation Beauty Peptide Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Science-Backed Peptides for Radiant, Healthy, Age-Defying Skin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products" className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Explore Products
            </Link>
            <Link href="/about" className="border border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors">
              About Us
            </Link>
          </div>
        </div>

        {/* 轮播小点 */}
        <div className="absolute bottom-8 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 产品展示区 */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Beauty Peptides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-purity, bioactive peptides engineered for effective skincare formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 产品1 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="/img/l1.png"
                  alt="Beauty Peptide Product 1"
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collagen-Boosting Peptide</h3>
            <p className="text-gray-600 text-sm mb-4">Stimulates collagen production, reducing fine lines and wrinkles.</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">
              Send Inquiry →
            </Link>
          </div>

          {/* 产品2 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/img/l2.png"
                alt="Beauty Peptide Product 2"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hydrating Peptide Complex</h3>
            <p className="text-gray-600 text-sm mb-4">Deeply moisturizes, improves skin barrier and reduces dryness.</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">
              Send Inquiry →
            </Link>
          </div>

          {/* 产品3 */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/img/l3.png"
                alt="Beauty Peptide Product 3"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Brightening Peptide Serum</h3>
            <p className="text-gray-600 text-sm mb-4">Fades dark spots, evens skin tone and enhances radiance.</p>
            <Link href="/contact" className="text-blue-600 font-medium hover:underline">
              Send Inquiry →
            </Link>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Beauty Peptides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">High Purity & Bioactivity</h3>
              <p className="text-gray-600">99% pure peptides, ensuring maximum effectiveness and safety for all skin types.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Support & Supply</h3>
              <p className="text-gray-600">24/7 technical support and worldwide logistics for timely delivery.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Skincare Brands</h3>
              <p className="text-gray-600">Proven solutions used by leading skincare brands worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部询盘CTA */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Skincare Line?</h2>
          <p className="text-gray-300 mb-8">
            Contact our team for customized beauty peptide solutions and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}