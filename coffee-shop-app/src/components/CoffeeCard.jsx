import { Plus, Star } from 'lucide-react'

function CoffeeCard({ product, onSelect, onAdd }) {
  return (
    <article className="product-card">
      <button className={`product-photo ${product.image}`} onClick={() => onSelect(product)} aria-label={`View ${product.name}`} />
      <button className="rating-badge" onClick={() => onSelect(product)}>
        <Star size={14} fill="currentColor" /> 4.8
      </button>
      <button className="product-info" onClick={() => onSelect(product)}>
        <strong>{product.name}</strong>
        <span>{product.type}</span>
      </button>
      <div className="product-price">
        <strong>$ {product.price.toFixed(2)}</strong>
        <button className="add-button" aria-label={`Add ${product.name}`} onClick={() => onAdd(product)}>
          <Plus size={18} />
        </button>
      </div>
    </article>
  )
}

export default CoffeeCard
