import { useEffect, useState } from 'react';
import { useCoachingPage } from '../cms/hooks';
import CoachingIntro from '../components/coaching/CoachingIntro';
import CoachingChallenges from '../components/coaching/CoachingChallenges';
import CoachingIndividual from '../components/coaching/CoachingIndividual';
import CoachingFounder from '../components/coaching/CoachingFounder';
import CoachingProcess from '../components/coaching/CoachingProcess';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import CoachingFAQ from '../components/coaching/CoachingFAQ';
import ClosingInquiry from '../components/closing/ClosingInquiry';

/**
 * Coaching Page
 * 
 * Route: /coaching
 */
export default function Coaching() {
  const { data, loading, error } = useCoachingPage();
  const [coachingTestimonials, setCoachingTestimonials] = useState([]);

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} | Hamza Khan`;
    }
    
    // Testimonials are embedded in coaching.json directly as an array of objects
    if (data?.testimonials) {
      setCoachingTestimonials(data.testimonials);
    }
  }, [data]);

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
    <article className="coaching-page">
      {/* Section C1: Intro */}
      <CoachingIntro content={data.intro} />

      {/* Section C2: Challenges */}
      <CoachingChallenges challenges={data.challenges} />

      {/* Section C3: Individual Coaching */}
      <CoachingIndividual offer={data.individualOffer} />

      {/* Section C4: Founder Pitch Pathway */}
      <CoachingFounder founderPathway={data.founderPathway} />

      {/* Section C5: Process */}
      <CoachingProcess process={data.process} />

      {/* Section C6: Feedback */}
      {coachingTestimonials.length > 0 && (
        <TestimonialSection testimonials={coachingTestimonials} />
      )}

      {/* Section C7: FAQs */}
      <CoachingFAQ faqs={data.faqs} />

      {/* Section C8: Final Inquiry CTA */}
      <ClosingInquiry content={data.inquiry} />
    </article>
  );
}
