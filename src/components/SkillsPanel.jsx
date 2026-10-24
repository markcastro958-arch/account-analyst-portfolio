import { Settings } from 'lucide-react'
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../data/skills.js'

export default function SkillsPanel() {
  return (
    <section id="skills" className="card" aria-labelledby="skills-title">
      <header className="card-head">
        <Settings size={22} />
        <h2 id="skills-title">Skills</h2>
      </header>

      <h3 className="sub">Technical Skills</h3>
      <ul className="badges">
        {TECHNICAL_SKILLS.map((s) => (
          <li key={s.name} className={s.status === 'learning' ? 'learning' : ''}
              title={s.status === 'learning' ? 'Currently learning' : 'Working proficiency'}>
            {s.name}
          </li>
        ))}
      </ul>
      <p className="note"><span className="dash-swatch" /> Dashed badge = currently learning</p>

      <h3 className="sub">Soft Skills</h3>
      <ul className="badges">
        {SOFT_SKILLS.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}