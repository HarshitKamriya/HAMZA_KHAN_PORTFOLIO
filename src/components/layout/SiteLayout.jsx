import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * SiteLayout — Wraps all pages with header and footer.
 * 
 * Props:
 *  - siteSettings: CMS site settings
 */
export default function SiteLayout({ siteSettings }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header siteSettings={siteSettings} />
      <main id="main-content" role="main">
        <Outlet />
      </main>
      <Footer siteSettings={siteSettings} />
    </>
  );
}
