// 樣式
import './global.css'
import './fonts.css'
// 鉤子函式
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// 佈局組件
import Layout from './components/Layout'
// 頁面
import Home from './pages/Home'
import Test from './pages/Test'
import NFT from './pages/NFT'
import ServiceTerms from './pages/ServiceTerms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/nft" element={<NFT />} />

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
