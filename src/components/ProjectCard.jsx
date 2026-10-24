import Thumb from './Thumb.jsx'
import { STATUS } from '../data/projects.js'

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project">
      <div className="thumb">
        <Thumb kind={project.thumb} />
        <span className={`status ${project.status}`}>{STATUS[project.status]}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="p-tech">{project.tech.slice(0, 2).join(' + ')}</p>
      <p className="p-desc">{project.summary}</p>
      <ul className="chips">
        {project.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <button className="btn small" onClick={() => onOpen(project)} aria-label={`View details: ${project.name}`}>
        View Details
      </button>
    </article>
  )
}