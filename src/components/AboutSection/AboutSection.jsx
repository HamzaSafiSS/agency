import { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      id: 'integrity',
      name: 'Integrity',
      description: 'We operate with honesty and transparency.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'professionalism',
      name: 'Professionalism',
      description: 'We maintain high standards throughout every stage of recruitment.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      id: 'respect',
      name: 'Respect',
      description: 'We value candidates, employers, and our partners.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'responsibility',
      name: 'Responsibility',
      description: 'We take recruitment and international worker mobility seriously.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      id: 'excellence',
      name: 'Excellence',
      description: 'We continuously improve our services to deliver better outcomes for both employers and candidates.',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className={`about-section ${isVisible ? 'about-section--visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      {/* ── 1. Intro / Company Overview ── */}
      <div className="about-overview container">
        <div className="about-overview__grid">
          {/* Left Column: Intro text and trust highlights */}
          <div className="about-overview__content">
            <div className="about-badge">
              <span className="about-badge__dot" />
              <span className="about-badge__text">ABOUT US</span>
            </div>

            <h2 className="about-overview__heading">
              Building Connections Between{' '}
              <span className="about-overview__heading-accent">Talent and Opportunity</span>
            </h2>

            <div className="about-overview__paragraphs">
              <p className="about-overview__paragraph">
                We are an international recruitment and employment agency dedicated to connecting
                qualified workers with trusted employers across borders. We help businesses find
                the right talent while supporting candidates through a professional, transparent,
                and responsible recruitment process.
              </p>
              <p className="about-overview__paragraph">
                We serve employers, job seekers, and international partners by facilitating
                recruitment and workforce mobility across different markets. Our approach is built
                on <strong>integrity, professionalism, respect, responsibility, and excellence</strong>,
                ensuring that every recruitment journey is handled with care and transparency.
              </p>
            </div>

            {/* 3 Trust Highlights */}
            <div className="about-trust">
              <div className="about-trust__item">
                <div className="about-trust__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="about-trust__info">
                  <span className="about-trust__title">International Recruitment</span>
                  <span className="about-trust__caption">Cross-border placement expertise</span>
                </div>
              </div>

              <div className="about-trust__item">
                <div className="about-trust__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="about-trust__info">
                  <span className="about-trust__title">Trusted Employer Partnerships</span>
                  <span className="about-trust__caption">Vetted international companies</span>
                </div>
              </div>

              <div className="about-trust__item">
                <div className="about-trust__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                </div>
                <div className="about-trust__info">
                  <span className="about-trust__title">Candidate-Focused Support</span>
                  <span className="about-trust__caption">End-to-end guidance & care</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Workforce image & floating credential */}
          <div className="about-overview__visual">
            <div className="about-image-wrapper">
              <img
                src="/about-us.png"
                alt="International recruitment office with global connection map, globe, and world flags"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image__overlay" />

              {/* Floating Badge 1: Top Right */}
              <div className="about-image__badge about-image__badge--top">
                <div className="about-image__badge-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <div className="about-image__badge-label">Global Network</div>
                  <div className="about-image__badge-val">25+ Countries</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="about-image__badge about-image__badge--bottom">
                <div className="about-image__badge-icon about-image__badge-icon--orange">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="about-image__badge-label">Ethical Placement</div>
                  <div className="about-image__badge-val">100% Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Mission & Vision ── */}
      <div className="about-mv container">
        <div className="about-mv__grid">
          {/* Mission Card */}
          <div className="about-mv-card about-mv-card--mission">
            <div className="about-mv-card__glow" />
            <div className="about-mv-card__header">
              <div className="about-mv-card__icon-wrap about-mv-card__icon-wrap--orange">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <span className="about-mv-card__tag">GUIDING PURPOSE</span>
            </div>
            <h3 className="about-mv-card__title">Our Mission</h3>
            <p className="about-mv-card__text">
              To create reliable pathways between skilled people and meaningful employment
              opportunities around the world.
            </p>
          </div>

          {/* Vision Card */}
          <div className="about-mv-card about-mv-card--vision">
            <div className="about-mv-card__glow" />
            <div className="about-mv-card__header">
              <div className="about-mv-card__icon-wrap about-mv-card__icon-wrap--blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="about-mv-card__tag">FUTURE HORIZON</span>
            </div>
            <h3 className="about-mv-card__title">Our Vision</h3>
            <p className="about-mv-card__text">
              To become a trusted international recruitment partner recognized for
              professionalism, transparency, and responsible workforce mobility.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. Our Core Values ── */}
      <div className="about-values container">
        <div className="about-values__header">
          <span className="about-values__subtitle">CORE PRINCIPLES</span>
          <h3 className="about-values__title">What Guides Us</h3>
          <p className="about-values__lead">
            The fundamental values that shape our conduct, decisions, and relationships every day.
          </p>
        </div>

        <div className="about-values__grid">
          {coreValues.map((val, idx) => (
            <div key={val.id} className="about-value-card" style={{ '--card-idx': idx }}>
              <div className="about-value-card__top-bar" />
              <div className="about-value-card__icon-box">
                {val.icon}
              </div>
              <h4 className="about-value-card__name">{val.name}</h4>
              <p className="about-value-card__desc">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Global Recruitment Statement ── */}
      <div className="about-statement">
        <div className="about-statement__backdrop" />
        <div className="about-statement__inner container">
          <div className="about-statement__badge">
            <span>GLOBAL RECRUITMENT COMMITMENT</span>
          </div>

          <h3 className="about-statement__heading">
            Connecting People. <span className="about-statement__heading-accent">Supporting Businesses.</span> Creating Opportunities.
          </h3>

          <p className="about-statement__text">
            We believe successful recruitment goes beyond filling positions. It is about creating
            trusted connections that benefit workers, employers, and communities across borders.
          </p>

          <div className="about-statement__action">
            <a href="#contact" className="btn btn--primary about-statement__btn">
              <span>Partner With Us</span>
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

export default AboutSection;
