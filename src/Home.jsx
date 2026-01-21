import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageModal from './ImageModal'
import BackToTop from './BackToTop'
import { useScrollAnimation } from './useScrollAnimation'
import { trackCVDownload, trackEasterEgg, trackSocialMedia, trackExternalLink } from './analytics'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const testimonials = [
  {
    quote: "adithya gave us a lay of the land on zktls in the early days. he is extremely persistent, hands-on, and has the necessary technical background to win us over as a customer purely off merit.",
    name: "ya3kov",
    title: "founder @ 3jane",
    twitter: "https://x.com/_yakovsky",
    avatar: "https://pbs.twimg.com/profile_images/1787863954762674176/f2KC9rsD_400x400.jpg"
  },
  {
    quote: "adithya from reclaim is the most persistent and high agency partner we've worked with. despite working in a different time-zone he stayed up all night during launch to firefight issues and make sure things are at 100%.",
    name: "art",
    title: "founder @ vana",
    twitter: "https://x.com/artieart88",
    avatar: "https://pbs.twimg.com/profile_images/1856676879526166528/q-b8KD5D_400x400.jpg"
  },
  {
    quote: "appreciate all you've done this year and all your support. i know its going to be a big year for you. grind always pays off.",
    name: "jean",
    title: "founding member @ xion",
    twitter: "https://x.com/BurntFondue",
    avatar: "https://pbs.twimg.com/profile_images/1919753835725103104/mA49-lyD_400x400.jpg"
  },
  {
    quote: "you've already been very helpful, once i have the prototype working in prod and can share internally i will let your team know how helpful you've been.",
    name: "bradley",
    title: "creator lead @ base",
    twitter: "https://x.com/brad_or_bradley",
    avatar: "https://pbs.twimg.com/profile_images/1407865444430614528/HCEKSw0T_400x400.jpg"
  },
  {
    quote: "do you even sleep?",
    name: "gio",
    title: "@ sophon",
    twitter: "https://x.com/0xlutro",
    avatar: "https://pbs.twimg.com/profile_images/1948726629238247424/rUxAfGsb_400x400.jpg"
  },
  {
    quote: "you have a light within you keep harnessing it and follow your heart.",
    name: "samurai",
    title: "director @ zo world",
    twitter: "https://x.com/Samuraizann",
    avatar: "https://pbs.twimg.com/profile_images/1921528920543031296/FKqFi2Ck_400x400.jpg"
  },
  {
    quote: "adithya is exceptionally responsive, communicates clearly, and reliably coordinates his team to deliver fixes quickly. someone i could always count on when it mattered most.",
    name: "alex",
    title: "@ clipstake",
    twitter: "https://x.com/almacium",
    avatar: "https://pbs.twimg.com/profile_images/1941511484305027072/KPzCqsHz_400x400.jpg"
  },
  {
    quote: "adithya has been a standout point of contact at reclaim. he is extremely reliable, sharp, calm under pressure, and consistently gets even the most complex integrations moving forward with speed, clarity, and thoughtful support.",
    name: "tom",
    title: "@ earnos",
    twitter: "https://x.com/TomasRiordan",
    avatar: "https://pbs.twimg.com/profile_images/1332447889797357568/UNq34Cef_400x400.jpg"
  },
  {
    quote: "what stood out most was his proactive approach and genuine customer-first mindset. adithya builds trust quickly, understands context fast, and adapts his support to the specific challenges you're facing. he doesn't just react to issues — he anticipates them, brings options to the table, and follows through until things are actually solved.",
    name: "sidd",
    title: "@ suave money inc & phoenix market",
    twitter: "https://x.com/siddjain99",
    avatar: "https://pbs.twimg.com/profile_images/1899000421735436288/kvUWDUuw_400x400.jpg"
  },
  {
    quote: "adithya is a true go-getter—empathetic enough to deeply understand problems and persistent enough to see solutions through. he has a strong entrepreneurial mindset.",
    name: "anonymous",
    title: "@ p2p.me",
    twitter: "https://p2p.me",
    avatar: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='black'/></svg>"
  }
]

function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLeft, setShowLeft] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setShowLeft((prev) => !prev)
        setIsVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
            <Link to="/content">content bank</Link>
            <Link to="/sales">sales 101</Link>
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
              href="https://cal.com/zero-knowledge-verification/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="book-call-btn"
            >
              book call
            </a>
          </div>
        </nav>
      </header>

      <div className={`floating-testimonial ${showLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}>
        <a href={testimonials[currentIndex].twitter} target="_blank" rel="noopener noreferrer">
          <p className="floating-quote">"{testimonials[currentIndex].quote}"</p>
          <div className="floating-author">
            <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="floating-avatar" />
            <span className="floating-name">{testimonials[currentIndex].name}, {testimonials[currentIndex].title}</span>
          </div>
        </a>
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
            these days i'm <a href="#" className="no-underline">driving sales and marketing for Reclaim Protocol</a> and <a href="#" className="no-underline">managing grants for ecosystems like circle, polygon, arbitrum on Questbook</a>.
          </p>

          <p
            ref={content3Ref}
            className={`paragraph scroll-fade-in ${content3Visible ? 'visible' : ''}`}
          >
            i lead the sales team at Reclaim and <span className="green-text">took revenues from ~$50k ARR to close to $1M ARR</span> in less than a year. i also changed gears and did marketing <span className="green-text">creating a $1M sales pipeline every month by creating millions of impressions on socials</span> creating story telling videos, deeply technical content and fun quirky ads and podcasts.
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

        <a
          href="https://cal.com/zero-knowledge-verification/15min"
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
