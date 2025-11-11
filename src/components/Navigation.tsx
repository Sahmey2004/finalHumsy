import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="modern-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">HUMSY</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ai-humanizer">AI Humanizer</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

