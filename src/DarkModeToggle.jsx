import { useState, useEffect } from 'react'
import { trackDarkMode } from './analytics'
import './DarkModeToggle.css'

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved === 'true'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDark)
  }, [isDark])

  const handleToggle = () => {
    const newValue = !isDark
    setIsDark(newValue)
    trackDarkMode(newValue)
  }

  return (
    <button
      className="dark-mode-toggle"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
    >
      <span className="toggle-icon">{isDark ? '☀' : '☾'}</span>
    </button>
  )
}

export default DarkModeToggle
