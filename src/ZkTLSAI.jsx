import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function ZkTLSAI() {
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
            <a href={`${baseUrl}cv.pdf`} download="adithya_cv.pdf" className="cv-download-btn">
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

      <main className="main">
        <div className="content">
          <Link to="/blog" className="blog-back-link">&larr; back to blog</Link>
          <h2 className="main-heading">zkTLS will fail without AI.</h2>

          <p className="blog-meta">
            <a href="https://x.com/adiiHQ" target="_blank" rel="noopener noreferrer">adithya</a> · may 8, 2025
          </p>

          <p className="paragraph">
            for anyone new, 'zktls' is a clever hack that allows 'https' data to be verifiable, in other words - it allows you get access to user owned data from any website in a permission-less manner.
          </p>

          <h3 className="category-heading"><strong>why should you listen to me?</strong></h3>
          <p className="paragraph">
            i've been doing sales + marketing for the leading zktls solution Reclaim for about a year now and i've talked to hundreds of companies about adopting the tech.
          </p>

          <h3 className="category-heading"><strong>the problem right now..</strong></h3>
          <p className="paragraph">
            zkTLS is not scalable. if you take a look into requirements of companies who are building around verifiability and data they're always looking to expand. for eg; someone building a dataDAO would love to have access to more data sources, someone building a creator platform would love to have access to multiple params/ data points from various consumer apps, someone building a food delivery app would love to have access to more e-commerce data.
          </p>

          <p className="paragraph">
            let me share a screenshot of requirements here from a partner who's building a dataDAO.
          </p>

          <p className="paragraph">
            these are websites that have JSON/ HTML responses etc. this would ideally takes weeks to build out for the customer which is a huge bummer if they're looking to go live very soon.
          </p>

          <p className="paragraph">
            now, imagine you're going to a academic verification company who's looking to expand into APAC with 5000+ university - this would take months to build out.
          </p>

          <h3 className="category-heading"><strong>how Reclaim solved this</strong></h3>
          <p className="paragraph">
            Reclaim solved this problem by building out a developer portal where you can go and make these data providers. the only other zkTLS provider doing this is <a href="https://x.com/primus_labs" target="_blank" rel="noopener noreferrer">@primus_labs</a> (kudos!) but they're still yet to support HTML responses.
          </p>

          <p className="paragraph">
            at Reclaim, even though we supported every format it was still difficult for us to scale which is why we had to integrate an AI into our devtool to auto suggest data points that's useful to not let the user individually go through every response but even with a flow where even a non-technical person can come and make a data provider in ~10mins it was still impossible to scale to a number like 5000 universities in a small amount of time.
          </p>

          <p className="paragraph">
            when compared to legacy systems that will take years + hire new talent + spend $ to do this, zkTLS allows you to do this in months (i love that) but with the pace the world is moving we have to optimize to make things scale quickly and more efficiently.
          </p>

          <h3 className="category-heading"><strong>AI making the providers</strong></h3>
          <p className="paragraph">
            so we thought about it - if a non-developer can figure out the JSON Path or Xpath to set in the provider then an AI can definitely do it. so now we're actively working on getting rid of this bottleneck by letting AI making the providers.
          </p>

          <p className="paragraph">
            another bottleneck was the fact that responses from website changes (rarely). this happens more for a website with a HTML response. when it does happen these data providers stay broken until we step in and fix.
          </p>

          <p className="paragraph">
            when you're optimizing to be the best that's terrible for everyone. the changes required to fix these are pretty small which is why we've delegated it to the AI now (still wip).
          </p>

          <p className="paragraph">
            this is kinda like how the saying goes - if you're not using AI you're going to be replaced by somebody using AI.
          </p>

          <p className="paragraph">
            a lot of this is working but i'd still say that they are wip. there is still work to be done to make this stable and most importantly privacy preserving.
          </p>

          <h3 className="category-heading"><strong>a lil hype train for Reclaim :)</strong></h3>
          <p className="paragraph">
            at Reclaim, we're always trying to stay as the leading zkTLS provider in the space which is why we've comprehensive docs supporting every single tech stack or chain you can think of and a huge list of data sources in our devtool.
          </p>

          <p className="paragraph">
            we're also coming out with our browser extension pretty soon which means now anyone using Reclaim will have 3 options.
            <ul>
              <li>browser extension if your audience is desktop only</li>
              <li>app-clip/ instant app for anyone who prefer not having to download anything.</li>
              <li>in-app native experiences (best UX) for anyone building on mobile apps.</li>
            </ul>
          </p>

          <p className="paragraph">
            keeping all that aside, i think i'm proud to be working with such promising tech at a stage where the masses have started adopting it (talking about google's identity wallet here)
          </p>

          <p className="paragraph">
            so, if you're building on zkTLS and want to chat i'd love to help in any way possible.
          </p>
        </div>

        <a
          href="https://cal.com/adithya-dinesh-6d6vow/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="cal-button"
        >
          talk to me
        </a>

        <div className="footer">
          <p className="footer-text">
            p.s: if you wanna contact me book a slot <a href="https://cal.com/adithyadinesh/30min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
      </main>

      <BackToTop />
    </div>
  )
}

export default ZkTLSAI
