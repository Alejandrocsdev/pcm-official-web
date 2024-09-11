// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// 手機選單
function MobileMenu({ style, onLinkClick }) {
  return (
    <>
      <div className={`${S.container} ${style}`}>
        <ul>
          <li>
            <Link to="about-us" onClick={onLinkClick}>About Us</Link>
          </li>
          <li>
            <Link to="team-members" onClick={onLinkClick}>Team Members</Link>
          </li>
          <li>
            <Link to="roadmap" onClick={onLinkClick}>Roadmap</Link>
          </li>
          <li>
            <Link to="blog" onClick={onLinkClick}>Blog</Link>
          </li>
          <li>
            <Link to="wallet" onClick={onLinkClick}>Wallet</Link>
          </li>
          <li>
            <Link to="dapps" onClick={onLinkClick}>Dapps</Link>
          </li>
          <li>
            <Link to="contract" onClick={onLinkClick}>Contract</Link>
          </li>
          <li>
            <Link to="guild" onClick={onLinkClick}>Guild</Link>
          </li>
          <li>
            <Link to="faq" onClick={onLinkClick}>FAQ</Link>
          </li>
          <li>
            <Link to="language" onClick={onLinkClick}>Language</Link>
          </li>
          <li>
            <Link to="download" onClick={onLinkClick}>Download</Link>
          </li>
          <li>
            <Link to="whitepaper" onClick={onLinkClick}>Whitepaper</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
