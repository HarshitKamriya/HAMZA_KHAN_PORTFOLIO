import './SWIntro.css';

/**
 * Section 1: Combined Introduction
 * 
 * @param {{ content: import('../../cms/types').SpeakingWorkshopsPage['intro'] }} props
 */
export default function SWIntro({ content, oneSheet }) {
  if (!content) return null;

  return (
    <section className="sw-intro" aria-labelledby="sw-intro-heading">
      <div className="sw-intro__inner">
        <h1 id="sw-intro-heading" className="sw-intro__heading">
          {content.heading}
        </h1>
        
        <div className="sw-intro__grid">
          <div className="sw-intro__col">
            <h2 className="sw-intro__col-heading">Speaking</h2>
            <p className="sw-intro__col-body">{content.speakingDescription}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              {content.speakingCTA && (
                <a href={content.speakingCTA.url} className="btn-primary">
                  {content.speakingCTA.label}
                </a>
              )}
              {oneSheet && oneSheet.visible !== false && (
                <a
                  href={oneSheet.url || "/media/00_Hamza_Khan_Speaker_One-Sheet.pdf"}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  aria-label="Download Speaker One-Sheet PDF"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', width: '15px', height: '15px' }} aria-hidden="true">
                    <path d="M14 11v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3M8 2v9M4 7l4 4 4-4" />
                  </svg>
                  {oneSheet.buttonLabel || 'Download Speaker One-Sheet'}
                </a>
              )}
            </div>
          </div>
          
          <div className="sw-intro__col">
            <h2 className="sw-intro__col-heading">Workshops</h2>
            <p className="sw-intro__col-body">{content.workshopsDescription}</p>
            {content.workshopsCTA && (
              <a href={content.workshopsCTA.url} className="btn-secondary">
                {content.workshopsCTA.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
