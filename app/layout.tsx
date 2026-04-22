import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactFloat from './components/ContactFloat' // 新增

export const metadata = {
  title: 'MeiAn Peptide',
  description: 'Professional Beauty Peptide Manufacturer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
        <ContactFloat /> {/* 全局悬浮按钮，所有页面都显示 */}
      </body>
    </html>
  )
}