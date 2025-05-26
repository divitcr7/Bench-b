import "./processSteps.scss";

const ProcessSteps = () => {
  const accountManagementSteps = [
    {
      id: 1,
      title: "Discovery & Intake",
      tagline: "Understand the client before quoting the client.",
      steps: [
        "One-on-one discovery call with a dedicated account manager or producer",
        "Review of business operations, existing coverage, risk concerns, and growth plans",
        "Collection of documentation (SOVs, current policies, claims history, lender requirements)",
        "Entry into our CRM + risk scoring using proprietary tools"
      ]
    },
    {
      id: 2,
      title: "Coverage Analysis & Strategy",
      tagline: "We build coverage like you build property: intentionally.",
      steps: [
        "Comprehensive review of policy exclusions, gaps, limits, and overlap",
        "Carrier submission strategy tailored to risk appetite and pricing goals",
        "Side-by-side comparison of options with clear recommendations",
        "Optional risk control walkthrough or underwriting visit for complex risks"
      ]
    },
    {
      id: 3,
      title: "Quote Delivery & Program Presentation",
      tagline: "Clear. Transparent. No surprises.",
      steps: [
        "Presentation of coverage options, enhancements, and savings opportunities",
        "Education on key terms, deductibles, and claim scenarios",
        "Delivery of summary of insurance + proposal document",
        "Client Q&A and electronic sign-off"
      ]
    },
    {
      id: 4,
      title: "Onboarding & Activation",
      tagline: "Welcome to Benchmark. We're your risk team now.",
      steps: [
        "Issuance of certificates, endorsements, and policy binders",
        "COI automation setup for fast future requests",
        "Introduction to claims and service contacts",
        "Walkthrough of online portal access (e.g., InsureInvestors dashboard)"
      ]
    },
    {
      id: 5,
      title: "Ongoing Service & Support",
      tagline: "We don't disappear after the bind.",
      steps: [
        "24/7 access to service team for changes, billing, and document needs",
        "Quarterly or semi-annual policy check-ins",
        "Live catastrophe notifications and incident response tools",
        "Dedicated claims advocacy and tracking from FNOL to settlement"
      ]
    },
    {
      id: 6,
      title: "Renewal & Long-Term Planning",
      tagline: "Better each year.",
      steps: [
        "Renewal strategy begins 90 days out",
        "Loss run review + premium forecasting",
        "Market intelligence to assess carrier changes",
        "Strategy meeting to align on retention, repricing, or re-marketing",
        "Delivery of updated 12-month risk plan"
      ]
    }
  ];

  const rateNegotiationSteps = [
    {
      id: 1,
      title: "Pre-Market Strategy & Risk Preparation",
      tagline: "We negotiate with preparation, not just persuasion.",
      steps: [
        "Conduct a detailed risk assessment using proprietary tools and industry benchmarks",
        "Review historical loss runs and claims activity to highlight improvements or mitigations",
        "Develop a narrative around the client's risk profile, improvements, and future strategy",
        "Package submission with all necessary underwriting data, including property SOVs, risk control reports, and financials"
      ]
    },
    {
      id: 2,
      title: "Targeted Carrier Marketing",
      tagline: "We market your risk to the right markets.",
      steps: [
        "Identify top-performing carriers based on industry, region, and historical appetite",
        "Present tailored submissions to a select group of A-rated carriers for focused bidding",
        "Maintain competitive pressure without flooding the market",
        "Request multiline consideration or program bundling for discounts where possible"
      ]
    },
    {
      id: 3,
      title: "Underwriter Engagement",
      tagline: "We don't wait for quotes—we shape them.",
      steps: [
        "Set up direct meetings or calls with underwriters to walk through the submission",
        "Proactively respond to questions and provide additional data to improve quote positioning",
        "Use recent risk improvements, client initiatives, and program enhancements to push for better terms",
        "Advocate for inclusion of key endorsements, deductible options, and favorable terms"
      ]
    },
    {
      id: 4,
      title: "Comparative Quote Analysis",
      tagline: "We evaluate quotes through the lens of long-term value.",
      steps: [
        "Analyze all proposals for coverage completeness, pricing accuracy, and exclusions",
        "Create a side-by-side comparison that highlights hidden costs or gaps",
        "Run total cost of risk (TCOR) models to determine optimal program structure",
        "Present top options to client with context, risks, and recommendations"
      ]
    },
    {
      id: 5,
      title: "Final Negotiation & Lock-In",
      tagline: "We don't just accept a quote—we push for better.",
      steps: [
        "Re-engage top carriers for final round pricing",
        "Request discretionary credits, loyalty pricing, or renewal bonuses based on history",
        "Adjust limits, deductibles, or structure to align with the client's risk appetite",
        "Bind coverage with written confirmation of negotiated terms and pricing"
      ]
    }
  ];

  const metrics = [
    "Response time to requests (goal: <4 hours)",
    "Claims resolution satisfaction",
    "Renewal retention rates",
    "Average premium reduction year over year",
    "Policy accuracy & compliance rates"
  ];

  return (
    <section className="process-steps-container">
      <div className="process-steps padding-container">
        {/* Account Management Process */}
        <div className="process-section">
          <h2>Our Account Management Process</h2>
          <p className="section-intro">
            At Benchmark Insurance Group, we believe every client deserves more than just a policy—they deserve a strategy, a team, and a platform that evolves with them. Here's a step-by-step overview of our account management process designed to deliver clarity, speed, and long-term value.
          </p>
          <div className="steps-grid">
            {accountManagementSteps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-header">
                  <span className="step-number">{`0${step.id}`}</span>
                  <h3>{step.title}</h3>
                  <p className="tagline">{step.tagline}</p>
                </div>
                <ul className="step-details">
                  {step.steps.map((item, index) => (
                    <li key={index}>
                      <img src="/assets/icons/gold-diamond.png" alt="bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Metrics */}
        <div className="metrics-section">
          <h3>Client Success Metrics We Track</h3>
          <ul>
            {metrics.map((metric, index) => (
              <li key={index}>
                <img src="/assets/icons/gold-diamond.png" alt="bullet" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rate Negotiation Process */}
        <div className="process-section">
          <h2>Rate Negotiation Process</h2>
          <p className="section-intro">
            At Benchmark Insurance Group, we take a proactive and strategic approach to rate negotiation to ensure our clients get the most competitive pricing without compromising coverage. Our process is designed to leverage risk data, carrier relationships, and underwriting insight to deliver optimal results.
          </p>
          <div className="steps-grid">
            {rateNegotiationSteps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-header">
                  <span className="step-number">{`0${step.id}`}</span>
                  <h3>{step.title}</h3>
                  <p className="tagline">{step.tagline}</p>
                </div>
                <ul className="step-details">
                  {step.steps.map((item, index) => (
                    <li key={index}>
                      <img src="/assets/icons/gold-diamond.png" alt="bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Value Beyond Price */}
        <div className="value-section">
          <h3>Value Beyond Price</h3>
          <ul>
            <li>
              <img src="/assets/icons/gold-diamond.png" alt="bullet" />
              <span>Introduce service enhancements: claims advocacy, portal access, safety tools</span>
            </li>
            <li>
              <img src="/assets/icons/gold-diamond.png" alt="bullet" />
              <span>Coordinate with lender, investor, or lease partners on compliance</span>
            </li>
            <li>
              <img src="/assets/icons/gold-diamond.png" alt="bullet" />
              <span>Identify midterm premium reduction opportunities (e.g., CAPEX improvements)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 