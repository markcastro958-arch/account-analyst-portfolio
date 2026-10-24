import { PROFILE } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite &amp; Chart.js.
    </footer>
  )
}