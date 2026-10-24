import { useEffect, useState } from 'react'
import { ArrowUp, Menu, Moon, Sun, X, CheckCircle2, AlertTriangle, Info } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import WorkHighlights from './components/WorkHighlights.jsx'
import PerformanceChart from './components/PerformanceChart.jsx'
import ResponsibilitiesPanel from './components/ResponsibilitiesPanel.jsx'
import ProjectGallery from './components/ProjectGallery.jsx'
import ProjectDetailModal from './components/ProjectDetailModal.jsx'
import AboutMe from './components/AboutMe.jsx'
import SkillsPanel from './components/SkillsPanel.jsx'
import ToolsGrid from './components/ToolsGrid.jsx'
import ResultBanner from './components/ResultBanner.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import { NAV } from './data/profile.js'
import { useTheme } from './hooks/useTheme.js'
import { useToast } from './hooks/useToast.js'
import { useActiveSection, scrollToId } from './hooks/useActiveSection.js'
import { useResumeAvailable } from './hooks/useResumeAvailable.js'

const toastIcon = { success: CheckCircle2, error: AlertTriangle, info: Info }

export default function App() {
  const { theme, toggle } = useTheme()
  const { toasts, notify, dismiss } = useToast()
  const [drawer, setDrawer] = useState(false)
  const [project, setProject] = useState(null)
  const [showTop, setShowTop] = useState(false)
  const resumeOk = useResumeAvailable()
  const active = useActiveSection(NAV.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setDrawer(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id) => {
    setDrawer(false)
    scrollToId(id)
  }

  return (
    <div className="app">
      <a className="skip-link" href="#home">Skip to content</a>

      <header className="topbar">
        <button className="icon-btn" onClick={() => setDrawer(true)} aria-label="Open navigation" aria-expanded={drawer}>
          <Menu size={20} />
        </button>
        <strong>Mark Gil Castro</strong>
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <div className={`scrim ${drawer ? 'show' : ''}`} onClick={() => setDrawer(false)} aria-hidden="true" />
      <Sidebar active={active} open={drawer} onNavigate={go} onClose={() => setDrawer(false)} theme={theme} onToggleTheme={toggle} />

      <main className="main">
        <div className="dashboard">
          <div className="center">
            <HeroBanner onNavigate={go} resumeOk={resumeOk} notify={notify} />
            <WorkHighlights />
            <div className="split">
              <PerformanceChart theme={theme} />
              <ResponsibilitiesPanel />
            </div>
            <ProjectGallery onOpen={setProject} />
          </div>
          <aside className="right" aria-label="Profile information">
            <AboutMe resumeOk={resumeOk} />
            <SkillsPanel />
            <ToolsGrid />
          </aside>
        </div>
        <ResultBanner onNavigate={go} />
        <ContactSection notify={notify} />
        <Footer />
      </main>

      {project && <ProjectDetailModal project={project} onClose={() => setProject(null)} />}

      <button className={`to-top ${showTop ? 'show' : ''}`} onClick={() => scrollToId('home')} aria-label="Back to top">
        <ArrowUp size={18} />
      </button>

      <div className="toasts" aria-live="polite" role="status">
        {toasts.map((t) => {
          const Icon = toastIcon[t.type] || Info
          return (
            <div key={t.id} className={`toast ${t.type}`}>
              <Icon size={18} />
              <span>{t.message}</span>
              <button onClick={() => dismiss(t.id)} aria-label="Dismiss"><X size={14} /></button>
            </div>
          )
        })}
      </div>
    </div>
  )
}