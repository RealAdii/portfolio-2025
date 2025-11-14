import ReactGA from 'react-ga4'

// Initialize GA4 with your Measurement ID
// Get this from Google Analytics: Admin > Data Streams > Web > Measurement ID
export const initGA = (measurementId) => {
  if (measurementId && measurementId !== 'YOUR_GA4_MEASUREMENT_ID') {
    ReactGA.initialize(measurementId)
    console.log('Google Analytics initialized')
  }
}

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

// Track custom events
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  })
}

// Specific event trackers for your portfolio
export const trackCVDownload = () => {
  trackEvent('Engagement', 'CV Download', 'CV Button Click')
}

export const trackEasterEgg = () => {
  trackEvent('Engagement', 'Easter Egg', 'Profile Image Click')
}

export const trackNavigation = (destination) => {
  trackEvent('Navigation', 'Page Click', destination)
}

export const trackExternalLink = (url, label) => {
  trackEvent('External Link', 'Click', label || url)
}

export const trackSocialMedia = (platform) => {
  trackEvent('Social Media', 'Click', platform)
}

export const trackDarkMode = (enabled) => {
  trackEvent('Settings', 'Dark Mode', enabled ? 'Enabled' : 'Disabled')
}
