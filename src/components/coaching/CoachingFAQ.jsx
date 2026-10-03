import { useState } from 'react';
import './CoachingFAQ.css';

/**
 * Section C7: FAQ
 * 
 * @param {{ faqs: import('../../cms/types').FAQ[] }} props
 */
export default function CoachingFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const validFaqs = faqs
    .filter(f => f.visible)
    .sort((a, b) => a.order - b.order);

  if (validFaqs.length === 0) return null;

  const [openIndex, setOpenIndex] = useState(0); // Open first FAQ by default

  const toggleFaq = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="faqs" className="coaching-faq" aria-labelledby="faq-heading">
      <div className="coaching-faq__inner container container--narrow">
        <header className="coaching-faq__header">
          <h2 id="faq-heading" className="coaching-faq__title">
            Frequently Asked Questions
          </h2>
        </header>

        <div className="coaching-faq__list" role="tablist">
          {validFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  id={buttonId}
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  role="tab"
                  aria-selected={isOpen}
                >
                  <span className="faq-item__question">{faq.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  className="faq-item__panel"
                  role="tabpanel"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="faq-item__content">
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
