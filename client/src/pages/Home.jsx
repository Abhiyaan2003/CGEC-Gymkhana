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
  { icon: <Users size={20} />, title: 'Students Only', desc: 'Exclusive access for currently enrolled CGEC students and staff.' },
  { icon: <ShieldCheck size={20} />, title: 'Safe Environment', desc: 'Well-maintained equipment, proper ventilation, and safety protocols.' },
  { icon: <Clock size={20} />, title: 'Flexible Timings', desc: 'Morning and evening slots to fit any schedule, 6 days a week.' },
  { icon: <Star size={20} />, title: 'Free Access', desc: 'No extra fee — gym access included with your enrollment at CGEC.' },
]

export default function Home() {
  const heroRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const equipRef = useScrollReveal()
  const highlightRef = useScrollReveal()

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef} aria-label="Hero">
        {/* Animated background */}
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        {/* Decorative dumbbell SVG */}
        <div className="hero__deco" aria-hidden="true">
          <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__deco-svg">
            <g opacity="0.12" stroke="#E10600" strokeWidth="6" strokeLinecap="round">
              <rect x="100" y="40" width="120" height="40" rx="10"/>
              <line x1="40" y1="52" x2="100" y2="52"/>
              <line x1="40" y1="68" x2="100" y2="68"/>
              <line x1="220" y1="52" x2="280" y2="52"/>
              <line x1="220" y1="68" x2="280" y2="68"/>
              <rect x="20" y="38" width="28" height="44" rx="8" fill="#E10600" fillOpacity="0.15"/>
              <rect x="272" y="38" width="28" height="44" rx="8" fill="#E10600" fillOpacity="0.15"/>
            </g>
          </svg>
        </div>

        <div className="container hero__content">
          <div className="fade-in">
            <span className="tag">CGEC Student Fitness Facility</span>
          </div>
          <h1 className="display-xl hero__title fade-in" style={{ transitionDelay: '80ms' }}>
            Train Hard.<br />
            <span className="text-gradient">Rise Higher.</span>
          </h1>
          <p className="body-lg hero__subtitle fade-in" style={{ transitionDelay: '160ms' }}>
            CGEC Gymkhana — the official fitness facility for students of College of Government Engineering & Science. 
            Fully equipped, zero extra cost, built for you.
          </p>
          <div className="hero__actions fade-in" style={{ transitionDelay: '240ms' }}>
            <Link to="/register" className="btn btn-primary btn-lg">
              Register Now <ArrowRight size={20} />
            </Link>
            <Link to="/facilities" className="btn btn-outline">
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

      {/* ── CTA BANNER ── */}
      <CtaBanner />
    </div>
  )
}
