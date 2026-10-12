import './SpeakingShowcase.css';

/**
 * Section 3: Watch Hamza Speak
 * Shows published video cards with YouTube embed or thumbnail placeholder.
 * Gallery photos are hidden per v2.0 plan (video-led approach).
 *
 * @param {{ videos: import('../../cms/types').VideoContent[], gallery: import('../../cms/types').MediaAsset[] }} props
 */
export default function SpeakingShowcase({ videos }) {
  const validVideos = videos
    ?.filter(v => v.published !== false && v.status !== 'draft')
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)) || [];

  if (validVideos.length === 0) return null;

  /**
   * Derive a clean YouTube embed URL from various input formats:
   *   - Full URL:   https://www.youtube.com/watch?v=ID
   *   - Short URL:  https://youtu.be/ID
   *   - Raw ID:     dQw4w9WgXcQ
   */
  const getEmbedUrl = (raw) => {
    if (!raw) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
      /^([A-Za-z0-9_-]{11})$/,
    ];
    for (const p of patterns) {
      const m = raw.match(p);
      if (m) return `https://www.youtube.com/embed/${m[1]}?rel=0&modestbranding=1`;
    }
    return null;
  };

  return (
    <section className="speaking-showcase" aria-labelledby="showcase-heading">
      <div className="speaking-showcase__inner">
        <header className="speaking-showcase__header">
          <span className="speaking-showcase__label">Watch Hamza Speak</span>
          <h2 id="showcase-heading" className="speaking-showcase__title">
            See It Live
          </h2>
          <p className="speaking-showcase__subtitle">
            Keynote addresses, masterclasses, and TEDx talk footage.
          </p>
        </header>

        <div className="speaking-showcase__videos">
          {validVideos.map((video) => {
            const embedUrl = getEmbedUrl(video.youtubeUrlOrId);
            const isPending = video.isPendingOfficial;

            return (
              <div key={video.id} className="showcase-video-card">
                {/* Video frame */}
                <div className="showcase-video-frame">
                  {embedUrl && !isPending ? (
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    /* Thumbnail placeholder for pending/no-URL videos */
                    <div className="showcase-video-placeholder">
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="showcase-video-placeholder__img"
                          loading="lazy"
                        />
                      )}
                      <div className="showcase-video-placeholder__overlay">
                        {isPending ? (
                          <span className="showcase-video-badge">Official video pending</span>
                        ) : (
                          <span className="showcase-video-badge">Video coming soon</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="showcase-video-card__meta">
                  <h3 className="showcase-video-card__title">{video.title}</h3>
                  {video.caption && (
                    <p className="showcase-video-card__caption">{video.caption}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
