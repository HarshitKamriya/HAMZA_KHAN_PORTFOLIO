import { Link } from 'react-router-dom';
import './CoachingGroupOffer.css';

/**
 * Section C5: Present With Confidence — Group Coaching Offer
 *
 * @param {{ offer: import('../../cms/types').CoachingGroupOffer }} props
 */
export default function CoachingGroupOffer({ offer }) {
  if (!offer || offer.visible === false) return null;

  const imgUrl = typeof offer.image === 'object' ? offer.image?.url : offer.image;
  const imgAlt = typeof offer.image === 'object' ? offer.image?.alt : '';
  const imgFocalX = offer.image?.focalPoint?.x ?? 0.5;
  const imgFocalY = offer.image?.focalPoint?.y ?? 0.4;
  const objectPosition = `${imgFocalX * 100}% ${imgFocalY * 100}%`;

  return (
    <section id="group-coaching" className="coaching-group-offer" aria-labelledby="group-offer-heading">
      <div className="coaching-group-offer__inner container container--narrow">

        <div className="coaching-group-offer__card">
          {/* Left: text content */}
          <div className="coaching-group-offer__content">
            <span className={`coaching-group-offer__status coaching-group-offer__status--${offer.status}`}>
              {offer.status === 'current' ? 'Now Enrolling' : offer.status}
            </span>

            <h2 id="group-offer-heading" className="coaching-group-offer__title">
              {offer.title}
            </h2>

            {offer.subtitle && (
              <p className="coaching-group-offer__subtitle">{offer.subtitle}</p>
            )}

            <p className="coaching-group-offer__desc">{offer.description}</p>

            {offer.coreAreas && offer.coreAreas.length > 0 && (
              <ul className="coaching-group-offer__areas">
                {offer.coreAreas.map((area) => (
                  <li key={area.id} className="coaching-group-offer__area">
                    <span className="coaching-group-offer__area-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>
                      <strong>{area.title}</strong>
                      {area.description && ` — ${area.description}`}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {offer.audience && (
              <p className="coaching-group-offer__audience">
                <span className="coaching-group-offer__audience-label">For</span>
                {offer.audience}
              </p>
            )}

            {offer.ctaLabel && offer.ctaUrl && (
              <Link to={offer.ctaUrl} className="btn-primary coaching-group-offer__cta">
                {offer.ctaLabel}
              </Link>
            )}
          </div>

          {/* Right: image */}
          {imgUrl && (
            <div className="coaching-group-offer__media">
              <img
                src={imgUrl}
                alt={imgAlt || offer.title}
                className="coaching-group-offer__image"
                style={{ objectPosition }}
                loading="lazy"
              />
              <div className="coaching-group-offer__media-glow" aria-hidden="true" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
