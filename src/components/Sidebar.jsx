import { X, Moon, Sun } from 'lucide-react'
import { NAV, PROFILE } from '../data/profile.js'

export default function Sidebar({ active, open, onNavigate, onClose, theme, onToggleTheme }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Primary">
      <div className="sidebar-head">
        <div>
          <h1 className="brand-name">{PROFILE.name}</h1>
          <p className="brand-title">{PROFILE.fullTitle}</p>
        </div>
        <button className="icon-btn drawer-close" onClick={onClose} aria-label="Close navigation">
          <X size={18} />
        </button>
      </div>
      <p className="tagline">
        Data-Driven Decisions.<br />Better Operations.
      </p>

      <nav className="side-nav">
        {NAV.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            aria-current={active === id ? 'true' : undefined}
            onClick={(e) => { e.preventDefault(); onNavigate(id) }}
          >
            <Icon size={19} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <button className="theme-btn" onClick={onToggleTheme}>
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
      </button>

      <figure className="side-quote">
        <blockquote>“{PROFILE.quote}”</blockquote>
        <figcaption>— {PROFILE.name}</figcaption>
      </figure>
    </aside>
  )
}