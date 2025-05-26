import "./privateClient.scss";

const coreCoverages = [
  {
    title: "High-Value Home Insurance",
    description: "Covers custom-built residences, vacation homes, and luxury properties—including replacement cost, fine finishes, and water intrusion risks."
  },
  {
    title: "Personal Liability & Umbrella Coverage",
    description: "Provides elevated limits to protect against lawsuits, defamation claims, and liability exposure from property ownership or social activities."
  },
  {
    title: "Auto Insurance – Collector & Exotic Vehicles",
    description: "Covers luxury and collectible vehicles with agreed value, OEM parts, international transport, and specialized repair networks."
  },
  {
    title: "Jewelry, Fine Art & Collectibles",
    description: "Worldwide coverage for high-value personal items including artwork, wine collections, rare watches, and more—with optional vault and transit endorsements."
  },
  {
    title: "Private Aviation & Watercraft Insurance",
    description: "Covers private jets, helicopters, and yachts for both property and liability—including international travel and crew-related exposures."
  },
  {
    title: "Family Office & Trust-Owned Assets",
    description: "Coordinates complex insurance needs across entities, foundations, and generational wealth structures with dedicated advisory support."
  },
  {
    title: "Kidnap, Ransom & Cyber Extortion",
    description: "Discreet coverage solutions for global executives and high-profile families traveling internationally or facing digital threats."
  }
];

const advisoryServices = [
  {
    title: "Confidential Risk Assessments",
    description: "We perform detailed reviews of property schedules, lifestyle risks, and liability exposures—ensuring appropriate limits and risk transfer structures."
  },
  {
    title: "Policy Audits & Portfolio Consolidation",
    description: "We identify coverage gaps, duplication, and outdated endorsements—then streamline all lines into a unified and efficient portfolio."
  },
  {
    title: "Claims Concierge",
    description: "If you experience a loss, your personal advisor coordinates every step—from appraisal to adjuster negotiation to rebuild oversight."
  },
  {
    title: "Disaster Preparedness & Property Mitigation",
    description: "For high-risk locations (coastal, wildfire, earthquake), we provide wildfire defense, flood mitigation, and personal security planning support."
  }
];

const whoWeServe = [
  "Entrepreneurs, Executives & Family Offices",
  "High-Net-Worth & Ultra-High-Net-Worth Households",
  "Luxury Homeowners & Estate Managers",
  "Art Collectors & Jewelry Investors",
  "Yacht, Aircraft & Exotic Vehicle Owners",
  "Real Estate Investors with Personal Property Holdings",
  "Philanthropists & High-Profile Public Figures"
];

const whyChooseUs = [
  {
    title: "Confidential, Boutique-Level Service",
    description: "Work with a dedicated advisor who understands your life, your goals, and your values."
  },
  {
    title: "Exclusive Market Access",
    description: "We partner with carriers who specialize in high-net-worth clientele, such as Chubb, PURE, AIG Private Client, and Cincinnati."
  },
  {
    title: "Risk Management, Not Just Insurance",
    description: "Our team acts as your strategic partner—not just your policy administrator."
  }
];

export default function PrivateClient() {
  return (
    <section className="private-client-container">
      <div className="private-client">
        <div className="hero-section">
          <h1>🏡 Benchmark Insurance Group</h1>
          <h2>Private Client Insurance Services</h2>
          <h3>Tailored Protection for Extraordinary Lifestyles</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            We understand that your assets are not just valuable—they're personal. At Benchmark Insurance Group, 
            our Private Client Services provide discreet, customized insurance solutions for high-net-worth individuals 
            and families. Whether you're insuring a coastal estate, exotic vehicles, art collections, or a family office, 
            our approach blends expert risk management with white-glove service and exclusive carrier access.
          </p>
          <p>
            From daily peace of mind to catastrophic event protection, we help safeguard what you've worked so hard to build.
          </p>
        </div>

        <div className="clients-section">
          <h2>👤 Who We Serve</h2>
          <ul className="clients-list">
            {whoWeServe.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="coverage-section">
          <h2>🛡️ Core Coverages for Private Clients</h2>
          <div className="coverage-grid">
            {coreCoverages.map((coverage, index) => (
              <div key={index} className="coverage-card">
                <h3>{coverage.title}</h3>
                <p>{coverage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="advisory-section">
          <h2>🧠 Private Client Advisory Services</h2>
          <div className="advisory-grid">
            {advisoryServices.map((service, index) => (
              <div key={index} className="advisory-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose-section">
          <h2>🎯 Why Private Clients Choose Benchmark</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="why-choose-card">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2>📞 Protect What Truly Matters</h2>
          <p>
            Sophisticated clients deserve sophisticated protection. Benchmark Insurance Group is here to manage 
            your personal risk with the discretion, expertise, and service you expect.
          </p>
          <p>Schedule a confidential consultation today with our Private Client Team.</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </div>
    </section>
  );
} 