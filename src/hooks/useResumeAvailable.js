import { useEffect, useState } from 'react'
import { PROFILE } from '../data/profile.js'

export function useResumeAvailable() {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(PROFILE.resumeUrl, { method: 'HEAD', signal: ctrl.signal })
      .then((r) => setOk(r.ok && (r.headers.get('content-type') || '').includes('pdf')))
      .catch(() => setOk(false))
    return () => ctrl.abort()
  }, [])

  return ok
}