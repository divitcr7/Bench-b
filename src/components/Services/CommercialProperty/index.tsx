import "./commercialProperty.scss";

const coverageHighlights = [
  {
    title: "Building & Structure Coverage",
    description: "Covers the cost of repair or rebuild due to fire, storm, vandalism, or other covered perils."
  },
  {
    title: "Business Income & Rental Value",
    description: "Protects your cash flow by covering lost rents and operating income during periods of restoration."
  },
  {
    title: "Equipment Breakdown",
    description: "Covers critical building systems—HVAC, elevators, boilers—from mechanical failure and associated downtime."
  },
  {
    title: "Ordinance or Law Compliance",
    description: "Covers demolition and upgrade costs required to bring older buildings up to current codes after a loss."
  },
  {
    title: "Water & Sewer Backup",
    description: "Adds essential protection for properties at risk of internal water damage events—common in high-density or older buildings."
  },
  {
    title: "Flood & Windstorm Options",
    description: "Available in coastal, floodplain, or hurricane-prone areas. We help navigate special markets and underwriting strategies for high-risk geographies."
  },
  {
    title: "Tenant Improvements & Betterments",
    description: "Protects capital investments made by tenants or building owners into customized commercial spaces."
  }
];

const programEnhancements = [
  "Blanket coverage for property portfolios",
  "Deductible buy-downs for large exposures",
  "Builder's Risk to Permanent conversion strategies",
  "Catastrophe modeling and risk scoring",
  "Lender-compliant documentation and certificates"
];

const whatWeCover = [
  "Multifamily Apartment Buildings",
  "Mixed-Use Developments",
  "Industrial & Flex Properties",
  "Retail Centers & Strip Malls",
  "Office Buildings & Co-Working Spaces",
  "Hospitality & Boutique Hotels",
  "Student Housing & Senior Living Facilities"
];

const whatSetsUsApart = [
  {
    icon: "🔍",
    title: "Property-Specific Risk Scoring",
    description: "We assess each property's exposure using fire protection, crime, CAT modeling, and construction class data—ensuring smarter underwriting and pricing."
  },
  {
    icon: "🤝",
    title: "Real Estate Expertise",
    description: "Our leadership team has hands-on experience in ownership and development. We understand tenant risk, NOI sensitivity, and the operational nuances behind every building."
  },
  {
    icon: "🧠",
    title: "Integrated Risk Management",
    description: "We don't just insure your property—we help you reduce risk through loss control, inspection readiness, and claim prevention programs."
  },
  {
    icon: "🖥️",
    title: "Technology Access",
    description: "Clients manage policies, documents, and claims through our digital platform—complete with portfolio dashboards and renewal tracking."
  }
];

const whoWeWorkWith = [
  "Real Estate Developers & Syndicators",
  "Institutional Investors & REITs",
  "Property Management Companies",
  "Private Equity Real Estate Funds",
  "General Contractors & Builders"
];

export default function CommercialProperty() {
  return (
    <section className="commercial-property-container">
      <div className="commercial-property padding-container">
        <div className="hero-section">
          <h1>🏢 Benchmark Insurance Group</h1>
          <h2>Commercial Property Insurance</h2>
          <h3>Smart Protection for the Properties That Power Your Portfolio.</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Your buildings are more than just structures—they're income-generating assets, operating businesses, and strategic investments. At Benchmark Insurance Group, we provide comprehensive, customized Commercial Property Insurance that protects your assets from physical loss, revenue disruption, liability exposures, and compliance challenges.
          </p>
          <p>
            Whether you own a single commercial space or manage a multi-state real estate portfolio, we build your policy around the true financial function of your property.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🧱 What We Cover</h2>
          <p>Our Commercial Property Insurance programs are designed to protect:</p>
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
          <h2>🏗️ Built for Real Estate Professionals</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Let's Protect What You've Built</h2>
          <p>
            Don't trust your portfolio to generic coverage. Partner with Benchmark Insurance Group for commercial property protection that works like your business does: proactively, profit-minded, and professionally managed.
          </p>
          <p>Request a property risk review or quote today.</p>
          <button className="cta-button">Request a Quote</button>
        </div>
      </div>
    </section>
  );
} 