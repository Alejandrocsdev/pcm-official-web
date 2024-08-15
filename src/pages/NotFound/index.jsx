// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// 錯誤頁面
const NotFound = () => {
  return (
    <main className={S.main}>
      <Link to='/'>Back to Home</Link>
    </main>
  )
}

export default NotFound
