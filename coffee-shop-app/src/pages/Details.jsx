import { Star } from 'lucide-react'
import Navbar from '../components/Navbar'

function Details({ product, favorite, size, setSize, onBack, onToggleFavorite, onBuyNow }) {
  return (
    <section className="detail-screen">
      <Navbar mode="details" title="Detail" favorite={favorite} onBack={onBack} onToggleFavorite={onToggleFavorite} />
      <div className={`detail-photo ${product.image}`} role="img" aria-label={product.name} />
      <div className="detail-title-row flex items-center justify-between">
        <div>
          <h1>{product.name}</h1>
          <p>Ice/Hot</p>
          <div className="detail-rating"><Star size={19} fill="currentColor" /> <strong>4.8</strong> <span>(230)</span></div>
        </div>
        <div className="feature-icons"><span>♧</span><span>◉</span><span>▤</span></div>
      </div>
      <div className="divider" />
      <section className="description-block">
        <h3>Description</h3>
        <p>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo.. <button>Read More</button></p>
      </section>
      <section className="size-block">
        <h3>Size</h3>
        <div className="size-options">
          {['S', 'M', 'L'].map((item) => <button className={item === size ? 'selected' : ''} key={item} onClick={() => setSize(item)}>{item}</button>)}
        </div>
      </section>
      <div className="detail-bottom">
        <div><span>Price</span><strong>$ {product.price.toFixed(2)}</strong></div>
        <button className="primary-button" onClick={onBuyNow}>Buy Now</button>
      </div>
      <div className="home-indicator" />
    </section>
  )
}

export default Details
