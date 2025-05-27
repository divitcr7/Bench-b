import React from 'react';
import './styles.scss';

const PortfolioManagement: React.FC = () => {
  return (
    <div className="portfolio-management">
      <div className="portfolio-management__header">
        <h1 className="portfolio-management__header-title">
          📊 Benchmark Insurance Group
        </h1>
        <h2 className="portfolio-management__header-subtitle">
          Comprehensive Portfolio Management & Risk Solutions
        </h2>
        <p className="portfolio-management__header-tagline">
          Strategic Risk Management for Your Entire Property Portfolio.
        </p>
      </div>

      <div className="portfolio-management__content">
        <section className="section">
          <h2 className="section__title">🌐 Overview</h2>
          <p className="section__text">
            Managing a diverse property portfolio requires a strategic approach to risk management. At Benchmark Insurance Group, we provide comprehensive portfolio management services that help you optimize coverage, reduce costs, and protect your assets across multiple properties and locations.
          </p>
          <p className="section__text">
            Our portfolio management solutions are designed to streamline your insurance operations while ensuring maximum protection for your entire real estate portfolio.
          </p>
        </section>

        <section className="section">
          <h2 className="section__title">🔑 Key Service Components</h2>
          <div className="feature-list">
            <div className="feature-list__item">
              <h3 className="feature-list__item-title">1. Portfolio Risk Analysis</h3>
              <p className="feature-list__item-description">
                Our experts conduct thorough portfolio-wide risk assessments including:
              </p>
              <ul className="feature-list__item-list">
                <li>Property-specific risk profiles</li>
                <li>Geographic exposure analysis</li>
                <li>Occupancy and usage patterns</li>
                <li>Historical claims data review</li>
                <li>Market condition impact assessment</li>
              </ul>
              <p className="feature-list__item-description">
                We provide detailed risk scoring and prioritization for your entire portfolio.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">2. Coverage Optimization</h3>
              <p className="feature-list__item-description">
                We help optimize your insurance coverage across the portfolio:
              </p>
              <ul className="feature-list__item-list">
                <li>Policy consolidation strategies</li>
                <li>Deductible optimization</li>
                <li>Coverage gap identification</li>
                <li>Premium allocation analysis</li>
              </ul>
              <p className="feature-list__item-description">
                Our goal is to ensure comprehensive coverage while eliminating redundancies.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">3. Claims Management</h3>
              <p className="feature-list__item-description">
                Our centralized claims management system provides:
              </p>
              <ul className="feature-list__item-list">
                <li>24/7 claims reporting</li>
                <li>Dedicated claims advocate</li>
                <li>Claims tracking dashboard</li>
                <li>Loss history analysis</li>
                <li>Recovery optimization</li>
              </ul>
              <p className="feature-list__item-description">
                We ensure efficient claims handling and maximum recovery for your portfolio.
              </p>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">4. Risk Mitigation Strategies</h3>
              <p className="feature-list__item-description">
                We develop and implement portfolio-wide risk reduction programs:
              </p>
              <ul className="feature-list__item-list">
                <li>Property maintenance schedules</li>
                <li>Safety protocol standardization</li>
                <li>Vendor management programs</li>
                <li>Emergency response coordination</li>
              </ul>
            </div>

            <div className="feature-list__item">
              <h3 className="feature-list__item-title">5. Portfolio Analytics Dashboard</h3>
              <p className="feature-list__item-description">
                Access real-time portfolio insights through our digital platform:
              </p>
              <ul className="feature-list__item-list">
                <li>Risk exposure metrics</li>
                <li>Claims performance tracking</li>
                <li>Cost allocation analysis</li>
                <li>Compliance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">🏢 Portfolio Types We Manage</h2>
          <ul className="benefits-list">
            <li>Commercial Real Estate Portfolios</li>
            <li>Multifamily Property Groups</li>
            <li>Mixed-Use Developments</li>
            <li>Industrial & Retail Centers</li>
            <li>Hospitality & Resort Properties</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section__title">⚡ Why Choose Our Portfolio Management?</h2>
          <div className="why-choose">
            <p className="why-choose__item">
              <strong>Holistic Approach:</strong> We manage your entire portfolio as an integrated system, not just individual properties.
            </p>
            <p className="why-choose__item">
              <strong>Data-Driven Decisions:</strong> Our analytics provide actionable insights for portfolio optimization.
            </p>
            <p className="why-choose__item">
              <strong>Cost Efficiency:</strong> We help reduce overall insurance costs while maintaining comprehensive coverage.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">📘 Optimize Your Portfolio Today</h2>
          <p className="cta__text">
            Take control of your property portfolio's risk management with Benchmark Insurance Group's comprehensive portfolio management services.
          </p>
          <p className="cta__text">
            Schedule a portfolio review with our expert team.
          </p>
          <button className="cta__button">
            Schedule Portfolio Review
          </button>
        </section>
      </div>
    </div>
  );
};

export default PortfolioManagement; 