import { Outlet } from 'react-router-dom';
import Header from './Header';

/**
 * SiteLayout — Wraps all pages with header and eventual footer.
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
      {/* Footer placeholder — to be implemented in a later phase */}
    </>
  );
}
