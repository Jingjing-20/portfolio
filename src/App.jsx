import './App.css'
import Navbar from './components/Navbar'
import ScrollReveal from './components/ScrollReveal'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

function App() {
  return (
    <main data-theme="light" className="custom-background min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      <div className="pt-16 md:pt-32 pb-8 max-w-3xl mx-auto px-4 md:px-6">
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

        </div>

        {/* 9. Footer */}
        <Footer />
      </div>
    </main>
  )
}

export default App
