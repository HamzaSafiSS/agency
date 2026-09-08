import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'News', href: '#news' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMobileOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="header__inner container">
        {/* Logo */}
        <a href="#home" className="header__logo" onClick={() => handleNavClick('#home')}>
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <ellipse cx="20" cy="20" rx="10" ry="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
              <line x1="2" y1="14" x2="38" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <line x1="2" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.8"/>
              <path d="M16 20L20 8L24 20L20 32Z" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">GlobalRecruits</span>
            <span className="header__logo-tagline">Recruitment & Employment</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__nav-link ${activeLink === link.href ? 'header__nav-link--active' : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <a href="#hire-workers" className="btn btn-primary btn-sm header__cta">
            Hire Workers
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`header__hamburger ${isMobileOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-overlay ${isMobileOpen ? 'header__mobile-overlay--open' : ''}`} onClick={() => setIsMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__mobile-link ${activeLink === link.href ? 'header__mobile-link--active' : ''}`}
              onClick={() => handleNavClick(link.href)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <a href="#hire-workers" className="btn btn-primary btn-lg" onClick={() => setIsMobileOpen(false)}>
            Hire Workers
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
