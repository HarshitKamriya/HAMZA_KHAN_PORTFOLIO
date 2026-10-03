import { Link } from 'react-router-dom';
import './CoachingIndividual.css';

/**
 * Section C3: Individual Coaching
 * 
 * @param {{ offer: import('../../cms/types').CoachingOffer }} props
 */
export default function CoachingIndividual({ offer }) {
  if (!offer || !offer.visible) return null;

  return (
    <section id="individual-coaching" className="coaching-individual" aria-labelledby="individual-heading">
      <div className="coaching-individual__inner container container--narrow">
        
        <span className={`coaching-individual__status coaching-individual__status--${offer.status}`}>
          {offer.status}
        </span>

        <h2 id="individual-heading" className="coaching-individual__title">
          {offer.title}
        </h2>
        
        <p className="coaching-individual__desc">
          {offer.description}
        </p>

        <div className="coaching-individual__details">
          {offer.audience && (
            <div className="coaching-detail">
              <span className="coaching-detail__label">For</span>
              <p className="coaching-detail__text">{offer.audience}</p>
            </div>
          )}
          {offer.deliveryType && (
            <div className="coaching-detail">
              <span className="coaching-detail__label">Delivery</span>
              <p className="coaching-detail__text">{offer.deliveryType}</p>
            </div>
          )}
        </div>

        {offer.approvedInclusions && offer.approvedInclusions.length > 0 && (
          <div className="coaching-individual__inclusions">
            <h3 className="coaching-inclusions__title">Focus Areas</h3>
            <ul className="coaching-inclusions__list">
              {offer.approvedInclusions.map((item, idx) => (
                <li key={idx} className="coaching-inclusions__item">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Public Price Protection: Only show if enabled AND has valid internalPrice */}
        {offer.publicPriceEnabled && offer.internalPrice > 0 && (
          <div className="coaching-individual__price-alert">
            <p>Investment: ${offer.internalPrice} USD</p>
          </div>
        )}

        {offer.ctaLabel && offer.ctaUrl && (
          <Link to={offer.ctaUrl} className="btn-primary coaching-individual__cta">
            {offer.ctaLabel}
          </Link>
        )}

      </div>
    </section>
  );
}
