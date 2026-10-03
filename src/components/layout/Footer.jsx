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
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__link"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <Link to="/contact" className="site-footer__link">
                  Direct Inquiry
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
