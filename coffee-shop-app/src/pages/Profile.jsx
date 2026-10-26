import { MapPin, UserRound } from 'lucide-react'
import BottomNavigation from '../components/BottomNavigation'
import Navbar from '../components/Navbar'

function Profile({ onNavigate }) {
  return (
    <section className="home-screen simple-page">
      <Navbar mode="page" title="Profile" onBack={() => onNavigate('home')} />
      <div className="profile-content">
        <div className="profile-avatar"><UserRound size={36} /></div>
        <h1>Brooklyn Simmons</h1>
        <p>Personal Coffee Lover</p>
        <div className="profile-location"><MapPin size={18} /> Bilzen, Tanjungbalai</div>
      </div>
      <BottomNavigation active="profile" onNavigate={onNavigate} />
      <div className="home-indicator" />
    </section>
  )
}

export default Profile
