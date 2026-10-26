import { Minus, Plus } from 'lucide-react'

function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="quantity-control">
      <button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
      <strong>{quantity}</strong>
      <button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={15} /></button>
    </div>
  )
}

export default QuantitySelector
