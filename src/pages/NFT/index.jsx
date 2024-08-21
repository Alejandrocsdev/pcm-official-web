// 模組樣式
import S from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 首頁
function Home() {
  const [zoomPiFind, setZoomPiFind] = useState(false)
  const [zoomPiLand, setZoomPiLand] = useState(false)

  const handleZoomInPiFind = () => {
    setZoomPiFind(true)
  }

  const handleZoomInPiLand = () => {
    setZoomPiLand(true)
  }

  const handleZoomOutPiFind = () => {
    setZoomPiFind(false)
  }

  const handleZoomOutPiLand = () => {
    setZoomPiLand(false)
  }

  return (
    <>
      <main className={S.main}>
        <div className={S.nft}>
          <h1>&laquo; Pi-Find &raquo;</h1>
          <div className={S.container}>
            <div className={S.left}>
              <iframe className={S.piFind} src="https://pinft.art/mainnet/index.html"></iframe>
              <FontAwesomeIcon
                className={S.zoomIn}
                icon={faMagnifyingGlassPlus}
                onClick={handleZoomInPiFind}
              />
            </div>
            <div className={S.right}>
              <h3>
                6280
                <span>copies</span>
              </h3>
              <p>
                The Crossspace is an NFT of the Pi-Find ecological application. Users who own this
                NFT can obtain the DAO organization rights of the Pi Find application, through which
                they can obtain PCM token rewards.
              </p>
            </div>
          </div>
        </div>

        <div className={S.line}></div>

        <div className={S.nft}>
          <h1>&laquo; Pi-Land &raquo;</h1>
          <div className={S.container}>
            <div className={S.left}>
              <iframe
                className={S.piFind}
                src="https://pinft.art/static/mainnet/Piland.html"
              ></iframe>
              <FontAwesomeIcon
                className={S.zoomIn}
                icon={faMagnifyingGlassPlus}
                onClick={handleZoomInPiLand}
              />
            </div>
            <div className={S.right}>
              <h3>
                314
                <span>copies</span>
              </h3>
              <p>
                The Crossspace is an NFT of the Pi-Find ecological application. Users who own this
                NFT can obtain the DAO organization rights of the Pi Find application, through which
                they can obtain PCM token rewards.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className={`${S.zoomBg} ${zoomPiFind ? S.show : ''}`}>
        <iframe className={S.zoom} src="https://pinft.art/mainnet/index.html"></iframe>
        <FontAwesomeIcon
          className={S.zoomOut}
          icon={faMagnifyingGlassMinus}
          onClick={handleZoomOutPiFind}
        />
      </div>
      <div className={`${S.zoomBg} ${zoomPiLand ? S.show : ''}`}>
        <iframe className={S.zoom} src="https://pinft.art/static/mainnet/Piland.html"></iframe>
        <FontAwesomeIcon
          className={S.zoomOut}
          icon={faMagnifyingGlassMinus}
          onClick={handleZoomOutPiLand}
        />
      </div>
    </>
  )
}

export default Home
