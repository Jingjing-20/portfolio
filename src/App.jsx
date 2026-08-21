import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import './App.css'
import Navbar from './components/Navbar'
import ScrollReveal from './components/ScrollReveal'
import CardDev from './components/CardDev'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { CometCursor } from '@/components/ui/comet-cursor'
import { ScrollProgressProvider, ScrollProgress } from '@/components/animate-ui/primitives/animate/scroll-progress'

function App() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const starColor = isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(115, 115, 115, 0.35)'

  return (
    <ScrollProgressProvider global>
      <main className="custom-background relative min-h-screen transition-colors duration-300">
        {/* Top Scroll Progress Indicator */}
        <ScrollProgress
          mode="scaleX"
          className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-white z-[100] origin-left shadow-xl"
        />

        {/* Comet Cursor Trail */}
        <CometCursor />

        {/* Background stars */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <StarsBackground starColor={starColor} pointerEvents={false} />
        </div>

        {/* Main content layer */}
        <div className="relative z-10" >
          {/* 1. Navbar */}
          <Navbar />

          <div className="pt-20 pb-8 md:pt-28">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              {/* Grid with 12 columns for 40/60 split */}
              <div className="md:grid md:grid-cols-12 md:gap-16">
                {/* Left column - 40% (4 out of 12 columns) */}
                <aside className="md:col-span-6 pb-6 md:sticky md:top-28 md:self-start">
                  <div className="w-full">
                    <ScrollReveal animation="fadeInLeft" duration="0.5s"><CardDev /></ScrollReveal>
                  </div>
                </aside>

                {/* Right column - 60% (8 out of 12 columns) */}
                <div className="md:col-span-6 space-y-6 pb-6">
                  <hr className='block md:hidden' />
                  {/* 1. Stack */}
                  <ScrollReveal animation="fadeInRight" duration="0.5s">
                    <TechStack />
                  </ScrollReveal>
                  <hr />
                  {/* 2. Experience */}
                  <ScrollReveal animation="fadeInRight" duration="0.5s">
                    <Experience />
                  </ScrollReveal>
                  <hr />
                  {/* 3. Projects */}
                  <ScrollReveal animation="fadeInRight" duration="0.5s">
                    <Projects />
                  </ScrollReveal>
                  <hr />
                  {/* 4. Certificates */}
                  <ScrollReveal animation="fadeInRight" duration="0.5s">
                    <Certificates />
                  </ScrollReveal>
                </div>
              </div>

              {/* Footer intentionally sits below both resume columns. */}
              <div className="border-t pt-6">
                <ScrollReveal animation="fadeInUp" duration="0.5s">
                  <Footer />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ScrollProgressProvider>
  )
}

export default App
