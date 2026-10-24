import { BarChart3, ArrowRight } from 'lucide-react'

export default function ResultBanner({ onNavigate }) {
  return (
    <section className="result" aria-labelledby="result-title">
      <div className="result-title">
        <BarChart3 size={26} />
        <h2 id="result-title">The Result</h2>
      </div>
      <p>
        Through data analysis, system development, and process improvement, I help teams work smarter,
        reduce manual effort, and keep operations running smoothly.
      </p>
      <button className="result-cta" onClick={() => onNavigate('contact')}>
        <ArrowRight size={18} /> Let's build better systems together.
      </button>
    </section>
  )
}