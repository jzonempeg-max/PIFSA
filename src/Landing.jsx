import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';
import { COURSES, TEAM, PROCESS_STEPS, GALLERY, HERO_PILLS, ABOUT_STATS, TEAM_STATS } from './landingData.js';
import StatNumber from '../components/StatNumber.jsx';
import { useCompass } from '../components/useCompass.js';
import EnrollForm from '../components/EnrollForm.jsx';

const NAV = ['about', 'team', 'courses', 'gallery', 'process', 'contact'];
const CIRC = 2820;

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { wrapRef, active, goToStep } = useCompass(PROCESS_STEPS.length);

  const go = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), menuOpen ? 200 : 0);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const step = PROCESS_STEPS[active];
  const half = Math.ceil(GALLERY.length / 2);
  const row1 = GALLERY.slice(0, half);
  const row2 = GALLERY.slice(half);

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="logo">
          <img src="images/logo.png" alt="PIFSA seal" style={{ height: 44, width: 'auto', verticalAlign: 'middle', marginRight: 10 }} />
          <span style={{ verticalAlign: 'middle' }}>PIFSA</span>
        </div>
        <div className="nav">
          {NAV.map((id) => (
            <a key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</a>
          ))}
        </div>
        <button className="cta-header" onClick={() => go('contact')}>Enroll Now</button>
        <button
          className={'nav-toggle' + (menuOpen ? ' open' : '')}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={'mobile-nav' + (menuOpen ? ' open' : '')}>
        {NAV.map((id) => (
          <a key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</a>
        ))}
        <button className="mobile-nav-cta" onClick={() => go('contact')}>Enroll Now</button>
      </div>
      {menuOpen && <div className="nav-backdrop open" onClick={() => setMenuOpen(false)} />}

      {/* Hero */}
      <div className="hero">
        <h1>Learn to Probe and Be a Purveyor of <span style={{ color: 'var(--gold)' }}>Truth</span></h1>
        <p>Advanced training in investigation, forensic science, and intelligence analysis. Recognized and accredited by government agencies across the Philippines.</p>
        <div className="hero-marquee">
          {[0, 1, 2].map((rowI) => (
            <div key={rowI} className={`hmarquee ${rowI % 2 === 0 ? 'left' : 'right'}`}>
              <div className="htrack">
                {[...HERO_PILLS, ...HERO_PILLS].map((p, i) => (
                  <span key={i} className="hpill">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="cta-hero" onClick={() => go('contact')}>Start Your Journey</button>
        <div className="scroll-indicator">Scroll to explore</div>
      </div>

      {/* About */}
      <section id="about">
        <img src="images/logo.png" alt="" className="about-watermark" aria-hidden="true" />
        <div className="section-header">
          <h2 className="section-title">About PIFSA</h2>
          <p className="section-subtitle">The Philippine Investigation and Forensic Science Academy is the leading institution for professional development in investigative sciences.</p>
        </div>
        <div className="about-grid">
          <div>
            <h3>Our Mission</h3>
            <p>We equip investigators, law enforcement professionals, and corporate teams with the advanced skills and knowledge required to uncover truth, gather evidence, and make informed decisions in complex investigations.</p>
            <h3>Our Vision</h3>
            <p>To be the premier provider of forensic and investigative training in Southeast Asia, setting the standard for excellence, ethics, and professional integrity.</p>
            <h3>Accreditations</h3>
            <p>Certified by the SEC, CPD provider, and recognized by leading government agencies including the Philippine National Police and Bureau of Internal Revenue.</p>
          </div>
          <div className="stat-grid">
            {ABOUT_STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <StatNumber className="stat-number count-num" target={s.target} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="team-section">
        <div className="team-inner">
          <div className="section-header">
            <div className="team-eyebrow"><span className="team-eyebrow-dot"></span>Who We Are</div>
            <h2 className="section-title">The people behind the <span className="accent">Academy</span></h2>
            <p className="section-subtitle">A team of career investigators, forensic scientists, and legal experts dedicated to advancing the standard of investigative training in the Philippines.</p>
          </div>
          <div className="team-intro">
            <div className="team-intro-text">
              <h3>Built on real-world experience</h3>
              <p>PIFSA was founded by professionals who spent their careers in the field — in law enforcement, forensic laboratories, and the courtroom. That experience shapes every course we teach and every certification we award.</p>
              <p>We believe investigative excellence is learned by doing. Our instructors bring active casework, proven methodologies, and a commitment to ethics into every session.</p>
            </div>
            <div className="team-values">
              <div className="value-item">
                <div className="value-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3l11 4v7c0 7-4.5 12-11 15-6.5-3-11-8-11-15V7z" /><path d="M12 16l3 3 6-6" /></svg></div>
                <div><h4>Integrity first</h4><p>Every method we teach upholds legal and ethical standards.</p></div>
              </div>
              <div className="value-item">
                <div className="value-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="11" r="6" /><path d="M6 28c0-5 4.5-8 10-8s10 3 10 8" /></svg></div>
                <div><h4>Expert-led</h4><p>Learn from practitioners with decades of field experience.</p></div>
              </div>
            </div>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div className="team-card" key={m.initials}>
                <div className="team-card-top">
                  <div className="team-avatar">{m.initials}</div>
                  <div className="team-badge">{m.badge}</div>
                </div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <div className="team-bio">{m.bio}</div>
                <div className="team-tags">{m.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="team-stats">
            {TEAM_STATS.map((s) => (
              <div className="tstat" key={s.label}>
                <StatNumber className="tstat-num count-num" target={s.target} suffix={s.suffix} />
                <div className="tstat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses">
        <div className="section-header">
          <h2 className="section-title">Courses Offered</h2>
          <p className="section-subtitle">Comprehensive programs designed to develop investigative expertise across multiple disciplines.</p>
        </div>
        <div className="courses-container">
          {COURSES.map((c) => (
            <div className="course-service" key={c.title}>
              <div className="course-icon" dangerouslySetInnerHTML={{ __html: c.icon }} />
              <div className="course-main">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <div className="course-items">
                {c.items.map((it, i) => (
                  <div className="course-item" key={it}><span className="number">{String(i + 1).padStart(2, '0')}</span>{it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <div className="gallery-section">
        <section id="gallery">
          <div className="gallery-head">
            <div className="team-eyebrow"><span className="team-eyebrow-dot"></span>Gallery</div>
            <h2 className="section-title">Moments from the <span className="accent">field</span></h2>
            <p className="section-subtitle">Training sessions, certification ceremonies, and partnerships from across the country.</p>
          </div>
        </section>
        <div className="gmarquee">
          {[row1, row2].map((row, ri) => (
            <div key={ri} className={`gmarquee-row gmarquee-row-${ri + 1}`}>
              {[...row, ...row].map((g, i) => (
                <div className="gcard" key={i}>
                  <img src={g.src} alt={g.cap} loading="lazy" />
                  <div className="gcard-cap">{g.cap}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Process (compass) */}
      <section id="process" className="process-section">
        <div className="section-header">
          <h2 className="section-title">Delivering results in <span className="accent">four moves</span></h2>
          <p className="section-subtitle">From first contact to certification, our process is built to develop real investigative capability.</p>
        </div>
        <div className="compass-wrap" ref={wrapRef}>
          <div className="compass-sticky">
            <img src="images/justice.png" alt="" className="process-watermark" aria-hidden="true" />
            <div className="compass-progress">
              <div className="cprog-bar"><div className="cprog-fill" style={{ width: `${(active + 1) / PROCESS_STEPS.length * 100}%` }} /></div>
              <div className="cprog-label"><span>{String(active + 1).padStart(2, '0')}</span> / 04</div>
            </div>
            <div className="compass-stage">
              <div className="compass-dial" style={{ transform: `rotate(${-active * 30}deg)` }}>
                <svg className="compass-arc" viewBox="0 0 900 900">
                  <circle className="carc-track" cx="450" cy="450" r="449" />
                  <circle className="carc-fill" cx="450" cy="450" r="449"
                    style={{ strokeDashoffset: CIRC - (CIRC * (active + 1) / PROCESS_STEPS.length * 0.25) - (CIRC * 0.75) }} />
                </svg>
                {PROCESS_STEPS.map((s, i) => (
                  <div className={'compass-step' + (i === active ? ' active' : '')} style={{ '--i': i }} key={i}>
                    <div className="cstep-dot"><span>{i + 1}</span></div>
                  </div>
                ))}
              </div>
              <div className="compass-center">
                <div className="compass-icon" dangerouslySetInnerHTML={{ __html: step.icon }} />
                <div className="compass-label">Step</div>
                <div className="compass-num">{active + 1}</div>
                <div className="compass-content">
                  <div className="compass-tag">{step.tag}</div>
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </div>
              </div>
            </div>
            <div className="compass-nav">
              {PROCESS_STEPS.map((s, i) => (
                <button key={i} className={'cnav-item' + (i === active ? ' active' : '')} onClick={() => goToStep(i)}>
                  <span className="cnav-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cnav-t">{s.t}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="process-mobile">
          {PROCESS_STEPS.map((s, i) => (
            <div className="pm-step" key={i}>
              <div className="pm-num">{i + 1}</div>
              <div>
                <div className="pm-tag">{s.tag}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: 0 }}>
        <div className="contact-wrapper">
          <div className="contact-inner">
            <h2>Get Started</h2>
            <p>Ready to advance your career? Fill out the form below and we will guide you through the next steps.</p>
            <EnrollForm courses={COURSES.map((c) => c.title)} />
            <div className="contact-info">
              <p>Phone: +63 (2) 845-2010</p>
              <p>Email: pifsa2017@gmail.com</p>
              <p>Address: 2nd Floor, BS Square Commercial Bldg., Dona, Paranaque City</p>
            </div>
          </div>
          <div className="contact-quote">
            <div className="cq-mark">&ldquo;</div>
            <blockquote className="cq-text">Learn to probe and be a purveyor of truth.</blockquote>
            <p className="cq-sub">The guiding principle behind every PIFSA program — training investigators who pursue facts with integrity, precision, and purpose.</p>
            <div className="cq-divider"></div>
            <div className="cq-points">
              <div className="cq-point"><span className="cq-check">&#10003;</span>Practitioner-led, hands-on training</div>
              <div className="cq-point"><span className="cq-check">&#10003;</span>Government-accredited certifications</div>
              <div className="cq-point"><span className="cq-check">&#10003;</span>A nationwide network of professionals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <a onClick={() => navigate('/login')}>Portal Login</a>
        </div>
        <div className="footer-text">© {new Date().getFullYear()} Philippine Investigation and Forensic Science Academy. All rights reserved.</div>
      </div>
    </>
  );
}
