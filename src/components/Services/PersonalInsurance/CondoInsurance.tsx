import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Personal Property Protection",
    description: "Covers your furniture, electronics, clothing, and personal belongings inside your condo unit against theft, fire, and other covered perils."
  },
  {
    title: "Interior Structure Coverage",
    description: "Protects walls, flooring, fixtures, and improvements you've made to your unit that aren't covered by the HOA master policy."
  },
  {
    title: "Liability Protection",
    description: "Covers legal expenses and damages if someone is injured in your condo or if you accidentally damage someone else's property."
  },
  {
    title: "Additional Living Expenses",
    description: "Pays for temporary housing and living costs if your condo becomes uninhabitable due to a covered loss."
  },
  {
    title: "Loss Assessment Coverage",
    description: "Helps pay your share of covered losses to common areas when the HOA master policy limits are exceeded."
  },
  {
    title: "Water Damage Protection",
    description: "Covers water damage from plumbing leaks, appliance malfunctions, and other water-related incidents in your unit."
  },
  {
    title: "Medical Payments",
    description: "Covers medical expenses for guests injured in your condo, regardless of fault, helping maintain good relationships."
  }
];

const programEnhancements = [
  "Ordinance or law coverage for building code upgrades",
  "Extended replacement cost for personal property",
  "Identity theft expense reimbursement",
  "Building additions and alterations coverage",
  "Enhanced water backup protection"
];

const whatWeCover = [
  "High-Rise Condominiums",
  "Townhome-Style Condos",
  "Loft & Urban Condos",
  "Resort & Vacation Condos",
  "Co-op Units",
  "Luxury Condominiums",
  "Investment Condo Units"
];

const whatSetsUsApart = [
  {
    icon: "🏢",
    title: "HOA Policy Integration",
    description: "We understand how your condo policy works with your HOA master policy to ensure no gaps in coverage and prevent overlaps."
  },
  {
    icon: "🔍",
    title: "Unit-Specific Assessment",
    description: "We evaluate your specific unit's features, improvements, and risks to provide tailored coverage that fits your needs."
  },
  {
    icon: "💧",
    title: "Water Damage Expertise",
    description: "Specialized knowledge of condo water damage risks including unit-to-unit damage and building system failures."
  },
  {
    icon: "⚖️",
    title: "Legal Protection",
    description: "Coverage for legal disputes with HOAs, neighbors, and assessment-related issues common in condo ownership."
  }
];

const whoWeWorkWith = [
  "First-Time Condo Buyers",
  "Urban Professionals",
  "Empty Nesters",
  "Vacation Condo Owners",
  "Condo Investors",
  "Luxury Unit Owners"
];

export default function CondoInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏢 Benchmark Insurance Group</h1>
          <h2>Condo Insurance</h2>
          <h3>Tailored Protection for Your Condo Unit</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Condo ownership comes with unique insurance needs that differ from traditional homeowners insurance. At Benchmark Insurance Group, we provide specialized condo insurance that works seamlessly with your HOA's master policy to protect your unit, belongings, and personal liability.
          </p>
          <p>
            From interior improvements to personal property and liability protection, our condo insurance fills the gaps and provides comprehensive coverage for condo living.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏠 What We Cover</h2>
          <p>Our condo insurance programs are designed to protect:</p>
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
          <h2>🏗️ Built for Condo Owners</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Protect Your Condo Investment</h2>
          <p>
            Your condo deserves specialized protection that understands the unique aspects of condo ownership. Partner with Benchmark Insurance Group for coverage that complements your HOA policy perfectly.
          </p>
          <p>Get your condo insurance quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 