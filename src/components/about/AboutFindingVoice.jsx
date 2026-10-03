import './AboutFindingVoice.css';

/**
 * AboutFindingVoice
 * 
 * Section A5: The chronological journey (timeline) without using forced scroll animations.
 * 
 * @param {{ milestones: import('../../cms/types').JourneyMilestone[] }} props
 */
export default function AboutFindingVoice({ milestones }) {
  if (!milestones || milestones.length === 0) return null;

  const validMilestones = milestones
    .filter(m => m.visible && m.status === 'published')
    .sort((a, b) => a.order - b.order);

  if (validMilestones.length === 0) return null;

  return (
    <section className="milestones" aria-labelledby="milestones-heading">
      <div className="milestones__inner">
        <header className="milestones__header">
          <span className="milestones__label">The Journey</span>
          <h2 id="milestones-heading" className="milestones__title">Finding a Voice</h2>
        </header>

        <div className="milestones__list" role="list">
          {validMilestones.map((milestone) => (
            <article key={milestone.id} className="milestone" role="listitem">
              <span className="milestone__category">{milestone.category}</span>
              <h3 className="milestone__title">{milestone.title}</h3>
              <p className="milestone__desc">{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
