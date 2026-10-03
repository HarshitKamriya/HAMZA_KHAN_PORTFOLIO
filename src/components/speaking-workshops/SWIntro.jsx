import './SWIntro.css';

/**
 * Section 1: Combined Introduction
 * 
 * @param {{ content: import('../../cms/types').SpeakingWorkshopsPage['intro'] }} props
 */
export default function SWIntro({ content }) {
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
            {content.speakingCTA && (
              <a href={content.speakingCTA.url} className="btn-primary">
                {content.speakingCTA.label}
              </a>
            )}
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
