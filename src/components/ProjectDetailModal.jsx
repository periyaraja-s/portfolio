import React, { useEffect } from 'react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop-custom"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-dialog-custom">
        {/* Modal Header */}
        <div className="modal-header-custom">
          <div>
            <div className="editorial-label mb-1">
              <span>{project.organization} · {project.period}</span>
            </div>
            <h3 id="modal-project-title" style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700 }}>
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="btn-icon-square"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-custom">
          <div className="mb-4">
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              System Overview
            </h4>
            <p style={{ color: 'var(--text-main)', lineHeight: 1.7, fontSize: '0.96rem' }}>
              {project.description}
            </p>
          </div>

          <div className="mb-4">
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Key Technical Deliverables & Metrics
            </h4>
            <ul className="project-bullet-list">
              {project.highlights.map((h, i) => (
                <li key={i} className="project-bullet-item" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Engineering Stack
            </h4>
            <div className="d-flex flex-wrap align-items-center gap-2">
              {project.stack.map((s, idx) => (
                <React.Fragment key={s}>
                  <span className="tech-tag-item" style={{ fontSize: '0.85rem' }}>{s}</span>
                  {idx < project.stack.length - 1 && <span className="tech-separator">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-custom">
          {project.github !== '#' ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-tech"
            >
              <i className="bi bi-github"></i>
              <span>View Repository</span>
            </a>
          ) : (
            <span className="text-dim" style={{ fontSize: '0.85rem' }}>
              <i className="bi bi-lock me-1"></i>
              Enterprise / Proprietary Repository
            </span>
          )}

          {project.live !== '#' ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-tech"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              <span>Live Deployment</span>
            </a>
          ) : (
            <span className="text-dim ms-2" style={{ fontSize: '0.85rem' }}>
              (Internal Production Service)
            </span>
          )}

          <button type="button" className="btn-secondary-tech ms-auto" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
