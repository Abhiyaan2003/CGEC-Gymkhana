import { useScrollReveal } from '../hooks/useScrollReveal'
import './PageCommon.css'
import './Terms.css'

const terms = [
  {
    id: 'eligibility',
    title: '1. Eligibility',
    content: null,
    list: [
      'Access to the CGEC Gymkhana is restricted to currently enrolled students of the College of Government Engineering & Science (CGEC) and authorized staff members.',
      'Enrollment status is verified each academic semester. Students who are on leave, have graduated, or are otherwise not active are not eligible.',
      'A valid, government-issued student ID or college-issued identification card must be presented upon entry.',
      'The management reserves the right to verify eligibility at any time and may deny access to those who cannot provide valid identification.',
    ],
  },
  {
    id: 'access-terms',
    title: '2. Access & Duration',
    content: null,
    list: [
      'Gym access is tied to your current academic year/semester. Access lapses at the end of each semester and must be renewed at the start of the next term.',
      'Renewal requires re-registering via the official registration form and confirmation from the Physical Education Department.',
      'Slots (morning/evening) are allocated based on availability at the time of registration. Preferred slots cannot be guaranteed.',
      'Access can be revoked at any time for violations of rules, disciplinary issues, or non-renewal within the specified period.',
    ],
  },
  {
    id: 'fee-policy',
    title: '3. Fee & Refund Policy',
    content: 'Access to the CGEC Gymkhana is currently provided free of charge to all eligible enrolled students as part of the institution\'s student welfare initiatives. No separate gym fee is applicable at this time.',
    list: [
      'If a nominal registration or maintenance fee is introduced in future academic years, it will be communicated via official notice.',
      'Any fees paid (if applicable in future) are non-refundable once the access period has commenced.',
      'Fee-related queries must be addressed to the Physical Education Department or Finance Office.',
    ],
  },
  {
    id: 'liability',
    title: '4. Liability Waiver & Injury Disclaimer',
    content: 'By registering and using the CGEC Gymkhana, members acknowledge the inherent risks associated with physical exercise and use of gym equipment.',
    list: [
      'CGEC and the Physical Education Department shall not be held liable for any injury, illness, or death arising from the use of gym facilities, unless caused by proven gross negligence on the part of the institution.',
      'Members are responsible for ensuring they are medically fit to engage in physical activity. If you have a known medical condition, consult a physician before commencing any exercise.',
      'Emergency contact details provided at the time of registration will be used in case of a medical emergency.',
      'The gym is partially supervised. Members undertake exercise at their own risk during periods of reduced supervision.',
      'CGEC is not liable for loss, theft, or damage to personal property within the gym premises.',
    ],
  },
  {
    id: 'usage-rights',
    title: '5. Facility Usage Rights & Restrictions',
    content: null,
    list: [
      'Gym equipment is for use by registered members only during their designated slot. Equipment may not be reserved or monopolized.',
      'Personal training or coaching of non-members within the facility is prohibited.',
      'Photography or videography within the gym area requires prior written permission from the administration.',
      'Commercial use of the facility (e.g., selling fitness services, conducting classes for profit) is strictly prohibited.',
      'Any modification, relocation, or tampering with equipment is not permitted.',
    ],
  },
  {
    id: 'amendments',
    title: '6. Changes to Terms',
    content: 'CGEC and the Physical Education Department reserve the right to amend, update, or revise these Terms & Conditions at any time without prior individual notice.',
    list: [
      'Updated terms will be posted at the gym notice board and on the official gym portal/website.',
      'Continued use of gym facilities after a change in terms constitutes acceptance of the revised terms.',
      'Members are encouraged to periodically review these terms to stay informed of any changes.',
    ],
  },
]

export default function Terms() {
  const ref = useScrollReveal()

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Legal</span>
          <h1 className="display-lg page-hero__title">Terms & Conditions</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 560 }}>
            Please read these terms carefully before registering. By submitting the registration form, you agree to all conditions stated here.
          </p>
          <p className="body-xs text-muted" style={{ marginTop: 'var(--sp-4)' }}>
            Last updated: Academic Year 2025–26
          </p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="terms-section">
            {terms.map(({ id, title, content, list }, i) => (
              <div key={id} id={id} className="terms-block fade-in" style={{ transitionDelay: `${i * 60}ms` }}>
                <h2 className="display-sm terms-block__title">{title}</h2>
                {content && (
                  <p className="terms-block__content body-md">{content}</p>
                )}
                {list && (
                  <ul className="terms-block__list">
                    {list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="terms-footer fade-in" style={{ marginTop: 'var(--sp-12)' }}>
            <p className="body-sm text-muted">
              For any clarification regarding these terms, contact the Physical Education Department at <a href="mailto:gymkhana@cgec.ac.in" style={{ color: 'var(--red-400)' }}>gymkhana@cgec.ac.in</a> or visit the Sports Office during working hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
