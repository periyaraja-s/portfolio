import React from 'react';
import { personalData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const principles = [
    {
      title: "Asynchronous Decoupling",
      desc: "Offloading intensive tasks (reporting, PDF generation, webhooks) from the HTTP request cycle using queues and workers to maintain fast response times.",
      icon: "bi-lightning-charge",
    },
    {
      title: "Clean Schema & Query Tuning",
      desc: "Designing normalized database architectures, indexing high-traffic columns, and avoiding N+1 query bottlenecks in production MySQL and PostgreSQL.",
      icon: "bi-database-check",
    },
    {
      title: "Modular Maintainability",
      desc: "Refactoring duplicated business logic into reusable Service Containers, Traits, and repository patterns for low-regression deployments.",
      icon: "bi-boxes",
    },
    {
      title: "Transactional Security",
      desc: "Implementing secure token-based authentication (Sanctum, Passport, JWT), role-based permissions, and signed webhook callback verification.",
      icon: "bi-shield-check",
    },
  ];

  return (
    <section id="about" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>01 · PRACTICAL ENGINEERING MINDSET</span>
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <h2 className="editorial-title">
              Backend engineering focused on <span>reliability, throughput,</span> and real business utility.
            </h2>
            <p className="editorial-lead mb-3">
              I’m a Backend Developer with 3.5+ years of software development experience specializing in PHP, Laravel, CodeIgniter, and Node.js/Express.js.
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: 1.75 }}>
              My primary focus is server-side architecture: building performant REST APIs, architecting complex business workflows, designing scalable database schemas, managing background jobs, and integrating mission-critical services.
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: 1.75 }}>
              I also have hands-on experience working with React.js and modern JavaScript, allowing me to seamlessly connect frontend interfaces with backend services, debug cross-stack issues, and ship end-to-end solutions.
            </p>

            <div className="d-flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary-tech">
                <span>Work Together</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <button type="button" className="btn-secondary-tech" onClick={onOpenResume}>
                <i className="bi bi-file-earmark-person"></i>
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              {principles.map((p) => (
                <div key={p.title} className="col-sm-6">
                  <div className="architecture-card p-3">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <div className="contact-icon-box" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>
                        <i className={`bi ${p.icon}`}></i>
                      </div>
                      <h3 style={{ fontSize: '0.98rem', margin: 0, fontWeight: 700 }}>
                        {p.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 text-muted" style={{ fontSize: '0.85rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Location:</strong> Madurai, Tamil Nadu, India
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Notice Period:</strong> Immediate Joiner
                </div>
                <div>
                  <strong style={{ color: 'var(--text-main)' }}>Education:</strong> B.E (Jun 2014 – May 2018)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
