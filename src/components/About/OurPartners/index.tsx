import "./ourpartners.scss";

const partners = [
  {
    category: "Contractors & Subcontractors",
    icon: "🏢",
    services: [
      "Insurance restoration projects",
      "Loss prevention upgrades (sprinklers, roofing, waterproofing)",
      "Jobsite safety and compliance support"
    ]
  },
  {
    category: "Real Estate Developers & Operators",
    icon: "📄",
    services: [
      "Ground-up multifamily, mixed-use, and commercial projects",
      "Risk planning for phased or adaptive reuse projects",
      "Joint venture and vertically integrated insurance strategies"
    ]
  },
  {
    category: "Banks, Lenders & Financial Institutions",
    icon: "💳",
    services: [
      "Regional and national banks",
      "Private equity lenders and credit funds",
      "Lender coverage compliance and escrow documentation"
    ]
  },
  {
    category: "Property Managers & Syndicators",
    icon: "🏠",
    services: [
      "Portfolio-wide coverage strategies",
      "Certificate management automation",
      "Risk assessments for investor reporting"
    ]
  },
  {
    category: "Legal, Compliance & Advisory Experts",
    icon: "🤝",
    services: [
      "Contract and lease review for risk transfer optimization",
      "Claims subrogation and coverage disputes",
      "Regulatory and E&O mitigation guidance"
    ]
  },
  {
    category: "Emergency Vendors & Claims Support",
    icon: "🏃‍♂️",
    services: [
      "24/7 disaster response and mitigation",
      "Fire/flood restoration and environmental remediation",
      "Structural rebuild and loss documentation"
    ]
  },
  {
    category: "Insurance Carriers & Programs",
    icon: "🛡️",
    services: [
      "Competitive commercial property and liability programs",
      "Custom programs for real estate, construction, hospitality, and manufacturing",
      "Exclusive MGA and wholesale relationships for hard-to-place risks",
      "Captive and alternative risk financing structures"
    ]
  }
];

const advantages = [
  "Faster turnaround on urgent needs",
  "Pre-vetted service quality and insurance compliance",
  "Integrated support during claims, renovations, or acquisitions",
  "Local expertise with national scalability"
];

export default function OurPartners() {
  return (
    <section className="partners-container">
      <div className="partners padding-container">
        <h2>Our Partners</h2>
        <h5>Strategic Alliances That Strengthen Every Client Outcome</h5>
        
        <div className="partners-intro">
          <p>
            At Benchmark Insurance Group, we believe in the power of partnerships. By surrounding our clients with a network of trusted, specialized partners, we extend our value far beyond the policy. From construction sites to closing tables, from investment strategies to emergency response, our curated partnerships help clients protect and grow with confidence.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-header">
                <span className="partner-icon">{partner.icon}</span>
                <h3>{partner.category}</h3>
              </div>
              <ul className="partner-services">
                {partner.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="partners-advantage">
          <h3>💡 The Benchmark Advantage</h3>
          <p>Our partner ecosystem gives clients:</p>
          <ul>
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>

        <div className="partners-cta">
          <h3>💼 Interested in Partnering with Benchmark?</h3>
          <p>We welcome collaboration with:</p>
          <ul>
            <li>Contractors and service providers</li>
            <li>Legal and financial advisors</li>
            <li>Technology vendors in risk, real estate, or construction</li>
            <li>Insurance carriers, MGAs, and program administrators</li>
          </ul>
          <p>Submit your interest or schedule a discovery call:</p>
          <a href="mailto:partners@benchmarkbroker.com">📧 partners@benchmarkbroker.com</a>
          <p className="cta-tagline">Let's build a stronger, smarter future together.</p>
        </div>
      </div>
    </section>
  );
} 