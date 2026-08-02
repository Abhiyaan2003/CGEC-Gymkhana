import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './CtaBanner.css'

export default function CtaBanner({
  title = 'Ready to Start Your Fitness Journey?',
  subtitle = 'Join hundreds of students at CGEC Gymkhana. Register today — it\'s free for enrolled students.',
  cta = 'Register Now',
  link = '/register',
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
        <Link to={link} className="btn btn-primary btn-lg cta-banner__btn">
          {cta}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  )
}
