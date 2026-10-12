import AboutIntro from '../components/about/AboutIntro';
import AboutChapter from '../components/about/AboutChapter';
import AboutFindingVoice from '../components/about/AboutFindingVoice';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import SEO from '../components/common/SEO';
import { useAboutPage } from '../cms/hooks';

/**
 * About Page
 * 
 * Renders the approved 5-part editorial narrative of Hamza Khan.
 * Route: /about
 */
export default function About() {
  const { data, loading, error } = useAboutPage();

  if (error) {
    console.error('Failed to load about page content:', error);
    return <div className="error-state">Unable to load content. Please try again later.</div>;
  }

  if (loading || !data) {
    return null;
  }

  // Ensure content-truth by filtering out unpublished chapters
  const validChapters = data.chapters
    ?.filter(c => c.status === 'published' && c.visible)
    .sort((a, b) => a.order - b.order) || [];

  return (
    <>
      <SEO
        title={data?.title || 'About Hamza Khan'}
        description={data?.seoDescription || data?.intro?.introduction}
        canonicalPath="/about"
        ogImage={data?.intro?.portrait?.url || '/media/Startup Event Portrait with Trophy and Microphone.png'}
      />
      <article className="about-page">
        {/* A1: Introduction with 'Read My Story' anchor */}
        <AboutIntro content={data.intro} />

        {/* Narrative Chapters (01 through 05) */}
        {validChapters.map((chapter, index) => (
          <AboutChapter key={chapter.id} chapter={chapter} index={index} />
        ))}

        {/* Short factual milestone progression + Award Plaque Proof */}
        <AboutFindingVoice />

        {/* Dave Armstrong Testimonial */}
        {data.testimonials && data.testimonials.length > 0 && (
          <TestimonialSection testimonials={data.testimonials} />
        )}

        {/* Philosophy with 'Move before you know' and primary service CTAs */}
        <AboutPhilosophy content={data.philosophy} />
      </article>
    </>
  );
}
