import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
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
  }
]

function Testimonials() {
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
        <h1 className="main-heading">what founders say about working with me</h1>

        <div className="testimonials-page-grid">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-page-card"
            >
              <p className="testimonial-page-quote">"{testimonial.quote}"</p>
              <div className="testimonial-page-author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-page-avatar"
                />
                <span className="testimonial-page-name">{testimonial.name}, {testimonial.title}</span>
              </div>
            </a>
          ))}
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

export default Testimonials
