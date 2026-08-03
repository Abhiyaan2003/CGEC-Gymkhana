import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle, User, Mail, Phone, Hash, BookOpen, Calendar, Users, Clock, Heart, FileText } from 'lucide-react'
import './PageCommon.css'
import './Register.css'

const departments = [
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Civil Engineering',
  'Information Technology',
  'Other',
]

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Staff']
const slots = ['Morning (6:00 AM – 9:00 AM)', 'Evening (4:00 PM – 8:00 PM)']
const genders = ['Male', 'Female', 'Other', 'Prefer not to say']

const steps = [
  { label: 'Personal Info', icon: <User size={16} /> },
  { label: 'Academic Details', icon: <BookOpen size={16} /> },
  { label: 'Preferences', icon: <Clock size={16} /> },
  { label: 'Confirmation', icon: <FileText size={16} /> },
]

export default function Register() {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const stepFields = [
    ['fullName', 'email', 'phone', 'dob', 'gender'],
    ['rollNumber', 'department', 'year'],
    ['slot', 'emergencyName', 'emergencyPhone'],
    ['agree'],
  ]

  const nextStep = async () => {
    const valid = await trigger(stepFields[currentStep])
    if (valid) setCurrentStep((s) => s + 1)
  }

  const prevStep = () => setCurrentStep((s) => s - 1)

  const onSubmit = (data) => {
    console.log('Registration data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="register-success-page">
        <div className="register-success-card">
          <div className="register-success-icon">
            <CheckCircle size={64} />
          </div>
          <h1 className="display-md" style={{ marginTop: 'var(--sp-6)' }}>Registration Submitted!</h1>
          <p className="body-lg text-secondary" style={{ marginTop: 'var(--sp-4)', maxWidth: 480 }}>
            Thank you <strong style={{ color: 'var(--text-primary)' }}>{getValues('fullName')}</strong>! 
            Your gym registration has been received. Our team will contact you at <strong style={{ color: 'var(--text-primary)' }}>{getValues('email')}</strong> within 2–3 working days to confirm your slot and complete onboarding.
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-4)', marginTop: 'var(--sp-8)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/rules" className="btn btn-outline">Read the Rules</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true">
          <div className="page-hero__orb" />
        </div>
        <div className="container page-hero__content">
          <span className="label text-red">Join the Gymkhana</span>
          <h1 className="display-lg page-hero__title">Register Now</h1>
          <p className="body-lg text-secondary" style={{ maxWidth: 500 }}>
            Fill out the form below to request access. All fields marked with <span style={{ color: 'var(--red-500)' }}>*</span> are required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="register-layout">
            {/* Sidebar info */}
            <div className="register-sidebar">
              <div className="register-sidebar__card">
                <h3 className="heading-md" style={{ marginBottom: 'var(--sp-5)' }}>What happens next?</h3>
                <div className="register-steps-info">
                  {['Submit your registration form', 'Admin reviews your details', 'You receive a confirmation email', 'Show your ID and start training!'].map((step, i) => (
                    <div key={i} className="register-step-info">
                      <div className="register-step-info__num">{i + 1}</div>
                      <p className="body-sm text-secondary">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="register-sidebar__card register-sidebar__note">
                <AlertCircle size={18} className="text-red" style={{ flexShrink: 0 }} />
                <p className="body-sm text-secondary">
                  By submitting, you confirm that you are a current CGEC student/staff. Please note that gym slots are primarily prioritized and reserved for 3rd & 4th-year students due to space constraints. 
                  You also agree to abide by all{' '}
                  <Link to="/rules" style={{ color: 'var(--red-400)' }}>Rules & Regulations</Link> and{' '}
                  <Link to="/terms" style={{ color: 'var(--red-400)' }}>Terms & Conditions</Link>.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="register-form-col">
              {/* Progress steps */}
              <div className="register-progress" aria-label="Registration progress">
                {steps.map((step, i) => (
                  <div
                    key={step.label}
                    className={`register-progress__step ${i < currentStep ? 'done' : ''} ${i === currentStep ? 'active' : ''}`}
                    aria-current={i === currentStep ? 'step' : undefined}
                  >
                    <div className="register-progress__icon">{i < currentStep ? <CheckCircle size={14} /> : step.icon}</div>
                    <span className="register-progress__label">{step.label}</span>
                    {i < steps.length - 1 && <div className={`register-progress__line ${i < currentStep ? 'done' : ''}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="card register-form-card">
                  {/* Step 0: Personal Info */}
                  {currentStep === 0 && (
                    <div className="register-step" aria-labelledby="step0-heading">
                      <h2 id="step0-heading" className="display-sm register-step__title">Personal Information</h2>
                      <div className="register-fields">
                        <div className="form-group">
                          <label htmlFor="fullName" className="form-label">Full Name <span className="required">*</span></label>
                          <input id="fullName" type="text" className={`form-control ${errors.fullName ? 'error' : ''}`}
                            placeholder="As per college records"
                            autoComplete="name"
                            {...register('fullName', { required: 'Full name is required' })} />
                          {errors.fullName && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.fullName.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="email" className="form-label">College Email <span className="required">*</span></label>
                          <input id="email" type="email" className={`form-control ${errors.email ? 'error' : ''}`}
                            placeholder="yourname@cgec.ac.in"
                            autoComplete="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
                            })} />
                          {errors.email && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
                          <input id="phone" type="tel" className={`form-control ${errors.phone ? 'error' : ''}`}
                            placeholder="+91 XXXXX XXXXX"
                            autoComplete="tel"
                            {...register('phone', {
                              required: 'Phone number is required',
                              pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian phone number' }
                            })} />
                          {errors.phone && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.phone.message}</span>}
                          <span className="form-helper">Enter 10-digit number without country code</span>
                        </div>

                        <div className="form-group">
                          <label htmlFor="dob" className="form-label">Date of Birth <span className="required">*</span></label>
                          <input id="dob" type="date" className={`form-control ${errors.dob ? 'error' : ''}`}
                            {...register('dob', { required: 'Date of birth is required' })} />
                          {errors.dob && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.dob.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="gender" className="form-label">Gender <span className="required">*</span></label>
                          <select id="gender" className={`form-control ${errors.gender ? 'error' : ''}`}
                            {...register('gender', { required: 'Please select gender' })}>
                            <option value="">Select gender</option>
                            {genders.map((g) => <option key={g} value={g}>{g}</option>)}
                          </select>
                          {errors.gender && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.gender.message}</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1: Academic */}
                  {currentStep === 1 && (
                    <div className="register-step" aria-labelledby="step1-heading">
                      <h2 id="step1-heading" className="display-sm register-step__title">Academic Details</h2>
                      <div className="register-fields">
                        <div className="form-group">
                          <label htmlFor="rollNumber" className="form-label">Roll Number / Student ID <span className="required">*</span></label>
                          <input id="rollNumber" type="text" className={`form-control ${errors.rollNumber ? 'error' : ''}`}
                            placeholder="e.g., 22CS001"
                            {...register('rollNumber', { required: 'Roll number is required' })} />
                          {errors.rollNumber && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.rollNumber.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="department" className="form-label">Department <span className="required">*</span></label>
                          <select id="department" className={`form-control ${errors.department ? 'error' : ''}`}
                            {...register('department', { required: 'Please select your department' })}>
                            <option value="">Select department</option>
                            {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                          </select>
                          {errors.department && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.department.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="year" className="form-label">Year / Semester <span className="required">*</span></label>
                          <select id="year" className={`form-control ${errors.year ? 'error' : ''}`}
                            {...register('year', { required: 'Please select your year' })}>
                            <option value="">Select year</option>
                            {years.map((y) => <option key={y} value={y}>{y}</option>)}
                          </select>
                          {errors.year && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.year.message}</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Preferences */}
                  {currentStep === 2 && (
                    <div className="register-step" aria-labelledby="step2-heading">
                      <h2 id="step2-heading" className="display-sm register-step__title">Slot & Emergency Contact</h2>
                      <div className="register-fields">
                        <div className="form-group">
                          <label htmlFor="slot" className="form-label">Preferred Slot <span className="required">*</span></label>
                          <select id="slot" className={`form-control ${errors.slot ? 'error' : ''}`}
                            {...register('slot', { required: 'Please choose a slot' })}>
                            <option value="">Select preferred timing</option>
                            {slots.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {errors.slot && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.slot.message}</span>}
                          <span className="form-helper">Slot allocation is subject to availability at time of approval.</span>
                        </div>

                        <div className="form-group">
                          <label htmlFor="emergencyName" className="form-label">Emergency Contact Name <span className="required">*</span></label>
                          <input id="emergencyName" type="text" className={`form-control ${errors.emergencyName ? 'error' : ''}`}
                            placeholder="Parent / Guardian name"
                            autoComplete="off"
                            {...register('emergencyName', { required: 'Emergency contact name is required' })} />
                          {errors.emergencyName && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.emergencyName.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="emergencyPhone" className="form-label">Emergency Contact Number <span className="required">*</span></label>
                          <input id="emergencyPhone" type="tel" className={`form-control ${errors.emergencyPhone ? 'error' : ''}`}
                            placeholder="10-digit phone number"
                            {...register('emergencyPhone', {
                              required: 'Emergency contact number is required',
                              pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' }
                            })} />
                          {errors.emergencyPhone && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.emergencyPhone.message}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="medicalConditions" className="form-label">Medical Conditions (optional)</label>
                          <textarea id="medicalConditions" className="form-control"
                            placeholder="Any conditions we should know about (e.g., asthma, blood pressure)..."
                            rows={3}
                            {...register('medicalConditions')} />
                          <span className="form-helper">This helps us ensure safe training. Leave blank if none.</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                    <div className="register-step" aria-labelledby="step3-heading">
                      <h2 id="step3-heading" className="display-sm register-step__title">Review & Submit</h2>

                      {/* Summary */}
                      <div className="register-summary">
                        <h3 className="label text-muted" style={{ marginBottom: 'var(--sp-4)' }}>Registration Summary</h3>
                        {[
                          { label: 'Name', value: getValues('fullName') },
                          { label: 'Email', value: getValues('email') },
                          { label: 'Phone', value: getValues('phone') },
                          { label: 'Roll No.', value: getValues('rollNumber') },
                          { label: 'Department', value: getValues('department') },
                          { label: 'Year', value: getValues('year') },
                          { label: 'Preferred Slot', value: getValues('slot') },
                        ].map(({ label, value }) => (
                          <div key={label} className="register-summary__row">
                            <span className="body-xs text-muted">{label}</span>
                            <span className="body-sm">{value || '—'}</span>
                          </div>
                        ))}
                      </div>

                      <div className="form-group" style={{ marginTop: 'var(--sp-6)' }}>
                        <label className="checkbox-group" htmlFor="agree">
                          <input
                            id="agree"
                            type="checkbox"
                            {...register('agree', { required: 'You must agree to the terms to register' })}
                          />
                          <span className="body-sm text-secondary">
                            I agree to the{' '}
                            <Link to="/rules" target="_blank" style={{ color: 'var(--red-400)' }}>Rules & Regulations</Link>
                            {' '}and{' '}
                            <Link to="/terms" target="_blank" style={{ color: 'var(--red-400)' }}>Terms & Conditions</Link>
                            {' '}of CGEC Gymkhana. I confirm that all information provided is accurate.
                            <span className="required"> *</span>
                          </span>
                        </label>
                        {errors.agree && <span className="form-error" role="alert"><AlertCircle size={12} />{errors.agree.message}</span>}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="register-nav">
                    {currentStep > 0 && (
                      <button type="button" className="btn btn-outline" onClick={prevStep}>
                        ← Back
                      </button>
                    )}
                    <div style={{ marginLeft: 'auto' }}>
                      {currentStep < steps.length - 1 ? (
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                          Continue →
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary">
                          Submit Registration <CheckCircle size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
