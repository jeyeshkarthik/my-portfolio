import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS, SKILLS } from './data/projects';
import './portfolio.css';

/* ── Intersection-based fade hook ── */
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`fade ${visible ? 'in' : ''} ${className}`}
         style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── GitHub icon ── */
function GitHubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.438 9.8 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12.3C24 5.67 18.63.3 12 .3z"/>
    </svg>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const openProject = (id) => navigate(`/project/${id}`);

  const EMOJI_MAP = { 'smart-classroom': '🎓', 'metro-ticket': '🚇', 'games-website': '🎮', 'data-analysis': '📊', 'iot-research': '🔒' };

  return (
    <div className="root">

      {/* ── Nav ── */}
      <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => goto('home')}>
            <span className="nav__logo-dot" />
            JK
          </button>
          <div className="nav__links">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(l => (
              <button key={l}
                className={`nav__link ${active === l.toLowerCase() ? 'nav__link--active' : ''}`}
                onClick={() => goto(l.toLowerCase())}>
                {l}
              </button>
            ))}
            <button className="nav__cta" onClick={() => goto('contact')}>Hire me</button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__inner">
          <FadeIn>
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Available for Internships · 2026
            </div>
            <h1 className="hero__name">Jeyesh Karthik</h1>
            <p className="hero__sub">
              2nd-year Computer Science student at VIT Chennai — building software
              that solves real problems, from full-stack web platforms to data-driven research.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => goto('projects')}>
                View Projects ↓
              </button>
              <button className="btn btn--ghost" onClick={() => goto('contact')}>
                Get in touch
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={150} className="hero__meta">
            <div className="meta__item">
              <span className="meta__num">5+</span>
              <span className="meta__label">Projects</span>
            </div>
            <div className="meta__divider" />
            <div className="meta__item">
              <span className="meta__num">15+</span>
              <span className="meta__label">Technologies</span>
            </div>
            <div className="meta__divider" />
            <div className="meta__item">
              <span className="meta__num">VIT</span>
              <span className="meta__label">Chennai</span>
            </div>
            <div className="meta__divider" />
            <div className="meta__item">
              <span className="meta__num">B.Tech</span>
              <span className="meta__label">CSE · 2027</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="section">
        <div className="section__inner">
          <FadeIn>
            <span className="section__eyebrow">About</span>
            <h2 className="section__title">A little about me</h2>
          </FadeIn>
          <div className="about__grid">
            <FadeIn delay={80} className="about__text">
              <p>
                I'm a Computer Science student at <strong>VIT Chennai</strong> with a passion for building
                things that work — whether that's a full-stack web platform, a data pipeline, or a clean REST API.
              </p>
              <p>
                I care about writing readable code and building systems that are simple to understand yet
                powerful in what they do. I'm always looking to grow — through coursework, personal projects, and hands-on research.
              </p>
              <p>
                Outside of code, I play the keyboard, watch football, and enjoy driving long stretches of road.
              </p>
            </FadeIn>
            <FadeIn delay={160} className="about__details">
              {[
                ['Focus',      'Full-Stack Development'],
                ['University', 'VIT Chennai'],
                ['Year',       '2nd Year, B.Tech CSE'],
                ['Graduation', '2027'],
                ['Location',   'Chennai, India'],
              ].map(([label, value]) => (
                <div key={label} className="detail">
                  <span className="detail__label">{label}</span>
                  <span className="detail__value">{value}</span>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="section section--alt">
        <div className="section__inner">
          <FadeIn>
            <span className="section__eyebrow">Skills</span>
            <h2 className="section__title">What I work with</h2>
          </FadeIn>
          <div className="skills__grid">
            {SKILLS.map((s, i) => (
              <FadeIn key={s.category} delay={i * 65}>
                <div className="skill__card">
                  <span className="skill__emoji">{s.emoji}</span>
                  <h3 className="skill__name">{s.category}</h3>
                  <div className="skill__tags">
                    {s.items.map(item => <span key={item} className="tag">{item}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="section">
        <div className="section__inner">
          <FadeIn>
            <span className="section__eyebrow">Projects</span>
            <h2 className="section__title">Things I've built</h2>
          </FadeIn>
          <div className="projects__grid">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 75}>
                <button className="project-card" onClick={() => openProject(p.id)}>
                  <div className="project-card__top">
                    <div className="project-card__icon"
                         style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}30` }}>
                      {EMOJI_MAP[p.id] ?? '💡'}
                    </div>
                    <div className="project-card__badges">
                      <span className="badge badge--year">{p.year}</span>
                      <span className={`badge ${p.status === 'Completed' ? 'badge--done' : 'badge--wip'}`}>
                        <span className="badge__dot" />
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="project-card__title">{p.title}</div>
                    <div className="project-card__subtitle">{p.subtitle}</div>
                  </div>
                  <p className="project-card__desc">{p.shortDesc}</p>
                  <div className="project-card__footer">
                    <div className="project-card__tech">
                      {p.tech.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                      {p.tech.length > 3 && <span className="tag">+{p.tech.length - 3}</span>}
                    </div>
                    <span className="project-card__arrow">View ↗</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="section section--alt">
        <div className="section__inner">
          <FadeIn>
            <span className="section__eyebrow">Contact</span>
            <h2 className="section__title">Let's talk</h2>
            <p className="contact__sub">
              Open to internships, collaborations, and interesting opportunities.
              My inbox is always open.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="contact__grid">
              <a href="mailto:jeyesh5karthik@gmail.com" className="contact__card">
                <span className="contact__card-label">Email</span>
                <span className="contact__card-value">jeyesh5karthik@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/jeyeshkarthik/" target="_blank" rel="noopener noreferrer" className="contact__card">
                <span className="contact__card-label">LinkedIn</span>
                <span className="contact__card-value">linkedin.com/in/jeyeshkarthik</span>
              </a>
              <a href="https://github.com/jeyeshkarthik" target="_blank" rel="noopener noreferrer" className="contact__card">
                <span className="contact__card-label">GitHub</span>
                <span className="contact__card-value">github.com/jeyeshkarthik</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="footer">
        Jeyesh Karthik · <span>{new Date().getFullYear()}</span> · Built with React & Vite
      </footer>
    </div>
  );
}
