import { useState } from 'react'
import { Mail, Link2, GitBranch, Send } from 'lucide-react'
import { PROFILE } from '../data/profile.js'

const EMPTY = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Please enter a subject.'
  if (!v.message.trim()) e.message = 'Please enter a message.'
  else if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function ContactSection({ notify }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      notify('Please fix the highlighted fields.', 'error')
      const first = Object.keys(errs)[0]
      document.getElementById(`c-${first}`)?.focus()
      return
    }
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    const url = `mailto:${PROFILE.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    notify('Opening your email app — press Send there to deliver your message.', 'info', 6000)
    window.location.href = url
  }

  const field = (id, label, props = {}) => (
    <div className={`field ${errors[id] ? 'invalid' : ''}`}>
      <label htmlFor={`c-${id}`}>{label}</label>
      {id === 'message' ? (
        <textarea id="c-message" rows="5" value={values.message} onChange={set('message')}
          aria-invalid={!!errors[id]} aria-describedby={errors[id] ? 'e-message' : undefined} />
      ) : (
        <input id={`c-${id}`} value={values[id]} onChange={set(id)}
          aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `e-${id}` : undefined} {...props} />
      )}
      {errors[id] && <span className="err" id={`e-${id}`}>{errors[id]}</span>}
    </div>
  )

  return (
    <section id="contact" className="card contact" aria-labelledby="contact-title">
      <div className="contact-info">
        <h2 id="contact-title">Let's Connect</h2>
        <p>I'm open to professional opportunities, collaboration, and projects involving data analysis, logistics, reporting, and business systems.</p>
        <ul className="info">
          <li><Mail size={16} /><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
          {PROFILE.linkedin && <li><Link2 size={16} /><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          {PROFILE.github && <li><GitBranch size={16} /><a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
        </ul>
      </div>

      <form onSubmit={submit} noValidate>
        <div className="row-2">
          {field('name', 'Name', { type: 'text', autoComplete: 'name' })}
          {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        </div>
        {field('subject', 'Subject', { type: 'text' })}
        {field('message', 'Message')}
        <button className="btn primary" type="submit"><Send size={16} /> Send Message</button>
        <p className="note">This form opens your email app with the message pre-filled. Nothing is sent until you press Send there.</p>
      </form>
    </section>
  )
}