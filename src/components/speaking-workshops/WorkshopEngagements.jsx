import './WorkshopEngagements.css';

/**
 * Section 6: Delivered Workshop Examples
 * 
 * @param {{ engagements: import('../../cms/types').WorkshopEngagement[] }} props
 */
export default function WorkshopEngagements({ engagements }) {
  if (!engagements || engagements.length === 0) return null;

  const validEngagements = engagements
    .filter(e => e.visible)
    .sort((a, b) => a.order - b.order);

  if (validEngagements.length === 0) return null;

  return (
    <section className="workshop-engagements" aria-labelledby="engagements-heading">
      <div className="workshop-engagements__inner">
        <header className="workshop-engagements__header">
          <span className="workshop-engagements__label">Past Engagements</span>
          <h2 id="engagements-heading" className="workshop-engagements__title">Selected Client Workshops</h2>
          <p className="workshop-engagements__subtitle">
            A track record of facilitating focused, practical communication sessions for teams, founders, and professionals.
          </p>
        </header>

        <div className="engagements-grid">
          {validEngagements.map((engagement) => (
            <article key={engagement.id} className="engagement-card">
              <span className="engagement-card__org">
                {engagement.organization} {engagement.eventName && `· ${engagement.eventName}`}
              </span>
              <h3 className="engagement-card__title">{engagement.title}</h3>
              <div className="engagement-card__meta">
                <span className="engagement-card__meta-label">Audience:</span>
                <span className="engagement-card__audience">{engagement.audience}</span>
              </div>
              {engagement.dateVerified && engagement.date && (
                <p className="engagement-card__date">
                  {engagement.date}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
