import { Link } from 'react-router-dom'
import {
  ArrowRight, Dumbbell, Heart, Zap, Users, ChevronRight,
  TrendingUp, Clock, ShieldCheck, Star
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CtaBanner from '../components/CtaBanner'
import './Home.css'

const equipmentCards = [
  { icon: <Dumbbell size={24} />, title: 'Free Weights', desc: 'Dumbbells, barbells, and weight plates for full-body strength training.', tag: 'Strength' },
  { icon: <Heart size={24} />, title: 'Cardio Zone', desc: 'Treadmills, cycles, and ellipticals to boost endurance and burn calories.', tag: 'Cardio' },
  { icon: <Zap size={24} />, title: 'Multi-Gym Station', desc: 'Cable machines and functional trainers for compound movements.', tag: 'Functional' },
  { icon: <TrendingUp size={24} />, title: 'Stretching Area', desc: 'Dedicated mat zone for warm-ups, cool-downs, and flexibility work.', tag: 'Recovery' },
]

const stats = [
  { value: '40+', label: 'Equipment Units' },
  { value: '6AM–8PM', label: 'Daily Hours' },
  { value: '5+', label: 'Years Running' },
  { value: '500+', label: 'Active Members' },
]

const highlights = [
  { icon: <Users size={20} />, title: 'Prioritized Access', desc: 'Open to enrolled students, with slot priority given to 3rd & 4th-year students.' },
  { icon: <ShieldCheck size={20} />, title: 'Safe Environment', desc: 'Well-maintained equipment, proper ventilation, and safety protocols.' },
  { icon: <Clock size={20} />, title: 'Flexible Timings', desc: 'Morning and evening slots to fit any schedule, 6 days a week.' },
  { icon: <Star size={20} />, title: 'Free Access', desc: 'No extra fee — gym access included with your enrollment at CGEC.' },
]

export default function Home() {
  const heroRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const equipRef = useScrollReveal()
  const highlightRef = useScrollReveal()
  const eventsRef = useScrollReveal()

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef} aria-label="Hero">
        {/* Full-bleed Banner Graphic Background */}
        <div className="hero__banner" aria-hidden="true">
          <img 
            src="/hero_wide_banner.png" 
            alt="" 
            className="hero__banner-image" 
          />
          <div className="hero__banner-gradient" />
          <div className="hero__banner-vignette" />
        </div>

        {/* Floating Telemetry & System Tags */}
        <div className="hero__telemetry" aria-hidden="true">
          <div className="hero__telemetry-item">
            <span className="hero__telemetry-label">SYS_STATUS</span>
            <span className="hero__telemetry-value text-red">PORTAL: ACTIVE</span>
          </div>
          <div className="hero__telemetry-item">
            <span className="hero__telemetry-label">COORDINATES</span>
            <span className="hero__telemetry-value">[22.56, 88.16]</span>
          </div>
          <div className="hero__telemetry-item">
            <span className="hero__telemetry-label">CTRL_ZONE</span>
            <span className="hero__telemetry-value">CAMPUS_A</span>
          </div>
        </div>

        <div className="container hero__banner-content">
          <div className="hero__content">
            <div className="fade-in hero__badge-container">
              <span className="hero__status-dot" />
              <span className="hero__badge">CGEC Student Fitness Facility</span>
              <span className="hero__serial">[SYS_GKM_v1.0]</span>
            </div>
            
            <h1 className="display-xl hero__title fade-in" style={{ transitionDelay: '80ms' }}>
              Train Hard.<br />
              <span className="text-gradient">Rise Higher.</span>
            </h1>
            
            <p className="body-lg hero__subtitle fade-in" style={{ transitionDelay: '160ms' }}>
              CGEC Gymkhana is the campus strength hub for students of College of Government Engineering & Science. 
              Fully equipped, zero extra fees, and engineered to build champions.
            </p>
            
            <div className="hero__actions fade-in" style={{ transitionDelay: '240ms' }}>
              <Link to="/register" className="btn btn-primary btn-lg hero__cta-btn">
                Register Now <ArrowRight size={20} />
              </Link>
              <Link to="/facilities" className="btn btn-outline hero__secondary-btn">
                Explore Facilities <ChevronRight size={18} />
              </Link>
            </div>

            {/* Mini stats row */}
            <div className="hero__mini-stats fade-in" style={{ transitionDelay: '320ms' }}>
              {stats.slice(0, 3).map(({ value, label }) => (
                <div key={label} className="hero__mini-stat">
                  <span className="hero__mini-stat-value">{value}</span>
                  <span className="hero__mini-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-hint" aria-hidden="true">
          <div className="hero__scroll-dot" />
        </div>
      </section>

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
              Built for Every Student
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

      {/* ── EQUIPMENT PREVIEW ── */}
      <section className="section equipment-preview" ref={equipRef} aria-labelledby="equipment-heading">
        <div className="equipment-preview__bg" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header center fade-in">
            <span className="label text-red">Facilities</span>
            <div className="divider" style={{ margin: 'var(--sp-3) auto' }} />
            <h2 id="equipment-heading" className="display-md">
              World-Class Equipment
            </h2>
            <p className="body-lg text-secondary" style={{ maxWidth: 560, margin: 'var(--sp-4) auto 0' }}>
              From heavy lifts to light cardio — everything you need to hit your fitness goals is right on campus.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: 'var(--sp-10)' }}>
            {equipmentCards.map(({ icon, title, desc, tag }, i) => (
              <div
                key={title}
                className="card card-red-hover equip-card fade-in"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="equip-card__top">
                  <div className="icon-box">{icon}</div>
                  <span className="tag">{tag}</span>
                </div>
                <h3 className="heading-md" style={{ margin: 'var(--sp-4) 0 var(--sp-2)' }}>{title}</h3>
                <p className="body-sm text-secondary">{desc}</p>
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

      {/* ── FEATURED EVENTS ── */}
      <section className="section" ref={eventsRef} aria-labelledby="events-heading" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">Campus Life</span>
            <div className="divider" style={{ marginTop: 'var(--sp-3)' }} />
            <h2 id="events-heading" className="display-md" style={{ marginTop: 'var(--sp-3)' }}>
              Upcoming Gymkhana Events
            </h2>
            <p className="body-lg text-secondary" style={{ maxWidth: 560, marginTop: 'var(--sp-4)' }}>
              Get ready to compete and represent your department in our next campus-wide strength and fitness challenges.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 'var(--sp-8)' }}>
            {[
              {
                title: 'Powerlifting Championship',
                date: 'October 12, 2026',
                desc: 'Annual Squat, Bench, and Deadlift competition. Open for all eligible student weight categories.',
                tag: 'Oct 12'
              },
              {
                title: 'Calisthenics Challenge',
                date: 'November 05, 2026',
                desc: 'Push bodyweight boundaries with max pull-ups, parallel bar dips, and plank hold contests.',
                tag: 'Nov 05'
              },
              {
                title: 'Arm Wrestling Clash',
                date: 'November 20, 2026',
                desc: 'Departmental showdown in arm wrestling brackets. Trophies and certificates for all winners.',
                tag: 'Nov 20'
              }
            ].map(({ title, date, desc, tag }, i) => (
              <div key={title} className="card card-red-hover fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="tag" style={{ marginBottom: 'var(--sp-3)' }}>{tag}</span>
                <h3 className="heading-md" style={{ marginBottom: 'var(--sp-2)' }}>{title}</h3>
                <span className="body-xs text-muted" style={{ display: 'block', marginBottom: 'var(--sp-3)' }}>{date}</span>
                <p className="body-sm text-secondary">{desc}</p>
              </div>
            ))}
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
