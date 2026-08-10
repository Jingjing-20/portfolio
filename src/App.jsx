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
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'

function App() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const starColor = isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(115, 115, 115, 0.35)'

  return (
    <main className="custom-background relative min-h-screen transition-colors duration-300">
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

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
