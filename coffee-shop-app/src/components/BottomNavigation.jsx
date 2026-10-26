import { Bell, Heart, House, ShoppingBag } from 'lucide-react'

const items = [
  { id: 'home', Icon: House },
  { id: 'favorites', Icon: Heart },
  { id: 'cart', Icon: ShoppingBag },
  { id: 'profile', Icon: Bell },
]

function BottomNavigation({ active, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {items.map(({ id, Icon }) => (
        <button
          key={id}
          className={active === id ? 'active' : ''}
          aria-label={id}
          onClick={() => onNavigate(id)}
        >
          <Icon size={23} fill={active === id && id === 'home' ? 'currentColor' : 'none'} />
          {active === id && <span />}
        </button>
      ))}
    </nav>
  )
}

export default BottomNavigation
