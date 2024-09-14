// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// PNG 圖檔
import piart_png from '../../assets/img/dapp/piart.png'
import mall_png from '../../assets/img/dapp/mall.png'
// 首頁
function Dapps() {
  return (
    <>
      <main className={S.main}>
        <div></div>
        <div className={S.container}>
          <div className={S.nft}>
            <Link to="/dapps/nft">
              <img className={S.nftImg} src={piart_png} />
              <div className={S.nftTitle}>PiNFT Art</div>
            </Link>
          </div>
          <div className={S.mall}>
            <Link to="/dapps/mall">
              <img className={S.mallImg} src={mall_png} />
              <div className={S.mallTitle}>PiChain Mall</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dapps
