import { Link } from 'react-router-dom'
import {
  Dumbbell, Heart, Zap, Footprints, Bike, Activity,
  StretchVertical, Wind, ArrowRight, CheckCircle
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CtaBanner from '../components/CtaBanner'
import './PageCommon.css'
import './Facilities.css'

const sections = [
  {
    id: 'free-weights',
    icon: <Dumbbell size={26} />,
    title: 'Free Weights Area',
    tag: 'Strength',
    desc: 'Comprehensive free weights section with a full range of dumbbells (2kg–40kg), barbells, EZ bars, and weight plates. Ideal for compound lifts and isolation exercises.',
    items: ['Adjustable dumbbells (2kg–40kg)', 'Standard & Olympic barbells', 'EZ curl bars', 'Weight plates (1.25kg–20kg)', 'Flat, incline & decline benches'],
    notes: ['Suitable for all fitness levels', 'Spot assistance available upon request'],
  },
  {
    id: 'cardio',
    icon: <Heart size={26} />,
    title: 'Cardio Zone',
    tag: 'Cardio',
    desc: 'High-performance cardio equipment for warming up, interval training, and endurance sessions. All machines have built-in heart rate monitors.',
    items: ['Treadmills (motorized)', 'Upright & recumbent cycles', 'Elliptical cross-trainers', 'Rowing machine', 'Stair climber'],
    notes: ['Beginner-friendly', 'Digital displays with preset programs'],
  },
  {
    id: 'multi-gym',
    icon: <Zap size={26} />,
    title: 'Multi-Gym Station',
    tag: 'Functional',
    desc: 'Multi-functional cable system and selectorized weight stations for full-body workouts. Great for pulling, pushing, and isolation exercises.',
    items: ['Cable crossover machine', 'Lat pulldown station', 'Chest press machine', 'Leg press & leg extension', 'Shoulder press station', 'Seated row machine'],
    notes: ['Requires supervision for first-time users', 'Adjustable weight stacks'],
  },
  {
    id: 'stretching',
    icon: <Activity size={26} />,
    title: 'Stretching & Core Area',
    tag: 'Recovery',
    desc: 'Dedicated open floor space for mobility work, core training, and warm-up/cool-down routines with quality equipment.',
    items: ['Yoga mats (8+)', 'Foam rollers', 'Resistance bands (multiple levels)', 'Pull-up & dip station', 'Ab roller & core boards'],
    notes: ['Always warm up here before heavy lifting'],
  },
]

export default function Facilities() {
  const headerRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">What We Have</span>
          <h1 className="display-lg page-hero__title">Facilities & Equipment</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 560 }}>
            Everything from free weights to cardio machines — a complete setup for your fitness journey, all on campus.
          </p>
          <div style={{ marginTop: 'var(--sp-6)' }}>
            <Link to="/register" className="btn btn-primary">
              Register to Access <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick-jump nav */}
      <div className="facilities-nav" ref={headerRef}>
        <div className="container facilities-nav__inner">
          {sections.map(({ id, title }) => (
            <a key={id} href={`#${id}`} className="facilities-nav__link body-sm">
              {title}
            </a>
          ))}
        </div>
      </div>

      {/* Equipment Sections */}
      <div className="section" ref={cardsRef}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)' }}>
            {sections.map(({ id, icon, title, tag, desc, items, notes }, idx) => (
              <div key={id} id={id} className="fade-in facility-section" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="card card-red-hover">
                  <div className="facility-card">
                    <div className="icon-box" style={{ width: 60, height: 60 }}>{icon}</div>
                    <div className="facility-card__body">
                      <div className="facility-card__tags">
                        <span className="tag">{tag}</span>
                      </div>
                      <h2 className="display-sm facility-card__title" style={{ marginTop: 'var(--sp-3)' }}>{title}</h2>
                      <p className="body-md text-secondary" style={{ marginTop: 'var(--sp-3)', marginBottom: 'var(--sp-5)' }}>{desc}</p>

                      <div className="facility-card__details">
                        <div className="facility-card__col">
                          <h3 className="label text-muted" style={{ marginBottom: 'var(--sp-3)' }}>Equipment Available</h3>
                          <ul className="facility-list">
                            {items.map((item) => (
                              <li key={item} className="facility-list__item">
                                <CheckCircle size={14} className="facility-list__icon" />
                                <span className="body-sm text-secondary">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {notes.length > 0 && (
                          <div className="facility-card__notes">
                            <h3 className="label text-muted" style={{ marginBottom: 'var(--sp-3)' }}>Usage Notes</h3>
                            {notes.map((note) => (
                              <div key={note} className="facility-note body-sm">
                                <span className="facility-note__dot" />
                                {note}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  )
}
