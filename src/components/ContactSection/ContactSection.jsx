import { useState, useRef, useEffect } from 'react';
import './ContactSection.css';

function ContactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [inquiryType, setInquiryType] = useState('Job Seeker');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state or reset after notification
    }, 4000);
  };

  const inquiryOptions = [
    'Job Seeker',
    'Employer',
    'Partner',
    'General Inquiry',
  ];

  const contactCards = [
    {
      id: 'office',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Office',
      value: 'Addis Ababa',
      sub: 'Global Headquarters & Candidate Center',
    },
    {
      id: 'phone',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Phone',
      value: '+251963799603',
      href: 'tel:+251963799603',
      sub: 'Direct Consultation Line',
    },
    {
      id: 'email',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: 'Email',
      value: 'info@company.com',
      href: 'mailto:info@company.com',
      sub: 'Official Support & Inquiries',
    },
    {
      id: 'hours',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: 'Working Hours',
      value: 'Monday – Friday',
      sub: '8:00 AM – 5:00 PM (EAT)',
    },
  ];

  return (
    <section
      className={`contact-section ${isVisible ? 'contact-section--visible' : ''}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container container">
        {/* ── 1. Contact Introduction ── */}
        <div className="contact-intro">
          <div className="contact-intro__grid">
            <div className="contact-intro__text">
              <div className="contact-badge">
                <span className="contact-badge__dot" />
                <span className="contact-badge__text">CONTACT US</span>
              </div>

              <span className="contact-intro__supporting">We’re Here to Help</span>

              <h2 className="contact-intro__heading">
                Let’s Start the{' '}
                <span className="contact-intro__heading-accent">Conversation</span>
              </h2>

              <p className="contact-intro__lead">
                Whether you're looking for your next international employment opportunity or
                searching for qualified workers, our team is ready to assist you.
              </p>

              {/* Quick Trust Highlights */}
              <div className="contact-intro__features">
                <div className="contact-feature-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Rapid 24h Response</span>
                </div>
                <div className="contact-feature-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Verified Legal Placement</span>
                </div>
                <div className="contact-feature-pill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Bilingual Advisory</span>
                </div>
              </div>
            </div>

            {/* Visual Panel Beside Introduction */}
            <div className="contact-intro__visual">
              <div className="contact-visual-card">
                <div className="contact-visual-card__globe">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="globe-bg-svg">
                    <circle cx="100" cy="100" r="90" stroke="rgba(232, 131, 42, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="100" cy="100" r="70" stroke="rgba(27, 42, 74, 0.15)" strokeWidth="1.5" />
                    <ellipse cx="100" cy="100" rx="45" ry="90" stroke="rgba(27, 42, 74, 0.15)" strokeWidth="1.5" />
                    <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(27, 42, 74, 0.15)" strokeWidth="1.5" />
                    <line x1="25" y1="60" x2="175" y2="60" stroke="rgba(27, 42, 74, 0.12)" strokeWidth="1.2" />
                    <line x1="25" y1="140" x2="175" y2="140" stroke="rgba(27, 42, 74, 0.12)" strokeWidth="1.2" />
                  </svg>
                </div>

                <div className="contact-visual-card__badge contact-visual-card__badge--top">
                  <div className="badge-pulse-indicator" />
                  <span className="badge-status-text">Recruitment Desk Active</span>
                </div>

                <div className="contact-visual-card__center">
                  <div className="hq-icon-box">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h4 className="hq-name">Addis Ababa Operations Hub</h4>
                  <p className="hq-sub">Connecting East Africa with Premier Global Destinations</p>
                </div>

                <div className="contact-visual-card__stats">
                  <div className="stat-mini">
                    <span className="stat-mini__val">&lt; 24h</span>
                    <span className="stat-mini__lbl">Inquiry Turnaround</span>
                  </div>
                  <div className="stat-mini__divider" />
                  <div className="stat-mini">
                    <span className="stat-mini__val">100%</span>
                    <span className="stat-mini__lbl">Confidential & Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2 & 3. Main Grid: Contact Info + Contact Form ── */}
        <div className="contact-main-grid">
          {/* Left Column: 2. Contact Information Cards */}
          <div className="contact-info-panel">
            <div className="panel-header">
              <span className="panel-tag">DIRECT CHANNELS</span>
              <h3 className="panel-title">Get in Touch</h3>
              <p className="panel-desc">
                Reach out directly via phone, email, or visit our Addis Ababa headquarters.
              </p>
            </div>

            <div className="contact-cards-list">
              {contactCards.map((card) => (
                <div key={card.id} className="contact-card">
                  <div className="contact-card__icon-box">{card.icon}</div>
                  <div className="contact-card__details">
                    <span className="contact-card__title">{card.title}</span>
                    {card.href ? (
                      <a href={card.href} className="contact-card__value contact-card__value--link">
                        {card.value}
                      </a>
                    ) : (
                      <span className="contact-card__value">{card.value}</span>
                    )}
                    <span className="contact-card__sub">{card.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Assistance Highlight */}
            <div className="contact-support-highlight">
              <div className="highlight-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="highlight-text">
                <strong>Official Recruitment Partner</strong>
                <p>All inquiries are handled under strict ethical recruitment standards.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3. Contact Form */}
          <div className="contact-form-panel">
            <div className="form-header">
              <h3 className="form-title">Send Us a Message</h3>
              <p className="form-subtitle">
                Tell us how we can help, and our team will get back to you as soon as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="form-success-message">
                <div className="form-success-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="form-success-title">Message Sent Successfully!</h4>
                <p className="form-success-desc">
                  Thank you for reaching out. A specialized recruitment consultant will review your
                  inquiry and contact you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn form-success-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Inquiry Type Selector */}
                <div className="form-inquiry-group">
                  <label className="form-inquiry-label">I'm contacting you as:</label>
                  <div className="form-inquiry-options">
                    {inquiryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`form-inquiry-chip ${
                          inquiryType === option ? 'form-inquiry-chip--active' : ''
                        }`}
                        onClick={() => setInquiryType(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Two-Column Form Inputs */}
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="contact-name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-country" className="form-label">
                      Country
                    </label>
                    <select
                      id="contact-country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  <div className="form-field form-field--full">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      required
                      placeholder="Enter your subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Message Full-Width Textarea */}
                  <div className="form-field form-field--full">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary contact-submit-btn">
                    <span>Send Message</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="form-privacy-note">
                    🔒 Your information is confidential and never shared with unauthorized parties.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
