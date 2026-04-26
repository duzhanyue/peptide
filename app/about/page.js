export default function About() {
  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 顶部Banner（贴合大疆风格，简洁大气，适配美妆肽调性） */}
      <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(\'/img/c1.png\')' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our Beauty Peptide Brand</h1>
          <p className="text-lg md:text-xl text-gray-200">Innovating Peptide Technology for Radiant, Healthy Skin</p>
        </div>
      </section>

      {/* 品牌简介（美妆肽核心业务，英文地道，适配外贸，贴合整体风格） */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/img/c2.png"
              alt="Beauty Peptide Research Lab"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story & Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 2018, we are a professional beauty peptide manufacturer and supplier, dedicated to bringing the power of advanced peptide technology to the global skincare industry. With a focus on research, innovation, and quality, we specialize in developing high-purity, bioactive peptides that redefine skin health and anti-aging care.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is simple: to create safe, effective, and science-backed peptide solutions that address the most common skin concerns—from fine lines and wrinkles to dullness, dryness, and uneven texture. We believe that every person deserves access to skincare ingredients that deliver visible, long-lasting results, without compromise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted partner for skincare brands, distributors, and researchers worldwide, we combine cutting-edge laboratory technology with strict quality control to ensure every batch of our beauty peptides meets the highest international standards. We are committed to transparency, reliability, and helping our clients create skincare products that stand out in a competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* 核心优势（贴合美妆肽，突出专业性，大疆风格极简模块化） */}
      <section className="bg-gray-50 py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 优势1：高纯度肽技术 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-gray-800">🔬</div>
              <h3 className="text-xl font-semibold mb-3">High-Purity Peptide Technology</h3>
              <p className="text-gray-600 text-sm">
                We utilize advanced synthesis and purification technology to produce beauty peptides with purity up to 99%, ensuring maximum bioactivity and safety. Our peptides are free from harmful additives, making them suitable for all skincare formulations, including sensitive skin products.
              </p>
            </div>
            {/* 优势2：专业研发团队 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-gray-800">👩‍🔬</div>
              <h3 className="text-xl font-semibold mb-3">Professional R&D Team</h3>
              <p className="text-gray-600 text-sm">
                Our R&D team consists of experienced biochemists and skincare experts who focus on exploring new peptide sequences and optimizing production processes. We keep pace with global skincare trends to develop innovative peptide solutions that meet market demands.
              </p>
            </div>
            {/* 优势3：严格质量控制 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-gray-800">✅</div>
              <h3 className="text-xl font-semibold mb-3">Strict Quality Control</h3>
              <p className="text-gray-600 text-sm">
                From raw material selection to final product delivery, we implement strict quality control standards. Each batch of peptides undergoes rigorous testing (HPLC, MS) to ensure consistency, purity, and compliance with international regulations (GMP, ISO).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 研发与生产（增强信任，贴合美妆肽专业性） */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">R&D & Production Capacity</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We have a modern laboratory and production facility equipped with state-of-the-art equipment, enabling us to realize large-scale production while maintaining high quality. Our annual production capacity reaches 500kg, which can meet the needs of both small-batch customization and large-scale orders.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We focus on sustainable development and adopt environmentally friendly production processes to minimize our impact on the environment. All our production activities comply with international environmental standards, ensuring green and responsible manufacturing.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">GMP Certified</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">ISO 9001</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">HPLC Testing</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/img/c3.png"
              alt="Beauty Peptide Production Facility"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 底部CTA（贴合大疆风格，引导询盘） */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-gray-300 mb-8">
            Whether you are a skincare brand looking for high-quality peptide ingredients, a distributor seeking reliable supply, or a researcher exploring new peptide applications, we are here to support you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Send Inquiry Now
          </a>
        </div>
      </section>
    </main>
  );
}