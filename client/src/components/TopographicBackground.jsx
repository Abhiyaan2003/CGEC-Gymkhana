import { useEffect, useRef } from 'react'

/**
 * High-Performance Inline 3D Simplex Noise generator
 */
function createSimplexNoise() {
  const F3 = 1.0 / 3.0
  const G3 = 1.0 / 6.0

  const p = new Uint8Array(256)
  for (let i = 0; i < 256; i++) p[i] = Math.floor(Math.random() * 256)
  const perm = new Uint8Array(512)
  const permMod12 = new Uint8Array(512)
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255]
    permMod12[i] = perm[i] % 12
  }

  const grad3 = new Float32Array([
    1, 1, 0,  -1, 1, 0,   1,-1, 0,  -1,-1, 0,
    1, 0, 1,  -1, 0, 1,   1, 0,-1,  -1, 0,-1,
    0, 1, 1,   0,-1, 1,   0, 1,-1,   0,-1,-1
  ])

  return function noise3D(xin, yin, zin) {
    let n0 = 0, n1 = 0, n2 = 0, n3 = 0

    const s = (xin + yin + zin) * F3
    const i = Math.floor(xin + s)
    const j = Math.floor(yin + s)
    const k = Math.floor(zin + s)
    const t = (i + j + k) * G3
    const X0 = i - t
    const Y0 = j - t
    const Z0 = k - t
    const x0 = xin - X0
    const y0 = yin - Y0
    const z0 = zin - Z0

    let i1, j1, k1
    let i2, j2, k2
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0 }
      else if (x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1 }
      else { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1 }
    } else {
      if (y0 < z0) { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1 }
      else if (x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1 }
      else { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0 }
    }

    const x1 = x0 - i1 + G3
    const y1 = y0 - j1 + G3
    const z1 = z0 - k1 + G3
    const x2 = x0 - i2 + 2.0 * G3
    const y2 = y0 - j2 + 2.0 * G3
    const z2 = z0 - k2 + 2.0 * G3
    const x3 = x0 - 1.0 + 3.0 * G3
    const y3 = y0 - 1.0 + 3.0 * G3
    const z3 = z0 - 1.0 + 3.0 * G3

    const ii = i & 255
    const jj = j & 255
    const kk = k & 255

    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0
    if (t0 > 0) {
      const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3
      t0 *= t0
      n0 = t0 * t0 * (grad3[gi0]*x0 + grad3[gi0+1]*y0 + grad3[gi0+2]*z0)
    }

    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1
    if (t1 > 0) {
      const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3
      t1 *= t1
      n1 = t1 * t1 * (grad3[gi1]*x1 + grad3[gi1+1]*y1 + grad3[gi1+2]*z1)
    }

    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2
    if (t2 > 0) {
      const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3
      t2 *= t2
      n2 = t2 * t2 * (grad3[gi2]*x2 + grad3[gi2+1]*y2 + grad3[gi2+2]*z2)
    }

    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3
    if (t3 > 0) {
      const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3
      t3 *= t3
      n3 = t3 * t3 * (grad3[gi3]*x3 + grad3[gi3+1]*y3 + grad3[gi3+2]*z3)
    }

    return 32.0 * (n0 + n1 + n2 + n3) * 0.5 + 0.5
  }
}

/**
 * TopographicBackground Component — 60 FPS Ultra-Optimized Edition
 */
export default function TopographicBackground({
  variant = 'absolute',
  lineColor = 'rgba(255, 255, 255, 0.28)',
  backgroundColor = 'transparent',
  lineOpacity = 0.24,
  lineWidth = 1.1,
  density = 10,
  interactive = true,
  speed = 0.7,
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    const noise3D = createSimplexNoise()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationFrameId
    let isVisible = true
    let width = 0
    let height = 0
    let dpr = 1

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      warpStrength: 0,
      targetWarpStrength: 0,
    }

    const resolveColor = (colorStr) => {
      if (!colorStr || colorStr === 'transparent') return 'transparent'
      if (colorStr.startsWith('var(') || colorStr === 'currentColor') {
        const dummy = document.createElement('div')
        dummy.style.color = colorStr
        dummy.style.display = 'none'
        document.body.appendChild(dummy)
        const computed = getComputedStyle(dummy).color
        document.body.removeChild(dummy)
        return computed || 'rgba(255, 255, 255, 0.24)'
      }
      return colorStr
    }

    // High performance cell size (24px grid)
    const cellSize = 24
    let cols = 0
    let rows = 0
    let grid = []

    const initDimensions = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width || window.innerWidth
      height = rect.height || window.innerHeight

      // Cap dpr at 1.5 for silky 60fps rendering without GPU overload
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(dpr, dpr)

      cols = Math.ceil(width / cellSize) + 1
      rows = Math.ceil(height / cellSize) + 1
      grid = new Float32Array(cols * rows)
    }

    initDimensions()

    const handleResize = () => {
      initDimensions()
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const handlePointerMove = (e) => {
      if (!interactive) return
      const rect = container.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
      mouse.targetWarpStrength = 1.0
    }

    const handlePointerLeave = () => {
      mouse.targetWarpStrength = 0
    }

    if (interactive) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      window.addEventListener('mouseleave', handlePointerLeave, { passive: true })
    }

    let time = 0
    let resolvedLineColor = resolveColor(lineColor)
    let resolvedBgColor = resolveColor(backgroundColor)

    // Iso threshold levels pre-calculation
    const levels = Math.max(3, density)
    const isoThresholds = new Float32Array(levels)
    const isoStep = 0.78 / (levels + 1)
    for (let l = 0; l < levels; l++) {
      isoThresholds[l] = 0.14 + (l + 1) * isoStep
    }

    const lerpEdge = (val1, val2, iso) => {
      if (Math.abs(iso - val1) < 0.00001) return 0
      if (Math.abs(iso - val2) < 0.00001) return 1
      if (Math.abs(val1 - val2) < 0.00001) return 0.5
      return (iso - val1) / (val2 - val1)
    }

    let lastTime = performance.now()

    const render = (now) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      if (!prefersReducedMotion) {
        time += 0.0012 * speed
      }

      // Smooth mouse spring
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1
      mouse.warpStrength += (mouse.targetWarpStrength - mouse.warpStrength) * 0.04

      ctx.clearRect(0, 0, width, height)

      if (resolvedBgColor && resolvedBgColor !== 'transparent') {
        ctx.fillStyle = resolvedBgColor
        ctx.fillRect(0, 0, width, height)
      }

      const noiseScale = 0.0028
      const warpRadius = 240
      const warpRadiusSq = warpRadius * warpRadius

      // Single-pass noise grid computation
      for (let r = 0; r < rows; r++) {
        const y = r * cellSize
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize

          let sampleX = x
          let sampleY = y

          if (interactive && mouse.warpStrength > 0.01) {
            const dx = x - mouse.x
            const dy = y - mouse.y
            const distSq = dx * dx + dy * dy
            if (distSq < warpRadiusSq && distSq > 0.1) {
              const dist = Math.sqrt(distSq)
              const factor = (1 - dist / warpRadius) * mouse.warpStrength
              const push = factor * 26
              sampleX += (dx / dist) * push
              sampleY += (dy / dist) * push
            }
          }

          grid[r * cols + c] = noise3D(sampleX * noiseScale, sampleY * noiseScale, time)
        }
      }

      // Single-pass Marching Squares Isoline Contours across all iso levels
      ctx.strokeStyle = resolvedLineColor
      ctx.globalAlpha = lineOpacity
      ctx.lineWidth = lineWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      ctx.beginPath()

      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const x0 = c * cellSize
          const y0 = r * cellSize

          const v0 = grid[r * cols + c]
          const v1 = grid[r * cols + (c + 1)]
          const v2 = grid[(r + 1) * cols + (c + 1)]
          const v3 = grid[(r + 1) * cols + c]

          const minV = Math.min(v0, v1, v2, v3)
          const maxV = Math.max(v0, v1, v2, v3)

          // Check only thresholds that intersect this specific cell
          for (let l = 0; l < levels; l++) {
            const iso = isoThresholds[l]
            if (iso < minV || iso > maxV) continue

            let cellState = 0
            if (v0 >= iso) cellState |= 1
            if (v1 >= iso) cellState |= 2
            if (v2 >= iso) cellState |= 4
            if (v3 >= iso) cellState |= 8

            if (cellState === 0 || cellState === 15) continue

            const top    = { x: x0 + cellSize * lerpEdge(v0, v1, iso), y: y0 }
            const right  = { x: x0 + cellSize, y: y0 + cellSize * lerpEdge(v1, v2, iso) }
            const bottom = { x: x0 + cellSize * lerpEdge(v3, v2, iso), y: y0 + cellSize }
            const left   = { x: x0, y: y0 + cellSize * lerpEdge(v0, v3, iso) }

            switch (cellState) {
              case 1:
              case 14:
                ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); break
              case 2:
              case 13:
                ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); break
              case 3:
              case 12:
                ctx.moveTo(left.x, left.y); ctx.lineTo(right.x, right.y); break
              case 4:
              case 11:
                ctx.moveTo(right.x, right.y); ctx.lineTo(bottom.x, bottom.y); break
              case 5:
                ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y)
                ctx.moveTo(right.x, right.y); ctx.lineTo(bottom.x, bottom.y); break
              case 6:
              case 9:
                ctx.moveTo(top.x, top.y); ctx.lineTo(bottom.x, bottom.y); break
              case 7:
              case 8:
                ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
              case 10:
                ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y)
                ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
            }
          }
        }
      }

      ctx.stroke()

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (interactive) {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('mouseleave', handlePointerLeave)
      }
    }
  }, [variant, lineColor, backgroundColor, lineOpacity, lineWidth, density, interactive, speed])

  const positionStyle = variant === 'fixed'
    ? { position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }
    : { position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }

  return (
    <div ref={containerRef} style={positionStyle} aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}
