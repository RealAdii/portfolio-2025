import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import VideoGrid from './VideoGrid'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Content() {
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
            <a href={`${baseUrl}cv.pdf`} download="adithya_cv.pdf" className="cv-download-btn">
              <span>↓</span>
              <span>cv</span>
            </a>
            <a
              href="https://cal.com/zero-knowledge-verification/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-btn"
            >
              book call
            </a>
          </div>
        </nav>
      </header>

      <main className="main">
        <h1 className="main-heading">my virality hack was consistency.</h1>

        <div className="content">

          <p className="paragraph">
            as someone who consumed a lot of content on the internet, i've always been drawn to creating content myself but never got the chance.
            <br />
            we reached an injunction at Reclaim Protocol where we had to tap into an inbound channel to generate leads for us. i stepped up and immediately said yes to marketing one of the most technical products on the internet.
          </p>

          <VideoGrid />

          <div className="footer">
          <p className="footer-text">
            p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
        </div>
      </main>

      <BackToTop />
    </div>
  )
}

export default Content

