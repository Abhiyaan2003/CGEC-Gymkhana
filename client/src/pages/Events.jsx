import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Award, ArrowRight, User, Flame } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CtaBanner from '../components/CtaBanner'
import './PageCommon.css'
import './Events.css'

const upcomingEvents = [
  {
    title: 'Annual CGEC Powerlifting Championship',
    tag: 'Championship',
    desc: 'Showcase your peak strength! The annual Squat, Bench Press, and Deadlift meet is open to all registered gym members across multiple weight categories.',
    date: 'October 12, 2026',
    time: '10:00 AM – 4:00 PM',
    venue: 'Student Gymkhana Hall',
    coordinator: 'Abhiyaan Mahato & Debayan Sarkar',
    status: 'Registering',
    registerPath: '/register'
  },
  {
    title: 'Calisthenics & Core Endurance Challenge',
    tag: 'Fitness Test',
    desc: 'A pure test of bodyweight strength and stamina. Compete for maximum pull-ups, parallel bar dips, push-ups, and static core plank holds.',
    date: 'November 05, 2026',
    time: '4:30 PM – 6:30 PM',
    venue: 'Gym Lawn / Indoor Hall',
    coordinator: 'Balaram Mandi & Mousumi Khan',
    status: 'Upcoming',
    registerPath: '/register'
  },
  {
    title: 'Inter-Departmental Arm Wrestling Clash',
    tag: 'Tournament',
    desc: 'Bring the torque! A bracket-style arm wrestling tournament divided by weight categories. Winners get departmental bragging rights and trophies.',
    date: 'November 20, 2026',
    time: '2:00 PM – 5:00 PM',
    venue: 'Student Common Room',
    coordinator: 'Anal Kumar Saren',
    status: 'Upcoming',
    registerPath: '/register'
  }
]

const pastHighlights = [
  {
    title: 'Summer Powerlifting Meet 2025',
    achievement: '180kg Squat Record Set',
    desc: 'A remarkable athletic turnout where the campus squat record was pushed to a massive 180kg by CSE department students. Trophies were awarded by Prof. Somen Mondal.'
  },
  {
    title: 'Independence Day Fit-India 5K Run',
    achievement: '150+ Student Runners',
    desc: 'Jointly organized with the Physical Education Department to promote wellness. Coordinated successfully by Balaram Mandi with certificate distribution to all finishers.'
  }
]

export default function Events() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Campus Life</span>
          <h1 className="display-lg page-hero__title">Events & Challenges</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 560 }}>
            Stay active, test your limits, and represent your department in our regular campus fitness events and competitions.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section" ref={ref1}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">What\'s Coming Up</span>
            <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
            <h2 className="display-md">Scheduled Competitions</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="events-grid" style={{ filter: 'blur(5px)', opacity: 0.35, pointerEvents: 'none', userSelect: 'none' }}>
              {upcomingEvents.map((evt, idx) => (
                <div key={evt.title} className="fade-in" style={{ transitionDelay: `${idx * 80}ms` }}>
                  <div className="card card-red-hover event-card">
                    <div className="event-card__header">
                      <span className="tag">{evt.tag}</span>
                      <span className={`label ${evt.status === 'Registering' ? 'text-red' : 'text-muted'}`}>
                        {evt.status}
                      </span>
                    </div>
                    <h3 className="heading-lg" style={{ marginTop: 'var(--sp-2)' }}>{evt.title}</h3>
                    <p className="body-sm text-secondary" style={{ marginTop: 'var(--sp-3)' }}>{evt.desc}</p>
                    
                    <div className="event-card__meta">
                      <div className="event-meta-item">
                        <Calendar size={15} />
                        <span>{evt.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <Clock size={15} />
                        <span>{evt.time}</span>
                      </div>
                      <div className="event-meta-item">
                        <MapPin size={15} />
                        <span>{evt.venue}</span>
                      </div>
                      <div className="event-meta-item">
                        <User size={15} />
                        <span>Coordinators: {evt.coordinator}</span>
                      </div>
                    </div>

                    <div className="event-card__footer">
                      {evt.status === 'Registering' ? (
                        <Link to={evt.registerPath} className="btn btn-outline btn-sm w-full">
                          Register Now <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <button className="btn btn-sm btn-disabled w-full" disabled>
                          Registrations Not Open
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              padding: 'var(--sp-4)'
            }}>
              <div style={{
                background: 'rgba(10, 10, 10, 0.8)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                padding: 'var(--sp-6) var(--sp-10)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                maxWidth: '360px'
              }}>
                <h3 className="display-sm text-gradient" style={{ margin: 0, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red-500)' }}>
                  Coming Soon
                </h3>
                <p className="body-sm text-secondary" style={{ marginTop: 'var(--sp-2)', marginBottom: 0 }}>
                  We are finalising dates and guidelines. Stay tuned for registration updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="section past-events-section" ref={ref2}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">Our Legacy</span>
            <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
            <h2 className="display-md">Past Highlights & Records</h2>
          </div>

          <div className="highlight-grid">
            {pastHighlights.map((hl, idx) => (
              <div key={hl.title} className="fade-in" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', marginBottom: 'var(--sp-3)' }}>
                    <div className="icon-box" style={{ width: 42, height: 42, color: 'var(--red-500)' }}>
                      <Award size={18} />
                    </div>
                    <div>
                      <span className="label text-red" style={{ fontSize: '11px' }}>{hl.achievement}</span>
                      <h3 className="heading-md" style={{ marginTop: '2px' }}>{hl.title}</h3>
                    </div>
                  </div>
                  <p className="body-sm text-secondary">{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
