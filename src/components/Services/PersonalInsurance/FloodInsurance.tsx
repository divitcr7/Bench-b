import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Building Coverage",
    description: "Protects the structure of your home including foundation, electrical systems, plumbing, HVAC, and built-in appliances up to policy limits."
  },
  {
    title: "Contents Coverage", 
    description: "Covers personal belongings including furniture, clothing, electronics, and other personal property damaged by flooding."
  },
  {
    title: "Basement Coverage",
    description: "Limited coverage for basement improvements, utilities, and personal property stored in basements and below-ground areas."
  },
  {
    title: "Additional Living Expenses",
    description: "Pays for temporary housing and increased living costs when your home is uninhabitable due to flood damage (with private flood policies)."
  },
  {
    title: "Debris Removal",
    description: "Covers the cost to remove flood-damaged debris from your property to facilitate repairs and restoration."
  },
  {
    title: "Loss Avoidance Measures",
    description: "Reimburses reasonable costs for emergency measures taken to protect your property during an imminent flood threat."
  },
  {
    title: "Replacement Cost Coverage",
    description: "Private flood policies can provide replacement cost coverage for both structure and contents without depreciation."
  }
];

const programEnhancements = [
  "Higher coverage limits than NFIP standard policies",
  "Faster claims processing with private carriers",
  "Coverage for additional living expenses during repairs",
  "Business interruption for home-based businesses",
  "Pool and detached structure coverage"
];

const whatWeCover = [
  "Primary Residences",
  "Vacation & Secondary Homes", 
  "Condominiums & Townhomes",
  "Rental Properties",
  "Mobile & Manufactured Homes",
  "High-Risk Flood Zone Properties",
  "Properties Outside Flood Zones"
];

const whatSetsUsApart = [
  {
    icon: "🌊",
    title: "NFIP & Private Options",
    description: "We offer both National Flood Insurance Program (NFIP) policies and private flood insurance to find the best coverage and pricing for your needs."
  },
  {
    icon: "📍",
    title: "Zone Expertise", 
    description: "Our agents understand flood zone designations, base flood elevations, and how these factors affect your coverage requirements and pricing."
  },
  {
    icon: "⚡",
    title: "No Waiting Period",
    description: "Private flood policies can often be effective immediately, while NFIP policies typically have a 30-day waiting period before coverage begins."
  },
  {
    icon: "💧",
    title: "Comprehensive Protection",
    description: "Coverage for all types of flooding including storm surge, overflow of rivers/lakes, rapid snowmelt, and inadequate drainage systems."
  }
];

const whoWeWorkWith = [
  "Coastal Property Owners",
  "River & Lake Front Residents",
  "High-Risk Flood Zone Homeowners",
  "Lender-Required Coverage Buyers",
  "Proactive Risk-Conscious Homeowners",
  "Property Investors"
];

export default function FloodInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🌊 Benchmark Insurance Group</h1>
          <h2>Flood Insurance</h2>
          <h3>Essential Protection Against Water Damage</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Flooding can happen anywhere, anytime—and standard homeowners insurance doesn't cover flood damage. At Benchmark Insurance Group, we provide comprehensive flood insurance through both the National Flood Insurance Program (NFIP) and private carriers to protect your home and belongings.
          </p>
          <p>
            Whether you're in a high-risk flood zone or want extra protection, our flood insurance ensures you're covered when water threatens your most valuable asset.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏠 What We Cover</h2>
          <p>Our flood insurance programs are designed to protect:</p>
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
                <h3>{highlight.title}</h3>
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
          <h2>🏔️ Built for Flood-Conscious Property Owners</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Don't Wait for the Water to Rise</h2>
          <p>
            Floods don't discriminate—they can affect any property. Partner with Benchmark Insurance Group for flood insurance that provides comprehensive protection before disaster strikes.
          </p>
          <p>Get your flood insurance quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 