// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// Cookie政策
function CookiePolicy() {
  return (
    <>
      <header className={S.header}>
        <h1>Cookie Policy</h1>
      </header>
      <main className={S.main}>
        <div className={S.title}>Cookie Policy</div>
        <div className={S.paragraph}>
          <div className={S.title1}>What are cookies?</div>
          <p> Our website, like many others, uses cookies in order to work properly. </p>
          <p>
            Cookies are small text files that are downloaded onto your device when you access our
            website. They allow us to recognize your device and store some information about your
            preferences or past actions on our website, ultimately allowing us to improve your
            experience. This cookie policy describes the kinds of information that we gather, how we
            use the information, and why we need to store these cookies. We will also explain how
            you can prevent these cookies from being stored; however, this may downgrade or break
            certain elements of the site’s functionality.
          </p>
          <p>
            For more general information on cookies, see this
            <Link to="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article</Link>.
            {/* <a href="https://en.wikipedia.org/wiki/HTTP_cookie">Wikipedia article</a>. */}
          </p>
        </div>
        <div className={S.paragraph}>
          <div className={S.title1}>How we use cookies</div>
          <p>
            We use cookies to understand how users interact with our services and thus how we can
            improve them. Details of this usage are described below. Unfortunately, in most cases
            there are no industry standard options for disabling cookies without completely
            disabling the functionality and features they add to the site. It is recommended that
            you accept our usage of cookies if you are not sure whether you need them or not, in
            case they are necessary for a service that you use.
          </p>
        </div>
        <div className={S.paragraph}>
          <div className={S.title1}>The types of cookies we use</div>
          <p>
            If you create an account at our site, then we will use cookies for the management of the
            sign-up process and general administration. These cookies will usually be deleted when
            you log out; however, in some cases they may remain afterwards to remember your site
            preferences when logged out.
          </p>
          <p>
            We use cookies when you are logged in, so that we can remember this fact. This prevents
            you from having to log in every single time you visit a new page. These cookies are
            typically removed or cleared when you log out to ensure that you can only access
            restricted features and areas when logged in.
          </p>
          <p>
            When you submit data through a form such as a contact page or comment box, cookies may
            be set to remember your user details for future correspondence. In order to provide you
            with a great experience on this site, we provide the functionality to set your
            preferences for how this site runs when you use it.
          </p>
          <p>
            In order to remember your preferences, we need to set cookies so that this information
            can be called whenever you interact with a page that is affected by your preferences.
          </p>
          <p>
            Some of the cookies we use are persistent, which means that they remain stored on your
            device for one year.
          </p>
          <p>
            As we sell services, it is important for us to understand statistics on how many of the
            visitors to our site actually make a purchase, and thus cookies will track this kind of
            data. This is important to you as it means that we can accurately make business
            predictions that allow us to monitor our advertising and product costs to ensure the
            best possible price.
          </p>
          <p>
            The behavioural advertising cookies used by this site are designed to ensure that we
            provide you with the most relevant adverts where possible by anonymously tracking your
            interests and presenting similar things that you may like.
          </p>
          <p>
            In some cases, we may provide you with custom content based on what you tell us about
            yourself, either directly or indirectly if you link a social media account. These types
            of cookies simply allow us to provide you with content that we feel may be of interest
            to you.
          </p>
        </div>
        <div className={S.paragraph}>
          <div className={S.title1}>Use of third-party cookies</div>
          <p>
            In some special cases we also use cookies provided by trusted third parties. The
            following section specifies which third-party cookies you might encounter at this site
            and reasons why we use them.
          </p>
          <p>
            Third-party analytics are used to track and measure usage of this site so that we can
            continue to produce engaging content. These cookies may track things such as how long
            you spend on the site or pages you visit, which helps us to understand how we can
            improve the site for you.
          </p>
          <p>
            From time to time we test new features and make subtle changes to the way the site is
            delivered. While we are still testing new features, these cookies may be used to ensure
            that you receive a consistent experience on our site. That way, we will be able to
            understand which optimizations our users appreciate most.
          </p>
          <p>
            Several partners advertise on our behalf and affiliate-tracking cookies simply allow us
            to see if our customers have come to the site through one of our partner sites. This
            lets us credit them appropriately, and also allows you to enjoy any bonuses they might
            be offering for use of their service.
          </p>
        </div>
        <div className={S.paragraph}>
          <div className={S.title1}>How to disable cookies</div>
          <p>
            A lot of web browsers allow control of cookies through the settings. You can prevent the
            setting of cookies by adjusting the browser settings (see your browser’s Help section
            for the instructions). Find out how to manage cookies on popular browsers:
          </p>
          <ul className={S.ul}>
            <li>
              <Link to="https://support.google.com/accounts/answer/61416">
                <span>Google Chrome</span>
              </Link>
            </li>
            <li>
              <Link to="https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">
                <span>Microsoft Edge</span>
              </Link>
            </li>
            <li>
              <Link to="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
                <span>Mozilla Firefox</span>
              </Link>
            </li>
            <li>
              <Link to="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
                <span>Microsoft Internet Explorer</span>
              </Link>
            </li>
            <li>
              <Link to="https://help.opera.com/en/latest/web-preferences/">
                <span>Opera</span>
              </Link>
            </li>
            <li>
              <Link to="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                <span>Apple Safari</span>
              </Link>
            </li>
          </ul>
          <p>
            Be aware that disabling cookies will affect the functionality of our website. Disabling
            cookies will usually affect the functionality and certain features of sites.
          </p>
        </div>
        <div className={S.paragraph}>
          <div className={S.title1}>More information</div>
          <p>
            We hope this article has clarified things for you. As previously mentioned, it’s best to
            leave cookies enabled just in case they are needed while you use our site. However, if
            you’d still like more information, feel free to contact us.
          </p>
        </div>
      </main>
    </>
  )
}

export default CookiePolicy
