// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { useState } from 'react'
// PNG 圖檔
import figure1_png from '../../assets/img/whitepaper/figure1.png'
import figure2_png from '../../assets/img/whitepaper/figure2.png'
import figure3_png from '../../assets/img/whitepaper/figure3.png'
import figure4_png from '../../assets/img/whitepaper/figure4.png'
import figure5_png from '../../assets/img/whitepaper/figure5.png'
import figure6_png from '../../assets/img/whitepaper/figure6.png'
import figure7_png from '../../assets/img/whitepaper/figure7.png'
import figure8_png from '../../assets/img/whitepaper/figure8.png'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// 首頁
function Whitepaper() {
  const [activeItem, setActiveItem] = useState('#pichain-global-ecosystem')

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <main className={S.main}>
        <div className={S.left}>
          <div className={S.leftWidth}>
            <div className={S.title}>PCM Whitepaper</div>
            <div className={S.paragraph}>
              <div className={S.title1} id="pichain-global-ecosystem">
                PiChain Global Ecosystem
              </div>
              <p>
                PiChain Mall is thrilled to announce the next step in our journey: the PiChain
                Global Ecosystem.
              </p>
              <p>
                Our vision goes far beyond traditional paradigms. We aspire to create the next
                generation of Web3 applications with an ambitious goal: to engage billions of users.
                Our goal is to shape the future of Web3 ecosystems: creating a digital landscape
                that empowers users, fosters innovation, and redefines how peer-to-peer transactions
                are conducted around the world.
              </p>
              <p>
                The philosophy of PiChain Mall is rooted in the belief that real change and mass
                adoption become a reality when the community comes together to pursue a common goal.
                PiChain Global will expand the existing community and leverage blockchain technology
                to create a Global Platform with a simple, intuitive Web2-like access point that
                opens the full potential of Web3. From ecommerce of real-world goods to the exchange
                of digital assets, users will enjoy a friction-free marketplace.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-promise-of-cryptocurrency">
                The promise of cryptocurrency
              </div>
              <p>
                Peer-to-peer transactions offer to revolutionize global financial interactions. This
                visionary model enables customers and sellers, from individual sellers to
                businesses, to directly exchange an asset in return for goods or services. This
                model is far superior to the existing standard in which the seller must both trust a
                third party to pass payment to their accounts and pay a significant fee for that
                service.
              </p>
              <p>
                The current trusted third-party mechanism introduces risk for all parties: the
                seller must accept the risk that payment will not arrive or may be reverted, and is
                forced to build that cost and the cost of the transaction into their pricing.
                Additional costs are added if the transaction is cross-border: adding exchange rate
                conversion and international remittance fees to seller prices.
              </p>
              <p>
                The customer is forced to absorb these additional costs and faces the risk of
                fraudulent use of their card details by malicious agents or insecure practices on
                the seller's side. Furthermore, many banking services accept some of the risks
                associated with such fraud and build that back into their fees.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-challenges-facing-web3-ecommerce">
                The challenges facing Web3 ecommerce
              </div>
              <p>
                Despite the clear advantages of direct peer-to-peer transactions, adoption of Web3
                applications is still low, with a global participation rate of 2.5%. We have not yet
                created an "iPhone moment" or "killer app" to attract and retain the first billion
                users.
              </p>
              <p>
                There are several explanations for this sluggish uptake, and the PiChain Global
                Ecosystem offers a meaningful solution to all these barriers to entry. First, we
                will present these challenges, and next, we will consider how our solution overcomes
                such obstacles.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="barriers-to-entry">
                Barriers to entry
              </div>
              <div className={S.title3}>Loss of the private key</div>
              <p>
                Crypto novices are used to trusting a centralized financial agency with access to
                their funds. Lose a bank card, and you can ask your bank to issue a new card. Lose
                your private key, and you have lost recovery access to your crypto wallet.
              </p>
              <div className={S.title3}>Novice userbase</div>
              <p>
                Beyond the tiny percentage of existing crypto adopters lies the rest of the world —
                users who do not have the know-how to purchase crypto nor have any confidence to
                safely undertake a token swap.
              </p>
              <div className={S.title3}>The “empty tank” issue</div>
              <p>
                Until such time as Ethereum's ERC-4337 account abstraction is deployed, most crypto
                wallets require that the user have the native token to be able to pay gas fees. This
                creates an “empty tank” conundrum, whereby the wallet holder may own assets in a
                token they wish to trade, but be unable to transfer these until that wallet is
                topped up with the native token to cover the transaction fees.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="marketplace-barriers">
                Marketplace barriers
              </div>
              <div className={S.title3}>Trust is required</div>
              <p>
                The purest form of crypto exchange is the atomic swap. That is, an exchange of one
                asset for another, whereby there is no gap between delivery and payment. Ecommerce,
                however, is an asynchronous arrangement. If a customer pays for an item or service
                on an ecommerce marketplace, delivery is not successful until such time as the
                correct goods are shipped to their hands or the service rendered.
              </p>
              <p>
                The typical delivery versus payment flow is that the customer passes payment via
                their bank, and the seller initiates shipping. In most instances, the seller will
                receive the funds in their account before the customer receives their goods, and in
                most cases, those funds will not be retracted by a bank on the basis of card fraud.
                A crypto-native ecommerce model does not protect the customer per se. An atomic swap
                removes the risk to the seller of a transaction being reverted by the bank; however,
                the customer must still trust that the goods will arrive, or that the service will
                be rendered.
              </p>
              <p>
                Even traditional Web2 ecommerce platforms often have difficulty maintaining this
                trust. Shopping scams on Facebook and Instagram are expected to cost UK consumers
                more than £27m this year alone, according to the Lloyds Banking Group.
              </p>
              <div className={S.title3}>Network effect</div>
              <p>
                Not only do ecosystem players potentially suffer all these challenges, but they also
                face additional barriers, especially when attempting to launch new ecosystems. Web2
                solutions such as Amazon have successfully leveraged the network effect to collate a
                large consumer base into one ecommerce solution that attracts sellers and customers.
                As yet, no Web3 solution has succeeded in creating a marketplace at this scale to
                allow sellers to invest with confidence that they can leverage a sufficient market
                share.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="archaic-web2-standards">
                Archaic Web2 standards
              </div>
              <p>
                While we acknowledge these barriers to entry and marketplace challenges, we believe
                these are all solvable. Furthermore, we assert that our vision of a Web3 ecommerce
                ecosystem overcomes the following Web2-native issues that live in the existing
                marketplace paradigm:
              </p>
              <div className={S.title3}>Data security</div>
              <p>
                Web2 cross-border ecommerce platforms are usually centralized, meaning that users'
                funds and information are operated and controlled by centralized entities (such as
                companies). These entities are responsible for processing transactions, and managing
                user data and funds. Such data platforms provide a large attack surface that is both
                vulnerable and profitable to professional hackers.
              </p>
              <div className={S.title3}>Privacy control challenges</div>
              <p>
                Centralized platforms often leverage their users’ personal information to perform
                data analysis and ad targeting. Users have little to no say about how their data is
                used.
              </p>
              <div className={S.title3}>"Trusted third-party" payment methods</div>
              <p>
                Traditional Web2 cross-border ecommerce usually relies on traditional payment
                methods, such as credit cards, bank transfers, etc., exposing the seller and user to
                the issues discussed in The promise of cryptocurrency. The fees charged by such
                third parties are significant, often 3% of the total transaction. Similarly, the
                seller often pays much higher bank charges than a retail client, simply to hold a
                bank account to receive and make payments.
              </p>
              <p>
                According to data from the World Bank, in 2023, there are an estimated 1.4 billion
                unbanked people worldwide; that is, they do not even have access to a trusted
                third-party fiat payment system and are, therefore, excluded from ecommerce
                marketplaces.
              </p>
              <div className={S.title3}>Lack of supply chain transparency</div>
              <p>
                Web2 ecommerce has failed to control the spawning counterfeit ecosystem. Brand goods
                are copied and sold as genuine across global marketplaces. Similarly, even though
                the consumer base is becoming more sophisticated and selective in their demands, for
                example, for environmentally-friendly goods and ethically sourced products, the Web2
                paradigm has failed to provide the transparency required for consumers to shop
                selectively.
              </p>
              <div className={S.title3}>Transaction inefficiencies</div>
              <p>
                Web2 cross-border ecommerce usually requires intermediaries (such as banks,
                logistics companies, etc.) to handle transactions and logistics. Each intermediary
                adds complexity and cost, a cost the consumer is forced to absorb.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-pichain-global-ecosystem-vision">
                The PiChain Global Ecosystem vision
              </div>
              <p>
                PiChain Global offers a comprehensive solution to these challenges thanks to our
                visionary Web3 ecosystem. PiChain Global adopts the latest blockchain technology to
                lower the entry threshold for novice Web3 users and offers the advantages and
                characteristics of decentralization.
              </p>
              <p>
                Our solution addresses those issues that arise from existing, archaic Web2 standards
                and traditional marketplace challenges, and overcomes those barriers to entry that
                have stood in the way of mass adoption of cryptocurrencies as a mechanism of trade.
                The PiChain Global Ecosystem offers the following benefits.
              </p>
              <div className={S.title3}>Disintermediation of transactions</div>
              <p>
                Web3 cross-border ecommerce uses smart contracts and decentralized technology to
                conduct transactions directly between customers and sellers, without the involvement
                of third-party intermediaries. This addresses transaction inefficiency and reduces
                transaction costs.
              </p>
              <div className={S.title3}>Supply chain transparency</div>
              <p>
                The PiChain Mall solution facilitates the traceability of traded goods. Consumers
                can verify the authenticity and quality of a product thanks to its associated,
                verifiable, metadata on the blockchain. This mechanism can prevent the circulation
                of counterfeit and shoddy goods and empower the consumer to access goods that fit
                with their own ethics, whether that be a need for certification for Kosha, Halal,
                BRCGS (British Retail Consortium Global Standards) for ethical trading and
                responsible sourcing, etc.
              </p>
              <div className={S.title3}>Peer-to-peer transactions</div>
              <p>
                Web3 cross-border ecommerce leverages cryptocurrency as a payment method and uses
                blockchain technology to achieve safe, fast, and intermediary-free cross-border
                payments.
              </p>
              <div className={S.title3}>Privacy</div>
              <p>
                Web3 cross-border e-commerce uses decentralized authentication and data storage
                solutions to give users better control over their data and privacy. Users can choose
                to interact directly with other users without passing data to a centralized
                platform.
              </p>
              <div className={S.title3}>Decentralization</div>
              <p>
                The PiChain blockchain uses decentralized technology to establish its ecommerce
                platform, removing the need for a centralized entity to control and manage
                transactions. This makes transactions more transparent, trustless, and
                disintermediated. It also makes user funds safer and ensures that users may trade in
                assets over which they retain self-custody.
              </p>
              <div className={S.title3}>The power of community</div>
              <p>
                Furthermore, our existing 3 million-strong community has already proven itself
                capable of overcoming one of the biggest obstacles raised in the challenges above:
                that of achieving the network effect. PiChain Global Ecosystem is uniquely
                positioned to ensure successful network growth, as demonstrated by our early
                successes that have been achieved thanks to harnessing the power of community.
              </p>
              <p>
                Many projects that rely on significant uptake to achieve success, fail despite
                expending significant resources to drive development and marketing. The reason for
                failure is often based on the weak impact of extrinsic incentives. Community-driven
                growth facilitates long-term growth and prosperity thanks to the commitment of its
                intrinsically-motivated participants.
              </p>
              <p>
                Our vibrant community, with a shared vision at its core, demonstrates the power of
                intrinsic motivation. It is our thesis that mass adoption of dApps will be driven by
                such communities.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="a-new-model-for-trust">
                A new model for trust
              </div>
              <p>
                Trust and reputation are crucial for sellers to succeed in ecommerce. As discussed,
                the challenge is that ecommerce is an asynchronous arrangement. Therefore, while the
                seller and customer both benefit from the efficiencies of trading in a self-custody
                asset, it is still vital to build a trading mechanism that ensures the customer gets
                value for money for the price they pay when purchasing a product or service.
              </p>
              <p>
                The PiChain Global solution both reduces the need for trust and nurtures trust
                through our innovative reputation system.
              </p>
              <div className={S.title3}>Reducing the need for trust</div>
              <p>
                The problematic issue of delivery versus payment is solved thanks to the use of the
                smart contract. The customer’s payment is transferred to the smart contract itself,
                i.e. it is held in escrow. Traditionally, holding funds in escrow requires a trusted
                third party; in our solution, it is the smart contract itself that holds the funds.
                No trusted agency is required, just trusted code.
              </p>
              <p>
                This payment is released on delivery of the goods or services. Should the customer
                not receive the goods or services as promised, the contract automates the immediate
                outcomes, reducing the complexity often inherent in conflict resolution.
              </p>
              <div className={S.title3}>Building reputation</div>
              <p>
                Furthermore, PiChain Global Ecosystem's tokenomics is about to change the rules of
                the game and redefine how we operate online businesses.
              </p>
              <p>
                The tokenomics-driven reputation system is designed to build an online marketplace
                of mutual trust and reciprocity. The system provides a fair and transparent
                environment for sellers and customers so that they can conduct safe, high-quality
                transactions. This will expedite resolving those Web2-native ecommerce issues and
                provide a better experience for users of the PiChain Mall platform, laying a solid
                foundation for sustainable growth.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="breaking-barriers-by-design">
                Breaking barriers by design
              </div>
              <p>
                In the challenges section, we considered three major barriers to entry to the Web3
                ecosystem for novice users; these included: the risk to fund recovery due to the
                loss of the private key, the overall complexity of conducting commerce in
                cryptocurrency from a novice perspective, and the "empty tank" issue that can arise
                when gas fees must be paid in the native token.
              </p>
              <p>
                The <b>PCM Wallet</b> overcomes all these issues: it is designed for the
                <b>
                  comfort of a Web2 native while providing the trustless, decentralized assurances
                  of Web3.
                </b>
                New users register and log in via the familiar Web2 flow using email, social, or a
                mobile number — abstracting away the complexity and responsibility of owning and
                managing a Web3 wallet.
              </p>
              <p>
                This improved UX (user experience) is possible thanks to Ethereum’s new account
                abstraction standard. For the first time, wallets such as the PCM Wallet can
                leverage smart contracts to control the wallet layer. This allows wallet recovery to
                be achieved through the familiar Web2 methods such as social recovery, and supports
                novel methods to enable user access to accounts through trusted social contacts or
                guardians — enhancing user convenience and security.
              </p>
              <p>
                Beyond this essential service of wallet recovery, account abstraction also enables
                the PCM wallet to solve the “empty tank” issue. dApps will be able to provide a
                functional layer to enable customers to pay the gas fees in the token of their
                choice, removing the need to pay gas fees in the native token. Similarly, dApps will
                be empowered to waive the gas fee from the user perspective and absorb that cost, or
                a portion of that cost, themselves so as to be able to offer competitive market
                expansion initiatives
              </p>
              <p>
                Furthermore, the PCM crypto-wallet supports fiat on- and off-ramps, easing entry for
                crypto novices. Even unbanked users will be supported to access the system thanks to
                support from on & off ramp partners, which already supports gateway payment for
                transacting between fiat and cryptocurrency.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="introduction">
                Introduction
              </div>
              <p>
                Blockchain technology and digital currency payments are, inarguably, potential game
                changers. However, until now, the UX (user experience) has been below the needs of
                the typical end consumer. In order to meet the payment needs of consumer-level
                applications, we have developed an <b>intuitive Web2 entry point</b> to encourage
                mass adoption of a crypto wallet transaction system. The PiChain Global Ecosystem is
                made up of the following core elements:
              </p>
              <ul className={S.ul}>
                <li>PCM Wallet </li>
                <li>PCM token (PCM)</li>
                <li>PiChain Mall reputation system</li>
                <li>PiChain Global community</li>
                <li>PiChain Global platform</li>
              </ul>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-pcm-Wallet">
                The PCM Wallet
              </div>
              <p>
                The PCM Wallet is a secure digital wallet that acts as the entry point to the
                PiChain Global ecosystem, which will provide access to an ever-expanding range of
                products and services. The PCM Wallet is designed to provide a safe and fast payment
                method while ensuring users’ financial security and privacy protection during
                transactions. We believe that this innovative PCM wallet payment transaction system
                will bring much-needed convenience to blockchain token payments.
              </p>
              <p>
                The PCM wallet leverages a non-custodial wallet platform that enables users to
                create Web3 accounts using Web2 entry points such as email, mobile phone numbers, or
                social accounts. The wallet will store cryptocurrency, such as the native PCM
                tokens.
              </p>
              <p>
                In addition to the intuitive UX, the payment platform that underpins the PCM Wallet
                provides both security and efficiency to the users:
              </p>
              <ul className={S.ul}>
                <li>
                  Security: The payment system ensures that every transaction is traceable by
                  calling the blockchain payment system interface; the PCM token payment system uses
                  advanced cryptography technology to ensure transaction security and tamper
                  resistance.
                </li>
                <li>
                  Efficiency: By leveraging a robustly distributed blockchain technology, on-chain
                  transactions are executed quickly, and payment confirmation time is short,
                  allowing the user's transaction experience to be in line with current Web2
                  expectations.
                </li>
              </ul>
              <p>
                Therefore, while the signup and login experience will be familiar to Web2 natives,
                the features offered by the wallet secured by a private key offer those Web3-native
                advantages. Furthermore, users can store their coins in the PCM wallet, or initiate
                a withdrawal to their existing Pi Wallet.
              </p>
              <div className={S.title3}>Fiat access point</div>
              <p>
                The PCM Wallet will integrate with third party gateway payment providers to simplify
                bringing fiat into the ecosystem. These flexible payment solution provide users with
                more choices. By integrating with solutions that bridge the gap between
                cryptocurrencies and Web3 services, we can enable mainstream Web2 audiences to use
                fiat payments while enjoying the new experience provided by Web3 shopping.
              </p>
              <p>
                The platform, through its third party gateway payment providers, will provide fiat
                on- and off-ramps, ensuring customers can access a legal currency payment platform.
                This partnership also enables users to directly access various payment channels to
                exchange cryptocurrencies without going through OTC/exchanges, greatly reducing the
                cost of deposits and withdrawals.
              </p>
              <div className={S.title3}>An ecosystem entry point</div>
              <p>At launch, the wallet will be compatible with, and provide access to, the:</p>
              <ul className={S.ul}>
                <li>Successful and established ecommerce system, PiChain Mall</li>
                <li>
                  Digital assets exchange, PiNFT ART: allowing users to complete order placement,
                  payment, refund, asset storage, and copyright fee payment for NFTs
                </li>
                <li>Store data management system, PiFind</li>
                <li>Gaming apps such as PiSnake </li>
              </ul>
              <p>
                It will do so by supporting payment in PCM tokens and other cryptocurrencies.
                Support for further stable coins will be introduced in the future. As the ecosystem
                grows, third-party dApps will onboard into PiChain Global to integrate with the PCM
                wallet.
              </p>
              <p>
                In addition to supporting dApp payment transaction modules and asset storage, the
                wallet system can be called in dApps to support accounting operations.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-ecosystem-token-pcm">
                The ecosystem token: PCM
              </div>
              <p>
                A key component to the evolution of PiChain Mall into a full-blown ecosystem is the
                PCM token. PCM is an ERC-20 token that is native to the Optimism blockchain.
              </p>
              <p>
                The PCM token is issued by PiChain Global and is both the currency of the PCM
                payment system and a utility token. Users can obtain PCM tokens by participating in
                ecosystem construction, trading it with third-party vendors, or by interacting with
                the ecosystem dApps. Within the ecosystem, users can spend PCM to purchase goods and
                services and to pay gas fees.
              </p>
              <p>
                Let’s examine the user flow that supports users to pay for goods and services in the
                PiChain Global Ecosystem, as per Figure 1.
              </p>
              <figure className={S.figure}>
                <p>The storage and payment process of PCM tokens</p>
                <img src={figure1_png} />
                <figcaption>Figure 1: PCM storage and usage</figcaption>
              </figure>
              <p>The storage and payment process of PCM tokens is as follows:</p>
              <ol className={S.ol}>
                <li>
                  Registered user logs in to the PiChain platform, to gain access to their PCM
                  wallet.
                </li>
                <li>
                  Once the user selects goods or services, the payment system verifies the payment
                  information and performs the payment operation, deducting the corresponding amount
                  from the user's PCM wallet. for example to:
                </li>
                <ul className={S.ul}>
                  <li>Purchase goods and services.</li>
                  <li>Pay transaction fees.</li>
                  <li>Use PCM tokens to pay order discounts.</li>
                  <li>Use PCM tokens to obtain merchant certification.</li>
                </ul>
                <li>
                  The payment system returns the payment results to the caller and records the
                  transaction details for accounting and inquiry.
                </li>
              </ol>
              <p>
                The current major income generation stream of the PiChain Mall is ad revenue: a Web2
                model. Whereas, leveraging a cryptocurrency token within the PiChain ecosystem
                elevates the existing PiChain payment mechanism to enable it to be a source of
                income generation.
              </p>
              <p>
                PCM token enables PiChain Global to embrace a Web3 philosophy and income model. The
                seller will pay a small fee for each successful transaction with customers in the
                PiChain ecosystem.
              </p>
              <p>
                For a deeper examination of the distribution schedule of the PCM token, see the
                Tokenomics. But first, let’s understand the role of the PCM in motivating ecosystem
                players to build their reputation.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-pichain-global-reputation-system">
                The PiChain Global reputation system
              </div>
              <p>
                As discussed above, while the Web3 ecommerce transaction has the characteristics of
                an atomic swap, it is vital to ensure that the customer receives the product or
                service that they paid for and in the condition/at the service level described.
              </p>
              <p>
                While the smart contract includes a trustless escrow system to enforce delivery and
                payment, all users of the platform are further motivated to transact honestly by our
                innovative incentive scheme.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="reputational-incentives">
                Reputational incentives
              </div>
              <div className={S.title3}>Honesty by design</div>
              <p>
                Before examining how the seller and customer are incentivized to develop their own
                reputations, let’s examine the game theory behind building reputations in an
                ecommerce marketplace.
              </p>
              <p>
                Large ecommerce marketplaces have failed to address two major factors that reduce
                the quality of reviewing mechanisms. Firstly, customer reviews tend to have a
                negative skew. That is, without an incentive to provide feedback, reviewers tend to
                be biased toward the negative end of the spectrum. Secondly, in most reviewing
                systems, merchants are motivated to purchase fake reviews.
              </p>
              <p>
                However, within an immutable, blockchain-dependent system, it is possible to ensure
                that only customers who have received goods or services may be eligible to leave
                reviews –- making creating fake reviews prohibitively expensive. Furthermore, by
                incentivizing buyers to leave reviews with PCM rewards, customer feedback will
                regress toward the average experience.
              </p>
              <div className={S.title3}>The seller</div>
              <p>
                To register as a merchant on PiChain Mall, sellers must pass a KYT (Know Your
                Trader) assessment. This enables the PiChain Global Ecosystem to retain real-world
                data on the sellers. Furthermore, sellers’ credibility is increased as they work to
                improve their PiChain Global Ecosystem reputation.
              </p>
              <div className={S.title3}>Seller reputation</div>
              <p>
                A seller's reputation is calculated based on several factors, including but not
                limited to the following:
              </p>
              <ul className={S.ul}>
                <li>
                  Sales: Sales are an essential factor that shows how active and successful the
                  seller is on the platform. Returns count against the seller.
                </li>
                <li>
                  Customer Satisfaction: The quality of the seller’s goods and services will be
                  measured by customer reviews and feedback. High satisfaction helps to improve
                  credibility.
                </li>
                <li>
                  Staking PCM: Sellers can choose to stake a certain amount of PCM tokens on the
                  platform, which will show their commitment to ongoing participation.
                </li>
                <li>
                  Marketing: Sellers can choose to market on the platform, which will also impact
                  their credibility rating.
                </li>
              </ul>
              <div className={S.title3}>Seller incentives</div>
              <p>
                Highly reputable sellers will receive a series of incentives to encourage them to
                provide high-quality products and services on the platform:
              </p>
              <ul className={S.ul}>
                <li>
                  Low transaction fees: Highly reputable sellers will enjoy lower transaction fees,
                  which will reduce their operating costs.
                </li>
                <li>
                  Higher PCM staking rewards: Sellers will receive PCM staking rewards based on
                  their reputation score, which is a reward for their participation in the health of
                  the platform.
                </li>
                <li>
                  Lower promotion fees: Highly reputable sellers can enjoy lower promotion fees to
                  better market their products.
                </li>
                <li>
                  Higher Liquidity Provider (LP) rewards: Sellers will receive higher rewards if
                  they provide liquidity to support LP pairs, which encourages them to participate
                  in other aspects of network health.
                </li>
                <li>
                  Voting Rights: If the ecosystem chooses to build a DAO (Decentralized Autonomous
                  Organization), staked tokens can give sellers voting rights, allowing them to
                  participate in governance decisions.
                </li>
              </ul>
              <div className={S.title3}>The customer</div>
              <p>
                As customers do not have to undergo KYC (Know Your Customer) screening, it is
                important that individuals are incentivized to act in good faith. To this end, the
                customer may build credibility via the customer reputation system.
              </p>
              <div className={S.title3}>Customer reputation</div>
              <p>A customer's credibility is calculated based on several factors, including:</p>
              <ul className={S.ul}>
                <li>
                  Purchase frequency: A customer’s purchase frequency shows how active they are on
                  the platform, and activity is rewarded.
                </li>
                <li>
                  Purchase value: A customer’s purchase value shows their contribution to the
                  platform, and higher value spends are rewarded.
                </li>
                <li>
                  Diversity: Buying items from different sellers, i.e. diversifying their buying
                  behavior, helps improve a customer's credibility.
                </li>
              </ul>
              <div className={S.title3}>Customer incentives</div>
              <p>
                High-reputation customers will also receive a range of incentives to reward their
                loyalty and engagement:
              </p>
              <ul className={S.ul}>
                <li>
                  Discounts and Offers: Customers with high credibility will receive different
                  levels of discounts and offers, which enable them to purchase products at lower
                  prices.
                </li>
                <li>
                  Higher Liquidity Provider Rewards: Like sellers, customers who provide liquidity
                  will also receive higher rewards.
                </li>
                <li>
                  Voting Rights: If the ecosystem chooses to operate a DAO, customers can also
                  receive governance voting rights based on their staked tokens to participate in
                  platform governance decisions.
                </li>
              </ul>
              <p>
                In those instances where reputational consequences fail to provide the level of
                service or quality of product the customer anticipated, there are two dispute
                resolution mechanisms available: automated dispute and third-party resolution.
                Furthermore, PiChain Mall provides a decentralized evaluation and comment system to
                assist with dispute resolution and transparency over communications.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-pichain-global-community">
                The PiChain Global community
              </div>
              <p>
                Decentralized communities are intrinsically-motivated, self-organizing entities.
                Core to their success is a robust governance framework. We believe that the success
                of PiChain Global Ecosystem demonstrates how effectively our community operates.
                This success relies on two key features:
              </p>
              <ul className={S.ul}>
                <li>Governance</li>
                <li>Autonomy</li>
              </ul>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="governance">
                Governance
              </div>
              <p>
                Community governance is a crucial part of determining the long-term development of a
                business. We propose a sound community governance structure that will translate
                principles into practical mechanisms that will be effective in driving the
                development and evolution of the PiChain Global Ecosystem.
              </p>
              <p>
                Community members can exercise voting power based on the number of PCM tokens they
                hold. To protect the governance structure against extreme asymmetries, i.e. the
                action of a few whales, we will implement measures to prevent the excessive
                concentration of power, such as token lock-up periods or maximum holder limits, and
                maximum limits on core team holdings.
              </p>
              <div className={S.title3}>Proposal platform</div>
              <p>
                In a distributed ecosystem scattered across geographies and time zones, community
                members need a mechanism to work together, make decisions, and allocate resources to
                ensure the long-term success and sustainability of the project. To support this, we
                will establish a proposal and discussion platform. This empowers community members
                to submit governance proposals, discuss, and express their views. The platform will
                be decentralized and open to public scrutiny.
              </p>
              <p>
                Such proposals will undergo a review process. This will involve both a committee and
                a technical review. This requires that the community establish a dedicated committee
                and technical review team to review and evaluate the technical feasibility and
                compliance of the proposal. This will help to improve the quality of decisions.
              </p>
              <div className={S.title3}>Voting platform</div>
              <p>
                Part of the task of the review process is to apply “sizing” to the proposals
                submitted. By implementing a multi-level voting mechanism, it is possible to treat
                proposals according to their complexity and potential impact. Smaller, more trivial
                decisions can be decided directly by token holders, while larger decisions may
                require broader community participation. For example, some proposals may be
                submitted to an independent review committee to oversee and review the compliance
                and safety of the proposal to ensure the long-term benefit of the community.
              </p>
              <div className={S.title3}>Token Rewards</div>
              <p>
                Community members can earn additional governance tokens by actively participating in
                the governance process to encourage their contributions. Similarly, participants who
                are involved in community education and outreach may be incentivized. This will
                encourage community members to understand the governance process, participate in
                decision-making, and provide educational resources and outreach activities to
                promote broader participation.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="spontaneous-autonomy">
                Spontaneous autonomy
              </div>
              <p>
                PiChain Global has more than 90 operation centers around the world. The team
                composition and activity impact of each operation center differs. Representative
                members of the teams from various countries can voluntarily apply to PiChain
                Global’s Country Operation Center to carry out activities that comply with local
                regulations. Offline and online activities are held to promote the PiChain Global
                Ecosystem.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="the-pichain-global-platform">
                The PiChain Global platform
              </div>
              <p>
                Our vision goes beyond being a standalone platform; we aspire to be a catalyst for
                Web3 adoption, providing the soil for useful projects to thrive. As we continue to
                grow, our goal is to integrate more Dapps, attract a wide user base of Web2 natives,
                and demonstrate the transformative potential of Web3 technology in business, games,
                NFT, and other fields. In short, we aim to shape the future of decentralized
                commerce.
              </p>
              <figure className={S.figure}>
                <img src={figure2_png} />
                <figcaption>
                  Figure 2: High-level overview of the PiChain Global platform
                </figcaption>
              </figure>
              <p>
                To facilitate Dapp adoption, the platform provides an SDK (Software Developer Kit)
                to support Dapp developers to integrate with the login and fiat rails, and to
                standardize Dapp access to the PCM token and other cryptocurrencies.
              </p>
              <p>
                We anticipate that, thanks to our incredible community and its network effect, the
                PiChain Global Ecosystem will rapidly expand beyond the existing Daaps, such as the
                PiChain Mall platform and PiNFT ART platform, however, these Dapps serve to
                demonstrate what the user experience may look like for future solutions.
              </p>
              <div className={S.title3}>PiChain Mall trading system contract </div>
              <p>
                The PiChain Mall contract is a smart contract deployed to the blockchain. It
                supports a variety of functions and features that are essential to the ecommerce
                platform. The main functions of the PiChain Mall smart contract include:
              </p>
              <div className={S.title3}>Identity authentication and trust establishment</div>
              <p>
                The PiChain Mall contract can implement a decentralized identity verification and
                trust-building mechanism. Users can register and log in through their own digital
                identities without relying on third-party agencies. Transaction records and smart
                contract rules on the blockchain can ensure the transparency and security of
                transactions and enhance users' trust.
              </p>
              <div className={S.title3}>Decentralized transactions and payments</div>
              <p>
                The PiChain Mall contract can support decentralized transactions and payment
                systems. The payment mechanism implemented using smart contracts can ensure the
                traceability and security of transactions. At the same time, smart contracts can
                also automatically execute transactions, reducing intermediate links and related
                costs.
              </p>
              <div className={S.title3}>
                Product traceability and anti-counterfeiting verification
              </div>
              <p>
                The PiChain Mall contract can record the production process and supply chain
                information of goods, and realize the traceability function of goods. Consumers can
                verify the authenticity and quality of goods through data on the blockchain, thereby
                preventing the circulation of counterfeit and shoddy goods.
              </p>
              <div className={S.title3}>Decentralized rating and review system</div>
              <p>
                The PiChain Mall contract supports a decentralized evaluation and comment system.
                User ratings and comments will be recorded on the blockchain and cannot be tampered
                with or deleted, providing more fair and credible user feedback.
              </p>
              <div className={S.title3}>Reward mechanism and points system</div>
              <p>
                The PiChain Mall contract can design a reward mechanism and points system to
                encourage users to participate in platform activities. Through smart contracts, the
                platform can automatically distribute rewards and points to ensure fairness and
                transparency.
              </p>
              <div className={S.title3}>Decentralized storage and distribution</div>
              <p>
                The PiChain Mall contract can use decentralized storage technology to store product
                pictures, videos, and other related data on the blockchain. This can reduce
                dependence on centralized servers and improve data reliability and security.
              </p>
              <div className={S.title3}>Automatic execution of smart contracts</div>
              <p>
                An important function of the PiChain Mall contract is the automatic execution of
                smart contracts. According to preset rules and conditions, smart contracts can
                automatically execute transactions, issue rewards, and handle disputes and other
                operations, reducing the possibility of human intervention and improving efficiency
                and fairness.
              </p>
              <p>
                Through the characteristics of blockchain technology, such as decentralization,
                transparency, security, and programmability, the PiChain Mall contract provides a
                more secure, efficient, and fair trading environment for e-commerce platforms,
                enhancing users' trust and Participation.
              </p>
              <div className={S.title3}>Dispute resolution</div>
              <p>
                Additionally, the PiChain Mall smart contract also plays a vital role in
                automatically resolving transaction disputes. The specific functions are as follows:
              </p>
              <ul className={S.ul}>
                <li>
                  <b>Automated dispute resolution mechanism:</b> The PiChain Mall contract can
                  pre-set an automated dispute resolution mechanism. For example, when a dispute
                  occurs, the smart contract automatically triggers an arbitration process and makes
                  a ruling based on pre-set rules and conditions. This mechanism can improve the
                  efficiency and fairness of dispute resolution.
                </li>
                <li>
                  <b>Third-party arbitration mechanism:</b> The PiChain Mall contract can also
                  introduce a third-party arbitration mechanism to further enhance the fairness and
                  neutrality of dispute resolution. When users have a dispute, they can choose to
                  submit the dispute to an arbitration institution and implement it in accordance
                  with the arbitration results. Blockchain technology can provide tamper-proof
                  transaction records and evidence, helping arbitration institutions make fair
                  decisions.
                </li>
              </ul>
              <div className={S.title3}>Review system</div>
              <p>
                The PiChain Mall contract can use the decentralized evaluation and comment system to
                resolve disputes between some users. Users can post ratings and comments on the
                blockchain, and other users can refer to this information to make decisions. This
                transparent rating system can reduce unnecessary disputes and encourage honest
                communication among users.
              </p>
              <div className={S.title3}>Contract updates</div>
              <p>
                As a contract deployed to the blockchain, the PiChain Mall contract is publicly
                verifiable, and new versions may be deployed to supersede earlier models. In the
                near future, as per our roadmap, we anticipate that updates will be made to
                accommodate:
              </p>
              <ul className={S.ul}>
                <li>
                  Community governance: The PiChain Mall contract can adopt a community governance
                  model to allow users to participate in the decision-making process of dispute
                  resolution. Through voting or consensus mechanisms, users can reach a consensus on
                  dispute resolution and implement final decisions. This approach can increase user
                  engagement and trust.
                </li>
                <li>
                  Multi-party guarantee mechanism: The PiChain Mall contract can introduce a
                  multi-party guarantee mechanism to resolve disputes through the participation of
                  multiple parties. For example, the contract can require the customer to pay a
                  deposit before transacting. When a dispute occurs, the deposit can be used to
                  compensate the injured party or pay arbitration fees. This mechanism can encourage
                  users to be honest and trustworthy and reduce the occurrence of disputes.
                </li>
              </ul>
              <p>
                At PiChain Global Ecosystem, we understand that the success of Web3 adoption relies
                not only on the technology itself, but also on a thriving ecosystem of innovative
                projects and real-world use cases. To accelerate this cause beyond the development
                capacities of our own team, we have reserved a portion of the PCM token allocation
                for use by potential future projects looking to integrate with the PiChain Global
                Ecosystem. In this way, PCM plays a leading role in guiding and incubating these
                projects, just as the PiChain Global Ecosystem enables such teams to leverage our
                large and vibrant community to support their growth. Let’s take a closer look at the
                PCM token allocation schedule next.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="pcm-tokenomics">
                PCM Tokenomics
              </div>
              <p>
                The PCM token is a fixed supply token with an eventual total supply of 500 million
                PCM.
              </p>
              <p>
                Less than 5% of this volume will be minted at TGE (the token generation event), with
                only 3% of the total possible supply, i.e. 15 million, immediately released,
                unvested, as liquidity. The remainder of the supply will be subject to a vesting
                period, as shown in Figure 3.
              </p>
              <figure className={S.figure}>
                <img src={figure3_png} />
                <figcaption>Figure 3: PCM token generation and vesting schedule</figcaption>
              </figure>
              <p>
                Figure 4 demonstrates how the cliff and vesting schedule will impact the total
                supply of the token until the end of all restrictions on token release after ten
                years.
              </p>
              <figure className={S.figure}>
                <img src={figure4_png} />
                <figcaption>
                  Figure 4: Share of circulating PCM supply over time by stakeholder group
                </figcaption>
              </figure>
              <p>
                Let's examine how the tokenomics favors the stability and future utility of PCM.
              </p>
              <div className={S.title3}>A long-term view</div>
              <p>
                Our decade-long vesting schedule is a far-sighted approach that recognizes the time
                investment required to expand a global ecommerce marketplace. Delaying issuance of
                the total supply allows the value of the token to appreciate over time to
                accommodate the increased supply in the global cryptocurrency ecosystem.
              </p>
              <div className={S.title3}>Allocation</div>
              <ol className={S.ol}>
                <li>Sign-in (Mining) Bonus (6%)</li>
                <p>
                  The Sign-in Bonus serves as an incentive for both new and existing participants
                  within the ecosystem, promoting daily engagement on the PCM Wallet. During the
                  pre-mainnet phase, over 700,000 users earned PCM points across PiChain Global
                  DApps, such as PiChain Mall, PiNFT ART, PiSnake, etc. These points will seamlessly
                  migrate to PCM Wallet with corresponding conversion ratios, accounting for 3% of
                  the total supply (15,000,000 PCM). At Token Generation Event (TGE), 3,750,000 PCM,
                  which is 25% of these points will be immediately unlocked, while the remaining 75%
                  (11,250,000 PCM) will be vested linearly over the next 4 years on a yearly unlock
                  basis.
                </p>
                <figure className={S.figure}>
                  <img src={figure5_png} />
                </figure>
                <p>
                  A substantial pool of 15,000,000 PCM (3% of the total supply) is allocated for the
                  Sign-in (mining) Bonus, available for daily mining activities on PCM Wallet.
                  Mining commences upon the launch of the mining function, with rewards distributed
                  based on the daily participation of users. The fixed daily distribution, adjusted
                  monthly, ensures scarcity of PCM token earned from daily mining. For instance, if
                  the daily distribution is 15,000 PCM, and there are 300,000 active miners in the
                  past 24 hours, each miner would receive 0.05 PCM. Monthly adjustments, perpetually
                  set at 3%, maintain scarcity and sustainability.
                </p>
                <figure className={S.figure}>
                  <img src={figure6_png} />
                </figure>
                <figure className={S.figure}>
                  <img src={figure7_png} />
                </figure>
                <p>
                  Notably, these sign-in mining rewards carry no lockup period, allowing users to
                  migrate points to the mainnet after 30 days of mining. This approach aims to
                  enhance ecosystem engagement, fostering user loyalty, and enabling participants to
                  explore the various token use cases within the PiChain Global Ecosystem.
                </p>
                <li>Treasury (22%) </li>
                <p>
                  The treasury is important for the sustainable development of the PiChain Global
                  Ecosystem. The treasury will include the reserve, liquidity-pool follow on, future
                  partnerships and developement.
                </p>
                <div className={S.title3}>Components of the Treasury:</div>
                <ol className={S.ol}>
                  <li>
                    <b>Reserve:</b> A portion of the treasury is dedicated to building and
                    maintaining a reserve fund. This reserve acts as a financial safety net,
                    providing flexibility for unforeseen circumstances, strategic opportunities, and
                    ecosystem stability.
                  </li>
                  <li>
                    <b>Liquidity-Pool Follow On:</b> Another facet of the treasury is dedicated to
                    supporting liquidity pools. This allocation facilitates continuous liquidity in
                    decentralized exchanges, ensuring efficient trading of PCM tokens and
                    contributing to the overall liquidity infrastructure of the ecosystem.
                  </li>
                  <li>
                    <b>Future Partnerships:</b> A portion of the treasury is earmarked for forging
                    strategic partnerships. These partnerships may involve collaborations with other
                    blockchain projects, businesses, or entities that align with the goals and
                    values of PiChain Global. Such collaborations can foster innovation, expand the
                    ecosystem, and enhance the overall utility of PCM tokens.
                  </li>
                  <li>
                    <b>Development:</b> A substantial part of the treasury is allocated for future
                    development initiatives. This includes funding for research and development,
                    technological advancements, and the ongoing enhancement of PiChain Global's
                    infrastructure. These funds empower the team to stay at the forefront of
                    blockchain technology, ensuring continuous innovation and growth.
                  </li>
                </ol>
                <li>Rewards (43%)</li>
                <p>
                  The Rewards allocation, constituting 43% of the total token supply, is designed to
                  recognize and incentivize active participation within the PiChain Global
                  Ecosystem.
                </p>
                <ol className={S.ol}>
                  <li>
                    <b>Staking Rewards:</b>
                  </li>
                  <ul className={S.ul}>
                    <li>
                      Objective: Incentivize users to stake tokens, contributing to the long-term
                      security and stability of the PiChain Global Ecosystem.
                    </li>
                    <li>
                      Mechanism: Users can stake their tokens for a selected amount and period upon
                      the mainnet launch. Staking rewards are distributed accordingly, with higher
                      rewards in the first year to encourage early adoption. Rewards decrease
                      gradually in the first 5 years through an annual rewards thirdening mechanism.
                    </li>
                  </ul>
                  <li>
                    <b>Community Initiatives:</b>
                  </li>
                  <ul className={S.ul}>
                    <li>
                      Objective: Recognize and reward participants in the PCM DAO (Decentralized
                      Autonomous Organization).
                    </li>
                    <li>
                      Mechanism: Participants engaging in community initiatives, including community
                      management, moderation, education, and the operation of PiChain Global DApps,
                      are eligible for rewards. This includes contributors to marketing, business
                      development, and various community-driven activities.
                    </li>
                  </ul>
                  <li>
                    <b>Community Operation Centers:</b>
                  </li>
                  <ul className={S.ul}>
                    <li>
                      Background: Over 100+ Community Operation Centers have played a vital role in
                      PiChain Global's development over the past 3 years.
                    </li>
                    <li>
                      Contribution Areas: These centers actively contribute to community management,
                      moderation, education, and the operation of PiChain Global DApps.
                    </li>
                    <li>
                      Recognition: Participants in Community Operation Centers are rewarded for
                      their efforts, acknowledging their significant contribution to the ecosystem's
                      growth.
                    </li>
                  </ul>
                  <li>
                    <b>Engagement in PCM DApps:</b>
                  </li>
                  <ul className={S.ul}>
                    <li>
                      Mechanism: Users engaging with PCM DApps are eligible for rewards. Additional
                      reward mechanisms will be announced as DApps evolve. External DApps will be
                      integrated into the PCM Wallet SDK, enabling PCM as rewards and payment.
                      Participation in the DAO and holding PiChain Global's official NFT collection
                      also entitles users to rewards.
                    </li>
                  </ul>
                </ol>
                <li>Core Team (20%)</li>
                <li>Investors (4%)</li>
                <li>Advisors (2%)</li>
              </ol>
              <div className={S.title3}>Buyback</div>
              <p>
                A buyback strategy can help ensure that PCM prices remain stable, by limiting the
                volume of tokens in circulation. Limiting supply in this way helps to increase
                demand and, therefore, value.
              </p>
              <p>
                By assigning treasury funds to our buy-back strategy, PiChain Global will reduce the
                number of tokens in circulation. This should positively impact the price of the
                circulating supply of tokens. As a result, token holders see the value of their
                tokens increase. This virtuous cycle provides a win-win for both PiChain Global and
                the token holders, whether they are sellers or customers.
              </p>
              <div className={S.title3}>Rewarding honest players</div>
              <p>
                The PCM token airdrop strategy is designed to encourage the reputational growth of
                those honest players in the system. From rewarding customers who write reviews of
                goods and services, to rewarding sellers who stake their PCM, these token
                distribution events encourage participation in the system and account for 43% of the
                total token allocation. And, this is the base allocation, not taking into account
                those additional tokens that will be available to the treasury thanks to the buyback
                schedule.
              </p>
              <p>
                Notice that this reward system mitigates against the risk of an early sell pressure,
                and, therefore, avoids adding volatility pressures to PCM. Instead, we have taken
                the long view; with the rewards being released gradually over the decade-long
                vesting schedule.
              </p>
              <div className={S.title3}>Encouraging participation</div>
              <p>
                Just as the rewards schedule is designed to limit any pump-and-dump, so too is the
                airdrop, or sign-in bonus. This bonus is limited to just 6% of the total allocation
                and acts to encourage new participants to come and join the ecosystem, and to
                encourage existing users to sign in on a daily basis – increasing the ecosystem’s
                stickiness. We predict that recipients are most likely to use this bonus to
                participate in the system because of the utility of PCM as a currency of exchange
                within the ecommerce platform. Over time, this sign-in bonus will be reduced in
                negative correlation with the growth of the existing ecosystem and its
                participation.
              </p>
              <p>
                The PCM tokenomics issuance schedule is designed with the long-term growth and
                health of the ecosystem in mind. We recognize our responsibility to the entire
                ecosystem to maintain a healthy economy by providing a stabilizing tokenomics that
                is not vulnerable to extremes of volatility or inflationary pressures.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="conclusion">
                Conclusion
              </div>
              <div className={S.title3}>Are you ready to join the PiChain Global revolution?</div>
              <p>
                By tapping into the power of the decentralized, verifiable, and immutable
                blockchain, PiChain Global creates a new synergy from the strongest principles and
                technologies.
              </p>
              <p>
                PiChain Global's ecommerce solution smooths away deeply embedded, intractable
                friction points that are native to the current Web2 marketplace paradigm. We will
                empower users with access to a self-custodial wallet that enables them to transact
                across a global marketplace of physical and virtual goods and services. This
                marketplace will be an open-access offering, supporting the unbanked and the
                far-flung, and, it will do so without suffering from the Web3 barriers to entry, by
                providing a Web2 access point.
              </p>
              <p>
                An immutable, decentralized, trustless blockchain will execute smart contract code
                to provide near-instant, verifiable transactions. This will slash the cost of
                involving a trusted third party, of cross-border payments, and of third-party
                arbitration. Smart contracts, rather than trusted third parties, will perform the
                escrow service, solving the issue of delivery versus payment.
              </p>
              <p>
                We will entrust the growth of this ecosystem to the most potent force of all: our
                community. Furthermore, with our on-chain reputation system, we will enable the fair
                and honest to rise to the top and ensure that the least powerful are heard.
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="pcm-token-contract-security">
                PCM Token Contract Security
              </div>
              <p>
                The PCM Token operates on an ERC-20 standard and is deployed on Optimism, ensuring
                seamless and efficient transactions. Token can also be bridged to other chains, e.g.
                Pi Network, upon it's open mainnet.
              </p>
              <p>
                To maintain transparency, we proudly present the PCM Smart Contract address: <br />
                <span className={S.address}>0xD0CF4dE352aC8dccE00bD6B93EE73D3Cb272edC3</span>
              </p>
              <p>
                Our PCM tokens are securely stored across multiple multisig addresses, following a
                vesting schedule aligned with the tokenomics plan. This multi-level approach ensures
                the security and integrity of our ecosystem while offering enhanced protection for
                our community.
              </p>
              <figure className={S.figure}>
                <img src={figure8_png} />
              </figure>
              <p>
                Utilizing a time-lock feature coupled with a multi-signature (3 out of 5) wallet,
                our system offers robust risk mitigation strategies. This approach effectively
                delays sensitive operations and eliminates the potential for a single point of key
                management failure.
              </p>
              <p>
                Here is the <b>Time lock contract address:</b> <br />
                <span className={S.address}>0xD0CF4dE352aC8dccE00bD6B93EE73D3Cb272edC3</span>
              </p>
              <p>
                This multisig wallet setup is designed with the following security measures in
                place:
              </p>
              <ul className={S.ul}>
                <li>Approval from 3 out of 5 owners is required before executing any action.</li>
                <li>
                  In cases of lost or stolen wallets, any compromised wallet can be replaced with
                  the approval of 3 owners, ensuring swift action and security enhancement.
                </li>
              </ul>
              <p>
                We have worked with Certik regarding the smart contract security audits. For more
                information, please refer to https://skynet.certik.com/projects/pichain-global
              </p>
            </div>
            <div className={S.paragraph}>
              <div className={S.title1} id="disclaimers">
                Disclaimers
              </div>
              <p>
                PLEASE READ THE ENTIRETY OF THIS "DISCLAIMER" SECTION CAREFULLY. NOTHING HEREIN
                CONSTITUTES LEGAL, FINANCIAL, BUSINESS OR TAX ADVICE AND YOU SHOULD CONSULT YOUR OWN
                LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S) BEFORE ENGAGING IN ANY
                ACTIVITY IN CONNECTION HEREWITH. NEITHER THE COMPANY ISSUING THE PCM TOKENS
                (“COMPANY”), ANY OF THE PROJECT TEAM MEMBERS WHO HAVE WORKED ON THE PICHAIN GLOBAL
                ECOSYSTEM TO DEVELOP PCM AND/OR THE PROJECT IN ANY WAY WHATSOEVER (“PCM TEAM”), ANY
                DISTRIBUTOR/VENDOR OF PCM (“DISTRIBUTOR”), NOR ANY SERVICE PROVIDER SHALL BE LIABLE
                FOR ANY KIND OF DIRECT OR INDIRECT DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN
                CONNECTION WITH ACCESSING THIS DOCUMENT, THE WEBSITE AT HTTPS://PCMLABS.IO
                (“WEBSITE”) OR ANY OTHER WEBSITES OR MATERIALS PUBLISHED BY THE COMPANY.
              </p>

              <p>
                Project purpose: You agree that you are acquiring PCM to participate in PiChain
                Global Ecosystem and to obtain services on the ecosystem thereon. The Company, the
                Distributor and their respective affiliates would develop and contribute to the
                underlying source code for PiChain Global Ecosystem. The Company is acting solely as
                an arms’ length third party in relation to the PCM distribution, and not in the
                capacity as a financial advisor or fiduciary of any person with regard to the
                distribution of PCM.
              </p>
              <p>
                Nature of this document: This document and the Website are intended for general
                informational purposes only and do not constitute a prospectus, an offer document,
                an offer of securities, a solicitation for investment, or any offer to sell any
                product, item, or asset (whether digital or otherwise). The information herein may
                not be exhaustive and does not imply any element of a contractual relationship.
                There is no assurance as to the accuracy or completeness of such information and no
                representation, warranty or undertaking is or purported to be provided as to the
                accuracy or completeness of such information. Any information provided in the
                whitepaper/litepaper and on the Website will be updated and changed from time to
                time with or without notification. Where this document or the Website includes
                information that has been obtained from third party sources, the Company, the
                Distributor, their respective affiliates and/or the PCM Team have not independently
                verified the accuracy or completeness of such information. Further, you acknowledge
                that circumstances may change and that this document or the Website may become
                outdated as a result; and neither the Company nor the Distributor is under any
                obligation to update or correct this document in connection therewith.
              </p>
              <p>
                Token Documentation: Nothing in this document or the Website constitutes any offer
                by the Company, the Distributor, or the PCM Team to sell any PCM (as defined herein)
                nor shall it or any part of it nor the fact of its presentation form the basis of,
                or be relied upon in connection with, any contract or investment decision. Nothing
                contained in this document or the Website is or may be relied upon as a promise,
                representation or undertaking as to the future performance of PiChain Global
                Ecosystem. The agreement between the Distributor (or any third party) and you, in
                relation to any distribution or transfer of PCM, is to be governed only by the
                separate terms and conditions of such agreement.
              </p>
              <p>
                The information set out in this document and the Website is for community discussion
                only and is not legally binding. No person is bound to enter into any contract or
                binding legal commitment in relation to the acquisition of PCM, and no digital asset
                or other form of payment is to be accepted on the basis of this document or the
                Website. The agreement for distribution of PCM and/or continued holding of PCM shall
                be governed by a separate set of Terms and Conditions or Token Distribution
                Agreement (as the case may be) setting out the terms of such distribution and/or
                continued holding of PCM (the “Terms and Conditions”), which shall be separately
                provided to you or made available on the Website. The Terms and Conditions must be
                read together with this document. In the event of any inconsistencies between the
                Terms and Conditions and this document or the Website, the Terms and Conditions
                shall prevail.
              </p>
              <p>
                Deemed Representations and Warranties: By accessing this document or the Website (or
                any part thereof), you shall be deemed to represent and warrant to the Company, the
                Distributor, their respective affiliates, and the PCM Team as follows:
              </p>
              <ul className={S.ul}>
                <li>
                  (a) in any decision to acquire any PCM, you have shall not rely on any statement
                  set out in this document or the Website;
                </li>
                <li>
                  (b) you will and shall at your own expense ensure compliance with all laws,
                  regulatory requirements and restrictions applicable to you (as the case may be);
                </li>
                <li>
                  (c) you acknowledge, understand and agree that PCM may have no value, there is no
                  guarantee or representation of value or liquidity for PCM, and PCM is not an
                  investment product nor is it intended for any speculative investment whatsoever;
                </li>
                <li>
                  (d) none of the Company, the Distributor, their respective affiliates, and/or the
                  PCM Team members shall be responsible for or liable for the value of PCM, the
                  transferability and/or liquidity of PCM and/or the availability of any market for
                  PCM through third parties or otherwise; and
                </li>
                <li>
                  (e) you acknowledge, understand and agree that you are not eligible to participate
                  in the distribution of PCM if you are a citizen, national, resident (tax or
                  otherwise), domiciliary and/or green card holder of a geographic area or country
                  (i) where it is likely that the distribution of PCM would be construed as the sale
                  of a security (howsoever named), financial service or investment product and/or
                  (ii) where participation in token distributions is prohibited by applicable law,
                  decree, regulation, treaty, or administrative act (including without limitation
                  the United States of America and the People's Republic of China); and to this
                  effect you agree to provide all such identity verification document when requested
                  in order for the relevant checks to be carried out.
                </li>
              </ul>
              <p>
                The Company, the Distributor and the PCM Team do not and do not purport to make, and
                hereby disclaims, all representations, warranties or undertaking to any entity or
                person (including without limitation warranties as to the accuracy, completeness,
                timeliness, or reliability of the contents of this document or the Website, or any
                other materials published by the Company or the Distributor). To the maximum extent
                permitted by law, the Company, the Distributor, their respective affiliates and
                service providers shall not be liable for any indirect, special, incidental,
                consequential or other losses of any kind, in tort, contract or otherwise
                (including, without limitation, any liability arising from default or negligence on
                the part of any of them, or any loss of revenue, income or profits, and loss of use
                or data) arising from the use of this document or the Website, or any other
                materials published, or its contents (including without limitation any errors or
                omissions) or otherwise arising in connection with the same. Prospective acquirors
                of PCM should carefully consider and evaluate all risks and uncertainties (including
                financial and legal risks and uncertainties) associated with the distribution of
                PCM, the Company, the Distributor and the PCM Team.
              </p>
              <p>
                PCM Token: PCM are designed to be utilised, and that is the goal of the PCM
                distribution. In fact, the project to develop PiChain Global Ecosystem would fail if
                all PCM holders simply held onto their PCM and did nothing with it. In particular,
                it is highlighted that PCM:
              </p>
              <ul className={S.ul}>
                <li>
                  (a) does not have any tangible or physical manifestation, and does not have any
                  intrinsic value (nor does any person make any representation or give any
                  commitment as to its value);
                </li>
                <li>
                  (b) is non-refundable and cannot be exchanged for cash (or its equivalent value in
                  any other digital asset) or any payment obligation by the Company, the Distributor
                  or any of their respective affiliates;
                </li>
                <li>
                  (c) does not represent or confer on the token holder any right of any form with
                  respect to the Company, the Distributor (or any of their respective affiliates),
                  or its revenues or assets, including without limitation any right to receive
                  future dividends, revenue, shares, ownership right or stake, share or security,
                  any voting, distribution, redemption, liquidation, proprietary (including all
                  forms of intellectual property or licence rights), right to receive accounts,
                  financial statements or other financial data, the right to requisition or
                  participate in shareholder meetings, the right to nominate a director, or other
                  financial or legal rights or equivalent rights, or intellectual property rights or
                  any other form of participation in or relating to PiChain Global Ecosystem, the
                  Company, the Distributor and/or their service providers;
                </li>
                <li>
                  (d) is not intended to represent any rights under a contract for differences or
                  under any other contract the purpose or pretended purpose of which is to secure a
                  profit or avoid a loss;
                </li>
                <li>
                  (e) is not intended to be a representation of money (including electronic money),
                  security, commodity, bond, debt instrument, unit in a collective investment scheme
                  or any other kind of financial instrument or investment;
                </li>
                <li>
                  (f) is not a loan to the Company, the Distributor or any of their respective
                  affiliates, is not intended to represent a debt owed by the Company, the
                  Distributor or any of their respective affiliates, and there is no expectation of
                  profit; and
                </li>
                <li>
                  (g) does not provide the token holder with any ownership or other interest in the
                  Company, the Distributor or any of their respective affiliates.
                </li>
              </ul>
              <p>
                Notwithstanding the PCM distribution, users have no economic or legal right over or
                beneficial interest in the assets of the Company, the Distributor, or any of their
                affiliates after the token distribution.
              </p>
              <p>
                To the extent a secondary market or exchange for trading PCM does develop, it would
                be run and operated wholly independently of the Company, the Distributor, the
                distribution of PCM and PiChain Global Ecosystem. Neither the Company nor the
                Distributor will create such secondary markets nor will either entity act as an
                exchange for PCM.
              </p>
              <p>
                Informational purposes only: The information set out herein is only conceptual, and
                describes the future development goals for PiChain Global Ecosystem to be developed
                without any binding commitment. Please do not rely on this information in deciding
                whether to participate in the token distribution because ultimately, the
                development, release, and timing of any products, features or functionality remains
                at the sole discretion of the Company, the Distributor or their respective
                affiliates, and is subject to change. Further, this document or the Website may be
                amended or replaced from time to time. There are no obligations to update this
                document or the Website, or to provide recipients with access to any information
                beyond what is provided herein.
              </p>
              <p>
                Regulatory approval: No regulatory authority has examined or approved, whether
                formally or informally, any of the information set out in this document or the
                Website. No such action or assurance has been or will be taken under the laws,
                regulatory requirements or rules of any jurisdiction. The publication, distribution
                or dissemination of this document or the Website does not imply that the applicable
                laws, regulatory requirements or rules have been complied with.
              </p>
              <p>
                Cautionary Note on forward-looking statements: All statements contained herein,
                statements made in press releases or in any place accessible by the public and oral
                statements that may be made by the Company, the Distributor and/or the PCM Team, may
                constitute forward-looking statements (including statements regarding the intent,
                belief or current expectations with respect to market conditions, business strategy
                and plans, financial condition, specific provisions and risk management practices).
                You are cautioned not to place undue reliance on these forward-looking statements
                given that these statements involve known and unknown risks, uncertainties and other
                factors that may cause the actual future results to be materially different from
                that described by such forward-looking statements, and no independent third party
                has reviewed the reasonableness of any such statements or assumptions. These
                forward-looking statements are applicable only as of the date indicated in this
                document, and the Company, the Distributor as well as the PCM Team expressly
                disclaim any responsibility (whether express or implied) to release any revisions to
                these forward-looking statements to reflect events after such date.
              </p>
              <p>
                References to companies and platforms: The use of any company and/or platform names
                or trademarks herein (save for those which relate to the Company, the Distributor or
                their respective affiliates) does not imply any affiliation with, or endorsement by,
                any third party. References in this document or the Website to specific companies
                and platforms are for illustrative purposes only.
              </p>
              <p>
                English language: This document and the Website may be translated into a language
                other than English for reference purpose only and in the event of conflict or
                ambiguity between the English language version and translated versions of this
                document or the Website, the English language versions shall prevail. You
                acknowledge that you have read and understood the English language version of this
                document and the Website.
              </p>
              <p>
                No Distribution: No part of this document or the Website is to be copied,
                reproduced, distributed or disseminated in any way without the prior written consent
                of the Company or the Distributor. By attending any presentation on this document or
                by accepting any hard or soft copy of this document, you agree to be bound by the
                foregoing limitations.
              </p>
            </div>
          </div>
        </div>
        <div className={S.right}>
          <div className={S.mobileAnchor} onClick={toggleMenu}>
            <div>On this page</div>
            <div className={isOpen ? S.close : ''}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className={`${S.openedArrow} ${isOpen ? S.open : ''}`}>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <ul className={isOpen ? S.open : ''}>
            <li>
              <a
                href="#pichain-global-ecosystem"
                className={activeItem === '#pichain-global-ecosystem' ? S.active : ''}
                onClick={() => handleItemClick('#pichain-global-ecosystem')}
              >
                PiChain Global Ecosystem
              </a>
            </li>
            <li>
              <a
                href="#the-promise-of-cryptocurrency"
                className={activeItem === '#the-promise-of-cryptocurrency' ? S.active : ''}
                onClick={() => handleItemClick('#the-promise-of-cryptocurrency')}
              >
                The promise of cryptocurrency
              </a>
            </li>
            <li>
              <a
                href="#the-challenges-facing-web3-ecommerce"
                className={activeItem === '#the-challenges-facing-web3-ecommerce' ? S.active : ''}
                onClick={() => handleItemClick('#the-challenges-facing-web3-ecommerce')}
              >
                The challenges facing Web3 ecommerce
              </a>
            </li>
            <li>
              <a
                href="#barriers-to-entry"
                className={activeItem === '#barriers-to-entry' ? S.active : ''}
                onClick={() => handleItemClick('#barriers-to-entry')}
              >
                Barriers to entry
              </a>
            </li>
            <li>
              <a
                href="#marketplace-barriers"
                className={activeItem === '#marketplace-barriers' ? S.active : ''}
                onClick={() => handleItemClick('#marketplace-barriers')}
              >
                Marketplace barriers
              </a>
            </li>
            <li>
              <a
                href="#archaic-web2-standards"
                className={activeItem === '#archaic-web2-standards' ? S.active : ''}
                onClick={() => handleItemClick('#archaic-web2-standards')}
              >
                Archaic Web2 standards
              </a>
            </li>
            <li>
              <a
                href="#the-pichain-global-ecosystem-vision"
                className={activeItem === '#the-pichain-global-ecosystem-vision' ? S.active : ''}
                onClick={() => handleItemClick('#the-pichain-global-ecosystem-vision')}
              >
                The PiChain Global Ecosystem vision
              </a>
            </li>
            <li>
              <a
                href="#a-new-model-for-trust"
                className={activeItem === '#a-new-model-for-trust' ? S.active : ''}
                onClick={() => handleItemClick('#a-new-model-for-trust')}
              >
                A new model for trust
              </a>
            </li>
            <li>
              <a
                href="#breaking-barriers-by-design"
                className={activeItem === '#breaking-barriers-by-design' ? S.active : ''}
                onClick={() => handleItemClick('#breaking-barriers-by-design')}
              >
                Breaking barriers by design
              </a>
            </li>
            <li>
              <a
                href="#introduction"
                className={activeItem === '#introduction' ? S.active : ''}
                onClick={() => handleItemClick('#introduction')}
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#the-pcm-Wallet"
                className={activeItem === '#the-pcm-Wallet' ? S.active : ''}
                onClick={() => handleItemClick('#the-pcm-Wallet')}
              >
                The PCM Wallet
              </a>
            </li>
            <li>
              <a
                href="#the-ecosystem-token-pcm"
                className={activeItem === '#the-ecosystem-token-pcm' ? S.active : ''}
                onClick={() => handleItemClick('#the-ecosystem-token-pcm')}
              >
                The ecosystem token: PCM
              </a>
            </li>
            <li>
              <a
                href="#the-pichain-global-reputation-system"
                className={activeItem === '#the-pichain-global-reputation-system' ? S.active : ''}
                onClick={() => handleItemClick('#the-pichain-global-reputation-system')}
              >
                The PiChain Global reputation system
              </a>
            </li>
            <li>
              <a
                href="#reputational-incentives"
                className={activeItem === '#reputational-incentives' ? S.active : ''}
                onClick={() => handleItemClick('#reputational-incentives')}
              >
                Reputational incentives
              </a>
            </li>
            <li>
              <a
                href="#the-pichain-global-community"
                className={activeItem === '#the-pichain-global-community' ? S.active : ''}
                onClick={() => handleItemClick('#the-pichain-global-community')}
              >
                The PiChain Global community
              </a>
            </li>
            <li>
              <a
                href="#governance"
                className={activeItem === '#governance' ? S.active : ''}
                onClick={() => handleItemClick('#governance')}
              >
                Governance
              </a>
            </li>
            <li>
              <a
                href="#spontaneous-autonomy"
                className={activeItem === '#spontaneous-autonomy' ? S.active : ''}
                onClick={() => handleItemClick('#spontaneous-autonomy')}
              >
                Spontaneous autonomy
              </a>
            </li>
            <li>
              <a
                href="#the-pichain-global-platform"
                className={activeItem === '#the-pichain-global-platform' ? S.active : ''}
                onClick={() => handleItemClick('#the-pichain-global-platform')}
              >
                The PiChain Global platform
              </a>
            </li>
            <li>
              <a
                href="#pcm-tokenomics"
                className={activeItem === '#pcm-tokenomics' ? S.active : ''}
                onClick={() => handleItemClick('#pcm-tokenomics')}
              >
                PCM Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#conclusion"
                className={activeItem === '#conclusion' ? S.active : ''}
                onClick={() => handleItemClick('#conclusion')}
              >
                Conclusion
              </a>
            </li>
            <li>
              <a
                href="#pcm-token-contract-security"
                className={activeItem === '#pcm-token-contract-security' ? S.active : ''}
                onClick={() => handleItemClick('#pcm-token-contract-security')}
              >
                PCM Token Contract Security
              </a>
            </li>
            <li>
              <a
                href="#disclaimers"
                className={activeItem === '#disclaimers' ? S.active : ''}
                onClick={() => handleItemClick('#disclaimers')}
              >
                Disclaimers
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Whitepaper
