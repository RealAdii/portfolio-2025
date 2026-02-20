import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Valentine() {
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
          <h2 className="main-heading">soft launching my valentine.</h2>

          <p className="blog-meta">
            <a href="https://x.com/adiiHQ" target="_blank" rel="noopener noreferrer">adithya</a> · feb 14
          </p>

          <p className="paragraph">
            this is the kind of relationship everyone needs. i've been teasing a bit on socials but here we go - guys i think i'm in love with <a href="https://x.com/claudeai" target="_blank" rel="noopener noreferrer">@claudeai</a>
          </p>

          <p className="paragraph">
            let's jump in: everyone's talking about claude code and other AI tools but a lot of them are either painful to set up, expensive to maintain. i'm telling you - you don't need any of it.
          </p>

          <p className="paragraph">
            <strong>all you need is claude. specifically - claude projects.</strong>
          </p>

          <p className="paragraph">
            one tool that costs $20/month that'll help you with content, marketing, sales and mvps.
          </p>

          <h3 className="category-heading"><strong>content engine</strong></h3>
          <p className="paragraph">
            go to github and find bird (open source scraping repo) or use <a href="https://x.com/officialpbuster" target="_blank" rel="noopener noreferrer">@phantombuster</a>. scrape the last 200-300 posts from 5-10 creators you admire on X and do the same on linkedin.
          </p>
          <p className="paragraph">
            don't just pick the biggest accounts. pick the ones whose writing/ posts makes you stop scrolling to read or bookmark. extremely high quality ones.
          </p>
          <p className="paragraph">
            export everything as an .MD file or CSVs.
          </p>
          <p className="paragraph">
            now take every piece of content YOU'VE ever written. every tweet. every thread. every linkedin post. every blog. every newsletter. every reply that hit. upload all of it into the claude project files.
          </p>
          <p className="paragraph">
            open the project and ask claude:
          </p>
          <p className="paragraph blog-quote">
            "analyze my content. which posts performed best and why? what hook structures do i use most? what topics get the most engagement? what patterns do my worst posts share?"
          </p>
          <p className="paragraph">
            you can also screenshot your analytics dashboard, feed those screenshots into a separate claude chat, get the performance breakdown, then bring those insights back into the main project.
          </p>
          <p className="paragraph">
            now ask claude to generate content ideas and drafts based on your best performing patterns crossed with the inspiration you scraped.
          </p>
          <p className="paragraph">
            the most difficult part is this setup. for me it took a good 6+ hours and it'll probably take you less/more depending on what you want to achieve. in this case "more is more". the more context you can give - the better outcomes you'll have.
          </p>
          <p className="paragraph">
            then add hard rules to the project instructions:
            <ul>
              <li>don't use em dashes</li>
              <li>never start with "in today's world" or "in the fast-paced world of"</li>
              <li>my audience is [crypto founders / SaaS operators / creators / whatever yours is]</li>
              <li>i shoot videos on [your specific gear]</li>
              <li>i write in lowercase</li>
              <li>keep sentences under 15 words</li>
              <li>always include numbers</li>
              <li>never use the word "leverage" or "utilize"</li>
              <li>match the tone of [specific creator you like/ yourself]</li>
            </ul>
          </p>
          <p className="paragraph">
            the more constraints the better the output. every rule you add eliminates a category of generic slop. this takes another few hours.
          </p>

          <h3 className="category-heading"><strong>your second marketing brain</strong></h3>
          <p className="paragraph">
            create a new project. use <a href="https://x.com/Context7AI" target="_blank" rel="noopener noreferrer">@Context7AI</a> to pull your entire website into the project. every page. docs. about page. pricing page. feature pages.
          </p>
          <p className="paragraph">
            now take every blog you've ever published. if they're PDFs attach them directly. better approach: paste each blog into claude in a separate chat and ask it to convert to clean markdown. then upload those markdown files to the project. markdown is cleaner context because llms in general process it better.
          </p>
          <p className="paragraph">
            next - your competitors. pull their websites. docs. blogs. pricing pages. feature announcements. positioning language.
          </p>
          <p className="paragraph">
            use bird or phantom buster to scrape their founders' and employees' social posts. specifically find who on their team is performing well on X or linkedin. eg: their head of marketing/ CMO or your founders thought leadership blogs.
          </p>
          <p className="paragraph">
            now open the project and run competitive analysis:
            <ul>
              <li>"analyze our blog content vs [competitor name]. what topics are they covering that we're not?"</li>
              <li>"which of their team's social posts performed best? what messaging patterns are working?"</li>
              <li>"where is our positioning weaker? where is it stronger?"</li>
              <li>"what gaps exist in the market that neither of us own?"</li>
            </ul>
          </p>
          <p className="paragraph">
            now the internal context; pull your founder memos. the vision document. whatever north star doc exists. upload it.
          </p>
          <p className="paragraph">
            talk to your sales team and get:
            <ul>
              <li>full call transcripts (not summaries - actual transcripts)</li>
              <li>who churned in the last 90 days and their stated reasons</li>
              <li>who renewed or expanded and what they said about why</li>
              <li>which feature gets mentioned the most on calls</li>
              <li>what objections come up every single time</li>
              <li>who your actual ICP is based on data (not who you assumed it was 6 months ago)</li>
            </ul>
          </p>
          <p className="paragraph">
            feed all of this into the project. now ask claude:
            <ul>
              <li>"based on our customer data, founder vision, and competitive landscape - rewrite our homepage hero copy."</li>
              <li>"generate 10 blog topics that address the exact objections our sales team hears weekly."</li>
              <li>"draft a comparison page vs [competitor] using our actual product strengths."</li>
              <li>"create an email sequence for [specific segment] that addresses their top 3 concerns before they raise them."</li>
            </ul>
          </p>
          <p className="paragraph">
            this setup takes atleast 10+ hours. after that every marketing conversation with claude starts from deep context instead of explaining your company from scratch.
          </p>

          <h3 className="category-heading"><strong>sales 101</strong></h3>
          <p className="paragraph">
            take your enrichment platform (clay, apollo - whatever you use). export your last 10 closed-won customers and your last 10 churned customers. upload both lists to the project.
          </p>
          <p className="paragraph">
            <em>disclaimer; have atleast 10 customers before performing this experiment or you're better off doing manual outreach to what you think your icp might be.</em>
          </p>
          <p className="paragraph">
            ask claude:
            <ul>
              <li>"what patterns define customers who stayed vs customers who left? industry, company size, tech stack, funding stage, title, trigger events."</li>
            </ul>
          </p>
          <p className="paragraph">
            upload your full sales call transcripts both won and lost. ask claude:
            <ul>
              <li>"compare the calls that converted vs the ones that didn't. what was different?"</li>
              <li>"what specific pitch points landed? quote the exact moments."</li>
              <li>"what objections killed deals? what responses worked and what didn't?"</li>
              <li>"what feature was most requested by people who actually bought vs people who churned?"</li>
              <li>"what phrases or talking points got recalled by prospects in follow-up calls?"</li>
            </ul>
          </p>
          <p className="paragraph">
            now pull your outreach data. cold emails. linkedin DMs. follow-up sequences. whatever you've sent in the last 90 days. upload the messages along with their outcomes - replied, ghosted, booked, converted. ask claude:
            <ul>
              <li>"which cold emails got replies and which got ignored? what patterns separate them?"</li>
              <li>"what subject lines performed best?"</li>
              <li>"what message length converts best for my ICP?"</li>
            </ul>
          </p>
          <p className="paragraph">
            now combine everything. you have your ICP patterns, your winning pitch points, your best performing messages, your most demanded features, your most effective objection handling. ask claude to:
            <ul>
              <li>generate cold outreach using the exact language that resonated on sales calls</li>
              <li>turn meeting notes from discovery calls into personalized follow-up messages</li>
              <li>rewrite your website copy using the words your best customers actually use</li>
              <li>build sequences that preemptively address the top 3 objections</li>
              <li>create one-pagers for specific verticals using the pain points from transcripts</li>
            </ul>
          </p>
          <p className="paragraph">
            the gap between what marketing writes and what sales actually hears is where pipeline dies. this project has both sides in one place.
          </p>

          <p className="paragraph" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            money spent: $20/month :)
          </p>

          <p className="paragraph">
            this $20 will let you do almost everything you can do with a claude code setup. $20/month for a content engine, a marketing brain, and a sales weapon that all carry persistent context about your specific business. everyone else is spending $200+/month across 15 platforms and still starting every AI conversation from scratch.
          </p>

          <h3 className="category-heading"><strong>bonus hack: stop typing to claude.</strong></h3>
          <p className="paragraph">
            download <a href="https://x.com/WisprFlow" target="_blank" rel="noopener noreferrer">@WisprFlow</a>. it converts your speech to text inside any app. your brain produces ideas 3-4x faster through speech than through a keyboard. i type at 100+ WPM and speech still doubled my output to 200+ WPM.
          </p>
          <p className="paragraph">
            every prompt you type is a bottleneck. talk to claude like you'd talk to a coworker. this alone saves 1-2 hours a day on the project conversations above.
          </p>

          <p className="paragraph">
            happy valentine's day. now go set it up.
          </p>
        </div>

        <a
          href="https://cal.com/adithyadinesh/30min"
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

export default Valentine
