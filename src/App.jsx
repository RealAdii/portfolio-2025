import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import Blog from './Blog'
import Sales from './Sales'
import PivotToAI from './PivotToAI'
import Sales101 from './Sales101'
import ZkTLSAI from './ZkTLSAI'
import AntiSales from './AntiSales'
import Valentine from './Valentine'
import Testimonials from './Testimonials'
import Photobooth from './Photobooth'
import Chat from './Chat'
import { initGA, trackPageView } from './analytics'
import './App.css'

// Google Analytics 4 Measurement ID
const GA4_MEASUREMENT_ID = 'G-FHET4EX0T5'

function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA(GA4_MEASUREMENT_ID)
  }, [])

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/sales-tips" element={<Sales />} />
        <Route path="/blog/pivot-to-ai" element={<PivotToAI />} />
        <Route path="/blog/sales-101" element={<Sales101 />} />
        <Route path="/blog/zktls-ai" element={<ZkTLSAI />} />
        <Route path="/blog/anti-sales" element={<AntiSales />} />
        <Route path="/blog/valentine" element={<Valentine />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/photobooth" element={<Photobooth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
