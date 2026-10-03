import { useEffect } from 'react';
import AboutIntro from '../components/about/AboutIntro';
import AboutChapter from '../components/about/AboutChapter';
import AboutFindingVoice from '../components/about/AboutFindingVoice';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutFinalBio from '../components/about/AboutFinalBio';
import { useAboutPage } from '../cms/hooks';

/**
 * About Page
 * 
 * Renders the editorial narrative of Hamza Khan.
 * Route: /about
 */
export default function About() {
  const { data, loading, error } = useAboutPage();

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} | Hamza Khan`;
    }
  }, [data]);

  if (error) {
    console.error('Failed to load about page content:', error);
    return <div className="error-state">Unable to load content. Please try again later.</div>;
  }

  if (loading || !data) {
    return null; // A real app might have a skeleton loader here
  }

  // Ensure content-truth by filtering out unpublished chapters
  const validChapters = data.chapters
    ?.filter(c => c.status === 'published' && c.visible)
    .sort((a, b) => a.order - b.order) || [];

  return (
    <article className="about-page">
      {/* A1: Introduction */}
      <AboutIntro content={data.intro} />

      {/* A2, A3, A4: Narrative Chapters */}
      {validChapters.map((chapter, index) => (
        <AboutChapter key={chapter.id} chapter={chapter} index={index} />
      ))}

      {/* A5: Finding a Voice / Milestones */}
      <AboutFindingVoice milestones={data.milestones} />

      {/* A6: Philosophy */}
      <AboutPhilosophy content={data.philosophy} />

      {/* A7: Final Bio */}
      <AboutFinalBio content={data.finalBio} />
    </article>
  );
}
