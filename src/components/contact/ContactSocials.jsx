import './ContactSocials.css';

/**
 * Section T6: Alternate Contact / Socials
 * 
 * @param {{ socialLinks: import('../../cms/types').SocialLink[], alternateContact: any }} props
 */
export default function ContactSocials({ socialLinks, alternateContact }) {
  const validLinks = socialLinks?.filter(l => l.visible).sort((a, b) => a.order - b.order) || [];

  if (validLinks.length === 0 && !alternateContact?.email) return null;

  return (
    <div className="contact-socials">
      <h2 className="contact-socials__title">Alternate Contact</h2>
      
      {alternateContact?.email && (
        <a href={`mailto:${alternateContact.email}`} className="contact-socials__email">
          {alternateContact.email}
        </a>
      )}

      {validLinks.length > 0 && (
        <ul className="contact-socials__list">
          {validLinks.map(link => (
            <li key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="contact-socials__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
