import { Link } from 'react-router-dom';
import './CoachingFounder.css';

/**
 * Section C4: Founder Pitch Pathway
 * 
 * @param {{ founderPathway: import('../../cms/types').FounderPathway }} props
 */
export default function CoachingFounder({ founderPathway }) {
  if (!founderPathway || !founderPathway.visible) return null;

  return (
    <section id="founder-coaching" className="coaching-founder" aria-labelledby="founder-heading">
      <div className="coaching-founder__inner container container--narrow">
        
        <header className="coaching-founder__header">
          <span className="coaching-founder__label">Specialized Pathway</span>
          <h2 id="founder-heading" className="coaching-founder__title">
            {founderPathway.title}
          </h2>
        </header>

        <p className="coaching-founder__desc">
          {founderPathway.description}
        </p>
        
        {founderPathway.evidence && (
          <div className="coaching-founder__evidence">
            <p>{founderPathway.evidence}</p>
          </div>
        )}

        {founderPathway.approvedInclusions && founderPathway.approvedInclusions.length > 0 && (
          <div className="coaching-founder__inclusions">
            <ul className="coaching-founder__list">
              {founderPathway.approvedInclusions.map((item, idx) => (
                <li key={idx} className="coaching-founder__item">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {founderPathway.ctaLabel && founderPathway.ctaUrl && (
          <div className="coaching-founder__actions">
            <Link to={founderPathway.ctaUrl} className="btn-secondary">
              {founderPathway.ctaLabel}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
