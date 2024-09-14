// 模組樣式
import S from './style.module.css'
// 鉤子函式
import { Link } from 'react-router-dom'
// PNG 圖檔
import about1_png from '../../assets/img/dao/about1.png'
import about2_png from '../../assets/img/dao/about2.png'
import icon1_png from '../../assets/img/dao/icon1.png'
import icon2_png from '../../assets/img/dao/icon2.png'
import icon3_png from '../../assets/img/dao/icon3.png'
import community_png from '../../assets/img/dao/community.png'
// 首頁
function Guild() {
  return (
    <>
      <main className={S.main}>
        <section className={S.section1}>
          <div className={S.left}>
            <div className={S.tag}>About Us</div>
            <h1>Vision and Goal of PCM Guild:</h1>
            <p>
              PCM Guild envisions a thriving, interconnected community within the PiChain Global
              ecosystem. Embracing decentralization and collaboration, we empower individuals to
              drive growth and innovation. Our structure includes Micro-Guilds, fostering
              specialized communities, and Regional Guilds, uniting local micro-guilds communities.
              Together, they form a dynamic network, advancing the PiChain ecosystem.
            </p>
            <div className={S.members}>
              <div>
                <h1>2M</h1>
                <div>Community members</div>
              </div>
              <div>
                <h1>90+</h1>
                <div>Regions worldwide</div>
              </div>
            </div>
          </div>
          <div className={S.right}>
            <img className={S.about} src={about1_png} />
          </div>
        </section>
        <section className={S.section2}>
          <div className={S.left}>
            <img className={S.about} src={about2_png} />
          </div>
          <div className={S.right}>
            <div className={S.tag}>Why PCM Guild?</div>
            <h1>PCM Guild: Fostering Community-Led Innovation</h1>
            <p>
              PCM Guild serves as a catalyst for community-led innovation within the PiChain Global
              ecosystem. Discover the transformative potential of PCM Guild and learn why it's the
              cornerstone for interconnected minds and collaborative contributions.
            </p>
            <hr />
            <div className={S.communities}>
              <div className={S.community}>
                <div>
                  <img className={S.icon} src={icon1_png} />
                </div>
                <div className={S.content}>
                  <div>Community Empowerment:</div>
                  <p>
                    PCM Guild provides a platform for community members to actively participate in
                    shaping the future of the PiChain Global Ecosystem. Every voice is valued,
                    ensuring inclusivity and collective involvement in driving growth and
                    innovation.
                  </p>
                </div>
              </div>
              <div className={S.community}>
                <div>
                  <img className={S.icon} src={icon2_png} />
                </div>
                <div className={S.content}>
                  <div>Interconnected Minds and Contributions:</div>
                  <p>
                    Experience a community-driven model that celebrates interconnected minds and
                    diverse contributions. PCM Guild encourages individuals to share ideas,
                    collaborate on projects, and contribute their unique skills and expertise to the
                    ecosystem's development.
                  </p>
                </div>
              </div>
              <div className={S.community}>
                <div>
                  <img className={S.icon} src={icon3_png} />
                </div>
                <div className={S.content}>
                  <div>Incentive Mechanisms:</div>
                  <p>
                    Engage with innovative incentive structures within PCM Guild. By actively
                    participating and contributing to the community, members have the opportunity to
                    be rewarded in PCM Tokens, fostering a thriving ecosystem of collaboration and
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={S.section3}>
          <h1>Roles of PCM Guild Committees</h1>
          <p>
            Explore these roles, contribute your skills, and become an integral part of PCM Guild.
          </p>
          <div className={S.cards}>
            <div>
              <div>Community Manager</div>
              <div>
                Ensure the smooth functioning of the community by coordinating daily operations.
                From organizing events to building and maintaining relationships, community managers
                play a pivotal role.
              </div>
            </div>
            <div>
              <div>Social Media Team</div>
              <div>
                Expand the community's reach and visibility on various platforms. Manage official
                social media accounts, share updates, and engage with community members through
                meaningful interactions.
              </div>
            </div>
            <div>
              <div>Content Creation Team</div>
              <div>
                An inclusive role open to all community members. Contribute to development, design,
                content creation, and event organization. Recognitions and rewards are facilitated
                through community governance.
              </div>
            </div>
            <div>
              <div>Education and Training Team</div>
              <div>
                Empower community members with knowledge on Web3 technology and the decentralized
                ecosystem. Organize online courses, seminars, and workshops to promote the practical
                application of Web3 technology.
              </div>
            </div>
            <div>
              <div>Community Maintenance Team</div>
              <div>
                Facilitate communication and interaction among community members. Manage various
                online social media groups, record community feedback, and contribute to education
                and training initiatives.
              </div>
            </div>
          </div>
        </section>
        <section className={S.section4}>
          <div className={S.left}>
            <h1>Embark on a journey of community building and innovation with PCM Guild!</h1>
            <img className={S.communityImg} src={community_png} />
          </div>
          <div className={S.right}>
            <h1>Unlock your community potential today!</h1>
            <ul>
              <li>
                Community Empowerment: Join PCM Guild to actively participate in shaping the future
                of the PiChain Global Ecosystem.
              </li>
              <li>
                Skill Development: Enhance your skills in media creation, education, community
                management, or business development.
              </li>
              <li>
                Global Network: Connect with like-minded individuals from diverse backgrounds and
                regions.
              </li>
              <li>
                Innovative Projects: Contribute to groundbreaking initiatives and projects within
                the blockchain and Web3 space.
              </li>
              <li>
                Earn Rewards: Engage in meaningful contributions and get rewarded with PCM Tokens.
              </li>
              <li>
                Make a Difference: Be part of a movement that empowers individuals and drives
                innovation in the decentralized world.
              </li>
            </ul>
            <button>Read More</button>
          </div>
        </section>
        <section className={S.section5}>
          <div>Join Us</div>
          <h1>PCM Guild Committee Application Requirements:</h1>
          <p>
            Embark on a rewarding journey by joining PCM Guild! We're seeking passionate individuals
            dedicated to the success of the PiChain Global Ecosystem and the blockchain industry.
            Here are the detailed requirements:
          </p>
          <ul>
            <li>
              Showcase your passion and a genuine eagerness to learn and actively contribute to the
              continuous development of the PiChain Global Ecosystem and blockchain industry.
            </li>
            <li>Demonstrate a strong understanding of Web3 concepts and technologies.</li>
            <li>
              Highlight any experience you have in community building, Web3 technologies, content
              creation, or hosting educational sessions like Twitter Spaces.
            </li>
            <li>
              Provide examples or projects where you've demonstrated your expertise in these areas.
            </li>
            <li>
              Emphasize any leadership roles you've held in the past, whether within the blockchain
              space or other domains.
            </li>
            <li>
              Strong communication skills, both written and verbal, are crucial for effective
              collaboration and community engagement.
            </li>
            <li>Application Process, Video Call, and Staking Requirement:</li>
            <li>
              After submitting your application, be prepared for a video call where we can get to
              know you better and discuss your thoughts on PCM Guild's mission. Please understand
              that successful applicants will undergo a Know Your Customer (KYC) process and a
              thorough review.
            </li>
            <li>
              The staking requirement (upon PCM token's mainnet launch) of 1000 PCM would be a
              commitment to your role within PCM Guild.
            </li>
            <li>
              Ready to shape the future of PCM Guild? Apply now and be an integral part of our
              community-driven innovation!
            </li>
          </ul>
          <hr />
          <button>Apply now</button>
        </section>
      </main>
    </>
  )
}

export default Guild
