import { Target } from 'lucide-react'
import { RESPONSIBILITIES } from '../data/profile.js'

export default function ResponsibilitiesPanel() {
  return (
    <section id="experience" className="card" aria-labelledby="areas-title">
      <header className="card-head">
        <Target size={22} />
        <h2 id="areas-title">Key Accounts / Areas Handled</h2>
      </header>
      <ul className="areas">
        {RESPONSIBILITIES.map(({ icon: Icon, title, desc }) => (
          <li key={title}>
            <span className="area-icon"><Icon size={22} /></span>
            <div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}