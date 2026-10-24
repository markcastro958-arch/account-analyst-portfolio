import { useEffect, useState } from 'react'

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const visible = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0))
        let best = null
        let bestRatio = 0
        visible.forEach((r, id) => { if (r > bestRatio) { best = id; bestRatio = r } })
        if (best) setActive(best)
      },
      { rootMargin: '-15% 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids.join('|')]) // eslint-disable-line react-hooks/exhaustive-deps

  return active
}