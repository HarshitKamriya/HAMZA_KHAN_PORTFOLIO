import { Link } from 'react-router-dom';
import './AboutPhilosophy.css';

/**
 * AboutPhilosophy
 * 
 * Section A6: The central philosophical quote of the site.
 * 
 * @param {{ content: import('../../cms/types').Philosophy }} props
 */
export default function AboutPhilosophy({ content }) {
  if (!content || !content.visible) return null;

  return (
    <section className="philosophy" aria-labelledby="philosophy-heading">
      <div className="philosophy__inner">
        <h2 id="philosophy-heading" className="sr-only">Personal Philosophy</h2>
        
        <blockquote className="philosophy__quote">
          <p>{content.quote}</p>
        </blockquote>
        
        {content.explanation && (
          <p className="philosophy__explanation">{content.explanation}</p>
        )}
        
        <div className="philosophy__actions">
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
    </section>
  );
}
