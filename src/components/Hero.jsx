import React from 'react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-wrapper">
      <div className="portfolio-container">
        {/* Availability Badge */}
        <div className="availability-indicator">
          <span className="pulse-dot" aria-hidden="true"></span>
          <span>{personalData.status} · Available for Full-Time Backend Roles & Consulting</span>
        </div>

        {/* Eyebrow */}
        <div className="editorial-label d-none">
          <span>00 · BACKEND ARCHITECTURE & SYSTEMS</span>
        </div>

        {/* Primary Headline */}
        <h1 className="hero-headline">
          Building backend systems that turn <span>business requirements</span> into resilient, scalable products.
        </h1>

        {/* Lead Subheading */}
        <p className="hero-subheading">
          {personalData.summary}
        </p>

        {/* Call to Actions */}
        <div className="d-flex flex-wrap align-items-center gap-3">
          <a href="#projects" className="btn-primary-tech">
            <span>View Projects</span>
            <i className="bi bi-arrow-down-right"></i>
          </a>
          <a href="#experience" className="btn-secondary-tech">
            <i className="bi bi-briefcase"></i>
            <span>Work Experience</span>
          </a>
          <button type="button" className="btn-secondary-tech" onClick={onOpenResume}>
            <i className="bi bi-file-earmark-text"></i>
            <span>Resume (PDF)</span>
          </button>
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-tech"
            title="GitHub Profile"
          >
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </a>
        </div>

        {/* Metrics Grid with Tabular Numerals (Claim-to-Proof Adjacency) */}
        <div className="metrics-grid">
          {keyMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-number font-mono-tabular">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-subtext">{metric.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
