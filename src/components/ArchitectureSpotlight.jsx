import React from 'react';
import { architectureWins } from '../data/portfolioData';

export default function ArchitectureSpotlight() {
  return (
    <section id="architecture" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>03 · ARCHITECTURAL CASE STUDIES</span>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <div>
            <h2 className="editorial-title mb-2">
              System architecture & <span>optimization wins.</span>
            </h2>
            <p className="editorial-lead mb-0">
              Real-world engineering challenges solved across production environments, from decoupling heavy synchronous cycles to scaling WebSocket sockets.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {architectureWins.map((win, index) => (
            <div key={win.title} className="col-lg-4">
              <article className="architecture-card">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="font-mono-tabular text-dim" style={{ fontSize: '0.82rem', fontWeight: 700 }}>
                    CASE 0{index + 1}
                  </span>
                  <i className="bi bi-diagram-3 text-accent" style={{ fontSize: '1.1rem' }}></i>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
                  {win.title}
                </h3>

                <div className="arch-impact-banner">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  <span>{win.impact}</span>
                </div>

                <div className="arch-problem-box">
                  <div className="arch-problem-label">The Bottleneck:</div>
                  <div className="arch-problem-text">{win.problem}</div>
                </div>

                <div className="arch-problem-box mt-3 mb-4">
                  <div className="arch-problem-label" style={{ color: 'var(--accent)' }}>The Architectural Solution:</div>
                  <div className="arch-problem-text">{win.solution}</div>
                </div>

                <div className="mt-auto pt-3 border-top d-flex flex-wrap align-items-center gap-2" style={{ borderColor: 'var(--border)' }}>
                  {win.tech.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="tech-tag-item">{t}</span>
                      {idx < win.tech.length - 1 && <span className="tech-separator">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
