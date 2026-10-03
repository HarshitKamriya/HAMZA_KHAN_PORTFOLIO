import { Link } from 'react-router-dom';
import './SWInquiry.css';

/**
 * Section 8: Final Inquiry CTAs
 * 
 * @param {{ content: import('../../cms/types').SpeakingWorkshopsPage['closingInquiry'] }} props
 */
export default function SWInquiry({ content }) {
  if (!content) return null;

  return (
    <section className="sw-inquiry" aria-labelledby="inquiry-heading">
      <div className="sw-inquiry__inner">
        <h2 id="inquiry-heading" className="sw-inquiry__heading">
          {content.heading}
        </h2>
        <p className="sw-inquiry__body">{content.body}</p>
        
        <div className="sw-inquiry__actions">
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
