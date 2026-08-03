import { Link } from 'react-router-dom'
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Dumbbell size={18} strokeWidth={2.5} />
              </div>
              <div>
                <div className="footer__logo-primary">CGEC Gymkhana</div>
                <div className="footer__logo-sub">Student Fitness Facility</div>
              </div>
            </div>
            <p className="body-sm text-secondary" style={{ marginTop: 'var(--sp-4)', maxWidth: 280 }}>
              Your campus fitness destination. Powered by the Physical Education Department, built for student wellness.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" className="footer__social-link"><Instagram size={18} /></a>
              <a href="#" aria-label="YouTube" className="footer__social-link"><Youtube size={18} /></a>
              <a href="#" aria-label="Facebook" className="footer__social-link"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/facilities', label: 'Facilities' },
                { to: '/events', label: 'Events' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="footer__col">
            <h3 className="footer__col-title">Policies</h3>
            <ul className="footer__links">
              {[
                { to: '/rules', label: 'Rules & Regulations' },
                { to: '/terms', label: 'Terms & Conditions' },
                { to: '/register', label: 'Register Now' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={15} className="footer__contact-icon" />
                <span className="body-sm text-secondary">CGEC Campus, Ground Floor, Sports Block</span>
              </li>
              <li>
                <Phone size={15} className="footer__contact-icon" />
                <span className="body-sm text-secondary">+91 99999 00000</span>
              </li>
              <li>
                <Mail size={15} className="footer__contact-icon" />
                <span className="body-sm text-secondary">gymkhana@cgec.ac.in</span>
              </li>
              <li>
                <Clock size={15} className="footer__contact-icon" />
                <span className="body-sm text-secondary">Mon–Sat: 6AM–8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="body-xs text-muted">
            &copy; {year} CGEC Gymkhana. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/rules" className="footer__bottom-link">Rules</Link>
            <Link to="/terms" className="footer__bottom-link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
