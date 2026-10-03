import './SWTestimonials.css';

/**
 * Section 7: Feedback
 * Large editorial quotes, no carousels.
 * 
 * @param {{ testimonials: import('../../cms/types').Testimonial[] }} props
 */
export default function SWTestimonials({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  const validTestimonials = testimonials
    .filter(t => t.visible && t.status === 'published')
    .sort((a, b) => a.order - b.order)
    .slice(0, 3); // Restrict to 1-3 as requested

  if (validTestimonials.length === 0) return null;

  return (
    <section className="sw-testimonials" aria-labelledby="feedback-heading">
      <div className="sw-testimonials__inner">
        <h2 id="feedback-heading" className="sr-only">Feedback</h2>

        {validTestimonials.map((testimonial) => (
          <blockquote key={testimonial.id} className="sw-testimonial">
            <p className="sw-testimonial__quote">"{testimonial.quote}"</p>
            <footer className="sw-testimonial__attr">
              <span className="sw-testimonial__name">{testimonial.displayName}</span>
              <span className="sw-testimonial__role">
                {testimonial.role}
                {testimonial.role && testimonial.company && ', '}
                {testimonial.company}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
