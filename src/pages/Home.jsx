import Hero from '../components/hero/Hero';
import CredibilityStrip from '../components/credibility/CredibilityStrip';
import WatchHamzaSpeak from '../components/video/WatchHamzaSpeak';
import WorkWithHamza from '../components/services/WorkWithHamza';
import StoryPreview from '../components/story/StoryPreview';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import ClosingInquiry from '../components/closing/ClosingInquiry';
import SEO from '../components/common/SEO';
import { useHomePage } from '../cms/hooks';

/**
 * Home Page
 * 
 * Renders the major sections of the homepage in order:
 * 1. Hero
 * 2. Credibility Strip (Recognized As)
 * 3. Watch Hamza Speak (2 lazy YouTube slots)
 * 4. Work With Hamza (Commercial pathways)
 * 5. Story Preview
 * 6. Testimonial (Hatice Gülnhal Yavuz)
 * 7. Closing Inquiry
 */
export default function Home() {
  const { data, loading, error } = useHomePage();

  if (error) {
    console.error('Failed to load homepage content:', error);
  }

  const videos = data?.speakingVideos || (data?.featuredVideo ? [data.featuredVideo] : []);

  return (
    <>
      <SEO
        title=""
        description={data?.hero?.subline || 'Hamza helps professionals make complex ideas clear and communicate confidently, especially under pressure.'}
        canonicalPath="/"
        ogImage={data?.hero?.image?.url || '/media/hero-stage.png'}
      />
      <Hero heroData={data?.hero} loading={loading} />
      
      {!loading && data && (
        <>
          <CredibilityStrip credentials={data.credentials} />
          <WatchHamzaSpeak videos={videos} />
          <WorkWithHamza services={data.services} />
          <StoryPreview content={data.storyPreview} />
          <TestimonialSection testimonials={data.featuredTestimonials} />
          <ClosingInquiry content={data.closingInquiry} />
        </>
      )}
    </>
  );
}
