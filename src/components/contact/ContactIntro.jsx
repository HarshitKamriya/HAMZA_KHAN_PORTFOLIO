import './ContactIntro.css';

/**
 * Section T1: Contact Introduction
 * 
 * @param {{ content: import('../../cms/types').ContactIntro }} props
 */
export default function ContactIntro({ content }) {
  if (!content) return null;

  return (
    <div className="contact-intro">
      <h1 className="contact-intro__title">{content.heading}</h1>
      <p className="contact-intro__desc">{content.description}</p>
    </div>
  );
}
