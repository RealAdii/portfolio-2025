import { useState, useEffect } from 'react'
import { videos, categories, getThumbnailUrl, isTwitterUrl, isYouTubeUrl } from './videoData'
import './VideoGrid.css'

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function VideoCard({ video }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(getThumbnailUrl(video.url))
  const [duration, setDuration] = useState(video.duration || null)
  const isTwitter = isTwitterUrl(video.url)
  const isYouTube = isYouTubeUrl(video.url)

  useEffect(() => {
    if (isTwitter) {
      const match = video.url.match(/(?:twitter\.com|x\.com)\/(\w+)\/status\/(\d+)/)
      if (match) {
        const [, username, tweetId] = match
        fetch(`https://api.vxtwitter.com/${username}/status/${tweetId}`)
          .then(res => res.json())
          .then(data => {
            if (data.media_extended && data.media_extended[0]?.thumbnail_url) {
              setThumbnailUrl(data.media_extended[0].thumbnail_url)
            }
            if (data.media_extended && data.media_extended[0]?.duration_millis && !video.duration) {
              setDuration(formatDuration(data.media_extended[0].duration_millis))
            }
          })
          .catch(() => {})
      }
    }
  }, [video.url, isTwitter, video.duration])

  return (
    <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-card">
      <div className="video-thumbnail">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={video.title} loading="lazy" />
        ) : (
          <div className={`thumbnail-placeholder ${isTwitter ? 'twitter' : ''}`}>
            {isTwitter && (
              <svg viewBox="0 0 24 24" className="platform-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            )}
            <span className="play-icon">▶</span>
          </div>
        )}
        {duration && <span className="video-duration">{duration}</span>}
        <div className="video-overlay">
          <span className="play-button">▶</span>
        </div>
      </div>
      <div className="video-info">
        <h4 className="video-title">{video.title}</h4>
        <div className="video-meta">
          {isYouTube && <span className="platform-badge youtube">YouTube</span>}
          {isTwitter && <span className="platform-badge twitter">X</span>}
        </div>
      </div>
    </a>
  )
}

function VideoGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredVideos = activeFilter === 'all'
    ? videos
    : videos.filter(video => video.category === activeFilter)

  return (
    <div className="video-grid-container">
      <div className="filter-chips">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-chip ${activeFilter === category.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.label}
            {category.id !== 'all' && (
              <span className="chip-count">
                {videos.filter(v => v.category === category.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <p className="video-count">
        showing {filteredVideos.length} of {videos.length} videos
      </p>

      <a
        href="https://cal.com/zero-knowledge-verification/15min"
        target="_blank"
        rel="noopener noreferrer"
        className="cal-button"
      >
        i make content that converts - talk to me
      </a>
    </div>
  )
}

export default VideoGrid
