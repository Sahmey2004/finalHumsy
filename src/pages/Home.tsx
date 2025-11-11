import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <div className="spline-background">
        <spline-viewer loading-anim-type="none" url="https://prod.spline.design/LHemhFnOpE0WUJBK/scene.splinecode"></spline-viewer>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">HUMSY</h1>
        <p className="hero-subtitle">Your personal AI Humanizer</p>
        <Link to="/ai-humanizer" className="glass-button">Humanize</Link>
      </div>
    </div>
  )
}

export default Home

