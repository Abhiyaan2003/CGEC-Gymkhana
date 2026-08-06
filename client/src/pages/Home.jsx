import { Link } from 'react-router-dom'
import { ArrowRight, Users, Clock, ShieldCheck, Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CtaBanner from '../components/CtaBanner'
import BodyRevealHero from '../components/BodyRevealHero'
import HorizontalStrip from '../components/HorizontalStrip'
import PreloadGate from '../components/PreloadGate'
import heroFit from '../assets/hero_fit.png'
import heroNormal from '../assets/hero_normal.png'
import stripWeek4 from '../assets/strip_week4.jpg'
import stripWeek8 from '../assets/strip_week8.jpg'
import stripWeek12 from '../assets/strip_week12.jpg'
import './Home.css'

/* ── Equipment cards with hover crossfade ── */
const equipmentCards = [
  {
    title: 'Free Weights',
    desc: 'Dumbbells, barbells, and weight plates for full-body strength training.',
    tag: 'Strength',
    hoverImg: heroFit,
    hoverPos: 'center top',
  },
  {
    title: 'Cardio Zone',
    desc: 'Treadmills, cycles, and ellipticals to boost endurance and burn calories.',
    tag: 'Cardio',
    hoverImg: stripWeek4,
    hoverPos: 'center center',
  },
  {
    title: 'Multi-Gym Station',
    desc: 'Cable machines and functional trainers for compound movements.',
    tag: 'Functional',
    hoverImg: stripWeek12,
    hoverPos: 'center top',
  },
  {
    title: 'Stretching Area',
    desc: 'Dedicated mat zone for warm-ups, cool-downs, and flexibility work.',
    tag: 'Recovery',
    hoverImg: stripWeek8,
    hoverPos: 'center center',
  },
]

const stats = [
  { value: '40+',     label: 'Equipment Units' },
  { value: '6AM–8PM', label: 'Daily Hours'      },
  { value: '3+',      label: 'Years Running'    },
  { value: '100+',    label: 'Active Members'   },
]

const highlights = [
  { icon: <Users size={20} />,     title: 'Prioritized Access', desc: 'Open to enrolled students, with slot priority given to 3rd & 4th-year students.' },
  { icon: <ShieldCheck size={20}/>, title: 'Safe Environment',  desc: 'Well-maintained equipment, proper ventilation, and safety protocols.' },
  { icon: <Clock size={20} />,     title: 'Flexible Timings',  desc: 'Morning and evening slots to fit any schedule, 6 days a week.' },
  { icon: <Star size={20} />,      title: 'Free Access',        desc: 'No extra fee — gym access included with your enrollment at CGEC.' },
]

export default function Home() {
  const statsRef     = useScrollReveal()
  const highlightRef = useScrollReveal()
  const equipRef     = useScrollReveal()
  const eventsRef    = useScrollReveal()

  return (
    <div className="home">
      {/* ── PRELOAD GATE ── */}
      <PreloadGate images={[heroNormal, heroFit]} />

      {/* ── HERO — Pinned body-reveal ── */}
      <BodyRevealHero />

      {/* ── HORIZONTAL PHOTO STRIP ── */}
      <HorizontalStrip />

      {/* ── STATS BAR ── */}
      <section className="stats-bar" ref={statsRef} aria-label="Statistics">
        <div className="container stats-bar__inner">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="stats-bar__item fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="stats-bar__value display-sm text-gradient">{value}</span>
              <span className="label text-muted">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section" ref={highlightRef} aria-labelledby="highlights-heading">
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">Why Join Us</span>
            <div className="divider" style={{ marginTop: 'var(--sp-3)' }} />
            <h2 id="highlights-heading" className="display-md" style={{ marginTop: 'var(--sp-3)' }}>
              Built Discipline
            </h2>
          </div>
          <div className="grid-4" style={{ marginTop: 'var(--sp-8)' }}>
            {highlights.map(({ icon, title, desc }, i) => (
              <div key={title} className="card card-red-hover fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="icon-box" style={{ marginBottom: 'var(--sp-4)' }}>{icon}</div>
                <h3 className="heading-md" style={{ marginBottom: 'var(--sp-2)' }}>{title}</h3>
                <p className="body-sm text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT PREVIEW — Hover crossfade ── */}
      <section className="section equipment-preview" ref={equipRef} aria-labelledby="equipment-heading">
        <div className="equipment-preview__bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header center fade-in">
            <span className="label text-red">Facilities</span>
            <div className="divider" style={{ margin: 'var(--sp-3) auto' }} />
            <h2 id="equipment-heading" className="display-md">World-Class Equipment</h2>
            <p className="body-lg text-secondary" style={{ maxWidth: 560, margin: 'var(--sp-4) auto 0' }}>
              From heavy lifts to light cardio — everything you need is right on campus.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: 'var(--sp-10)' }}>
            {equipmentCards.map(({ title, desc, tag, hoverImg, hoverPos }, i) => (
              <div
                key={title}
                className="equip-xfade fade-in"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Resting state */}
                <div className="equip-xfade__base card">
                  <div className="equip-xfade__top">
                    <span className="tag">{tag}</span>
                  </div>
                  <h3 className="heading-md" style={{ margin: 'var(--sp-4) 0 var(--sp-2)' }}>{title}</h3>
                  <p className="body-sm text-secondary">{desc}</p>
                </div>
                {/* Hover state — image crossfade */}
                <div
                  className="equip-xfade__hover"
                  style={{ backgroundImage: `url(${hoverImg})`, backgroundPosition: hoverPos }}
                  aria-hidden="true"
                >
                  <div className="equip-xfade__overlay">
                    <span className="tag">{tag}</span>
                    <h3 className="heading-md" style={{ color: 'var(--text-primary)', marginTop: 'auto' }}>{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-in" style={{ textAlign: 'center', marginTop: 'var(--sp-10)' }}>
            <Link to="/facilities" className="btn btn-outline">
              View All Equipment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENTS (blurred / coming soon) ── */}
      <section className="section" ref={eventsRef} aria-labelledby="events-heading" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">Campus Life</span>
            <div className="divider" style={{ marginTop: 'var(--sp-3)' }} />
            <h2 id="events-heading" className="display-md" style={{ marginTop: 'var(--sp-3)' }}>
              Upcoming Gymkhana Events
            </h2>
            <p className="body-lg text-secondary" style={{ maxWidth: 560, marginTop: 'var(--sp-4)' }}>
              Get ready to compete and represent your department in campus-wide challenges.
            </p>
          </div>

          <div style={{ position: 'relative', marginTop: 'var(--sp-8)' }}>
            {/* Placeholder cards */}
            <div className="grid-3" style={{ opacity: 0.3, pointerEvents: 'none', userSelect: 'none' }}>
              {[
                { title: 'Powerlifting Championship', date: 'October 12, 2026',  desc: 'Annual Squat, Bench, and Deadlift competition.', tag: 'Oct 12' },
                { title: 'Calisthenics Challenge',    date: 'November 05, 2026', desc: 'Push bodyweight boundaries with max pull-ups, dips, and plank contests.', tag: 'Nov 05' },
                { title: 'Arm Wrestling Clash',       date: 'November 20, 2026', desc: 'Departmental showdown in arm wrestling brackets.', tag: 'Nov 20' },
              ].map(({ title, date, desc, tag }) => (
                <div key={title} className="card">
                  <span className="tag" style={{ marginBottom: 'var(--sp-3)' }}>{tag}</span>
                  <h3 className="heading-md" style={{ marginBottom: 'var(--sp-2)' }}>{title}</h3>
                  <span className="body-xs text-muted" style={{ display: 'block', marginBottom: 'var(--sp-3)' }}>{date}</span>
                  <p className="body-sm text-secondary">{desc}</p>
                </div>
              ))}
            </div>
            {/* Coming soon overlay */}
            <div className="coming-soon-overlay">
              <div className="coming-soon-card">
                <h3 className="display-sm" style={{ margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red-500)' }}>
                  Coming Soon
                </h3>
                <p className="body-sm text-secondary" style={{ marginTop: 'var(--sp-2)', marginBottom: 0 }}>
                  We are finalising dates. Stay tuned for registration updates!
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ textAlign: 'center', marginTop: 'var(--sp-8)' }}>
            <Link to="/events" className="btn btn-outline">
              View Event Details <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  )
}
