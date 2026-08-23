import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import './PageCommon.css'
import './Register.css'

/*
Original Registration Page logic and form commented out below.
*/

export default function Register() {
  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Notice</span>
          <h1 className="display-lg page-hero__title">Registrations closed</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 500 }}>
            Gym registrations are currently closed. Please check back later or contact the Gymkhana Committee for future updates.
          </p>
          <div style={{ marginTop: 'var(--sp-6)' }}>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--sp-8) 0' }}>
          <div className="card" style={{ maxWidth: 600, margin: '0 auto', padding: 'var(--sp-8)' }}>
            <AlertCircle size={48} className="text-red" style={{ margin: '0 auto var(--sp-4)' }} />
            <h2 className="heading-lg" style={{ marginBottom: 'var(--sp-3)' }}>Registrations closed</h2>
            <p className="body-md text-secondary">
              Thank you for your interest in joining CGEC Gymkhana. The registration portal has been closed for the current session.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

/*
COMMENTED OUT REGISTRATION FORM IMPLEMENTATION:

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle, User, Mail, Phone, Hash, BookOpen, Calendar, Users, Clock, Heart, FileText, CreditCard } from 'lucide-react'
import godModeAudio from '../assets/God Mode Begins.mp3'

const departments = [
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Civil Engineering'
]

const years = ['3rd Year', '4th Year']
const slots = ['Morning (6:00 AM – 9:00 AM)', 'Evening (4:00 PM – 8:00 PM)']
const genders = ['Male', 'Female']

const steps = [
  { label: 'Personal Info', icon: <User size={16} /> },
  { label: 'Academic Details', icon: <BookOpen size={16} /> },
  { label: 'Preferences', icon: <Clock size={16} /> },
  { label: 'Payment', icon: <CreditCard size={16} /> },
  { label: 'Confirmation', icon: <FileText size={16} /> },
]

// ... Form implementation commented out
*/
