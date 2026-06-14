import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DeveloperCard from './components/DeveloperCard'
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

      <div className="mt-10 md:mt-24 max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16">
          
          {/* 2. Left side developer card */}
          <div className="md:col-span-2 md:sticky md:top-24 h-fit flex justify-center md:block">
            <DeveloperCard />
          </div>

          {/* Right side sections (3 to 8) */}
          <div className="md:col-span-3">
            <div className="space-y-12 pb-12 pt-4">
              
              {/* 3. About */}
              <About />

              {/* 4. Experience */}
              <Experience />

              {/* 5. Projects */}
              <Projects />

              {/* 6. Tech Stack */}
              <TechStack />

              {/* 7. Certificates */}
              <Certificates />

              {/* 8. Contact */}
              <Contact />
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
