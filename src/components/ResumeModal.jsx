import React, { useEffect } from 'react';
import { personalData, experienceData, skillsData, educationData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ onClose, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyResumeText = () => {
    const resumeText = `PERIYARAJA S
Backend Developer · PHP / Laravel · Node.js – Immediate Joiner
Madurai, India · ${personalData.phone} · ${personalData.email}
GitHub: ${personalData.github}

SUMMARY
${personalData.summary}

EXPERIENCE
${experienceData.map((e) => `${e.role} | ${e.company}, ${e.location} (${e.period})\n${e.bullets.map((b) => `• ${b}`).join('\n')}`).join('\n\n')}

SKILLS
${skillsData.map((s) => `${s.category}: ${s.items.map((i) => i.name).join(', ')}`).join('\n')}

EDUCATION
${educationData.degree} (${educationData.period})
${educationData.institution}
`;
    navigator.clipboard.writeText(resumeText).then(() => {
      onShowToast('Full resume copied to clipboard!');
    });
  };

  return (
    <div
      className="modal-backdrop-custom"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div className="modal-dialog-custom" style={{ maxWidth: '840px' }}>
        <div className="modal-header-custom">
          <div>
            <span className="editorial-label mb-1">CURRICULUM VITAE</span>
            <h3 id="modal-resume-title" style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>
              Periyaraja S — Resume Preview
            </h3>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="btn-secondary-tech"
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <i className="bi bi-printer"></i>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              className="btn-icon-square"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="modal-body-custom" style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem' }}>
          {/* Resume Header */}
          <div className="border-bottom pb-3 mb-4">
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
              PERIYARAJA S
            </h2>
            <div className="fw-semibold text-accent mb-2">
              Backend Developer · PHP / Laravel · Node.js — Immediate Joiner
            </div>
            <div className="d-flex flex-wrap gap-3 text-muted" style={{ fontSize: '0.85rem' }}>
              <span><i className="bi bi-geo-alt me-1"></i>Madurai, India</span>
              <span><i className="bi bi-telephone me-1"></i>{personalData.phone}</span>
              <span><i className="bi bi-envelope me-1"></i>{personalData.email}</span>
              <span><i className="bi bi-github me-1"></i>github.com/periyaraja-s</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-4">
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', paddingBottom: '4px', marginBottom: '8px' }}>
              SUMMARY
            </h4>
            <p style={{ lineHeight: 1.65, color: 'var(--text-main)' }}>
              {personalData.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', paddingBottom: '4px', marginBottom: '14px' }}>
              EXPERIENCE
            </h4>
            <div className="d-flex flex-column gap-4">
              {experienceData.map((exp) => (
                <div key={exp.id}>
                  <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2 mb-1">
                    <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.98rem' }}>
                      {exp.role} <span style={{ fontWeight: 500, color: 'var(--text-muted)' }}>| {exp.company}, {exp.location}</span>
                    </span>
                    <span className="font-mono-tabular text-dim" style={{ fontSize: '0.82rem' }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul style={{ margin: '8px 0 0 0', paddingLeft: '18px', color: 'var(--text-muted)' }}>
                    {exp.bullets.map((b, i) => (
                      <li key={i} style={{ marginBottom: '6px', lineHeight: 1.55 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-4">
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', paddingBottom: '4px', marginBottom: '12px' }}>
              KEY PROJECTS
            </h4>
            <div className="d-flex flex-column gap-3">
              {projectsData.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
                    <strong style={{ color: 'var(--text-main)' }}>{p.title} — {p.organization}</strong>
                  </div>
                  <div className="text-dim font-mono-tabular" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                    Technologies: {p.stack.join(', ')}
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-muted)' }}>
                    {p.highlights.map((h, i) => (
                      <li key={i} style={{ marginBottom: '3px', lineHeight: 1.5 }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', paddingBottom: '4px', marginBottom: '10px' }}>
              SKILLS
            </h4>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.88rem' }}>
              <div>
                <strong>Backend:</strong> PHP, Laravel, CodeIgniter, Node.js, Express.js
              </div>
              <div>
                <strong>API & Application Development:</strong> REST APIs, Authentication & Authorization, WebSockets, Payment Integration
              </div>
              <div>
                <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB
              </div>
              <div>
                <strong>Frontend:</strong> JavaScript, jQuery, HTML5, CSS3, Bootstrap, React.js
              </div>
              <div>
                <strong>Auth & Security:</strong> Laravel Sanctum, Passport
              </div>
              <div>
                <strong>DevOps & Tools:</strong> Git, GitHub, CI/CD (Node.js), Hostinger Git Deploy, FTP, AWS S3, Postman
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', borderBottom: '1px solid var(--border)', paddingBottom: '4px', marginBottom: '8px' }}>
              EDUCATION
            </h4>
            <div className="d-flex justify-content-between align-items-baseline flex-wrap gap-2">
              <div>
                <strong style={{ color: 'var(--text-main)' }}>{educationData.degree}</strong>
                <div className="text-muted">{educationData.institution}</div>
              </div>
              <span className="font-mono-tabular text-dim" style={{ fontSize: '0.85rem' }}>
                {educationData.period}
              </span>
            </div>
          </div>
        </div>

        <div className="modal-footer-custom">
          <button
            type="button"
            className="btn-secondary-tech"
            onClick={handleCopyResumeText}
          >
            <i className="bi bi-copy"></i>
            <span>Copy Text</span>
          </button>
          <button
            type="button"
            className="btn-primary-tech"
            onClick={handlePrint}
          >
            <i className="bi bi-printer"></i>
            <span>Print / Save PDF</span>
          </button>
          <button type="button" className="btn-secondary-tech" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
