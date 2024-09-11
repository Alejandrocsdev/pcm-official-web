// 鉤子函式
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
// 組件
import Header from './Header'
import Footer from './Footer'

// 樣式組件
function Layout({ isOpen, toggleMenu }) {
  const [vw, setVw] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      {(!isOpen || vw > 950) && <Outlet />}
      {(!isOpen || vw > 950) && <Footer />}
    </>
  )
}

export default Layout
