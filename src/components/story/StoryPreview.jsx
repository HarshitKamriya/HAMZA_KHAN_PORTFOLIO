import { Link } from 'react-router-dom';
import './StoryPreview.css';

/**
 * StoryPreview
 * 
 * Renders the story preview section on the homepage.
 * Includes a strong pull quote and a link to the full About page.
 * 
 * @param {{ content: import('../../cms/types').StoryPreviewContent }} props
 */
export default function StoryPreview({ content }) {
  if (!content || !content.visible) return null;

  const imageUrl = typeof content.image === 'string' ? content.image : content.image?.url;
  const imageAlt = typeof content.image === 'object' ? (content.image?.alt || '') : '';
  const isDraft = typeof content.image === 'object' && content.image?.status === 'draft';
  const showImage = Boolean(imageUrl) && !isDraft;

  // Compute focal point if available
  const focalX = content.image?.focalPoint?.x ?? 0.5;
  const focalY = content.image?.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  return (
    <section className="story-preview" aria-labelledby="story-heading">
      <div className="story-preview__inner">
        
        {/* Media Side */}
        {showImage && (
          <div className="story-preview__media">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="story-preview__image"
              style={{ objectPosition }}
              loading="lazy"
            />
          </div>
        )}

        {/* Content Side */}
        <div className="story-preview__content">
          <span className="story-preview__label" id="story-heading">{content.headline}</span>
          
          {content.pullQuote && (
            <blockquote className="story-preview__pullquote">
              <p>{content.pullQuote}</p>
            </blockquote>
          )}
          
          {content.excerpt && (
            <p className="story-preview__excerpt">{content.excerpt}</p>
          )}
          
          {content.ctaUrl && content.ctaLabel && (
            <Link to={content.ctaUrl} className="story-preview__cta">
              {content.ctaLabel}
            </Link>
          )}
        </div>
        
      </div>
    </section>
  );
}
