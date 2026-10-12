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

  const portraitUrl = typeof content.portrait === 'string' ? content.portrait : content.portrait?.url;
  const portraitAlt = typeof content.portrait === 'object' ? (content.portrait?.alt || '') : '';
  const isDraft = typeof content.portrait === 'object' && content.portrait?.status === 'draft';
  const showPortrait = Boolean(portraitUrl) && !isDraft;

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
            <a href="#story" className="btn-secondary">
              Read My Story
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem', width: '14px', height: '14px' }} aria-hidden="true">
                <path d="M8 3v10M3 9l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        {showPortrait && (
          <div className="about-intro__media">
            <img 
              src={portraitUrl} 
              alt={portraitAlt}
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
