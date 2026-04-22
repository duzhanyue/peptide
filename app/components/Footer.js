export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TECHPRO</h3>
            <p className="text-gray-400 text-sm">
              Global leading provider of high-performance industrial solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Industrial Series</a></li>
              <li><a href="#" className="hover:text-white">Commercial Series</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TechPro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}