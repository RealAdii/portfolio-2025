import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Sales101() {
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
          <h2 className="main-heading">how to get started with sales 101</h2>

          <p className="blog-meta">
            <a href="https://x.com/adiiHQ" target="_blank" rel="noopener noreferrer">adithya</a> · jan 23
          </p>

          <p className="paragraph">
            nobody teaches you how to sell. not in school. not anywhere.
            then you start a company and suddenly need people to give you money for something. and you're like how do i actually do this?
          </p>

          <p className="paragraph">
            i figured it out by doing it wrong a bunch of times.
          </p>

          <p className="paragraph">
            we've done over $1m arr now. deals from $500/m to $50k/m. here's everything i wish someone told me at the start.
          </p>

          <h3 className="category-heading"><strong>sales isn't what you think</strong></h3>
          <p className="paragraph">
            forget the pushy guy in a suit. wolf of wall street shit. that doesn't work.
          </p>
          <p className="paragraph">
            actual sales is just talking to people (usually one person), understanding their problems, and helping them decide if you can solve those problems (or help them land a promotion/ pay raise)
          </p>
          <p className="paragraph">
            you're not convincing anyone. you're having conversations and figuring out if there's a fit.
          </p>
          <p className="paragraph">
            if you can have a normal human conversation, you can sell. the bar is low because most salespeople are annoying. just don't be annoying.
          </p>

          <h3 className="category-heading"><strong>you don't need a sales personality</strong></h3>
          <p className="paragraph">
            myth: you need to be extroverted or charismatic to sell.
          </p>
          <p className="paragraph">
            bullshit (eg: <a href="https://x.com/Srijith_Padmesh" target="_blank" rel="noopener noreferrer">@Srijith_Padmesh</a> is an introvert and he's fucking good at selling)
          </p>
          <p className="paragraph">
            what actually matters:
            <ul>
              <li>can you listen without interrupting</li>
              <li>can you ask questions and be curious</li>
              <li>can you explain something clearly</li>
              <li>can you follow up without being annoying</li>
            </ul>
          </p>
          <p className="paragraph">
            that's the whole skill set. if anything, being a little awkward helps. smooth feels like you're being sold to. awkward feels real.
          </p>

          <h3 className="category-heading"><strong>step 1: find people to talk to</strong></h3>

          <p className="paragraph"><strong>1. your network (mine it properly)</strong></p>
          <p className="paragraph">
            don't just "think of people you know." actually do this:
            <ul>
              <li>export your linkedin connections</li>
              <li>export email and phone contacts</li>
              <li>list every coworker from every job</li>
              <li>list every classmate, friend, acquaintance</li>
            </ul>
          </p>
          <p className="paragraph">
            go through it systematically. "could they be a customer? do they know someone who could?"
          </p>
          <p className="paragraph">
            if you have cofounders, combine everyone's networks. exhaust this completely before going cold (use <a href="https://x.com/warmintrosxyz" target="_blank" rel="noopener noreferrer">@warmintrosxyz</a>)
          </p>

          <p className="paragraph"><strong>2. scrape and enrich</strong></p>
          <p className="paragraph">
            <ul>
              <li>find targets on linkedin - search by title, company size, industry. look at who engages with competitors' content.</li>
              <li>scrape with phantombuster - pull profiles, recent posts, company info</li>
              <li>qualify with clay - enrich data, score leads based on intent signals, filter out bad fits</li>
              <li>feed the entire thing into claude and figure out your ICP</li>
              <li>get contact info with apollo - verified emails, phone numbers</li>
            </ul>
          </p>

          <p className="paragraph"><strong>intent signals to look for</strong></p>
          <p className="paragraph">
            <ul>
              <li>posting about the problem you solve</li>
              <li>engaging with competitor content</li>
              <li>recently raised funding</li>
              <li>recently promoted (new person = new initiatives)</li>
              <li>hiring for roles related to your solution</li>
            </ul>
          </p>
          <p className="paragraph">
            someone with intent signals is 10x more likely to respond than random people with the right job title.
          </p>

          <h3 className="category-heading"><strong>step 2: reach out</strong></h3>
          <p className="paragraph">
            <ul>
              <li>keep it short. 4-5 sentences max.</li>
              <li>make it about them. don't start with your company story.</li>
              <li>simple ask. not "30 minute call" - just "worth a quick chat?"</li>
            </ul>
          </p>
          <p className="paragraph blog-quote">
            hey [name],<br />
            saw you're [something relevant - hiring, growing, launched something].<br /><br />
            we help [type of company] with [problem]. just helped [similar company/ competitor] with this - thought it might be relevant.<br /><br />
            worth a quick chat?
          </p>
          <p className="paragraph">
            this example syntax has gotten me upwards of 4% on response rates. that's it. send it.
          </p>

          <h3 className="category-heading"><strong>step 3: the first call</strong></h3>
          <p className="paragraph">
            the first call is about listening, not pitching.
          </p>
          <p className="paragraph">
            start with a question:<br />
            <em>"hey, appreciate you hopping on. what's going on that made you want to chat?"</em>
          </p>
          <p className="paragraph">
            then shut up. let them talk. take notes. ask follow-ups.
          </p>
          <p className="paragraph">
            only pitch after you understand:<br />
            <em>"you mentioned X is a problem - here's how we handle that"</em>
          </p>
          <p className="paragraph">
            not a generic pitch. specific to what they told you.
          </p>
          <p className="paragraph">
            end with a clear next step:<br />
            don't end with "let me know what you think."<br />
            end with "would it make sense to [next step]?" and get them to agree or schedule a follow-up for next week before you hang up.
          </p>

          <h3 className="category-heading"><strong>step 4: follow up</strong></h3>
          <p className="paragraph">
            here's a secret that will make you better than most people at sales: <strong>follow up.</strong>
          </p>
          <p className="paragraph">
            most people send one email and give up. i've closed deals on the 7th follow up.
          </p>
          <p className="paragraph">
            how to do it:
            <ul>
              <li>space it out (2 days, week, two weeks)</li>
              <li>add value each time (make them feel like you've put effort into the follow up)</li>
              <li>email 2: "bumping this back up - also, our design team was insistent on making a custom demo video for you"</li>
              <li>email 3: "one more thought - [similar competitor] asked us X before they signed - figured X might be important to you so here's the answer"</li>
              <li>email 4 (breakup): "i'm guessing this is not a priority for now, do reach out when y'all are ready to get it seriously/ ready to commit"</li>
            </ul>
          </p>
          <p className="paragraph">
            the breakup email has the highest reply rate. giving people an out makes them respond. (at the time of writing i got a call back from one of my prospects telling me to give him a bit of time xD)
          </p>

          <h3 className="category-heading"><strong>what to expect</strong></h3>
          <p className="paragraph">
            <ul>
              <li>you will be bad at first. your first calls will be awkward. normal.</li>
              <li>most people will say no. 100 emails → 5 responses → 2 calls → maybe 1 customer. that's the math.</li>
              <li>rejection gets easier. first few sting. after 100, you stop caring.</li>
              <li>then it clicks. after 20-50 calls, conversations feel natural. this is when it gets fun.</li>
            </ul>
          </p>

          <h3 className="category-heading"><strong>common mistakes</strong></h3>
          <p className="paragraph">
            <ul>
              <li><strong>talking too much</strong> - force yourself to ask questions and shut up</li>
              <li><strong>pitching too early</strong> - you don't even know if they have the problem yet</li>
              <li><strong>not following up</strong> - silence usually means busy, not no</li>
              <li><strong>being too formal</strong> - just talk like a normal person</li>
              <li><strong>taking rejection personally</strong> - it's not about you. move on.</li>
            </ul>
          </p>

          <h3 className="category-heading"><strong>what actually matters</strong></h3>
          <p className="paragraph">
            <ul>
              <li><strong>volume</strong> - talk to a lot of people. no way around it.</li>
              <li><strong>listening</strong> - they'll tell you how to sell to them. just hear it.</li>
              <li><strong>following up</strong> - most deals die from neglect.</li>
              <li><strong>consistency</strong> - 100 emails a day for 60 days beats 1000 in one week then nothing.</li>
            </ul>
          </p>

          <h3 className="category-heading"><strong>start tomorrow</strong></h3>
          <p className="paragraph">
            <ol>
              <li>make a list of 20 people who might need what you're selling</li>
              <li>find their emails or linkedin (use apollo or see who can give you an intro from <a href="https://x.com/introsdotxyz" target="_blank" rel="noopener noreferrer">@introsdotxyz</a>)</li>
              <li>send a short message</li>
              <li>book calls with anyone who responds</li>
              <li>on the call, listen more than you talk</li>
              <li>follow up with everyone who doesn't respond</li>
            </ol>
          </p>
          <p className="paragraph">
            do this every day for a month.
          </p>
          <p className="paragraph">
            i didn't know anything about sales when i started. figured it out by doing it badly until i did it less badly. if i can do it you definitely can.
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

export default Sales101
