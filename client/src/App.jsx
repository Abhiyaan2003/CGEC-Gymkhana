import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopographicBackground from './components/TopographicBackground'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Rules from './pages/Rules'
import Terms from './pages/Terms'
// import Register from './pages/Register'
import Events from './pages/Events'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/gsapSetup'

import ScrollToTopButton from './components/ScrollToTopButton'

export function scrollToTop(immediate = false) {
  if (window.lenis) {
    window.lenis.scrollTo(0, { immediate })
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? 'instant' : 'smooth' })
  }
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(true)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <TopographicBackground variant="fixed" lineOpacity={0.24} density={10} interactive={true} />
      <Navbar />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.0,
    })

    window.lenis = lenis

    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    let animationFrameId
    function raf(time) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.lenis = null
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/facilities" element={<Layout><Facilities /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="/rules" element={<Layout><Rules /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        {/* <Route path="/register" element={<Layout><Register /></Layout>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
