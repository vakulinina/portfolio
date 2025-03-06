import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
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

      <Header />

      <main className="flex flex-col py-12">
        <h1 className="tracking-tighter text-3xl md:text-5xl lg:text-6xl font-medium text-balance text-[#4b5563] my-20">
          <span className="text-highlight text-4xl sm:text-6xl md:text-7xl block mb-4">
            Valeria Akulinina
          </span>
          crafting seamless digital experiences with{' '}
          <span className="text-highlight">precision and care</span>
        </h1>
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
    </div>
  )
}

export default App
