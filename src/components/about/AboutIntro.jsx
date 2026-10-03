import { Link } from 'react-router-dom';
import './AboutIntro.css';

/**
 * AboutIntro
 * 
 * Section A1: The introduction to the About page narrative.
 * 
 * @param {{ content: import('../../cms/types').AboutIntro }} props
 */
export default function AboutIntro({ content }) {
  if (!content || !content.visible) return null;

  const focalX = content.portrait?.focalPoint?.x ?? 0.5;
  const focalY = content.portrait?.focalPoint?.y ?? 0.5;
  const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

  return (
    <section className="about-intro" aria-labelledby="about-intro-heading">
      <div className="about-intro__inner">
        
        <div className="about-intro__content">
          <h1 id="about-intro-heading" className="about-intro__heading">
            {content.heading}
          </h1>
          <p className="about-intro__body">
            {content.introduction}
          </p>
          
          <div className="about-intro__actions">
            {content.primaryCTA && (
              <Link to={content.primaryCTA.url} className="btn-primary">
                {content.primaryCTA.label}
              </Link>
            )}
            {content.secondaryCTA && (
              <Link to={content.secondaryCTA.url} className="btn-secondary">
                {content.secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>

        {content.portrait && content.portrait.status === 'published' && (
          <div className="about-intro__media">
            <img 
              src={content.portrait.url} 
              alt={content.portrait.alt || ''}
              className="about-intro__image"
              style={{ objectPosition }}
              loading="eager" // LCP element
            />
          </div>
        )}

      </div>
    </section>
  );
}
