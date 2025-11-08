import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import Sales from './Sales'
import Photobooth from './Photobooth'
import './App.css'

function App() {
  return (
    <BrowserRouter>
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
