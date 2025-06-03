import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Dwelling Protection",
    description: "Covers the rental property structure against fire, storms, vandalism, and other covered perils with replacement cost coverage."
  },
  {
    title: "Loss of Rental Income",
    description: "Compensates for lost rental income when your property becomes uninhabitable due to a covered loss during repairs."
  },
  {
    title: "Liability Protection",
    description: "Protects against lawsuits from tenant injuries or property damage claims with comprehensive legal defense coverage."
  },
  {
    title: "Personal Property Coverage",
    description: "Covers appliances, furnishings, and equipment you provide for tenant use in your rental property."
  },
  {
    title: "Ordinance & Law Coverage",
    description: "Pays for required building code upgrades when rebuilding or repairing your rental property after a covered loss."
  },
  {
    title: "Vandalism & Malicious Mischief",
    description: "Covers damage caused by tenants or vandals including graffiti, broken windows, and intentional property damage."
  },
  {
    title: "Fair Rental Value",
    description: "Provides income replacement based on the fair rental value of your property during covered loss periods."
  }
];

const programEnhancements = [
  "Automatic inflation protection for building values",
  "Extended vacancy coverage up to 60 days",
  "Tenant discrimination liability coverage",
  "Building ordinance updates coverage",
  "Professional property management liability"
];

const whatWeCover = [
  "Single-Family Rental Homes",
  "Multi-Family Properties",
  "Condominiums & Townhomes",
  "Vacation Rental Properties",
  "Student Housing",
  "Senior Living Facilities",
  "Commercial Rental Properties"
];

const whatSetsUsApart = [
  {
    icon: "🏘️",
    title: "Investment Property Expertise",
    description: "Our agents understand the unique risks of rental properties and tailor coverage to protect your investment income and property value."
  },
  {
    icon: "💼",
    title: "Portfolio Management",
    description: "We can insure multiple rental properties under comprehensive portfolio policies for better coverage and potential cost savings."
  },
  {
    icon: "⚖️",
    title: "Landlord Legal Support",
    description: "Access to legal resources and guidance for tenant disputes, evictions, and liability claims specific to rental property ownership."
  },
  {
    icon: "📈",
    title: "Income Protection Focus",
    description: "We prioritize protecting your rental income stream with appropriate loss of rents coverage and business interruption protection."
  }
];

const whoWeWorkWith = [
  "First-Time Landlords",
  "Experienced Property Investors",
  "Real Estate Investment Companies",
  "Property Management Companies",
  "Vacation Rental Owners",
  "Multi-Property Portfolios"
];

export default function RentalPropertyInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏠 Benchmark Insurance Group</h1>
          <h2>Rental Property Insurance</h2>
          <h3>Protect Your Investment and Rental Income</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Your rental property is both a valuable asset and a business investment that generates income. At Benchmark Insurance Group, we provide specialized rental property insurance that protects your building, preserves your rental income, and shields you from liability claims.
          </p>
          <p>
            From tenant-caused damage to natural disasters, our comprehensive coverage ensures your investment property remains profitable and protected.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏘️ What We Cover</h2>
          <p>Our rental property insurance programs are designed to protect:</p>
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
          <h2>🏗️ Built for Property Investors</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Protect Your Rental Investment</h2>
          <p>
            Your rental property deserves specialized protection. Partner with Benchmark Insurance Group for coverage that understands the unique risks of being a landlord.
          </p>
          <p>Get your investment property quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 