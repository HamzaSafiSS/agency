import { useState, useRef, useEffect } from 'react';
import './FAQSection.css';

function FAQSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'general', 'job-seekers', 'employers'
  const [openItems, setOpenItems] = useState({});

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

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = [
    {
      category: 'general',
      categoryLabel: 'General Questions',
      badgeColor: '#1B2A4A',
      items: [
        {
          id: 'gen-1',
          question: 'What does your recruitment agency do?',
          answer:
            'We connect qualified candidates with employment opportunities and help employers find suitable workers for their workforce needs, including international recruitment and placement.',
        },
        {
          id: 'gen-2',
          question: 'Which countries do you recruit for?',
          answer:
            'We currently support recruitment across several international destinations. Visit our Global Recruitment Network section to explore the countries and sectors we currently serve.',
        },
      ],
    },
    {
      category: 'job-seekers',
      categoryLabel: 'For Job Seekers',
      badgeColor: '#E8832A',
      items: [
        {
          id: 'seeker-1',
          question: 'How can I apply for a job?',
          answer:
            'You can apply directly through our candidate registration portal. Submit your resume, specify your preferred sector and destination country, and our recruitment specialists will evaluate your profile against active employer requisitions.',
        },
        {
          id: 'seeker-2',
          question: 'Do I need previous work experience?',
          answer:
            'Requirements vary by position. We recruit for both certified professionals (such as healthcare and engineering specialists) and entry-level trade or hospitality positions. Roles requiring prior experience or vocational certifications will be clearly communicated during the matching process.',
        },
        {
          id: 'seeker-3',
          question: 'How long does the recruitment process take?',
          answer:
            'The recruitment cycle typically takes between 4 to 8 weeks from candidate profile submission to deployment. This timeline accounts for candidate matching, employer interviews, medical clearance, document authentication, and visa issuance in accordance with host country regulations.',
        },
      ],
    },
    {
      category: 'employers',
      categoryLabel: 'For Employers',
      badgeColor: '#0F1A2E',
      items: [
        {
          id: 'emp-1',
          question: 'How can I request workers?',
          answer:
            'Employers can submit a recruitment inquiry through our employer portal or contact our corporate solutions team. We arrange an initial workforce consultation to define role descriptions, required qualifications, batch volumes, and project timelines.',
        },
        {
          id: 'emp-2',
          question: 'Can you recruit workers for multiple positions?',
          answer:
            'Yes. We handle large-scale volume recruitment for major infrastructure, hospitality, and logistics operations, as well as specialized talent acquisition for critical healthcare and technical engineering roles.',
        },
        {
          id: 'emp-3',
          question: 'Do you handle international placement?',
          answer:
            'Yes, end-to-end. We manage bilateral compliance, labor ministry approvals, embassy document attestations, visa sponsorships, travel logistics, and pre-departure briefings to guarantee 100% compliant, ethical workforce mobility.',
        },
      ],
    },
  ];

  // Filter categories based on active tab
  const displayedCategories =
    activeTab === 'all'
      ? faqData
      : faqData.filter((cat) => cat.category === activeTab);

  return (
    <section
      className={`faq-section ${isVisible ? 'faq-section--visible' : ''}`}
      id="faqs"
      ref={sectionRef}
    >
      <div className="faq-container container">
        {/* ── 1. FAQ Introduction (Centered with generous whitespace) ── */}
        <div className="faq-intro">
          <div className="faq-badge">
            <span className="faq-badge__dot" />
            <span className="faq-badge__text">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="faq-heading">
            Find Answers to <span className="faq-heading-accent">Common Questions</span>
          </h2>

          <p className="faq-lead">
            Have questions about our recruitment process, job opportunities, or employer
            services? Find answers to some of the most frequently asked questions below.
          </p>
        </div>

        {/* ── 2. FAQ Category Navigation Tabs ── */}
        <div className="faq-tabs">
          <button
            type="button"
            className={`faq-tab-btn ${activeTab === 'all' ? 'faq-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Questions
          </button>
          <button
            type="button"
            className={`faq-tab-btn ${activeTab === 'general' ? 'faq-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            type="button"
            className={`faq-tab-btn ${activeTab === 'job-seekers' ? 'faq-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('job-seekers')}
          >
            For Job Seekers
          </button>
          <button
            type="button"
            className={`faq-tab-btn ${activeTab === 'employers' ? 'faq-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('employers')}
          >
            For Employers
          </button>
        </div>

        {/* ── 3, 4, 5. Questions Accordion by Category ── */}
        <div className="faq-content">
          {displayedCategories.map((catGroup) => (
            <div key={catGroup.category} className="faq-group">
              <div className="faq-group__header">
                <span className="faq-group__tag" style={{ borderColor: catGroup.badgeColor }}>
                  {catGroup.categoryLabel}
                </span>
              </div>

              <div className="faq-accordion-list">
                {catGroup.items.map((item) => {
                  const isOpen = !!openItems[item.id];
                  return (
                    <div
                      key={item.id}
                      className={`faq-card ${isOpen ? 'faq-card--open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-card__question"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${item.id}`}
                      >
                        <span className="faq-card__qtext">{item.question}</span>
                        <span className="faq-card__icon-btn" aria-hidden="true">
                          <svg
                            className={`faq-card__icon ${isOpen ? 'faq-card__icon--open' : ''}`}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                      </button>

                      <div
                        id={`faq-ans-${item.id}`}
                        className={`faq-card__answer-wrapper ${
                          isOpen ? 'faq-card__answer-wrapper--open' : ''
                        }`}
                      >
                        <div className="faq-card__answer-content">
                          <p className="faq-card__atext">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── 6. Still Have Questions? CTA ── */}
        <div className="faq-cta-card">
          <div className="faq-cta-card__backdrop" />
          <div className="faq-cta-card__content">
            <div className="faq-cta-card__badge">
              <span>SUPPORT & INQUIRIES</span>
            </div>

            <h3 className="faq-cta-card__title">Still Have Questions?</h3>

            <p className="faq-cta-card__desc">
              Our team is here to help. Get in touch with us if you need more information about
              our recruitment services, job opportunities, or employer solutions.
            </p>

            <div className="faq-cta-card__buttons">
              <a href="#contact" className="faq-cta-btn faq-cta-btn--primary">
                <span>Contact Us</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#countries" className="faq-cta-btn faq-cta-btn--secondary">
                <span>Browse Jobs</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
