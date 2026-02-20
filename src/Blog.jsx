import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const posts = [
  {
    title: "zkTLS will fail without AI.",
    description: "zktls is not scalable yet. here's how AI is solving the bottleneck and why it matters for the future of verifiable data.",
    link: "/blog/zktls-ai"
  },
  {
    title: "if you're working in crypto - pivot to AI.",
    description: "pivot to AI doesn't mean leave crypto. it means let AI infiltrate every workflow, every decision and every output.",
    link: "/blog/pivot-to-ai"
  },
  {
    title: "soft launching my valentine.",
    description: "all you need is claude projects. $20/month for a content engine, a marketing brain, and a sales weapon.",
    link: "/blog/valentine"
  },
  {
    title: "how to get started with sales 101",
    description: "nobody teaches you how to sell. we've done over $1m arr now. here's everything i wish someone told me at the start.",
    link: "/blog/sales-101"
  },
  {
    title: "how to sell without being 'salesy'",
    description: "the anti-sales sales guide for founders who hate selling. the best sales doesn't feel like sales at all.",
    link: "/blog/anti-sales"
  },
  {
    title: "what i think of sales + tips",
    description: "b2b sales is a three-step art form — prospecting, closing, and customer success. here's how i approach each one.",
    link: "/blog/sales-tips"
  }
]

function Blog() {
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
        <h1 className="main-heading">i write about what i find interesting</h1>

        <div className="blog-posts-list">
          {posts.map((post, index) => (
            <Link key={index} to={post.link} className="blog-post-card">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-description">{post.description}</p>
            </Link>
          ))}
        </div>

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

export default Blog
