import { useCallback, useEffect, useRef, useState } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])
  const timers = useRef(new Map())

  const dismiss = useCallback((id) => {
    clearTimeout(timers.current.get(id))
    timers.current.delete(id)
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const notify = useCallback((message, type = 'info', ms = 4500) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t.slice(-2), { id, message, type }])
    timers.current.set(id, setTimeout(() => dismiss(id), ms))
  }, [dismiss])

  useEffect(() => {
    const map = timers.current
    return () => map.forEach((t) => clearTimeout(t))
  }, [])

  return { toasts, notify, dismiss }
}