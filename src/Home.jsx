import { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import ImageModal from './ImageModal'
import BackToTop from './BackToTop'
import { useScrollAnimation } from './useScrollAnimation'
import { trackCVDownload, trackEasterEgg, trackSocialMedia, trackExternalLink } from './analytics'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  // Scroll animations
  const [imageRef, imageVisible] = useScrollAnimation(0.1)
  const [headingRef, headingVisible] = useScrollAnimation(0.1, 100)
  const [content1Ref, content1Visible] = useScrollAnimation(0.1, 200)
  const [content2Ref, content2Visible] = useScrollAnimation(0.1, 300)
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
            <Link to="/content">marketing streak</Link>
            <Link to="/sales">what i think of sales</Link>
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
            <DarkModeToggle />
          </div>
        </nav>
      </header>

      <main className="main">
        <div
          ref={imageRef}
          className={`image-container scroll-fade-in ${imageVisible ? 'visible' : ''}`}
        >
          <img
            src={`${baseUrl}hehedp.jpg`}
            alt="placeholder"
            className="profile-image clickable"
            onClick={handleEasterEggClick}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="content">
          <h2
            ref={headingRef}
            className={`subheading scroll-slide-right ${headingVisible ? 'visible' : ''}`}
          >
            hi, i'm adithya. i'm an engineer turned sales and marketing professional.
          </h2>

          <p
            ref={content1Ref}
            className={`paragraph scroll-fade-in ${content1Visible ? 'visible' : ''}`}
          >
            i started my first company at 14 when i rented out playstation games to my friends and made over 5 figures in revenue. i also played the piano and the trumpet, sang for the school band, did mimicry and even captained the football team.
          </p>

          <p
            ref={content2Ref}
            className={`paragraph scroll-fade-in ${content2Visible ? 'visible' : ''}`}
          >
            these days i'm <a href="#" className="no-underline">driving sales and marketing for Reclaim Protocol</a> and <a href="#" className="no-underline">managing grants for ecosystems like circle, polygon, arbitrum on Questbook</a>.
          </p>

          <p
            ref={content3Ref}
            className={`paragraph scroll-fade-in ${content3Visible ? 'visible' : ''}`}
          >
            i've lead the sales team at Reclaim and <span className="green-text">took revenues from ~$50k ARR to close to $1M ARR</span> in less than a year. i also changed gears and did marketing <span className="green-text">generating close to a million impressions, made developer content (50+ videos over a span of 2 months) and consistently generated almost 30-40 inbound leads</span> per month.
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
            i'm now based out kerala, india, back to my roots after travelling the world (prev: thailand, singapore, dubai) 
          </p>
        </div>
          
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
            p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min" onClick={() => trackExternalLink('Cal.com', 'Calendar Booking')}>here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ" onClick={() => trackSocialMedia('Twitter')}>twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/" onClick={() => trackSocialMedia('LinkedIn')}>linkedin</a>
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

