import { useCoachingPage } from '../cms/hooks';
import CoachingIntro from '../components/coaching/CoachingIntro';
import CoachingChallenges from '../components/coaching/CoachingChallenges';
import CoachingIndividual from '../components/coaching/CoachingIndividual';
import CoachingFounder from '../components/coaching/CoachingFounder';
import CoachingGroupOffer from '../components/coaching/CoachingGroupOffer';
import CoachingProcess from '../components/coaching/CoachingProcess';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import ClosingInquiry from '../components/closing/ClosingInquiry';
import SEO from '../components/common/SEO';

/**
 * Coaching Page
 * 
 * Route: /coaching
 */
export default function Coaching() {
  const { data, loading, error } = useCoachingPage();
  const coachingTestimonials = data?.testimonials || [];

  if (error) {
    console.error('Failed to load coaching page content:', error);
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
        title={data?.title || 'Communication Coaching'}
        description={data?.intro?.description || 'One-to-one online communication coaching for professionals.'}
        canonicalPath="/coaching"
        ogImage="/media/story-preview.jpg"
      />
      <article className="coaching-page">
      {/* Section C1: Intro */}
      <CoachingIntro content={data.intro} />

      {/* Section C2: Challenges */}
      <CoachingChallenges challenges={data.challenges} />

      {/* Section C3: Individual Coaching */}
      <CoachingIndividual offer={data.individualOffer} />

      {/* Section C4: Founder Pitch Pathway */}
      <CoachingFounder founderPathway={data.founderPathway} />

      {/* Section C5: Present With Confidence (Group Offer) */}
      <CoachingGroupOffer offer={data.groupOffer} />

      {/* Section C6: Process */}
      <CoachingProcess process={data.process} />

      {/* Section C7: Feedback */}
      {coachingTestimonials.length > 0 && (
        <TestimonialSection testimonials={coachingTestimonials} />
      )}

      {/* Section C8: Final Inquiry CTA */}
      <ClosingInquiry content={data.inquiry} />
    </article>
  </>
  );
}
