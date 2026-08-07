import heroNormal from '../assets/hero_normal.png'
import heroFit from '../assets/hero_fit.png'
import stripWeek4 from '../assets/strip_week4.jpg'
import stripWeek8 from '../assets/strip_week8.jpg'
import after1 from '../assets/After (1).png'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsapSetup'
import './HorizontalStrip.css'

const STRIP_ITEMS = [
  { type: 'image', src: heroNormal,  label: 'Before',            sub: 'Day 1'    },
  { type: 'quote', text: 'Your only competition is who you were yesterday.'               },
  { type: 'image', src: stripWeek4,  label: 'The Grind',         sub: 'Week 4'   },
  { type: 'image', src: stripWeek8,  label: 'Building Strength', sub: 'Week 8'   },
  { type: 'quote', text: 'Discipline is choosing what you want most over what you want now.' },
  { type: 'image', src: after1,      label: 'Peak Performance',  sub: 'Week 12'  },
  { type: 'image', src: heroFit,     label: 'After',             sub: '90 Days'  },
]

export default function HorizontalStrip() {
  const containerRef = useRef(null)
  const stripRef     = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth <= 768

    if (prefersReduced || isMobile) return // degrade to clean vertical layout on mobile

    const strip     = stripRef.current
    const container = containerRef.current

    const buildTween = () => {
      const totalWidth = strip.scrollWidth
      const viewW      = window.innerWidth
      const travel     = totalWidth - viewW + 48 // 48px breathing room

      return gsap.to(strip, {
        x: -travel,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1.2,
          start: 'center center',
          end: () => `+=${travel}`,
          invalidateOnRefresh: true,
        },
      })
    }

    let tween = buildTween()
    const onResize = () => {
      if (window.innerWidth <= 768) {
        tween?.kill()
        return
      }
      tween?.kill()
      tween = buildTween()
    }
    window.addEventListener('resize', onResize)

    return () => {
      tween?.kill()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section ref={containerRef} className="hstrip" aria-label="Transformation journey">
      <div ref={stripRef} className="hstrip__track" role="list">
        {STRIP_ITEMS.map((item, i) =>
          item.type === 'quote' ? (
            <div key={i} className="hstrip__quote" role="listitem">
              <blockquote className="hstrip__quote-text display-sm">
                "{item.text}"
              </blockquote>
              <div className="hstrip__quote-line" aria-hidden="true" />
            </div>
          ) : (
            <figure key={i} className="hstrip__item" role="listitem">
              <div className="hstrip__img-wrap">
                <img src={item.src} alt={`${item.label} — ${item.sub}`} className="hstrip__img" loading="lazy" />
              </div>
              <figcaption className="hstrip__caption">
                <span className="hstrip__label label text-red">{item.label}</span>
                <span className="hstrip__sub body-xs text-muted">{item.sub}</span>
              </figcaption>
            </figure>
          )
        )}
      </div>
    </section>
  )
}
