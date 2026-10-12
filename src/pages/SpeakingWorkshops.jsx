import { useSpeakingWorkshopsPage } from '../cms/hooks';
import SWIntro from '../components/speaking-workshops/SWIntro';
import SpeakingTopics from '../components/speaking-workshops/SpeakingTopics';
import SpeakingShowcase from '../components/speaking-workshops/SpeakingShowcase';
import SpeakingEvidence from '../components/speaking-workshops/SpeakingEvidence';
import WorkshopsOffering from '../components/speaking-workshops/WorkshopsOffering';
import WorkshopEngagements from '../components/speaking-workshops/WorkshopEngagements';
import SWTestimonials from '../components/speaking-workshops/SWTestimonials';
import SWInquiry from '../components/speaking-workshops/SWInquiry';
import SEO from '../components/common/SEO';

/**
 * Speaking & Workshops Page
 * 
 * Route: /speaking-workshops
 */
export default function SpeakingWorkshops() {
  const { data, loading, error } = useSpeakingWorkshopsPage();

  if (error) {
    console.error('Failed to load speaking-workshops page content:', error);
    return <div className="error-state">Unable to load content. Please try again later.</div>;
  }

  if (loading || !data) {
    return null;
  }

  // Ensure content-truth by filtering out unpublished page content
  if (data.status !== 'published') {
    return <div className="error-state">Content is currently unavailable.</div>;
  }

  return (
    <>
      <SEO
        title={data?.title || 'Speaking & Workshops'}
        description={data?.seoDescription || data?.intro?.speakingDescription}
        canonicalPath="/speaking-workshops"
        ogImage="/media/topic-move.jpg"
      />
      <article className="speaking-workshops-page">
      {/* Section 1: Intro (oneSheet prop enables download button in hero) */}
      <SWIntro content={data.intro} oneSheet={data.oneSheet} />

      {/* Section 2: Speaking Topics */}
      <SpeakingTopics topics={data.topics} />

      {/* Section 3: Speaking Showcase (Video + Photos) */}
      <SpeakingShowcase videos={data.videos} gallery={data.gallery} />

      {/* Section 4: Credentials + One-Sheet */}
      <SpeakingEvidence credentials={data.credentials} oneSheet={data.oneSheet} />

      {/* Section 5: Workshops Offering */}
      <WorkshopsOffering workshops={data.workshops} />

      {/* Section 6: Engagements — heading is CMS-driven via engagementsHeading */}
      <WorkshopEngagements engagements={data.engagements} heading={data.engagementsHeading} />

      {/* Section 7: Feedback */}
      <SWTestimonials testimonials={data.testimonials} />

      {/* Section 8: Final Inquiry CTA */}
      <SWInquiry content={data.closingInquiry} />
    </article>
  </>
  );
}
