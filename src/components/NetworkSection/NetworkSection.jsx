import { useEffect, useRef, useState } from 'react';
import './NetworkSection.css';

function NetworkSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSector, setActiveSector] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 7 Recruitment Destinations with High-Precision SVG Flags
  const destinations = [
    {
      id: 'saudi-arabia',
      name: 'Saudi Arabia',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <rect width="60" height="40" rx="4" fill="#006C35" />
          <path d="M14 26h32v2.5H14zm0 1.25l-3.5-1.25 3.5-1.25zm32-2.5v5h2.5v-5z" fill="#ffffff" />
          <path d="M15 14h30c0 3-4 5-8 5s-7-2-7-2-3 2-7 2-8-2-8-5z" fill="#ffffff" opacity="0.9" />
          <circle cx="22" cy="12" r="1.5" fill="#ffffff" />
          <circle cx="30" cy="12" r="1.5" fill="#ffffff" />
          <circle cx="38" cy="12" r="1.5" fill="#ffffff" />
        </svg>
      ),
      code: 'SA',
      opportunities: 42,
      sectors: ['Construction', 'Healthcare', 'Hospitality', 'Engineering', 'Technical Services'],
      featuredRole: 'Construction & Technical Specialists',
      color: '#006C35',
    },
    {
      id: 'jordan',
      name: 'Jordan',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <clipPath id="flag-jo-clip"><rect width="60" height="40" rx="4" /></clipPath>
          <g clipPath="url(#flag-jo-clip)">
            <rect width="60" height="13.33" y="0" fill="#000000" />
            <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
            <rect width="60" height="13.33" y="26.67" fill="#007A3D" />
            <polygon points="0 0, 24 20, 0 40" fill="#CE1126" />
            <polygon points="8 17, 9.2 19, 11.5 18.5, 10.5 20.5, 12 22, 9.8 22, 9 24, 8.2 22, 6 22, 7.5 20.5, 6.5 18.5, 8.8 19" fill="#FFFFFF" />
          </g>
        </svg>
      ),
      code: 'JO',
      opportunities: 19,
      sectors: ['Healthcare', 'Hospitality', 'Construction', 'Engineering', 'Manufacturing'],
      featuredRole: 'Industrial & Clinical Roles',
      color: '#007A3D',
    },
    {
      id: 'united-arab-emirates',
      name: 'United Arab Emirates',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <clipPath id="flag-ae-clip"><rect width="60" height="40" rx="4" /></clipPath>
          <g clipPath="url(#flag-ae-clip)">
            <rect width="60" height="13.33" y="0" fill="#00732F" />
            <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
            <rect width="60" height="13.33" y="26.67" fill="#000000" />
            <rect width="15" height="40" x="0" y="0" fill="#FF0000" />
          </g>
        </svg>
      ),
      code: 'AE',
      opportunities: 35,
      sectors: ['Construction', 'Hospitality', 'Healthcare', 'Engineering', 'Logistics'],
      featuredRole: 'Hospitality & Logistics Pros',
      color: '#00732F',
    },
    {
      id: 'qatar',
      name: 'Qatar',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <clipPath id="flag-qa-clip"><rect width="60" height="40" rx="4" /></clipPath>
          <g clipPath="url(#flag-qa-clip)">
            <rect width="60" height="40" fill="#8D1B3D" />
            <path d="M0 0h16l4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22 4 2.22-4 2.22H0z" fill="#FFFFFF" />
          </g>
        </svg>
      ),
      code: 'QA',
      opportunities: 31,
      sectors: ['Construction', 'Engineering', 'Hospitality', 'Healthcare', 'Technical Services'],
      featuredRole: 'Engineering & Infrastructure Teams',
      color: '#8D1B3D',
    },
    {
      id: 'kuwait',
      name: 'Kuwait',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <clipPath id="flag-kw-clip"><rect width="60" height="40" rx="4" /></clipPath>
          <g clipPath="url(#flag-kw-clip)">
            <rect width="60" height="13.33" y="0" fill="#007A3D" />
            <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
            <rect width="60" height="13.33" y="26.67" fill="#CE1126" />
            <polygon points="0 0, 16 13.33, 16 26.67, 0 40" fill="#000000" />
          </g>
        </svg>
      ),
      code: 'KW',
      opportunities: 24,
      sectors: ['Healthcare', 'Construction', 'Hospitality', 'Engineering', 'Technical Services'],
      featuredRole: 'Medical Staff & Engineering',
      color: '#007A3D',
    },
    {
      id: 'bahrain',
      name: 'Bahrain',
      flagSvg: (
        <svg viewBox="0 0 60 40" width="42" height="28" className="destination-flag-svg">
          <clipPath id="flag-bh-clip"><rect width="60" height="40" rx="4" /></clipPath>
          <g clipPath="url(#flag-bh-clip)">
            <rect width="60" height="40" fill="#CE1126" />
            <path d="M0 0h15l5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4H0z" fill="#FFFFFF" />
          </g>
        </svg>
      ),
      code: 'BH',
      opportunities: 17,
      sectors: ['Hospitality', 'Healthcare', 'Construction', 'Engineering', 'Technical Services'],
      featuredRole: 'Hospitality & Commercial Services',
      color: '#CE1126',
    },
  ];

  // 7 Industry Sectors
  const sectors = [
    {
      id: 'construction',
      name: 'Construction',
      count: '52+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      ),
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      count: '38+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 9v6" />
          <path d="M9 12h6" />
        </svg>
      ),
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      count: '29+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h12" />
          <path d="M6 14h12" />
          <path d="M3 10h18" />
          <path d="M5 6h14" />
          <path d="M12 2v2" />
          <path d="M12 18v4" />
        </svg>
      ),
    },
    {
      id: 'engineering',
      name: 'Engineering',
      count: '34+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: 'technical-services',
      name: 'Technical Services',
      count: '23+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      id: 'logistics',
      name: 'Logistics',
      count: '18+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      count: '16+ Roles',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M17 18h1" />
          <path d="M12 18h1" />
          <path d="M7 18h1" />
        </svg>
      ),
    },
  ];

  // 5-Step Recruitment Journey
  const journeySteps = [
    {
      number: '01',
      title: 'Explore Opportunities',
      desc: 'Browse available countries and positions.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Find Your Match',
      desc: 'Choose a role that fits your skills and experience.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Apply',
      desc: 'Submit your candidate profile and application.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Get Connected',
      desc: 'Connect with suitable employers through our recruitment process.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Start Your Journey',
      desc: 'Complete the required process and prepare for employment abroad.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m10 8 6 4-6 4V8z" />
        </svg>
      ),
    },
  ];
  
  const totalDestinations = destinations.length;
  const totalOpportunities = destinations.reduce((sum, d) => sum + d.opportunities, 0);

  return (
    <section
      className={`network-section ${isVisible ? 'network-section--visible' : ''}`}
      id="countries"
      ref={sectionRef}
    >
      {/* ── 1. Global Network Introduction ── */}
      <div className="network-intro container">
        <div className="network-intro__grid">
          {/* Left Column: Text & Stats */}
          <div className="network-intro__content">
            <div className="network-badge">
              <span className="network-badge__dot" />
              <span className="network-badge__text">OUR GLOBAL RECRUITMENT NETWORK</span>
            </div>

            <h2 className="network-intro__heading">
              Connecting Talent With Opportunities{' '}
              <span className="network-intro__heading-accent">Across Borders</span>
            </h2>

            <p className="network-intro__lead">
              Our established international recruitment network links qualified professionals and
              skilled workers directly with verified employers across top global economies. We
              ensure fully compliant, ethical cross-border recruitment backed by government
              regulations, transparent terms, and complete candidate advocacy.
            </p>

            {/* 3 Simple Statistics */}
            <div className="network-stats">
              <div className="network-stat-card">
                <div className="network-stat-card__number">
                  <span>{totalDestinations}</span>
                </div>
                <div className="network-stat-card__info">
                  <span className="network-stat-card__label">Recruitment Destinations</span>
                  <span className="network-stat-card__sub">GCC & Middle East Hubs</span>
                </div>
              </div>

              <div className="network-stat-card">
                <div className="network-stat-card__number">
                  <span>{totalOpportunities}</span>
                  <span className="network-stat-card__plus">+</span>
                </div>
                <div className="network-stat-card__info">
                  <span className="network-stat-card__label">Available Opportunities</span>
                  <span className="network-stat-card__sub">Actively Hiring Now</span>
                </div>
              </div>

              <div className="network-stat-card">
                <div className="network-stat-card__number network-stat-card__number--text">
                  <span>Multiple</span>
                </div>
                <div className="network-stat-card__info">
                  <span className="network-stat-card__label">Industry Sectors</span>
                  <span className="network-stat-card__sub">Technical, Clinical & Trade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual with floating badge */}
          <div className="network-intro__visual">
            <div className="network-image-wrapper">
              <img
                src="/global-network.jpg"
                alt="Global recruitment network connecting international destinations with globe, flags, and airport"
                className="network-image"
                loading="lazy"
              />
              <div className="network-image__overlay" />

              {/* Floating Badge: Top Right */}
              <div className="network-image__badge network-image__badge--top">
                <div className="network-image__badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <div className="network-image__badge-label">Active Corridors</div>
                  <div className="network-image__badge-val">{totalDestinations} Premier Destinations</div>
                </div>
              </div>

              {/* Floating Badge: Bottom Left */}
              <div className="network-image__badge network-image__badge--bottom">
                <div className="network-image__badge-icon network-image__badge-icon--orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="network-image__badge-label">Compliance Status</div>
                  <div className="network-image__badge-val">100% Verified Sponsors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Recruitment Destinations Grid ── */}
      <div className="destinations-section container">
        <div className="destinations-header">
          <span className="destinations-badge">GLOBAL FOOTPRINT</span>
          <h3 className="destinations-title">Explore Our Recruitment Destinations</h3>
          <p className="destinations-subtitle">
            Discover the countries where we currently connect qualified candidates with international employment opportunities.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <div className="destination-card__header">
                <div className="destination-card__flag-box" title={dest.name}>
                  {dest.flagSvg}
                </div>
                <div className="destination-card__opps-badge">
                  <span className="destination-card__opps-dot" />
                  <span>{dest.opportunities} Available Opportunities</span>
                </div>
              </div>

              <div className="destination-card__body">
                <h4 className="destination-card__name">{dest.name}</h4>
                <div className="destination-card__featured">{dest.featuredRole}</div>

                <div className="destination-card__sectors">
                  <span className="destination-card__sectors-label">Key Sectors:</span>
                  <div className="destination-card__tags">
                    {dest.sectors.map((sec, i) => (
                      <span key={i} className="destination-card__tag">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="destination-card__footer">
                <a href={`#jobs-${dest.id}`} className="destination-card__btn">
                  <span>View Jobs</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Explore Opportunities by Sector ── */}
      <div className="sectors-section container">
        <div className="sectors-header">
          <span className="sectors-badge">INDUSTRIES & TRADES</span>
          <h3 className="sectors-title">Find Opportunities in Your Field</h3>
          <p className="sectors-subtitle">
            Explore active openings across high-demand sectors with verified sponsorship and immediate hiring.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sec) => (
            <a
              key={sec.id}
              href={`#sector-${sec.id}`}
              className={`sector-card ${activeSector === sec.id ? 'sector-card--active' : ''}`}
              onMouseEnter={() => setActiveSector(sec.id)}
              onMouseLeave={() => setActiveSector(null)}
            >
              <div className="sector-card__icon-box">
                {sec.icon}
              </div>
              <div className="sector-card__content">
                <h4 className="sector-card__name">{sec.name}</h4>
                <span className="sector-card__count">{sec.count}</span>
              </div>
              <div className="sector-card__arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── 4. Recruitment Journey: 5 Steps ── */}
      <div className="journey-section container">
        <div className="journey-header">
          <span className="journey-badge">CANDIDATE ROADMAP</span>
          <h3 className="journey-title">Your Path to International Employment</h3>
          <p className="journey-subtitle">
            A simple, transparent 5-step pathway guiding you from initial inquiry to your overseas career.
          </p>
        </div>

        <div className="journey-timeline">
          {journeySteps.map((step, idx) => (
            <div key={step.number} className="journey-step">
              <div className="journey-step__header">
                <div className="journey-step__number-bubble">
                  <span>{step.number}</span>
                </div>
                <div className="journey-step__icon-wrap">
                  {step.icon}
                </div>
              </div>

              <div className="journey-step__body">
                <h4 className="journey-step__title">{step.title}</h4>
                <p className="journey-step__desc">{step.desc}</p>
              </div>

              {idx < journeySteps.length - 1 && (
                <div className="journey-step__connector" aria-hidden="true">
                  <div className="journey-step__line" />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Final CTA ── */}
      <div className="network-cta">
        <div className="network-cta__backdrop" />
        <div className="network-cta__inner container">
          <div className="network-cta__badge">
            <span>TAKE ACTION TODAY</span>
          </div>

          <h3 className="network-cta__heading">
            Discover Your <span className="network-cta__heading-accent">Next Opportunity</span>
          </h3>

          <p className="network-cta__text">
            Explore international recruitment opportunities and find the country, sector, and
            position that match your skills and career goals.
          </p>

          <div className="network-cta__buttons">
            <a href="#explore-jobs" className="btn btn--primary network-cta__btn network-cta__btn--primary">
              <span>Explore Available Jobs</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="#register-candidate" className="btn network-cta__btn network-cta__btn--secondary">
              <span>Register as a Candidate</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NetworkSection;
