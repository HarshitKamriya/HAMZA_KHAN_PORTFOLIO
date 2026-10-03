import './SpeakingShowcase.css';

/**
 * Section 3: Speaking Showcase
 * Displays authorized videos and photo gallery.
 * 
 * @param {{ videos: import('../../cms/types').VideoContent[], gallery: import('../../cms/types').MediaAsset[] }} props
 */
export default function SpeakingShowcase({ videos, gallery }) {
  const validVideos = videos?.filter(v => v.visible).sort((a, b) => a.order - b.order) || [];
  const validGallery = gallery?.filter(g => g.status === 'published').sort((a, b) => a.order - b.order) || [];

  if (validVideos.length === 0 && validGallery.length === 0) {
    return null; // Graceful fallback
  }

  return (
    <section className="speaking-showcase" aria-labelledby="showcase-heading">
      <div className="speaking-showcase__inner">
        <header className="speaking-showcase__header">
          <h2 id="showcase-heading" className="sr-only">Speaking Showcase</h2>
        </header>

        {validVideos.length > 0 && (
          <div className="speaking-showcase__videos">
            {validVideos.map((video) => (
              <div key={video.id} className="showcase-video">
                {/* Fallback player UI since real embeds are not authorized yet */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-muted)' }}>
                  [Video Player: {video.title}]
                </div>
              </div>
            ))}
          </div>
        )}

        {validGallery.length > 0 && (
          <div className="speaking-showcase__gallery">
            {validGallery.map((item) => {
              const focalX = item.focalPoint?.x ?? 0.5;
              const focalY = item.focalPoint?.y ?? 0.5;
              const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

              return (
                <div key={item.id} className="showcase-gallery-item">
                  <img 
                    src={item.url} 
                    alt={item.alt || ''} 
                    className="showcase-gallery-image"
                    style={{ objectPosition }}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
