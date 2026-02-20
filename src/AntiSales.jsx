import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function AntiSales() {
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
          <h2 className="main-heading">how to sell without being 'salesy'</h2>

          <p className="blog-meta">
            <a href="https://x.com/adiiHQ" target="_blank" rel="noopener noreferrer">adithya</a> · jan 6
          </p>

          <p className="paragraph"><em>the anti-sales sales guide (for founders who hate selling)</em></p>

          <p className="paragraph">
            i used to think sales was gross. let me just start by saying i never wanted to be "in sales." the word alone made me cringe.
          </p>

          <p className="paragraph">
            i pictured the stereotype - pushy guys in suits, manipulation tactics, "always be closing," fake enthusiasm, that weird aggressive energy where someone's clearly trying to get something from you.
          </p>

          <p className="paragraph">
            i thought good products sold themselves. i thought if you built something valuable, people would just buy it. then i actually starting selling and realized that's complete bullshit.
          </p>

          <p className="paragraph">
            nobody's buying anything unless someone sells it to them. even if your product is incredible, people are busy, distracted, and drowning in options. they need someone to cut through the noise and show them why this matters.
          </p>

          <p className="paragraph">
            so i had to learn to sell. and i had to figure out how to do it without becoming the person i hated.
          </p>

          <p className="paragraph">
            we've scaled to well over $1m arr now. deal sizes range from $500/m to $50,000/m. i've been on hundreds of sales calls. and here's what i've learned: <strong>the best sales doesn't feel like sales at all.</strong>
          </p>

          <p className="paragraph">
            it feels like a conversation between two people trying to figure out if they can help each other. that's it. that's the whole framework. but let me break down exactly how to do it.
          </p>

          <h3 className="category-heading"><strong>why traditional sales advice feels wrong</strong></h3>
          <p className="paragraph">
            most sales training teaches you to:
            <ul>
              <li>"handle objections" (aka argue with people until they give up)</li>
              <li>"create urgency" (aka pressure people with fake deadlines - i hate this one)</li>
              <li>"overcome resistance" (aka ignore what they're telling you)</li>
              <li>"always be closing" (aka constantly push for the sale)</li>
            </ul>
          </p>
          <p className="paragraph">
            this stuff works on some people. usually people who were going to buy anyway and just needed a nudge. but for everyone else? it just feels gross. and here's the thing - it feels gross because it is gross. you're essentially treating the other person as an obstacle to overcome rather than a human to help.
          </p>
          <p className="paragraph">
            when someone senses that energy, they put up walls. they get defensive. they ghost you. they say "let me think about it" and then never respond to your follow-ups. not because your product is bad. because your approach made them uncomfortable. the irony is that all these aggressive tactics actually make you worse at sales.
          </p>

          <h3 className="category-heading"><strong>the mindset shift that changes everything</strong></h3>
          <p className="paragraph">
            here's the reframe that changed how i sell: <strong>you're not trying to convince anyone of anything. you're trying to figure out if you can help them.</strong>
          </p>
          <p className="paragraph">
            that's a completely different energy.
            <ul>
              <li>convincing = pushing your agenda</li>
              <li>figuring out = genuine curiosity</li>
            </ul>
          </p>
          <p className="paragraph">
            when you're trying to convince, you talk too much, you pitch too early, you gloss over their concerns, and you optimize for getting a "yes."
          </p>
          <p className="paragraph">
            when you're trying to figure out if you can help, you ask questions, you listen, you dig into their actual situation, and you're genuinely okay with the answer being "this isn't a fit."
          </p>
          <p className="paragraph">
            this shift does something magical: it removes all the pressure. you're not performing. you're not "closing." you're just having a conversation. and paradoxically, this is when people actually want to buy from you.
          </p>

          <h3 className="category-heading"><strong>the actual framework</strong></h3>
          <p className="paragraph">
            i don't really have a "sales process." i have a series of questions i'm trying to answer:
          </p>

          <p className="paragraph"><strong>1. do they have a problem i can solve?</strong></p>
          <p className="paragraph">
            not "do they have a problem i can kind of maybe partially address if they use the product in a specific way." do they have the problem. the one we're actually good at fixing.
          </p>
          <p className="paragraph">
            if yes, continue. if no, be honest about it. "hey, it sounds like your main issue is x. we're not really built for that. you might want to look at [competitor] instead."
          </p>
          <p className="paragraph">
            yes, i've recommended competitors on sales calls. yes, some of those people have come back to me later when their needs changed. being honest builds trust that outlasts any single deal.
          </p>

          <p className="paragraph"><strong>2. is this actually a priority for them?</strong></p>
          <p className="paragraph">
            some people have problems but don't care enough to fix them. it's on their "someday" list. it's not urgent. it's not keeping them up at night.
          </p>
          <p className="paragraph">
            you cannot create urgency that doesn't exist. you can only uncover it.
          </p>
          <p className="paragraph">
            the question i ask: "what happens if you don't solve this?" if they shrug and say "i guess we'll figure it out" - there's no deal here. move on. if they wince and describe real pain - now we're talking.
          </p>

          <p className="paragraph"><strong>3. can they actually make this decision?</strong></p>
          <p className="paragraph">
            nothing worse than spending 3 weeks selling to someone who then says "let me run this by my boss." i ask early: "if this looks like a fit, what's the process for making a decision like this? who else would need to be involved?"
          </p>
          <p className="paragraph">
            this isn't pushy. it's practical. it saves everyone time.
          </p>

          <p className="paragraph"><strong>4. do they have budget?</strong></p>
          <p className="paragraph">
            you'd be surprised how many people will waste hours of your time when they have no money to spend. i don't ask "what's your budget" because nobody answers that honestly. i ask: "have you set aside budget for something like this, or would this need to be approved?" or i'll just tell them the price early and see how they react. their reaction tells you everything.
          </p>

          <h3 className="category-heading"><strong>how to run a sales call without it feeling like a sales call</strong></h3>

          <p className="paragraph"><strong>start by shutting up</strong></p>
          <p className="paragraph">
            most salespeople talk way too much in the first 10 minutes. they launch into their pitch, their company background, their product features. meanwhile the prospect is sitting there waiting for you to stop so they can ask their actual question.
          </p>
          <p className="paragraph">
            flip it. "hey, thanks for taking the time. i know a bit about [their company] but i'd love to hear from you - what's going on that made you want to chat?" then shut up. let them talk. take notes. ask follow-up questions. the person who asks the questions controls the conversation. and ironically, the person who talks less is perceived as more competent.
          </p>

          <p className="paragraph"><strong>actually listen</strong></p>
          <p className="paragraph">
            most people listen just enough to find their opening to pitch. that's not listening. that's waiting to talk.
          </p>
          <p className="paragraph">
            real listening means:
            <ul>
              <li>not thinking about what you're going to say next</li>
              <li>asking clarifying questions: "what do you mean by that?"</li>
              <li>reflecting back: "so if i'm hearing you right, the main issue is..."</li>
              <li>being genuinely curious about their situation</li>
            </ul>
          </p>
          <p className="paragraph">
            when you actually listen, you pick up on things that help you sell. they'll tell you exactly what they need, what they're worried about, what would make this a yes. you just have to hear it.
          </p>

          <p className="paragraph"><strong>share stories, not features</strong></p>
          <p className="paragraph">
            nobody cares about your features. they care about outcomes.
          </p>
          <p className="paragraph">
            instead of: "we have automated follow-up sequences with ai personalization."
          </p>
          <p className="paragraph">
            try: "we had a customer in a similar situation - they were spending 4 hours a day on manual outreach. now they book 3x more meetings and their sales guy actually has time to sell."
          </p>
          <p className="paragraph">
            stories stick. features don't. and make them relevant. if they're a 10-person startup, don't tell them about your enterprise customer. tell them about another startup.
          </p>

          <p className="paragraph"><strong>be honest about limitations</strong></p>
          <p className="paragraph">
            this is counterintuitive but it works incredibly well. when you're upfront about what you can't do, people trust you more when you talk about what you can do.
          </p>
          <p className="paragraph">
            "honestly, if your main priority is x, we're probably not the best fit. we're really built for y. if y matters to you, then yeah, we're great at that."
          </p>
          <p className="paragraph">
            i've had people tell me they decided to buy specifically because i was honest about limitations. they'd talked to competitors who promised everything, and it felt like bullshit. my honesty stood out.
          </p>

          <p className="paragraph"><strong>don't pitch until you understand</strong></p>
          <p className="paragraph">
            here's a rule i follow: no pitching in the first half of the call. first half is pure discovery. understanding their situation. asking questions. only once i actually understand what's going on do i start talking about how we might help. and when i do pitch, i pitch specifically to what they told me. not a generic demo. a tailored "here's how this solves the thing you just said was a problem." this is 10x more effective than launching into your standard spiel.
          </p>

          <h3 className="category-heading"><strong>the follow-up: where deals are actually won or lost</strong></h3>
          <p className="paragraph">
            most deals don't close on the first call. they close on the follow-up. and this is where most people screw up. they either follow up once and give up, or follow up in a way that feels desperate and pushy.
          </p>

          <p className="paragraph"><strong>add value every time</strong></p>
          <p className="paragraph">
            every follow-up should give them something useful, not just ask for something.
            <ul>
              <li>bad: "just checking in to see if you've made a decision"</li>
              <li>good: "saw this article about [their industry] and thought of our conversation - figured you might find it relevant"</li>
              <li>bad: "wanted to circle back on our proposal"</li>
              <li>good: "i was thinking about the x problem you mentioned - here's how another customer handled it [specific detail]"</li>
            </ul>
          </p>
          <p className="paragraph">
            when you add value, you're not being pushy. you're being helpful. big difference.
          </p>

          <p className="paragraph"><strong>be persistent but not annoying</strong></p>
          <p className="paragraph">
            i've closed deals on the 7th follow-up. not because i was pushy, but because timing finally worked out on their end. the key is spacing and tone. i follow up at: 3 days, 1 week, 2 weeks, 1 month, then monthly after that. each time, the tone is casual: "hey, no worries if the timing isn't right - just wanted to keep this on your radar. let me know if anything changes." this gives them an easy out while keeping the door open.
          </p>

          <p className="paragraph"><strong>know when to walk away</strong></p>
          <p className="paragraph">
            if someone has ghosted you 5+ times, they're not interested. they're just too polite to say no. send a breakup email: "hey, seems like this isn't a priority right now - totally get it. i'll stop filling your inbox. feel free to reach out if things change."
          </p>
          <p className="paragraph">
            two things happen: sometimes they reply apologetically and re-engage. if not, you've freed up mental energy for deals that are actually real. either way, you win.
          </p>

          <h3 className="category-heading"><strong>closing without "closing"</strong></h3>
          <p className="paragraph">
            i hate the word "closing." it implies manipulation, pressure, tricks.
          </p>
          <p className="paragraph">
            here's how deals actually close in my experience: you just ask. "based on everything we've talked about, it sounds like this could really help with [their problem]. want to move forward?" that's it. no fancy closing technique. no artificial urgency. no pressure.
          </p>
          <p className="paragraph">
            if you've done the work - understood their problem, showed how you can help, built trust - the close is just a natural next step. if you haven't done that work, no closing technique will save you.
          </p>

          <p className="paragraph"><strong>handle "objections" by agreeing with them</strong></p>
          <p className="paragraph">
            when someone raises a concern, don't argue. don't "overcome" it. agree with it. then add context.
          </p>
          <p className="paragraph">
            them: "it's a bit more than we wanted to spend."<br />
            you: "totally fair - it's definitely not the cheapest option. usually the people who go with us have done the math that [specific value] is worth the premium. does that math work for you, or is budget a real blocker?"
          </p>
          <p className="paragraph">
            this is so much more effective than defending your price. you're respecting their concern while helping them think through it.
          </p>

          <p className="paragraph"><strong>be okay with "no"</strong></p>
          <p className="paragraph">
            the most powerful position in any negotiation is being genuinely okay with walking away. not fake okay. actually okay. when you need the deal, people sense it. you come across as desperate. you make concessions you shouldn't. you tolerate red flags. when you're okay with no, you're relaxed. you're confident. you can ask direct questions without fear. you can be honest about fit. ironically, this makes people want to work with you more.
          </p>

          <h3 className="category-heading"><strong>the deals you shouldn't close</strong></h3>
          <p className="paragraph">
            this is the part nobody talks about. some deals aren't worth closing. even if they're ready to buy. i've walked away from deals that would have been revenue nightmares. customers who:
            <ul>
              <li>had unrealistic expectations we couldn't meet</li>
              <li>were going to be incredibly high-maintenance</li>
              <li>wanted heavy customization that would distract us</li>
              <li>just gave off bad vibes (this is real and you should trust it)</li>
            </ul>
          </p>
          <p className="paragraph">
            short-term revenue isn't worth long-term headache. the best sales filter i have: <strong>would i be excited to get a slack message from this customer?</strong> if the answer is no, i probably shouldn't close them.
          </p>

          <h3 className="category-heading"><strong>what actually matters</strong></h3>
          <p className="paragraph">
            i've done hundreds of sales calls now. here's what i've learned actually moves the needle:
            <ul>
              <li><strong>talk to more people.</strong> volume matters. you can't optimize your way out of low activity. more conversations = more deals. simple math.</li>
              <li><strong>qualify ruthlessly.</strong> stop wasting time on deals that were never going to close. the faster you identify bad fits, the more time you have for good ones.</li>
              <li><strong>be genuine.</strong> people can tell when you're performing vs. when you're real. drop the act. be yourself. it's more effective and less exhausting.</li>
              <li><strong>follow up.</strong> most deals die from neglect, not rejection. stay in touch. add value. be patient.</li>
              <li><strong>get better at listening.</strong> your prospects will tell you exactly how to sell to them. you just have to hear it.</li>
            </ul>
          </p>
          <p className="paragraph">
            none of this is complicated. none of this requires manipulation or pressure or becoming someone you're not. it's just conversations. figuring out if you can help. being honest about it. that's the whole thing.
          </p>

          <h3 className="category-heading"><strong>the irony</strong></h3>
          <p className="paragraph">
            the irony of all this is that by not trying to sell, you actually sell more.
          </p>
          <p className="paragraph">
            when you drop the pressure, people relax. when you're honest about limitations, people trust you. when you genuinely try to help instead of close, people want to work with you.
          </p>
          <p className="paragraph">
            the best salespeople i know don't feel like salespeople at all. they feel like advisors. consultants. people who are just trying to figure out if they can help. that's the energy to aim for.
          </p>
          <p className="paragraph">
            and the beautiful thing is, it doesn't require you to become someone you're not. you don't have to learn manipulation tactics or memorize scripts or adopt some fake persona. you just have to be curious, honest, and helpful.
          </p>
          <p className="paragraph">
            that's the anti-sales sales guide. it's not complicated. it's just human.
          </p>
          <p className="paragraph">
            i scaled to $1m arr without ever feeling like a "salesperson." if this resonated, i write about b2b sales, marketing and growth regularly.
          </p>
        </div>

        <a
          href="https://cal.com/zero-knowledge-verification/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cal-button"
        >
          want help scaling your b2b product? talk to me (serious people only)
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

export default AntiSales
