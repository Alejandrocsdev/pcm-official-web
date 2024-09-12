// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// 首頁
function Home() {
  return (
    <>
      <main className={S.main}>
        <div>Home</div>
        <Link to='/test'>Go to Test</Link>
        <iframe className={S.zoom} src="https://www.youtube.com/embed/Tiexp3WPYEE" allowFullScreen></iframe>
      </main>
    </>
  )
}

export default Home
