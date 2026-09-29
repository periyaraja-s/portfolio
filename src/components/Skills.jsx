import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>05 · TECHNICAL CAPABILITIES</span>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5">
          <div>
            <h2 className="editorial-title mb-2">
              Production <span>skills & tooling.</span>
            </h2>
            <p className="editorial-lead mb-0">
              Battle-tested tools and frameworks honed across 3.5+ years of server-side engineering, database normalization, and multi-tenant architectures.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {skillsData.map((cat) => (
            <div key={cat.category} className="col-md-6 col-lg-4">
              <div className="skills-card">
                <div className="skills-card-header">
                  <div className="skills-icon-wrap">
                    <i className={`bi ${cat.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="skills-category-title">{cat.category}</h3>
                  </div>
                </div>

                <p className="skills-category-desc">{cat.description}</p>

                <div className="skills-items-list">
                  {cat.items.map((item) => (
                    <div key={item.name} className="skills-item-row">
                      <span className="skills-item-name">{item.name}</span>
                      <span className="skills-item-level">{item.experience}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
