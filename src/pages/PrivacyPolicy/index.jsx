// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'

// 隱私政策
function PrivacyPolicy() {
  return (
    <>
      <header className={S.header}>
        <h1>Privacy Policy</h1>
      </header>
      <main className={S.main}>
        <h1>PCM Wallet Privacy Policy</h1>
        <p>
          <span>
            Thank you for choosing PCM Wallet as your digital asset management tool. We take the
            protection of your privacy very seriously in how we collect and use your personal
            information. The PCM Wallet Privacy Policy details how we collect, use, share, and store
            the personal information of our users. Please read the following important information
            carefully before using PCM Wallet to understand our privacy protection measures. If you
            do not agree with any part of this privacy policy or our terms of use, please refrain
            from using any services.
          </span>
        </p>
        <h2>I. Information Collection</h2>
        <p>
          <span className={S.h3}>1.1 Registration Information:</span> When you use PCM Wallet, we
          may collect account information such as your email address and phone number to complete
          the registration and login process. We pledge that the personal information collected will
          only be used to provide and improve PCM Wallet-related services and comply with applicable
          laws and regulations.
        </p>
        <ol>
          <li>
            <span>
              Identity information, such as your name, surname, username, or similar identifiers,
              title, date of birth, and gender;
            </span>
          </li>
          <li>
            <span>
              Contact information, such as your postal address, email address, or telephone number;
            </span>
          </li>
          <li>
            <span>
              Profile information, such as your username, interests, preferences, feedback, and
              survey responses;
            </span>
          </li>
          <li>
            <span>
              Feedback and communication, such as the information you provide in survey responses
              when participating in market research activities, reporting service issues, receiving
              customer support, or otherwise communicating with us;
            </span>
          </li>
          <li>
            <span>
              Transaction information, such as details about purchases you make through the services
              and billing details;
            </span>
          </li>
          <li>
            <span>
              Usage information, such as details on how you use the services and interact with us;
            </span>
          </li>
          <li>
            <span>
              Technical information, such as your Ethereum wallet address, application programming
              interface (API) keys, and network information about transactions.
            </span>
          </li>
        </ol>
        <p>
          <span className={S.h3}>1.2 Automatic collection of Usage information:</span> We may
          automatically record certain information about how you use our website (we refer to this
          information as "Log Data"). Log Data may include the user's Internet Protocol (IP)
          address, device and browser type, operating system, the pages or features of our website
          that the user browses and the time spent on those pages or features, the frequency with
          which the user uses the website, search terms, the links on our website that the user
          clicks or uses, and other statistical data. We use this information to manage the services
          and analyze (and may engage third parties to analyze) this information to improve and
          enhance the services by extending their features and functionality and customizing them
          according to users' needs and preferences.
        </p>
        <p>
          <span className={S.h3}>1.3 Digital Asset Information:</span> PCM Wallet is a non-custodial
          wallet platform, and we do not collect or store your private key information. Your digital
          assets are stored locally and only you have access and control.
        </p>
        <p>
          <span className={S.h3}>1.4 PCM Token Transaction Information:</span> When you execute PCM
          token payments or other transactions, the system will record relevant information for
          payment, accounting, and asset storage. PCM Wallet will provide you with services such as
          registration, login, asset storage, and payment based on the personal information you
          provide. At the same time, we may use your personal information for market research and
          data analysis to improve the functions and services of PCM Wallet.
        </p>
        <h2>II. Web3 Functionality and Decentralization</h2>
        <p>
          <span className={S.h3}>2.1</span> The PCM Wallet offers trustless and decentralized
          security, giving users a safer way to handle their digital assets.
        </p>
        <p>
          <span className={S.h3}>2.2</span> With PCM tokens, users can make purchases and payments
          in the PCM ecosystem. Additionally, users can contribute to the platform's development and
          be rewarded with PCM tokens.
        </p>
        <p>
          <span className={S.h3}>2.3</span> The PCM Wallet is a non-custodial platform that lets you
          set up a Web3 account with your email, allowing you to have complete ownership and control
          over your digital assets.
        </p>
        <h2>III. Payment System</h2>
        <p>
          <span>
            The PCM Wallet payment system supports PCM token and other mainstream currency payments.
            PCM tokens will be stored in your PCM wallet and can be used for payments, accounting,
            and asset storage in modules of the PiChain Global Ecosystem, such as the PiChain Mall
            and PiNFT ART transactions.
          </span>
        </p>
        <h2>IV. Ecosystem Compatibility</h2>
        <p>
          <span>
            PCM Wallet is compatible with all ecosystems Dapps under PiChain Global, including
            PiChain Mall and the PiNFT ART platform. When you use PCM Wallet for cross-platform
            transactions, we only share the necessary information to complete the transaction
            purpose. We allow third-party Dapps to access PCM Wallet, providing users with more
            digital asset management and usage options. When using third-party Dapps, please review
            their privacy policies, as PiChain Global is not responsible for the privacy protection
            of third-party Dapps.
          </span>
        </p>
        <h2>V. Sharing Personal Information</h2>
        <p>
          <span>
            We will not share your personal information with other organizations without your
            explicit consent, except as otherwise stated in this privacy policy. We may disclose
            personal information to third parties in the following cases:
          </span>
        </p>
        <ol>
          <li>
            <span>
              Subsidiaries. We may disclose your personal information to our subsidiaries and
              affiliated companies (i.e., companies related to us through common ownership or
              control) for the purposes stated in this privacy policy.
            </span>
          </li>
          <li>
            <span>
              Business Transfers. When we engage in business transactions or negotiations for
              business transactions, we may share personal information involving the sale or
              transfer of all or part of our business or assets. These transactions may include any
              mergers, financings, acquisitions, or bankruptcy transactions or proceedings.
            </span>
          </li>
          <li>
            <span>
              Compliance with Law and Law Enforcement; Protection and Safety. We may share personal
              information for legal, protection, and safety purposes.
            </span>
          </li>
        </ol>
        <ul>
          <li>
            <span>
              We may share information to comply with the law, including KYC and AML requirements.
            </span>
          </li>
          <li>
            <span>
              We may share information in response to lawful requests and legal processes.
            </span>
          </li>
          <li>
            <span>
              We may share information to protect the rights and property of the company, our
              agents, customers, and others. This includes enforcing our agreements, policies, and
              terms of use.
            </span>
          </li>
          <li>
            <span>
              We may share information in emergency situations. This includes protecting the safety
              of our employees and agents, our customers, professional advisors and service
              providers.
            </span>
          </li>
        </ul>
        <ol>
          <li>
            <span>
              We may share information with those who need it to work for us. These recipients may
              include third-party companies and individuals who manage and provide services on our
              behalf (such as billing and credit card payment processing, customer support, hosting,
              email delivery, and database management services), as well as lawyers, bankers,
              auditors, and insurers.
            </span>
          </li>
          <li>
            <span>
              You may permit us to share your personal information with other companies or entities
              of your choosing. These uses will be subject to the receiving entity or entities'
              privacy policies.
            </span>
          </li>
        </ol>
        <h2>VI. Privacy and Security</h2>
        <p>
          <span className={S.h3}>6.1</span> PCM respects user privacy and will not collect, use, or
          share user personal information without authorization; for detailed information, please
          refer to PCM's privacy policy. PCM Wallet will take feasible technical and administrative
          measures to protect the security of your personal information. We strictly limit the range
          of personnel who have access to your personal information and establish security measures
          to prevent the leakage, damage, tampering, etc., of your personal information.
        </p>
        <p>
          <span className={S.h3}>6.2</span> PCM protects your personal information and digital
          assets with advanced encryption technology and security measures.
        </p>
        <p>
          <span className={S.h3}>6.3</span> To provide you with better personalized services and
          experience, PCM Wallet may use cookie technology to collect your browser information but
          will not store your personal identity information. We will never ask you to share your
          private key or wallet password; please do not trust anyone or any website that asks you to
          enter your private key or wallet key. You can choose whether to accept cookies or prohibit
          the use of cookies through your browser settings, depending on your situation. We may use
          cookies, local storage, or similar technologies to analyze trends, manage the website,
          track user activity on the site, and gather demographic information about our entire user
          base. Users can control the use of cookies and local storage at the individual browser
          level.
        </p>
        <p>
          <span className={S.h3}>6.4</span> PCM Wallet commits not to share your personal
          information with third parties unless we have your explicit consent or are required by law
          or regulations. In cases involving partners and providers, we will also sign contracts
          with them stipulating that they must comply with PCM Wallet's privacy policy and related
          agreements.
        </p>
        <h2>VII. Policy Modifications</h2>
        <p>
          <span>
            PCM may change this privacy policy at any time. Users should regularly check our latest
            privacy policy for the most current information on our privacy agreement. If PCM makes
            any changes, we will note the content and date of the update. In any case, if you
            continue to use the website or services after posting any revised privacy policy, it
            means that you accept the terms of the modified privacy policy. PCM Wallet reserves the
            right to modify the privacy policy in a timely manner. If you have questions or
            objections to the modified privacy policy, please stop using PCM Wallet services
            immediately.
          </span>
        </p>
        <h2>VIII. Applicable Law</h2>
        <p>
          <span className={S.h3}>8.1</span> PCM Wallet will fulfill its information protection
          obligations according to the laws of Hong Kong but cannot guarantee information leakage or
          damage due to force majeure. When using PCM Wallet services, please use and protect
          personal information reasonably.
        </p>
        <p>
          <span className={S.h3}>8.2</span> If there are legal provisions that contradict this
          agreement, the legal provisions shall prevail.
        </p>
        <p>
          <span>
            Thank you for choosing PCM Wallet! Please read and understand the above agreement
            content carefully. PCM Wallet solemnly pledges to protect your personal information and
            privacy rights to the fullest extent. If you have any questions or comments about the
            privacy policy, or if you need more content related to personal information protection,
            please contact our customer service team.
          </span>
        </p>
        <p>
          <div className={S.team}>PCM Team</div>
        </p>
        <p>
          <div className={S.date}>March 2024</div>
        </p>
      </main>
    </>
  )
}

export default PrivacyPolicy
