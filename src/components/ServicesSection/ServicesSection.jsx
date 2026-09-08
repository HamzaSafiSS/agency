import { useEffect, useRef, useState } from 'react';
import './ServicesSection.css';

function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // 3-Step Pipeline State (Inspired by reference stepper image)
  const [pipelineStep, setPipelineStep] = useState(2); // Step 3 active by default

  // 5-Step Process State
  const [activeStep, setActiveStep] = useState(2);

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

  // 3-Step Pipeline Stages (Talent → Recruitment → Employment)
  const pipelineStages = [
    {
      stepNumber: 1,
      code: '01',
      title: 'Talent',
      subtitle: 'Skilled Professionals',
      tagline: 'Candidate Sourcing & Profiling',
      description: 'Identifying qualified, credentialed global workers and professionals ready for international opportunities.'
    },
    {
      stepNumber: 2,
      code: '02',
      title: 'Recruitment',
      subtitle: 'Ethical Placement',
      tagline: 'Rigorous Screening & Matching',
      description: 'Conducting trade testing, compliance audits, and structured pairing with verified overseas employers.'
    },
    {
      stepNumber: 3,
      code: '03',
      title: 'Employment',
      subtitle: 'Global Career',
      tagline: 'Cross-Border Career Mobility',
      description: 'Securing legal work visas, compliant contracts, and smooth arrival into rewarding employment abroad.'
    }
  ];

  const currentPipeline = pipelineStages[pipelineStep];

  // Job Seeker 7 Services
  const seekerServices = [
    {
      id: 'job-placement',
      name: 'Job Placement',
      description: 'Matching your verified profile with legitimate international career vacancies.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: 'candidate-reg',
      name: 'Candidate Registration',
      description: 'Seamless onboarding, document intake, and verified digital skill profiles.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
    },
    {
      id: 'job-matching',
      name: 'Job Matching',
      description: 'Targeted pairing with reputable overseas employers tailored to your trade.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      id: 'interview-prep',
      name: 'Interview Preparation',
      description: 'Dedicated coaching and technical mock sessions to excel in employer interviews.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
    },
    {
      id: 'doc-guidance',
      name: 'Documentation Guidance',
      description: 'Step-by-step assistance with visa paperwork, certifications, and compliance.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'pre-departure',
      name: 'Pre-Departure Support',
      description: 'Travel coordination, comprehensive cultural briefings, and deployment readiness.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
      ),
    },
    {
      id: 'post-placement',
      name: 'Post-Placement Support',
      description: 'Ongoing check-ins and worker advocacy to guarantee a safe, productive transition.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      ),
    },
  ];

  // Employer 7 Services
  const employerServices = [
    {
      id: 'workforce-recruitment',
      name: 'Workforce Recruitment',
      description: 'Scalable recruitment campaigns tailored precisely to your operational timelines.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'candidate-sourcing',
      name: 'Candidate Sourcing',
      description: 'Active talent pipelines tapping vetted professionals across multiple global markets.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      ),
    },
    {
      id: 'candidate-screening',
      name: 'Candidate Screening',
      description: 'Multi-stage trade testing, medical checks, and background verification audits.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      id: 'interview-coord',
      name: 'Interview Coordination',
      description: 'Seamless virtual and in-person interviews with dedicated scheduling & translation.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: 'workforce-planning',
      name: 'Workforce Planning',
      description: 'Strategic labor market advisory, salary benchmarking, and deployment planning.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      id: 'recruitment-admin',
      name: 'Recruitment Administration',
      description: 'Full handling of contracts, labor permits, insurance, and embassy attestations.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      ),
    },
    {
      id: 'intl-placement',
      name: 'International Placement',
      description: 'Compliant cross-border mobilization and seamless arrival at your company premises.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  // 5-Step Process data with brand colors
  const processSteps = [
    {
      stepNumber: 1,
      code: '01',
      title: 'Registration',
      shortDesc: 'Candidate or employer starts the recruitment process.',
      detail: 'Digital onboarding where job seekers submit verified qualifications and employers register specific workforce requirements.',
      stage: 'Initial Intake',
      deliverables: [
        'Candidate profile, CV & credential intake',
        'Employer workforce request & scope formulation',
        'Compliance, eligibility & background pre-check'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      )
    },
    {
      stepNumber: 2,
      code: '02',
      title: 'Assessment & Matching',
      shortDesc: 'Skills, qualifications, and workforce requirements are evaluated.',
      detail: 'Multi-tiered evaluation assessing trade capabilities, medical status, and rigorous candidate-to-position matchmaking.',
      stage: 'Screening & Pairing',
      deliverables: [
        'Practical trade testing & certificate verification',
        'Medical fitness & background security checks',
        'Precision pairing with vetted international employers'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="m8 11 2 2 4-4" />
        </svg>
      )
    },
    {
      stepNumber: 3,
      code: '03',
      title: 'Interview & Selection',
      shortDesc: 'Employers and qualified candidates are connected.',
      detail: 'Facilitated interview sessions between hiring teams and shortlisted candidates, ending in formal job offers and selections.',
      stage: 'Hiring Decision',
      deliverables: [
        'Virtual video interviews or dedicated on-site delegations',
        'Real-time translation & interview coordination',
        'Official employment offer letter issuance & acceptance'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      stepNumber: 4,
      code: '04',
      title: 'Documentation & Preparation',
      shortDesc: 'Required recruitment and employment processes are supported.',
      detail: 'End-to-end management of visas, government attestations, labor approvals, insurance, and cultural preparation.',
      stage: 'Mobility & Visa',
      deliverables: [
        'Government work permits & embassy visa processing',
        'Employment contract legal attestations & protections',
        'Pre-departure cultural, safety & workplace briefing'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 2 2 4-4" />
        </svg>
      )
    },
    {
      stepNumber: 5,
      code: '05',
      title: 'International Placement',
      shortDesc: 'Successful candidates move forward toward employment abroad.',
      detail: 'Deployment logistics, airport meet-and-greet, employer workplace arrival, and ongoing post-placement care.',
      stage: 'Arrival & Success',
      deliverables: [
        'Flight tickets & destination arrival coordination',
        'Employer onboarding & accommodation integration',
        'Ongoing worker welfare monitoring & partner support'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <section
      className={`services-section ${isVisible ? 'services-section--visible' : ''}`}
      id="services"
      ref={sectionRef}
    >
      {/* ── 1. Services Introduction ── */}
      <div className="services-intro container">
        <div className="services-intro__header">
          <div className="services-badge">
            <span className="services-badge__dot" />
            <span className="services-badge__text">OUR SERVICES</span>
          </div>

          <h2 className="services-intro__heading">
            Recruitment Solutions That Connect{' '}
            <span className="services-intro__heading-accent">People and Opportunities</span>
          </h2>

          <p className="services-intro__lead">
            We provide end-to-end international recruitment support, bridging the gap between
            qualified global talent and reputable employers across borders with complete
            transparency, compliance, and care.
          </p>

          {/* ── Visual Stepper (Inspired by reference image with brand Orange & Navy) ── */}
          <div className="pipeline-stepper-box">
            <div className="pipeline-stepper">
              {/* Background Connecting Track Line */}
              <div className="pipeline-stepper__track-bg" />

              {/* Glowing Active Track Fill Line */}
              <div
                className="pipeline-stepper__track-fill"
                style={{ width: `${(pipelineStep / (pipelineStages.length - 1)) * 100}%` }}
              />

              {/* The 3 Stage Nodes */}
              <div className="pipeline-stepper__nodes">
                {pipelineStages.map((stage, idx) => {
                  const isCompleted = idx < pipelineStep;
                  const isActive = idx === pipelineStep;
                  const isUpcoming = idx > pipelineStep;

                  return (
                    <button
                      key={stage.code}
                      type="button"
                      className={`pipeline-node ${
                        isCompleted
                          ? 'pipeline-node--completed'
                          : isActive
                          ? 'pipeline-node--active'
                          : 'pipeline-node--upcoming'
                      }`}
                      onClick={() => setPipelineStep(idx)}
                      aria-label={`Step ${stage.stepNumber}: ${stage.title} - ${stage.subtitle}`}
                    >
                      {/* 3D Circular Button with inspiration styling & brand color */}
                      <div className="pipeline-node__circle-wrapper">
                        {isCompleted && (
                          <div className="pipeline-node__circle pipeline-node__circle--completed">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        )}

                        {isActive && (
                          <div className="pipeline-node__halo">
                            <div className="pipeline-node__circle pipeline-node__circle--active">
                              <span>{stage.stepNumber}</span>
                            </div>
                          </div>
                        )}

                        {isUpcoming && (
                          <div className="pipeline-node__circle pipeline-node__circle--upcoming">
                            <span>{stage.stepNumber}</span>
                          </div>
                        )}
                      </div>

                      {/* Step Labels Underneath */}
                      <div className="pipeline-node__labels">
                        <span className="pipeline-node__step">STEP {stage.code}</span>
                        <span className="pipeline-node__title">{stage.title}</span>
                        <span className="pipeline-node__subtitle">{stage.subtitle}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Downward Indicator Arrow pointing directly from active step */}
            <div
              className="pipeline-pointer"
              style={{ left: `${(pipelineStep / (pipelineStages.length - 1)) * 82 + 9}%` }}
            >
              <div className="pipeline-pointer__arrow" />
            </div>

            {/* Spotlight Banner connected to the stepper */}
            <div className="pipeline-card">
              <div className="pipeline-card__badge">
                <span>STAGE {currentPipeline.code} • {currentPipeline.tagline.toUpperCase()}</span>
              </div>
              <p className="pipeline-card__desc">{currentPipeline.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Two-Sided Services Section ── */}
      <div className="services-dual container">
        <div className="services-dual__header">
          <span className="services-dual__badge">TAILORED SUPPORT</span>
          <h3 className="services-dual__title">How Can We Help You?</h3>
          <p className="services-dual__subtitle">
            Whether you are advancing your international career or hiring skilled workforce, explore our dedicated solutions.
          </p>
        </div>

        <div className="services-dual__grid">
          {/* 👤 For Job Seekers */}
          <div className="service-card service-card--seeker">
            <div className="service-card__top">
              <div className="service-card__badge-row">
                <div className="service-card__role-badge service-card__role-badge--orange">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>For Job Seekers</span>
                </div>
                <span className="service-card__counter">7 Key Services</span>
              </div>

              <h4 className="service-card__heading">Your International Journey Starts Here</h4>
              <p className="service-card__intro">
                From finding the right opportunity to preparing for employment abroad, we support
                candidates throughout their recruitment journey.
              </p>
            </div>

            {/* Vertical List of 7 Services */}
            <div className="service-card__list">
              {seekerServices.map((service, idx) => (
                <div key={service.id} className="service-item" style={{ '--item-idx': idx }}>
                  <div className="service-item__icon service-item__icon--orange">
                    {service.icon}
                  </div>
                  <div className="service-item__content">
                    <h5 className="service-item__name">{service.name}</h5>
                    <p className="service-item__desc">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA at Bottom */}
            <div className="service-card__footer">
              <a href="#job-seeker" className="service-card__cta service-card__cta--orange">
                <span>Find Job Opportunities</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* 🏢 For Employers */}
          <div className="service-card service-card--employer">
            <div className="service-card__top">
              <div className="service-card__badge-row">
                <div className="service-card__role-badge service-card__role-badge--navy">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <line x1="8" y1="6" x2="8.01" y2="6" />
                    <line x1="16" y1="6" x2="16.01" y2="6" />
                    <line x1="12" y1="6" x2="12.01" y2="6" />
                    <line x1="8" y1="10" x2="8.01" y2="10" />
                    <line x1="16" y1="10" x2="16.01" y2="10" />
                    <line x1="12" y1="10" x2="12.01" y2="10" />
                    <line x1="8" y1="14" x2="8.01" y2="14" />
                    <line x1="16" y1="14" x2="16.01" y2="14" />
                    <line x1="12" y1="14" x2="12.01" y2="14" />
                  </svg>
                  <span>For Employers</span>
                </div>
                <span className="service-card__counter">7 Key Services</span>
              </div>

              <h4 className="service-card__heading">Reliable Talent for Your Business</h4>
              <p className="service-card__intro">
                We help employers identify, evaluate, and recruit qualified workers based on their
                workforce requirements.
              </p>
            </div>

            {/* Vertical List of 7 Services */}
            <div className="service-card__list">
              {employerServices.map((service, idx) => (
                <div key={service.id} className="service-item" style={{ '--item-idx': idx }}>
                  <div className="service-item__icon service-item__icon--navy">
                    {service.icon}
                  </div>
                  <div className="service-item__content">
                    <h5 className="service-item__name">{service.name}</h5>
                    <p className="service-item__desc">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA at Bottom */}
            <div className="service-card__footer">
              <a href="#employer" className="service-card__cta service-card__cta--navy">
                <span>Request Workers</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Recruitment Process: Stepper UI with brand Orange/Navy ── */}
      <div className="services-process container">
        <div className="services-process__header">
          <span className="services-process__badge">END-TO-END WORKFLOW</span>
          <h3 className="services-process__title">From Recruitment to Placement</h3>
          <p className="services-process__lead">
            A transparent, structured 5-step journey making the international employment pathway simple, compliant, and dependable.
          </p>
        </div>

        {/* Neumorphic 3D Stepper Bar Container */}
        <div className="stepper-wrap">
          <div className="stepper-card">
            <div className="stepper-bar">
              {/* Background Full Track Line */}
              <div className="stepper-track-bg" />

              {/* Glowing Active Fill Track Line */}
              <div
                className="stepper-track-fill"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />

              {/* 5 Step Nodes */}
              <div className="stepper-nodes">
                {processSteps.map((step, idx) => {
                  const isCompleted = idx < activeStep;
                  const isActive = idx === activeStep;
                  const isUpcoming = idx > activeStep;

                  return (
                    <button
                      key={step.code}
                      type="button"
                      className={`stepper-node ${
                        isCompleted
                          ? 'stepper-node--completed'
                          : isActive
                          ? 'stepper-node--active'
                          : 'stepper-node--upcoming'
                      }`}
                      onClick={() => setActiveStep(idx)}
                      aria-label={`Step ${step.stepNumber}: ${step.title}`}
                    >
                      {/* Step Circle Button */}
                      <div className="stepper-node__circle-wrapper">
                        {isCompleted && (
                          <div className="stepper-node__circle stepper-node__circle--completed">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        )}

                        {isActive && (
                          <div className="stepper-node__halo">
                            <div className="stepper-node__circle stepper-node__circle--active">
                              <span>{step.stepNumber}</span>
                            </div>
                          </div>
                        )}

                        {isUpcoming && (
                          <div className="stepper-node__circle stepper-node__circle--upcoming">
                            <span>{step.stepNumber}</span>
                          </div>
                        )}
                      </div>

                      {/* Label Underneath */}
                      <span className="stepper-node__label">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Downward Indicator Arrow pointing to the active step */}
            <div
              className="stepper-pointer"
              style={{ left: `calc(${(activeStep / (processSteps.length - 1)) * 100}% * 0.85 + 7.5%)` }}
            >
              <div className="stepper-pointer__triangle" />
            </div>

            {/* Active Step Spotlight Card */}
            <div className="stepper-spotlight">
              <div className="stepper-spotlight__header">
                <div className="stepper-spotlight__meta">
                  <span className="stepper-spotlight__badge">
                    STEP {currentStep.code} OF 05 • {currentStep.stage}
                  </span>
                  <h4 className="stepper-spotlight__title">{currentStep.title}</h4>
                </div>

                {/* Step Switch Buttons */}
                <div className="stepper-spotlight__nav">
                  <button
                    type="button"
                    className="stepper-nav-btn"
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    aria-label="Previous step"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span>Previous</span>
                  </button>

                  <button
                    type="button"
                    className="stepper-nav-btn stepper-nav-btn--primary"
                    onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    disabled={activeStep === processSteps.length - 1}
                    aria-label="Next step"
                  >
                    <span>Next Step</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Statement Quote */}
              <div className="stepper-spotlight__quote">
                <div className="stepper-spotlight__icon-wrap">
                  {currentStep.icon}
                </div>
                <div>
                  <div className="stepper-spotlight__summary">{currentStep.shortDesc}</div>
                  <div className="stepper-spotlight__detail">{currentStep.detail}</div>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="stepper-spotlight__deliverables">
                <span className="stepper-spotlight__deliv-title">Key Actions in this stage:</span>
                <div className="stepper-spotlight__deliv-grid">
                  {currentStep.deliverables.map((item, idx) => (
                    <div key={idx} className="stepper-deliv-item">
                      <div className="stepper-deliv-item__check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Step Indicators */}
              <div className="stepper-quickbar">
                {processSteps.map((step, idx) => (
                  <button
                    key={step.code}
                    type="button"
                    className={`stepper-quick-btn ${idx === activeStep ? 'stepper-quick-btn--active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <span className="stepper-quick-btn__num">{step.code}</span>
                    <span className="stepper-quick-btn__text">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. End CTA ── */}
      <div className="services-cta">
        <div className="services-cta__backdrop" />
        <div className="services-cta__inner container">
          <div className="services-cta__header">
            <span className="services-cta__badge">START TODAY</span>
            <h3 className="services-cta__heading">Ready to Take the Next Step?</h3>
            <p className="services-cta__subheading">
              Connect with our team to explore verified job openings abroad or recruit dependable talent for your business.
            </p>
          </div>

          <div className="services-cta__grid">
            {/* Candidate CTA Box */}
            <div className="cta-box cta-box--candidate">
              <div className="cta-box__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="cta-box__body">
                <span className="cta-box__label">FOR CANDIDATES</span>
                <h4 className="cta-box__title">Find Opportunities Matching Your Skills</h4>
                <p className="cta-box__text">
                  Discover verified vacancies in top destination countries with legitimate employer sponsorships.
                </p>
                <a href="#find-job" className="btn btn--primary cta-box__btn cta-box__btn--orange">
                  <span>Find a Job</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Employer CTA Box */}
            <div className="cta-box cta-box--employer">
              <div className="cta-box__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <line x1="8" y1="6" x2="8.01" y2="6" />
                  <line x1="16" y1="6" x2="16.01" y2="6" />
                </svg>
              </div>
              <div className="cta-box__body">
                <span className="cta-box__label">FOR EMPLOYERS</span>
                <h4 className="cta-box__title">Find Qualified Workers For Your Business</h4>
                <p className="cta-box__text">
                  Recruit screened, reliable tradespeople, technicians, and professionals deployed directly to your projects.
                </p>
                <a href="#hire-workers" className="btn cta-box__btn cta-box__btn--navy">
                  <span>Hire Workers</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
