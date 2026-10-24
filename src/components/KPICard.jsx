import { useCountUp } from '../hooks/useCountUp.js'

export default function KPICard({ kpi }) {
  const { icon: Icon, title, desc, type, end, suffix, text, sample } = kpi
  const [ref, value] = useCountUp(type === 'count' ? end : 0)

  return (
    <article className="kpi" ref={ref}>
      <Icon size={26} className="kpi-icon" />
      <p className="kpi-value">{type === 'count' ? `${value}${suffix || ''}` : text}</p>
      <h3>{type === 'count' ? title : 'Collaboration'}</h3>
      <p className="kpi-desc">{desc}</p>
      {sample && <span className="sample-tag">Sample value</span>}
    </article>
  )
}