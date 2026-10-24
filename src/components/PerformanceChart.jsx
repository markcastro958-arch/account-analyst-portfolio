import { useMemo, useState } from 'react'
import { BarChart3, Calendar } from 'lucide-react'
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Filler, Tooltip, Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { PERIODS, RANGE_LABEL } from '../data/analytics.js'
import { usePrefersReducedMotion } from '../hooks/useCountUp.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function PerformanceChart({ theme }) {
  const [period, setPeriod] = useState('Monthly')
  const reduced = usePrefersReducedMotion()
  const dark = theme === 'dark'
  const text = dark ? '#9fb0c8' : '#64748b'
  const grid = dark ? 'rgba(148,163,184,.15)' : 'rgba(100,116,139,.15)'

  const data = useMemo(() => {
    const p = PERIODS[period]
    return {
      labels: p.labels,
      datasets: [
        {
          label: 'Actual', data: p.actual, borderColor: '#2563eb',
          backgroundColor: 'rgba(37,99,235,.14)', fill: true, tension: 0.35,
          pointRadius: 3, pointHoverRadius: 6, pointBackgroundColor: '#2563eb', borderWidth: 2
        },
        {
          label: 'Target', data: p.target, borderColor: '#22c55e',
          backgroundColor: '#22c55e', fill: false, tension: 0.35,
          pointRadius: 3, pointHoverRadius: 6, pointBackgroundColor: '#22c55e', borderWidth: 2
        }
      ]
    }
  }, [period])

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    animation: reduced ? false : { duration: 900, easing: 'easeOutQuart' },
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: {
        position: 'top', align: 'start',
        labels: { usePointStyle: true, boxWidth: 8, color: text, font: { size: 12 } }
      },
      tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.y}K` } }
    },
    scales: {
      x: { ticks: { color: text }, grid: { display: false } },
      y: {
        beginAtZero: true, suggestedMax: 100,
        ticks: { color: text, callback: (v) => (v ? `${v}K` : '0') },
        grid: { color: grid }
      }
    }
  }), [reduced, text, grid])

  return (
    <section className="card chart-card" aria-labelledby="chart-title">
      <header className="card-head between">
        <div className="row">
          <BarChart3 size={22} />
          <h2 id="chart-title">Account Performance Overview</h2>
        </div>
        <label className="select-wrap">
          <Calendar size={14} />
          <span className="sr-only">Period</span>
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            {Object.keys(PERIODS).map((k) => <option key={k}>{k}</option>)}
          </select>
        </label>
      </header>
      <div className="chart-box">
        <Line data={data} options={options} aria-label={`Actual versus target, ${period.toLowerCase()} (${RANGE_LABEL})`} role="img" />
      </div>
      <p className="note">Illustrative sample data ({RANGE_LABEL}) — not verified company performance. Edit src/data/analytics.js.</p>
    </section>
  )
}