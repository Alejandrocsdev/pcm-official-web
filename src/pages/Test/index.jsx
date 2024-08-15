// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// 首頁
function Test() {
  return (
    <>
      <main className={S.main}>
        <div>Test</div>
        <Link className={S.one} to='/'>Back to Home</Link>
      </main>
    </>
  )
}

export default Test
