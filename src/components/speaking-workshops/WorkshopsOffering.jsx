import { Link } from 'react-router-dom';
import './WorkshopsOffering.css';

/**
 * Section 5: Workshops Offering
 * 
 * @param {{ workshops: import('../../cms/types').WorkshopOffering[] }} props
 */
export default function WorkshopsOffering({ workshops }) {
  if (!workshops || workshops.length === 0) return null;

  const validWorkshops = workshops
    .filter(w => w.visible)
    .sort((a, b) => a.order - b.order);

  if (validWorkshops.length === 0) return null;

  return (
    <section id="workshops" className="workshops-offering" aria-labelledby="workshops-heading">
      <header className="workshops-offering__header">
        <span className="workshops-offering__label">Workshops</span>
        <h2 id="workshops-heading" className="workshops-offering__title">Practical Training</h2>
      </header>

      <div className="workshops-offering__list">
        {validWorkshops.map((workshop) => {
          const imageUrl = typeof workshop.image === 'string' ? workshop.image : workshop.image?.url;
          const imageAlt = typeof workshop.image === 'object' ? (workshop.image?.alt || '') : '';

          return (
            <article key={workshop.id} className="workshop-card">
              {imageUrl && (
                <div className="workshop-card__media">
                  <img
                    src={imageUrl}
                    alt={imageAlt || 'Hamza Khan facilitating an interactive communication workshop'}
                    className="workshop-card__img"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
              )}

              <span className={`workshop-card__status workshop-card__status--${workshop.status}`}>
                Interactive Training
              </span>

              <h3 className="workshop-card__title">{workshop.title}</h3>
              <p className="workshop-card__desc">{workshop.description}</p>

              <div className="workshop-card__details">
                {workshop.audience && (
                  <div className="workshop-detail">
                    <span className="workshop-detail__label">Ideal For</span>
                    <p className="workshop-detail__text">{workshop.audience}</p>
                  </div>
                )}
                {workshop.format && (
                  <div className="workshop-detail">
                    <span className="workshop-detail__label">Format</span>
                    <p className="workshop-detail__text">{workshop.format}</p>
                  </div>
                )}
              </div>

              {workshop.inquiryLabel && workshop.inquiryUrl && (
                <div className="workshop-card__actions">
                  <Link to={workshop.inquiryUrl} className="btn-secondary">
                    {workshop.inquiryLabel}
                  </Link>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
