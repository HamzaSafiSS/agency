import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate stats counters when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero__stats--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background Image with Overlay */}
      <div className="hero__bg">
        <img
          src="/hero-bg.png"
          alt="Global recruitment and international employment opportunities"
          className="hero__bg-image"
          loading="eager"
        />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-gradient" />
      </div>

      {/* Decorative Elements */}
      <div className="hero__decoration">
        <div className="hero__decoration-circle hero__decoration-circle--1" />
        <div className="hero__decoration-circle hero__decoration-circle--2" />
        <div className="hero__decoration-circle hero__decoration-circle--3" />
      </div>

      <div className="hero__inner container">
        {/* Content Column */}
        <div className="hero__content">
          <div className="hero__badge animate-fade-in-up">
            <span className="hero__badge-dot" />
            Trusted by 500+ international employers
          </div>

          <h1 className="hero__title animate-fade-in-up delay-1">
            Your Talent.<br />
            Your Opportunity.<br />
            <span className="hero__title-accent">Your Global Future.</span>
          </h1>

          <p className="hero__description animate-fade-in-up delay-2">
            We help qualified workers find legitimate employment opportunities abroad
            while helping international employers connect with reliable, skilled,
            and carefully selected talent.
          </p>

          <div className="hero__ctas animate-fade-in-up delay-3">
            <a href="#find-job" className="btn btn-primary btn-lg hero__cta-primary">
              Find a Job
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#hire-workers" className="btn btn-secondary btn-lg hero__cta-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/>
                <line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
              Hire Workers
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero__trust animate-fade-in-up delay-4">
            <div className="hero__trust-avatars">
              <div className="hero__trust-avatar" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>JA</div>
              <div className="hero__trust-avatar" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>MK</div>
              <div className="hero__trust-avatar" style={{ background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}>RB</div>
              <div className="hero__trust-avatar" style={{ background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }}>SN</div>
            </div>
            <div className="hero__trust-text">
              <div className="hero__trust-stars">
                {'★★★★★'}
              </div>
              <span>Rated 4.9/5 by 2,000+ candidates</span>
            </div>
          </div>
        </div>

        {/* Featured Opportunity Card */}
        <div className="hero__card-column animate-fade-in-right delay-3">
          <div className="hero__featured-card">
            <div className="hero__card-header">
              <span className="hero__card-label">Featured Opportunity</span>
            </div>

            <div className="hero__card-image">
              <img
                src="/saudi-card.png"
                alt="Saudi Arabia employment development"
                loading="eager"
              />
              <div className="hero__card-image-overlay" />
            </div>

            <div className="hero__card-body">
              <h3 className="hero__card-country">Saudi Arabia</h3>
              <p className="hero__card-role">Construction & Technical Workers</p>

              <ul className="hero__card-perks">
                <li className="hero__card-perk">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Multiple positions
                </li>
                <li className="hero__card-perk">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Competitive salary
                </li>
                <li className="hero__card-perk">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Employer accommodation
                </li>
              </ul>

              <a href="#saudi-jobs" className="hero__card-cta">
                View Jobs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mini stats below card */}
          <div className="hero__mini-stats">
            <div className="hero__mini-stat">
              <span className="hero__mini-stat-icon">🌍</span>
              <div>
                <strong>30+</strong>
                <span>Countries</span>
              </div>
            </div>
            <div className="hero__mini-stat">
              <span className="hero__mini-stat-icon">👷</span>
              <div>
                <strong>5,000+</strong>
                <span>Placements</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="hero__stats" ref={statsRef}>
        <div className="hero__stats-inner container">
          <div className="hero__stat">
            <div className="hero__stat-number">5,000<span>+</span></div>
            <div className="hero__stat-label">Workers Placed</div>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <div className="hero__stat-number">30<span>+</span></div>
            <div className="hero__stat-label">Countries Served</div>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <div className="hero__stat-number">500<span>+</span></div>
            <div className="hero__stat-label">Employer Partners</div>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <div className="hero__stat-number">98<span>%</span></div>
            <div className="hero__stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
