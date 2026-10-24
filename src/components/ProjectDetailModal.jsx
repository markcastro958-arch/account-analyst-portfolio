import { useEffect, useRef } from 'react'
import { X, ExternalLink, GitBranch } from 'lucide-react'
import Thumb from './Thumb.jsx'
import { STATUS } from '../data/projects.js'

export default function ProjectDetailModal({ project: p, onClose }) {
  const dialog = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    const prev = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialog.current) {
        const f = dialog.current.querySelectorAll('a[href],button:not([disabled])')
        if (!f.length) return
        const first = f[0], last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      prev?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialog}>
        <header className="modal-head">
          <div>
            <span className={`status ${p.status} static`}>{STATUS[p.status]}</span>
            <h2 id="modal-title">{p.name}</h2>
          </div>
          <button ref={closeBtn} className="icon-btn" onClick={onClose} aria-label="Close details"><X size={18} /></button>
        </header>

        <div className="modal-body">
          <div className="modal-preview">
            <div className="thumb"><Thumb kind={p.thumb} /></div>
            <p className="note">Interface preview (illustrative). Replace with real screenshots in public/images/.</p>
          </div>

          <section><h3>Overview</h3><p>{p.overview}</p></section>
          <section><h3>Problem Addressed</h3><p>{p.problem}</p></section>
          <section><h3>Solution</h3><p>{p.solution}</p></section>
          <section>
            <h3>Features</h3>
            <ul className="bullets">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </section>
          <section>
            <h3>Technologies</h3>
            <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
          <section>
            <h3>Results</h3>
            <p>{p.results || 'No verified results to report yet.'}</p>
          </section>

          <div className="modal-links">
            {p.github ? (
              <a className="btn small" href={p.github} target="_blank" rel="noopener noreferrer"><GitBranch size={14} /> GitHub</a>
            ) : <span className="muted">Public repository: not available</span>}
            {p.demo ? (
              <a className="btn small primary" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Live demo</a>
            ) : <span className="muted">Live demo: not available</span>}
          </div>
        </div>
      </div>
    </div>
  )
}