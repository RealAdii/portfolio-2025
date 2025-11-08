import { Link } from 'react-router-dom'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Photobooth() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/">home</Link>
          <Link to="/content">marketing streak</Link>
          <Link to="/sales">what i think of sales</Link>
          <Link to="/photobooth">photobooth</Link>
        </nav>
      </header>

      <main className="main">
        <h1 className="main-heading">photobooth</h1>
        
        <div className="content">
          <div className="photobooth-grid">
          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}firstpod.png`} alt="photo 1" className="photobooth-image" />
            <p className="photo-caption">podcast w/ nader</p>
          </div>
          
          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}solanahackerhouse.png`} alt="photo 2" className="photobooth-image photobooth-image-contain" />
            <p className="photo-caption">speaker at solana hacker house</p>
          </div>
          
          <div className="photo-item photo-item-large">
            <img src={`${baseUrl}zo.png`} alt="photo 3" className="photobooth-image" />
            <p className="photo-caption">technical session at zo world</p>
          </div>
          
          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}hashedhouse.png`} alt="photo 4" className="photobooth-image" />
            <p className="photo-caption">speaker at hashed house</p>
          </div>
          
          <div className="photo-item photo-item-wide">
            <img src={`${baseUrl}college.png`} alt="photo 5" className="photobooth-image photobooth-image-contain" />
            <p className="photo-caption">got called back to college</p>
          </div>
          
          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}chennai.png`} alt="photo 6" className="photobooth-image" />
            <p className="photo-caption">regular size</p>
          </div>

          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}singapore.JPG`} alt="singapore" className="photobooth-image" />
            <p className="photo-caption">Token2049 had my first IRL close</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}devconnect.JPG`} alt="devconnect" className="photobooth-image" />
            <p className="photo-caption">i walked around with a whiteboard screaming zktls</p>
          </div>

          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}communitysesh.jpeg`} alt="community session" className="photobooth-image" />
            <p className="photo-caption">community session</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}harsha.JPG`} alt="harsha" className="photobooth-image photobooth-image-contain" />
            <p className="photo-caption">harsha, founder of Reclaim/ Questbook - someone i really look up to</p>
          </div>
          
          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}IITdelhi.jpg`} alt="photo 7" className="photobooth-image" />
            <p className="photo-caption">dropped out of engineering, got called back to IIT as a mentor.</p>
          </div>
          
          <div className="photo-item photo-item-tall">
            <img src={`${baseUrl}dubai.JPG`} alt="photo 8" className="photobooth-image" />
            <p className="photo-caption">sales repping in dubai</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}GFF.JPG`} alt="photo 9" className="photobooth-image" />
            <p className="photo-caption">web2 sales because we hit the ceiling in web3</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}oktooffice.png`} alt="photo 9" className="photobooth-image" />
            <p className="photo-caption">fun ad shot at the coinDCX office for questbook!</p>
          </div>

          <div className="photo-item photo-item-wide">
            <img src={`${baseUrl}40folkswhiteboarding.png`} alt="whiteboarding event" className="photobooth-image" />
            <p className="photo-caption">packed 30+ folks in an airbnb and did a whiteboarding session</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}delhi.png`} alt="delhi" className="photobooth-image" />
            <p className="photo-caption">live coding session admist 400AQI</p>
          </div>

          <div className="photo-item photo-item-small">
            <img src={`${baseUrl}solanablr.png`} alt="solana blur" className="photobooth-image" />
            <p className="photo-caption">got called back again to solana DEPIN summit</p>
          </div>

          <div className="photo-item photo-item-medium">
            <img src={`${baseUrl}merch.png`} alt="merch" className="photobooth-image photobooth-image-contain" />
            <p className="photo-caption">i make sure my community has good style</p>
          </div>
        </div>
        </div>

        <div className="footer">
          <p className="footer-text">
          p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Photobooth

