import { useState } from 'react';
import './ContactFAQ.css';

/**
 * Contact FAQ Accordion
 * Displayed below the inquiry form. Supports #faq anchor.
 *
 * @param {{ faqs: Array<{id: string, question: string, answer: string, order: number, visible: boolean}> }} props
 */
export default function ContactFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(-1); // All closed by default

  if (!faqs || faqs.length === 0) return null;

  const validFaqs = faqs
    .filter(f => f.visible)
    .sort((a, b) => a.order - b.order);

  if (validFaqs.length === 0) return null;

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="contact-faq" aria-labelledby="contact-faq-heading">
      <div className="contact-faq__inner container container--narrow">
        <header className="contact-faq__header">
          <span className="contact-faq__label">FAQs</span>
          <h2 id="contact-faq-heading" className="contact-faq__title">
            Frequently Asked Questions
          </h2>
          <p className="contact-faq__subtitle">
            Common questions about coaching, speaking, and workshops.
          </p>
        </header>

        <div className="contact-faq__list">
          {validFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `contact-faq-btn-${faq.id}`;
            const panelId = `contact-faq-panel-${faq.id}`;

            return (
              <div key={faq.id} className={`contact-faq-item${isOpen ? ' contact-faq-item--open' : ''}`}>
                <button
                  id={buttonId}
                  className="contact-faq-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="contact-faq-item__question">{faq.question}</span>
                  <span className="contact-faq-item__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  className="contact-faq-item__panel"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="contact-faq-item__content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
