import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Dwelling Protection",
    description: "Covers the structure of your home including walls, roof, built-in appliances, and attached structures against fire, windstorm, hail, and other covered perils."
  },
  {
    title: "Personal Property Coverage",
    description: "Protects your belongings including furniture, electronics, clothing, and personal items both inside your home and anywhere in the world."
  },
  {
    title: "Liability Protection",
    description: "Covers legal expenses and damages if someone is injured on your property or if you accidentally cause damage to others' property."
  },
  {
    title: "Additional Living Expenses",
    description: "Pays for temporary housing, meals, and other essential expenses if your home becomes uninhabitable due to a covered loss."
  },
  {
    title: "Medical Payments",
    description: "Covers medical expenses for guests injured on your property, regardless of fault, helping maintain relationships and prevent lawsuits."
  },
  {
    title: "Identity Theft Protection",
    description: "Reimburses expenses related to restoring your identity and covers legal fees associated with identity theft incidents."
  },
  {
    title: "Water Backup Coverage",
    description: "Protects against water damage from sewer or drain backups, sump pump failures, and water that enters through the foundation."
  }
];

const programEnhancements = [
  "Guaranteed replacement cost coverage",
  "Extended replacement cost up to 150% of dwelling limit",
  "Ordinance or law coverage for building code upgrades",
  "Scheduled personal property for high-value items",
  "Home business coverage for equipment and liability"
];

const whatWeCover = [
  "Single-Family Homes",
  "Townhomes & Condominiums",
  "Mobile & Manufactured Homes",
  "Vacation & Secondary Homes",
  "Historic & Luxury Properties",
  "New Construction Homes",
  "Rental Properties You Own"
];

const whatSetsUsApart = [
  {
    icon: "🏠",
    title: "Comprehensive Home Assessment",
    description: "We evaluate your home's unique features, location risks, and personal needs to ensure you have adequate coverage for your specific situation."
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description: "Our relationships with multiple insurance carriers allow us to find you the best coverage at competitive rates with available discounts."
  },
  {
    icon: "🛡️",
    title: "Claims Support",
    description: "When you need to file a claim, our team advocates for you throughout the process to ensure fair and prompt settlement."
  },
  {
    icon: "📱",
    title: "Digital Policy Management",
    description: "Access your policy documents, make payments, and file claims through our secure online platform available 24/7."
  }
];

const whoWeWorkWith = [
  "First-Time Homebuyers",
  "Growing Families",
  "Empty Nesters",
  "High-Net-Worth Homeowners",
  "Real Estate Investors",
  "Military Families"
];

export default function HomeownersInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>🏡 Benchmark Insurance Group</h1>
          <h2>Homeowners Insurance</h2>
          <h3>Protect Your Home and Everything Inside It</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Your home is more than just a building—it's where you create memories, build your life, and store your most treasured possessions. At Benchmark Insurance Group, we provide comprehensive homeowners insurance that protects your dwelling, personal property, and financial security against unexpected events.
          </p>
          <p>
            From natural disasters to theft and liability claims, we ensure you have the right coverage to rebuild, replace, and recover when life throws you a curveball.
          </p>
        </div>

        <div className="coverage-section">
          <h2>🏠 What We Cover</h2>
          <p>Our homeowners insurance programs are designed to protect:</p>
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
          <h2>👨‍👩‍👧‍👦 Built for Homeowners Like You</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Protect Your Most Important Investment</h2>
          <p>
            Your home deserves protection that's as unique as you are. Partner with Benchmark Insurance Group for homeowners insurance that gives you peace of mind and comprehensive coverage.
          </p>
          <p>Get your personalized quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 