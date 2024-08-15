// 鉤子函式
import { Outlet } from 'react-router-dom'
// 組件
import Header from './Header'

// 樣式組件
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
