import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function PivotToAI() {
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
          <h2 className="main-heading">if you're working in crypto - pivot to AI.</h2>

          <p className="blog-meta">
            <a href="https://x.com/adiiHQ" target="_blank" rel="noopener noreferrer">adithya</a> · feb 12
          </p>

          <p className="paragraph">
            <a href="https://x.com/KyleSamani" target="_blank" rel="noopener noreferrer">@KyleSamani</a> stepped back from multicoin capital. <a href="https://x.com/dabit3" target="_blank" rel="noopener noreferrer">@dabit3</a> resigned from eigen labs. akshay BD stepped down from solana foundation. (all very scary)
          </p>

          <p className="paragraph">
            but the pivot i'm talking about is not "pivot to AI" as in leave crypto. pivot to AI as in let it infiltrate every single process you run including every workflow, every decision and every output.
          </p>

          <p className="paragraph">
            y'all must've read the 'something big is happening' article by <a href="https://x.com/mattshumer_" target="_blank" rel="noopener noreferrer">@mattshumer_</a> that's been going viral on X. everything he wrote about is true. your roles will be obsolete and here's a few things you can do to pivot to AI if you're new.
          </p>

          <h3 className="category-heading"><strong>stop typing to LLMs</strong></h3>
          <p className="paragraph">
            first thing: stop typing to LLMs. use <a href="https://x.com/WisprFlow" target="_blank" rel="noopener noreferrer">@WisprFlow</a> and talk to claude instead. your brain produces ideas 3-4x faster through speech than through a keyboard. every time you sit there typing out a prompt you're bottlenecking your own throughput. (i'm a relatively fast typer - i average 100+WPM but text-speech has made me go to around 200WPM or higher)
          </p>

          <h3 className="category-heading"><strong>claude projects with persistent context</strong></h3>
          <p className="paragraph">
            set up claude projects with persistent context for every major work-stream. one for leadgen. one for creating content. one for GTM. one for research. each one carries the full history of what you're building so you never start from zero. the difference between a cold prompt and a project with 50 conversations of context is the difference between explaining your company to a stranger vs talking to someone who was in every meeting.
          </p>

          <h3 className="category-heading"><strong>MCPs and connectors</strong></h3>
          <p className="paragraph">
            now MCPs and connectors - this is the most easiest thing to setup.
          </p>
          <p className="paragraph">
            use <a href="https://x.com/Context7AI" target="_blank" rel="noopener noreferrer">@Context7AI</a> to pipe any documentation/ website directly into claude. if you're building on any protocol, claude should have the full docs living in your workflow. connect <a href="https://x.com/excalidraw" target="_blank" rel="noopener noreferrer">@excalidraw</a> MCP so claude generates architecture diagrams, user flows, system designs from a conversation. you describe what you want through whisper flow, claude builds the diagram, you can now iterate in seconds. plug in github MCP so claude has full visibility into your codebase and reviews PRs with actual repo context. slack MCP so it can search and synthesize your team's conversations. the pattern is simple: every tool you use daily should be connected to your AI. if there's a wall between claude and your data, you're doing manual labor that a connector eliminates in seconds.
          </p>

          <h3 className="category-heading"><strong>claude code for MVPs</strong></h3>
          <p className="paragraph">
            claude code is another one. use it to spin up MVPs for customer demos in minutes. someone on a sales call says "can you show me what X would look like?" you can have a working prototype by end of day. i've personally created atleast ~200 extremely personalized demos in a span of 1-2hours using a claude skill i created. the workflow: whisper flow your product spec to a claude project -{'>'} claude code generates the scaffolding -{'>'} you iterate with natural language -{'>'} deploy a preview link -{'>'} send it to the prospect same day or even pre-call/ on the call. speed is a moat now.
          </p>

          <h3 className="category-heading"><strong>pipeline automation</strong></h3>
          <p className="paragraph">
            for pipeline: clay + phantombuster + claude is an insane stack. <a href="https://x.com/officialpbuster" target="_blank" rel="noopener noreferrer">@phantombuster</a> scrapes your target accounts from linkedin and twitter. <a href="https://x.com/clay" target="_blank" rel="noopener noreferrer">@clay</a> enriches with firmographic and technographic data - export it as a csv and feed it to claude to write hyper-personalized outreach based on the enriched profiles. not "hey {'{'}<span>first_name</span>{'}'}" personalization. actual context-aware messages that reference their recent posts, their tech stack, their funding round. 200 messages that each read like you spent 10 minutes researching the person. generated in 20 minutes. pair it with automated follow-up sequences and your pipeline runs while you sleep.
          </p>

          <h3 className="category-heading"><strong>daily intelligence briefing</strong></h3>
          <p className="paragraph">
            set up cron jobs that act as your daily intelligence briefing. pull from RSS feeds, twitter lists, YC, crunchbase, on-chain analytics - filtered for what you actually care about. AI, fintech, crypto, consumer, startups. let your AI summarize it into a 5-minute read every morning.
          </p>

          <h3 className="category-heading"><strong>content creation at scale</strong></h3>
          <p className="paragraph">
            and if you're a creator this gets even more insane. iterate your video scripts in claude until they're tight, then clone your voice in elevenlabs and generate voiceovers without ever sitting in front of a mic. suno AI can now produce broadcast-quality audio from a text prompt. you're not licensing stock music anymore. you're generating exactly what you need in 30 seconds.
          </p>
          <p className="paragraph">
            record a podcast on <a href="https://x.com/RiversidedotFM" target="_blank" rel="noopener noreferrer">@RiversidedotFM</a> let it auto-edit the dead air and filler words, then generate clips optimized for shorts, reels, and tiktok. you can do this in minutes without any prior knowledge.
          </p>
          <p className="paragraph">
            create a heygen avatar of yourself that can deliver content in 40 languages while you sleep. your face. your voice. your mannerisms. producing videos you never had to film. scale yourself without scaling your time.
          </p>

          <h3 className="category-heading"><strong>build a content engine for yourself</strong></h3>
          <p className="paragraph">
            now here's the one most people never think about: build a content engine for yourself.
          </p>
          <p className="paragraph">
            take every tweet you've ever written. every thread. every long-form post. every reply that hit. feed all of it into a claude project as context. add the writers and thinkers you look up to their writing style, their frameworks, how they structure arguments, the patterns that make their content resonate. your favorite founders on twitter. the essayists you keep going back to. the accounts whose threads you screenshot. all of that becomes context.
          </p>
          <p className="paragraph">
            now you have an AI that doesn't just write generic content. it writes in your voice, informed by the people who shaped your thinking, calibrated against everything you've already published.
          </p>
          <p className="paragraph">
            the workflow: wisprflow your raw take on something -{'>'} claude drafts it in your voice with all that context -{'>'} you spend 2 minutes editing instead of 30 minutes writing from scratch. or feed it your analytics and top-performing posts and let it identify patterns you'd miss: hook structures, topic clusters, posting cadences that drive engagement. reverse-engineer your own success and then systematize it. (this article is me + wisprflow + claude)
          </p>

          <p className="paragraph" style={{ fontWeight: 'bold' }}>
            if you're in crypto and you're not using AI in everything you do - you'll be replaced by someone who does.
          </p>
        </div>

        <a
          href="https://cal.com/adithyadinesh/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="cal-button"
        >
          happy to help setup any of these workflows for you - talk to me
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

export default PivotToAI
