import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero — Cinematic homepage hero section
 * 
 * All content comes from CMS data (heroData prop).
 * No content is hardcoded in this component.
 * 
 * @param {{ heroData: import('../../cms/types').HeroContent }} props
 */
export default function Hero({ heroData, loading }) {
  if (loading) {
    return (
      <section className="hero hero--loading" aria-label="Loading hero">
        <div className="hero__loader" role="status" aria-label="Loading content">
          <span className="sr-only">Loading…</span>
        </div>
      </section>
    );
  }

  if (!heroData) return null;

  const { eyebrow, headline, subline, primaryCTA, secondaryCTA, image } = heroData;

  const imageUrl = typeof image === 'string' ? image : image?.url;
  const imageAlt = typeof image === 'object' ? (image?.alt || '') : '';
  const isDraft = typeof image === 'object' && image?.status === 'draft';
  const showImage = Boolean(imageUrl) && !isDraft;

  // Compute object-position from focal point
  const focalX = image?.focalPoint?.x ?? 0.5;
  const focalY = image?.focalPoint?.y ?? 0.35;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  return (
    <section className="hero" aria-label="Hero">
      {/* Content */}
      <div className="hero__content">
        {eyebrow && (
          <p className="hero__eyebrow">{eyebrow}</p>
        )}

        <h1 className="hero__headline">{headline}</h1>

        {subline && (
          <p className="hero__subline">{subline}</p>
        )}

        <div className="hero__actions">
          {primaryCTA && (
            <Link
              to={primaryCTA.url}
              className="hero__cta-primary"
            >
              {primaryCTA.label}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          )}
          {secondaryCTA && (
            <Link
              to={secondaryCTA.url}
              className="hero__cta-secondary"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>

      {/* Media */}
      {showImage && (
        <div className="hero__media">
          <div className="hero__image-wrapper">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="hero__image"
              style={{ objectPosition }}
              loading="eager"
              fetchPriority="high"
              width="960"
              height="1080"
            />
          </div>
          {image?.caption && (
            <span className="hero__caption">{image.caption}</span>
          )}
        </div>
      )}
    </section>
  );
}
