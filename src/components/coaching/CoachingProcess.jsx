import './CoachingProcess.css';

/**
 * Section C5: How Coaching Works
 * 
 * @param {{ process: import('../../cms/types').ProcessStep[] }} props
 */
export default function CoachingProcess({ process }) {
  if (!process || process.length === 0) return null;

  const validSteps = process
    .filter(p => p.visible)
    .sort((a, b) => a.order - b.order);

  if (validSteps.length === 0) return null;

  return (
    <section className="coaching-process" aria-labelledby="process-heading">
      <div className="coaching-process__inner container">
        <header className="coaching-process__header">
          <h2 id="process-heading" className="coaching-process__title">
            How it works
          </h2>
        </header>

        <div className="coaching-process__steps">
          {validSteps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="process-step__indicator">
                <span className="process-step__number">{step.number}</span>
                {index !== validSteps.length - 1 && (
                  <div className="process-step__line" aria-hidden="true" />
                )}
              </div>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
