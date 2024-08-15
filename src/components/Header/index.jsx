// 模組樣式
import S from './style.module.css'

// 頁首組件
function Header() {
  return (
    <>
      <header className={S.header}>
        <nav className={S.nav}>
          <div className={S.left}></div>
          <div className={S.center}></div>
          <div className={S.right}></div>
        </nav>
      </header>
    </>
  )
}

export default Header
