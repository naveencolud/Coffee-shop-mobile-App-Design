import { ChevronLeft, MapPin, Settings2 } from 'lucide-react'

function Delivery({ onBack }) {
  return (
    <section className="delivery-screen">
      <div className="map-area">
        <button className="map-back" onClick={onBack} aria-label="Back"><ChevronLeft /></button>
        <button className="map-target" aria-label="Center map"><Settings2 /></button>
        <div className="map-streets">
          <span className="street street-a">97th St</span><span className="street street-b">96th St</span><span className="street street-c">95th St</span><span className="street street-d">2nd Ave</span><span className="street street-e">86th Street</span><span className="street street-f">3rd Ave</span>
          <div className="route-line" />
          <div className="map-pin"><MapPin size={26} fill="currentColor" /></div>
          <div className="courier-pin">♧</div>
        </div>
      </div>
      <div className="delivery-sheet">
        <div className="sheet-handle" />
        <h2>10 minutes left</h2>
        <p>Delivery to <strong>Jl. Kpg Sutoyo</strong></p>
        <div className="progress-lines"><i /><i /><i /><i /></div>
        <div className="delivery-status"><span className="delivery-icon">♧</span><div><strong>Delivered your order</strong><p>We will deliver your goods to you in the shortest possible time.</p></div></div>
        <div className="courier-row"><div className="courier-avatar">BS</div><div><strong>Brooklyn Simmons</strong><span>Personal Courier</span></div><button aria-label="Call courier">⌕</button></div>
      </div>
      <div className="home-indicator" />
    </section>
  )
}

export default Delivery
