import './CredibilityStrip.css';

/**
 * CredibilityStrip
 * 
 * Renders verified credentials. Filters out any credentials
 * that are not marked as 'approved' or are hidden.
 * 
 * @param {{ credentials: import('../../cms/types').Credential[] }} props
 */
export default function CredibilityStrip({ credentials }) {
  if (!credentials || credentials.length === 0) return null;

  // ONLY render approved and visible credentials (CONTENT-TRUTH RULE)
  const approvedCredentials = credentials
    .filter(cred => cred.verificationStatus === 'approved' && cred.visible)
    .sort((a, b) => a.order - b.order);

  if (approvedCredentials.length === 0) return null;

  return (
    <section className="credibility" aria-label="Professional Credentials">
      <div className="credibility__inner">
        <h2 className="sr-only">Credentials & Distinctions</h2>
        <span className="credibility__label" aria-hidden="true">Recognized As</span>
        
        <ul className="credibility__list">
          {approvedCredentials.map((cred) => (
            <li key={cred.id} className="credibility__item">
              <span className="credibility__title">{cred.label}</span>
              {cred.shortDescription && (
                <span className="credibility__desc">{cred.shortDescription}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
