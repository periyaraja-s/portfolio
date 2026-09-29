import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <a href="#home" className="brand-wordmark mb-1">
              <span>PERIYARAJA S</span>
              <span className="brand-dot" aria-hidden="true"></span>
            </a>
            <div className="text-muted" style={{ fontSize: '0.84rem' }}>
              Backend Developer · PHP / Laravel · Node.js · Immediate Joiner
            </div>
          </div>

          <div className="d-flex align-items-center gap-4 flex-wrap" style={{ fontSize: '0.85rem' }}>
            <a href="#about" className="text-muted hover-text-main">About</a>
            <a href="#experience" className="text-muted hover-text-main">Experience</a>
            <a href="#projects" className="text-muted hover-text-main">Projects</a>
            <a href="#architecture" className="text-muted hover-text-main">Architecture</a>
            <button
              type="button"
              className="p-0 border-0 bg-transparent text-muted"
              style={{ cursor: 'pointer', fontSize: '0.85rem' }}
              onClick={onOpenResume}
            >
              Resume
            </button>
            <a href={personalData.github} target="_blank" rel="noreferrer" className="text-muted hover-text-main">
              <i className="bi bi-github me-1"></i>GitHub
            </a>
            <a href="#home" className="text-accent fw-semibold">
              Top <i className="bi bi-arrow-up"></i>
            </a>
          </div>
        </div>

        <div className="border-top mt-4 pt-3 d-flex justify-content-between align-items-center flex-wrap gap-2 text-dim" style={{ fontSize: '0.8rem', borderColor: 'var(--border)' }}>
          <span>© 2026 Periyaraja S. Built for performance & reliability.</span>
          <span>Madurai, Tamil Nadu, India · Available for Full-Time Opportunities</span>
        </div>
      </div>
    </footer>
  );
}
