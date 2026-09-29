import React from 'react';
import { educationData, personalData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section-pad-sm section-hairline-divider">
      <div className="portfolio-container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="architecture-card p-4">
              <div className="editorial-label mb-2">
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                {educationData.degree}
              </h3>
              <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                <span className="text-accent" style={{ fontWeight: 600 }}>
                  {educationData.institution}
                </span>
                <span className="text-dim">·</span>
                <span className="text-muted font-mono-tabular" style={{ fontSize: '0.85rem' }}>
                  {educationData.period}
                </span>
              </div>
              <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                {educationData.notes}
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="architecture-card p-4">
              <div className="editorial-label mb-2">
                <span>CURRENT EMPLOYMENT STATUS</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="pulse-dot" aria-hidden="true"></span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--success)' }}>
                  {personalData.status}
                </h3>
              </div>
              <p className="text-muted mb-3" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                Completed recent engagement at Amigoways Technologies in June 2026. Ready to onboard immediately with zero notice period delay.
              </p>
              <div className="d-flex gap-2">
                <a href="#contact" className="btn-primary-tech" style={{ padding: '7px 14px', fontSize: '0.82rem' }}>
                  <span>Initiate Conversation</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
