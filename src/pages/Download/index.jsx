// 模組樣式
import S from './style.module.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus, faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
// 鉤子函式
import { Link } from 'react-router-dom'
import { useState } from 'react'
// PNG 圖檔
import download_png from '../../assets/img/download/download.png'
import android_download_png from '../../assets/img/download/android_download.png'
import iOS_download_png from '../../assets/img/download/iOS_download.png'
import apk_download_png from '../../assets/img/download/apk_download.png'
// 首頁
function Download() {
  return (
    <>
      <main className={S.main}>
        <div className={S.container}>
          <img className={S.wallet} src={download_png} />
          <div className={S.description}>
            <h1 className={S.h1}>Download PCM wallet to start earning PCM tokens!</h1>
            <p className={S.p}>
              PCM makes the transition to Web3 seamless for Web2 natives by offering a trustless and
              decentralized experience. Newcomers can easily set up a non-custodial, keyless wallet
              using just their email, streamlining the process and removing the complexities
              typically associated with managing a Web3 wallet.
            </p>
            <div className={S.downloads}>
              <Link to="https://play.google.com/store/apps/details?id=com.pcm.pcmwallet&pcampaignid=web_share" target="blank">
                <img className={S.download} src={android_download_png} />
              </Link>
              <Link to="https://apps.apple.com/us/app/pcm-wallet/id6479004997?platform=iphone" target="blank">
                <img className={S.download} src={iOS_download_png} />
              </Link>
              <Link to="https://apk.pcmwallet.com/PCM_Wallet.apk" target="blank">
                <img className={S.download} src={apk_download_png} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Download
