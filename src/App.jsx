// 樣式
import './global.css'
import './fonts.css'
// 鉤子函式
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// 佈局組件
import Layout from './components/Layout'
// 頁面
import Home from './pages/Home'
import Test from './pages/Test'
import NFT from './pages/NFT'
import Download from './pages/Download'
import Whitepaper from './pages/Whitepaper'
import ServiceTerms from './pages/ServiceTerms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }
  
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />}>
            <Route index element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/nft" element={<NFT />} />
            <Route path="/download" element={<Download />} />
            <Route path="/whitepaper" element={<Whitepaper />} />

            {/* 錯誤路由 */}
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/service-terms" element={<ServiceTerms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
