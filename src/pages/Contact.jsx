import { useContactPage } from '../cms/hooks';
import ContactIntro from '../components/contact/ContactIntro';
import InquiryForm from '../components/contact/InquiryForm';
import ContactSocials from '../components/contact/ContactSocials';
import ContactFAQ from '../components/contact/ContactFAQ';
import SEO from '../components/common/SEO';
import './Contact.css';

/**
 * Contact Page
 * 
 * Route: /contact
 */
export default function Contact() {
  const { data, loading, error } = useContactPage();

  if (error) {
    console.error('Failed to load contact page content:', error);
    return <div className="error-state">Unable to load content. Please try again later.</div>;
  }

  if (loading || !data) {
    return null;
  }

  if (data.status !== 'published') {
    return <div className="error-state">Content is currently unavailable.</div>;
  }

  return (
    <>
      <SEO
        title={data?.title || 'Contact & Inquiries'}
        description={data?.intro?.description || 'Get in touch with Hamza Khan for speaking engagements, workshops, or coaching.'}
        canonicalPath="/contact"
        ogImage="/media/about-portrait.jpg"
      />
      <div className="contact-page container">
      <div className="contact-page__inner">
        <aside className="contact-page__sidebar">
          <ContactIntro content={data.intro} />
          <ContactSocials 
            socialLinks={data.socialLinks} 
            alternateContact={data.alternateContact} 
          />
        </aside>
        
        <main className="contact-page__main">
          <InquiryForm contactPageData={data} />
        </main>
      </div>

      {/* FAQ Section — below the form, supports #faq anchor */}
      <ContactFAQ faqs={data.faqs} />
    </div>
  </>
  );
}
