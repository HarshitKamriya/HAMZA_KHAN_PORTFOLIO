import './TestimonialSection.css';

/**
 * TestimonialSection
 * 
 * Renders approved and featured testimonials.
 * Avoids any fake stars or ratings. Emphasizes typography and real attribution.
 * 
 * @param {{ testimonials: import('../../cms/types').Testimonial[] }} props
 */
export default function TestimonialSection({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  // STRICT RULE: Only render approved and published testimonials
  const validTestimonials = testimonials
    .filter(t => t.permissionStatus === 'approved' && t.status === 'published' && t.featured)
    .sort((a, b) => a.order - b.order);

  if (validTestimonials.length === 0) return null;

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__inner">
        <header className="testimonials__header">
          <h2 id="testimonials-heading" className="testimonials__title">What People Say</h2>
        </header>

        <div className="testimonials__grid">
          {validTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <span className="testimonial-card__quote-mark" aria-hidden="true">“</span>
              <blockquote className="testimonial-card__quote">
                <p>{testimonial.quote}</p>
              </blockquote>
              
              <footer className="testimonial-card__author">
                <span className="testimonial-card__name">{testimonial.displayName}</span>
                {(testimonial.role || testimonial.company) && (
                  <span className="testimonial-card__role">
                    {testimonial.role}
                    {testimonial.role && testimonial.company && ' at '}
                    {testimonial.company}
                  </span>
                )}
                {testimonial.category && (
                  <span className="testimonial-card__category">
                    {testimonial.category}
                  </span>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
