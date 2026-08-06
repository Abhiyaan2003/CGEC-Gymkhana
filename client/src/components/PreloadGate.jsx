import { useState, useEffect } from 'react'
import './PreloadGate.css'

/**
 * Holds the viewport until hero images finish loading (max 3s failsafe).
 * props.images — array of src strings to preload.
 */
export default function PreloadGate({ images = [] }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone]         = useState(false)
  const [hidden, setHidden]     = useState(false)

  useEffect(() => {
    if (images.length === 0) { setProgress(100); setDone(true); return }

    let loaded = 0
    const total = images.length
    const fail  = setTimeout(() => setDone(true), 3000) // hard failsafe

    images.forEach(src => {
      const img = new window.Image()
      img.onload = img.onerror = () => {
        loaded++
        setProgress(Math.round((loaded / total) * 100))
        if (loaded >= total) { clearTimeout(fail); setDone(true) }
      }
      img.src = src
    })

    return () => clearTimeout(fail)
  }, []) // eslint-disable-line

  // After done, wait for exit animation then unmount
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setHidden(true), 750)
    return () => clearTimeout(t)
  }, [done])

  if (hidden) return null

  return (
    <div className={`preload${done ? ' preload--out' : ''}`} aria-hidden="true">
      <div className="preload__inner">
        <img src="/logo.png" alt="CGEC Gymkhana" className="preload__logo" />
        <div className="preload__track">
          <div className="preload__bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="preload__pct label text-muted">{progress}%</span>
      </div>
    </div>
  )
}
