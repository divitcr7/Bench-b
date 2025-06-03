import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Liability Coverage",
    description: "Covers bodily injury and property damage you cause to others while riding, including legal defense and settlement costs."
  },
  {
    title: "Collision Coverage",
    description: "Pays for damage to your motorcycle from collisions with vehicles, objects, or the ground, regardless of fault."
  },
  {
    title: "Comprehensive Coverage",
    description: "Protects against theft, vandalism, fire, weather damage, and other non-collision incidents that damage your bike."
  },
  {
    title: "Uninsured Motorist Protection",
    description: "Covers medical expenses and bike damage when you're hit by a driver with no insurance or insufficient coverage."
  },
  {
    title: "Medical Payments Coverage",
    description: "Pays for medical expenses for you and your passengers regardless of fault in an accident."
  },
  {
    title: "Custom Parts & Equipment",
    description: "Covers aftermarket accessories, custom parts, and modifications you've added to personalize your motorcycle."
  },
  {
    title: "Roadside Assistance",
    description: "24/7 emergency services including towing, battery service, flat tire assistance, and lockout help."
  }
];

const programEnhancements = [
  "Agreed value coverage for custom and classic bikes",
  "Safety course discounts for certified riders",
  "Multi-bike discounts for multiple motorcycles",
  "Riding gear and helmet coverage",
  "Trip interruption coverage for touring"
];

const whatWeCover = [
  "Street Motorcycles",
  "Cruisers & Touring Bikes",
  "Sport & Super Sport Bikes",
  "Scooters & Mopeds",
  "Off-Road & Dirt Bikes",
  "Classic & Vintage Motorcycles",
  "Custom & Modified Bikes"
];

const whatSetsUsApart = [
  {
    icon: "🏍️",
    title: "Rider-Focused Coverage",
    description: "We understand the unique risks and needs of motorcyclists, offering specialized coverage designed specifically for two-wheeled vehicles."
  },
  {
    icon: "🛡️",
    title: "Comprehensive Protection",
    description: "Beyond basic coverage, we protect your investment with custom parts coverage, riding gear protection, and trip interruption benefits."
  },
  {
    icon: "💰",
    title: "Competitive Rates",
    description: "Our relationships with motorcycle-specialist carriers help us find competitive rates while maintaining comprehensive coverage options."
  },
  {
    icon: "🎓",
    title: "Safety Rewards",
    description: "Discounts for safety course completion, motorcycle association membership, and anti-theft device installation."
  }
];

const whoWeWorkWith = [
  "Daily Motorcycle Commuters",
  "Weekend Recreational Riders",
  "Long-Distance Touring Enthusiasts",
  "Custom Bike Builders",
  "Classic Motorcycle Collectors",
  "New & Experienced Riders"
];

export default function MotorcycleInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏍️ Benchmark Insurance Group</h1>
          <h2>Motorcycle Insurance</h2>
          <h3>Comprehensive Protection for Every Ride</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Whether you ride for daily transportation, weekend adventures, or cross-country touring, your motorcycle deserves specialized protection. At Benchmark Insurance Group, we provide comprehensive motorcycle insurance that understands the unique risks and joys of riding.
          </p>
          <p>
            From liability protection to custom parts coverage, our motorcycle insurance keeps you protected on every journey, from city streets to open highways.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏍️ What We Cover</h2>
          <p>Our motorcycle insurance programs are designed to protect:</p>
          <ul className="coverage-list">
            {whatWeCover.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="highlights-section">
          <h2>📋 Coverage Highlights</h2>
          <div className="highlights-grid">
            {coverageHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>✅ {highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="enhancements-section">
          <h2>🛡️ Program Enhancements</h2>
          <ul className="enhancements-list">
            {programEnhancements.map((enhancement, index) => (
              <li key={index}>{enhancement}</li>
            ))}
          </ul>
        </div>

        <div className="differentiators-section">
          <h2>📈 What Sets Benchmark Apart</h2>
          <div className="differentiators-grid">
            {whatSetsUsApart.map((item, index) => (
              <div key={index} className="differentiator-card">
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-section">
          <h2>🛣️ Built for Motorcycle Enthusiasts</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Ride with Confidence</h2>
          <p>
            Your passion for riding deserves protection that understands the road ahead. Partner with Benchmark Insurance Group for motorcycle insurance built by riders, for riders.
          </p>
          <p>Get your motorcycle insurance quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 