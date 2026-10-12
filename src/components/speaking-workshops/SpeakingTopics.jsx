import { Link } from 'react-router-dom';
import './SpeakingTopics.css';

/**
 * Section 2: Speaking Topics
 * 
 * @param {{ topics: import('../../cms/types').SpeakingTopic[] }} props
 */
export default function SpeakingTopics({ topics }) {
  if (!topics || topics.length === 0) return null;

  // Requirement 5.3: Publicly display ONLY delivered topics. Hide developing topics from public view.
  const validTopics = topics
    .filter(t => t.visible && t.status === 'delivered')
    .sort((a, b) => a.order - b.order);

  if (validTopics.length === 0) return null;

  return (
    <section id="speaking" className="speaking-topics" aria-labelledby="speaking-topics-heading">
      <header className="speaking-topics__header">
        <span className="speaking-topics__label">Speaking</span>
        <h2 id="speaking-topics-heading" className="speaking-topics__title">Signature Topics</h2>
        <p className="speaking-topics__subtitle">
          Keynotes on communication, agency, courage and opportunity — designed to help audiences think clearly, communicate confidently and take meaningful action when outcomes are uncertain.
        </p>
      </header>

      <div className="speaking-topics__list">
        {validTopics.map((topic, index) => {
          const imageUrl = typeof topic.image === 'string' ? topic.image : topic.image?.url;
          const imageAlt = typeof topic.image === 'object' ? (topic.image?.alt || '') : '';
          const isDraft = typeof topic.image === 'object' && topic.image?.status === 'draft';
          const hasImage = Boolean(imageUrl) && !isDraft;
          const isEven = index % 2 !== 0; // 0-indexed: alternating layout
          
          const className = [
            'topic-card',
            hasImage ? 'topic-card--with-media' : 'topic-card--text-only',
            isEven ? 'topic-card--even' : 'topic-card--odd'
          ].filter(Boolean).join(' ');

          const focalX = topic.image?.focalPoint?.x ?? 0.5;
          const focalY = topic.image?.focalPoint?.y ?? 0.5;
          const objectPosition = `${focalX * 100}% ${focalY * 100}%`;

          // Custom status label: use deliveredAt if present (e.g. "TEDxNITSrinagar")
          const statusText = topic.statusLabel
            || (topic.deliveredAt ? `Delivered at ${topic.deliveredAt}` : 'Delivered Keynote');

          return (
            <article key={topic.id} className={className}>
              <div className="topic-card__content">
                <div className="topic-card__top">
                  <span className={`topic-card__status topic-card__status--${topic.status}`}>
                    {statusText}
                  </span>
                  <span className="topic-card__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="topic-card__title">{topic.title}</h3>
                
                {topic.deliveryNote && (
                  <p className="topic-card__delivery-note" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem', marginTop: '-0.5rem', marginBottom: '0.75rem' }}>
                    {topic.deliveryNote}
                  </p>
                )}
                
                <p className="topic-card__summary">{topic.summary}</p>
                
                <div className="topic-card__details">
                  {topic.audience && (
                    <div className="topic-card__detail">
                      <span className="topic-card__detail-label">Audience</span>
                      <p className="topic-card__detail-text">{topic.audience}</p>
                    </div>
                  )}
                  {topic.approach && (
                    <div className="topic-card__detail">
                      <span className="topic-card__detail-label">Approach</span>
                      <p className="topic-card__detail-text">{topic.approach}</p>
                    </div>
                  )}
                </div>

                {topic.inquiryLabel && topic.inquiryUrl && (
                  <div className="topic-card__actions">
                    <Link to={topic.inquiryUrl} className="btn-primary topic-card__btn">
                      {topic.inquiryLabel}
                    </Link>
                  </div>
                )}
              </div>

              {hasImage && (
                <div className="topic-card__media">
                  <img 
                    src={imageUrl} 
                    alt={imageAlt || topic.title}
                    className="topic-card__image"
                    style={{ objectPosition }}
                    loading="lazy"
                  />
                  <div className="topic-card__media-glow" aria-hidden="true" />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
