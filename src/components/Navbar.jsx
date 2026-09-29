import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ dark, setDark, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'architecture', 'skills', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Architecture', href: '#architecture', id: 'architecture' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="portfolio-header">
      <div className="portfolio-container d-flex align-items-center justify-content-between w-100">
        {/* Zone 1: Brand Wordmark */}
        <a href="#home" className="brand-wordmark" onClick={() => setMobileMenuOpen(false)}>
          <span>PERIYARAJA S</span>
          <span className="brand-dot" aria-hidden="true"></span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn-secondary-tech d-none d-sm-inline-flex"
            onClick={onOpenResume}
            title="View Periyaraja's Full Resume"
          >
            <i className="bi bi-file-earmark-person"></i>
            <span>Resume</span>
          </button>

          <button
            type="button"
            className="btn-icon-square"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
            title={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            <i className={`bi ${dark ? 'bi-sun' : 'bi-moon-stars'}`}></i>
          </button>

          <button
            type="button"
            className="btn-icon-square mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-top d-flex gap-2">
            <button
              type="button"
              className="btn-secondary-tech w-100 justify-content-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <i className="bi bi-file-earmark-person"></i>
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              className="btn-primary-tech w-100 justify-content-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
