import './SpeakingEvidence.css';

/**
 * Section 4: Credentials + Speaker One-Sheet
 * 
 * @param {{ credentials: import('../../cms/types').Credential[], oneSheet: import('../../cms/types').SpeakerOneSheet }} props
 */
export default function SpeakingEvidence({ credentials, oneSheet }) {
  const validCreds = credentials?.filter(c => c.visible && c.verificationStatus === 'verified').sort((a, b) => a.order - b.order) || [];
  
  if (validCreds.length === 0 && (!oneSheet || !oneSheet.visible)) {
    return null;
  }

  return (
    <section className="speaking-evidence" aria-labelledby="evidence-heading">
      <div className="speaking-evidence__inner">
        <h2 id="evidence-heading" className="sr-only">Verified Credentials</h2>

        {validCreds.length > 0 && (
          <div className="speaking-evidence__creds">
            <h3 className="speaking-evidence__creds-title">Credentials</h3>
            {validCreds.map((cred) => (
              <article key={cred.id} className="cred-item">
                <span className="cred-item__label">{cred.label}</span>
                <p className="cred-item__desc">{cred.description}</p>
              </article>
            ))}
          </div>
        )}

        {oneSheet && oneSheet.visible && oneSheet.url && (
          <div className="speaking-evidence__onesheet">
            <a 
              href={oneSheet.url} 
              className="btn-download" 
              download 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${oneSheet.buttonLabel} (PDF)`}
            >
              {oneSheet.buttonLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
