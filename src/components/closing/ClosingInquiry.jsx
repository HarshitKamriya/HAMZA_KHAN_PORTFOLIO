import { Link } from 'react-router-dom';
import './ClosingInquiry.css';

/**
 * ClosingInquiry
 * 
 * Final section of the homepage guiding the user to the contact options.
 * Driven by CMS data.
 * 
 * @param {{ content: import('../../cms/types').ClosingInquiryContent }} props
 */
export default function ClosingInquiry({ content }) {
  if (!content) return null;

  return (
    <section className="closing" aria-labelledby="closing-heading">
      <div className="closing__inner">
        <h2 id="closing-heading" className="closing__heading">{content.heading}</h2>
        
        {content.supportingText && (
          <p className="closing__support">{content.supportingText}</p>
        )}
        
        <div className="closing__actions">
          {content.primaryCTA && (
            <Link to={content.primaryCTA.url} className="closing__cta-primary">
              {content.primaryCTA.label}
            </Link>
          )}
          
          {content.secondaryCTA && (
            <Link to={content.secondaryCTA.url} className="closing__cta-secondary">
              {content.secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
