import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import heroFit from '../assets/hero_fit.png'
import heroNormal from '../assets/hero_normal.png'
import './BodyRevealHero.css'

/* ── Blob constants ── */
const VW = 600
const VH = 800
const BLOB_RADII   = [85, 125, 100, 78, 58]
const LERP_FACTORS = [0.35, 0.24, 0.17, 0.12, 0.09]
const TILT_SENS    = 9

const lerp  = (a, b, t) => a + (b - a) * t
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

export default function BodyRevealHero() {
  const sectionRef = useRef(null)
  const svgRef     = useRef(null)
  const circlesRef = useRef([])
  const rafRef     = useRef(null)

  const maskGroupRef     = useRef(null)
  const isInteractingRef = useRef(false)
  const maskOpacityRef   = useRef(0) // Start invisible until user interacts

  const blobPos   = useRef(BLOB_RADII.map(() => ({ x: VW / 2, y: VH / 2 })))
  const targetPos = useRef({ x: VW / 2, y: VH / 2 })

  /* state */
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isLocked, setIsLocked]           = useState(false)
  const [hint, setHint]                   = useState('Tilt your phone to reveal')

  /* mobile */
  const calibRef   = useRef(null)
  const hasTiltRef = useRef(false)
  const tiltTimer  = useRef(null)

  const reducedMotion = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  /* ── SVG coord mapper ── */
  const toSVG = useCallback((cx, cy) => {
    if (!svgRef.current) return { x: VW / 2, y: VH / 2 }
    const r = svgRef.current.getBoundingClientRect()
    return {
      x: ((cx - r.left) / r.width)  * VW,
      y: ((cy - r.top)  / r.height) * VH,
    }
  }, [])

  /* ── RAF blob tick ── */
  const tick = useCallback(() => {
    // Smooth lerp for mask opacity (fade in on interaction, fade out on leave)
    const targetOpacity = isInteractingRef.current ? 1 : 0
    maskOpacityRef.current += (targetOpacity - maskOpacityRef.current) * 0.14

    if (maskGroupRef.current) {
      maskGroupRef.current.style.opacity = maskOpacityRef.current.toFixed(3)
    }

    const lf0 = reducedMotion.current ? 0.5 : LERP_FACTORS[0]
    blobPos.current[0].x = lerp(blobPos.current[0].x, targetPos.current.x, lf0)
    blobPos.current[0].y = lerp(blobPos.current[0].y, targetPos.current.y, lf0)
    for (let i = 1; i < BLOB_RADII.length; i++) {
      const lf = reducedMotion.current ? 0.5 : LERP_FACTORS[i]
      blobPos.current[i].x = lerp(blobPos.current[i].x, blobPos.current[i - 1].x, lf)
      blobPos.current[i].y = lerp(blobPos.current[i].y, blobPos.current[i - 1].y, lf)
    }

    circlesRef.current.forEach((el, i) => {
      if (!el) return
      el.setAttribute('cx', blobPos.current[i].x.toFixed(1))
      el.setAttribute('cy', blobPos.current[i].y.toFixed(1))
      el.setAttribute('r', BLOB_RADII[i].toFixed(1))
    })
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  /* ── Mouse handlers ── */
  const onMouseEnter = useCallback((e) => {
    isInteractingRef.current = true
    targetPos.current = toSVG(e.clientX, e.clientY)
  }, [toSVG])

  const onMouseMove = useCallback((e) => {
    isInteractingRef.current = true
    targetPos.current = toSVG(e.clientX, e.clientY)
  }, [toSVG])

  const onMouseLeave = useCallback(() => {
    isInteractingRef.current = false
  }, [])

  /* ── Touch fallback ── */
  const handleTouchStart = useCallback((e) => {
    if (!e.touches || e.touches.length === 0) return
    isInteractingRef.current = true
    const t  = e.touches[0]
    const sv = toSVG(t.clientX, t.clientY)
    targetPos.current = { x: clamp(sv.x, 20, VW - 20), y: clamp(sv.y, 20, VH - 20) }
  }, [toSVG])

  const handleTouchMove = useCallback((e) => {
    if (!e.touches || e.touches.length === 0) return
    isInteractingRef.current = true
    const t  = e.touches[0]
    const sv = toSVG(t.clientX, t.clientY)
    targetPos.current = { x: clamp(sv.x, 20, VW - 20), y: clamp(sv.y, 20, VH - 20) }
  }, [toSVG])

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      isInteractingRef.current = false
    }, 1500)
  }, [])

  /* ── Gyroscope ── */
  const onOrientation = useCallback((e) => {
    if (!hasTiltRef.current) { hasTiltRef.current = true; clearTimeout(tiltTimer.current) }
    if (calibRef.current === null) {
      calibRef.current = { beta: e.beta, gamma: e.gamma }
      return
    }
    isInteractingRef.current = true
    const x = clamp(VW / 2 + (e.gamma - calibRef.current.gamma) * TILT_SENS, 40, VW - 40)
    const y = clamp(VH / 2 + (e.beta  - calibRef.current.beta)  * TILT_SENS, 40, VH - 40)
    targetPos.current = { x, y }
  }, [])

  const startOrientation = useCallback(() => {
    window.addEventListener('deviceorientation', onOrientation, { passive: true })
    tiltTimer.current = setTimeout(() => {
      if (!hasTiltRef.current) setHint('Drag your finger to reveal')
    }, 1200)
  }, [onOrientation])

  const requestIosTilt = useCallback(async () => {
    try {
      if (await DeviceOrientationEvent.requestPermission() === 'granted') {
        startOrientation()
      } else { setHint('Drag your finger to reveal') }
    } catch { setHint('Drag your finger to reveal') }
  }, [startOrientation])

  /* ── Setup ── */
  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouchDevice(touch)

    rafRef.current = requestAnimationFrame(tick)

    const sec = sectionRef.current
    if (!touch) {
      sec?.addEventListener('mouseenter', onMouseEnter, { passive: true })
      sec?.addEventListener('mousemove',  onMouseMove,  { passive: true })
      sec?.addEventListener('mouseleave', onMouseLeave, { passive: true })
    } else {
      sec?.addEventListener('touchstart', handleTouchStart, { passive: true })
      sec?.addEventListener('touchmove',  handleTouchMove,  { passive: true })
      sec?.addEventListener('touchend',   handleTouchEnd,   { passive: true })
      if (typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS
      } else {
        startOrientation()
      }
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(tiltTimer.current)
      window.removeEventListener('deviceorientation', onOrientation)
      sec?.removeEventListener('mouseenter', onMouseEnter)
      sec?.removeEventListener('mousemove',  onMouseMove)
      sec?.removeEventListener('mouseleave', onMouseLeave)
      sec?.removeEventListener('touchstart', handleTouchStart)
      sec?.removeEventListener('touchmove',  handleTouchMove)
      sec?.removeEventListener('touchend',   handleTouchEnd)
      document.body.style.overflow = ''
    }
  }, []) // eslint-disable-line

  const isIos = isTouchDevice &&
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'

  return (
    <section
      ref={sectionRef}
      id="body-reveal-hero"
      className={`brh${isLocked ? ' brh--locked' : ''}`}
      aria-label="Interactive body transformation reveal"
    >
      {/* ── Centered body figure (SVG reveal) ── */}
      <div className="brh__figure-wrap" aria-hidden="true">
        <svg
          ref={svgRef}
          className="brh__svg"
          viewBox={`0 0 ${VW} ${VH}`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <filter id="brh-goo" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix
                in="blur" type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
                result="goo"
              />
            </filter>

            <mask id="brh-reveal-mask">
              <rect width={VW} height={VH} fill="black" />
              <g ref={maskGroupRef} filter="url(#brh-goo)" style={{ opacity: 0 }}>
                {BLOB_RADII.map((r, i) => (
                  <circle
                    key={i}
                    ref={el => { circlesRef.current[i] = el }}
                    cx={VW / 2} cy={VH / 2} r={r}
                    fill="white"
                  />
                ))}
              </g>
            </mask>
          </defs>

          {/* Base physique layer — Normal body */}
          <image
            href={heroNormal}
            x="0" y="0" width={VW} height={VH}
            preserveAspectRatio="xMidYMin slice"
          />

          {/* Liquid reveal layer — Fit body revealed inside active cursor blob */}
          <g mask="url(#brh-reveal-mask)">
            <image
              href={heroFit}
              x="0" y="0" width={VW} height={VH}
              preserveAspectRatio="xMidYMin slice"
            />
          </g>
        </svg>
      </div>

      {/* ── Bottom gradient overlay ── */}
      <div className="brh__gradient" aria-hidden="true" />

      {/* ── Bottom-left: Title ── */}
      <div className="brh__title-block">
        <span className="label text-red brh__eyebrow">CGEC Gymkhana</span>
        <h1 className="brh__title">
          Change Is<br />
          <span className="text-gradient">Built Here.</span>
        </h1>
        <p className="brh__hint">
          {isTouchDevice ? hint : 'Move cursor to reveal the transformation'}
        </p>
      </div>

      {/* ── Bottom-right: Subtitle + CTA ── */}
      <div className="brh__info-block">
        <p className="body-md text-secondary brh__sub">
          Fully equipped campus gym. Zero extra fees.
          Engineered to build champions.
        </p>
        <div className="brh__actions">
          <Link to="/register" className="btn btn-primary brh__cta">
            Register Now <ArrowRight size={18} />
          </Link>
        </div>

        {/* iOS permission */}
        {isTouchDevice && isIos && (
          <button className="brh__ios-btn" onClick={requestIosTilt}>
            Enable tilt tracking
          </button>
        )}
      </div>

      {/* ── Scroll hint ── */}
      <div className="brh__scroll-hint" aria-hidden="true">
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
