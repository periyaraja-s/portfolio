import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Systems' },
    { id: 'enterprise', label: 'Enterprise & ERP' },
    { id: 'realtime', label: 'Real-Time & WebSockets' },
    { id: 'fintech', label: 'Fintech & Automation' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>04 · FEATURED PROJECTS & SYSTEMS</span>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
          <div>
            <h2 className="editorial-title mb-2">
              Engineered for <span>scale and reliability.</span>
            </h2>
            <p className="editorial-lead mb-0">
              Selected production applications, architectural refactors, and full-stack systems spanning ERP, real-time messaging, and transaction processing.
            </p>
          </div>
        </div>

        {/* Interactive Filter Control */}
        <div className="filter-bar" role="tablist" aria-label="Project Categories">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt.id}
              className={`filter-btn ${activeFilter === opt.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="col-lg-6">
              <article className="project-card-modern">
                <div className="project-card-header">
                  <div>
                    <div className="project-org">{project.organization}</div>
                    <div className="text-dim font-mono-tabular" style={{ fontSize: '0.78rem' }}>
                      {project.period}
                    </div>
                  </div>
                  <span className="project-badge-tag">{project.badge}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>

                <p className="project-card-desc">{project.description}</p>

                {/* Bullets */}
                <ul className="project-bullet-list">
                  {project.highlights.slice(0, 2).map((item, bIdx) => (
                    <li key={bIdx} className="project-bullet-item">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Zero-Pill Tech Stack Metadata */}
                <div className="tech-meta-row">
                  {project.stack.map((tech, sIdx) => (
                    <React.Fragment key={tech}>
                      <span className="tech-tag-item">{tech}</span>
                      {sIdx < project.stack.length - 1 && <span className="tech-separator">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="project-actions-row">
                  <div className="d-flex align-items-center gap-3">
                    {project.github !== '#' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-action"
                        title="View GitHub Repository"
                      >
                        <i className="bi bi-github"></i>
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-dim" style={{ fontSize: '0.82rem' }}>
                        <i className="bi bi-lock me-1"></i>
                        Internal Project
                      </span>
                    )}

                      { project.live == 'private' ? (
                        <span></span>
                      ) : project.live !== '#' ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link-action"
                          title="View Live Demo"
                        >
                          <i className="bi bi-box-arrow-up-right"></i>
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="text-dim" style={{ fontSize: '0.82rem' }}>
                          Live Demo Coming
                        </span>
                      )}
                  </div>

                  <button
                    type="button"
                    className="btn-inspect"
                    onClick={() => onSelectProject(project)}
                  >
                    <span>Details</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
