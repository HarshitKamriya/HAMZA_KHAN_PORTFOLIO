import { useState } from 'react';
import './LazyYouTubeVideo.css';

/**
 * Extracts YouTube video ID from various URL formats or plain ID.
 * @param {string} urlOrId
 * @returns {string|null}
 */
export function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return str;
  }
  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

/**
 * LazyYouTubeVideo
 * Thumbnail-first, click-to-load YouTube video player.
 * Avoids initial iframe overhead and protects site performance.
 *
 * @param {{
 *   video: {
 *     id?: string,
 *     title: string,
 *     caption?: string,
 *     description?: string,
 *     youtubeUrlOrId?: string,
 *     url?: string,
 *     thumbnail?: string | { url: string, alt?: string },
 *     isPendingOfficial?: boolean,
 *     status?: string,
 *     published?: boolean
 *   }
 * }} props
 */
export default function LazyYouTubeVideo({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video) return null;

  const rawUrl = video.youtubeUrlOrId || video.url || '';
  const videoId = extractYouTubeId(rawUrl);
  const isPending = Boolean(video.isPendingOfficial || (!videoId && !video.url));

  const thumbnailUrl = typeof video.thumbnail === 'string'
    ? video.thumbnail
    : video.thumbnail?.url || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '');

  const thumbnailAlt = typeof video.thumbnail === 'object' && video.thumbnail?.alt
    ? video.thumbnail.alt
    : video.title;

  const captionText = video.caption || video.description || '';

  return (
    <div className="lazy-yt">
      <div className="lazy-yt__media">
        {!isPlaying ? (
          <div className="lazy-yt__poster-box">
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={thumbnailAlt}
                className="lazy-yt__thumbnail"
                loading="lazy"
                width="640"
                height="360"
              />
            )}
            
            {isPending ? (
              <div className="lazy-yt__pending-overlay">
                <span className="lazy-yt__pending-badge">Official Video Coming Soon</span>
                <span className="lazy-yt__pending-note">Delivered at TEDxNITSrinagar · Recording in post-production</span>
              </div>
            ) : (
              <button
                type="button"
                className="lazy-yt__play-btn"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play: ${video.title}`}
              >
                <span className="lazy-yt__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        ) : (
          <iframe
            className="lazy-yt__iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      <div className="lazy-yt__meta">
        <h3 className="lazy-yt__title">{video.title}</h3>
        {captionText && (
          <p className="lazy-yt__caption">{captionText}</p>
        )}
      </div>
    </div>
  );
}
