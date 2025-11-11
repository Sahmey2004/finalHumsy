import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="modern-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>HUMSY</Link>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/ai-humanizer" onClick={closeMenu}>AI Humanizer</Link>
          </li>
          <li>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

