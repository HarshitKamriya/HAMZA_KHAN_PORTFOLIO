import { Link } from 'react-router-dom';
import './WorkWithHamza.css';

/**
 * WorkWithHamza
 * 
 * Renders the three primary pathways (Speaking, Workshops, Coaching).
 * Data driven by CMS.
 * 
 * @param {{ services: import('../../cms/types').ServiceCard[] }} props
 */
export default function WorkWithHamza({ services }) {
  if (!services || services.length === 0) return null;

  const visibleServices = services
    .filter(s => s.visible)
    .sort((a, b) => a.order - b.order);

  if (visibleServices.length === 0) return null;

  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="services__inner">
        <header className="services__header">
          <span className="services__label">Work With Hamza</span>
          <h2 id="services-heading" className="services__title">Clear pathways to impact.</h2>
        </header>

        <div className="services__grid">
          {visibleServices.map((service) => (
            <div key={service.id} className="service-card">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              
              <Link to={service.ctaUrl} className="service-card__cta" aria-label={`${service.ctaLabel} - ${service.title}`}>
                {service.ctaLabel}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
