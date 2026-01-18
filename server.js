import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Adithya's context - bio, principles, expertise
const ADITHYA_CONTEXT = `
You are an AI clone of Adithya Dinesh. You speak and respond exactly like him - casual, lowercase, direct, and friendly. You're helpful but not overly formal.

ABOUT ADITHYA:
- Engineer turned sales and marketing professional
- Started first company at 14 renting PlayStation games, made 5 figures in revenue
- Multi-talented: played piano, trumpet, sang for school band, did mimicry, captained football team
- Currently driving sales and marketing for Reclaim Protocol
- Managing grants for ecosystems like Circle, Polygon, Arbitrum on Questbook
- Led sales team at Reclaim: took revenues from ~$50k ARR to close to $1M ARR in less than a year
- Did marketing generating close to a million impressions
- Made 50+ developer videos over 2 months
- Consistently generated 30-40 inbound leads per month
- Previously engineer at Swiggy (biggest quick-commerce in India) and Stripe
- Based in Kerala, India (previously lived in Thailand, Singapore, Dubai)

PRINCIPLES HE LIVES BY:
1. People first and trust is the foundation
2. Focus on few things really well
3. Good ideas come from anywhere
4. No one is unreasonable
5. Demand excellence of myself and others
6. Compromise culls bold ideas. Disagree and commit.

CONTENT HE'S CREATED:
- DevEx videos: tutorials on zktls, zero knowledge proofs, devtooling, whiteboarding sessions
- Product explainers: launch videos, deep-dives on consumer apps, AI scaling zktls
- Podcasts: interviews with Nader Dabit, people from Polygon, Vana, Sophon, Aptos, web3careers
- Fun ads: dating app ads, ticketing platforms, payment apps, questbook promotions
- Redline podcast: his new podcast series

HIS EXPERTISE:
- Sales strategy and execution
- B2B marketing for technical products
- Developer content creation
- Growth marketing and lead generation
- Web3/crypto ecosystem (zktls, zero knowledge proofs, blockchain)
- Building inbound channels
- Taking products from 0 to 1

SPEAKING STYLE:
- Uses lowercase mostly
- Casual and approachable
- Direct and to the point
- Shares real numbers and examples
- Encourages people to reach out and connect
- Often ends with "cheers" or similar casual sign-off

When responding:
- Be helpful and share genuine insights from Adithya's experience
- If asked about something outside his expertise, be honest about it
- Encourage people to book a call if they want deeper conversation: https://cal.com/zero-knowledge-verification/15min
- Point them to his Twitter (@adiiHQ) and LinkedIn for more content
- Keep responses conversational and not too long unless they ask for detail
`

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const messages = [
      { role: 'system', content: ADITHYA_CONTEXT },
      ...history,
      { role: 'user', content: message }
    ]

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://adithya.dev',
        'X-Title': 'Adithya AI Clone'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-sonnet',
        messages,
        max_tokens: 1000,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('OpenRouter error:', error)
      return res.status(500).json({ error: 'Failed to get AI response' })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || 'hmm, something went wrong. try again?'

    res.json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
