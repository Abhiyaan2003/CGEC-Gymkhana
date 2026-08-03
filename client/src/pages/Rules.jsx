import { ShieldAlert, Clock, User, Lock, AlertTriangle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './PageCommon.css'
import './Rules.css'

const ruleCategories = [
  {
    icon: <ShieldAlert size={20} />,
    title: 'Gym Etiquette',
    rules: [
      { title: 'Re-rack weights after use', desc: 'Always return weights to their designated racks/holders after completing your set. Leaving weights unattended is a safety hazard.' },
      { title: 'Wipe equipment after use', desc: 'Use the provided sanitizer and towels to clean all surfaces (benches, handles, seats) after each use.' },
      { title: 'Proper attire required', desc: 'Wear appropriate workout attire — sports shoes, athletic wear. Street clothes, sandals, and footwear with open toes are strictly prohibited.' },
      { title: 'Maintain personal hygiene', desc: 'Deodorant is required. Carry a personal towel for sweat management. Strong fragrances are discouraged in the gym area.' },
      { title: 'No dropping weights', desc: 'Lower weights with control. Slamming or dropping plates, dumbbells, or barbells is not permitted.' },
    ],
  },
  {
    icon: <Clock size={20} />,
    title: 'Timing & Attendance',
    rules: [
      { title: 'Respect your assigned slot', desc: 'Entry is only permitted during your registered morning or evening slot. Arriving early or overstaying disrupts others.' },
      { title: 'Punctuality is mandatory', desc: 'Sessions begin on time. Late entry beyond 15 minutes of your slot start may result in denial of entry for that session.' },
      { title: 'Advance slot booking required', desc: 'Slots must be booked or confirmed through the designated system before visiting.' },
    ],
  },
  {
    icon: <User size={20} />,
    title: 'Eligibility & Access',
    rules: [
      { title: 'Valid student/staff ID required', desc: 'You must carry a valid CGEC student ID or staff card at all times. ID will be checked at entry — no exceptions.' },
      { title: 'Currently enrolled students only', desc: 'Access is restricted to students with active enrollment status and CGEC staff. Alumni and external guests are not permitted.' },
      { title: 'Prioritized for 3rd & 4th Year', desc: 'Due to equipment limits and space constraints, slot allocations are prioritized primarily for 3rd and 4th-year students.' },
      { title: 'No sharing of access or ID', desc: 'Sharing your gym registration or ID with another person is a violation and will result in immediate suspension.' },
      { title: 'Guest policy — restricted', desc: 'External guests, friends, or non-enrolled individuals cannot be brought into the gym. Only registered members may enter.' },
    ],
  },
  {
    icon: <Lock size={20} />,
    title: 'Lockers & Valuables',
    rules: [
      { title: 'Use lockers at your own risk', desc: 'The Gymkhana and CGEC administration are not responsible for loss of valuables. Do not leave expensive items unattended.' },
      { title: 'Clear lockers after each session', desc: 'Lockers are for use during your session only. Items left overnight will be removed.' },
    ],
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Safety & Consequences',
    rules: [
      { title: 'No unsupervised heavy lifting for beginners', desc: 'First-time users performing heavy barbell lifts must request supervision or a spotter from senior members or staff present.' },
      { title: 'Seek help for injuries', desc: 'Report any injury or equipment malfunction to the in-charge immediately. Do not attempt to continue workouts while injured.' },
      { title: 'No rough conduct', desc: 'Fighting, verbal abuse, intimidation, or harassment will result in permanent ban and disciplinary action by college authorities.' },
      { title: 'Consequences for violations', desc: 'Minor violations: verbal warning. Repeated violations: suspension of gym access (1–4 weeks). Serious violations: permanent ban + report to Dean/HOD.' },
    ],
  },
]

export default function Rules() {
  const ref = useScrollReveal()

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Guidelines</span>
          <h1 className="display-lg page-hero__title">Rules & Regulations</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 560 }}>
            These rules exist to ensure a safe, respectful, and productive environment for all members. Please read carefully before your first session.
          </p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-10)' }}>
            {ruleCategories.map(({ icon, title, rules }, catIdx) => (
              <div key={title} className="fade-in" style={{ transitionDelay: `${catIdx * 80}ms` }}>
                <div className="rules-category-header">
                  <div className="icon-box">{icon}</div>
                  <h2 className="display-sm">{title}</h2>
                </div>
                <div className="rules-list" style={{ marginTop: 'var(--sp-5)' }}>
                  {rules.map(({ title: ruleTitle, desc }, rIdx) => (
                    <div key={ruleTitle} className="rule-item">
                      <div className="rule-number">{String(rIdx + 1).padStart(2, '0')}</div>
                      <div className="rule-content">
                        <h3 className="heading-sm rule-title">{ruleTitle}</h3>
                        <p className="body-sm text-secondary">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rules-footer-note fade-in" style={{ marginTop: 'var(--sp-12)' }}>
            <AlertTriangle size={18} className="rules-footer-note__icon" />
            <p className="body-sm text-secondary">
              <strong style={{ color: 'var(--text-primary)' }}>Important:</strong> These rules are subject to update at the discretion of the Physical Education Department. 
              Members are expected to stay informed. Ignorance of rules is not an accepted excuse for violations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
