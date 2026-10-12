import { Link } from 'react-router-dom';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer — Premium, restrained footer for Hamza Khan website
 * 
 * @param {{ siteSettings: import('../../cms/types').SiteSettings }} props
 */
export default function Footer({ siteSettings }) {
  const siteName = siteSettings?.siteName || 'Hamza Khan';
  const siteTagline = siteSettings?.siteTagline || 'Speaker & Communication Coach';
  const navItems = siteSettings?.navigation || [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Speaking & Workshops', url: '/speaking-workshops' },
    { label: 'Coaching', url: '/coaching' },
    { label: 'Contact', url: '/contact' }
  ];

  const socialLinks = siteSettings?.socialLinks || [];
  const linkedInLink = socialLinks.find(s => s.platform?.toLowerCase() === 'linkedin');
  const instagramLink = socialLinks.find(s => s.platform?.toLowerCase() === 'instagram');

  // URL must be an actual profile URL, not empty, placeholder, or domain root
  const hasValidLinkedIn = Boolean(
    linkedInLink?.url &&
    linkedInLink.url.trim().length > 0 &&
    linkedInLink.url.startsWith('http') &&
    !linkedInLink.url.replace(/\/$/, '').endsWith('linkedin.com')
  );

  const hasValidInstagram = Boolean(
    instagramLink?.url &&
    instagramLink.url.trim().length > 0 &&
    instagramLink.url.startsWith('http') &&
    !instagramLink.url.replace(/\/$/, '').endsWith('instagram.com')
  );

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="site-footer__inner container">
        
        {/* Brand & Purpose */}
        <div className="site-footer__brand-block">
          <Link to="/" className="site-footer__brand" aria-label={`${siteName} Home`}>
            {siteName}
          </Link>
          <p className="site-footer__tagline">{siteTagline}</p>
          <p className="site-footer__description">
            Helping professionals turn complex ideas into clear, confident communication under pressure.
          </p>
        </div>

        {/* Navigation Columns */}
        <nav className="site-footer__nav-group" aria-label="Footer navigation">
          <div className="site-footer__nav-col">
            <span className="site-footer__col-title">Navigation</span>
            <ul className="site-footer__list">
              {navItems.map((item) => (
                <li key={item.url}>
                  <Link to={item.url} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__nav-col">
            <span className="site-footer__col-title">Services</span>
            <ul className="site-footer__list">
              <li>
                <Link to="/contact?type=speaking" className="site-footer__link">
                  Keynote Speaking
                </Link>
              </li>
              <li>
                <Link to="/contact?type=workshop" className="site-footer__link">
                  Communication Workshops
                </Link>
              </li>
              <li>
                <Link to="/contact?type=coaching" className="site-footer__link">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link to="/contact?type=founder" className="site-footer__link">
                  Founder Pitch Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__nav-col">
            <span className="site-footer__col-title">Connect</span>
            <ul className="site-footer__list">
              {/* LinkedIn: CMS owner-editable, safe non-clickable until final URL supplied */}
              <li>
                {hasValidLinkedIn ? (
                  <a
                    href={linkedInLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span
                    className="site-footer__link site-footer__link--pending"
                    title="LinkedIn profile link coming soon"
                    aria-disabled="true"
                  >
                    LinkedIn <span className="site-footer__link-note">(Pending)</span>
                  </span>
                )}
              </li>

              {/* Instagram: Replaces X/Twitter, CMS owner-editable, non-clickable until URL exists */}
              <li>
                {hasValidInstagram ? (
                  <a
                    href={instagramLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    Instagram
                  </a>
                ) : (
                  <span
                    className="site-footer__link site-footer__link--pending"
                    title="Instagram profile link coming soon"
                    aria-disabled="true"
                  >
                    Instagram <span className="site-footer__link-note">(Pending)</span>
                  </span>
                )}
              </li>

              {/* Direct Inquiry — high-value conversion pathway */}
              <li>
                <Link to="/contact" className="site-footer__link site-footer__link--highlight">
                  Direct Inquiry
                </Link>
              </li>

              {/* Consolidated FAQ anchor link */}
              <li>
                <Link to="/contact#faq" className="site-footer__link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>

      {/* Bottom Bar: Copyright & Subtle Status */}
      <div className="site-footer__bottom container">
        <div className="site-footer__bottom-inner">
          <p className="site-footer__copyright">
            &copy; {CURRENT_YEAR} {siteName}. All rights reserved.
          </p>
          <p className="site-footer__craft">
            Move Before You Know
          </p>
        </div>
      </div>
    </footer>
  );
}
