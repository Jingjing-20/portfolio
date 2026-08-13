import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
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
          className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-white z-[100] origin-left shadow-sm"
        />

        {/* Comet Cursor Trail */}
        <CometCursor />

        {/* Background stars */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <StarsBackground starColor={starColor} pointerEvents={false} />
        </div>

        {/* Main content layer */}
        <div className="relative z-10">
          {/* 1. Navbar */}
          <Navbar />

          <div className="pt-16 md:pt-32 pb-8 max-w-3xl mx-auto px-4 md:px-6">
            <div className="space-y-6 pb-12 pt-4">

              {/* 3. About */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <About />
              </ScrollReveal>
              <hr />
              {/* 4. Experience */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Experience />
              </ScrollReveal>
              <hr />
              {/* 5. Projects */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Projects />
              </ScrollReveal>
              <hr />
              {/* 6. Tech Stack */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <TechStack />
              </ScrollReveal>
              <hr />
              {/* 7. Certificates */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Certificates />
              </ScrollReveal>
              <hr />
              {/* 8. Footer */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Footer />
              </ScrollReveal>

            </div>
          </div>
        </div>
      </main>
    </ScrollProgressProvider>
  )
}

export default App

