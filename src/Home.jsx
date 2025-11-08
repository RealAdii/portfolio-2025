import { Link } from 'react-router-dom'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Home() {
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
        <div className="image-container">
          <img src={`${baseUrl}hehedp.jpg`} alt="placeholder" className="profile-image" />
        </div>
        
        <div className="content">
          <h2 className="subheading">hi, i'm adithya. i'm an engineer turned sales and marketing professional.</h2>
          
          <p className="paragraph">
            i started my first company at 14 when i rented out playstation games to my friends and made over 5 figures in revenue. i also played the piano and the trumpet, sang for the school band, did mimicry and even captained the football team. 
          </p>
          
          <p className="paragraph">
            these days i'm <a href="#" className="no-underline">driving sales and marketing for Reclaim Protocol</a> and <a href="#" className="no-underline">managing grants for ecosystems like circle, polygon, arbitrum on Questbook</a>. 
          </p>

          <p className="paragraph">
            i've lead the sales team at Reclaim and <span className="green-text">took revenues from ~$50k ARR to close to $1M ARR</span> in less than a year. i also changed gears and did marketing <span className="green-text">generating close to a million impressions, made developer content (50+ videos over a span of 2 months) and consistently generated almost 30-40 inbound leads</span> per month.
          </p>
          
          <p className="paragraph">
            in the past, i was an engineer at swiggy (biggest quick-commerce platform in india) and stripe where i realised i had an 'inner calling' for sales, product and marketing.
          </p>
          
          <p className="paragraph">
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

        <div className="footer">
          <p className="footer-text">
            p.s: if you wanna contact me book a slot here to say hi <a href="https://cal.com/zero-knowledge-verification/15min"></a>, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home

