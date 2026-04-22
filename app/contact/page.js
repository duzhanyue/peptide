'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以后续接入 EmailJS 等服务
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <main className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Sales</h1>
        <p className="text-gray-600">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
          <p className="text-gray-600">We have received your inquiry. Our sales team will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name *</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your company"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Product of Interest</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a product</option>
                <option value="industrial-pro">Industrial Pro Series</option>
                <option value="commercial-advanced">Commercial Advanced</option>
                <option value="enterprise-kit">Enterprise Solution Kit</option>
                <option value="other">Other / Custom</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message / Requirements</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your project, quantity, or specific requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </main>
  )
}