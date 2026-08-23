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
    desc: 'A complete selection of free weights for functional and compound strength training, including hexagonal dumbbells and custom bar setups.',
    items: ['Rubber Hexagonal Dumbbells (Light to Heavy sets)', 'Olympic Straight Barbells', 'EZ Curl Barbells', 'Vertical Dumbbell Trees', 'Heavy-Duty Flat & Adjustable Benches'],
    notes: ['Features floor-friendly rubber casing', 'Always use collars on barbells for safety'],
  },
  {
    id: 'cable-stations',
    icon: <Zap size={26} />,
    title: 'Selectorized & Cable Stations',
    tag: 'Precision',
    desc: 'Precision pulley systems and selectorized weight stacks designed for controlled muscle isolation and balanced strength development.',
    items: ['Multi-Station Cable Crossover & Functional Trainer', 'Selectorized Lat Pulldown & Seated Row combination', 'Selectorized Seated Leg Extension & Leg Curl station'],
    notes: ['Pin-loaded stacks for quick weight adjustments', 'Ideal for both beginner guidance and advanced isolation work'],
  },
  {
    id: 'plate-loaded',
    icon: <Activity size={26} />,
    title: 'Plate-Loaded & Heavy Lifting',
    tag: 'Power',
    desc: 'Heavy-duty training stations built for compound movements, high-load capacities, and safety.',
    items: ['45° Incline Plate-Loaded Leg Press Machine', 'Lever-Action Plate-Loaded Chest Press Machine', 'Incline Bench Press Racks with safety spotter steps', 'Squat Stands & Power Cages with integrated pull-up bars', 'Preacher Curl Arm Bench'],
    notes: ['Plate-loaded sleeves (bring your own plates to the machine)', 'Spotting stands available on incline presses'],
  },
  {
    id: 'stretching',
    icon: <Footprints size={26} />,
    title: 'Stretching & Core Zone',
    tag: 'Recovery',
    desc: 'Dedicated space for core conditioning, spinal health, and warm-up/cool-down mobility work.',
    items: ['Roman Chair / 45° Hyperextension Bench', 'Interlocking EVA Foam Floor Mats', 'Resistance Bands (Light to Heavy tension)', 'Speed Jump Ropes', 'Pull-up and Dip handles'],
    notes: ['Always warm up and stretch here before heavy lifts'],
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
            Everything from free weights to cable and plate-loaded machines — a complete, audited setup for your fitness journey.
          </p>
          <div style={{ marginTop: 'var(--sp-6)' }}>
            <button className="btn" disabled>
              Registrations closed
            </button>
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


