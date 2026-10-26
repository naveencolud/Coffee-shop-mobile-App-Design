function Welcome({ onGetStarted }) {
  return (
    <section className="welcome-screen">
      <div className="welcome-art" />
      <div className="welcome-copy">
        <h1>Fall in Love with Coffee in Blissful Delight!</h1>
        <p>Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>
        <button className="primary-button welcome-button" onClick={onGetStarted}>Get Started</button>
      </div>
      <div className="home-indicator dark-indicator" />
    </section>
  )
}

export default Welcome
