'use client'
import Link from 'next/link';

export default function() {
  return (
    <main className="pt-16">

      {/* 产品展示区 */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Beauty Peptides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            High-purity, bioactive peptides engineered for effective skincare formulations.
          </p>
        </div>

        {/* 一行 4 个产品 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 产品1 GHK-CU */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 bg-gray-50">
                <img
                  src="/img/l1.png"
                  alt="Beauty Peptide Product 1"
                  loading="lazy"
                  decoding="async"
                  width="300"
                  height="250"
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">GHK-CU</h3>
            <div className="text-center">
              <Link href="/products?category=ghk-cu" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品2 RT Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 bg-gray-50">
              <img
                src="/img/l2.png"
                alt="Beauty Peptide Product 2"
                loading="lazy"
                decoding="async"
                width="300"
                height="250"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">RT Peptide</h3>
            <div className="text-center">
              <Link href="/products?category=rt" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品3 Tirz Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 bg-gray-50">
              <img
                src="/img/l3.png"
                alt="Beauty Peptide Product 3"
                loading="lazy"
                decoding="async"
                width="300"
                height="250"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Tirz Peptide</h3>
            <div className="text-center">
              <Link href="/products?category=tirz" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品4 Semaglu Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 bg-gray-50">
              <img
                src="/img/l4.png"
                alt="Beauty Peptide Product 4"
                loading="lazy"
                decoding="async"
                width="300"
                height="250"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Semaglu Peptide</h3>
            <div className="text-center">
              <Link href="/products?category=semaglu" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
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

          <div className="mt-10">
            <p className="text-gray-400 mb-3 text-sm">Quick Support & Inquiry</p>
            <a
              href="https://wa.me/85259951323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-7 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp: +852 59951323</span>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}