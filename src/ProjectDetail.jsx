import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from './data/projects';
import { useEffect } from 'react';
import './portfolio.css';

function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.438 9.8 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12.3C24 5.67 18.63.3 12 .3z"/>
    </svg>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} · Jeyesh Karthik`;
    return () => { document.title = 'Jeyesh Karthik'; };
  }, [project]);

  if (!project) {
    return (
      <div className="detail-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--dim)', marginBottom: '1.5rem' }}>Project not found.</p>
          <button className="btn btn--ghost" onClick={() => navigate('/')}>← Back to Portfolio</button>
        </div>
      </div>
    );
  }

  const isDone = project.status === 'Completed';

  return (
    <div className="detail-page">
      {/* Background orb matching project accent color */}
      <div className="detail-page__orb" style={{ background: project.accent }} />

      {/* Sticky Nav */}
      <nav className="detail-nav">
        <div className="detail-nav__inner">
          <button className="detail-nav__back" onClick={() => navigate('/')}>
            ← Back to Portfolio
          </button>
          <div className="detail-nav__logo">
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            JK
          </div>
        </div>
      </nav>

      <div className="detail-page__inner">
        <div className="detail-grid">

          {/* ── Left: Main Content ── */}
          <div>
            <div className="detail-header">
              <div className="detail-header__badges">
                <span className={`badge ${isDone ? 'badge--done' : 'badge--wip'}`}>
                  <span className="badge__dot" />
                  {project.status}
                </span>
                <span className="badge badge--year">{project.year}</span>
              </div>
              <h1 className="detail-header__title">{project.title}</h1>
              <p className="detail-header__subtitle">{project.subtitle}</p>
            </div>

            <div className="detail-divider" />

            <p className="detail-overview">{project.overview}</p>

            <div className="detail-section-label">Key Highlights</div>
            <div className="detail-highlights">
              {project.highlights.map((h, i) => (
                <div key={i} className="detail-highlight">
                  <div className="detail-highlight__check">✓</div>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="detail-actions">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--github"
                >
                  <GitHubIcon size={15} />
                  View on GitHub
                </a>
              ) : (
                <span className="btn btn--ghost" style={{ cursor: 'default', opacity: 0.5 }}>
                  No public repository
                </span>
              )}
              <button className="btn btn--back" onClick={() => navigate('/')}>
                ← All Projects
              </button>
            </div>
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="detail-sidebar">

            {/* Accent visual card */}
            <div className="detail-sidebar-card" style={{
              background: `linear-gradient(135deg, ${project.accent}18, ${project.accent}06)`,
              border: `1px solid ${project.accent}28`,
              borderRadius: 14,
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 120,
            }}>
              <span style={{ fontSize: '3.5rem' }}>
                {{ 'smart-classroom': '🎓', 'metro-ticket': '🚇', 'games-website': '🎮', 'data-analysis': '📊', 'iot-research': '🔒' }[id] ?? '💡'}
              </span>
            </div>

            {/* Project info */}
            <div className="detail-sidebar-card">
              <div className="detail-sidebar-card__title">Project Info</div>
              {[
                ['Year',   project.year],
                ['Status', project.status],
                ['Type',   project.subtitle],
              ].map(([label, value]) => (
                <div key={label} className="detail-info-row">
                  <span className="detail-info-row__label">{label}</span>
                  <span className="detail-info-row__value">{value}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="detail-sidebar-card">
              <div className="detail-sidebar-card__title">Tech Stack</div>
              <div className="detail-tech-tags">
                {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            {/* GitHub link card if available */}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="detail-sidebar-card"
                 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem',
                          transition: 'all 0.22s', cursor: 'pointer',
                          textDecoration: 'none' }}
                 onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-h)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.transform = ''; }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,255,255,0.06)',
                              border: '1px solid var(--border)', display: 'flex',
                              alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GitHubIcon size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>GitHub Repository</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 2 }}>View source code ↗</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
