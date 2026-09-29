import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formType, setFormType] = useState('full-time');
  const [formMessage, setFormMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(label);
      onShowToast(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedField(null), 2500);
    });
  };

  const handleSendDraft = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${formType.toUpperCase()}] Backend Developer Inquiry from ${formName || 'Recruiter'} ${formCompany ? `(${formCompany})` : ''}`
    );
    const body = encodeURIComponent(
      `Hello Periyaraja,\n\n${formMessage || 'I reviewed your backend developer portfolio and would like to discuss an opportunity.'}\n\nBest regards,\n${formName || 'Sender'}\n${formCompany ? `Company: ${formCompany}` : ''}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    onShowToast('Opened your email client with message draft.');
  };

  return (
    <section id="contact" className="section-pad section-hairline-divider">
      <div className="portfolio-container">
        <div className="editorial-label">
          <span>06 · GET IN TOUCH</span>
        </div>

        <div className="contact-card-box">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="editorial-title mb-3">
                Let's discuss your <span>backend requirements.</span>
              </h2>
              <p className="editorial-lead mb-4">
                Open to full-time backend developer positions, enterprise software engineering roles, and backend consulting projects.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                {/* Email Item */}
                <div className="contact-quick-item justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <div className="contact-item-title">Primary Email</div>
                      <a href={`mailto:${personalData.email}`} className="contact-item-val">
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-icon-square"
                    style={{ width: '34px', height: '34px', fontSize: '0.85rem' }}
                    onClick={() => handleCopy(personalData.email, 'Email')}
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    <i className={`bi ${copiedField === 'Email' ? 'bi-check2 text-success' : 'bi-clipboard'}`}></i>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-quick-item justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <div className="contact-item-title">Direct Phone</div>
                      <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="contact-item-val font-mono-tabular">
                        {personalData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-icon-square"
                    style={{ width: '34px', height: '34px', fontSize: '0.85rem' }}
                    onClick={() => handleCopy(personalData.phone, 'Phone')}
                    title="Copy Phone number"
                    aria-label="Copy Phone number"
                  >
                    <i className={`bi ${copiedField === 'Phone' ? 'bi-check2 text-success' : 'bi-clipboard'}`}></i>
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-quick-item">
                  <div className="contact-icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <div className="contact-item-title">Base Location</div>
                    <div className="contact-item-val">
                      {personalData.location} (Immediate Joiner)
                    </div>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="contact-quick-item justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-box">
                      <i className="bi bi-github"></i>
                    </div>
                    <div>
                      <div className="contact-item-title">GitHub Profile</div>
                      <a href={personalData.github} target="_blank" rel="noreferrer" className="contact-item-val">
                        github.com/periyaraja-s
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-icon-square"
                    style={{ width: '34px', height: '34px', fontSize: '0.85rem' }}
                    title="Visit GitHub"
                    aria-label="Open GitHub in new tab"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form / Message Composer */}
            <div className="col-lg-7">
              <div className="p-4 rounded" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>
                  Send a Direct Message
                </h3>
                <p className="text-muted mb-4" style={{ fontSize: '0.88rem' }}>
                  Draft an inquiry directly to Periyaraja. Opens your default mail client with formatted subject and body.
                </p>

                <form onSubmit={handleSendDraft}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="text-dim mb-1" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. John Doe"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        style={{
                          background: 'var(--surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--text-main)',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="text-dim mb-1" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Acme Tech"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        style={{
                          background: 'var(--surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--text-main)',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="text-dim mb-1" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                      Inquiry Nature
                    </label>
                    <div className="d-flex gap-2 flex-wrap">
                      {[
                        { id: 'full-time', label: 'Full-Time Role' },
                        { id: 'contract', label: 'Contract / Consulting' },
                        { id: 'architecture', label: 'Architecture Review' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          className={`btn-secondary-tech ${formType === t.id ? 'btn-primary-tech' : ''}`}
                          style={{ padding: '6px 12px', fontSize: '0.82rem' }}
                          onClick={() => setFormType(t.id)}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-dim mb-1" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                      Project or Role Details
                    </label>
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Brief overview of the role, technology stack, or backend problem to solve..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      style={{
                        background: 'var(--surface)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                      }}
                    ></textarea>
                  </div>

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <button type="submit" className="btn-primary-tech">
                      <i className="bi bi-send"></i>
                      <span>Send via Email</span>
                    </button>

                    <button
                      type="button"
                      className="btn-secondary-tech"
                      onClick={() => {
                        const text = `Name: ${formName || 'N/A'}\nCompany: ${formCompany || 'N/A'}\nType: ${formType}\nMessage: ${formMessage || 'Inquiry regarding backend developer opportunity'}`;
                        handleCopy(text, 'Message Draft');
                      }}
                    >
                      <i className="bi bi-copy"></i>
                      <span>Copy Draft</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
