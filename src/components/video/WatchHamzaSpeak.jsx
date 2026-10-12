import LazyYouTubeVideo from './LazyYouTubeVideo';
import './WatchHamzaSpeak.css';

/**
 * WatchHamzaSpeak Section
 * 
 * Used on Homepage (after credentials, before Work With Hamza)
 * and Speaking & Workshops (replacing "Speaking in Action").
 * 
 * Provides at least 2 CMS-editable video slots, plus optional proof photos.
 * 
 * @param {{
 *   videos: Array<any>,
 *   title?: string,
 *   subtitle?: string,
 *   proofPhotos?: Array<{ id: string, url: string, alt?: string, caption?: string }>
 * }} props
 */
export default function WatchHamzaSpeak({
  videos = [],
  title = 'Watch Hamza Speak',
  subtitle = 'Keynotes, talks, and moments from the stage.',
  proofPhotos = []
}) {
  // Filter published and visible videos
  const activeVideos = (videos || [])
    .filter(v => v && v.published !== false && v.status !== 'draft')
    .sort((a, b) => (a.sortOrder || a.order || 0) - (b.sortOrder || b.order || 0));

  if (activeVideos.length === 0 && (!proofPhotos || proofPhotos.length === 0)) {
    return null;
  }

  // Cap proof photos to maximum 3 as per requirement 5.5
  const validPhotos = (proofPhotos || []).slice(0, 3);

  return (
    <section className="watch-speak" aria-labelledby="watch-speak-heading">
      <div className="watch-speak__inner container">
        <header className="watch-speak__header">
          <span className="watch-speak__eyebrow">Speaking In Action</span>
          <h2 id="watch-speak-heading" className="watch-speak__title">{title}</h2>
          {subtitle && <p className="watch-speak__subtitle">{subtitle}</p>}
        </header>

        {activeVideos.length > 0 && (
          <div className="watch-speak__grid">
            {activeVideos.map((video, idx) => (
              <LazyYouTubeVideo key={video.id || `video-slot-${idx}`} video={video} />
            ))}
          </div>
        )}

        {validPhotos.length > 0 && (
          <div className="watch-speak__proof-photos">
            <h3 className="sr-only">Stage Proof Photos</h3>
            <div className="watch-speak__photos-grid">
              {validPhotos.map((photo, pIdx) => (
                <div key={photo.id || `photo-${pIdx}`} className="watch-speak__photo-card">
                  <img
                    src={photo.url}
                    alt={photo.alt || 'Hamza Khan speaking on stage'}
                    className="watch-speak__photo-img"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  {photo.caption && (
                    <span className="watch-speak__photo-caption">{photo.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
