import { Target, Users, Award, BookOpen } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import CtaBanner from '../components/CtaBanner'
import './PageCommon.css'

const milestones = [
  { year: '2018', event: 'Gymkhana established by Physical Education Department' },
  { year: '2020', event: 'Major equipment upgrade — cardio zone introduced' },
  { year: '2022', event: 'Crossed 300 active student members' },
  { year: '2024', event: 'Inter-college fitness event hosted on campus' },
  { year: '2025', event: 'Slot-based booking system introduced' },
]

const team = [
  { role: 'Gym In-Charge', name: 'Physical Education Department', desc: 'Oversees daily operations, safety, and equipment maintenance.' },
  { role: 'Student Committee', name: 'Sports & Wellness Council', desc: 'Elected student body that manages scheduling and member communication.' },
]

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()

  return (
    <div>
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Our Story</span>
          <h1 className="display-lg page-hero__title">About the Gymkhana</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 560 }}>
            A student-run fitness initiative powered by passion, purpose, and the drive to keep the CGEC community healthy and active.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" ref={ref1}>
        <div className="container">
          <div className="about-mission fade-in">
            <div className="about-mission__text">
              <span className="label text-red">Our Mission</span>
              <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
              <h2 className="display-md">Fitness is a Right, Not a Privilege</h2>
              <p className="body-lg text-secondary" style={{ marginTop: 'var(--sp-4)', lineHeight: 1.8 }}>
                The CGEC Gymkhana was founded on a simple belief: every student deserves access to a safe, 
                well-equipped fitness space — without the burden of additional fees. Operating under the 
                Physical Education Department, we provide a structured, welcoming environment where students 
                can prioritize their physical health alongside academics.
              </p>
              <p className="body-md text-secondary" style={{ marginTop: 'var(--sp-4)', lineHeight: 1.8 }}>
                Whether you're a first-year just starting out or a final-year seasoned athlete, our facility 
                is designed to support your journey at every stage.
              </p>
            </div>
            <div className="about-mission__visual" aria-hidden="true">
              <div className="about-visual-card">
                <Target size={48} strokeWidth={1.5} className="about-visual-icon" />
                <div className="about-visual-text">
                  <div className="display-sm text-gradient">Wellness</div>
                  <div className="body-sm text-muted">First. Always.</div>
                </div>
                <div className="about-visual-dots">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="about-visual-dot" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section about-stats-section" ref={ref2}>
        <div className="container">
          <div className="grid-4" style={{ gap: 'var(--sp-4)' }}>
            {[
              { icon: <Users size={22} />, value: '500+', label: 'Active Members' },
              { icon: <Award size={22} />, value: '5+', label: 'Years of Service' },
              { icon: <BookOpen size={22} />, value: '40+', label: 'Equipment Units' },
              { icon: <Target size={22} />, value: '6', label: 'Days a Week' },
            ].map(({ icon, value, label }, i) => (
              <div key={label} className="card card-red-hover about-stat fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="icon-box" style={{ marginBottom: 'var(--sp-4)' }}>{icon}</div>
                <div className="display-md text-gradient" style={{ fontSize: '42px' }}>{value}</div>
                <div className="label text-muted" style={{ marginTop: 'var(--sp-2)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Manages */}
      <section className="section" ref={ref3}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="label text-red">Management</span>
            <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
            <h2 className="display-md">Who Runs the Gymkhana</h2>
          </div>
          <div className="grid-2" style={{ marginTop: 'var(--sp-8)' }}>
            {team.map(({ role, name, desc }, i) => (
              <div key={role} className="card card-red-hover fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="tag" style={{ marginBottom: 'var(--sp-4)' }}>{role}</div>
                <h3 className="heading-lg" style={{ marginBottom: 'var(--sp-2)' }}>{name}</h3>
                <p className="body-md text-secondary">{desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="about-timeline fade-in" style={{ marginTop: 'var(--sp-16)' }}>
            <div className="section-header">
              <span className="label text-red">Milestones</span>
              <div className="divider" style={{ margin: 'var(--sp-3) 0' }} />
              <h2 className="display-md">Our Journey</h2>
            </div>
            <div className="timeline">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="timeline__item">
                  <div className="timeline__dot" />
                  <div className="timeline__year">{year}</div>
                  <div className="timeline__event body-md text-secondary">{event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
