import './App.css'
import CertificateThumb from './components/CertificateThumb'
import ContactListRow from './components/ContactListRow'
import DetailModal from './components/DetailModal'
import DeveloperIdCard from './components/DeveloperIdCard'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import { emailIcon, externalLinkIcon, phoneIcon } from './components/icons'
import { aboutData, aboutIntro } from './data/aboutData'
import { profileData } from './data/profileData'
import { otherProjects } from './data/otherProjects'
import { participationCertificatesData } from './data/participationCertificatesData'
import { recentProjectsData } from './data/recentProjectsData'
import { techIcons } from './data/techIcons'
import { workExperienceData } from './data/workExperienceData'

const deployedProjects = recentProjectsData.filter((project) => project.deployed)

function ProjectList({ projects }) {
  return (
    <ul className="list bg-base-200 rounded-box gap-3">
      {projects.map((project) => (
        <li key={project.id} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
          <div className="size-10 rounded-box bg-white/50 flex items-center justify-center shrink-0 text-xs font-bold">
            {project.year}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase font-semibold opacity-60">{project.beneficiary}</div>
            <div className="text-xs md:text-sm font-bold mt-0.5">{project.title}</div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.summary}</p>
          </div>
          <button
            type="button"
            className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top"
            data-tip="See more"
            aria-label={`View ${project.title} details`}
            onClick={() => document.getElementById(project.id).showModal()}
          >
            {externalLinkIcon}
          </button>
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <main data-theme="light" className="slanted-lines">
      <Navbar />
      <div className="mt-10 md:mt-24 max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          <div className="md:col-span-2 md:sticky md:top-24 h-fit flex justify-center md:block">
            <DeveloperIdCard />
          </div>

          <div className="md:col-span-3">
            <div className="space-y-20 pb-12 pt-4">
              <section id="about-me" className="scroll-mt-24 ">
                <SectionHeading lineOne="Web" lineTwo="Developer" />
                <hr className="mt-3 mb-3"></hr>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{aboutIntro}</p>
                <ul className="list bg-base-200 rounded-box gap-3">
                  {aboutData.map((item) => (
                    <li key={item.label} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase font-semibold opacity-60">{item.label}</div>
                        <div className="text-xs md:text-sm font-bold mt-0.5">{item.title}</div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                  <ContactListRow icon={emailIcon} label="Email" value={profileData.email} />
                  <ContactListRow icon={phoneIcon} label="Phone" value={profileData.phone} />
                </ul>
              </section>

              <section id="work-experience" className="scroll-mt-24">
                <SectionHeading lineOne="Work" lineTwo="Experience" />
                <hr className="mt-3 mb-3"></hr>
                <ul className="list bg-base-200 rounded-box gap-3">
                  {workExperienceData.map((work) => (
                    <li key={work.id} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase font-semibold opacity-60">{work.organization}</div>
                        <div className="text-xs md:text-sm font-bold mt-0.5">{work.role}</div>
                        <div className="text-[10px] opacity-60 mt-0.5">
                          {work.period} · {work.location}
                        </div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{work.summary}</p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top"
                        data-tip="See more"
                        aria-label={`View ${work.role} details`}
                        onClick={() => document.getElementById(work.id).showModal()}
                      >
                        {externalLinkIcon}
                      </button>
                    </li>
                  ))}
                </ul>
                {workExperienceData.map((work) => (
                  <DetailModal key={`${work.id}-modal`} id={work.id}>
                    <h3 className="font-bold text-lg">{work.role}</h3>
                    <p className="text-sm opacity-70 mt-1">{work.organization}</p>
                    <p className="text-sm opacity-70">{work.period}</p>
                    <p className="text-sm opacity-70">{work.location}</p>
                    <p className="py-4 text-sm leading-relaxed text-gray-600">{work.description}</p>
                    <h4 className="font-semibold text-sm">Key contributions:</h4>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600">
                      {work.contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm">
                      <span className="font-semibold">Technologies:</span> {work.technologies}
                    </p>
                  </DetailModal>
                ))}
              </section>

              <section id="tech-stack" className="scroll-mt-24">
                <SectionHeading lineOne="Tech Stack" lineTwo="& Tools" />
                <hr className="mt-3 mb-3"></hr>
                <ul className="list bg-base-200 rounded-box grid grid-cols-1 md:grid-cols-2 gap-3">
                  {techIcons.map((icon) => (
                    <li key={icon.name} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors">
                      <div className="size-10 rounded-box bg-white/50 p-1 flex items-center justify-center shrink-0 [&_svg]:w-full [&_svg]:h-full">
                        {icon.svg}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold">{icon.name}</div>
                        <div className="text-[10px] uppercase font-semibold opacity-60">{icon.category}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="recent-projects" className="scroll-mt-24">
                <SectionHeading lineOne="Recent" lineTwo="Projects" />
                <hr className="mt-3 mb-3"></hr>
                <div>
                  <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Deployed:</p>
                  <ProjectList projects={deployedProjects} />
                </div>
                <div className="mt-4">
                  <p className="text-[10px] uppercase font-semibold opacity-60 mb-2">Others:</p>
                  <ul className="list bg-base-200 rounded-box gap-2">
                    {otherProjects.map((project) => (
                      <li key={project.id} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
                        <div className="min-w-0">
                          <div className="text-xs md:text-sm font-bold">{project.title}</div>
                          <p className="mt-1 text-sm text-gray-600 leading-relaxed">{project.summary}</p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-square btn-ghost shrink-0 tooltip tooltip-top"
                          data-tip="See more"
                          aria-label={`View ${project.title} details`}
                          onClick={() => document.getElementById(project.id).showModal()}
                        >
                          {externalLinkIcon}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {recentProjectsData.map((project) => (
                  <DetailModal key={`${project.id}-modal`} id={project.id}>
                    <p className="text-[10px] uppercase font-semibold opacity-60">{project.beneficiary}</p>
                    <h3 className="font-bold text-lg mt-1">{project.title}</h3>
                    <p className="text-sm opacity-70 mt-1">{project.year}</p>
                    <p className="py-4 text-sm leading-relaxed text-gray-600">{project.description}</p>
                  </DetailModal>
                ))}
                {otherProjects.map((project) => (
                  <DetailModal key={`${project.id}-modal`} id={project.id}>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="py-4 text-sm leading-relaxed text-gray-600">{project.description}</p>
                  </DetailModal>
                ))}
              </section>

              <section id="participation-certificates" className="scroll-mt-24">
                <SectionHeading lineOne="Participation" lineTwo="Certificates" />
                <hr className="mt-3 mb-3"></hr>
                <ul className="list bg-base-200 rounded-box gap-3">
                  {participationCertificatesData.map((certificate) => (
                    <li key={certificate.id} className="list-row hover:bg-base-300 hover:shadow-xl transition-colors items-start">
                      <CertificateThumb title={certificate.title} image={certificate.image} />
                      <div className="min-w-0">
                        <div className="text-xs md:text-sm font-bold leading-snug">{certificate.title}</div>
                        <div className="text-[10px] uppercase font-semibold opacity-60 mt-1">{certificate.date}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
