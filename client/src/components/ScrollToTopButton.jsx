import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '../App'
import './ScrollToTopButton.css'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-to-top-btn"
      onClick={() => scrollToTop(false)}
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}
