import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { scrollToTop } from '../App'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/events', label: 'Events' },
  { to: '/rules', label: 'Rules' },
  { to: '/terms', label: 'Terms' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleNavClick = (targetPath) => {
    setIsOpen(false)
    if (location.pathname === targetPath) {
      scrollToTop(false)
    } else {
      scrollToTop(true)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          aria-label="CGEC Gymkhana Home"
          onClick={() => handleNavClick('/')}
        >
          <div className="navbar__logo-container">
            <img src="/logo.png" alt="CGEC Gymkhana Logo" className="navbar__logo-img" />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-primary">CGEC</span>
            <span className="navbar__logo-secondary">Gymkhana</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => handleNavClick(to)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <button
            className="btn btn-sm navbar__cta"
            disabled
          >
            Registrations closed
          </button>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={() => handleNavClick(to)}
            >
              {label}
            </NavLink>
          ))}
          <button
            className="btn w-full navbar__mobile-cta"
            disabled
            style={{ marginTop: 'var(--sp-3)' }}
          >
            Registrations closed
          </button>
        </nav>
      </div>
    </header>
  )
}
