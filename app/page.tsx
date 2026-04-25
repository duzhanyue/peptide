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
            <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src="/img/l1.png"
                  alt="Beauty Peptide Product 1"
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">GHK-CU</h3>
            <div className="text-center">
              {/* 跳转到产品页，并自动选中 ghk-cu 分类 */}
              <Link href="/products?category=ghk-cu" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品2 RT Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/img/l2.png"
                alt="Beauty Peptide Product 2"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">RT Peptide</h3>
            <div className="text-center">
              {/* 跳转到产品页，并自动选中 rt 分类 */}
              <Link href="/products?category=rt" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品3 Tirz Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/img/l3.png"
                alt="Beauty Peptide Product 3"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Tirz Peptide</h3>
            <div className="text-center">
              {/* 跳转到产品页，并自动选中 tirz 分类 */}
              <Link href="/products?category=tirz" className="text-blue-600 font-medium hover:underline">
                More Products →
              </Link>
            </div>
          </div>

          {/* 产品4 Semaglu Peptide */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/img/l4.png"
                alt="Beauty Peptide Product 4"
                className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl text-center font-semibold mb-2">Semaglu Peptide</h3>
            <div className="text-center">
              {/* 跳转到产品页，并自动选中 semaglu 分类 */}
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
        </div>
      </section>
    </main>
  );
}