import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Photobooth() {
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
        <h1 className="main-heading">photobooth</h1>
        
        <div className="content">
          <div className="photobooth-grid">
          <div className="photo-item">
            <img src={`${baseUrl}firstpod.png`} alt="podcast" className="photobooth-image" />
            <p className="photo-caption">podcast w/ nader</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}zo.png`} alt="zo world" className="photobooth-image" />
            <p className="photo-caption">technical session at zo world</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}solanahackerhouse.png`} alt="solana" className="photobooth-image" />
            <p className="photo-caption">speaker at solana hacker house</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}hashedhouse.png`} alt="hashed house" className="photobooth-image" />
            <p className="photo-caption">speaker at hashed house</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}singapore.JPG`} alt="singapore" className="photobooth-image" />
            <p className="photo-caption">token2049 had my first irl close (that's maddy - founder of reclaim/questbook)</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}devconnect.JPG`} alt="devconnect" className="photobooth-image" />
            <p className="photo-caption">i walked around with a whiteboard screaming zktls</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}college.png`} alt="college" className="photobooth-image" />
            <p className="photo-caption">got called back to college</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}harsha.JPG`} alt="harsha" className="photobooth-image" />
            <p className="photo-caption">harsha, founder of reclaim/questbook - someone i really look up to</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}IITdelhi.jpg`} alt="iit delhi" className="photobooth-image" />
            <p className="photo-caption">dropped out of engineering, got called back to iit as a mentor</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}dubai.JPG`} alt="dubai" className="photobooth-image" />
            <p className="photo-caption">sales repping in dubai</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}40folkswhiteboarding.png`} alt="whiteboarding" className="photobooth-image" />
            <p className="photo-caption">packed 30+ folks in an airbnb and did a whiteboarding session</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}GFF.JPG`} alt="gff" className="photobooth-image" />
            <p className="photo-caption">web2 sales because we hit the ceiling in web3</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}communitysesh.jpeg`} alt="community session" className="photobooth-image" />
            <p className="photo-caption">community session</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}oktooffice.png`} alt="okto office" className="photobooth-image" />
            <p className="photo-caption">fun ad shot at the coindcx office for questbook!</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}delhi.png`} alt="delhi" className="photobooth-image" />
            <p className="photo-caption">live coding session admist 400aqi</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}solanablr.png`} alt="solana blr" className="photobooth-image" />
            <p className="photo-caption">got called back again to solana depin summit</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}chennai.png`} alt="chennai" className="photobooth-image" />
            <p className="photo-caption">chennai meetup</p>
          </div>

          <div className="photo-item">
            <img src={`${baseUrl}merch.png`} alt="merch" className="photobooth-image" />
            <p className="photo-caption">i make sure my community has good style</p>
          </div>
        </div>
        </div>

        <a
          href="https://cal.com/zero-knowledge-verification/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="cal-button"
        >
          talk to me
        </a>

        <div className="footer">
          <p className="footer-text">
          p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
      </main>

      <BackToTop />
    </div>
  )
}

export default Photobooth

