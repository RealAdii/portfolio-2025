import { Link } from 'react-router-dom'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

function Sales() {
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
          <img src={`${baseUrl}wolf.png`} alt="placeholder" className="profile-image full-width-image" />
        </div>
        
        <div className="content">
          <h2 className="subheading">what i think of sales</h2>
          
          <p className="paragraph">
            b2b sales or any kind of sales is an art form. people tend to either love it or hate it; there's rarely an in-between. i like to think of sales as a three-step art form, where each stage 
            requiring a totally different set of skills.  
          </p>
        </div>

        <h3 className="category-heading"><strong>1. prospecting</strong></h3>
        <p className="paragraph">
            this is lead gen, sourcing, identifying the right people or whatever you wanna call it. i've a couple of things setup that makes it easy for me
            <ul>
                <li>i've setup a channel that alerts me whenever someone visits our competitor's telegram/ discord support channel</li>
                <li>i've deep knowledge of our existing customers. i hop on calls with them atleast once every two weeks to understand the landscape
                    and use that information to reach out to their competitors or even the service providers used by the competitors to help them get more money.
                </li>
                <li>i make sure i've access to my founders social logins to DM folks. firstly founders have amazing network that most of the times they're not even
                    aware of and DM'ing folks as the founder of a company has a much better chance of getting a response. ps: i use one of Reclaim's portco products icebreaker teams
                    to get sense of 1st-3rd connections within the team itself which i can exploit. 
                </li>
                <li>
                    i've reiterated our landing page atleast 10 times in the last month based off of demo calls to perfect the messaging and value prop. i've made sure
                    to have a very good idea of who's on our landing page, what's most interesting/ not interesting to them. 
                    <br />
                    trust me folks, a good landing page will get you in through the door.
                    i'm personally not a fan of bombshell designs, i'd rather have something simple that conveys what needs to be conveyed. 
                </li>
            </ul>
          </p>

          <h3 className="category-heading"><strong>2. closing</strong></h3>
        <p className="paragraph">
            you've probably already hopped on a intro call and demo'ed the product - you've a group made or an email thread going now you're gonna have to date these companies and take them to closure. this is how i make that process easier.
            <ul>
                <li>
                    i believe customers have a higher chance of closing if you give them a sense of ownership (similar to how apple stores keep macbooks at an uncomfortable to make you touch it and correct it) 
                    i invoke this sense in prospects by showing them a demo of how the product would look like in their web-app/ native app. this method is now being being by all the entire team now. our designers ship demos in ~ 30mins. 
                </li>
                <li>
                    everyone loves discounts and whenever conversations go cold i pop a discount where it's either a 50% off the first month fee or discount the highest tier and match it to the medium tier to make it feel like they're getting a steal.
                </li>
                <li>
                    followups that make sense - i try my best to never do a "hey, bump on this", my followups are usually something like "hey saw that your competitor x just launched xyz you should use us to launch the campaign and get on top!"
                    i'll also try to make them feel guilty but making it seem like i put a lot of effort into them, i'll create a github repo specifically for them to integrate (i just clone standard example repos), i send various customisation flows, i've even gotten food over uber
                    one of our top tier customers, i make sure to always engage with their posts.
                </li>
                <li>
                    while negotiating/ quoting, never seem desperate, always go into a conversation with a position of power. dig deep into their statistics - how much money they make! 
                    how much they raised! how many team members they have - calculate approximate runway costs and then quote/ negotiate. always make them feel like they're winning - "we usually don't do it for this price but since you've been xyz we're happy to give you a discount"
                    - try to sell with your camera on, wear a nice shirt and have a bg that's not your bedroom (trust me: it makes a difference). 
                </li>
            </ul>
          </p>

          <h3 className="category-heading"><strong>3. customer success</strong></h3>
        <p className="paragraph">
            this is most important phase - think of it like a marriage but unlike a relationship you don't get a honeymoon phase. the moment they sign the contract you gotta make sure things are going smoothly. 
            this is difficult considering your engineering team is mostly going to be handling this, i believe it's best to act as an account manager for them until things are a-okay! 
            <ul>
                <li>
                    respond quickly. you don't need to fix things you just need to respond - makes them feel seen! 
                </li>
                <li>
                    hop on weekly calls with them to understand how things are going, be genuinely interested in their business and how they're going to be using your product - trust me, this helps you sell more. 
                </li>
                <li>
                    try to develop a relationship with one person on the team who'd have your back when things are bad. if you have an SDK product - make sure this is an engineer! 
                </li>
            </ul>
          </p>

        <div className="footer">
          <p className="footer-text">
          p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Sales

