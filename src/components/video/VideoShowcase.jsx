import { useState } from 'react';
import './VideoShowcase.css';

/**
 * VideoShowcase
 * 
 * Renders a featured video. Implements privacy/performance-aware loading
 * by showing a poster image first, and only embedding the iframe when clicked.
 * 
 * @param {{ video: import('../../cms/types').VideoContent }} props
 */
export default function VideoShowcase({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video || video.status !== 'published') return null;

  // Compute focal point if available
  const focalX = video.thumbnail?.focalPoint?.x ?? 0.5;
  const focalY = video.thumbnail?.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  return (
    <section className="video-showcase" aria-labelledby="video-heading">
      <div className="video-showcase__inner">
        
        {/* Context / Text */}
        <div className="video-showcase__content">
          <span className="video-showcase__label">Watch Hamza Speak</span>
          <h2 id="video-heading" className="video-showcase__title">{video.title}</h2>
          {video.description && (
            <p className="video-showcase__desc">{video.description}</p>
          )}
        </div>

        {/* Video Player */}
        <div className="video-showcase__player-wrapper">
          {!isPlaying ? (
            <button
              className="video-showcase__poster-overlay"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play video: ${video.title}`}
            >
              {video.thumbnail && (
                <img
                  src={video.thumbnail.url}
                  alt={video.thumbnail.alt || ''}
                  className="video-showcase__poster"
                  style={{ objectPosition }}
                  loading="lazy"
                />
              )}
              <div className="video-showcase__play-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          ) : (
            <iframe
              className="video-showcase__iframe"
              src={`${video.url}${video.url.includes('?') ? '&' : '?'}autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        
      </div>
    </section>
  );
}
