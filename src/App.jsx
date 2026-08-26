import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Navbar from './components/Navbar'
import ScrollReveal from './components/ScrollReveal'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { CometCursor } from '@/components/ui/comet-cursor'

const VALID_PAGES = ['about', 'stack', 'experience', 'projects', 'certificates'];

function getInitialPage() {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (VALID_PAGES.includes(hash)) {
      return hash;
    }
  }
  return 'about';
}

function App() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activePage, setActivePage] = useState(getInitialPage);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = mounted && resolvedTheme === 'dark';
  const starColor = isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(115, 115, 115, 0.35)';

  return (
    <>
      <Analytics />
      <main className="custom-background relative min-h-screen transition-colors duration-300">

        {/* Comet Cursor Trail */}
        <CometCursor />

        {/* Background stars */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <StarsBackground starColor={starColor} pointerEvents={false} />
        </div>

        {/* Main content layer with bottom-aligned footer */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          <div>
            {/* 1. Navbar with active page highlight */}
            <Navbar activePage={activePage} onSelectPage={handlePageChange} />

            <div className="pb-8 pt-20">
              <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
                {/* Display active page only */}
                <div>
                  {activePage === 'about' && (
                    <ScrollReveal animation="fadeInUp" duration="0.4s" key="about">
                      <About />
                    </ScrollReveal>
                  )}

                  {activePage === 'stack' && (
                    <ScrollReveal animation="fadeInUp" duration="0.4s" key="stack">
                      <TechStack />
                    </ScrollReveal>
                  )}

                  {activePage === 'experience' && (
                    <ScrollReveal animation="fadeInUp" duration="0.4s" key="experience">
                      <Experience />
                    </ScrollReveal>
                  )}

                  {activePage === 'projects' && (
                    <ScrollReveal animation="fadeInUp" duration="0.4s" key="projects">
                      <Projects />
                    </ScrollReveal>
                  )}

                  {activePage === 'certificates' && (
                    <ScrollReveal animation="fadeInUp" duration="0.4s" key="certificates">
                      <Certificates />
                    </ScrollReveal>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer displayed on bottom end of the page */}
          <div className="pb-8">
            <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
              <div className="border-t pt-6">
                <ScrollReveal animation="fadeInUp" duration="0.4s" key={`footer-${activePage}`}>
                  <Footer />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App
