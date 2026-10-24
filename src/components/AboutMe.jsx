import { User, MapPin, Calendar, GraduationCap, Mail, Link2, GitBranch, FileText } from 'lucide-react'
import { PROFILE } from '../data/profile.js'

export default function AboutMe({ resumeOk }) {
  return (
    <section id="about" className="card" aria-labelledby="about-title">
      <header className="card-head">
        <User size={22} />
        <h2 id="about-title">About Me</h2>
      </header>
      <p className="about-text">{PROFILE.about}</p>
      <ul className="info">
        <li><MapPin size={16} />{PROFILE.location}</li>
        <li><Calendar size={16} />{PROFILE.relocation}</li>
        <li><GraduationCap size={16} />{PROFILE.education}</li>
        <li><Mail size={16} /><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
      </ul>
      {(PROFILE.linkedin || PROFILE.github || resumeOk) && (
        <div className="links">
          {PROFILE.linkedin && <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Link2 size={14} /> LinkedIn</a>}
          {PROFILE.github && <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><GitBranch size={14} /> GitHub</a>}
          {resumeOk && <a href={PROFILE.resumeUrl} download={PROFILE.resumeName}><FileText size={14} /> Resume</a>}
        </div>
      )}
    </section>
  )
}