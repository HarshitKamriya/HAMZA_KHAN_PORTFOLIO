import { Link } from 'react-router-dom';
import './AboutFinalBio.css';

/**
 * AboutFinalBio
 * 
 * Section A7: A final summary biography that acts as "who I am today"
 * rather than a resume, transitioning the user to the commercial pages.
 * 
 * @param {{ content: import('../../cms/types').FinalBio }} props
 */
export default function AboutFinalBio({ content }) {
  if (!content || !content.visible) return null;

  return (
    <section className="final-bio" aria-labelledby="final-bio-heading">
      <div className="final-bio__inner">
        <header className="final-bio__header">
          <h2 id="final-bio-heading" className="final-bio__name">{content.name}</h2>
          <p className="final-bio__title">{content.title}</p>
        </header>

        <p className="final-bio__body">{content.bio}</p>

        <div className="final-bio__actions">
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
