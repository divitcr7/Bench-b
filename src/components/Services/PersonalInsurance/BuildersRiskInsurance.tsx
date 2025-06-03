import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Structure Coverage",
    description: "Protects the building structure during construction including foundation, framing, roofing, and all materials incorporated into the project."
  },
  {
    title: "Materials & Supplies",
    description: "Covers building materials, supplies, and equipment on-site or in temporary storage before they become part of the structure."
  },
  {
    title: "Soft Costs Coverage",
    description: "Pays for additional expenses like extended loan interest, architect fees, and permit extensions due to covered construction delays."
  },
  {
    title: "Debris Removal",
    description: "Covers the cost to remove debris from covered losses, including demolition costs for damaged portions of the project."
  },
  {
    title: "Transit Coverage",
    description: "Protection for materials and equipment while in transit to the construction site from suppliers and vendors."
  },
  {
    title: "Design Defect Coverage",
    description: "Coverage for losses resulting from errors in plans, specifications, or design that cause physical damage to the project."
  },
  {
    title: "Ordinance & Law",
    description: "Covers additional costs to comply with updated building codes when rebuilding damaged portions of the project."
  }
];

const programEnhancements = [
  "Automatic coverage increases for project value growth",
  "Green building and sustainable materials coverage",
  "Testing and commissioning coverage",
  "Pollution liability during construction",
  "Cyber coverage for smart building systems"
];

const whatWeCover = [
  "New Home Construction",
  "Home Renovations & Additions",
  "Custom Home Projects",
  "Modular & Manufactured Homes",
  "Accessory Dwelling Units",
  "Pool & Outdoor Structures",
  "Commercial Building Projects"
];

const whatSetsUsApart = [
  {
    icon: "🏗️",
    title: "Construction Expertise",
    description: "Our team understands construction risks, timelines, and the unique challenges of building projects from groundbreaking to completion."
  },
  {
    icon: "⚡",
    title: "Rapid Policy Issuance",
    description: "Quick turnaround on policies to meet construction schedule deadlines and lender requirements without project delays."
  },
  {
    icon: "🔄",
    title: "Seamless Transition",
    description: "Easy conversion from builder's risk to permanent homeowners insurance upon project completion with no coverage gaps."
  },
  {
    icon: "📊",
    title: "Progress Reporting",
    description: "Flexible reporting options that accommodate different construction phases and allow for coverage adjustments as projects evolve."
  }
];

const whoWeWorkWith = [
  "Custom Home Builders",
  "General Contractors",
  "Homeowners Building New Homes",
  "Renovation Contractors",
  "Property Developers",
  "Real Estate Investors"
];

export default function BuildersRiskInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏗️ Benchmark Insurance Group</h1>
          <h2>Builder's Risk Insurance</h2>
          <h3>Essential Protection for Your Construction Projects</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Building a new home or undertaking a major renovation is a significant investment that deserves comprehensive protection. At Benchmark Insurance Group, we provide builder's risk insurance that covers your construction project from foundation to completion.
          </p>
          <p>
            From material theft to weather damage, our builder's risk coverage protects your investment during the most vulnerable phase of your project—the construction period.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏠 What We Cover</h2>
          <p>Our builder's risk insurance programs are designed to protect:</p>
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
          <h2>👷 Built for Construction Professionals</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Protect Your Construction Investment</h2>
          <p>
            Don't let unexpected events derail your building project. Partner with Benchmark Insurance Group for builder's risk coverage that protects your investment from start to finish.
          </p>
          <p>Get your builder's risk quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 