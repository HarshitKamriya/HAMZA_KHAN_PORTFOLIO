import './CoachingChallenges.css';

/**
 * Section C2: Coaching Challenges
 * 
 * @param {{ challenges: import('../../cms/types').CoachingChallenge[] }} props
 */
export default function CoachingChallenges({ challenges }) {
  if (!challenges || challenges.length === 0) return null;

  const validChallenges = challenges
    .filter(c => c.visible)
    .sort((a, b) => a.order - b.order);

  if (validChallenges.length === 0) return null;

  return (
    <section className="coaching-challenges" aria-labelledby="challenges-heading">
      <div className="coaching-challenges__inner container">
        <header className="coaching-challenges__header">
          <h2 id="challenges-heading" className="coaching-challenges__title">
            Who this helps
          </h2>
          <p className="coaching-challenges__desc">
            Common communication challenges we address in one-to-one coaching:
          </p>
        </header>

        <div className="coaching-challenges__grid">
          {validChallenges.map((challenge, index) => (
            <article key={challenge.id} className="challenge-item">
              <span className="challenge-item__number">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="challenge-item__title">{challenge.title}</h3>
              <p className="challenge-item__desc">{challenge.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
