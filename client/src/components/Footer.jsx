import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { scrollToTop } from '../App'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()

  const handleLinkClick = (targetPath) => {
    if (location.pathname === targetPath) {
      scrollToTop(false)
    } else {
      scrollToTop(true)
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Link to="/" className="footer__logo-container" onClick={() => handleLinkClick('/')}>
                <img src="/logo.png" alt="CGEC Gymkhana Logo" className="footer__logo-img" />
              </Link>
              <div>
                <Link to="/" className="footer__logo-primary" onClick={() => handleLinkClick('/')} style={{ color: 'inherit', textDecoration: 'none' }}>
                  CGEC Gymkhana
                </Link>
                <div className="footer__logo-sub">Student Fitness Facility</div>
              </div>
            </div>
            <p className="body-sm text-secondary" style={{ marginTop: 'var(--sp-4)', maxWidth: 280, lineHeight: '1.6' }}>
              Your campus fitness destination. Built for student wellness.
            </p>
            <div className="footer__social">
              <a href="https://www.instagram.com/cgecgymkhana/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <Instagram size={18} />
              </a>
              <a href="https://chat.whatsapp.com/LGDuzpvK3bI28UmfkBe1i2" target="_blank" rel="noopener noreferrer" aria-label="Join WhatsApp Group" className="footer__social-link">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.218 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
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
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__link" onClick={() => handleLinkClick(to)}>{label}</Link>
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
                  <Link to={to} className="footer__link" onClick={() => handleLinkClick(to)}>{label}</Link>
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
                <span className="body-sm text-secondary">CGEC Campus, Gym Complex</span>
              </li>
              <li>
                <Phone size={15} className="footer__contact-icon" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a href="tel:+917811924306" className="footer__contact-phone">+91 78119 24306</a>
                  <a href="tel:+919382161228" className="footer__contact-phone">+91 93821 61228</a>
                </div>
              </li>
              <li>
                <Clock size={15} className="footer__contact-icon" />
                <span className="body-sm text-secondary">Mon–Sat: 6:00 AM – 8:00 PM</span>
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
