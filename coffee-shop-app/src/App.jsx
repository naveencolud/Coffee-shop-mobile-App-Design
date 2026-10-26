import { useState } from 'react'
import coffeeData from './data/coffeeData'
import Cart from './pages/Cart'
import Delivery from './pages/Delivery'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Welcome from './pages/Welcome'
import './App.css'

function App() {
  const [screen, setScreen] = useState('welcome')
  const [selectedProduct, setSelectedProduct] = useState(coffeeData[0])
  const [category, setCategory] = useState('All Coffee')
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('M')
  const [delivery, setDelivery] = useState(true)
  const [favorite, setFavorite] = useState(false)
  const [query, setQuery] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const openProduct = (product) => {
    setSelectedProduct(product)
    setScreen('details')
  }

  const addProduct = (product) => {
    setSelectedProduct(product)
    setQuantity(1)
    setScreen('cart')
  }

  const goBack = () => {
    if (screen === 'details') setScreen('home')
    else if (screen === 'cart') setScreen('details')
    else setScreen('home')
  }

  const navigate = (destination) => {
    setScreen(destination)
  }

  const pageProps = {
    onNavigate: navigate,
    onBack: goBack,
  }

  if (screen === 'welcome') {
    return <main className="app-shell"><Welcome onGetStarted={() => setScreen('home')} /></main>
  }

  if (screen === 'details') {
    return (
      <main className="app-shell">
        <Details
          {...pageProps}
          product={selectedProduct}
          favorite={favorite}
          size={size}
          setSize={setSize}
          onToggleFavorite={() => setFavorite(!favorite)}
          onBuyNow={() => { setQuantity(1); setScreen('cart') }}
        />
      </main>
    )
  }

  if (screen === 'cart') {
    return (
      <main className="app-shell">
        <Cart
          {...pageProps}
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          delivery={delivery}
          setDelivery={setDelivery}
          onPlaceOrder={() => { setOrderPlaced(true); setScreen('delivery') }}
        />
      </main>
    )
  }

  if (screen === 'delivery') {
    return <main className="app-shell"><Delivery {...pageProps} orderPlaced={orderPlaced} /></main>
  }

  if (screen === 'favorites') {
    return (
      <main className="app-shell">
        <Favorites {...pageProps} product={favorite ? selectedProduct : null} onSelectProduct={openProduct} onAddProduct={addProduct} />
      </main>
    )
  }

  if (screen === 'profile') {
    return <main className="app-shell"><Profile {...pageProps} /></main>
  }

  return (
    <main className="app-shell">
      <Home
        {...pageProps}
        products={coffeeData}
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
        onSelectProduct={openProduct}
        onAddProduct={addProduct}
      />
    </main>
  )
}

export default App
