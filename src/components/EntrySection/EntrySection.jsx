import { useEffect, useRef, useState } from 'react';
import './EntrySection.css';

function EntrySection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`entry-section ${isVisible ? 'entry-section--visible' : ''}`}
      id="get-started"
      ref={sectionRef}
    >
      {/* Background Decorations */}
      <div className="entry-section__bg">
        <div className="entry-section__bg-pattern" />
        <div className="entry-section__bg-glow entry-section__bg-glow--1" />
        <div className="entry-section__bg-glow entry-section__bg-glow--2" />
      </div>

      <div className="entry-section__inner container">
        {/* Section Header */}
        <div className="entry-section__header">
          <span className="entry-section__label">Get Started</span>
          <h2 className="entry-section__title">
            What Are You <span className="entry-section__title-accent">Looking For?</span>
          </h2>
          <p className="entry-section__subtitle">
            Whether you're an employer searching for skilled talent or a professional seeking international opportunities, we're here to help.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="entry-section__cards">
          {/* Employer Card */}
          <a href="#employer" className="entry-card entry-card--employer">
            <div className="entry-card__image-wrapper">
              <img
                src="/employer.png"
                alt="Employer searching for global talent with candidate profiles and international flags"
                className="entry-card__image"
                loading="lazy"
              />
              <div className="entry-card__image-overlay" />
            </div>

            <div className="entry-card__content">
              <div className="entry-card__icon-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <h3 className="entry-card__title">I'm an Employer</h3>
              <p className="entry-card__description">
                Looking for qualified workers for your business?
              </p>

              <div className="entry-card__cta">
                <span>Find Talent</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Hover shimmer */}
            <div className="entry-card__shimmer" />
          </a>

          {/* Job Seeker Card */}
          <a href="#job-seeker" className="entry-card entry-card--seeker">
            <div className="entry-card__image-wrapper">
              <img
                src="/job-seeker.png"
                alt="Job seeker with passport and boarding pass at international airport"
                className="entry-card__image"
                loading="lazy"
              />
              <div className="entry-card__image-overlay" />
            </div>

            <div className="entry-card__content">
              <div className="entry-card__icon-badge">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>

              <h3 className="entry-card__title">I'm a Job Seeker</h3>
              <p className="entry-card__description">
                Looking for a legitimate opportunity abroad?
              </p>

              <div className="entry-card__cta">
                <span>Find Jobs</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Hover shimmer */}
            <div className="entry-card__shimmer" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default EntrySection;
