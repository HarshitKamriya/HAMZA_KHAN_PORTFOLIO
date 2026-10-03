import { useEffect } from 'react';
import { useContactPage } from '../cms/hooks';
import ContactIntro from '../components/contact/ContactIntro';
import InquiryForm from '../components/contact/InquiryForm';
import ContactSocials from '../components/contact/ContactSocials';
import './Contact.css';

/**
 * Contact Page
 * 
 * Route: /contact
 */
export default function Contact() {
  const { data, loading, error } = useContactPage();

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} | Hamza Khan`;
    }
  }, [data]);

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
    </div>
  );
}
