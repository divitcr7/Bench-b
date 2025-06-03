import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Liability Coverage",
    description: "Covers bodily injury and property damage you cause to others in an accident, including legal defense costs and settlements."
  },
  {
    title: "Collision Coverage",
    description: "Pays for damage to your vehicle from collisions with other vehicles or objects, regardless of who is at fault."
  },
  {
    title: "Comprehensive Coverage",
    description: "Protects against theft, vandalism, fire, natural disasters, and other non-collision events that damage your vehicle."
  },
  {
    title: "Uninsured/Underinsured Motorist",
    description: "Covers medical expenses and vehicle damage when you're hit by a driver with no insurance or insufficient coverage."
  },
  {
    title: "Medical Payments Coverage",
    description: "Pays for medical expenses for you and your passengers regardless of fault, supplementing your health insurance."
  },
  {
    title: "Personal Injury Protection",
    description: "Covers medical expenses, lost wages, and essential services for you and your passengers after an accident."
  },
  {
    title: "Roadside Assistance",
    description: "Provides 24/7 emergency services including towing, battery jump-start, flat tire changes, and lockout assistance."
  }
];

const programEnhancements = [
  "New car replacement for total losses within first years",
  "Gap coverage for leased and financed vehicles",
  "Rental car reimbursement during repairs",
  "Original equipment manufacturer (OEM) parts guarantee",
  "Accident forgiveness for first claim"
];

const whatWeCover = [
  "Personal Vehicles & Daily Drivers",
  "Motorcycles & Scooters",
  "Classic & Antique Cars",
  "Recreational Vehicles",
  "Commercial Vehicles",
  "Teen Driver Coverage",
  "Multi-Vehicle Families"
];

const whatSetsUsApart = [
  {
    icon: "🚗",
    title: "Multi-Carrier Options",
    description: "We compare rates from multiple top-rated insurance companies to find you the best coverage at the most competitive price."
  },
  {
    icon: "💡",
    title: "Discount Maximization",
    description: "Our agents identify all available discounts including safe driver, multi-policy, good student, and vehicle safety feature discounts."
  },
  {
    icon: "⚡",
    title: "Fast Claims Processing",
    description: "Our streamlined claims process gets you back on the road quickly with preferred repair shops and direct payment options."
  },
  {
    icon: "📊",
    title: "Usage-Based Programs",
    description: "Save money with telematics programs that reward safe driving habits and low mileage with significant premium discounts."
  }
];

const whoWeWorkWith = [
  "Safe Drivers Seeking Savings",
  "Young & New Drivers",
  "Families with Multiple Vehicles",
  "Senior Drivers",
  "High-Risk Drivers",
  "Commercial Vehicle Owners"
];

export default function AutoInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🚗 Benchmark Insurance Group</h1>
          <h2>Auto Insurance</h2>
          <h3>Complete Protection for Every Mile You Drive</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Whether you're commuting to work, taking a road trip, or running errands around town, your vehicle needs comprehensive protection. At Benchmark Insurance Group, we provide auto insurance that covers your vehicle, protects your finances, and gives you peace of mind on every journey.
          </p>
          <p>
            From fender benders to major accidents, theft to natural disasters, our auto insurance ensures you're covered for life's unexpected moments on the road.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🚙 What We Cover</h2>
          <p>Our auto insurance programs are designed to protect:</p>
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
          <h2>🏎️ Built for All Types of Drivers</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Drive with Confidence</h2>
          <p>
            Don't let the unexpected derail your journey. Partner with Benchmark Insurance Group for auto insurance that keeps you protected and your premiums affordable.
          </p>
          <p>Get your personalized quote in minutes.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 