import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { NavBar } from './components/NavBar'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-2xl mx-auto p-4"
      id="home"
    >
      <div
        className="fixed w-full top-0 left-0 h-44 blur-[100px] -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(255, 0, 0, 0.32) 0%, rgba(255, 25, 65, 0.32) 25%, rgba(128, 0, 128, 0.32) 50%, rgba(64, 0, 191, 0.32) 75%, rgba(0, 5, 237, 0.32) 100%)',
        }}
      />

      <header className="sticky top-2 w-full left-0 z-10">
        <NavBar />
      </header>

      <main className="flex flex-col gap-18 py-12">
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
    </div>
  )
}

export default App
