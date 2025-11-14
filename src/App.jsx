import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import Sales from './Sales'
import Photobooth from './Photobooth'
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
        <Route path="/sales" element={<Sales />} />
        <Route path="/photobooth" element={<Photobooth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
