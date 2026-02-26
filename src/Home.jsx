import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageModal from './ImageModal'
import BackToTop from './BackToTop'
import { useScrollAnimation } from './useScrollAnimation'
import { trackCVDownload, trackEasterEgg, trackSocialMedia, trackExternalLink } from './analytics'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const avatars = [
  { name: "harsha", avatar: "https://unavatar.io/x/HarshaKaramchat", twitter: "https://x.com/HarshaKaramchat" },
  { name: "ya3kov", avatar: "https://pbs.twimg.com/profile_images/1787863954762674176/f2KC9rsD_400x400.jpg", twitter: "https://x.com/_yakovsky" },
  { name: "art", avatar: "https://pbs.twimg.com/profile_images/1856676879526166528/q-b8KD5D_400x400.jpg", twitter: "https://x.com/artieart88" },
  { name: "alex", avatar: "https://pbs.twimg.com/profile_images/1941511484305027072/KPzCqsHz_400x400.jpg", twitter: "https://x.com/almacium" },
  { name: "tom", avatar: "https://pbs.twimg.com/profile_images/1332447889797357568/UNq34Cef_400x400.jpg", twitter: "https://x.com/TomasRiordan" },
  { name: "sidd", avatar: "https://pbs.twimg.com/profile_images/1899000421735436288/kvUWDUuw_400x400.jpg", twitter: "https://x.com/siddjain99" },
  { name: "abdul", avatar: "https://unavatar.io/x/abdul_rashid_r", twitter: "https://x.com/abdul_rashid_r" },
  { name: "bradley", avatar: "https://pbs.twimg.com/profile_images/1407865444430614528/HCEKSw0T_400x400.jpg", twitter: "https://x.com/brad_or_bradley" },
  { name: "naresh", avatar: "https://unavatar.io/x/NareshKx", twitter: "https://x.com/NareshKx" },
  { name: "srijith", avatar: "https://unavatar.io/x/Srijith_Padmesh", twitter: "https://x.com/Srijith_Padmesh" },
  { name: "gio", avatar: "https://pbs.twimg.com/profile_images/1948726629238247424/rUxAfGsb_400x400.jpg", twitter: "https://x.com/0xlutro" },
  { name: "jean", avatar: "https://pbs.twimg.com/profile_images/1919753835725103104/mA49-lyD_400x400.jpg", twitter: "https://x.com/BurntFondue" },
  { name: "samurai", avatar: "https://pbs.twimg.com/profile_images/1921528920543031296/FKqFi2Ck_400x400.jpg", twitter: "https://x.com/Samuraizann" },
]

function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  // Scroll animations
  const [imageRef, imageVisible] = useScrollAnimation(0.1)
  const [headingRef, headingVisible] = useScrollAnimation(0.1, 100)
  const [content1Ref, content1Visible] = useScrollAnimation(0.1, 200)
  const [content2Ref, content2Visible] = useScrollAnimation(0.1, 300)
  const [alterEgoRef, alterEgoVisible] = useScrollAnimation(0.1, 350)
  const [content3Ref, content3Visible] = useScrollAnimation(0.1, 400)
  const [principlesRef, principlesVisible] = useScrollAnimation(0.1, 500)
  const [footerRef, footerVisible] = useScrollAnimation(0.1, 600)

  const handleEasterEggClick = () => {
    trackEasterEgg()
    setModalOpen(true)
  }

  const handleCVDownload = () => {
    trackCVDownload()
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="nav-links">
            <Link to="/">home</Link>
            <Link to="/content">content</Link>
            <Link to="/blog">blog</Link>
            <Link to="/testimonials">testimonials</Link>
            <Link to="/photobooth">photobooth</Link>
          </div>
          <div className="nav-actions">
            <a
              href={`${baseUrl}cv.pdf`}
              download="adithya_cv.pdf"
              className="cv-download-btn"
              onClick={handleCVDownload}
            >
              <span>↓</span>
              <span>cv</span>
            </a>
            <a
              href="https://cal.com/adithyadinesh/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="book-call-btn"
            >
              book call
            </a>
          </div>
        </nav>
      </header>

      <div className="avatar-ticker-section">
        <Link to="/testimonials" className="avatar-ticker-link">
          <span className="avatar-ticker-text">read what founders have to say about me</span>
          <div className="avatar-ticker-track">
            <div className="avatar-ticker-scroll">
              {[...avatars, ...avatars].map((person, i) => (
                <img key={i} src={person.avatar} alt={person.name} className="avatar-ticker-img" />
              ))}
            </div>
          </div>
        </Link>
      </div>

      <main className="main">
        <div className="content">
          <h2
            ref={headingRef}
            className={`subheading scroll-slide-right ${headingVisible ? 'visible' : ''}`}
          >
            hi, i'm adithya.
          </h2>

          <p
            ref={content1Ref}
            className={`paragraph scroll-fade-in ${content1Visible ? 'visible' : ''}`}
          >
            i started my first company at 14 when i rented out playstation games to my friends and made over 5 figures in revenue.
          </p>

          <p
            ref={content2Ref}
            className={`paragraph scroll-fade-in ${content2Visible ? 'visible' : ''}`}
          >
            previously i led the sales team at Reclaim (YC) and Questbook to <span className="green-text">more than $1M ARR in 7 months</span>. i also drived GTM campaigns that did <span className="green-text">more ~10M in impressions</span> and built a content engine that did <span className="green-text">~50 inbounds a month</span>. i also managed grants and onboarded ecosystems like <span className="green-text">Circle, Polygon, Arbitrum</span>.
          </p>

          <p className="paragraph">
            in the past, i was an engineer at swiggy (biggest quick-commerce platform in india) and stripe where i realised i had an 'inner calling' for sales, product and marketing.
          </p>

          <p
            ref={principlesRef}
            className={`paragraph scroll-fade-in ${principlesVisible ? 'visible' : ''}`}
          >
            <strong>here are principles I've distilled over the years</strong><br />
            <ul>
                <li>people first and trust is the foundation.</li>
                <li>focus on few things really well</li>
                <li><a href="https://www.youtube.com/watch?v=lZoBsFv0B9E">good ideas come from anywhere.</a></li>
                <li><a href="https://seths.blog/2016/07/no-one-is-unreasonable/">no one is unreasonable</a></li>
                <li><a href="https://www.sec.gov/Archives/edgar/data/1018724/000119312518121161/d456916dex991.htm">demand excellence of myself and others.</a></li>
                <li>compromise culls bold ideas. disagree and commit.</li>
            </ul>
          </p>

          <p className="paragraph">
            i'm now based out kerala, india, back to my roots after travelling the world (prev: thailand, singapore, dubai). i also played the piano and the trumpet, sang for the school band, did mimicry and even captained the football team.
          </p>
        </div>

        <div
          ref={alterEgoRef}
          className={`alter-ego-section scroll-fade-in ${alterEgoVisible ? 'visible' : ''}`}
        >
          <h3 className="alter-ego-heading">alter-ego <a href="https://github.com/RealAdii" target="_blank" rel="noopener noreferrer" className="alter-ego-github"><svg className="alter-ego-github-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> @RealAdii</a></h3>
          <p className="alter-ego-subtitle">a few of my works (my engineer alter ego)</p>
          <div className="alter-ego-grid">
            <div className="alter-ego-card">
              <span className="alter-ego-name">rafflepunk</span>
              <span className="alter-ego-desc">a platform that lets you create a raffle instantly or participate in one. (ps: it's onchain on starknet built using starkzap)</span>
            </div>
            <div className="alter-ego-card">
              <span className="alter-ego-name">sovereign</span>
              <span className="alter-ego-desc">AI whistleblowing platform where you can anonymously report anything without revealing your identity (possible because of zero-knowledge proofs via <a href="https://reclaimprotocol.org/" target="_blank" rel="noopener noreferrer">reclaim protocol</a>)</span>
            </div>
            <div className="alter-ego-card">
              <span className="alter-ego-name">creator lending</span>
              <span className="alter-ego-desc">creator lending marketplace where creators can borrow against their revenue on social media platforms.</span>
            </div>
            <div className="alter-ego-card">
              <span className="alter-ego-name">morning wire</span>
              <span className="alter-ego-desc">cron that sends me the top wall street news, AI tweets from x, top 5 yc companies (investor memo style) and sends me a hacker news style newsletter via email everyday.</span>
            </div>
            <div className="alter-ego-card">
              <span className="alter-ego-name">free notion</span>
              <span className="alter-ego-desc">clone of notion that runs on local machine and is open source.</span>
            </div>
            <div className="alter-ego-card">
              <span className="alter-ego-name">reclaim-gmail-zkp</span>
              <span className="alter-ego-desc">verify your gmail inbox without revealing your email via zero-knowledge proofs.</span>
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          className={`image-container scroll-fade-in ${imageVisible ? 'visible' : ''}`}
        >
          <img
            src={`${baseUrl}hehedp.jpg`}
            alt="Adithya Dinesh"
            className="profile-image clickable"
            onClick={handleEasterEggClick}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <a
          href="https://cal.com/adithyadinesh/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cal-button"
          onClick={() => trackExternalLink('Cal.com', 'Calendar Button')}
        >
          talk to me
        </a>

        <p className="paragraph">
          <br />
          cheers,<br />
          adithya
        </p>

        <div
          ref={footerRef}
          className={`footer scroll-fade-in ${footerVisible ? 'visible' : ''}`}
        >
          <p className="footer-text">
            p.s: if you wanna contact me book a slot <a href="https://cal.com/adithyadinesh/30min" onClick={() => trackExternalLink('Cal.com', 'Calendar Booking')}>here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ" onClick={() => trackSocialMedia('Twitter')}>twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/" onClick={() => trackSocialMedia('LinkedIn')}>linkedin</a>
          </p>
        </div>
      </main>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={`${baseUrl}easter-egg.jpg`}
      />

      <BackToTop />
    </div>
  )
}

export default Home
