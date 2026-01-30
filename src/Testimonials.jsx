import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const testimonials = [
  {
    quote: "adithya gave us a lay of the land on zktls in the early days. he is extremely persistent, hands-on, and has the necessary technical background to win us over as a customer purely off merit.",
    name: "ya3kov",
    title: "@ 3jane",
    twitter: "https://x.com/_yakovsky",
    avatar: "https://pbs.twimg.com/profile_images/1787863954762674176/f2KC9rsD_400x400.jpg"
  },
  {
    quote: "adithya from reclaim is the most persistent and high agency partner we've worked with. despite working in a different time-zone he stayed up all night during launch to firefight issues and make sure things are at 100%.",
    name: "art",
    title: "@ vana",
    twitter: "https://x.com/artieart88",
    avatar: "https://pbs.twimg.com/profile_images/1856676879526166528/q-b8KD5D_400x400.jpg"
  },
  {
    quote: "adithya is one of those rare guys that puts his all into what he does and regardless what hes faced with, he is just going to figure things out. doesnt matter that it isnt in the job description. doesnt matter if it isnt glamorous. doesnt matter if hes never done it before. hes just going to figure it out. especially today when intelligence is abundant, the most vital skill to look for in someone is their agency and a willingness to say 'why would this be a problem? ill get it done'.",
    name: "jean",
    title: "@ fondue",
    twitter: "https://x.com/BurntFondue",
    avatar: "https://pbs.twimg.com/profile_images/1919753835725103104/mA49-lyD_400x400.jpg"
  },
  {
    quote: "adithya has been a pleasure to work with and a valuable partner in supporting the onchain creator economy. he's helped me understand and use more than one reclaim product and has been extremely generous and responsive.",
    name: "bradley",
    title: "@ base",
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
    title: "@ zo world",
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
  },
  {
    quote: "if you want to see what 'bias for action' looks like in real-time, just watch adithya. he stands out as a genuine go-getter who understands the heartbeat of community better than anyone. beyond his marketing and sales expertise, adithya is a master at building authentic relationships quickly. he is the definition of high agency, and i'm constantly inspired by his ability to simply 'make things happen'.",
    name: "naresh",
    title: "@ aptos",
    twitter: "https://x.com/NareshKx",
    avatar: "https://unavatar.io/x/NareshKx"
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
              className="book-call-btn"
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

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://cal.com/zero-knowledge-verification/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="cal-button"
          >
            talk to me
          </a>
        </div>

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
