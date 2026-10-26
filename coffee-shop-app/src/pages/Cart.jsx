import { ChevronDown, ChevronRight, Wallet } from 'lucide-react'
import Navbar from '../components/Navbar'
import QuantitySelector from '../components/QuantitySelector'

function Cart({ product, quantity, setQuantity, delivery, setDelivery, onBack, onPlaceOrder }) {
  const price = product.price * quantity

  return (
    <section className="order-screen">
      <Navbar mode="page" title="Order" onBack={onBack} />
      <div className="order-scroll">
        <div className="delivery-toggle">
          <button className={delivery ? 'active' : ''} onClick={() => setDelivery(true)}>Deliver</button>
          <button className={!delivery ? 'active' : ''} onClick={() => setDelivery(false)}>Pick Up</button>
        </div>
        <h3>{delivery ? 'Delivery Address' : 'Pickup Location'}</h3>
        <div className="address-block">
          <strong>{delivery ? 'Jl. Kpg Sutoyo' : 'Coffee Corner - Bilzen'}</strong>
          <p>{delivery ? 'Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.' : 'Jalan Sutoyo, Bilzen, Tanjungbalai.'}</p>
          <div className="address-actions"><button>▧ Edit Address</button><button>▤ Add Note</button></div>
        </div>
        <div className="ordered-item">
          <div className={`order-thumb ${product.image}`} />
          <div className="ordered-copy"><strong>{product.name}</strong><span>{product.type}</span></div>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <button className="discount-row"><span>♧</span><strong>1 Discount is Applies</strong><ChevronRight size={20} /></button>
        <h3 className="summary-heading">Payment Summary</h3>
        <div className="summary-line"><span>Price</span><strong>$ {price.toFixed(2)}</strong></div>
        <div className="summary-line"><span>Delivery Fee</span><strong><del>$ 2.0</del> &nbsp; $ 1.0</strong></div>
      </div>
      <div className="checkout-footer">
        <button className="payment-method"><Wallet size={21} /><span><strong>Cash/Wallet</strong><small>$ {(price + 1).toFixed(2)}</small></span><ChevronDown size={18} /></button>
        <button className="primary-button" onClick={onPlaceOrder}>Order</button>
      </div>
      <div className="home-indicator" />
    </section>
  )
}

export default Cart
