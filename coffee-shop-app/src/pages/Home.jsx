import BottomNavigation from '../components/BottomNavigation'
import CategoryList from '../components/CategoryList'
import CoffeeCard from '../components/CoffeeCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

function Home({ products, category, setCategory, query, setQuery, onSelectProduct, onAddProduct, onNavigate }) {
  const shownProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'All Coffee' || product.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <section className="home-screen">
      <Navbar><SearchBar query={query} setQuery={setQuery} /></Navbar>
      <div className="home-content">
        <button className="promo-banner" aria-label="Coffee promotion" onClick={() => onAddProduct(products[0])}>
          <img src="/images/Banner.png" alt="Promo: Buy one get one FREE" />
        </button>
        <CategoryList category={category} setCategory={setCategory} />
        <div className="product-grid grid">
          {shownProducts.map((product) => (
            <CoffeeCard key={product.name} product={product} onSelect={onSelectProduct} onAdd={onAddProduct} />
          ))}
          {shownProducts.length === 0 && <p className="empty-search">No coffee found. Try another search.</p>}
        </div>
      </div>
      <BottomNavigation active="home" onNavigate={onNavigate} />
      <div className="home-indicator" />
    </section>
  )
}

export default Home
