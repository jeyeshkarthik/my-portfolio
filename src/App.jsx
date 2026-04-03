import { useState, useEffect, useRef } from 'react';
import './portfolio.css';

const SKILLS = [
  { category: 'Languages', items: ['Python', 'Java', 'C', 'C++'] },
  { category: 'Web', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { category: 'Data Science', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { category: 'Database', items: ['SQL Plus', 'Schema Design', 'Query Optimization'] },
  { category: 'Concepts', items: ['Data Structures & Algorithms', 'Exploratory Data Analysis'] },
  { category: 'DevOps', items: ['Docker', 'Nginx', 'Git', 'CI/CD'] },
];

const PROJECTS = [
  {
    title: 'University Interaction System',
    description:
      'Full-stack MERN platform for students and faculty featuring QR-based attendance, real-time chat, timetable management, and academic analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: '2024',
  },
  {
    title: 'Metro Ticket Booking System',
    description:
      'Metro ticketing app with BFS route finding, live train schedules, booking history, and a complete Oracle database backend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Oracle DB'],
    year: '2024',
  },
  {
    title: 'Data Analysis Projects',
    description:
      'A collection of EDA projects using Python — covering statistical analysis, data visualisation, and insight generation from real-world datasets.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    year: '2023',
  },
  {
    title: 'IoT Smart Home Privacy Research',
    description:
      'Research on privacy vulnerabilities in IoT smart home ecosystems, studying data exposure risks and proposing mitigation strategies.',
    tech: ['IoT', 'Security', 'Python', 'Research'],
    year: '2024',
  },
];

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={`fade ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="root">

      {/* Nav */}
      <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => goto('home')}>JK</button>
          <div className="nav__links">
            {['Home','About','Skills','Projects','Contact'].map(l => (
              <button
                key={l}
                className={`nav__link ${active === l.toLowerCase() ? 'nav__link--active' : ''}`}
                onClick={() => goto(l.toLowerCase())}
              >{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero__inner">
          <FadeIn>
            <h1 className="hero__name">Jeyesh Karthik</h1>
            <p className="hero__sub">
              2nd-year Computer Science student at VIT Chennai — building software
              that solves real problems, from full-stack web apps to data-driven research.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary" onClick={() => goto('projects')}>View Projects</button>
              <button className="btn btn--ghost" onClick={() => goto('contact')}>Contact</button>
            </div>
          </FadeIn>
          <FadeIn delay={100} className="hero__meta">
            <div className="meta__item"><span className="meta__num">4+</span><span className="meta__label">Projects</span></div>
            <div className="meta__divider" />
            <div className="meta__item"><span className="meta__num">10+</span><span className="meta__label">Technologies</span></div>
            <div className="meta__divider" />
            <div className="meta__item"><span className="meta__num">VIT</span><span className="meta__label">Chennai</span></div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section__inner">
          <FadeIn>
            <span className="section__label">About</span>
            <h2 className="section__title">A little about me</h2>
          </FadeIn>
          <div className="about__grid">
            <FadeIn delay={80} className="about__text">
              <p>
                I'm a Computer Science student at <strong>VIT Chennai</strong> with a passion for building
                things that work — whether that's a full-stack web platform, a data pipeline, or a clean REST API.
              </p>
              <p>
                I care about writing readable code and building systems that are simple to understand.
                I'm always looking to grow — through coursework, projects, and hands-on research.
              </p>
              <p>
                Outside of code, I play the keyboard, watch football, and enjoy driving long stretches of road.
              </p>
            </FadeIn>
            <FadeIn delay={160} className="about__details">
              {[
                ['Focus', 'Full-Stack Development'],
                ['University', 'VIT Chennai'],
                ['Year', '2nd Year, B.Tech CSE'],
                ['Location', 'Chennai, India'],
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

      {/* Skills */}
      <section id="skills" className="section section--alt">
        <div className="section__inner">
          <FadeIn>
            <span className="section__label">Skills</span>
            <h2 className="section__title">What I work with</h2>
          </FadeIn>
          <div className="skills__grid">
            {SKILLS.map((s, i) => (
              <FadeIn key={s.category} delay={i * 60}>
                <div className="skill__card">
                  <h3 className="skill__name">{s.category}</h3>
                  <div className="skill__tags">
                    {s.items.map(item => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section__inner">
          <FadeIn>
            <span className="section__label">Projects</span>
            <h2 className="section__title">Things I've built</h2>
          </FadeIn>
          <div className="projects__list">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 70}>
                <div className="project">
                  <div className="project__header">
                    <h3 className="project__title">{p.title}</h3>
                    <span className="project__year">{p.year}</span>
                  </div>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__tech">
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section--alt">
        <div className="section__inner">
          <FadeIn>
            <span className="section__label">Contact</span>
            <h2 className="section__title">Let's talk</h2>
            <p className="contact__sub">
              Open to internships, collaborations, and interesting opportunities.
            </p>
          </FadeIn>
          <FadeIn delay={80} className="contact__links">
            <a href="mailto:jeyesh5karthik@gmail.com" className="contact__link">
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">jeyesh5karthik@gmail.com ↗</span>
            </a>
            <a href="https://www.linkedin.com/in/jeyeshkarthik/" target="_blank" rel="noopener noreferrer" className="contact__link">
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">linkedin.com/in/jeyeshkarthik ↗</span>
            </a>
            <a href="https://github.com/jeyeshkarthik" target="_blank" rel="noopener noreferrer" className="contact__link">
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">github.com/jeyeshkarthik ↗</span>
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="footer">
        <span>Jeyesh Karthik · {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
