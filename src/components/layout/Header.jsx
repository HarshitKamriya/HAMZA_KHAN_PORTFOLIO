import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header — Premium minimal navigation
 * 
 * Props:
 *  - siteSettings: SiteSettings from CMS (siteName, navigation[])
 */
export default function Header({ siteSettings }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when route changes (render-phase state adjustment per React docs)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileOpen(false);
  }

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // Keyboard: close on Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && isMobileOpen) {
      setIsMobileOpen(false);
      menuBtnRef.current?.focus();
    }
  }, [isMobileOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Trap focus in mobile nav
  useEffect(() => {
    if (!isMobileOpen || !mobileNavRef.current) return;
    const focusable = mobileNavRef.current.querySelectorAll('a, button');
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }, [isMobileOpen]);

  const siteName = siteSettings?.siteName || 'Hamza Khan';
  const navItems = siteSettings?.navigation || [];

  // Separate "Contact" as CTA
  const regularNav = navItems.filter(item => item.url !== '/contact');
  const contactItem = navItems.find(item => item.url === '/contact');

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label={`${siteName} — Home`}>
          {siteName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          {regularNav.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`header__nav-link ${
                location.pathname === item.url ? 'header__nav-link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          {contactItem && (
            <Link
              to={contactItem.url}
              className="header__cta header__cta-desktop"
            >
              {contactItem.label}
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuBtnRef}
          className="header__menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className={`header__mobile-nav ${isMobileOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileOpen}
      >
        {navItems.filter(item => item.url !== '/contact').map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className={`header__mobile-link ${
              location.pathname === item.url ? 'header__mobile-link--active' : ''
            }`}
            tabIndex={isMobileOpen ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
        {contactItem && (
          <Link
            to={contactItem.url}
            className="header__mobile-cta"
            tabIndex={isMobileOpen ? 0 : -1}
          >
            {contactItem.label}
          </Link>
        )}
      </nav>
    </header>
  );
}
