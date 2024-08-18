// 模組樣式
import S from './style.module.css'
// PNG 圖檔
import alibaba_cloud_png from '../../assets/img/partner/alibaba_cloud.png'
import pipapa_png from '../../assets/img/partner/pipapa.png'
import web3_festival_png from '../../assets/img/partner/web3_festival.png'
import brightnode_png from '../../assets/img/partner/brightnode.png'
import zan_png from '../../assets/img/partner/zan.png'
import ice_network_png from '../../assets/img/partner/ice_network.png'
// 社群
import linkedin_png from '../../assets/img/logo/linkedin.png'
import x_png from '../../assets/img/logo/x.png'
import medium_png from '../../assets/img/logo/medium.png'
import telegram_png from '../../assets/img/logo/telegram.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// 鉤子函式
import { useState } from 'react'
import { Link } from 'react-router-dom'

// 頁首組件
function Footer() {
  return (
    <>
      <footer className={S.footer}>
        <section className={S.partners}>
          <div className={S.up}>TRUSTED BY OUR PARTNERS</div>
          <div className={S.down}>
            <Link
              to="https://twitter.com/alibaba_cloud/status/1770293507032502630?t=jw__9Et84aiL6DkjeZzJzg&s=19"
              target="blank"
            >
              <img className={S.partner} src={alibaba_cloud_png} />
            </Link>
            <Link to="https://cafe.naver.com/austrail" target="blank">
              <img className={S.partner} src={pipapa_png} />
            </Link>
            <Link
              to="https://www.web3festival.org/hongkong2023/collaborations?lang=en-US"
              target="blank"
            >
              <img className={S.partner} src={web3_festival_png} />
            </Link>
            <Link to="https://brightnode.io/brightnode-and-pichain-global/" target="blank">
              <img className={S.partner} src={brightnode_png} />
            </Link>
            <Link to="https://zan.top/" target="blank">
              <img className={S.partner} src={zan_png} />
            </Link>
            <Link to="https://ice.io/" target="blank">
              <img className={S.partner} src={ice_network_png} />
            </Link>
          </div>
        </section>
        <section className={S.info}>
          <div className={S.socialMedia}>
            <div className={S.title}>Social Media</div>
            <div className={S.icons}>
              <Link to="https://x.com/pichainmall" target="blank">
                <img className={S.mediaIcon} src={x_png} />
              </Link>
              <Link to="https://t.me/pichainmall" target="blank">
                <img className={S.mediaIcon} src={telegram_png} />
              </Link>
              <Link to="https://medium.com/@pichainmall" target="blank">
                <img className={S.mediaIcon} src={medium_png} />
              </Link>
              <Link to="https://hk.linkedin.com/company/pichainmall" target="blank">
                <img className={S.mediaIcon} src={linkedin_png} />
              </Link>
            </div>
          </div>
          <div className={S.contactUs}>
            <div className={S.title}>Contact Us</div>
            <a className={S.email} href="mailto:prm@pichainmall.com">
              <span>prm@pichainmall.com</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </section>
        <section className={S.copyright}>
          <div className={S.left}>
            <span>Copyright &copy; 2024 PiChain Global Ltd. </span>
            <span>All rights by reserved</span>
          </div>
          <div className={S.right}>
            <Link className={S.animatedLine} to="/user-agreement" target="blank">
              Terms of Service
            </Link>
            <Link className={S.animatedLine} to="/privacy-policy" target="blank">
              Privacy Policy
            </Link>
            <Link className={S.animatedLine} to="/cookie-policy" target="blank">
              Cookie Policy
            </Link>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
