import { useState } from 'react'
import { FolderOpen } from 'lucide-react'
import ProjectCard from './ProjectCard.jsx'
import { PROJECTS, CATEGORIES } from '../data/projects.js'

export default function ProjectGallery({ onOpen }) {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === cat)

  return (
    <section id="projects" className="card" aria-labelledby="projects-title">
      <header className="card-head between">
        <div className="row">
          <FolderOpen size={22} />
          <div>
            <h2 id="projects-title">Selected Projects</h2>
            <p>Systems and tools I've built or improved to support operations and business needs.</p>
          </div>
        </div>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((c) => (
            <button key={c} className={cat === c ? 'on' : ''} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </header>
      <div className="project-grid">
        {list.map((p) => <ProjectCard key={p.id} project={p} onOpen={onOpen} />)}
      </div>
    </section>
  )
}