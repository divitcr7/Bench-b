import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Agreed Value Coverage",
    description: "Your classic car's value is agreed upon upfront, ensuring you receive the full insured amount without depreciation in case of a total loss."
  },
  {
    title: "Original Parts Coverage",
    description: "Access to original equipment manufacturer (OEM) parts and authentic restoration materials to maintain your vehicle's authenticity and value."
  },
  {
    title: "Spare Parts Coverage",
    description: "Protection for your collection of spare parts, tools, and restoration materials stored at your home or garage."
  },
  {
    title: "Show & Exhibition Coverage",
    description: "Coverage extends to car shows, exhibitions, parades, and other collector events where you display your classic vehicle."
  },
  {
    title: "Transportation Coverage",
    description: "Protection while your classic car is being transported to shows, auctions, or restoration facilities on trailers or transporters."
  },
  {
    title: "Diminished Value Protection",
    description: "Compensation for the reduced value of your classic car after repairs, even when restored to pre-loss condition."
  },
  {
    title: "Expert Claims Handling",
    description: "Specialized adjusters who understand classic cars and work with qualified restoration shops familiar with vintage vehicles."
  }
];

const programEnhancements = [
  "Guaranteed replacement with like kind and quality vehicle",
  "Inflation guard protection for increasing values",
  "Coverage for modifications and custom work",
  "Roadside assistance with flatbed towing",
  "Storage facility coverage for multiple vehicles"
];

const whatWeCover = [
  "Classic Cars (25+ years old)",
  "Vintage & Antique Automobiles",
  "Muscle Cars & Sports Cars",
  "Exotic & Luxury Vehicles",
  "Custom & Modified Vehicles",
  "Hot Rods & Street Rods",
  "Restored & Original Condition Cars"
];

const whatSetsUsApart = [
  {
    icon: "🏆",
    title: "Collector Expertise",
    description: "Our agents understand the classic car market, valuation methods, and the unique needs of automotive enthusiasts and collectors."
  },
  {
    icon: "🔧",
    title: "Restoration Support",
    description: "Access to networks of qualified restoration shops, appraisers, and classic car specialists for repairs and valuation."
  },
  {
    icon: "📈",
    title: "Value Appreciation",
    description: "Regular value updates and appreciation tracking to ensure your coverage keeps pace with your classic car's increasing worth."
  },
  {
    icon: "🛡️",
    title: "Limited Use Programs",
    description: "Special pricing for vehicles with limited annual mileage and restricted use for shows, exhibitions, and pleasure driving."
  }
];

const whoWeWorkWith = [
  "Classic Car Collectors",
  "Automotive Enthusiasts",
  "Restoration Shop Owners",
  "Car Show Participants",
  "Investment Car Buyers",
  "Vintage Racing Drivers"
];

export default function ClassicAutoInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏎️ Benchmark Insurance Group</h1>
          <h2>Classic Auto Insurance</h2>
          <h3>Specialized Protection for Your Automotive Treasures</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Your classic car is more than transportation—it's a piece of automotive history, a work of art, and a valuable investment. At Benchmark Insurance Group, we provide specialized classic auto insurance that recognizes the unique value and needs of collector vehicles.
          </p>
          <p>
            From agreed value coverage to expert restoration support, our classic car insurance protects your automotive investment with the specialized coverage it deserves.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🚗 What We Cover</h2>
          <p>Our classic auto insurance programs are designed to protect:</p>
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
          <h2>🏁 Built for Classic Car Enthusiasts</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Protect Your Classic Investment</h2>
          <p>
            Your classic car deserves insurance that understands its true value and significance. Partner with Benchmark Insurance Group for coverage built specifically for collector vehicles.
          </p>
          <p>Get your classic auto quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 