import BottomNavigation from '../components/BottomNavigation'
import CoffeeCard from '../components/CoffeeCard'
import Navbar from '../components/Navbar'

function Favorites({ product, onSelectProduct, onAddProduct, onNavigate }) {
  return (
    <section className="home-screen simple-page">
      <Navbar mode="page" title="Favorites" onBack={() => onNavigate('home')} />
      <div className="simple-page-content">
        {product ? (
          <div className="product-grid">
            <CoffeeCard product={product} onSelect={onSelectProduct} onAdd={onAddProduct} />
          </div>
        ) : <p className="empty-search">No favorite coffees yet. Tap the heart on a coffee to save it.</p>}
      </div>
      <BottomNavigation active="favorites" onNavigate={onNavigate} />
      <div className="home-indicator" />
    </section>
  )
}

export default Favorites
