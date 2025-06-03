import React from 'react';
import './styles.scss';

const RiskManagement: React.FC = () => {
  return (
    <div className="risk-management">
      <div className="risk-management__header">
        <h1 className="risk-management__header-title">
          🛡️ Benchmark Insurance Group
        </h1>
        <h2 className="risk-management__header-subtitle">
          Risk Management & Advisory Services
        </h2>
        <p className="risk-management__header-tagline">
          Empowering Smart Decisions. Protecting Long-Term Value.
        </p>
      </div>

      <div className="risk-management__content">
        <section className="section">
          <h2 className="section__title">🌐 Overview</h2>
          <p className="section__text">
            At Benchmark Insurance Group, we go beyond policies. Our Risk Management & Advisory Services are designed to anticipate, mitigate, and strategically manage the complex risks that come with owning, developing, or managing commercial real estate and construction portfolios. Backed by industry-leading data, real-world operational insights, and a deep understanding of our clients' industries, we deliver actionable advice—not just paperwork.
          </p>
        </section>

        <section className="section">
          <h2 className="section__title">🔍 Key Features of Our Risk Management & Advisory Services</h2>
          <div className="feature-list">
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">1. Portfolio Risk Analysis</h3>
              <p className="feature-list__item-description">We assess risk across your entire real estate portfolio, identifying vulnerabilities in coverage, emerging exposures (e.g., flood, crime, fire, tenant liability), and market-specific insurance gaps. Our proprietary risk rating tool helps clients prioritize mitigation efforts.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">2. Property-Specific Risk Scoring</h3>
              <p className="feature-list__item-description">Our team provides location-specific assessments using advanced analytics and underwriting insights. This includes data on fire protection class, natural catastrophe zones, construction type risks, and historical claims data.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">3. Loss Control Consulting</h3>
              <p className="feature-list__item-description">We partner with clients to design and implement loss prevention strategies. This can include recommending fire suppression systems, security improvements, maintenance protocols, and safety trainings—particularly useful for multifamily, hospitality, and industrial assets.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">4. Contract & Lease Advisory</h3>
              <p className="feature-list__item-description">We review contracts, leases, and vendor agreements to ensure risk transfer clauses are properly written. This protects owners and asset managers from unnecessary liability and ensures compliance with lender and insurance requirements.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">5. Claims Strategy & Advocacy</h3>
              <p className="feature-list__item-description">Beyond filing claims, our advisory team helps structure your response to incidents to ensure optimal recovery. We manage relationships with adjusters, provide documentation guidance, and assist with subrogation opportunities.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">6. Insurance Budget Forecasting</h3>
              <p className="feature-list__item-description">We help CFOs and asset managers model insurance spend over time, factoring in renewal trends, market hardening, and portfolio growth.</p>
            </div>
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">7. Lender & Investor Coordination & Connection</h3>
              <p className="feature-list__item-description">We speak the language of lenders and investors. Our team can provide advisory memos, compliance guidance, and reporting tailored to third-party stakeholders in transactions, audits, and fundraising.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">🏗️ Who Benefits From These Services?</h2>
          <ul className="benefits-list">
            <li>Real Estate Portfolio Owners & Operators</li>
            <li>Construction Developers & General Contractors</li>
            <li>Hospitality & Hotel Management Groups</li>
            <li>Commercial Property Managers</li>
            <li>Private Equity and Real Estate Investment Firms</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">💡 Why Choose Benchmark?</h2>
          <div className="why-choose">
            <p className="why-choose__item"><strong>Real Experience:</strong> Our leadership comes from real estate, construction, and hospitality—so we understand what's at stake.</p>
            <p className="why-choose__item"><strong>Integrated Technology:</strong> Clients access risk insights and reports through our proprietary insurance dashboard.</p>
            <p className="why-choose__item"><strong>Dedicated Advisory Team:</strong> You're not just buying insurance—you're gaining a partner invested in your risk strategy.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">📞 Let's Talk Risk</h2>
          <p className="cta__text">
            Looking for smarter risk control strategies? Schedule a call with our Risk Advisory Team and see how Benchmark Insurance can help safeguard your future—beyond the policy.
          </p>
          <button className="cta__button" onClick={() => window.open('https://app.benchmarkbroker.com', '_blank')}>
            Schedule a Consultation
          </button>
        </section>
      </div>
    </div>
  );
};

export default RiskManagement; 