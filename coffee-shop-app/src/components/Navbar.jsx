import { ChevronDown, ChevronLeft, Heart } from 'lucide-react'

function Navbar({ mode = 'home', title, favorite, onBack, onToggleFavorite, children }) {
  if (mode === 'home') {
    return (
      <header className="home-header">
        <div className="location-label">Location</div>
        <button className="location-button">
          Bilzen, Tanjungbalai <ChevronDown size={16} />
        </button>
        {children}
      </header>
    )
  }

  return (
    <header className="page-header">
      <button className="icon-button" onClick={onBack} aria-label="Back"><ChevronLeft /></button>
      <h2>{title}</h2>
      {mode === 'details' ? (
        <button className={`icon-button ${favorite ? 'favorite' : ''}`} aria-label="Add to favorites" onClick={onToggleFavorite}>
          <Heart fill={favorite ? 'currentColor' : 'none'} />
        </button>
      ) : <span className="header-spacer" />}
    </header>
  )
}

export default Navbar
