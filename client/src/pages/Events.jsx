import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Award, ArrowRight, User, Flame } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CoverflowCarousel } from '../components/ui/coverflow-carousel'
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

const pastHighlightsSlides = [
  {
    src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=800&fit=crop&q=80',
    alt: 'Powerlifting Squat Record',
    title: 'Summer Powerlifting Meet 2025',
    subtitle: 'Campus Squat Record Shattered',
    meta: [
      { label: 'Campus Record', value: '180kg Squat' },
      { label: 'Department', value: 'CSE Department' },
      { label: 'Awarded By', value: 'Prof. Somen Mondal' },
      { label: 'Year', value: '2025' }
    ]
  },
  {
    src: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=800&fit=crop&q=80',
    alt: 'Fit-India Campus 5K Marathon',
    title: 'Independence Day Fit-India 5K',
    subtitle: '150+ Student & Faculty Runners',
    meta: [
      { label: 'Turnout', value: '150+ Athletes' },
      { label: 'Pace Lead', value: 'Balaram Mandi' },
      { label: 'Co-Organizer', value: 'Physical Ed. Dept' },
      { label: 'Year', value: '2025' }
    ]
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=800&fit=crop&q=80',
    alt: 'Inter-Dept Arm Wrestling Clash',
    title: 'Arm Wrestling Showdown 2024',
    subtitle: 'Torque & Grip Strength Tournament',
    meta: [
      { label: 'Category', value: 'Heavyweight 80kg+' },
      { label: 'Champion', value: 'Anal Kumar Saren' },
      { label: 'Format', value: '32 Bracket Knockout' },
      { label: 'Year', value: '2024' }
    ]
  },
  {
    src: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=800&fit=crop&q=80',
    alt: 'Calisthenics Pull-up Challenge',
    title: 'Max Rep Calisthenics Slam',
    subtitle: 'Bodyweight Resistance Mastery',
    meta: [
      { label: 'Max Pull-Ups', value: '34 Reps Single Set' },
      { label: 'Plank Hold', value: '8m 45s Static' },
      { label: 'Top Scorer', value: 'Debayan Sarkar' },
      { label: 'Year', value: '2024' }
    ]
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop&q=80',
    alt: 'Winter Bench Press Showdown',
    title: 'Winter Bench Press Clash',
    subtitle: 'Max Single Rep Competition',
    meta: [
      { label: 'Peak Lift', value: '145kg Single Rep' },
      { label: 'Department', value: 'ECE Department' },
      { label: 'Attendance', value: '250+ Spectators' },
      { label: 'Year', value: '2023' }
    ]
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=800&fit=crop&q=80',
    alt: 'Deadlift Monster Meet',
    title: 'Deadlift Monster Meet',
    subtitle: 'Pure Posterior Chain Power',
    meta: [
      { label: 'Max Deadlift', value: '210kg Conventional' },
      { label: 'Lifter', value: 'Abhiyaan Mahato' },
      { label: 'Venue', value: 'Gymkhana Hall' },
      { label: 'Year', value: '2023' }
    ]
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
            <span className="label text-red">What's Coming Up</span>
            <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
            <h2 className="display-md">Scheduled Competitions</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="events-grid" style={{ filter: 'blur(16px)', opacity: 0.18, pointerEvents: 'none', userSelect: 'none', transform: 'translateZ(0)' }}>
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
            <div className="coming-soon-overlay">
              <div className="coming-soon-card">
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

      {/* Past Highlights & Records with Coverflow Carousel */}
      <section className="section past-events-section" ref={ref2}>
        <div className="container">
          <div className="section-header center fade-in">
            <span className="label text-red">Our Legacy</span>
            <div className="divider" style={{ margin: 'var(--sp-3) auto' }} />
            <h2 className="display-md">Past Highlights & Records</h2>
            <p className="body-md text-secondary" style={{ maxWidth: 620, margin: 'var(--sp-3) auto 0' }}>
              Swipe or use keyboard arrow keys to browse through historic athletic achievements and championship moments of CGEC Gymkhana.
            </p>
          </div>

          <div className="fade-in" style={{ marginTop: 'var(--sp-6)' }}>
            <CoverflowCarousel
              slides={pastHighlightsSlides}
              cardWidth="clamp(220px, 28vw, 320px)"
              rotate={42}
              depth={0.55}
              perspective={3.2}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              label="Past Gymkhana Records & Highlights"
              cardClassName="coverflow-carousel-card"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
