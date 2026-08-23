import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './CtaBanner.css'

export default function CtaBanner({
  title = 'Ready to Start Your Fitness Journey?',
  subtitle = 'Join hundreds of students at CGEC Gymkhana. Check back later when new slots open.',
  cta = 'Registrations closed',
}) {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="cta-banner__bg">
        <div className="cta-banner__shape cta-banner__shape--1" aria-hidden="true" />
        <div className="cta-banner__shape cta-banner__shape--2" aria-hidden="true" />
      </div>
      <div className="container cta-banner__inner">
        <div>
          <h2 className="display-md cta-banner__title">{title}</h2>
          <p className="body-lg cta-banner__subtitle">{subtitle}</p>
        </div>
        <button className="btn btn-lg cta-banner__btn" disabled>
          {cta}
        </button>
      </div>
    </section>
  )
}
