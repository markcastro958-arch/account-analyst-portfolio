import { Wrench } from 'lucide-react'
import { TOOLS } from '../data/skills.js'

export default function ToolsGrid() {
  return (
    <section className="card" aria-labelledby="tools-title">
      <header className="card-head">
        <Wrench size={22} />
        <h2 id="tools-title">Tools &amp; Platforms</h2>
      </header>
      <ul className="tools">
        {TOOLS.map(({ name, icon: Icon, color, use }) => (
          <li key={name} className={use}>
            <span className="tool-icon" style={{ color }}><Icon size={34} strokeWidth={1.8} /></span>
            <span>{name}</span>
            {use === 'learning' && <em>Learning</em>}
          </li>
        ))}
      </ul>
    </section>
  )
}