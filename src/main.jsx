import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ArchitectureSpotlight from './components/ArchitectureSpotlight';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDetailModal from './components/ProjectDetailModal';

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [activeProject, setActiveProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast((current) => (current === message ? null : current));
    }, 3200);
  };

  return (
    <>
      <Navbar
        dark={dark}
        setDark={setDark}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main id="main-content">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Experience />
        <ArchitectureSpotlight />
        <Projects onSelectProject={(p) => setActiveProject(p)} />
        <Skills />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      <Footer onOpenResume={() => setResumeOpen(true)} />

      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {resumeOpen && (
        <ResumeModal
          onClose={() => setResumeOpen(false)}
          onShowToast={showToast}
        />
      )}

      {toast && (
        <div className="toast-floating" role="status" aria-live="polite">
          <i className="bi bi-check-circle-fill text-success"></i>
          <span>{toast}</span>
        </div>
      )}
    </>
  );
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
