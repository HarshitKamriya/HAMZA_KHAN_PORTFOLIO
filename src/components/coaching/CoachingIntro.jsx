import { Link } from 'react-router-dom';
import './CoachingIntro.css';

/**
 * Section C1: Coaching Introduction
 * 
 * @param {{ content: import('../../cms/types').CoachingIntro }} props
 */
export default function CoachingIntro({ content }) {
  if (!content || !content.visibility) return null;

  return (
    <section className="coaching-intro" aria-labelledby="coaching-heading">
      <div className="coaching-intro__inner container">
        <div className="coaching-intro__content">
          {content.eyebrow && (
            <span className="coaching-intro__eyebrow">{content.eyebrow}</span>
          )}
          
          <h1 id="coaching-heading" className="coaching-intro__title">
            {content.heading}
          </h1>
          
          {content.description && (
            <p className="coaching-intro__desc">{content.description}</p>
          )}
          
          {content.ctaLabel && content.ctaUrl && (
            <Link to={content.ctaUrl} className="btn-primary coaching-intro__cta">
              {content.ctaLabel}
            </Link>
          )}
        </div>

        {/* If no image provided, we can rely on a typography-led design which just centers or expands content */}
        {Boolean(typeof content.image === 'string' ? content.image : content.image?.url) && content.image?.status !== 'draft' && (
          <div className="coaching-intro__media">
            <img 
              src={typeof content.image === 'string' ? content.image : content.image?.url} 
              alt={typeof content.image === 'object' ? (content.image?.alt || content.imageAlt || '') : (content.imageAlt || '')}
              className="coaching-intro__image"
              loading="eager"
            />
          </div>
        )}
      </div>
    </section>
  );
}
