import './AboutFindingVoice.css';

/**
 * AboutMilestoneStrip (Section A5)
 * 
 * Factual, short milestone progression without resume filler:
 * School Speaking → Competitions → Mentorship → Championship → TEDx → Workshops → Coaching
 * Includes the 2025 Toastmasters Division Champion award plaque proof.
 */
export default function AboutFindingVoice() {
  const steps = [
    'School Speaking',
    'Competitions',
    'Mentorship',
    'Championship',
    'TEDx',
    'Workshops',
    'Coaching'
  ];

  return (
    <section className="milestones-strip" aria-labelledby="milestones-strip-heading">
      <div className="milestones-strip__inner container">
        <header className="milestones-strip__header">
          <span className="milestones-strip__label">Milestones & Craft</span>
          <h2 id="milestones-strip-heading" className="milestones-strip__title">
            The Path of Deliberate Practice
          </h2>
        </header>

        {/* Short factual milestone flow */}
        <div className="milestones-strip__flow" aria-label="Speaking and coaching journey milestones">
          {steps.map((step, idx) => (
            <div key={step} className="milestones-strip__step">
              <span className="milestones-strip__step-num">0{idx + 1}</span>
              <span className="milestones-strip__step-name">{step}</span>
              {idx < steps.length - 1 && (
                <span className="milestones-strip__arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Recognition proof: 2025 Toastmasters Division Championship plaque */}
        <div className="milestones-strip__proof">
          <div className="milestones-strip__proof-card">
            <div className="milestones-strip__proof-media">
              <img
                src="/media/06_award_plaque.jpeg"
                alt="2025 Toastmasters Division Champion Türkiye Award Plaque"
                className="milestones-strip__proof-img"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="milestones-strip__proof-info">
              <span className="milestones-strip__proof-badge">Recognition & Distinction</span>
              <h3 className="milestones-strip__proof-title">2025 Toastmasters Division Champion — Türkiye</h3>
              <p className="milestones-strip__proof-desc">
                Competitive speaking across international divisions, refining structure, emotional connection, and high-pressure delivery under competitive constraints.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
