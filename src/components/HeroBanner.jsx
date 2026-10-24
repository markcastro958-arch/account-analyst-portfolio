import { BarChart3, Settings, Users, Download } from 'lucide-react'
import { PROFILE } from '../data/profile.js'

const SPECIALTIES = [
  { icon: BarChart3, label: 'Data Analysis' },
  { icon: Settings, label: 'Process Improvement' },
  { icon: Users, label: 'Cross-functional Support' }
]

function LaptopArt() {
  return (
    <svg className="hero-art" viewBox="0 0 360 240" role="img" aria-label="Laptop showing an analytics dashboard">
      <g transform="rotate(-6 180 120)">
        <rect x="20" y="20" width="320" height="190" rx="10" fill="#0b1220" stroke="#334155" strokeWidth="4" />
        <rect x="32" y="32" width="296" height="166" rx="4" fill="#e8eef7" />
        <rect x="40" y="40" width="60" height="150" rx="3" fill="#fff" />
        {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x="46" y={50 + i * 22} width="48" height="8" rx="2" fill="#cbd5e1" />)}
        {[40, 62, 50, 82, 100, 124, 110, 140].map((h, i) => (
          <rect key={i} x={112 + i * 16} y={160 - h * 0.7} width="10" height={h * 0.7} rx="2" fill="#2563eb" opacity={0.55 + i * 0.05} />
        ))}
        <circle cx="270" cy="100" r="30" fill="none" stroke="#14b8a6" strokeWidth="14" strokeDasharray="110 80" />
        <circle cx="270" cy="100" r="30" fill="none" stroke="#2563eb" strokeWidth="14" strokeDasharray="50 140" strokeDashoffset="-110" />
        <circle cx="270" cy="100" r="30" fill="none" stroke="#f59e0b" strokeWidth="14" strokeDasharray="25 165" strokeDashoffset="-160" />
        <rect x="112" y="46" width="150" height="8" rx="2" fill="#94a3b8" />
      </g>
    </svg>
  )
}

export default function HeroBanner({ onNavigate, resumeOk, notify }) {
  return (
    <section id="home" className="hero card-reset" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">PORTFOLIO</span>
        <h2 id="hero-title">Professional<br />Account Analyst</h2>
        <p>I turn data into insights, support operational efficiency, and help businesses make informed decisions.</p>

        <ul className="specialties">
          {SPECIALTIES.map(({ icon: Icon, label }) => (
            <li key={label}><Icon size={18} />{label}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <button className="btn primary" onClick={() => onNavigate('projects')}>Explore My Projects</button>
          {resumeOk ? (
            <a className="btn ghost" href={PROFILE.resumeUrl} download={PROFILE.resumeName}>
              <Download size={16} /> Download Resume
            </a>
          ) : (
            <button
              className="btn ghost"
              aria-disabled="true"
              title="Resume file not available yet"
              onClick={() => notify('Resume not available yet. Add public/resume.pdf to enable the download.', 'info')}
            >
              <Download size={16} /> Download Resume
            </button>
          )}
        </div>
      </div>
      <LaptopArt />
    </section>
  )
}