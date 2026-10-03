import Hero from '../components/hero/Hero';
import CredibilityStrip from '../components/credibility/CredibilityStrip';
import VideoShowcase from '../components/video/VideoShowcase';
import WorkWithHamza from '../components/services/WorkWithHamza';
import StoryPreview from '../components/story/StoryPreview';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import ClosingInquiry from '../components/closing/ClosingInquiry';
import { useHomePage } from '../cms/hooks';

/**
 * Home Page
 * 
 * Renders the 7 major sections of the homepage in order.
 * All content is driven by the CMS data.
 */
export default function Home() {
  const { data, loading, error } = useHomePage();

  if (error) {
    console.error('Failed to load homepage content:', error);
  }

  return (
    <>
      <Hero heroData={data?.hero} loading={loading} />
      
      {!loading && data && (
        <>
          <CredibilityStrip credentials={data.credentials} />
          <VideoShowcase video={data.featuredVideo} />
          <WorkWithHamza services={data.services} />
          <StoryPreview content={data.storyPreview} />
          <TestimonialSection testimonials={data.featuredTestimonials} />
          <ClosingInquiry content={data.closingInquiry} />
        </>
      )}
    </>
  );
}
