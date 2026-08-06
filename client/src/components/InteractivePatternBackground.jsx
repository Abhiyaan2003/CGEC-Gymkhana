import { useEffect, useRef } from 'react'
import topographicSvg from '../assets/topographic.svg'
import './InteractivePatternBackground.css'

export default function InteractivePatternBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationFrameId
    let width = 0
    let height = 0
    let dpr = 1

    // Cursor state with smooth lerping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      velocity: 0,
      lastX: -1000,
      lastY: -1000,
    }

    const interactionRadius = 240

    const initCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    initCanvas()

    const handleResize = () => {
      initCanvas()
    }
    window.addEventListener('resize', handleResize, { passive: true })

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true })

    let time = 0

    const render = () => {
      time += 0.012

      // Smooth mouse position lerping
      const dxMouse = mouse.targetX - mouse.x
      const dyMouse = mouse.targetY - mouse.y
      mouse.x += dxMouse * 0.12
      mouse.y += dyMouse * 0.12

      // Mouse velocity
      const vx = mouse.x - mouse.lastX
      const vy = mouse.y - mouse.lastY
      const currentVel = Math.sqrt(vx * vx + vy * vy)
      mouse.velocity += (currentVel - mouse.velocity) * 0.1
      mouse.lastX = mouse.x
      mouse.lastY = mouse.y

      ctx.clearRect(0, 0, width, height)

      // Render Dynamic Crimson & White Mouse Spotlight Glow onto the topographical SVG background
      if (mouse.active && mouse.x > 0 && mouse.y > 0 && !prefersReducedMotion) {
        // 1. Primary Crimson Aura
        const glowRadius = interactionRadius * 1.1
        const glowGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        )
        glowGrad.addColorStop(0, 'rgba(225, 6, 0, 0.35)')
        glowGrad.addColorStop(0.3, 'rgba(225, 6, 0, 0.12)')
        glowGrad.addColorStop(0.7, 'rgba(225, 6, 0, 0.03)')
        glowGrad.addColorStop(1, 'rgba(225, 6, 0, 0)')

        ctx.fillStyle = glowGrad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        // 2. Bright White Core Spotlight Illuminating Topo Lines
        const coreRadius = 95
        const coreGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          coreRadius
        )
        coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)')
        coreGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = coreGrad
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, coreRadius, 0, Math.PI * 2)
        ctx.fill()

        // 3. Dynamic Expanding Concentric Topographic Contour Isoline Pulse Rings
        const ringCount = 3
        for (let r = 1; r <= ringCount; r++) {
          const ringRadius = (r * 45 + (time * 50) % 45) * (1 + mouse.velocity * 0.015)
          if (ringRadius < interactionRadius * 0.9) {
            const ringAlpha = (1 - ringRadius / (interactionRadius * 0.9)) * 0.45
            ctx.beginPath()
            ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(225, 6, 0, ${ringAlpha.toFixed(3)})`
            ctx.lineWidth = 1.4
            ctx.setLineDash([6, 8])
            ctx.stroke()
            ctx.setLineDash([])
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('mouseleave', handlePointerLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="interactive-pattern-bg-wrap" aria-hidden="true">
      {/* Seamless Vector Topographical Background Pattern matching user image */}
      <div
        className="interactive-pattern-svg-bg"
        style={{ backgroundImage: `url(${topographicSvg})` }}
      />
      {/* Real-time Interactive Cursor Illumination & Contour Pulse Canvas */}
      <canvas ref={canvasRef} className="interactive-pattern-canvas" />
      <div className="pattern-radial-overlay" />
    </div>
  )
}
