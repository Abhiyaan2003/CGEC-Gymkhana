import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './PageCommon.css'
import './Contact.css'

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Ground Floor, Sports Block\nCGEC Campus, [City], [State] — 000000',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 99999 00000',
    href: 'tel:+919999900000',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'gymkhana@cgec.ac.in',
    href: 'mailto:gymkhana@cgec.ac.in',
  },
  {
    icon: <Clock size={20} />,
    label: 'Operating Hours',
    value: 'Monday – Saturday\nMorning: 6:00 AM – 9:00 AM\nEvening: 4:00 PM – 8:00 PM\nSunday: Closed',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const ref = useScrollReveal()

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Get in Touch</span>
          <h1 className="display-lg page-hero__title">Contact Us</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 500 }}>
            Have a question about membership, equipment, or timings? We're here to help.
          </p>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="display-sm fade-in" style={{ marginBottom: 'var(--sp-8)' }}>
                Find Us Here
              </h2>

              <div className="contact-cards">
                {contactInfo.map(({ icon, label, value, href }, i) => (
                  <div key={label} className="card card-red-hover contact-card fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="icon-box contact-card__icon">{icon}</div>
                    <div>
                      <div className="label text-muted" style={{ marginBottom: 'var(--sp-1)' }}>{label}</div>
                      {href ? (
                        <a href={href} className="body-md contact-card__link">{value}</a>
                      ) : (
                        <p className="body-md text-secondary" style={{ whiteSpace: 'pre-line' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed (placeholder) */}
              <div className="contact-map fade-in" aria-label="Campus map">
                <div className="contact-map__inner">
                  <div className="contact-map__placeholder">
                    <MapPin size={32} className="contact-map__icon" />
                    <p className="body-sm text-secondary">
                      Embedded Google Map<br />
                      <span className="body-xs text-muted">(Add your Google Maps embed URL here)</span>
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: 'var(--sp-4)' }}
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col fade-in" style={{ transitionDelay: '200ms' }}>
              <div className="card contact-form-card">
                <h2 className="display-sm" style={{ marginBottom: 'var(--sp-2)' }}>Send a Message</h2>
                <p className="body-sm text-secondary" style={{ marginBottom: 'var(--sp-8)' }}>
                  We'll get back to you within 1–2 working days.
                </p>

                {submitted ? (
                  <div className="contact-success">
                    <CheckCircle size={48} className="contact-success__icon" />
                    <h3 className="heading-lg" style={{ marginTop: 'var(--sp-4)' }}>Message Sent!</h3>
                    <p className="body-md text-secondary" style={{ marginTop: 'var(--sp-2)' }}>
                      Thank you for reaching out. Our team will contact you soon.
                    </p>
                    <button
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: 'var(--sp-6)' }}
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          className={`form-control ${errors.name ? 'error' : ''}`}
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange('name')}
                          autoComplete="name"
                        />
                        {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className={`form-control ${errors.email ? 'error' : ''}`}
                          placeholder="your.email@cgec.ac.in"
                          value={form.email}
                          onChange={handleChange('email')}
                          autoComplete="email"
                        />
                        {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-phone" className="form-label">Phone (optional)</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          className="form-control"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          autoComplete="tel"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-message" className="form-label">
                          Message <span className="required">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          className={`form-control ${errors.message ? 'error' : ''}`}
                          placeholder="What would you like to know?"
                          rows={5}
                          value={form.message}
                          onChange={handleChange('message')}
                        />
                        {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Send Message <Send size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
