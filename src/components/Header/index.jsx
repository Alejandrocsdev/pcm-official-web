// 模組樣式
import S from './style.module.css'
// PNG 圖檔
import logo_png from '../../assets/img/logo/logo.png'
// QR Code
import google_play_qr_png from '../../assets/img/qrcode/google_play.png'
import ios_qr_png from '../../assets/img/qrcode/iOS.png'
import android_robot_qr_png from '../../assets/img/qrcode/android_robot.png'
// Download Icon
import google_play_logo_png from '../../assets/img/logo/google_play_logo.png'
import ios_logo_png from '../../assets/img/logo/ios_logo.png'
import android_robot_logo_png from '../../assets/img/logo/android_robot_logo.png'
// Flag
import english_png from '../../assets/img/flag/english.png'
import simplified_chinese_png from '../../assets/img/flag/simplified_chinese.png'
import traditional_chinese_png from '../../assets/img/flag/traditional_chinese.png'
import korean_png from '../../assets/img/flag/korean.png'
import vietnamese_png from '../../assets/img/flag/vietnamese.png'
import french_png from '../../assets/img/flag/french.png'
import filipino_png from '../../assets/img/flag/filipino.png'
import hindi_png from '../../assets/img/flag/hindi.png'
import nepali_png from '../../assets/img/flag/nepali.png'
import indonesian_png from '../../assets/img/flag/indonesian.png'
import arabic_png from '../../assets/img/flag/arabic.png'
import swahili_png from '../../assets/img/flag/swahili.png'
import japanese_png from '../../assets/img/flag/japanese.png'
import malay_png from '../../assets/img/flag/malay.png'
import turkish_png from '../../assets/img/flag/turkish.png'
import azerbaijani_png from '../../assets/img/flag/azerbaijani.png'
import burmese_png from '../../assets/img/flag/burmese.png'
import sinhala_png from '../../assets/img/flag/sinhala.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faMobileScreenButton,
  faEarthAmericas
} from '@fortawesome/free-solid-svg-icons'
// 鉤子函式
import { useState } from 'react'
import { Link } from 'react-router-dom'

// 頁首組件
function Header() {
  // 下載按鈕切換
  const [icon, setIcon] = useState('gp')
  // 手機選單切換
  const [isOpen, setIsOpen] = useState(false)

  const handleIconSelect = (icon) => {
    setIcon(icon)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className={S.header}>
        <nav className={S.nav}>
          {/* 左 */}
          <div className={S.navLeft}>
            <Link className={S.logoLink} to="/">
              <img className={S.logoImg} src={logo_png} />
              <span className={S.logoText}>PICHAIN GLOBAL</span>
            </Link>
          </div>
          {/* 右 */}
          <div className={S.navRight}>
            {/* 選單 */}
            <ul className={S.menu}>
              <li>
                {/* 下拉選單(about) */}
                <div className={S.drop}>
                  <span>About</span>
                  <FontAwesomeIcon className={S.arrow} icon={faAngleDown} />
                  <div className={S.content}>
                    <ul>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/team-members">Team Members</Link>
                      </li>
                      <li>
                        <Link to="/roadmap">Roadmap</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={S.omit}>
                {/* 一般連結 */}
                <Link to="/wallet">Wallet</Link>
              </li>
              <li className={S.omit}>
                {/* 一般連結 */}
                <Link to="/dapps">Dapps</Link>
              </li>
              <li className={S.omit}>
                {/* 一般連結 */}
                <Link to="/contract">Contract</Link>
              </li>
              <li className={S.omit}>
                {/* 一般連結 */}
                <Link to="/guild">Guild</Link>
              </li>
              <li className={S.omit}>
                {/* 一般連結 */}
                <Link to="/faq">FAQ</Link>
              </li>
              <li className={S.more}>
                {/* 下拉選單(more) */}
                <div className={S.drop}>
                  <span>More</span>
                  <FontAwesomeIcon className={S.arrow} icon={faAngleDown} />
                  <div className={S.content}>
                    <ul>
                      <li>
                        <Link to="/wallet">Wallet</Link>
                      </li>
                      <li>
                        <Link to="/dapps">Dapps</Link>
                      </li>
                      <li>
                        <Link to="/explorer">Explorer</Link>
                      </li>
                      <li>
                        <Link to="/guild">Guild</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {/* 下拉選單(language) */}
                <div className={`${S.drop} ${S.language}`}>
                  <FontAwesomeIcon className={S.earthIcon} icon={faEarthAmericas} />
                  <div className={S.content}>
                    <ul>
                      <li>
                        <div className={S.flag}>
                          <img src={english_png} />
                        </div>
                        <span>English</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={simplified_chinese_png} />
                        </div>
                        <span>中文(简体)</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={traditional_chinese_png} />
                        </div>
                        <span>中文(繁體)</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={korean_png} />
                        </div>
                        <span>한국어</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={vietnamese_png} />
                        </div>
                        <span>Tiếng Việt</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={french_png} />
                        </div>
                        <span>Francais</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={filipino_png} />
                        </div>
                        <span>Filipino</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={hindi_png} />
                        </div>
                        <span>हिंदी</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={hindi_png} />
                        </div>
                        <span>தமிழ்</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img className={S.nepali} src={nepali_png} />
                        </div>
                        <span className={S.nepaliText}>नेपाल</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={indonesian_png} />
                        </div>
                        <span>Bahasa</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={arabic_png} />
                        </div>
                        <span>عربى</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={swahili_png} />
                        </div>
                        <span>Kiswahili</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={japanese_png} />
                        </div>
                        <span>日本語</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={malay_png} />
                        </div>
                        <span>Malay</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={turkish_png} />
                        </div>
                        <span>Türkiyə</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={azerbaijani_png} />
                        </div>
                        <span>Azərbaycan</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={burmese_png} />
                        </div>
                        <span>မြန်မာ</span>
                      </li>
                      <li>
                        <div className={S.flag}>
                          <img src={sinhala_png} />
                        </div>
                        <span>සිංහල</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                {/* 下拉選單(download) */}
                <div className={S.download}>
                  <FontAwesomeIcon className={S.phone} icon={faMobileScreenButton} />
                  <div className={S.content}>
                    <div className={S.container}>
                      {icon === 'gp' && <img className={S.qrImg} src={google_play_qr_png} />}
                      {icon === 'ios' && <img className={S.qrImg} src={ios_qr_png} />}
                      {icon === 'ar' && <img className={S.qrImg} src={android_robot_qr_png} />}
                      <div className={S.icons}>
                        <div
                          className={`${S.downloadIcon} ${icon === 'gp' ? S.selected : ''}`}
                          onClick={() => handleIconSelect('gp')}
                        >
                          <img src={google_play_logo_png} />
                        </div>
                        <div
                          className={`${S.downloadIcon} ${icon === 'ios' ? S.selected : ''}`}
                          onClick={() => handleIconSelect('ios')}
                        >
                          <img src={ios_logo_png} />
                        </div>
                        <div
                          className={`${S.downloadIcon} ${icon === 'ar' ? S.selected : ''}`}
                          onClick={() => handleIconSelect('ar')}
                        >
                          <img src={android_robot_logo_png} />
                        </div>
                      </div>
                      <Link className={S.moreInfo} to="/wallet">
                        More Info
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 一般連結 */}
            <Link className={S.whitepaper} to="/whitepaper">
              Whitepaper
            </Link>
            <div className={`${S.mobileMenu} ${isOpen ? S.open : ''}`} onClick={toggleMenu}>
              <div className={`${S.line} ${S.line1}`}></div>
              <div className={`${S.line} ${S.line2}`}></div>
              <div className={`${S.line} ${S.line3}`}></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
