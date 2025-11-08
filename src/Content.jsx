import { Link } from 'react-router-dom'
import './App.css'

function Content() {
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
        <h1 className="main-heading">my virality hack was consistency.</h1>
        
        <div className="content">
          
          <p className="paragraph">
            as someone who consumed a lot of content on the internet, i've always been drawn to creating content myself but never got the chance.
            <br />
            we reached an injunction at Reclaim Protocol where we had to tap into an inbound channel to generate leads for us. i stepped up and immediately said yes to marketing one of the most technical products on the internet.
          </p>
          
          <div className="content-categories">
            <div className="content-category">
              <h3 className="category-heading"><strong>devex</strong><sup className="category-superscript">fun if you're a developer</sup></h3>
              <ul className="content-links">
                <li><a href="https://www.youtube.com/watch?v=WXCduLA95jo" className="content-link highlighted">reclaim devtooling (5:39m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1927030679251906825/video/1" className="content-link highlighted">jordanmuck style explainer on zk (15:52m)</a></li>
                <li><a href="hhttps://x.com/reclaimprotocol/status/1917953474848850316/video/1" className="content-link highlighted">genesis of zktls (whiteboarding session) (4:42m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1904805773705720104/video/1" className="content-link highlighted">intro to zero knowledge proofs (4:46m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1905266020970790985/video/1" className="content-link highlighted">advanced devtooling (4:26m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1906715995877908856/video/1" className="content-link highlighted">TLS explained (4:46m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1909255159529496634/video/1" className="content-link highlighted">encrypted 101 (3:16m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1911796594036318540/video/1" className="content-link highlighted">diffie-hellman key exchange explained(2:56m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1920124347378782364/video/1" className="content-link highlighted">zktls whiteboarding 0-1 (12:26m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1836369088576454879/video/1" className="content-link highlighted">vibe coding using zktls (9:44m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1874769635893219552/video/1" className="content-link highlighted">fetching deep data from twitter and generating a zkp (5:02m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1880211743307362548/video/1" className="content-link highlighted">generating zkps of user data from amazon (5:05m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1881401083182104664/video/1" className="content-link highlighted">live coding a zktls app on react in 10mins (6:23m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1899840103826297205/video/1" className="content-link highlighted">letting AI make a zktls provider on the fly (1:53m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1907082175213924841/video/1" className="content-link highlighted">starknet + zktls (6:09m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1900563262040867238/video/1" className="content-link highlighted">base + zktls starter kit (6:02m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1904171838638624865/video/1" className="content-link highlighted">lukso starter kit w/ zktls (4:32m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1908165850156114350/video/1" className="content-link highlighted">diamante + zktls starter kit (6:02m)</a></li>
              </ul>
            </div>

            <div className="content-category">
              <h3 className="category-heading"><strong>deep product explainers and launch videos<sup className="category-superscript">content anyone can watch</sup></strong></h3>
              <ul className="content-links">
                <li><a href="https://x.com/reclaimprotocol/status/1914687269056946266/video/1" className="content-link highlighted">reclaimed linktree card launch video (0:54m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1918321797818130930/video/1" className="content-link highlighted">world's first A2A agent launch (duration)</a></li>
                <li><a href="https://x.com/adiiHQ/status/1908960674153198015/video/1" className="content-link highlighted">rage baiting other zktls solutions (28:54m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1924476584309977204/video/1" className="content-link highlighted">AI to scale zktls (2:28m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1929552659549413648/video/1" className="content-link highlighted">consumer apps deep-dive (10:54m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1930641231949750349/video/1" className="content-link highlighted">uncollateralised lending protocol and it brings tradfi to defi (5:32m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1932454977622155762/video/1" className="content-link highlighted">'not' legal advice while using zktls (2:27m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1932454977622155762/video/1" className="content-link highlighted">don't scrape data, it's illegal (1:06m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1935715690473988548/video/1" className="content-link highlighted">permissionless-ly access user data (0:56m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1973809550789914670/video/1" className="content-link highlighted">white-labelling reclaim protocol (0:46m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1973448119057785070/video/1" className="content-link highlighted">1m verifications over a week w/ vana (0:57m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1973085298939601213/video/1" className="content-link highlighted">clipping for marketing + paying for unique views(0:55m)</a></li>
              </ul>
            </div>
            <div className="content-category">
              <h3 className="category-heading"><strong>podcasts<sup className="category-superscript">technical + business</sup></strong></h3>
              <ul className="content-links">
                <li><a href="https://x.com/reclaimprotocol/status/1887176304052838635/video/1" className="content-link highlighted">nader dabit on zktls and live-coding (13:23m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1891821193121968414/video/1" className="content-link highlighted">aishwary on payments w/ polygon (16:18m)</a></li>
                <li><a href="https://www.youtube.com/watch?v=wO4yZS4FZYI" className="content-link highlighted">jacob on uncollateralised lending and bringing tradfi to defi (14:27m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1901695054588358814/video/1" className="content-link highlighted">art from vana on why you're getting scammed off of your data (14:40m)</a></li>
                <li><a href="https://www.youtube.com/watch?v=9QKdE5jOQ6s&embeds_referring_euri=https%3A%2F%2Fx.com%2F&source_ve_path=MjM4NTE" className="content-link highlighted">sam on sophon being the consumer layer for crypto (42:00m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1923022297075486984/video/1" className="content-link highlighted">ignacio on professional and acquiring web3careers (24:55m)</a></li>
                <li><a href="https://www.youtube.com/watch?v=I3VIpyCslbo&t=2s" className="content-link highlighted">naresh from aptos (1:02:00m)</a></li>
              </ul>
            </div>
            <div className="content-category">
              <h3 className="category-heading"><strong>fun ads i've made<sup className="category-superscript">all shot and edited in ~1 day</sup></strong></h3>
              <ul className="content-links">
              <li><a href="https://x.com/adiiHQ/status/1986722841795137861" className="content-link highlighted">sip on bitcoin (bitmor) ad ft. my mom (0:55m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1890405456834629927/video/1" className="content-link highlighted">dating app ad on solana (0:43m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1924840863928291381/video/1" className="content-link highlighted">ticketing platform using eigen + reclaim (0:28m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1915050687731503163/video/1" className="content-link highlighted">teaser for my whiteboarding event in dubai (2:28m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1887434910375551414/video/1" className="content-link highlighted">payment/ on-ramp/ off-ramp app ad (0:55m)</a></li>
                <li><a href="https://x.com/questbookapp/status/1898015124201300330/video/1" className="content-link highlighted">questbook ad (0:47m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1925582453714076091/video/1" className="content-link highlighted">in the streets making folks generate zkps (2:05m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1895121532818727149/video/1" className="content-link highlighted">i'm thor? (internal product launch) (0:46m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1925208674366259322/video/1" className="content-link highlighted">bring relevant content to you using reply guy(0:51m)</a></li>
                <li><a href="https://x.com/reclaimprotocol/status/1894798728826904725/video/1" className="content-link highlighted">icebreaker (1:08m)</a></li>
                <li><a href="https://x.com/questbookapp/status/1894678244185518438/video/1" className="content-link highlighted">okto summer of abstraction (1:01m)</a></li>
              </ul>
            </div>
          </div>
          <div className="footer">
          <p className="footer-text">
            p.s: if you wanna contact me book a slot <a href="https://cal.com/zero-knowledge-verification/15min">here </a>to say hi, i love meeting new people! follow me on <a href="https://x.com/adiiHQ">twitter </a> and <a href="https://www.linkedin.com/in/adithya-dinesh-77990026b/">linkedin</a>
          </p>
        </div>
        </div>
      </main>
    </div>

    
  )
}

export default Content

