import "./personalInsurance.scss";

const coverageHighlights = [
  {
    title: "Term Life Insurance",
    description: "Affordable coverage for a specific period providing death benefits to protect your family's immediate financial needs during your most vulnerable years."
  },
  {
    title: "Whole Life Insurance",
    description: "Permanent coverage with guaranteed death benefits and cash value growth that builds wealth while providing lifelong protection."
  },
  {
    title: "Universal Life Insurance",
    description: "Flexible permanent life insurance allowing you to adjust premiums and death benefits while building cash value with competitive interest rates."
  },
  {
    title: "Final Expense Coverage",
    description: "Smaller face amount policies designed to cover funeral costs, medical bills, and other final expenses without burdening your family."
  },
  {
    title: "Disability Income Insurance",
    description: "Replaces a portion of your income if you become unable to work due to illness or injury, protecting your family's financial stability."
  },
  {
    title: "Accidental Death Coverage",
    description: "Additional protection providing extra benefits if death occurs due to an accident, often at affordable premium rates."
  },
  {
    title: "Living Benefits Riders",
    description: "Access to death benefits while living if diagnosed with terminal illness, chronic illness, or critical illness conditions."
  }
];

const programEnhancements = [
  "Accelerated death benefits for terminal illness",
  "Waiver of premium during disability",
  "Child term life insurance riders",
  "Long-term care benefit options",
  "Return of premium term life options"
];

const whatWeCover = [
  "Young Families & New Parents",
  "Single Income Households",
  "Business Owners & Executives",
  "Retirees & Estate Planning",
  "Mortgage & Debt Protection",
  "College Funding Strategies",
  "Multi-Generational Wealth Transfer"
];

const whatSetsUsApart = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family-First Approach",
    description: "We help you calculate the right amount of coverage to protect your family's lifestyle, education goals, and long-term financial security."
  },
  {
    icon: "💼",
    title: "Business Protection",
    description: "Specialized coverage for business owners including key person insurance, buy-sell agreements, and business loan protection."
  },
  {
    icon: "📊",
    title: "Needs Analysis",
    description: "Comprehensive financial analysis to determine optimal coverage amounts and policy types based on your unique situation and goals."
  },
  {
    icon: "🏥",
    title: "Health Accommodations",
    description: "Access to carriers with competitive rates for various health conditions and simplified issue policies for qualifying applicants."
  }
];

const whoWeWorkWith = [
  "New Parents & Growing Families",
  "High-Income Professionals",
  "Business Owners & Entrepreneurs",
  "Estate Planning Clients",
  "Single Parents",
  "Multi-Generational Families"
];

export default function LifeInsurance() {
  return (
    <section className="personal-insurance-container">
      <div className="personal-insurance">
        <div className="hero-section">
          <h1>❤️ Benchmark Insurance Group</h1>
          <h2>Life Insurance</h2>
          <h3>Protect Your Family's Financial Future</h3>
        </div>

        <div className="overview-section">
          <h2>🌐 Overview</h2>
          <p>
            Life insurance is one of the most important financial decisions you'll make—ensuring your loved ones are financially protected when they need it most. At Benchmark Insurance Group, we provide comprehensive life insurance solutions that fit your budget and protect your family's future.
          </p>
          <p>
            From term life for young families to whole life for wealth building, our life insurance programs provide peace of mind and financial security for every stage of life.
          </p>
        </div>

        <div className="coverage-section">
          <h2>👨‍👩‍👧‍👦 Who We Protect</h2>
          <p>Our life insurance programs are designed for:</p>
          <ul className="coverage-list">
            {whatWeCover.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="highlights-section">
          <h2>📋 Coverage Options</h2>
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
          <h2>🛡️ Policy Enhancements</h2>
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
          <h2>💕 Built for Life's Important Moments</h2>
          <p>We work with:</p>
          <ul className="clients-list">
            {whoWeWorkWith.map((client, index) => (
              <li key={index}>{client}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section">
          <h2>📞 Secure Your Family's Tomorrow</h2>
          <p>
            Your family's financial security shouldn't be left to chance. Partner with Benchmark Insurance Group for life insurance that provides lasting protection and peace of mind.
          </p>
          <p>Get your life insurance quote today.</p>
          <button className="cta-button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>Get Quote</button>
        </div>
      </div>
    </section>
  );
} 