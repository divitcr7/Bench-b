import "./benchmarkNetwork.scss";
import { Meta } from "@/components";

const BenchmarkNetwork = () => {
  const metadata = {
    title: "Benchmark Network - Strategic Ecosystem of Growth and Protection",
    description: "Access Benchmark's network of trusted professionals including contractors, developers, lenders, and strategic advisors.",
  };

  const networkPartners = [
    {
      category: "Contractors & Subcontractors",
      icon: "🏗️",
      specialties: [
        "Ground-up construction",
        "Renovation and adaptive reuse",
        "Tenant improvements",
        "Insurance restoration & claims work"
      ],
      description: "Pre-vetted for quality, compliance, and coverage."
    },
    {
      category: "Real Estate Developers",
      icon: "🏢",
      specialties: [
        "Joint venture opportunities",
        "Project feasibility",
        "Insurance and risk structuring for new developments"
      ],
      description: "Specializing in multifamily, hospitality, retail, and mixed-use projects."
    },
    {
      category: "Banks & Lenders",
      icon: "🏦",
      specialties: [
        "Bridge loans",
        "Construction financing",
        "Value-add and repositioning strategies",
        "DSCR-sensitive underwriting"
      ],
      description: "Strong relationships with commercial lenders and private capital groups."
    },
    {
      category: "Passive Investors & LPs",
      icon: "💰",
      specialties: [
        "Passive equity investors",
        "Family offices",
        "1031 exchange buyers",
        "LPs seeking tax-advantaged real estate exposure"
      ],
      description: "Prioritizing deals with well-insured, professionally managed assets."
    },
    {
      category: "Strategic Advisors & Consultants",
      icon: "🤝",
      specialties: [
        "Real estate attorneys",
        "Risk management consultants",
        "Tax credit specialists",
        "Environmental and engineering firms"
      ],
      description: "Experts helping strengthen client positions in acquisitions, developments, and dispositions."
    },
    {
      category: "Suppliers & Facility Vendors",
      icon: "🔧",
      specialties: [
        "Security and access control firms",
        "Fire protection and sprinkler companies",
        "Roofing and waterproofing specialists",
        "HVAC and energy optimization providers"
      ],
      description: "Insurance-compliant and performance-proven vendors."
    }
  ];

  const benefits = [
    "Faster execution on projects and acquisitions",
    "Better terms from lenders and investors",
    "Trusted relationships with proven vendors",
    "Strategic alignment across insurance, risk, and real estate operations"
  ];

  return (
    <>
      <Meta meta={metadata} />
      <section className="network-container">
        <div className="network padding-container">
          <div className="network-hero">
            <h1>🌐 The Benchmark Network</h1>
            <h2>More Than Insurance—A Strategic Ecosystem of Growth and Protection</h2>
          </div>

          <div className="network-intro">
            <h3>🤝 What Is the Benchmark Network?</h3>
            <p>
              At Benchmark Insurance Group, we do more than manage risk—we open doors. Through years of working alongside developers, property owners, and operators, we've built a robust network of trusted professionals that we extend to our clients as a value-added resource.
            </p>
            <p>
              From top-tier contractors to strategic lenders and vetted suppliers, the Benchmark Network gives you access, efficiency, and confidence to scale smarter.
            </p>
          </div>

          <div className="network-partners">
            <h3>🏗️ Who's in Our Network?</h3>
            <div className="partners-grid">
              {networkPartners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-header">
                    <span className="partner-icon">{partner.icon}</span>
                    <h4>{partner.category}</h4>
                  </div>
                  <p className="partner-description">{partner.description}</p>
                  <ul className="partner-specialties">
                    {partner.specialties.map((specialty, idx) => (
                      <li key={idx}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="network-benefits">
            <h3>🎯 Why It Matters to Our Clients</h3>
            <p>The Benchmark Network provides clients with:</p>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="network-cta">
            <h3>🛠️ Built Through Experience. Shared Through Partnership.</h3>
            <p>
              Our network didn't happen overnight—it's the product of years in the trenches, across insurance, real estate, construction, and hospitality. And we're proud to share it with our clients.
            </p>
            <p>Want access to our network for your next project, purchase, or portfolio strategy?</p>
            <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Let's Talk</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenchmarkNetwork; 