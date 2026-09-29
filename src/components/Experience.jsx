import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>02 · WORK HISTORY & TRACK RECORD</span>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <div>
            <h2 className="editorial-title mb-2">
              Production <span>engineering experience.</span>
            </h2>
            <p className="editorial-lead mb-0">
              3.5+ years of delivering enterprise ERP modules, WebSocket messaging, high-concurrency background queues, and payment integrations.
            </p>
          </div>
          <div className="text-md-end text-muted font-mono-tabular" style={{ fontSize: '0.85rem' }}>
            <span>Verified Track Record · July 2022 – June 2026</span>
          </div>
        </div>

        <div className="timeline-container">
          {experienceData.map((exp) => (
            <article key={exp.id} className="timeline-card">
              <div className="timeline-top-row">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="text-dim">·</span>
                    <span className="text-muted" style={{ fontSize: '0.88rem' }}>
                      <i className="bi bi-geo-alt me-1"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="timeline-period-badge font-mono-tabular">
                    <i className="bi bi-calendar3 me-1"></i>
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="timeline-bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="timeline-tech-row">
                <span className="text-dim me-2" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Technologies Deployed:
                </span>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  {exp.tech.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="tech-tag-item">{t}</span>
                      {idx < exp.tech.length - 1 && <span className="tech-separator">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
