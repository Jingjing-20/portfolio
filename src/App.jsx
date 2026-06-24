import './App.css'
import Navbar from './components/Navbar'
import DeveloperCard from './components/DeveloperCard'
import ScrollReveal from './components/ScrollReveal'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main data-theme="light" className="custom-background min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      <div className="pt-16 md:pt-32 pb-8 max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16">

          {/* 2. Left side developer card */}
          <div className="animated slideInLeft md:col-span-2 md:sticky md:top-24 h-fit flex justify-center">
            <DeveloperCard />
          </div>

          {/* Right side sections (3 to 8) */}
          <div className="md:col-span-3">
            <div className="space-y-12 pb-12 pt-4">

              {/* 3. About */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <About />
              </ScrollReveal>

              {/* 4. Experience */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Experience />
              </ScrollReveal>

              {/* 5. Projects */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Projects />
              </ScrollReveal>

              {/* 6. Tech Stack */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <TechStack />
              </ScrollReveal>

              {/* 7. Certificates */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Certificates />
              </ScrollReveal>

              {/* 8. Contact */}
              <ScrollReveal animation="fadeInUp" duration="0.8s">
                <Contact />
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* 9. Footer */}
        <Footer />
      </div>
    </main>
  )
}

export default App
