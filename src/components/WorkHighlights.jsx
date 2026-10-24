import { BarChart3 } from 'lucide-react'
import KPICard from './KPICard.jsx'
import { KPIS } from '../data/profile.js'

export default function WorkHighlights() {
  return (
    <section className="card" aria-labelledby="highlights-title">
      <header className="card-head">
        <BarChart3 size={24} />
        <div>
          <h2 id="highlights-title">Work Highlights</h2>
          <p>Real-world projects and contributions that showcase my analytical and problem-solving skills.</p>
        </div>
      </header>
      <div className="kpi-grid">
        {KPIS.map((k) => <KPICard key={k.title} kpi={k} />)}
      </div>
    </section>
  )
}